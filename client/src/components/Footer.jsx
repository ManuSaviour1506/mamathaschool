import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-primary-indigo text-white py-12 shadow-inner dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-accent-gold pb-1">MAMATHA SCHOOL</h3>
          <p className="text-sm opacity-90">
            A center of excellence dedicated to developing intellectual and moral character in every student.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-accent-gold pb-1">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#academics" className="hover:text-accent-gold transition-colors duration-200">Academics</a></li>
            <li><a href="#gallery" className="hover:text-accent-gold transition-colors duration-200">Gallery</a></li>
            <li><a href="#admission" className="hover:text-accent-gold transition-colors duration-200">Admissions</a></li>
            <li><a href="#contact" className="hover:text-accent-gold transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-accent-gold pb-1">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <p>Chataparru, West Godavari, 534004</p>
            <p>Email: <a href="mailto:info@school.edu" className="hover:text-accent-gold">manusaviour5@gmail.com</a></p>
            <p>Phone: 6305748682</p>
          </div>
        </div>
        
        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-accent-gold pb-1">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="text-2xl hover:text-accent-gold transition-colors duration-200"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter" className="text-2xl hover:text-accent-gold transition-colors duration-200"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram" className="text-2xl hover:text-accent-gold transition-colors duration-200"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="text-sm mt-4 opacity-75">Join our community for updates.</p>
        </div>
      </div>
      
      <div className="text-center text-xs mt-10 border-t border-white border-opacity-20 pt-4">
        <p>&copy; {new Date().getFullYear()} STACKZY All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
