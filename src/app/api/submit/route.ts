const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
    pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
  },
  
});
export async function POST(
  req: { formData: () => any; }
) {
  const data = await req.formData();
  const info = await transporter.sendMail({
    from: '"Form Submission" <form@alexandergardiner.com>', // sender address
    to: data.get("email"), // list of receivers
    subject: data.get("subject"), // Subject line
    text: data.get("body"), // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  
  return new Response('Success!', {
    status: 200  
  })
}