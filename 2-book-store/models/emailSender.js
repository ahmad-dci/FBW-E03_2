const nodemailer = require('nodemailer');
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

function sendEmail(name, email, message, cb) {
    const mailOptions = {
        from: 'fbwe03@coding-school.org',
        to: 'ahmad.osman@digitalcareerinstitute.org',
        subject: 'Message using your website from ' + name,
        text: 'Name: ' + name + '\n\n' + message + '\n\n' + 'Email: ' + email
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            cb(false ,err);
        } else {
            cb(true, info);
        }
    })
}

module.exports = {sendEmail}