// app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, phoneNumber, company } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@jumaraproductions.ro",
        pass: "zymyrovzililwwpi",
      },
    });

    const mailOptions = {
      from: "contact@jumaraproductions.ro",
      to: "contact@jumaraproductions.ro",
      subject: `New contact request from - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="ro">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800&display=swap');
            
            body {
              margin: 0;
              padding: 0;
              font-family: 'Archivo', Arial, sans-serif;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
            }
            .header {
              background-color: #061425;
              padding: 40px 30px;
              text-align: center;
              border-bottom: 4px solid #e05e3d;
            }
            .header h1 {
              color: #efddc5;
              font-size: 28px;
              font-weight: 800;
              margin: 0 0 10px 0;
              text-transform: uppercase;
            }
            .header p {
              color: #e05e3d;
              font-size: 16px;
              font-weight: 600;
              margin: 0;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .content {
              padding: 40px 30px;
              background-color: #ffffff;
            }
            .greeting {
              color: #061425;
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 20px;
            }
            .info-block {
              margin-bottom: 25px;
              padding: 20px;
              background-color: #f8f8f8;
              border-left: 4px solid #e05e3d;
              border-radius: 4px;
            }
            .info-label {
              color: #e05e3d;
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 8px;
            }
            .info-value {
              color: #061425;
              font-size: 16px;
              font-weight: 600;
              word-wrap: break-word;
            }
            .message-block {
              margin-top: 30px;
              padding: 25px;
              background-color: #061425;
              border-radius: 8px;
              border: 2px solid #e05e3d;
            }
            .message-label {
              color: #e05e3d;
              font-size: 14px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 15px;
            }
            .message-text {
              color: #efddc5;
              font-size: 15px;
              line-height: 1.6;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              background-color: #061425;
              padding: 30px;
              text-align: center;
              border-top: 4px solid #e05e3d;
            }
            .footer-text {
              color: #efddc5;
              font-size: 14px;
              margin-bottom: 10px;
            }
            .footer-emoji {
              font-size: 24px;
            }
            .divider {
              height: 2px;
              background: linear-gradient(to right, #e05e3d, #061425);
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header -->
            <div class="header">
              <h1>Jumară Productions</h1>
              <p>Cerere nouă de contact</p>
            </div>
            
            <!-- Content -->
            <div class="content">
              <div class="greeting">
                Ai primit o cerere nouă de contact! 🎬
              </div>
              
              <div class="divider"></div>
              
              <!-- Contact Information -->
              <div class="info-block">
                <div class="info-label">Nume</div>
                <div class="info-value">${name}</div>
              </div>
              
              <div class="info-block">
                <div class="info-label">Email</div>
                <div class="info-value">${email}</div>
              </div>
              
              <div class="info-block">
                <div class="info-label">Companie</div>
                <div class="info-value">${
                  company || "Nu a fost specificat"
                }</div>
              </div>
              
              <div class="info-block">
                <div class="info-label">Telefon</div>
                <div class="info-value">${
                  phoneNumber || "Nu a fost specificat"
                }</div>
              </div>
              
              <!-- Message -->
              <div class="message-block">
                <div class="message-label">Mesaj</div>
                <div class="message-text">${message}</div>
              </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
              <div class="footer-text">
                <strong>Trăiască Jumerile! <span class="footer-emoji">🚀</span></strong>
              </div>
              <div class="footer-text" style="font-size: 12px; margin-top: 15px; color: #efddc5; opacity: 0.8;">
                Trimis din Jumară Productions Landing Page Contact Form
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
