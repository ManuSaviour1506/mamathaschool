const asyncHandler = require('express-async-handler');
const Admission = require('../models/Admission');
const sendMail = require('../utils/mailer');

const submitAdmission = asyncHandler(async (req, res) => {
  // Destructure only the fields currently sent by the simplified frontend form
  const { studentName, dateOfBirth, gradeApplyingFor, parentName, parentPhone, parentEmail } = req.body;

  // Validate only the simplified set of required fields
  if (!studentName || !dateOfBirth || !gradeApplyingFor || !parentName || !parentPhone || !parentEmail) {
    res.status(400);
    throw new Error('Please fill in all required fields.');
  }

  // Create the new Admission record with the simplified data structure
  const newAdmission = await Admission.create({
    studentName,
    dateOfBirth,
    gradeApplyingFor,
    parentName,
    parentPhone,
    parentEmail,
  });

  // Send email notification to admin
  const adminEmail = process.env.EMAIL_USER;
  const emailSubject = `New Admission Application from ${studentName}`;
  const emailHtml = `
    <h2>New Admission Application</h2>
    <p>A new admission form has been submitted.</p>
    <ul>
      <li><strong>Student Name:</strong> ${studentName}</li>
      <li><strong>Parent Name:</strong> ${parentName}</li>
      <li><strong>Parent Email:</strong> ${parentEmail}</li>
      <li><strong>Phone Number:</strong> ${parentPhone}</li>
      <li><strong>Grade Applying For:</strong> ${gradeApplyingFor}</li>
    </ul>
    <p>Please log in to the admin dashboard to view the full details.</p>
  `;
  
  await sendMail(adminEmail, emailSubject, emailHtml);

  res.status(201).json(newAdmission);
});

const getAdmissions = asyncHandler(async (req, res) => {
  const admissions = await Admission.find({});
  res.status(200).json(admissions);
});

module.exports = {
  submitAdmission,
  getAdmissions,
};