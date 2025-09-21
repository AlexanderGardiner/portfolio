import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "mail.alexandergardiner.com",
  port: 465,
  secure: true,
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
  
});
export async function POST(req: NextRequest) {
  const { email, subject, body } = await req.json();
  console.log(email);
  const info = await transporter.sendMail({
    from: email, // sender address
    to: "misc@alexandergardiner.com", // list of receivers
    subject: subject, // Subject line
    text: body, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  
  return NextResponse.json({ message: 'Email sent' });

}
