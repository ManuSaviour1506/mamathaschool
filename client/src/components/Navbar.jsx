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
    // Use setTimeout to allow the menu to close before navigation happens
    setTimeout(() => {
        window.location.href = path;
    }, 100);
  };

  return (
    <nav
      className="p-3 shadow-xl sticky top-0 z-50 transition-colors duration-500 text-primary-dark" // Changed text to primary-dark
      style={{ backgroundImage: 'linear-gradient(90deg, #E3F2FD, #BBDEFB, #90CAF9)' }} // New light blue gradient
    >
      <div className="container mx-auto relative">
        
        {/* ======================= TOP ROW: Logo | Centered Title | Utilities ======================= */}
        <div className="flex justify-between items-center h-12 md:h-20">
          
          {/* LEFT: Logo and Smaller Name for Mobile */}
          <div className="flex items-center space-x-3 relative z-10">
            <div className="flex-shrink-0">
              {/* Updated to use a standard <img> tag for the external SVG link */}
              <img
                src="https://res.cloudinary.com/ddgfjerss/image/upload/v1760809093/NEWLOGOBGR_lnks2s.svg"
                alt="School Logo"
                className="h-20 w-20"
              />
            </div>
            {/* Show name on mobile only, as the larger version is centered on desktop */}
            <div className="text-lg font-extrabold tracking-wider whitespace-nowrap md:hidden text-primary-dark">SRI MAMATHA SCHOOL</div> {/* Text color updated */}
          </div>

          {/* CENTER: LARGE School Name (Desktop Only, Centered) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="text-6xl font-extrabold tracking-wider whitespace-nowrap text-primary-dark">SRI MAMATHA SCHOOL</div> {/* Text color updated */}
          </div>

          {/* RIGHT: Admin Buttons, Theme Toggle, Mobile Menu Toggle */}
          <div className="flex items-center space-x-3 md:space-x-4 relative z-10">
            
            {/* Admin Buttons (Desktop) */}
            <div className="hidden md:block">
              {token ? (
                <>
                  <Link
                    to="/admin/dashboard"
                    className="text-primary-dark hover:text-accent-red transition-colors duration-200 mr-4 font-semibold" // Text color updated
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1 bg-primary-dark rounded-full text-white hover:bg-accent-red hover:text-white transition-all duration-200 font-semibold" // Style adjusted for visibility on light background
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/admin/login"
                  className="px-4 py-2 bg-primary-dark text-white font-semibold rounded-full shadow-md hover:bg-accent-red transition-all duration-200 hover:text-white" // Style adjusted for visibility on light background
                >
                  Admin Login
                </Link>
              )}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden p-2 text-primary-dark hover:stroke-accent-red transition-colors duration-200" // Text color updated
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6 transition-colors duration-200"
                fill="none"
                stroke="currentColor" // Inherits primary-dark color
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
        
        {/* ======================= BOTTOM ROW: Desktop Navigation Links ======================= */}
        <div className="hidden md:flex justify-center space-x-8 text-lg font-medium pt-2 pb-1 border-t border-primary-dark border-opacity-30">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => handleNavLinkClick(link.path)}
              className="text-primary-dark hover:text-accent-red transition-colors duration-200 hover:scale-105" // Text color updated
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Drawer (Hidden on Desktop) */}
      <div
        className={`md:hidden absolute top-[80px] left-0 w-full shadow-lg transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'max-h-screen border-t border-primary-dark border-opacity-10' : 'max-h-0'
        }`}
        style={{
          background: 'linear-gradient(to bottom, #E3F2FD, #BBDEFB)' // Adjusted to a simpler light blue gradient
        }}
      >
        <div className={`overflow-hidden transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => handleNavLinkClick(link.path)}
              className="block px-4 py-3 text-lg text-primary-dark border-b border-primary-dark border-opacity-10 hover:bg-accent-red hover:text-white transition-colors duration-150" // Text color updated
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