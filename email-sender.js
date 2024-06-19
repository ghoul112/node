
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ghoulmed11@gmail.com',
    pass: 'kwck sotc nhjh pbth'
  }
});

var mailOptions = {
  from: 'ghoulmed11@gmail.com',
  to: 'ghoulmed11@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});