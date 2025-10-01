import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// The useAuth hook is not needed here since the token is saved directly
// import { useAuth } from '../hooks/useAuth';

const adminLoginStyles = {
  background: '#abbaab',
  background: '-webkit-linear-gradient(to right, #ffffff, #abbaab)',
  background: 'linear-gradient(to right, #ffffff, #abbaab)',
};

function AdminLogin() {
  const [username, setUsername] = useState(''); // Corrected from email to username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // No need to destructure useAuth here, as the token is handled in localStorage directly
  // const { saveToken } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Corrected the payload to send 'username'
      const response = await axios.post('http://localhost:5001/api/auth/login', { username, password });
      
      // Save the token directly to localStorage
      localStorage.setItem('adminToken', response.data.token);
      
      navigate('/admin/dashboard');

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div style={adminLoginStyles} className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Admin Login</h2>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text" // Changed type to text for username
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
              type="submit"
            >
              Sign In
            </button>
            <Link
              to="/"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;