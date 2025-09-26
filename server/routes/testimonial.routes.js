const express = require('express');
const { 
  submitTestimonial, 
  getAllTestimonials, 
  getApprovedTestimonials, 
  updateTestimonial, 
  deleteTestimonial 
} = require('../controllers/testimonial.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

// Public routes
router.route('/').post(submitTestimonial);
router.route('/approved').get(getApprovedTestimonials);

// Admin-only routes
router.route('/admin')
  .get(protect, getAllTestimonials);

router.route('/:id')
  .put(protect, updateTestimonial)
  .delete(protect, deleteTestimonial);

module.exports = router;