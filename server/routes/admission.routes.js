const express = require('express');
const { submitAdmission, getAdmissions } = require('../controllers/admission.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.route('/')
  .post(submitAdmission)
  .get(protect, getAdmissions);

module.exports = router;
