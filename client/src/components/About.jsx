import React from 'react';

// Removed the redundant style object

function About() {
  return (
    <div id="about" className="py-16 bg-bg-light dark:bg-bg-dark-slate text-text-dark transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-primary-indigo dark:text-accent-gold">About MAMATHA SCHOOL</h2>

        {/* Section 1: Who We Are - Image Left */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-card-hover">
          <div className="md:w-2/5 flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/ddgfjerss/image/upload/v1759251463/Screenshot_2025-09-29_at_1.14.25_AM_x4byzg.png"
              alt="Teacher working with students"
              className="w-full h-auto object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          <div className="md:w-3/5 text-text-dark dark:text-white">
            <h3 className="text-3xl font-bold mb-4 text-primary-indigo dark:text-accent-gold border-b-2 border-accent-gold pb-2">WHO WE ARE</h3>
            <p className="text-lg leading-relaxed border-l-4 border-accent-gold pl-4">
              The world today is a global village and people are its citizens. As boundaries of location, people and time cease to exist, it is of utmost importance that we move with the times. At MAMATHA SCHOOL, we have created a unique blend of world-class curricula, contemporary teaching methodologies, and equal focus on intellectual, physical and personality development, resulting in future leaders who are ready to take on the world.
            </p>
            <p className="text-md mt-4 text-gray-600 dark:text-gray-400">
                Our legacy includes producing world-class professionals across various fields, a testament to our dedication to excellence.
            </p>
          </div>
        </div>
        
        {/* Section 2: Vision and Mission - Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="p-8 bg-primary-indigo dark:bg-gray-700 text-white rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-card-hover">
                <h3 className="text-4xl font-extrabold mb-4 border-b-4 border-accent-gold pb-2">VISION</h3>
                <p className="text-lg leading-relaxed">
                    To be the leading educational institution recognized globally for fostering critical thinkers, compassionate citizens, and lifelong learners, prepared for the challenges of the 21st century.
                </p>
            </div>
            
            {/* Mission Card */}
            <div className="p-8 bg-primary-indigo dark:bg-gray-700 text-white rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-card-hover">
                <h3 className="text-4xl font-extrabold mb-4 border-b-4 border-accent-gold pb-2">MISSION</h3>
                <p className="text-lg leading-relaxed">
                    To provide a holistic, rigorous, and personalized learning environment that maximizes the potential of every student through innovative curriculum and technology integration.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
