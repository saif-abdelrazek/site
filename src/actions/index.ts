import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
import nodemailer from "nodemailer";
import { getSecret } from "astro:env/server";

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email address"),
      subject: z.string().min(1, "Subject is required"),
      message: z.string().min(50, "Message must be at least 50 characters"),
      theme: z.enum(["light", "dark"]).optional().default("light"),
      lang: z.enum(["en", "ar"]).optional().default("en"),
    }),
    handler: async (input, context) => {
      const nodeEnv = getSecret("NODE_ENV");

      // Check environment variables in production
      if (nodeEnv !== "development" && (!getSecret("EMAIL_ADDRESS") || !getSecret("EMAIL_PASSWORD"))) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Email configuration is not set up properly.",
        });
      }

      // Owner notification email
      const msgToMe = `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; color: #0f172a; padding: 32px; border-radius: 18px; max-width: 640px; margin: auto; border: 1px solid #e0e7ef; box-shadow: 0 4px 24px 0 #0369a120;">
    <h2 style="margin-top:0; color:#0369a1; font-size:2rem;">📬 New Contact Form Submission</h2>
    <hr style="border: none; border-top: 2px solid #0369a1; margin: 24px 0;">
    <table style="width:100%; font-size:1.05em;">
      <tr><td><strong>👤 Name:</strong></td><td>${input.name}</td></tr>
      <tr><td><strong>✉️ Email:</strong></td><td><a href="mailto:${input.email}" style="color:#0369a1;">${input.email}</a></td></tr>
      <tr><td><strong>📝 Subject:</strong></td><td>${input.subject}</td></tr>
    </table>
    <hr style="border: none; border-top: 2px solid #0369a1; margin: 24px 0;">
    <div style="margin-bottom:24px;">
      <strong>💬 Message:</strong>
      <blockquote style="background:#e0f2fe; padding:16px; border-radius:10px; color:#0f172a; margin:12px 0 0 0; border-left:4px solid #0369a1;">${input.message.replace(/\n/g, "<br>")}</blockquote>
    </div>
    <div style="background:#f1f5f9; border-radius:10px; padding:16px; margin-bottom:24px;">
      <strong>Sender Info</strong>
      <ul style="list-style:none; padding:0; margin:12px 0 0 0;">
        <li>⏰ <strong>Received At:</strong> ${new Date().toLocaleString()}</li>
      </ul>
    </div>
    <footer style="margin-top:32px; font-size:0.9em; color:#64748b;">— Automated message from saifabdelrazek.com</footer>
  </div>
`;

      // Email templates based on language and theme
      const isArabic = input.lang === "ar";
      
      // User confirmation email (English - light theme)
      const msgToUserLightEn = `
  <div style="font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; padding: 32px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid #e0e7ef;">
    <h2 style="margin-top:0; color:#0369a1;">📬 Thank You for Reaching Out!</h2>
    <p>Hi <strong>${input.name}</strong>,</p>
    <p>I've received your message and will get back to you as soon as possible.</p>
    <div style="margin: 24px 0; padding: 16px; background: #e0f2fe; border-radius: 8px;">
      <strong>Subject:</strong> ${input.subject}<br>
      <strong>Message:</strong>
      <blockquote style="margin: 8px 0 0 0; color: #0f172a;">${input.message.replace(/\n/g, "<br>")}</blockquote>
    </div>
    <div style="font-size: 0.95em; color: #64748b;">
      <p><strong>Received At:</strong> ${new Date().toLocaleString()}</p>
    </div>
    <p style="margin-top: 24px; color: #64748b;">If you didn't send this message, please disregard this email.</p>
    <p style="margin-top: 24px; color: #64748b;">This is an automated response.</p>
    <p style="margin-top: 24px; color: #64748b;">Best regards,<br>Saif Abdelrazek</p>
  </div>
`;

      // User confirmation email (English - dark theme)
      const msgToUserDarkEn = `
  <div style="font-family: Arial, sans-serif; background: #0f172a; color: #e0e7ef; padding: 32px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid #334155;">
    <h2 style="margin-top:0; color:#38bdf8;">📬 Thank You for Reaching Out!</h2>
    <p>Hi <strong>${input.name}</strong>,</p>
    <p>I've received your message and will get back to you as soon as possible.</p>
    <div style="margin: 24px 0; padding: 16px; background: #1e293b; border-radius: 8px;">
      <strong>Subject:</strong> ${input.subject}<br>
      <strong>Message:</strong>
      <blockquote style="margin: 8px 0 0 0; color: #e0e7ef;">${input.message.replace(/\n/g, "<br>")}</blockquote>
    </div>
    <div style="font-size: 0.95em; color: #94a3b8;">
      <p><strong>Received At:</strong> ${new Date().toLocaleString()}</p>
    </div>
    <p style="margin-top: 24px; color: #94a3b8;">If you didn't send this message, please disregard this email.</p>
    <p style="margin-top: 24px; color: #94a3b8;">This is an automated response.</p>
    <p style="margin-top: 24px; color: #94a3b8;">Best regards,<br>Saif Abdelrazek</p>
  </div>
`;

      // User confirmation email (Arabic - light theme)
      const msgToUserLightAr = `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; color: #0f172a; padding: 32px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid #e0e7ef; direction: rtl;">
    <h2 style="margin-top:0; color:#0369a1;">📬 شكراً لتواصلك معي!</h2>
    <p>مرحباً <strong>${input.name}</strong>،</p>
    <p>لقد استلمت رسالتك وسأقوم بالرد عليك في أقرب وقت ممكن.</p>
    <div style="margin: 24px 0; padding: 16px; background: #e0f2fe; border-radius: 8px;">
      <strong>الموضوع:</strong> ${input.subject}<br>
      <strong>الرسالة:</strong>
      <blockquote style="margin: 8px 0 0 0; color: #0f172a;">${input.message.replace(/\n/g, "<br>")}</blockquote>
    </div>
    <div style="font-size: 0.95em; color: #64748b;">
      <p><strong>تاريخ الاستلام:</strong> ${new Date().toLocaleString('ar-EG')}</p>
    </div>
    <p style="margin-top: 24px; color: #64748b;">إذا لم تكن قد أرسلت هذه الرسالة، يرجى تجاهل هذا البريد الإلكتروني.</p>
    <p style="margin-top: 24px; color: #64748b;">هذه رسالة آلية.</p>
    <p style="margin-top: 24px; color: #64748b;">مع أطيب التحيات،<br>سيف عبد الرازق</p>
  </div>
`;

      // User confirmation email (Arabic - dark theme)
      const msgToUserDarkAr = `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #0f172a; color: #e0e7ef; padding: 32px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid #334155; direction: rtl;">
    <h2 style="margin-top:0; color:#38bdf8;">📬 شكراً لتواصلك معي!</h2>
    <p>مرحباً <strong>${input.name}</strong>،</p>
    <p>لقد استلمت رسالتك وسأقوم بالرد عليك في أقرب وقت ممكن.</p>
    <div style="margin: 24px 0; padding: 16px; background: #1e293b; border-radius: 8px;">
      <strong>الموضوع:</strong> ${input.subject}<br>
      <strong>الرسالة:</strong>
      <blockquote style="margin: 8px 0 0 0; color: #e0e7ef;">${input.message.replace(/\n/g, "<br>")}</blockquote>
    </div>
    <div style="font-size: 0.95em; color: #94a3b8;">
      <p><strong>تاريخ الاستلام:</strong> ${new Date().toLocaleString('ar-EG')}</p>
    </div>
    <p style="margin-top: 24px; color: #94a3b8;">إذا لم تكن قد أرسلت هذه الرسالة، يرجى تجاهل هذا البريد الإلكتروني.</p>
    <p style="margin-top: 24px; color: #94a3b8;">هذه رسالة آلية.</p>
    <p style="margin-top: 24px; color: #94a3b8;">مع أطيب التحيات،<br>سيف عبد الرازق</p>
  </div>
`;

      // Select the appropriate email template
      let msgToUser: string;
      if (isArabic) {
        msgToUser = input.theme === "dark" ? msgToUserDarkAr : msgToUserLightAr;
      } else {
        msgToUser = input.theme === "dark" ? msgToUserDarkEn : msgToUserLightEn;
      }

      const transporter = nodeEnv !== "development" ? nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 587,
        auth: {
          user: getSecret("EMAIL_ADDRESS"),
          pass: getSecret("EMAIL_PASSWORD"),
        },
      }) : null;

      const mailOptionsToMe = {
        from: `Your Site Contact Form <${getSecret("EMAIL_ADDRESS")}>`,
        to: "saif@saifabdelrazek.com",
        subject: `Contact Form: ${input.subject}`,
        html: msgToMe,
        replyTo: input.email,
      };

      const mailOptionsToUser = {
        from: `Saif Abdelrazek <${getSecret("EMAIL_ADDRESS")}>`,
        to: input.email,
        subject: isArabic ? `شكراً لتواصلك معي، ${input.name}!` : `Thank you for contacting me, ${input.name}!`,
        html: msgToUser,
        replyTo: "saif@saifabdelrazek.com",
      };

      try {
        // Send email to owner
        if (nodeEnv !== "development" && transporter) {
          const myInfo = await transporter.sendMail(mailOptionsToMe);
          if (myInfo.rejected.length > 0) {
            throw new ActionError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Email was rejected by the server",
            });
          }
        } else {
          console.log("[DEV] Email to owner:", mailOptionsToMe);
        }

        // Send confirmation email to user
        if (nodeEnv !== "development" && transporter) {
          const userInfo = await transporter.sendMail(mailOptionsToUser);
          if (userInfo.rejected.length > 0) {
            throw new ActionError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Confirmation email was rejected by the server",
            });
          }
        } else {
          console.log("[DEV] Email to user:", mailOptionsToUser);
        }

        return {
          success: true,
          message: isArabic 
            ? "تم إرسال رسالتك بنجاح! سأتواصل معك قريباً."
            : "Your message has been sent successfully! I'll get back to you soon.",
        };
      } catch (error: any) {
        console.error("Error sending email:", error);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message || "Failed to send email. Please try again later.",
        });
      }
    },
  }),
};
