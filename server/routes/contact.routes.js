const express = require('express');
const { submitContact, getContacts } = require('../controllers/contact.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.route('/')
  .post(submitContact)
  .get(protect, getContacts);

module.exports = router;