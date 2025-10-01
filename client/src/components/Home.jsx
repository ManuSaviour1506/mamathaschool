import React, { useState, useEffect } from 'react';

const homeStyles = {
  background: 'linear-gradient(to right, #ffffff, #abbaab)',
};

function Home() {
  const images = [
    'https://res.cloudinary.com/ddgfjerss/image/upload/v1759089787/MAMATHA_HIGH_SCHOOL_kcfhog.png',
    'https://res.cloudinary.com/ddgfjerss/image/upload/v1759090229/MAMATHA_HIGH_vwe6va.png',
    'https://res.cloudinary.com/ddgfjerss/image/upload/v1759089787/MAMATHA_HIGH_SCHOOL_kcfhog.png',
    'https://res.cloudinary.com/ddgfjerss/image/upload/v1759089787/MAMATHA_HIGH_SCHOOL_kcfhog.png',
    'https://res.cloudinary.com/ddgfjerss/image/upload/v1759089787/MAMATHA_HIGH_SCHOOL_kcfhog.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div id="home" className="min-h-screen text-gray-900 dark:text-white">
      
      {/* Top Section: Full-width Image Carousel */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt="MAMATHA SCHOOL"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>

      {/* Bottom Section: Content */}
      <div className="p-8 md:p-16 text-black" style={homeStyles}>
        <div className="container mx-auto">
          <section className="py-8">
            <h2 className="text-4xl font-bold mb-4 text-center">School Details</h2>
            <div className="max-w-4xl mx-auto text-lg leading-relaxed text-center">
              <p className="mb-4">
                **MAMATHA SCHOOL** is committed to providing a stimulating and supportive environment for students from diverse backgrounds. Our dedicated faculty uses innovative teaching methods to ensure every student reaches their full academic and personal potential.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Established in 1995</li>
                <li>State-of-the-art facilities</li>
                <li>Highly qualified and experienced faculty</li>
                <li>A wide range of extracurricular activities</li>
              </ul>
            </div>
          </section>

          <hr className="my-10 border-white opacity-50" />
          
          <section className="py-8">
            <h2 className="text-4xl font-bold mb-4 text-center">Our Aim & Mission</h2>
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Our mission is to foster a love for learning, critical thinking, and social responsibility. We aim to empower students with the knowledge and skills they need to succeed in a rapidly changing world, while instilling strong values and compassion.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;