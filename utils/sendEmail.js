const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // 1. Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // e.g. shimirwasonia5@gmail.com
            pass: process.env.EMAIL_PASS  // The App Password or Email password
        }
    });

    // 2. Define the email options
    const mailOptions = {
        from: `Todo App <${process.env.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html
    };

    // 3. Actually send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
