import React from 'react';

const academicsStyles = {
  background: '#abbaab',
  background: '-webkit-linear-gradient(to right, #ffffff, #abbaab)',
  background: 'linear-gradient(to right, #ffffff, #abbaab)',
};

function Academics() {
  return (
    <div id="academics" style={academicsStyles} className="text-gray-900 dark:text-white min-h-screen">
      
      {/* Hero Section */}
      <div className="text-center py-24 px-4 md:px-8 lg:px-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Our Innovative Academics</h1>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
          We go beyond traditional education to inspire curiosity, creativity, and a lifelong love for learning in every student.
        </p>
      </div>

      {/* Philosophy Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold mb-4">Our Approach to Education</h2>
            <p className="text-lg leading-relaxed mb-4">
              Our curriculum is designed to be dynamic and interdisciplinary, integrating subjects to create a more comprehensive learning experience. We focus on real-world problem-solving and project-based learning.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Project-Based Learning</li>
              <li>Integrated STEM Curriculum</li>
              <li>Focus on Critical Thinking</li>
              <li>Global Awareness Programs</li>
            </ul>
          </div>
          <div className="md:order-1">
            <img 
              src="https://ik.imagekit.io/your_imagekit_id/academics_innovative.jpg"
              alt="Innovative learning environment"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Academic Features Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 text-gray-900 dark:text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Key Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-3">Early Years Foundation</h3>
              <p className="text-gray-600 leading-relaxed">
                A play-based approach to education that builds social, emotional, and cognitive skills through exploration and guided discovery.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-3">STEM Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced STEM labs and dedicated faculty prepare students for future careers in science, technology, engineering, and mathematics.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-3">Holistic Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We balance academics with arts, sports, and community service to ensure our students grow into well-rounded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Academics;