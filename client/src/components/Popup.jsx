import React from 'react';

function Popup({ imageUrl, onClose, onContactClick }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] backdrop-blur-sm">
      <div className="relative p-6 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-t-4 border-accent-gold transition-transform duration-500 transform scale-100 hover:scale-[1.02]">
        
        {/* Close Button (Styled for visibility and interaction) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 text-2xl font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Popup Image */}
        <img
          src="https://res.cloudinary.com/ddgfjerss/image/upload/v1759251457/LOGO_azfnhx.png"
          alt="Promotional Offer"
          className="w-full h-auto rounded-lg shadow-md mb-6"
        />

        {/* Dynamic Title/Message */}
        <p className="text-center text-xl font-bold mb-4 text-primary-indigo dark:text-white">
            Ready to start their journey?
        </p>

        {/* Contact Us Button (Styled with primary theme colors) */}
        <button
          onClick={onContactClick}
          className="w-full bg-primary-indigo hover:bg-accent-gold hover:text-text-dark text-white font-bold py-3 px-4 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Contact Us Now
        </button>
      </div>
    </div>
  );
}

export default Popup;