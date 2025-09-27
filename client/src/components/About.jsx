import React from 'react';

function About() {
  return (
    <div id="about" className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      
      {/* Top Section: Who We Are */}
      <div className="bg-white dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/3 flex-shrink-0">
            <img 
              src="https://ik.imagekit.io/your_imagekit_id/teacher_image.jpg"
              alt="A picture of a teacher"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">WHO WE ARE</h2>
            <p className="text-lg leading-relaxed">
              The world today is a global village and people are its citizens. As boundaries of location, people and time cease to exist, it is of utmost importance that we move with the times. At MAMATHA SCHOOL, we have created a unique blend of world-class curricula, contemporary teaching methodologies, and equal focus on intellectual, physical and personality development, resulting in future leaders who are ready to take on the world. Today, we stand as the force behind creating countless world-class doctors, engineers, IAS officers, chartered accountants, and so much more.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Section: Vision and Mission */}
      <div className="bg-blue-800 text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          
          {/* Vision Section */}
          <div className="md:w-1/2 flex flex-col items-center">
            <h3 className="text-4xl font-bold mb-4">VISION</h3>
            <p className="text-lg text-center leading-relaxed max-w-lg">
              We endeavor to be the right mentor for IIT-JEE aspirants, while also helping them develop a global perspective, with a keen interest in community life. We prepare students for competitive exams by providing in-depth knowledge of various subjects at an early age.
            </p>
          </div>
          
          {/* Mission Section */}
          <div className="md:w-1/2 flex flex-col items-center">
            <h3 className="text-4xl font-bold mb-4">MISSION</h3>
            <p className="text-lg text-center leading-relaxed max-w-lg">
              Our goal is to focus on the holistic development of each child, and to give them a competitive edge with the help of an extensive curriculum and dynamic teaching methodologies.
            </p>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default About;