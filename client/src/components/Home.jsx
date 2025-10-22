import React, { useState, useEffect } from 'react';

function Home() {
  const images = [
    '/header1 copy.png',
    '/hero2 copy.png',
    '/hero3.png',
    '/hero4.png',
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
      
      {/* Hero Section: Dynamic Image Carousel with Overlay Text */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[550px] overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt="SRI MAMATHA SCHOOL"
          className="w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out" 
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* Centered overlay text (currently empty) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          {/* You can add heading/subheading text here if needed */}
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 text-white transition-colors duration-500 bg-gradient-to-br from-[#000046] to-[#1cb5e0] dark:from-bg-dark-slate dark:to-gray-900">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* School Details Card */}
          <div 
            className="p-8 rounded-2xl shadow-2xl border-t-4 border-accent-red transition-all duration-300 transform hover:scale-[1.02] dark:shadow-xl"
            style={{ background: 'linear-gradient(to right, #f2994a, #f2c94c)' }}
          >
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-accent-red pb-2 text-gray-900 dark:text-white">School Details</h2>
            <p className="mb-4 text-lg font-light text-gray-800 dark:text-gray-200">
              <b>Sri Mamatha School</b> was founded in May 2009 by the Sri Mamatha Educational Society with the vision of nurturing young minds in a rural setting.
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg font-normal pl-4 text-gray-800 dark:text-gray-200">
              <li className="hover:text-primary-indigo transition duration-300">Established in <b>2009</b></li>
              <li className="hover:text-primary-indigo transition duration-300">Currently operates from a rented premises with 24 classrooms and administrative offices in constructed roof sheds.</li>
              <li className="hover:text-primary-indigo transition duration-300">Includes a rented play area for student activities and sports.</li>
              <li className="hover:text-primary-indigo transition duration-300">Future plans: A new site has been purchased for a permanent school building to better serve our growing community.</li>
            </ul>
          </div>

          {/* Mission Card */}
          <div 
            className="p-8 rounded-2xl shadow-2xl border-t-4 border-accent-red transition-all duration-300 transform hover:scale-[1.02] dark:shadow-xl"
            style={{ background: 'linear-gradient(to right, #f2994a, #f2c94c)' }}
          >
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-accent-red pb-2 text-gray-900 dark:text-white">Our Aim & Mission</h2>
            <p className="text-lg leading-relaxed font-light text-gray-800 dark:text-gray-200">
              The primary aim of Sri Mamatha School is to provide quality education and holistic development to children from rural backgrounds, particularly those in the Kolleru Lake region.
            </p>
            <p className="text-lg leading-relaxed mt-4 font-normal italic border-l-4 border-primary-indigo pl-4 text-gray-800 dark:text-gray-200">
              We believe that rural children deserve equal — if not greater — educational opportunities than their urban counterparts. Our mission is to bridge this gap and empower rural children to thrive both academically and non-academically.
            </p>
            <a href="#admission" className="mt-8 inline-block bg-primary-indigo text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-accent-red transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
