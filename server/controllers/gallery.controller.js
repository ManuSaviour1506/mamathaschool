const asyncHandler = require('express-async-handler');
const Gallery = require('../models/Gallery');
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const getPhotos = asyncHandler(async (req, res) => {
    const images = await Gallery.find({}).sort({ createdAt: -1 });
    res.status(200).json(images);
});

const uploadPhoto = asyncHandler(async (req, res) => {
    const { file } = req.body;
    
    if (!file) {
        return res.status(400).json({ message: 'File is required' });
    }

    try {
        const uploadedFile = await imagekit.upload({
            file: file,
            fileName: `gallery_image_${Date.now()}`,
            folder: "school-gallery"
        });

        const newImage = await Gallery.create({
            imageUrl: uploadedFile.url,
            fileId: uploadedFile.fileId
        });

        res.status(201).json(newImage);
    } catch (error) {
        console.error('Image upload failed:', error);
        res.status(500).json({ message: 'Server Error', details: error.message });
    }
});

const deletePhoto = asyncHandler(async (req, res) => {
    const image = await Gallery.findById(req.params.id);
    if (!image) {
        return res.status(404).json({ message: 'Image not found' });
    }
    
    await imagekit.deleteFile(image.fileId);
    await image.deleteOne();
    
    res.status(200).json({ id: req.params.id, message: 'Image deleted successfully' });
});

module.exports = {
    getPhotos,
    uploadPhoto,
    deletePhoto,
};