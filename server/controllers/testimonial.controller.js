const asyncHandler = require('express-async-handler');
const Testimonial = require('../models/Testimonial');

const submitTestimonial = asyncHandler(async (req, res) => {
  const { quote, author, title } = req.body;

  if (!quote || !author || !title) {
    res.status(400);
    throw new Error('Please fill in all fields.');
  }

  const newTestimonial = await Testimonial.create({
    quote,
    author,
    title,
  });

  res.status(201).json(newTestimonial);
});

const getAllTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({});
  res.status(200).json(testimonials);
});

const getApprovedTestimonials = asyncHandler(async (req, res) => {
  const approvedTestimonials = await Testimonial.find({ isApproved: true });
  res.status(200).json(approvedTestimonials);
});

const updateTestimonial = asyncHandler(async (req, res) => {
  const { isApproved } = req.body;
  const testimonial = await Testimonial.findById(req.params.id);

  if (!testimonial) {
    res.status(404);
    throw new Error('Testimonial not found');
  }

  testimonial.isApproved = isApproved;
  const updatedTestimonial = await testimonial.save();
  
  res.status(200).json(updatedTestimonial);
});

const deleteTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);

  if (!testimonial) {
    res.status(404);
    throw new Error('Testimonial not found');
  }

  await testimonial.deleteOne();
  res.status(200).json({ message: 'Testimonial removed successfully' });
});

module.exports = {
  submitTestimonial,
  getAllTestimonials,
  getApprovedTestimonials,
  updateTestimonial,
  deleteTestimonial,
};