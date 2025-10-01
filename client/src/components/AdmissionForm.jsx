import React, { useState } from 'react';
import axios from 'axios';

const admissionFormStyles = {
  background: '#abbaab',
  background: '-webkit-linear-gradient(to right, #ffffff, #abbaab)',
  background: 'linear-gradient(to right, #ffffff, #abbaab)',
};

function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gradeApplyingFor: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

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

    try {
      await axios.post('http://localhost:5001/api/admission', formData);
      setMessage('Thank you for your application! We have received your submission and will contact you shortly.');
      setFormData({
        studentName: '',
        dateOfBirth: '',
        gradeApplyingFor: '',
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
      });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="admission" style={admissionFormStyles} className="min-h-screen p-4 md:p-8 lg:p-16 text-gray-900 dark:text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Online Admission Form</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Please fill out the form below to apply for admission.
        </p>
      </div>
      
      {message && (
        <div className={`p-4 mb-6 rounded-md text-center ${message.includes('Thank you') ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200' : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200'}`}>
          {message}
        </div>
      )}

      <div className="container mx-auto max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {/* Student Information */}
          <h2 className="text-2xl font-semibold mb-4">Student Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" id="studentName" name="studentName" value={formData.studentName} onChange={handleChange} required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-1">Date of Birth</label>
              <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="gradeApplyingFor" className="block text-sm font-medium mb-1">Grade Applying For</label>
            <input type="text" id="gradeApplyingFor" name="gradeApplyingFor" value={formData.gradeApplyingFor} onChange={handleChange} required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
          </div>

          {/* Parent/Guardian Information */}
          <h2 className="text-2xl font-semibold mb-4">Parent/Guardian Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="parentName" className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label htmlFor="parentEmail" className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" id="parentEmail" name="parentEmail" value={formData.parentEmail} onChange={handleChange} required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label htmlFor="parentPhone" className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="tel" id="parentPhone" name="parentPhone" value={formData.parentPhone} onChange={handleChange} required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
          </div>

          {/* Address Information */}
          <h2 className="text-2xl font-semibold mb-4">Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium mb-1">Street Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
              <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="zipCode" className="block text-sm font-medium mb-1">Zip Code</label>
              <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 mt-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdmissionForm;