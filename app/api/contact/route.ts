// app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "andrei.pata@pddle.app",
        pass: "ixzdiyquegffdykq",
      },
    });

    const mailOptions = {
      from: "andrei.pata@pddle.app",
      to: "andrei.pata@cleancodeculture.com",
      subject: "New contact request on your website",
      text: `You have a new contact request: ${email} - ${name} - ${message}`,
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
