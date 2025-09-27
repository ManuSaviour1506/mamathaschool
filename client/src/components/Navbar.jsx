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
    { name: 'Academics', path: '#academics' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Online Admission', path: '#admission' },
    { name: 'Contact Us', path: '#contact' },
  ];

  const handleLogout = () => {
    clearToken();
    navigate('/admin/login');
  };

  const navStyles = {
    background: 'linear-gradient(to right, #ff9068, #ff4b1f)',
  };

  return (
    <nav 
      style={navStyles}
      className="p-4 shadow-md sticky top-0 z-50 text-white"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo and School Name */}
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {/* Replace this with your school logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5zM7.5 11a.5.5 0 01.5-.5h4a.5.5 0 010 1H8a.5.5 0 01-.5-.5zM8.5 14a.5.5 0 01.5-.5h2a.5.5 0 010 1H9a.5.5 0 01-.5-.5z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold">MAMATHA SCHOOL</div>
            {/* Navigation links below the school name */}
            <div className="flex space-x-4 text-sm mt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-white hover:text-gray-200 transition-colors"
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
              <Link to="/admin/dashboard" className="text-white hover:text-gray-200 transition-colors">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-200 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/admin/login"
              className="text-white hover:text-gray-200 transition-colors"
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