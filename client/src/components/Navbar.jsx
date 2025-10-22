import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import { useAuth } from '../hooks/useAuth.js';

// SplitText Component for Text Animation
const SplitText = ({ text, className, onLetterAnimationComplete, splitType = 'chars' }) => {
  const letters = text.split('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLetterAnimationComplete) {
        onLetterAnimationComplete();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [onLetterAnimationComplete]);

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <span 
          key={index} 
          className="inline-block transition-transform duration-500 ease-out hover:scale-110 hover:text-accent-gold"
          style={{ 
            display: 'inline-block',
            opacity: 1, 
            transform: 'translateY(0px)',
            animationDelay: `${index * 0.05}s`,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { token, clearToken } = useAuth();

  const navGradientStyle = {
    background: 'linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9)',
  };

  const textGradientStyle = {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'linear-gradient(to right, #c21500, #ffc500)',
  };

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
    setTimeout(() => {
        window.location.href = path;
    }, 100);
  };
  
  const handleAnimationComplete = () => {
    console.log('School name letters have animated!');
  };

  return (
    <nav
      className="p-2 md:p-3 shadow-xl sticky top-0 z-50 transition-colors duration-500 text-text-dark dark:bg-gray-900 dark:text-white"
      style={navGradientStyle}
    >
      <div className="container mx-auto relative">
        
        {/* TOP ROW: Logo | Centered Title | Utilities */}
        <div className="grid grid-cols-3 items-center h-14 md:h-24">
          
          {/* LEFT: Logo */}
          <div className="flex items-center space-x-2 relative z-10 justify-start">
            <div className="flex-shrink-0">
              <img
                src="/mamathalogo1.svg" 
                alt="School Logo"
                className="h-12 w-12 md:h-24 md:w-24"
              />
            </div>
          </div>

          {/* CENTER: School Name */}
          <div className="flex justify-center col-span-1">
            {/* Desktop View: SplitText Animation */}
            <div className="hidden md:block">
              <SplitText
                text="SRI MAMATHA SCHOOL"
                className="text-5xl lg:text-6xl font-extrabold tracking-wider whitespace-nowrap bg-clip-text"
                onLetterAnimationComplete={handleAnimationComplete}
                style={textGradientStyle}
              />
            </div>
            {/* Mobile View: Smaller text size */}
            <h1 
              className="md:hidden text-sm font-extrabold tracking-wide whitespace-nowrap bg-clip-text"
              style={textGradientStyle}
            >
              SRI MAMATHA SCHOOL
            </h1>
          </div>

          {/* RIGHT: Admin Buttons (Desktop only), Theme Toggle, Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:space-x-4 relative z-10 justify-end">
            
            {/* Admin Buttons (Desktop Only) */}
            <div className="hidden md:block">
              {token ? (
                <>
                  <Link
                    to="/admin/dashboard"
                    className="text-primary-indigo hover:text-accent-red transition-colors duration-200 mr-4 font-semibold dark:text-white"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-accent-red rounded-full text-white hover:bg-primary-indigo transition-all duration-300 font-semibold shadow-md"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/admin/login"
                  className="px-4 py-2 bg-primary-indigo text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-accent-red transform hover:scale-105"
                >
                  Admin Login
                </Link>
              )}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden p-2 text-primary-indigo dark:text-white hover:text-accent-red transition-colors duration-200 rounded-lg border dark:border-gray-700" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                stroke="currentColor" 
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
        
        {/* BOTTOM ROW: Desktop Navigation Links */}
        <div className="hidden md:flex justify-center space-x-2 lg:space-x-4 text-lg font-medium pt-2 pb-1 border-t border-primary-indigo border-opacity-30 dark:border-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => handleNavLinkClick(link.path)}
              className="relative text-primary-indigo dark:text-gray-200 font-semibold text-lg overflow-hidden py-2 px-3 group transition-all duration-300 rounded-full hover:text-white dark:hover:text-white" 
            >
              <span 
                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full bg-gradient-to-r from-primary-indigo to-accent-red"
              ></span>
              <span className="relative z-10 transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute left-0 w-full shadow-lg transition-all duration-300 ease-in-out z-40 bg-white dark:bg-gray-800 border-t dark:border-gray-700 ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ top: '56px' }}
      >
        <div className="overflow-hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => handleNavLinkClick(link.path)}
              className="relative block px-6 py-3 text-base text-primary-indigo dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 group hover:bg-primary-indigo hover:text-white"
            >
              {link.name}
            </a>
          ))}
          {/* Mobile Admin Links - Only show Dashboard and Logout if logged in */}
          {token && (
            <div className="p-4 flex flex-col space-y-3">
              <Link to="/admin/dashboard" className="text-primary-indigo dark:text-accent-gold font-bold">Dashboard</Link>
              <button onClick={handleLogout} className="text-accent-red font-bold text-left">Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;