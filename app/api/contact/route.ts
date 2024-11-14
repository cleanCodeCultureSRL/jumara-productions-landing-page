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
        user: "contact@imeravisual.ro",
        pass: "hbzmkysypizvqpkp",
      },
    });

    const mailOptions = {
      from: "contact@imeravisual.ro",
      to: "contact@imeravisual.ro",
      subject: `New contact request from - ${name}`,
      text: `You have received a new contact request:
    
    Name: ${name}
    Email: ${email}
    Phone Number: ${phoneNumber}
    Company: ${company}
    
    Message:
    ${message}
    
    Trăiască Jumerile 🚀,
    Jumară Productions Landing Page Contact Form`,
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
