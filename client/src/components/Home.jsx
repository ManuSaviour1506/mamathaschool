import React, { useState, useEffect } from 'react';

function Home() {
  const images = [
    'https://res.cloudinary.com/ddgfjerss/image/upload/v1760810488/Gemini_Generated_Image_9t5lso9t5lso9t5l_elddix.jpg',
   // Placeholder
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
      <div className="relative w-full h-[60vh] overflow-hidden">
       
        <img
          src={images[currentImageIndex]}
          alt="SRI MAMATHA SCHOOL"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        {/* Modern dark overlay for text contrast and depth */}
        <div className="absolute inset-0 bg-black opacity-30"></div> 
        {/* Centered Hero Text: Senior Dev Style (Text remains white for contrast with the image) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
        
        </div>
      </div>

      {/* Content Section: School Details & Mission (Outer container set to white) */}
      <div 
        className="p-8 md:p-16 bg-white dark:bg-bg-dark-slate text-primary-dark dark:text-white" // Set outer container to white BG
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Section 1: School Details - Card Style (Gradient BG applied here) */}
          <div 
            className="p-6 text-white rounded-xl shadow-2xl border-t-4 border-accent-red"
            style={{ background: 'linear-gradient(to right, #4f46e5, #4338ca)' }} // Indigo Gradient
          >
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-accent-red pb-2 text-white">School Details</h2>
            <p className="mb-4 text-lg font-light">
            <b>Sri Mamatha School </b>was founded in May 2009 by the Sri Mamatha Educational Society with the vision of nurturing young minds in a rural setting.
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg font-normal pl-4">
              <li className="hover:text-accent-red transition duration-300">Established in <b>2009</b></li>
              <li className="hover:text-accent-red transition duration-300">Currently operates from a rented premises with 24 classrooms and administrative offices in constructed roof sheds.</li>
              <li className="hover:text-accent-red transition duration-300">Includes a rented play area for student activities and sports.</li>
              <li className="hover:text-accent-red transition duration-300">Future plans: A new site has been purchased for a permanent school building to better serve our growing community.</li>
              
            </ul>
          </div>
          
          {/* Section 2: Aim & Mission - Card Style (Gradient BG applied here) */}
          <div 
            className="p-6 text-white rounded-xl shadow-2xl border-t-4 border-accent-red"
            style={{ background: 'linear-gradient(to right, #4f46e5, #4338ca)' }} // Indigo Gradient
          >
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-accent-red pb-2 text-white">Our Aim & Mission</h2>
            <p className="text-lg leading-relaxed font-light">
              The primary aim of Sri Mamatha School is to provide quality education and holistic development to children from rural backgrounds, particularly those in the Kolleru Lake region.
            </p>
            <p className="text-lg leading-relaxed mt-4 font-normal italic border-l-4 border-accent-red pl-4">
              We believe that rural children deserve equal — if not greater — educational opportunities than their urban counterparts. Our mission is to bridge this gap and empower rural children to thrive both academically and non-academically.
            </p>
            <a href="#admission" className="mt-8 inline-block bg-accent-red text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;