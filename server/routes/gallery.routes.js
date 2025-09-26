const express = require('express');
const router = express.Router();
const { getPhotos, uploadPhoto, deletePhoto } = require('../controllers/gallery.controller');
const { protect } = require('../middleware/auth.middleware');

router.route('/')
    .get(getPhotos)
    .post(protect, uploadPhoto);

router.delete('/:id', protect, deletePhoto);

module.exports = router;