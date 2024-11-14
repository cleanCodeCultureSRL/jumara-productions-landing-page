import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
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
      subject: "New Newsletter Subscription",
      text: `You have a new subscriber: ${email}`,
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
