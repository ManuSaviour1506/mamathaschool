const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');
const sendMail = require('../utils/mailer');

const submitContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Please fill in all fields.');
  }

  const newContact = await Contact.create({
    name,
    email,
    message,
  });

  const adminEmail = process.env.EMAIL_USER;
  const emailSubject = `New Contact Form Submission from ${name}`;
  const emailHtml = `
    <h2>New Contact Form Submission</h2>
    <p>A new message has been submitted through the contact form.</p>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
    </ul>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;
  
  await sendMail(adminEmail, emailSubject, emailHtml);

  res.status(201).json(newContact);
});

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({});
  res.status(200).json(contacts);
});

module.exports = {
  submitContact,
  getContacts,
};