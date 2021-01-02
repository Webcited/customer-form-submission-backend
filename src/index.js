const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

const mailOptions = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4d4546f4381d35",
    pass: "578018a5625c4f",
  },
};
const transporter = nodemailer.createTransport(mailOptions);

app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req, res) => {
  transporter.sendMail({
    to: "jerryatbusiness@gmail.com",
    subject: "Form submission recieved",
    text: JSON.stringify(req.body),
  });
});

app.listen(process.env.PORT || 4000);
