import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import { useAuth } from '../hooks/useAuth.js';

function Navbar() {
  const navigate = useNavigate();
  const { token, clearToken } = useAuth();

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About Us', path: '#about' },
    { name: 'Academics', path: '#academics' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Admission', path: '#admission' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleLogout = () => {
    clearToken();
    navigate('/admin/login');
  };

  return (
    <nav 
      className="p-3 shadow-xl sticky top-0 z-50 text-white bg-primary-blue transition-colors duration-500"
      style={{ backgroundImage: 'linear-gradient(to right, #0077b6, #00b4d8)' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo and School Name */}
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {/* Simple Logo Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-extrabold tracking-wider">MAMATHA SCHOOL</div>
            {/* Navigation links below the school name - Responsive collapse on small screens */}
            <div className="hidden md:flex space-x-6 text-sm font-medium mt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-white hover:text-accent-teal transition-colors duration-200 hover:scale-105"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Section: Admin/Logout and Theme Toggle */}
        <div className="flex items-center space-x-4">
          {token ? (
            <>
              <Link to="/admin/dashboard" className="text-white hover:text-accent-teal transition-colors duration-200">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-40 transition-all duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/admin/login"
              className="px-4 py-2 bg-white text-primary-blue font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all duration-200"
            >
              Admin Login
            </Link>
          )}
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
