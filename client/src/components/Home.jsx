import React, { useState, useEffect } from 'react';

function Home() {
  const images = [
    '/header1 copy.png',
    '/updatedhero2.png',
    '/updatedhero3.png',
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
      
      {/* Hero Section: Fully Responsive Image Carousel */}
      <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        {/* Container with fully responsive height for all devices */}
        <div className="relative w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`SRI MAMATHA SCHOOL - Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
          
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
          
          {/* Image indicators/dots - Fully responsive */}
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 md:space-x-2.5 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white w-6 sm:w-8 md:w-10 lg:w-12 h-1.5 sm:h-2 md:h-2.5' 
                    : 'bg-white/50 hover:bg-white/75 w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5'
                }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentImageIndex}
              />
            ))}
          </div>

          {/* Navigation arrows for desktop */}
          <button
            onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
            className="hidden md:flex absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full transition-all duration-300 z-10 items-center justify-center"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
            className="hidden md:flex absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full transition-all duration-300 z-10 items-center justify-center"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Section - Fully Responsive */}
      <div className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 text-white transition-colors duration-500 bg-gradient-to-br from-[#000046] to-[#1cb5e0] dark:from-bg-dark-slate dark:to-gray-900">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">

            {/* School Details Card - Fully Responsive */}
            <div 
              className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl shadow-2xl border-t-4 border-accent-red transition-all duration-300 transform hover:scale-[1.02] dark:shadow-xl"
              style={{ background: 'linear-gradient(to right, #f2994a, #f2c94c)' }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 border-b-2 border-accent-red pb-2 sm:pb-2.5 md:pb-3 text-gray-900 dark:text-white">
                School Details
              </h2>
              <p className="mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base lg:text-lg font-light text-gray-800 dark:text-gray-200 leading-relaxed">
                <b>Sri Mamatha School</b> was founded in May 2009 by the Sri Mamatha Educational Society with the vision of nurturing young minds in a rural setting.
              </p>
              <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3 text-xs sm:text-sm md:text-base lg:text-lg font-normal pl-1 sm:pl-2 md:pl-4 text-gray-800 dark:text-gray-200">
                <li className="hover:text-primary-indigo transition duration-300 leading-relaxed">
                  Established in <b>2009</b>
                </li>
                <li className="hover:text-primary-indigo transition duration-300 leading-relaxed">
                  Currently operates from a rented premises with 24 classrooms and administrative offices in constructed roof sheds.
                </li>
                <li className="hover:text-primary-indigo transition duration-300 leading-relaxed">
                  Includes a rented play area for student activities and sports.
                </li>
                <li className="hover:text-primary-indigo transition duration-300 leading-relaxed">
                  Future plans: A new site has been purchased for a permanent school building to better serve our growing community.
                </li>
              </ul>
            </div>

            {/* Mission Card - Fully Responsive */}
            <div 
              className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl shadow-2xl border-t-4 border-accent-red transition-all duration-300 transform hover:scale-[1.02] dark:shadow-xl"
              style={{ background: 'linear-gradient(to right, #f2994a, #f2c94c)' }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 border-b-2 border-accent-red pb-2 sm:pb-2.5 md:pb-3 text-gray-900 dark:text-white">
                Our Aim & Mission
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-light text-gray-800 dark:text-gray-200">
                The primary aim of Sri Mamatha School is to provide quality education and holistic development to children from rural backgrounds, particularly those in the Kolleru Lake region.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mt-2 sm:mt-3 md:mt-4 font-normal italic border-l-4 border-primary-indigo pl-2 sm:pl-3 md:pl-4 py-2 sm:py-2.5 md:py-3 text-gray-800 dark:text-gray-200 bg-white/30 rounded-r">
                We believe that rural children deserve equal — if not greater — educational opportunities than their urban counterparts. Our mission is to bridge this gap and empower rural children to thrive both academically and non-academically.
              </p>
              <a 
                href="#admission" 
                className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 inline-block bg-primary-indigo text-white font-bold py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-8 lg:px-10 rounded-full shadow-lg hover:bg-accent-red transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base lg:text-lg"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
