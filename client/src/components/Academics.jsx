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
            <h3 className="text-2xl font-bold mb-3 text-primary-indigo dark:text-accent-gold">Why Choose Sri Mamatha School?</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sri Mamatha School is not just an educational institution — it’s a beacon of hope for hundreds of children from rural, underprivileged communities around Kolleru Lake. Our school offers a nurturing, inclusive, and empowering environment where every child receives personal attention and the tools needed to build a brighter future.
            </p>
          </div>
          {/* Program 2: Middle */}
          <div className="bg-bg-light dark:bg-gray-800 p-8 rounded-xl shadow-lg border-t-8 border-accent-gold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-card-hover">
            <h3 className="text-2xl font-bold mb-3 text-primary-indigo dark:text-accent-gold">What makes us unique</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Affordable & Free Education.<br></br>
Community-Oriented Approach.<br></br>
Ethics & Values.<br></br>
Student-Centered Learning.
            </p>
          </div>
          {/* Program 3: High */}
          <div className="bg-bg-light dark:bg-gray-800 p-8 rounded-xl shadow-lg border-t-8 border-primary-indigo transition-all duration-300 transform hover:scale-[1.02] hover:shadow-card-hover">
            <h3 className="text-2xl font-bold mb-3 text-primary-indigo dark:text-accent-gold">Academics</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <b>Languages:</b> English, Telugu, and Hindi<br></br>
<b>Mathematics</b><br></br>
<b>Science</b> (Physics, Chemistry, Biology)<br></br>
<b>Social Studies</b> (History, Civics, Geography, Economics)<br></br>
<b>Computer Education</b><br></br>
<b>Moral and Value Education</b>
            </p>
          </div>
        </div>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* Departments Section */}
        
      </div>
    </div>
  );
}

export default Academics;
