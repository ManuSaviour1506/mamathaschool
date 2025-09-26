import React from 'react';
import ManageGallery from '../components/admin/ManageGallery';
import ManageTestimonials from '../components/admin/ManageTestimonials';
import ManageAdmissions from '../components/admin/ManageAdmissions';
import ManageContacts from '../components/admin/ManageContacts';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gallery Management Section */}
          <ManageGallery />
          
          {/* Testimonial Management Section */}
          <ManageTestimonials />
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Admissions Management Section */}
          <ManageAdmissions />

          {/* Contact Management Section */}
          <ManageContacts />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;