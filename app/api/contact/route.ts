// app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, phoneNumber, company } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Contact@jumaraproductions.ro",
        pass: "sydb luti ekqk zpcs",
      },
    });

    const mailOptions = {
      from: "Contact@jumaraproductions.ro",
      to: "Contact@jumaraproductions.ro",
      subject: `New contact request from - ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#061425;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#061425;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#061425;padding:30px 40px;text-align:center;border-bottom:3px solid #e05e3d;">
              <h1 style="margin:0;font-size:28px;font-weight:bold;color:#efddc5;letter-spacing:2px;">JUMARĂ PRODUCTIONS</h1>
              <p style="margin:8px 0 0;font-size:13px;color:#e05e3d;letter-spacing:4px;text-transform:uppercase;">Producție video de bun gust</p>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="background-color:#0a1e33;padding:30px 40px;text-align:center;">
              <h2 style="margin:0;font-size:22px;font-weight:bold;color:#e05e3d;">Cerere nouă de contact</h2>
              <p style="margin:10px 0 0;font-size:14px;color:#efddc5;opacity:0.7;">Un vizitator a completat formularul de contact</p>
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td style="background-color:#0d2440;padding:30px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid rgba(239,221,197,0.1);">
                    <span style="font-size:11px;color:#e05e3d;text-transform:uppercase;letter-spacing:2px;font-weight:bold;">Nume</span><br>
                    <span style="font-size:16px;color:#efddc5;line-height:28px;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid rgba(239,221,197,0.1);">
                    <span style="font-size:11px;color:#e05e3d;text-transform:uppercase;letter-spacing:2px;font-weight:bold;">Email</span><br>
                    <a href="mailto:${email}" style="font-size:16px;color:#efddc5;line-height:28px;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid rgba(239,221,197,0.1);">
                    <span style="font-size:11px;color:#e05e3d;text-transform:uppercase;letter-spacing:2px;font-weight:bold;">Telefon</span><br>
                    <span style="font-size:16px;color:#efddc5;line-height:28px;">${phoneNumber || "—"}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;">
                    <span style="font-size:11px;color:#e05e3d;text-transform:uppercase;letter-spacing:2px;font-weight:bold;">Companie</span><br>
                    <span style="font-size:16px;color:#efddc5;line-height:28px;">${company || "—"}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="background-color:#0a1e33;padding:30px 40px;">
              <span style="font-size:11px;color:#e05e3d;text-transform:uppercase;letter-spacing:2px;font-weight:bold;">Mesaj</span>
              <div style="margin-top:12px;padding:20px;background-color:#061425;border-left:3px solid #e05e3d;border-radius:4px;">
                <p style="margin:0;font-size:15px;color:#efddc5;line-height:24px;white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#061425;padding:30px 40px;text-align:center;border-top:3px solid #e05e3d;">
              <p style="margin:0;font-size:14px;color:#efddc5;">Trăiască Jumerile 🚀</p>
              <p style="margin:8px 0 0;font-size:12px;color:#efddc5;opacity:0.5;">Jumară Productions &mdash; Landing Page Contact Form</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
