export const prerender = false;
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { getSecret } from "astro:env/server";

import { getLangFromUrl } from "../../i18n/utils";
import { useTranslations } from "../../i18n/translations";
import { createLocalizedConstants } from "../../lib/constants";

export const GET: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({ message: "This route only accepts POST requests" }),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
};

export const POST: APIRoute = async ({ request }) => {
  // Detect language from request URL
  const url = new URL(request.url);
  const lang = getLangFromUrl(url);
  const constants = createLocalizedConstants(lang);
  const t = useTranslations(lang);
  const { SITE_CONFIG, EMAIL_TEMPLATES, ERROR_MESSAGES, SUCCESS_MESSAGES } = constants;

  if (!request.body) {
    return new Response("No data provided", { status: 400 });
  }
  
  // Check environment variables only in production
  if (process.env.NODE_ENV !== "development" && (!getSecret("EMAIL_ADDRESS") || !getSecret("EMAIL_PASSWORD"))) {
    return new Response(
      JSON.stringify({
        success: false,
        error: ERROR_MESSAGES.emailConfigNotSet,
      }),
      { status: 500 },
    );
  }
  const body = await request.json();

  if (typeof body !== "object") {
    return new Response(
      JSON.stringify({ success: false, error: ERROR_MESSAGES.invalidRequestBody }),
      { status: 400 },
    );
  }
  if (!body.name) {
    return new Response(
      JSON.stringify({ success: false, error: ERROR_MESSAGES.nameRequired }),
      { status: 400 },
    );
  }
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return new Response(
      JSON.stringify({ success: false, error: ERROR_MESSAGES.invalidEmail }),
      { status: 400 },
    );
  }
  if (!body.subject || body.subject.trim() === "") {
    return new Response(
      JSON.stringify({ success: false, error: ERROR_MESSAGES.subjectRequired }),
      { status: 400 },
    );
  }
  if (!body.message || body.message.trim() === "" || body.message.length < 50) {
    return new Response(
      JSON.stringify({
        success: false,
        error: ERROR_MESSAGES.messageMinLength,
      }),
      {
        status: 400,
      },
    );
  }

  // Owner notification (msgToMe)
  const msgToMe = `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; color: #0f172a; padding: 32px; border-radius: 18px; max-width: 640px; margin: auto; border: 1px solid #e0e7ef; box-shadow: 0 4px 24px 0 #0369a120;">
    <h2 style="margin-top:0; color:#0369a1; font-size:2rem;">📬 ${t('email.newContactSubmission')}</h2>
    <hr style="border: none; border-top: 2px solid #0369a1; margin: 24px 0;">
    <table style="width:100%; font-size:1.05em;">
      <tr><td><strong>👤 ${t('email.name')}:</strong></td><td>${body.name}</td></tr>
      <tr><td><strong>✉️ ${t('email.email')}:</strong></td><td><a href="mailto:${body.email}" style="color:#0369a1;">${body.email}</a></td></tr>
      <tr><td><strong>📝 ${t('email.subject')}:</strong></td><td>${body.subject}</td></tr>
    </table>
    <hr style="border: none; border-top: 2px solid #0369a1; margin: 24px 0;">
    <div style="margin-bottom:24px;">
      <strong>💬 ${t('email.message')}:</strong>
      <blockquote style="background:#e0f2fe; padding:16px; border-radius:10px; color:#0f172a; margin:12px 0 0 0; border-left:4px solid #0369a1;">${body.message.replace(/\n/g, "<br>")}</blockquote>
    </div>
    <div style="background:#f1f5f9; border-radius:10px; padding:16px; margin-bottom:24px;">
      <strong>${t('email.senderInfo')}</strong>
      <ul style="list-style:none; padding:0; margin:12px 0 0 0;">
        <li>⏰ <strong>${t('email.receivedAt')}:</strong> ${new Date().toLocaleString()}</li>
      </ul>
    </div>
    <p style="color:#64748b; margin-top:24px;">${t('email.thankYouForUsing')}<br>${t('email.replyClickEmail')}</p>
    <footer style="margin-top:32px; font-size:0.9em; color:#64748b;">— ${t('contact.automatedFooter')} saifabdelrazek.com</footer>
  </div>
`;

  // User confirmation (msgToUserLight)
  const msgToUserLight = `
  <div style="font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; padding: 32px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid #e0e7ef;">
    <h2 style="margin-top:0; color:#0369a1;">📬 ${t('email.thankYouMessage')}</h2>
    <p>${t('email.receivedMessage').replace('{name}', `<strong>${body.name}</strong>`)}</p>
    <div style="margin: 24px 0; padding: 16px; background: #e0f2fe; border-radius: 8px;">
      <strong>${t('email.subject')}:</strong> ${body.subject}<br>
      <strong>${t('email.message')}:</strong>
      <blockquote style="margin: 8px 0 0 0; color: #0f172a;">${body.message.replace(/\n/g, "<br>")}</blockquote>
    </div>
    <div style="font-size: 0.95em; color: #64748b;">
      <p><strong>${t('email.receivedAt')}:</strong> ${new Date().toLocaleString()}</p>
    </div>
    <p style="margin-top: 24px; color: #64748b;">${t('email.ifNotYou')}</p>
    <p style="margin-top: 24px; color: #64748b;">${t('email.automatedResponse')}</p>
    <p style="margin-top: 24px; color: #64748b;">${t('email.bestRegards')},<br>${t('site.author')}</p>
  </div>
`;

  // User confirmation (msgToUserDark)
  const msgToUserDark = `
  <div style="font-family: Arial, sans-serif; background: #0f172a; color: #e0e7ef; padding: 32px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid #334155;">
    <h2 style="margin-top:0; color:#38bdf8;">📬 ${t('email.thankYouMessage')}</h2>
    <p>${t('email.receivedMessage').replace('{name}', `<strong>${body.name}</strong>`)}</p>
    <div style="margin: 24px 0; padding: 16px; background: #1e293b; border-radius: 8px;">
      <strong>${t('email.subject')}:</strong> ${body.subject}<br>
      <strong>${t('email.message')}:</strong>
      <blockquote style="margin: 8px 0 0 0; color: #e0e7ef;">${body.message.replace(/\n/g, "<br>")}</blockquote>
    </div>
    <div style="font-size: 0.95em; color: #94a3b8;">
      <p><strong>${t('email.receivedAt')}:</strong> ${new Date().toLocaleString()}</p>
    </div>
    <p style="margin-top: 24px; color: #94a3b8;">${t('email.ifNotYou')}</p>
    <p style="margin-top: 24px; color: #94a3b8;">${t('email.automatedResponse')}</p>
    <p style="margin-top: 24px; color: #94a3b8;">${t('email.bestRegards')},<br>${t('site.author')}</p>
  </div>
`;

  const nodeEnv = getSecret("NODE_ENV");
  
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
    to: SITE_CONFIG.email,
    subject: EMAIL_TEMPLATES.subjects.contact(body.subject),
    html: msgToMe,
    replyTo: body.email,
  };

  const mailOptionsToUser = {
    from: `${SITE_CONFIG.name} <${getSecret("EMAIL_ADDRESS")}>`,
    to: body.email,
    subject: EMAIL_TEMPLATES.subjects.confirmation(body.name),
    html: body.theme === "dark" ? msgToUserDark : msgToUserLight,
    replyTo: SITE_CONFIG.email,
  };
  try {
    try {
      if (nodeEnv !== "development" && transporter) {
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
      if (nodeEnv !== "development" && transporter) {
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
      JSON.stringify({ success: true, message: SUCCESS_MESSAGES.emailSent }),
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
