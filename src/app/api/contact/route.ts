import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { logger as baseLogger } from "@/utils/logger";
import {
  generateContactConfirmationEmail,
  generateInternalNotificationEmail,
} from "@/lib/email-templates/contact-confirmation";

const logger = baseLogger.child({ module: "contact-api" });

const OAuth2 = google.auth.OAuth2;

interface ContactFormData {
  name: string;
  email: string;
  workType: string;
  projectDesc: string;
  timeline?: string;
  hasBookedMeeting?: boolean;
}

interface ContactInfo {
  email: string;
  linkedin: string;
  discord?: string;
  portfolio: string;
  github: string;
}
const contactInfo: ContactInfo = {
  email: "aishwarya.br.dev@gmail.com",
  linkedin: "https://linkedin.com/in/aishwarya-raghavan-a9693457",
  discord: "https://discord.com/users/your-discord-id",
  portfolio: "https://your-portfolio.com",
  github: "https://github.com/your-github",
};

const createTransporter = async (log: typeof logger) => {
  const oauth2Client = new OAuth2(
    process.env.EMAIL_CLIENT_ID,
    process.env.EMAIL_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.EMAIL_REFRESH_TOKEN,
  });

  try {
    const accessToken = await new Promise<string>((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          log.error({ err }, "OAuth2 getAccessToken failed");
          reject(`Failed to create access token: ${err.message || err}`);
        } else {
          resolve(token as string);
        }
      });
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        accessToken,
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN,
      },
    });

    await transporter.verify();
    log.info("SMTP transporter verified successfully");

    return transporter;
  } catch (error) {
    log.error({ err: error }, "Failed to create SMTP transporter");
    throw error;
  }
};

export async function POST(request: NextRequest) {
  const requestId =
    request.headers.get("x-request-id") ?? // set by most reverse proxies / API gateways
    request.headers.get("x-vercel-id") ?? // set automatically by Vercel
    crypto.randomUUID();
  const reqLogger = logger.child({ requestId });

  reqLogger.info("Contact form submission received");

  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.workType || !body.projectDesc) {
      reqLogger.warn(
        {
          fields: {
            name: !!body.name,
            email: !!body.email,
            workType: !!body.workType,
            projectDesc: !!body.projectDesc,
          },
        },
        "Validation failed: missing required fields"
      );
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      reqLogger.warn(
        { email: body.email },
        "Validation failed: invalid email format"
      );
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    reqLogger.info(
      {
        workType: body.workType,
        hasTimeline: !!body.timeline,
        hasBookedMeeting: body.hasBookedMeeting,
      },
      "Validation passed, creating transporter"
    );

    const transporter = await createTransporter(reqLogger);

    const clientEmailContent = generateContactConfirmationEmail(
      body,
      contactInfo,
      process.env.CALENDLY_URL || ""
    );
    const internalEmailContent = generateInternalNotificationEmail(body);

    // Send confirmation email to client
    const clientEmailResult = await transporter.sendMail({
      from: { name: "Aishwarya B R", address: process.env.EMAIL! },
      to: body.email,
      subject: `Your ${body.workType} request has been received - Aishwarya B R`,
      html: clientEmailContent,
    });
    reqLogger.info(
      { messageId: clientEmailResult.messageId },
      "Confirmation email sent to client"
    );

    // Send notification email to yourself
    const internalEmailResult = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New ${body.workType} inquiry from ${body.name}`,
      html: internalEmailContent,
    });
    reqLogger.info(
      { messageId: internalEmailResult.messageId },
      "Internal notification email sent"
    );

    reqLogger.info(
      { workType: body.workType },
      "Contact form processed successfully"
    );

    return NextResponse.json({
      success: true,
      message:
        "Contact form submitted successfully. Check your email for confirmation.",
      clientMessageId: clientEmailResult.messageId,
      internalMessageId: internalEmailResult.messageId,
    });
  } catch (error) {
    reqLogger.error(
      { err: error, stack: error instanceof Error ? error.stack : undefined },
      "Contact form processing failed"
    );

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  logger.warn("GET request attempted on contact endpoint");
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
