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

    // Verify transporter connection
    try {
        await transporter.verify();
        console.log('Email service ready');
    } catch (error) {
        console.error('Email transporter verification failed:', error);
        throw new Error('Email service configuration error');
    }

    // 2. Define the email options
    const mailOptions = {
        from: `Todo App <${process.env.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html || `<p>${options.message}</p>`
    };

    // 3. Actually send the email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = sendEmail;
