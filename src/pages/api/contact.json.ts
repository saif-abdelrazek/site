export const prerender = false;
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { getSecret } from "astro:env/server";

export const GET: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({ message: "This route only accept post requests" }),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
};

export const POST: APIRoute = async ({ request }) => {
  if (!request.body) {
    return new Response("No data provided", { status: 400 });
  }
  if (!getSecret("EMAIL_ADDRESS") || !getSecret("EMAIL_PASSWORD")) {
    return new Response(
      JSON.stringify({
        success: false,
        error:
          "Email configuration is not set. Please check your environment variables.",
      }),
      { status: 500 },
    );
  }
  const body = await request.json();

  if (typeof body !== "object") {
    return new Response(
      JSON.stringify({ success: false, error: "Invalid request body" }),
      { status: 400 },
    );
  }
  if (!body.name) {
    return new Response(
      JSON.stringify({ success: false, error: "Name is required" }),
      { status: 400 },
    );
  }
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return new Response(
      JSON.stringify({ success: false, error: "Invalid email address" }),
      { status: 400 },
    );
  }
  if (!body.subject || body.subject.trim() === "") {
    return new Response(
      JSON.stringify({ success: false, error: "Subject is required" }),
      { status: 400 },
    );
  }
  if (!body.message || body.message.trim() === "" || body.message.length < 50) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Message must be at least 50 characters long",
      }),
      {
        status: 400,
      },
    );
  }

  // Owner notification (msgToMe)
  const msgToMe = `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; color: #0f172a; padding: 32px; border-radius: 18px; max-width: 640px; margin: auto; border: 1px solid #e0e7ef; box-shadow: 0 4px 24px 0 #0369a120;">
    <h2 style="margin-top:0; color:#0369a1; font-size:2rem;">📬 New Contact Submission</h2>
    <hr style="border: none; border-top: 2px solid #0369a1; margin: 24px 0;">
    <table style="width:100%; font-size:1.05em;">
      <tr><td><strong>👤 Name:</strong></td><td>${body.name}</td></tr>
      <tr><td><strong>✉️ Email:</strong></td><td><a href="mailto:${body.email}" style="color:#0369a1;">${body.email}</a></td></tr>
      <tr><td><strong>📝 Subject:</strong></td><td>${body.subject}</td></tr>
    </table>
    <hr style="border: none; border-top: 2px solid #0369a1; margin: 24px 0;">
    <div style="margin-bottom:24px;">
      <strong>💬 Message:</strong>
      <blockquote style="background:#e0f2fe; padding:16px; border-radius:10px; color:#0f172a; margin:12px 0 0 0; border-left:4px solid #0369a1;">${body.message.replace(/\n/g, "<br>")}</blockquote>
    </div>
    <div style="background:#f1f5f9; border-radius:10px; padding:16px; margin-bottom:24px;">
      <strong>Sender Info</strong>
      <ul style="list-style:none; padding:0; margin:12px 0 0 0;">
        <li>🌍 <strong>IP Address:</strong> ${body.ip || "Unknown"}</li>
        <li>📍 <strong>City:</strong> ${body.city || "Unknown"}</li>
        <li>🌎 <strong>Country:</strong> ${body.country || "Unknown"}</li>
        <li>⏰ <strong>Received:</strong> ${new Date().toLocaleString()}</li>
      </ul>
    </div>
    <p style="color:#64748b; margin-top:24px;">Thank you for using the contact form.<br>If you wish to reply, click the sender's email above.</p>
    <footer style="margin-top:32px; font-size:0.9em; color:#64748b;">— Automated Notification from saifabdelrazek.com</footer>
  </div>
`;

  // User confirmation (msgToUserLight)
  const msgToUserLight = `
  <div style="font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; padding: 32px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid #e0e7ef;">
    <h2 style="margin-top:0; color:#0369a1;">📬 Thank You for Your Message!</h2>
    <p>Hi <strong>${body.name}</strong>,</p>
    <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
    <div style="margin: 24px 0; padding: 16px; background: #e0f2fe; border-radius: 8px;">
      <strong>Subject:</strong> ${body.subject}<br>
      <strong>Message:</strong>
      <blockquote style="margin: 8px 0 0 0; color: #0f172a;">${body.message.replace(/\n/g, "<br>")}</blockquote>
    </div>
    <div style="font-size: 0.95em; color: #64748b;">
      <p><strong>Received at:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Your IP address:</strong> ${body.ip || "Unknown"}</p>
      <p><strong>Your city:</strong> ${body.city || "Unknown"}</p>
      <p><strong>Your country:</strong> ${body.country || "Unknown"}</p>
    </div>
    <p style="margin-top: 24px; color: #64748b;">If you didn't contact me, please disregard this email.</p>
    <p style="margin-top: 24px; color: #64748b;">This is an automated response. Please do not reply to this email.</p>
    <p style="margin-top: 24px; color: #64748b;">Best regards,<br>Saif Abdelrazek</p>
  </div>
`;

  // User confirmation (msgToUserDark)
  const msgToUserDark = `
  <div style="font-family: Arial, sans-serif; background: #0f172a; color: #e0e7ef; padding: 32px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid #334155;">
    <h2 style="margin-top:0; color:#38bdf8;">📬 Thank You for Your Message!</h2>
    <p>Hi <strong>${body.name}</strong>,</p>
    <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
    <div style="margin: 24px 0; padding: 16px; background: #1e293b; border-radius: 8px;">
      <strong>Subject:</strong> ${body.subject}<br>
      <strong>Message:</strong>
      <blockquote style="margin: 8px 0 0 0; color: #e0e7ef;">${body.message.replace(/\n/g, "<br>")}</blockquote>
    </div>
    <div style="font-size: 0.95em; color: #94a3b8;">
      <p><strong>Received at:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Your IP address:</strong> ${body.ip || "Unknown"}</p>
      <p><strong>Your city:</strong> ${body.city || "Unknown"}</p>
      <p><strong>Your country:</strong> ${body.country || "Unknown"}</p>
    </div>
    <p style="margin-top: 24px; color: #94a3b8;">If you didn't contact me, please disregard this email.</p>
    <p style="margin-top: 24px; color: #94a3b8;">This is an automated response</p>
    <p style="margin-top: 24px; color: #94a3b8;">If you have any questions, feel free to reach out again and you could reply to this email.</p>
    <p style="margin-top: 24px; color: #94a3b8;">Best regards,<br>Saif Abdelrazek</p>
  </div>
`;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    auth: {
      user: getSecret("EMAIL_ADDRESS"),
      pass: getSecret("EMAIL_PASSWORD"),
    },
  });

  const mailOptionsToMe = {
    from: `Your Site Contact Form <${getSecret("EMAIL_ADDRESS")}>`,
    to: "saif@saifabdelrazek.com",
    subject: `New Contact Form Submission: ${body.subject}`,
    html: msgToMe,
    replyTo: body.email,
  };

  const mailOptionsToUser = {
    from: `Saif Abdelrazek <${getSecret("EMAIL_ADDRESS")}>`,
    to: body.email,
    subject: `Thank you for contacting us, ${body.name}!`,
    html: body.theme === "dark" ? msgToUserDark : msgToUserLight,
    replyTo: "saif@saifabdelrazek.com",
  };
  try {
    const nodeEnv = getSecret("NODE_ENV");
    try {
      if (nodeEnv !== "development") {
        const myInfo = await transporter.sendMail(mailOptionsToMe);
        if (myInfo.rejected.length > 0) {
          throw new Error("Email was rejected by the server");
        }
      } else {
        console.log("Email info To Me: ", mailOptionsToMe);
      }
    } catch (error: any) {
      console.error("Error sending email to me:", error);
      throw new Error("Error sending email to me: " + error.message);
    }

    // Send a confirmation email to the user
    try {
      if (nodeEnv !== "development") {
        const userInfo = await transporter.sendMail(mailOptionsToUser);
        if (userInfo.rejected.length > 0) {
          throw new Error("Confirmation email was rejected by the server");
        }
      } else {
        console.log("Email info To User: ", mailOptionsToUser);
      }
    } catch (error: any) {
      console.error("Error sending confirmation email:", error);
      throw new Error("Error sending confirmation email: " + error.message);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error sending email: " + error.message,
      }),
      { status: 500 },
    );
  }
};
