import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitMessage, setSubmitMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Define custom text color for high contrast on light gradient boxes
  const cardTextColor = {
    color: '#111827', // Text dark/black for contrast
  };
  
  // Define input class for styling consistency
  const inputClasses = "w-full p-3 border rounded-lg focus:ring-accent-red focus:border-accent-red transition duration-200";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitMessage('');

    try {
      // NOTE: Using localhost here, ensure this is updated to your production endpoint in a final build.
      await axios.post('https://mamathaschool.onrender.com/api/contact', formData);
      setSubmitMessage(
        'Thank you for your message! We will get back to you shortly.'
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setSubmitMessage(
        err.response?.data?.message ||
          'Failed to send message. Please check your network.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    // Outer container: Dark Blue to Light Blue Gradient: #000046 → #1cb5e0
    <div
      id="contact"
      className="py-16 text-white transition-colors duration-500 bg-gradient-to-br from-[#000046] to-[#1cb5e0] dark:from-bg-dark-slate dark:to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-accent-gold dark:text-accent-red">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 dark:text-gray-400">
            We are here to answer your questions.
          </p>
        </div>

        {submitMessage && (
          <div
            className={`p-4 mb-6 rounded-lg text-center font-medium max-w-2xl mx-auto ${
              submitMessage.includes('Thank you')
                ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200'
                : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200'
            }`}
          >
            {submitMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information Column - Vibrant Gradient Box */}
          <div 
            className="lg:col-span-1 p-6 rounded-xl shadow-2xl"
            style={{ backgroundImage: 'linear-gradient(to right, #f2994a, #f2c94c)' }} // Orange-to-Gold
          >
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-primary-indigo pb-2" style={cardTextColor}>
              Our Details
            </h3>
            <div className="space-y-4 text-lg" style={cardTextColor}>
              <p>
                <strong>Address:</strong> Chataparru, West Godavari ,534004
              </p>
              <p>
                <strong>Email:</strong>srimamathaschool@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 99892 77570, +91 94413 45374
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 border-b-2 border-primary-indigo pb-2" style={cardTextColor}>
              Location
            </h3>
            <div className="rounded-lg overflow-hidden h-64 shadow-xl border-4 border-primary-indigo">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.605444701561!2d81.1639007145018!3d16.69661608401113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a363f50ff3d1bf1%3A0x5f1261ae62d5c730!2sSri%20Mamatha%20School!5e0!3m2!1sen!2sin!4v1759252664854!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form Column - Vibrant Gradient Box */}
          <div 
            className="lg:col-span-2 p-8 rounded-xl shadow-2xl border-t-8 border-primary-indigo"
            style={{ backgroundImage: 'linear-gradient(to right, #f2994a, #f2c94c)' }} // Orange-to-Gold
          >
            <h2 className="text-3xl font-bold mb-6 text-primary-indigo" style={cardTextColor}>
              Send Us A Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={cardTextColor}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>
              <div style={cardTextColor}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className={inputClasses}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="p-4 bg-primary-indigo text-white font-bold rounded-full shadow-xl hover:bg-accent-red hover:text-white transition-all duration-300 transform hover:scale-[1.01] disabled:bg-gray-500 w-full"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
