import React from 'react';
import { Link } from 'react-router-dom';
import ManageGallery from '../components/admin/ManageGallery';
import ManageContacts from '../components/admin/ManageContacts';

const dashboardStyles = {
  background: '#abbaab',
  background: '-webkit-linear-gradient(to right, #ffffff, #abbaab)',
  background: 'linear-gradient(to right, #ffffff, #abbaab)',
};

function AdminDashboard() {
  return (
    <div style={dashboardStyles} className="min-h-screen text-gray-900 dark:text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Back to Home Page
          </Link>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gallery Management Section */}
          <ManageGallery />
          
          {/* Contact Management Section */}
          <ManageContacts />
        </div>
        
        {/* Admissions and Testimonials management removed per user request */}
      </div>
    </div>
  );
}

export default AdminDashboard;