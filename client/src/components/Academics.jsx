import React from 'react';

// Removed the redundant style object

function Academics() {
  return (
    <div id="academics" className="py-16 px-4 md:px-8 bg-white dark:bg-bg-dark-slate transition-colors duration-500">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-primary-indigo dark:text-accent-gold">Future-Ready Curriculum</h2>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-400">
            Our academic programs are built on innovation, integration, and individual growth.
        </p>

        {/* Academic Programs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program 1: Primary */}
          <div className="bg-bg-light dark:bg-gray-800 p-8 rounded-xl shadow-lg border-t-8 border-primary-indigo transition-all duration-300 transform hover:scale-[1.02] hover:shadow-card-hover">
            <h3 className="text-2xl font-bold mb-3 text-primary-indigo dark:text-accent-gold">Primary School (K-5)</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Focus on foundational literacy, numeracy, and essential socio-emotional skills through hands-on, project-based learning. Includes early exposure to digital citizenship.
            </p>
          </div>
          {/* Program 2: Middle */}
          <div className="bg-bg-light dark:bg-gray-800 p-8 rounded-xl shadow-lg border-t-8 border-accent-gold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-card-hover">
            <h3 className="text-2xl font-bold mb-3 text-primary-indigo dark:text-accent-gold">Middle School (6-8)</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Interdisciplinary STEM curriculum. Students engage in design thinking challenges and start specialization in electives like robotics and coding.
            </p>
          </div>
          {/* Program 3: High */}
          <div className="bg-bg-light dark:bg-gray-800 p-8 rounded-xl shadow-lg border-t-8 border-primary-indigo transition-all duration-300 transform hover:scale-[1.02] hover:shadow-card-hover">
            <h3 className="text-2xl font-bold mb-3 text-primary-indigo dark:text-accent-gold">High School (9-12)</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              College and career readiness track. Offers advanced placement (AP) style courses and intensive mentorship for university entrance exams and career planning.
            </p>
          </div>
        </div>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* Departments Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-primary-indigo dark:text-accent-gold">Specialized Learning Labs</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-primary-indigo text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-accent-gold hover:text-text-dark transition-all duration-200 cursor-pointer">COMPUTER LABS</span>
            <span className="bg-primary-indigo text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-accent-gold hover:text-text-dark transition-all duration-200 cursor-pointer">ABACUS</span>
            <span className="bg-primary-indigo text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-accent-gold hover:text-text-dark transition-all duration-200 cursor-pointer">Visual & Performing Arts</span>
            <span className="bg-primary-indigo text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-accent-gold hover:text-text-dark transition-all duration-200 cursor-pointer">World Languages</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academics;
