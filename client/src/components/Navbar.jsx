import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import { useAuth } from '../hooks/useAuth.js';

// SplitText Component for Text Animation
const SplitText = ({ text, className, onLetterAnimationComplete }) => {
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
    setIsMenuOpen(false);
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

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav
      className="p-2 md:p-3 lg:p-4 shadow-xl sticky top-0 z-50 transition-colors duration-500 text-text-dark dark:bg-gray-900 dark:text-white"
      style={navGradientStyle}
    >
      <div className="container mx-auto relative">
        
        {/* TOP ROW: Logo | Centered Title | Utilities */}
        <div className="grid grid-cols-3 items-center gap-2 md:gap-4 h-14 md:h-20 lg:h-24">
          
          {/* LEFT: Logo */}
          <div className="flex items-center justify-start relative z-10">
            <div className="flex-shrink-0 bg-transparent">
              <img
                src="/mamathalogo1.svg" 
                alt="School Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-20 md:w-20 lg:h-24 lg:w-24 bg-transparent object-contain"
              />
            </div>
          </div>

          {/* CENTER: School Name */}
          <div className="flex justify-center items-center col-span-1">
            {/* Desktop View: SplitText Animation */}
            <div className="hidden lg:block">
              <SplitText
                text="SRI MAMATHA SCHOOL"
                className="text-3xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-wider whitespace-nowrap bg-clip-text"
                onLetterAnimationComplete={handleAnimationComplete}
                style={textGradientStyle}
              />
            </div>
            {/* Tablet View */}
            <h1 
              className="hidden md:block lg:hidden text-2xl font-extrabold tracking-wide whitespace-nowrap bg-clip-text"
              style={textGradientStyle}
            >
              SRI MAMATHA SCHOOL
            </h1>
            {/* Mobile View */}
            <h1 
              className="md:hidden text-xs sm:text-sm font-extrabold tracking-tight whitespace-nowrap bg-clip-text"
              style={textGradientStyle}
            >
              SRI MAMATHA SCHOOL
            </h1>
          </div>

          {/* RIGHT: Admin Buttons (Desktop only), Theme Toggle, Mobile Menu Toggle */}
          <div className="flex items-center justify-end space-x-1 sm:space-x-2 lg:space-x-4 relative z-10">
            
            {/* Admin Buttons (Large Desktop Only) */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {token ? (
                <>
                  <Link
                    to="/admin/dashboard"
                    className="text-primary-indigo hover:text-accent-red transition-colors duration-200 font-semibold text-sm xl:text-base dark:text-white"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1.5 xl:px-4 xl:py-2 bg-accent-red rounded-full text-white hover:bg-primary-indigo transition-all duration-300 font-semibold shadow-md text-sm xl:text-base"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/admin/login"
                  className="px-3 py-1.5 xl:px-4 xl:py-2 bg-primary-indigo text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-accent-red transform hover:scale-105 text-sm xl:text-base"
                >
                  Admin Login
                </Link>
              )}
            </div>

            {/* Theme Toggle */}
            <div className="flex-shrink-0">
              <ThemeToggle />
            </div>

            {/* Mobile & Tablet Menu Toggle Button */}
            <button
              className="lg:hidden p-1 sm:p-1.5 text-primary-indigo dark:text-white hover:text-accent-red transition-colors duration-200 rounded-lg border border-primary-indigo dark:border-gray-700 flex-shrink-0" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300"
                fill="none"
                stroke="currentColor" 
                strokeWidth="2.5"
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
        
        {/* BOTTOM ROW: Desktop Navigation Links (Large screens only) */}
        <div className="hidden lg:flex justify-center items-center flex-wrap gap-1 xl:gap-2 2xl:gap-4 text-lg font-medium pt-2 pb-1 border-t border-primary-indigo border-opacity-30 dark:border-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => handleNavLinkClick(link.path)}
              className="relative text-primary-indigo dark:text-gray-200 font-semibold text-sm xl:text-base 2xl:text-lg overflow-hidden py-2 px-2 xl:px-3 group transition-all duration-300 rounded-full hover:text-white dark:hover:text-white" 
            >
              <span 
                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full bg-gradient-to-r from-primary-indigo to-accent-red"
              ></span>
              <span className="relative z-10 transition-colors duration-300 whitespace-nowrap">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      <div
        className={`lg:hidden absolute left-0 w-full shadow-2xl transition-all duration-300 ease-in-out z-40 bg-white dark:bg-gray-800 border-t-2 border-primary-indigo dark:border-gray-700 overflow-hidden ${
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ top: '100%' }}
      >
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto">
          {/* Navigation Links */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => handleNavLinkClick(link.path)}
                className="block px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg text-primary-indigo dark:text-gray-100 font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-indigo hover:to-accent-red hover:text-white active:bg-primary-indigo"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Admin Section (Mobile & Tablet - Only if logged in) */}
          {token && (
            <div className="p-4 sm:p-6 md:p-8 flex flex-col space-y-3 border-t-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide">Admin Panel</p>
              <Link 
                to="/admin/dashboard" 
                onClick={() => setIsMenuOpen(false)}
                className="text-primary-indigo dark:text-accent-gold font-bold text-sm sm:text-base md:text-lg hover:underline transition-all duration-200"
              >
                📊 Dashboard
              </Link>
              <button 
                onClick={handleLogout}
                className="text-accent-red font-bold text-left text-sm sm:text-base md:text-lg hover:underline transition-all duration-200"
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          style={{ top: '100%' }}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
