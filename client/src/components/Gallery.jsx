import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Removed the redundant style object

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://mamathaschool.onrender.com/api/gallery');
        setPhotos(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch gallery photos. Please ensure the backend is running and data exists.');
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);
  
  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-light dark:bg-bg-dark-slate transition-colors duration-500">
        <p className="text-xl text-primary-indigo dark:text-white">Loading Gallery...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-light dark:bg-bg-dark-slate transition-colors duration-500">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div id="gallery" className="bg-bg-light dark:bg-bg-dark-slate text-text-dark dark:text-white min-h-screen p-8 md:p-16 transition-colors duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2 text-primary-indigo dark:text-accent-gold">School Moments</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Capture the energy and passion of our students.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div 
              key={photo._id} 
              className="group relative overflow-hidden rounded-lg shadow-xl border-4 border-transparent hover:border-accent-gold transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              onClick={() => openModal(photo)}
            >
              <img 
                src={photo.imageUrl} 
                alt="School Photo"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary-indigo opacity-0 group-hover:opacity-40 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2 bg-black bg-opacity-50 rounded-full">
                  Click to View
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 p-8">No photos have been uploaded by the admin yet.</p>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100] p-4"
          onClick={closeModal}
        >
          <img
            src={selectedImage.imageUrl}
            alt="Full size school photo"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border-8 border-accent-gold"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-red-500 transition-colors"
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
