import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({ quote: '', author: '', title: '' });
  const [submitMessage, setSubmitMessage] = useState('');

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/testimonials/approved');
      setTestimonials(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch testimonials.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/testimonials', formData);
      setSubmitMessage('Thank you for your testimonial! It will be reviewed by an admin.');
      setFormData({ quote: '', author: '', title: '' });
    } catch (err) {
      setSubmitMessage(err.response?.data?.message || 'Failed to submit testimonial.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-xl text-gray-800 dark:text-gray-200">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-4 md:p-8 lg:p-16">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">What Our Community Says</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Hear from our students, parents, and alumni.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.length > 0 ? (
          testimonials.map(testimonial => (
            <div 
              key={testimonial._id} 
              className="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-lg italic mb-4">
                "{testimonial.quote}"
              </p>
              <div className="text-right">
                <p className="font-semibold text-blue-600 dark:text-blue-400">
                  - {testimonial.author}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No approved testimonials to display yet.</p>
        )}
      </div>

      <div className="mt-16 max-w-lg mx-auto p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Submit a Testimonial</h2>
        {submitMessage && (
          <p className="text-center mb-4 text-green-600 dark:text-green-400">{submitMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="quote" className="block text-sm font-medium mb-1">Your Testimonial</label>
            <textarea
              id="quote"
              name="quote"
              value={formData.quote}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium mb-1">Your Title (e.g., Parent, Student)</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Testimonial
          </button>
        </form>
      </div>
    </div>
  );
}

export default Testimonials;