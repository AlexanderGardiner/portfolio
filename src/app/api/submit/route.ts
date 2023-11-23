const nodemailer = require("nodemailer").mail;
const transporter = nodemailer.createTransport({
  host: "mail.alexandergardiner.com",
  port: 465,
  secure: true,
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
  
});
export async function POST(
  req: { formData: () => any; }
) {
  const data = await req.formData();
  console.log(data.get("email"))
  const info = await nodemailer({
    from: data.get("email"), // sender address
    to: "contact@alexandergardiner.com", // list of receivers
    subject: data.get("subject"), // Subject line
    text: data.get("body"), // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  
  return new Response('Success!', {
    status: 200  
  })
}