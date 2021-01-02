const nodemailer = require("nodemailer");

const mailOptions = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4d4546f4381d35",
    pass: "578018a5625c4f",
  },
};
const transporter = nodemailer.createTransport(mailOptions);

module.exports = (data)=> transporter.sendMail({
  to: "jerryatbusiness@gmail.com",
  subject: "Form submission recieved",
  html: `<!DOCTYPE html><html lang=en><title>Table V01</title><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><link crossorigin=anonymous href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"prefetch rel=stylesheet /><style>*{margin:0;padding:0;box-sizing:border-box}body,html{height:100%;font-family:sans-serif}a{margin:0;transition:all .4s;-webkit-transition:all .4s;-o-transition:all .4s;-moz-transition:all .4s}a:focus{outline:0!important}a:hover{text-decoration:none}h1,h2,h3,h4,h5,h6{margin:0}p{margin:0}li,ul{margin:0;list-style-type:none}input{display:block;outline:0;border:none!important}textarea{display:block;outline:0}input:focus,textarea:focus{border-color:transparent!important}button{outline:0!important;border:none;background:0 0}button:hover{cursor:pointer}iframe{border:none!important}.limiter{width:100%;margin:0 auto}.container-table100{width:100%;min-height:100vh;background:#c850c0;background:-webkit-linear-gradient(45deg,#4158d0,#c850c0);background:-o-linear-gradient(45deg,#4158d0,#c850c0);background:-moz-linear-gradient(45deg,#4158d0,#c850c0);background:linear-gradient(45deg,#4158d0,#c850c0);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;padding:33px 30px}.wrap-table100{width:1170px}table{border-spacing:1;border-collapse:collapse;background:#fff;border-radius:10px;overflow:hidden;width:100%;margin:0 auto;position:relative}table *{position:relative}table td,table th{padding-left:8px}table thead tr{height:60px;background:#36304a}table tbody tr{height:50px}table tbody tr:last-child{border:0}table td,table th{text-align:left}table td.l,table th.l{text-align:right}table td.c,table th.c{text-align:center}table td.r,table th.r{text-align:center}td{word-wrap:break-word}th{font-family:OpenSans-Regular;font-size:18px;color:#fff;line-height:1.2;font-weight:unset}tbody tr:nth-child(even){background-color:#f5f5f5}tbody tr{font-family:OpenSans-Regular;font-size:15px;color:grey;line-height:1.2;font-weight:unset}tbody tr:hover{color:#555;background-color:#f5f5f5;cursor:pointer}tr>:first-child{padding-left:40px}tr>:last-child{width:222px;text-align:right;padding-right:62px}</style><div class=limiter><div class=container-table100><div class=wrap-table100><div class=table100>${data}</div></div></div></div>`,
});