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
      
      {/* Hero Section: Fully Responsive Image Carousel - Optimized for 389px mobile */}
      <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        {/* Container with responsive height - Perfect for 389px width mobile */}
        <div className="relative w-full h-44 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem]">
          <img
            src={images[currentImageIndex]}
            alt="SRI MAMATHA SCHOOL - Education Excellence"
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out"
            loading="eager"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
          
          {/* Image indicators/dots */}
          <div className="absolute bottom-1.5 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white w-5 sm:w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-5 sm:py-12 md:py-16 lg:py-20 text-white transition-colors duration-500 bg-gradient-to-br from-[#000046] to-[#1cb5e0] dark:from-bg-dark-slate dark:to-gray-900">
        <div className="container mx-auto px-2.5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-8 md:gap-10 lg:gap-12">

            {/* School Details Card */}
            <div 
              className="p-3 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-2xl border-t-4 border-accent-red transition-all duration-300 transform hover:scale-[1.02] dark:shadow-xl"
              style={{ background: 'linear-gradient(to right, #f2994a, #f2c94c)' }}
            >
              <h2 className="text-base sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-4 md:mb-6 border-b-2 border-accent-red pb-1.5 sm:pb-2 text-gray-900 dark:text-white">
                School Details
              </h2>
              <p className="mb-1.5 sm:mb-4 text-[11px] sm:text-base md:text-lg font-light text-gray-800 dark:text-gray-200 leading-snug sm:leading-relaxed">
                <b>Sri Mamatha School</b> was founded in May 2009 by the Sri Mamatha Educational Society with the vision of nurturing young minds in a rural setting.
              </p>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2.5 md:space-y-3 text-[11px] sm:text-base md:text-lg font-normal pl-0.5 sm:pl-4 text-gray-800 dark:text-gray-200">
                <li className="hover:text-primary-indigo transition duration-300 leading-snug sm:leading-relaxed">
                  Established in <b>2009</b>
                </li>
                <li className="hover:text-primary-indigo transition duration-300 leading-snug sm:leading-relaxed">
                  Currently operates from a rented premises with 24 classrooms and administrative offices in constructed roof sheds.
                </li>
                <li className="hover:text-primary-indigo transition duration-300 leading-snug sm:leading-relaxed">
                  Includes a rented play area for student activities and sports.
                </li>
                <li className="hover:text-primary-indigo transition duration-300 leading-snug sm:leading-relaxed">
                  Future plans: A new site has been purchased for a permanent school building to better serve our growing community.
                </li>
              </ul>
            </div>

            {/* Mission Card */}
            <div 
              className="p-3 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-2xl border-t-4 border-accent-red transition-all duration-300 transform hover:scale-[1.02] dark:shadow-xl"
              style={{ background: 'linear-gradient(to right, #f2994a, #f2c94c)' }}
            >
              <h2 className="text-base sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-4 md:mb-6 border-b-2 border-accent-red pb-1.5 sm:pb-2 text-gray-900 dark:text-white">
                Our Aim & Mission
              </h2>
              <p className="text-[11px] sm:text-base md:text-lg leading-snug sm:leading-relaxed font-light text-gray-800 dark:text-gray-200">
                The primary aim of Sri Mamatha School is to provide quality education and holistic development to children from rural backgrounds, particularly those in the Kolleru Lake region.
              </p>
              <p className="text-[11px] sm:text-base md:text-lg leading-snug sm:leading-relaxed mt-1.5 sm:mt-4 font-normal italic border-l-4 border-primary-indigo pl-1.5 sm:pl-4 py-1.5 sm:py-2 text-gray-800 dark:text-gray-200 bg-white/30 rounded-r">
                We believe that rural children deserve equal — if not greater — educational opportunities than their urban counterparts. Our mission is to bridge this gap and empower rural children to thrive both academically and non-academically.
              </p>
              <a 
                href="#admission" 
                className="mt-3 sm:mt-6 md:mt-8 inline-block bg-primary-indigo text-white font-bold py-1.5 sm:py-3 px-4 sm:px-8 md:px-10 rounded-full shadow-lg hover:bg-accent-red transition-all duration-300 transform hover:scale-105 text-[11px] sm:text-base md:text-lg"
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
