import React, { useState, useEffect } from 'react';

function Home() {
  const images = [
    'https://res.cloudinary.com/ddgfjerss/image/upload/v1759089787/MAMATHA_HIGH_SCHOOL_kcfhog.png',
    'https://res.cloudinary.com/ddgfjerss/image/upload/v1759090229/MAMATHA_HIGH_vwe6va.png',
    'https://res.cloudinary.com/ddgfjerss/image/upload/v1759089787/MAMATHA_HIGH_SCHOOL_kcfhog.png', // Placeholder
    'https://res.cloudinary.com/ddgfjerss/image/upload/v1759090229/MAMATHA_HIGH_vwe6va.png', // Placeholder
    'https://res.cloudinary.com/ddgfjerss/image/upload/v1759089787/MAMATHA_HIGH_SCHOOL_kcfhog.png', // Placeholder
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div id="home" className="text-gray-900 dark:text-white transition-colors duration-500">
      
      {/* Hero Section: Image Carousel (50vh) */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt="MAMATHA SCHOOL"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>

      {/* Content Section: School Details & Mission (Gradient Background) */}
      <div 
        className="p-8 md:p-16 text-white" 
        style={{ background: 'linear-gradient(to right, #4f46e5, #4338ca)' }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Section 1: School Details */}
          <div>
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-accent-gold pb-2">School Details</h2>
            <p className="mb-4 text-lg">
              **MAMATHA SCHOOL** is committed to providing a stimulating and supportive environment for students from diverse backgrounds. Our dedicated faculty ensures every student reaches their full academic and personal potential.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg pl-4">
              <li className="hover:text-accent-gold transition">Established in 1995</li>
              <li className="hover:text-accent-gold transition">State-of-the-art facilities</li>
              <li className="hover:text-accent-gold transition">Highly qualified and experienced faculty</li>
              <li className="hover:text-accent-gold transition">Wide range of extracurricular activities</li>
            </ul>
          </div>
          
          {/* Section 2: Aim & Mission */}
          <div>
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-accent-gold pb-2">Our Aim & Mission</h2>
            <p className="text-lg leading-relaxed">
              Our core mission is to foster a love for learning, critical thinking, and social responsibility. We empower students with the knowledge and skills needed to succeed in a rapidly changing world, while instilling strong values and compassion.
            </p>
            <a href="#admission" className="mt-6 inline-block bg-accent-gold text-text-dark font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
                Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;