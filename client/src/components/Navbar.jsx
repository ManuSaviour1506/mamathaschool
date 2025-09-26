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

  return (
    <nav className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        <a href="#home">School Name</a>
      </div>
      <div className="flex items-center space-x-4">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {link.name}
          </a>
        ))}
        
        {token ? (
          <>
            <Link to="/admin/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/admin/login"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Admin Login
          </Link>
        )}
        
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;