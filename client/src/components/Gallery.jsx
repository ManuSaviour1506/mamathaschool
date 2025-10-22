import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Define custom text color for high contrast on light gradient boxes
  const cardTextColor = {
    color: '#111827', // Text dark/black for contrast
  };

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000046] to-[#1cb5e0] transition-colors duration-500">
        <p className="text-xl text-white">Loading Gallery...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000046] to-[#1cb5e0] transition-colors duration-500">
        <p className="text-xl text-red-400">{error}</p>
      </div>
    );
  }

  return (
    // Outer container: Dark Blue to Light Blue Gradient: #000046 → #1cb5e0
    <div 
        id="gallery" 
        className="bg-gradient-to-br from-[#000046] to-[#1cb5e0] text-white min-h-screen p-8 md:p-16 transition-colors duration-500"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-accent-gold dark:text-accent-red">School Moments</h1>
          <p className="text-lg sm:text-xl text-gray-200 dark:text-gray-400">
            Capture the energy and passion of our students.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {photos.length > 0 ? (
            photos.map((photo) => (
              <div 
                key={photo._id} 
                className="group relative overflow-hidden rounded-lg shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.05] border-4 border-transparent hover:border-[#f2c94c]"
                style={{ backgroundImage: 'linear-gradient(to right, #f2994a, #f2c94c)' }} // Orange-to-Gold Card Style
                onClick={() => openModal(photo)}
              >
                <img 
                  src={photo.imageUrl} 
                  alt="School Photo"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-primary-indigo opacity-0 group-hover:opacity-40 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2 bg-black bg-opacity-50 rounded-full">
                    Click to View
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-300 p-8">No photos have been uploaded by the admin yet.</p>
          )}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100] p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div 
                className="relative p-2 bg-white dark:bg-gray-800 rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={selectedImage.imageUrl}
                    alt="Full size school photo"
                    className="max-w-full max-h-[90vh] rounded-lg border-4 border-accent-gold"
                />
                <button
                    onClick={closeModal}
                    className="absolute top-0 right-0 m-2 text-white bg-red-600 hover:bg-red-700 text-3xl font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                    aria-label="Close image view"
                >
                    &times;
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
