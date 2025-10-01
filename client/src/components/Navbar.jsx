import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import { useAuth } from '../hooks/useAuth.js';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleNavLinkClick = (path) => {
    setIsMenuOpen(false);
    window.location.href = path;
  };

  return (
    <nav
      className="p-3 shadow-xl sticky top-0 z-50 text-white transition-colors duration-500 bg-primary-indigo"
      style={{ backgroundImage: 'linear-gradient(to right, #0077b6, #00b4d8)' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo and School Name */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-extrabold tracking-wider whitespace-nowrap">MAMATHA SCHOOL</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 text-sm font-medium mt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-white hover:text-accent-gold transition-colors duration-200 hover:scale-105"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Admin Buttons, Theme Toggle, Mobile Menu */}
        <div className="flex items-center space-x-3 md:space-x-4">

          {/* Admin Buttons */}
          <div className="hidden md:block">
            {token ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className="text-white hover:text-accent-gold transition-colors duration-200 mr-4 font-semibold"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-white hover:bg-accent-gold hover:text-text-dark transition-all duration-200 font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="px-4 py-2 bg-white text-primary-indigo font-semibold rounded-full shadow-md hover:bg-accent-gold transition-all duration-200 hover:text-text-dark"
              >
                Admin Login
              </Link>
            )}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2 text-white hover:stroke-yellow-400 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6 transition-colors duration-200"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-[68px] left-0 w-full bg-primary-indigo shadow-lg transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'max-h-screen border-t border-white border-opacity-10' : 'max-h-0'
        }`}
        style={{
          background: 'linear-gradient(to bottom, #0077b6, #00b4d8)'
        }}
      >
        <div className={`overflow-hidden transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => handleNavLinkClick(link.path)}
              className="block px-4 py-3 text-lg text-white border-b border-white border-opacity-10 hover:bg-accent-gold hover:text-text-dark transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
