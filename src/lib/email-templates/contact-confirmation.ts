interface EmailTemplateData {
    name: string;
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
  
  export function generateContactConfirmationEmail(
    data: EmailTemplateData,
    contactInfo: ContactInfo,
    calendlyUrl: string
  ): string {
    const { name, workType, projectDesc, hasBookedMeeting } = data;
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Request Received</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .highlight {
            color: #0066cc;
            font-weight: bold;
          }
          .project-summary {
            background: #f5f5f5;
            padding: 15px;
            border-left: 3px solid #0066cc;
            margin: 15px 0;
          }
          .meeting-cta {
            background: #0066cc;
            color: white;
            padding: 20px;
            text-align: center;
            margin: 25px 0;
          }
          .meeting-cta a {
            color: white;
            text-decoration: none;
            font-weight: bold;
          }
          .contact-links a {
            margin-right: 10px;
            color: #0066cc;
          }
        </style>
      </head>
      <body>
        <h1>Request Received!</h1>
        <p>Thanks for reaching out!</p>
  
        <p>Hey <span class="highlight">${name}</span>! 👋</p>
        
        <p>Thanks for reaching out about <strong>${workType}</strong> work. Your request has been received and is now in my queue for review.</p>
  
        <p><strong>📋 Your project summary:</strong></p>
        <div class="project-summary">
          ${projectDesc}
        </div>
          
        ${!hasBookedMeeting ? `
          <div class="meeting-cta">
            <p>⚡ Want to fast-track this?</p>
            <a href="${calendlyUrl}" target="_blank">
              📅 Book a 30-minute call
            </a>
            <p>Let's discuss your project in real-time!</p>
          </div>
        ` : `
          <div style="background: #e8f5e8; border: 1px solid #4caf50; padding: 20px; margin: 20px 0; text-align: center;">
            <p><strong>✅ Meeting already scheduled!</strong></p>
            <p>Looking forward to our call.</p>
          </div>
        `}
  
        <p><strong>📞 In the meantime, feel free to reach out:</strong></p>
        <div class="contact-links">
          <a href="mailto:${contactInfo.email}">📧 Email</a>
          <a href="${contactInfo.whatsapp}" target="_blank">💬 WhatsApp</a>
          <a href="${contactInfo.linkedin}" target="_blank">💼 LinkedIn</a>
          <a href="${contactInfo.discord}" target="_blank">🎮 Discord</a>
        </div>
  
        <hr>
        <p>Best regards,<br>
        <strong>Aishwarya B R</strong><br>
        Senior Full-Stack Developer | MERN Expert<br>
        🚀 Building scalable solutions, one line of code at a time</p>
        
        <p>
          <a href="${contactInfo.portfolio}">🌐 Portfolio</a> • 
          <a href="${contactInfo.github}">💻 GitHub</a>
        </p>
      </body>
      </html>
    `;
  }
  
  export function generateInternalNotificationEmail(data: EmailTemplateData): string {
    const { name, workType, projectDesc, hasBookedMeeting } = data;
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f9f9f9;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 30px;
          }
          .field {
            margin-bottom: 15px;
            padding: 10px;
            background: #f5f5f5;
            border-left: 3px solid #0066cc;
          }
          .field-label {
            font-weight: bold;
            margin-bottom: 5px;
          }
          .status {
            padding: 2px 8px;
            border-radius: 3px;
            font-size: 12px;
            font-weight: bold;
          }
          .status-yes {
            background: #e8f5e8;
            color: #2e7d32;
          }
          .status-no {
            background: #ffebee;
            color: #c62828;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>🚀 New ${workType} Inquiry</h2>
          <p>From your portfolio contact form</p>
  
          <div class="field">
            <div class="field-label">👤 Name</div>
            <div>${name}</div>
          </div>
  
          <div class="field">
            <div class="field-label">💼 Work Type</div>
            <div>${workType}</div>
          </div>
  
          <div class="field">
            <div class="field-label">📅 Meeting Booked</div>
            <div>
              <span class="${hasBookedMeeting ? 'status status-yes' : 'status status-no'}">
                ${hasBookedMeeting ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
  
          <div class="field">
            <div class="field-label">📝 Project Description</div>
            <div style="white-space: pre-wrap;">${projectDesc}</div>
          </div>
  
          <hr>
          <p style="text-align: center; color: #666; font-size: 14px;">
            Submitted at ${new Date().toLocaleString()}
          </p>
        </div>
      </body>
      </html>
    `;
  }