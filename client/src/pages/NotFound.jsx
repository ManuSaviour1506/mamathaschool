import React from 'react';
import { Link } from 'react-router-dom';

const notFoundStyles = {
  background: '#abbaab',
  backgroundImage: 'linear-gradient(to right, #ffffff, #abbaab)',
};

function NotFound() {
  return (
    <div style={notFoundStyles} className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl border-t-8 border-primary-indigo transition-colors duration-500">
        <h1 className="text-9xl font-extrabold text-primary-indigo dark:text-accent-gold mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-text-dark dark:text-white mt-4 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The galaxy you are searching for does not exist.
        </p>
        <Link 
          to="/" 
          className="mt-6 px-8 py-3 bg-primary-indigo text-white font-bold rounded-full shadow-lg hover:bg-accent-gold hover:text-text-dark transition-all duration-300 transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
