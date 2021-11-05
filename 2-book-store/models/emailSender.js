const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'mail.coding-school.org',
    port: 465,
    auth: {
        user: "fbwe03@coding-school.org",
        pass: "CodingSchool1"
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