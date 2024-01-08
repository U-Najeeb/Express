const nodemailer = require("nodemailer")

const sendEmail = async (options) => {
  var transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '09f86456dc3c94',
      pass: 'b1bc9dee10aaec',
    },
  });

  const mailOptions = {
    from: 'Umair Najeeb <haseeb95@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transport.sendMail(mailOptions);

};

module.exports = sendEmail
