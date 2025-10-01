import React, { useState } from 'react';
import axios from 'axios';

function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gradeApplyingFor: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '', // Kept for server-side email notifications and logging
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Helper function to generate a temporary email address for the DB since it's required for the server
  // NOTE: You should ideally keep the real parentEmail field to contact them, but for this simplified request, we handle it internally.
  const generateTempEmail = () => {
    return `${formData.studentName.replace(/\s/g, '_').toLowerCase()}-${Date.now()}@temp.com`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    // Prepare data, including a mandatory email field for server-side mailing logic
    const submissionData = {
        ...formData,
        parentEmail: formData.parentEmail || generateTempEmail(), // Ensures a valid email is sent to the backend
    };

    try {
      // NOTE: You might need to update this URL if your server is running on a different port
      await axios.post('http://localhost:5001/api/admission', submissionData);
      setMessage('Application submitted successfully! We will contact you soon.');
      
      // Reset only the visible form fields
      setFormData({
        studentName: '',
        dateOfBirth: '',
        gradeApplyingFor: '',
        parentName: '',
        parentPhone: '',
        parentEmail: '',
      });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to submit application. Please ensure all fields are correct.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="admission" className="py-16 bg-bg-light dark:bg-bg-dark-slate text-text-dark dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-2 text-primary-indigo dark:text-accent-gold">Online Admission</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Start your child's journey with MAMATHA SCHOOL today.
          </p>
        </div>
        
        {message && (
          <div className={`p-4 mb-6 rounded-lg text-center font-medium max-w-2xl mx-auto ${message.includes('successfully') ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200' : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200'}`}>
            {message}
          </div>
        )}

        <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-t-8 border-primary-indigo">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Information */}
            <h2 className="text-2xl font-semibold border-b pb-2 text-primary-indigo dark:text-accent-gold">1. Student Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium mb-1">Full Name</label>
                <input type="text" id="studentName" name="studentName" value={formData.studentName} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-accent-gold focus:border-accent-gold dark:bg-gray-700 dark:border-gray-600 transition duration-200" />
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-1">Date of Birth</label>
                <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-accent-gold focus:border-accent-gold dark:bg-gray-700 dark:border-gray-600 transition duration-200" />
              </div>
              <div>
                <label htmlFor="gradeApplyingFor" className="block text-sm font-medium mb-1">Grade Applying For</label>
                <input type="text" id="gradeApplyingFor" name="gradeApplyingFor" value={formData.gradeApplyingFor} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-accent-gold focus:border-accent-gold dark:bg-gray-700 dark:border-gray-600 transition duration-200" />
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <h2 className="text-2xl font-semibold border-b pb-2 text-primary-indigo dark:text-accent-gold pt-4">2. Parent Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium mb-1">Parent's Full Name</label>
                <input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-accent-gold focus:border-accent-gold dark:bg-gray-700 dark:border-gray-600 transition duration-200" />
              </div>
              <div>
                <label htmlFor="parentPhone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input type="tel" id="parentPhone" name="parentPhone" value={formData.parentPhone} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-accent-gold focus:border-accent-gold dark:bg-gray-700 dark:border-gray-600 transition duration-200" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full p-4 mt-6 bg-primary-indigo text-white font-bold rounded-full shadow-xl hover:bg-accent-gold hover:text-text-dark transition-all duration-300 transform hover:scale-[1.01] disabled:bg-gray-500"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdmissionForm;
