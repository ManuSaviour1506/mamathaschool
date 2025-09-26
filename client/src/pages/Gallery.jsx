import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/gallery');
        setPhotos(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch gallery photos.');
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);
  
  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-xl text-gray-800 dark:text-gray-200">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div id="gallery" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-4 md:p-8 lg:p-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">School Gallery</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A glimpse into our vibrant school life, events, and activities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div 
              key={photo._id} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(photo)}
            >
              <img 
                src={photo.imageUrl} 
                alt="School Photo"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  View
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No photos found in the gallery.</p>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
          onClick={closeModal}
        >
          <img
            src={selectedImage.imageUrl}
            alt="School Photo"
            className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-[#008080]"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            aria-label="Close image view"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;