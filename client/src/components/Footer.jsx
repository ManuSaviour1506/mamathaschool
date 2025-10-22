import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  // New gradient style matching the latest Navbar request
  const footerGradientStyle = {
    background: 'linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9)',
  };

  return (
    <footer 
      className="py-12 shadow-inner transition-colors duration-500 text-gray-900 dark:bg-gray-900"
      style={footerGradientStyle}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section (Dark text for contrast on the light gradient) */}
        <div className="text-gray-900 dark:text-white">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-900 pb-1 dark:border-accent-gold">MAMATHA SCHOOL</h3>
          <p className="text-sm opacity-90">
            A center of excellence dedicated to developing intellectual and moral character in every student.
          </p>
        </div>
        
        {/* Quick Links (Dark text for contrast on the light gradient) */}
        <div className="text-gray-900 dark:text-white">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-900 pb-1 dark:border-accent-gold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#academics" className="hover:text-red-700 transition-colors duration-200 dark:hover:text-accent-gold">Academics</a></li>
            <li><a href="#gallery" className="hover:text-red-700 transition-colors duration-200 dark:hover:text-accent-gold">Gallery</a></li>
            <li><a href="#admission" className="hover:text-red-700 transition-colors duration-200 dark:hover:text-accent-gold">Admissions</a></li>
            <li><a href="#contact" className="hover:text-red-700 transition-colors duration-200 dark:hover:text-accent-gold">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Info (Dark text for contrast on the light gradient) */}
        <div className="text-gray-900 dark:text-white">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-900 pb-1 dark:border-accent-gold">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <p>Chataparru, West Godavari, 534004</p>
            <p>Email: <a href="mailto:srimamathaschool@gmail.com" className="hover:text-red-700 dark:hover:text-accent-gold">srimamathaschool@gmail.com</a></p>
            <p>Phone: +91 99892 77570</p>
            <p>Phone: +91 94413 45374</p>
          </div>
        </div>
        
        {/* Social Media & Newsletter (Dark text for contrast on the light gradient) */}
        <div className="text-gray-900 dark:text-white">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-900 pb-1 dark:border-accent-gold">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="text-2xl hover:text-red-700 transition-colors duration-200 dark:hover:text-accent-gold"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter" className="text-2xl hover:text-red-700 transition-colors duration-200 dark:hover:text-accent-gold"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram" className="text-2xl hover:text-red-700 transition-colors duration-200 dark:hover:text-accent-gold"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="text-sm mt-4 opacity-75">Join our community for updates.</p>
        </div>
      </div>
      
      <div className="text-center text-xs mt-10 border-t border-gray-900 border-opacity-20 pt-4">
        <p className="text-gray-900 dark:text-white">&copy; {new Date().getFullYear()} STACKZY All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
