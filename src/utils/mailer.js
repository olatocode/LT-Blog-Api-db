/** @format */

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = async (email, token) => {
  const url = `${process.env.BASE_URL}/verify/${token}`;
  await transporter.sendMail({
    from: `"Verify Account" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Email Verification',
    html: `<p>Click <a href="${url}">here</a> to verify your email.</p>`,
  });
};

module.exports = sendVerificationEmail;
