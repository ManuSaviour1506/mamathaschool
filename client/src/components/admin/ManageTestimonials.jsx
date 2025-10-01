import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

function ManageTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('https://mamathaschool.onrender.com/api/testimonials/admin', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTestimonials(response.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError('Failed to fetch testimonials. Check your connection or login status.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchTestimonials();
    }
  }, [token]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await axios.delete(`http://localhost:5001/api/testimonials/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchTestimonials(); // Refresh list
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to delete testimonial.');
      }
    }
  };

  const handleToggleApproval = async (id, isApproved) => {
    try {
      await axios.put(`http://localhost:5001/api/testimonials/${id}`, { isApproved: !isApproved }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTestimonials(); // Refresh list
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update testimonial status.');
    }
  };

  if (loading) {
    return <p className="text-center">Loading testimonials...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Testimonials</h2>
      <div className="grid grid-cols-1 gap-6">
        {testimonials.length > 0 ? (
          testimonials.map(testimonial => (
            <div 
              key={testimonial._id} 
              className={`p-6 rounded-lg shadow-sm border ${testimonial.isApproved ? 'border-green-400' : 'border-red-400'}`}
            >
              <p className="italic mb-2 text-sm text-gray-600 dark:text-gray-400">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.author} <span className="text-gray-500 dark:text-gray-400 text-xs">({testimonial.title})</span></div>
              
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleToggleApproval(testimonial._id, testimonial.isApproved)}
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    testimonial.isApproved ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                  } hover:opacity-90`}
                >
                  {testimonial.isApproved ? 'Un-approve' : 'Approve'}
                </button>
                <button
                  onClick={() => handleDelete(testimonial._id)}
                  className="px-4 py-1 rounded-full text-sm font-semibold bg-gray-300 text-gray-800 hover:bg-gray-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No testimonials submitted yet.</p>
        )}
      </div>
    </div>
  );
}

export default ManageTestimonials;
