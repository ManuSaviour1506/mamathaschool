import React from 'react';

function Popup({ imageUrl, onClose, onContactClick }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]">
      <div className="relative p-4 max-w-lg mx-auto bg-white rounded-lg shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-3xl font-bold p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Popup Image */}
        <img
          src="https://res.cloudinary.com/ddgfjerss/image/upload/v1722969266/cld-sample-2.jpg"
          alt="Promotional Offer"
          className="w-full h-auto rounded-lg mb-4"
        />

        {/* Contact Us Button */}
        <button
          onClick={onContactClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition-colors"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Popup;