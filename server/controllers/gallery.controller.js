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
        return res.status(400).json({ message: 'File (Base64 string) is required.' });
    }

    let uploadedFile;
    try {
        uploadedFile = await imagekit.upload({
            file: file,
            fileName: `gallery_image_${Date.now()}`,
            folder: "school-gallery"
        });
    } catch (uploadError) {
        // Log the explicit ImageKit error here
        console.error('ImageKit Upload Failed:', uploadError);
        res.status(500);
        // Throw a specific error to halt execution and send a useful message
        throw new Error(`Image upload failed: ${uploadError.message || 'ImageKit Service Error'}`);
    }

    // Only save to MongoDB if ImageKit upload was successful
    try {
        const newImage = await Gallery.create({
            imageUrl: uploadedFile.url,
            fileId: uploadedFile.fileId
        });

        res.status(201).json(newImage);
    } catch (dbError) {
        // If DB save fails (e.g., connection lost), log it
        console.error('MongoDB Save Failed:', dbError);
        // Optional: Delete the file from ImageKit if DB save failed
        // await imagekit.deleteFile(uploadedFile.fileId); 
        res.status(500);
        throw new Error('Database error during save.');
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
