import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",   
  port: 465,                            
  secure: true,                         
  auth: {
    user: "contactformagardiner@gmail.com", 
    pass: process.env.SMTP_PASS,        
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: NextRequest) {
  const { email, subject, body } = await req.json();
  console.log(email);
  const info = await transporter.sendMail({
    from: "contactformagardiner@gmail.com",
    replyTo: email,
    to: "misc@alexandergardiner.com",
    subject: "CONTACT FORM SUBMISSION: "+ subject,
    text: body,
  });

  console.log("Message sent: %s", info.messageId);
  
  return NextResponse.json({ message: 'Email sent' });

}
