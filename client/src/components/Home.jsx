import React, { useState, useEffect } from 'react';

function Home() {
  const homeStyles = {
    background: 'linear-gradient(to right, #F4E2D8, #BA5370)',
  };

  const images = [
    'https://ik.imagekit.io/your_imagekit_id/school_image1.jpg',
    'https://ik.imagekit.io/your_imagekit_id/school_image2.jpg',
    'https://ik.imagekit.io/your_imagekit_id/school_image3.jpg',
    'https://ik.imagekit.io/your_imagekit_id/school_image4.jpg',
    'https://ik.imagekit.io/your_imagekit_id/school_image5.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div id="home" style={homeStyles} className="p-8 text-white">
      <div className="container mx-auto">
        <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section: School Details */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">School Details</h2>
            <p className="mb-4 text-lg">
              **MAMATHA SCHOOL** is committed to providing a stimulating and supportive environment for students from diverse backgrounds. Our dedicated faculty uses innovative teaching methods to ensure every student reaches their full academic and personal potential.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Established in 1995</li>
              <li>State-of-the-art facilities</li>
              <li>Highly qualified and experienced faculty</li>
              <li>A wide range of extracurricular activities</li>
            </ul>
          </div>
          
          {/* Middle Section: Image Carousel */}
          <div className="relative overflow-hidden rounded-lg shadow-lg h-96">
            <img
              src={images[currentImageIndex]}
              alt="MAMATHA SCHOOL building exterior"
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: 1,
              }}
            />
          </div>
          
          {/* Right Section: Aim of School */}
          <div className="text-center md:text-right">
            <h2 className="text-4xl font-bold mb-4">Our Aim & Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to foster a love for learning, critical thinking, and social responsibility. We aim to empower students with the knowledge and skills they need to succeed in a rapidly changing world, while instilling strong values and compassion.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;