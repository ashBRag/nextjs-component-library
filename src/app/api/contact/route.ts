// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  generateContactConfirmationEmail,
  generateInternalNotificationEmail,
} from "@/lib/email-templates/contact-confirmation";

interface ContactFormData {
  name: string;
  email: string;
  workType: string;
  projectDesc: string;
  hasBookedMeeting?: boolean;
}

interface ContactInfo {
  email: string;
  whatsapp?: string;
  linkedin: string;
  discord?: string;
  portfolio: string;
  github: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.workType || !body.projectDesc) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const contactInfo: ContactInfo = {
      email: "aishwarya.b.raghavan@gmail.com",
      whatsapp: "https://wa.me/+916301706765",
      linkedin: "https://linkedin.com/in/aishwaryab-r-a9693457",
      discord: "https://discord.com/users/your-discord-id",
      portfolio: "https://your-portfolio.com",
      github: "https://github.com/your-github",
    };

    // Generate email content using imported template
    const clientEmailContent = generateContactConfirmationEmail(
      body,
      contactInfo,
      process.env.CALENDLY_URL || "",
    );

    const internalEmailContent = generateInternalNotificationEmail(body);

    // Send confirmation email to client
    await transporter.sendMail({
      from: {
        name: "Aishwarya B R",
        address: process.env.EMAIL_USER!,
      },
      to: body.email,
      subject: `Your ${body.workType} request has been received - Aishwarya B R`,
      html: clientEmailContent,
    });

    // Send notification email to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New ${body.workType} inquiry from ${body.name}`,
      html: internalEmailContent,
    });

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Email sending failed:", error);

    // More detailed error logging
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    }

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 },
    );
  }
}

// Optional: Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
