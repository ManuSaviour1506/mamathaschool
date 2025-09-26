import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm">
            Providing quality education and fostering a nurturing environment for students to thrive.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/academics" className="hover:text-blue-500">Academics</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-500">Gallery</Link></li>
            <li><Link to="/admission" className="hover:text-blue-500">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
          <p className="text-sm">
            123 School Lane, City, State, 12345<br />
            Email: info@school.edu<br />
            Phone: (123) 456-7890
          </p>
        </div>
        
        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            {/* Social Media Icons (replace with actual links) */}
            <a href="#" aria-label="Facebook" className="text-xl hover:text-blue-500 transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter" className="text-xl hover:text-blue-500 transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram" className="text-xl hover:text-blue-500 transition-colors"><i className="fab fa-instagram"></i></a>
          </div>
          
          <h3 className="text-lg font-bold mb-2">Newsletter</h3>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 w-full rounded-l-md border dark:bg-gray-700 dark:border-gray-600 focus:outline-none" 
            />
            <button 
              type="submit" 
              className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="text-center text-sm mt-8">
        <p>&copy; {new Date().getFullYear()} School Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;