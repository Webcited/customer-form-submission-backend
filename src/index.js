const express = require("express");
const bodyParser = require("body-parser");
const marked = require("marked");
const morgan = require("morgan");
const sendMail = require("./mail");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.post("/submit", (req, res) => {
  const data = req.body;
  let FormSubmissionEmail;
  let s = "|Field|Value|\n|-----|-----|";
  for (key in data) {
    if(key==="FormSubmissionEmail")
      FormSubmissionEmail=data[key];
    else
      s += `\n|${key}|${data[key]}|`;
  }
  sendMail(marked(s, FormSubmissionEmail))
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(500).send(e));
});

app.listen(process.env.PORT || 4000);
