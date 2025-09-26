const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    imageUrl: { 
        type: String, 
        required: true 
    },
    fileId: { 
        type: String, 
        required: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);