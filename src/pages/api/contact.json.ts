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

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    auth: {
      user: getSecret("EMAIL_ADDRESS"),
      pass: getSecret("EMAIL_PASSWORD"),
    },
  });

  const mailOptionsToMe = {
    from: `Contact Form <${getSecret("EMAIL_ADDRESS")}>`,
    to: "saif@saifabdelrazek.com",
    subject: `New Contact Form Submission: ${body.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; padding: 24px; border-radius: 12px;">
        <h2 style="margin-top:0; color:#0369a1;">📬 Hey Saif, New Contact Submission</h2>
        <hr style="border: none; border-top: 2px solid #0369a1; margin: 16px 0;">
        <p><strong>👤 Name:</strong> ${body.name}</p>
        <p><strong>✉️ Email:</strong> <a href="mailto:${body.email}" style="color:#0369a1;">${body.email}</a></p>
        <p><strong>📝 Subject:</strong> ${body.subject}</p>
        <hr style="border: none; border-top: 2px solid #0369a1; margin: 16px 0;">
        <p><strong>💬 Message:</strong></p>
        <blockquote style="background:#e0f2fe; padding:12px; border-radius:8px; color:#0f172a;">${body.message.replace(/\n/g, "<br>")}</blockquote>
        <hr style="border: none; border-top: 2px solid #0369a1; margin: 16px 0;">
        <p><strong>⏰ Received:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>🌍 IP Address:</strong> ${body.ip || "Unknown"}</p>
        <p><strong>📍 City:</strong> ${body.city || "Unknown"}</p>
        <p><strong>🌍 Country:</strong> ${body.country || "Unknown"}</p>
        <p style="margin-top:24px; color:#64748b;">Thank you for using the contact form on your website.<br>
        If you wish to reply, please click the sender's email above.</p>
        <footer style="margin-top:32px; font-size:0.9em; color:#64748b;">— Automated Notification from saifabdelrazek.com</footer>
      </div>
    `,
  };

  const mailOptionsToUser = {
    from: `Contact Form <${getSecret("EMAIL_ADDRESS")}>`,
    to: body.email,
    subject: `Thank you for contacting us, ${body.name}!`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; padding: 24px; border-radius: 12px;">
        <h2 style="margin-top:0; color:#0369a1;">📬 Thank You for Your Message!</h2>
        <p>Hi ${body.name},</p>
        <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background:#e0f2fe; padding:12px; border-radius:8px; color:#0f172a;">${body.message.replace(/\n/g, "<br>")}</blockquote>

        <p style="margin-top:24px; color:#64748b;">If you didn't contact me, please disregard this email.</p>
        <p style="margin-top:24px; color:#64748b;">Your IP address: ${body.ip || "Unknown"}</p>
        <p style="margin-top:24px; color:#64748b;">Your city: ${body.city || "Unknown"}</p>
        <p style="margin-top:24px; color:#64748b;">Your country: ${body.country || "Unknown"}</p>

        <p style="margin-top:24px; color:#64748b;">This is an automated response. Please do not reply to this email.</p>
        <p style="margin-top:24px; color:#64748b;">If you have any questions, feel free to reach out again.</p>
        <p style="margin-top:24px; color:#64748b;">Best regards,<br>
        Saif Abdelrazek</p>
      </div>
    `,
  };
  try {
    try {
      const myInfo = await transporter.sendMail(mailOptionsToMe);
      if (myInfo.rejected.length > 0) {
        throw new Error("Email was rejected by the server");
      }
      console.log("Email sent successfully:", myInfo.response);
    } catch (error: any) {
      console.error("Error sending email to me:", error);
      throw new Error("Error sending email to me: " + error.message);
    }

    // Send a confirmation email to the user
    try {
      const userInfo = await transporter.sendMail(mailOptionsToUser);
      if (userInfo.rejected.length > 0) {
        throw new Error("Confirmation email was rejected by the server");
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
