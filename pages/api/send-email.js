import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // Business owner's email
        pass: process.env.EMAIL_PASSWORD, // App password or email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.BUSINESS_EMAIL,
      subject: 'New Detailing Service Request',
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Phone: ${phone}
        Email: ${email}

        Message:
        ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
