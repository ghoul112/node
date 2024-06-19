var nodeMailer = require('nodemailer');
  var transporter = nodeMailer.createTransport({     service: 'gmail',     auth: {         user: 'Sender Email',         pass: 'App password'     } });
    var mailOptions = {     from: 'Sender Email',     to: 'Reciver email',     subject: 'Node.js Mail Sender',     text: 'Easy Stuff' } 
     transporter.sendMail(mailOptions, function(err, info) {     if (err) return console.log(err); {         return console.log(info.response);     } });