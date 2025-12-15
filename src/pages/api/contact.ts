import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const portfolioOwner = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER;
    const baseSubject = `[Portfolio] ${subject}`;

    const htmlForOwner = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#0f1016; padding:24px; color:#f9fafb;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:0 auto; background:#111827; border-radius:12px; padding:24px; border:1px solid #312e81;">
          <tr>
            <td style="text-align:center; padding-bottom:16px;">
              <h1 style="margin:0; font-size:22px; color:#e5e7eb;">Nova mensagem pelo portfólio</h1>
              <p style="margin:8px 0 0; font-size:14px; color:#9ca3af;">Veja abaixo os detalhes enviados pelo formulário de contato.</p>
            </td>
          </tr>
          <tr>
            <td style="padding-top:12px;">
              <p style="margin:0 0 4px; font-size:13px; color:#9ca3af;">Nome</p>
              <p style="margin:0 0 12px; font-size:15px; color:#f9fafb;"><strong>${name}</strong></p>

              <p style="margin:0 0 4px; font-size:13px; color:#9ca3af;">E-mail</p>
              <p style="margin:0 0 12px; font-size:15px; color:#f9fafb;">${email}</p>

              <p style="margin:0 0 4px; font-size:13px; color:#9ca3af;">Assunto</p>
              <p style="margin:0 0 12px; font-size:15px; color:#f9fafb;">${subject}</p>

              <p style="margin:0 0 4px; font-size:13px; color:#9ca3af;">Mensagem</p>
              <div style="margin:0; padding:12px 14px; border-radius:8px; background:#020617; border:1px solid #1e293b; font-size:14px; line-height:1.5; white-space:pre-wrap;">
                ${String(message).replace(/\n/g, "<br/>")}
              </div>
            </td>
          </tr>
        </table>
      </div>
    `;

    const htmlForSender = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#0f1016; padding:24px; color:#f9fafb;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:0 auto; background:#111827; border-radius:12px; padding:24px; border:1px solid #312e81;">
          <tr>
            <td style="text-align:center; padding-bottom:16px;">
              <h1 style="margin:0; font-size:22px; color:#e5e7eb;">Mensagem recebida</h1>
              <p style="margin:8px 0 0; font-size:14px; color:#9ca3af;">
                Olá ${name}, sua mensagem foi enviada com sucesso. Em breve retornarei o contato.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top:12px;">
              <p style="margin:0 0 4px; font-size:13px; color:#9ca3af;">Assunto</p>
              <p style="margin:0 0 12px; font-size:15px; color:#f9fafb;"><strong>${subject}</strong></p>

              <p style="margin:0 0 4px; font-size:13px; color:#9ca3af;">Cópia da sua mensagem</p>
              <div style="margin:0; padding:12px 14px; border-radius:8px; background:#020617; border:1px solid #1e293b; font-size:14px; line-height:1.5; white-space:pre-wrap;">
                ${String(message).replace(/\n/g, "<br/>")}
              </div>

              <p style="margin:16px 0 0; font-size:12px; color:#6b7280;">
                Obrigado por entrar em contato pelo portfólio.
              </p>
            </td>
          </tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: portfolioOwner,
      replyTo: email,
      subject: baseSubject,
      html: htmlForOwner,
    });

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Cópia: ${baseSubject}`,
      html: htmlForSender,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
}
