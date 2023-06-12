import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, // or 587 for TLS
  secure: true, // use SSL or TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { firstName, lastName, company, email, phoneNumber, message } = req.body;

  const mailData = {
    from: 'swaraj.farwarding@gmail.com',
    to: 'rajswara.r@gmail.com',
    subject: `Message From ${firstName} ${lastName}`,
    text: `Message: ${message}`,
    html: `<p>Name: ${firstName} ${lastName}</p>
    <p>Company: ${company}</p>
    <p>Email: ${email}</p>
    <p>Phone Number: ${phoneNumber}</p>
    <p>Message: ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
