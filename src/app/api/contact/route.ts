// // app/api/contact/route.ts - Debug version
// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { google } from "googleapis";

// const OAuth2 = google.auth.OAuth2;

// interface ContactFormData {
//   name: string;
//   email: string;
//   workType: string;
//   projectDesc: string;
//   hasBookedMeeting?: boolean;
// }

// const createTransporter = async () => {
//   // Debug: Check if environment variables exist
//   console.log("Environment variables check:");
//   console.log("EMAIL_CLIENT_ID exists:", process.env.EMAIL_CLIENT_ID);
//   console.log("EMAIL_CLIENT_SECRET exists:", process.env.EMAIL_CLIENT_SECRET);
//   console.log("EMAIL_REFRESH_TOKEN exists:", process.env.EMAIL_REFRESH_TOKEN);
//   console.log("EMAIL exists:", process.env.EMAIL);

//   const oauth2Client = new OAuth2(
//     process.env.EMAIL_CLIENT_ID,
//     process.env.EMAIL_CLIENT_SECRET,
//     "https://developers.google.com/oauthplayground"
//   );

//   oauth2Client.setCredentials({
//     refresh_token: process.env.EMAIL_REFRESH_TOKEN
//   });

//   try {
//     // More detailed error handling
//     const accessToken = await new Promise((resolve, reject) => {
//       oauth2Client.getAccessToken((err, token) => {
//         if (err) {
//           console.error("OAuth2 getAccessToken error:", JSON.stringify(err));
//           reject(`Failed to create access token: ${err.message || err}`);
//         } else {
//           console.log("Access token created successfully");
//           resolve(token);
//         }
//       });
//     });

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.EMAIL,
//         accessToken,
//         clientId: process.env.EMAIL_CLIENT_ID,
//         clientSecret: process.env.EMAIL_CLIENT_SECRET,
//         refreshToken: process.env.EMAIL_REFRESH_TOKEN
//       }
//     });

//     // Test the transporter
//     await transporter.verify();
//     console.log("Transporter verified successfully");

//     return transporter;
//   } catch (error) {
//     console.error("Error in createTransporter:", error);
//     throw error;
//   }
// };

// export async function POST(request: NextRequest) {
//   try {
//     const body: ContactFormData = await request.json();

//     // Validate required fields
//     if (!body.name || !body.email || !body.workType || !body.projectDesc) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(body.email)) {
//       return NextResponse.json(
//         { error: "Invalid email format" },
//         { status: 400 }
//       );
//     }

//     console.log("Creating transporter...");
//     const transporter = await createTransporter();
//     console.log("Transporter created successfully");

//     // Simple test email first
//     const testEmailOptions = {
//       from: process.env.EMAIL,
//       to: process.env.EMAIL, // Send to yourself first
//       subject: "Test Email from Contact Form",
//       html: `
//         <h2>Test Email</h2>
//         <p>From: ${body.name} (${body.email})</p>
//         <p>Work Type: ${body.workType}</p>
//         <p>Message: ${body.projectDesc}</p>
//       `
//     };

//     console.log("Sending test email...");
//     const result = await transporter.sendMail(testEmailOptions);
//     console.log("Email sent successfully:", result.messageId);

//     return NextResponse.json({
//       success: true,
//       message: "Test email sent successfully",
//       messageId: result.messageId
//     });

//   } catch (error) {
//     console.error("Email sending failed:", error);

//     if (error instanceof Error) {
//       console.error("Error details:", {
//         message: error.message,
//         stack: error.stack,
//       });
//     }

//     return NextResponse.json(
//       {
//         error: "Failed to send email",
//         details: error instanceof Error ? error.message : "Unknown error"
//       },
//       { status: 500 }
//     );
//   }
// }

// // Test endpoint to check OAuth2 setup
// export async function GET() {
//   try {
//     console.log("Testing OAuth2 setup...");

//     const oauth2Client = new OAuth2(
//       process.env.EMAIL_CLIENT_ID,
//       process.env.EMAIL_CLIENT_SECRET,
//       "https://developers.google.com/oauthplayground"
//     );

//     oauth2Client.setCredentials({
//       refresh_token: process.env.EMAIL_REFRESH_TOKEN
//     });

//     const accessToken = await new Promise((resolve, reject) => {
//       oauth2Client.getAccessToken((err, token) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(token);
//         }
//       });
//     });

//     return NextResponse.json({
//       success: true,
//       message: "OAuth2 setup is working",
//       hasAccessToken: !!accessToken
//     });

//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       error: error instanceof Error ? error.message : "OAuth2 setup failed"
//     }, { status: 500 });
//   }
// }

// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import {
  generateContactConfirmationEmail,
  generateInternalNotificationEmail,
} from "@/lib/email-templates/contact-confirmation";

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
  whatsapp?: string;
  linkedin: string;
  discord?: string;
  portfolio: string;
  github: string;
}

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.EMAIL_CLIENT_ID,
    process.env.EMAIL_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground",
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.EMAIL_REFRESH_TOKEN,
  });

  try {
    const accessToken = await new Promise<string>((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.error("OAuth2 getAccessToken error:", err);
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

    // Verify the transporter
    await transporter.verify();
    console.log("Email transporter verified successfully");

    return transporter;
  } catch (error) {
    console.error("Error creating transporter:", error);
    throw error;
  }
};

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

    // Create transporter
    const transporter = await createTransporter();

    // Contact info for email templates
    const contactInfo: ContactInfo = {
      email: "aishwarya.br.dev@gmail.com",
      whatsapp: "https://wa.me/+916301706765",
      linkedin: "https://linkedin.com/in/aishwaryab-r-a9693457",
      discord: "https://discord.com/users/your-discord-id",
      portfolio: "https://your-portfolio.com",
      github: "https://github.com/your-github",
    };

    // Generate email content using templates
    const clientEmailContent = generateContactConfirmationEmail(
      body,
      contactInfo,
      process.env.CALENDLY_URL || "",
    );

    const internalEmailContent = generateInternalNotificationEmail(body);

    // Send confirmation email to client
    const clientEmailResult = await transporter.sendMail({
      from: {
        name: "Aishwarya B R",
        address: process.env.EMAIL!,
      },
      to: body.email,
      subject: `Your ${body.workType} request has been received - Aishwarya B R`,
      html: clientEmailContent,
    });

    console.log("Client confirmation email sent:", clientEmailResult.messageId);

    // Send notification email to yourself
    const internalEmailResult = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New ${body.workType} inquiry from ${body.name}`,
      html: internalEmailContent,
    });

    console.log(
      "Internal notification email sent:",
      internalEmailResult.messageId,
    );

    return NextResponse.json({
      success: true,
      message:
        "Contact form submitted successfully. Check your email for confirmation.",
      clientMessageId: clientEmailResult.messageId,
      internalMessageId: internalEmailResult.messageId,
    });
  } catch (error) {
    console.error("Email sending failed:", error);

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
