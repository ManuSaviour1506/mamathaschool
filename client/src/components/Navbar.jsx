import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const navigate = useNavigate();
  const { token, clearToken } = useAuth();

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About Us', path: '#about' },
    { name: 'Academics', path: '#academics' }, // Changed to "Facilities"
    { name: 'Gallery', path: '#gallery' },
    { name: 'Admissions', path: '#admission' }, // Changed to "Admissions"
  ];

  const handleLogout = () => {
    clearToken();
    navigate('/admin/login');
  };

  const navStyles = {
    background: '#008080', // A shade of teal for the main navbar
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
  };

  const linkStyles = {
    background: 'linear-gradient(to right, #ffffff, #abbaab)', // Light gradient for button-style links
    color: '#000', // Black text for contrast
  };

  return (
    <nav 
      style={navStyles}
      className="p-4 shadow-md sticky top-0 z-50 text-white"
    >
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img 
          src="https://res.cloudinary.com/ddgfjerss/image/upload/v1759088816/Gemini_Generated_Image_v6onp2v6onp2v6on_rthhtp.png" 
          alt="New Generation Public School Logo" 
          className="h-16 w-auto" 
        />
      </div>
      
      {/* Middle Section: School Name & Navigation */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">MAMATHA HIGH SCHOOL</h1>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 text-sm mt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="py-2 px-4 rounded-full text-center hover:bg-gray-200 transition-colors"
              style={linkStyles}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
        
      {/* Right Section: Admin Login & Theme Toggle */}
      <div className="flex items-center justify-end space-x-4">
        {token ? (
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/admin/dashboard" className="text-white hover:text-gray-200 transition-colors">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-200 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden md:flex items-center">
            <Link
              to="/admin/login"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Admin Login
            </Link>
          </div>
        )}
        
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;