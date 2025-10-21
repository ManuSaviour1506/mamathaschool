import React from 'react';

// Removed the redundant style object

function About() {
  return (
    // Outer container set to standard light background and text color
    <div 
      id="about" 
      className="py-16 bg-bg-light dark:bg-bg-dark-slate text-primary-dark dark:text-white transition-colors duration-500" 
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-accent-red">Meet Our Leadership</h2>

        {/* ========================================================= */}
        {/* Section 1: President - Image Left, Content Right (Standard Row) */}
        {/* ========================================================= */}
        <div 
          className="flex flex-col md:flex-row items-center gap-12 mb-16 p-10 rounded-xl shadow-2xl transition-all duration-300 border-l-8 border-accent-red"
          style={{ backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)' }} // Gradient style applied only to the box
        >
          <div className="md:w-2/5 flex-shrink-0">
            <img 
              // Image for Dr. Raju
              src="https://res.cloudinary.com/ddgfjerss/image/upload/v1759251463/Screenshot_2025-09-29_at_1.14.25_AM_x4byzg.png"
              alt="Dr. Raju, President, Sri Mamatha Educational Society"
              className="w-full h-auto object-cover rounded-lg shadow-xl border-4 border-accent-red transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          {/* Text color is primary-dark for contrast on light gradient */}
          <div className="md:w-3/5 text-primary-dark">
            <h3 className="text-3xl font-bold mb-4 text-accent-red border-b-2 border-primary-dark pb-2"> 
              President, Sri Mamatha Educational Society
            </h3>
            <p className="text-xl font-extrabold mb-4">Dr. Raju</p>
            {/* Background for internal quote adjusted slightly for legibility on gradient */}
            <p className="text-lg leading-relaxed border-l-4 border-accent-red pl-4 italic bg-gray-50 p-2 rounded-r-lg">
             Dr. Raju oversees the overall management of the school and is also responsible for teaching English and Moral Values. With vast experience in education and voluntary service, he has worked with underprivileged children in metropolitan areas such as Bangalore, Mysore, and Hyderabad, focusing on Christian-based educational values. His dedication to the welfare of street children and rag-picking youth reflects his lifelong commitment to social upliftment.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Section 2: Principal - Content Left, Image Right (Reverse Row - ZIG-ZAG) */}
        {/* ========================================================= */}
        <div 
          className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16 p-10 rounded-xl shadow-2xl transition-all duration-300 border-r-8 border-accent-red"
          style={{ backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)' }} // Gradient style applied only to the box
        >
          <div className="md:w-2/5 flex-shrink-0">
            <img 
              // Image for Mamatha Raj
              src="https://res.cloudinary.com/ddgfjerss/image/upload/v1760812975/WhatsApp_Image_2025-10-17_at_11.49.37_sy3x4j.jpg"
              alt="Mamatha Raj, Secretary, Correspondent & Principal"
              className="w-full h-auto object-cover rounded-lg shadow-xl border-4 border-accent-red transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          {/* Text color is primary-dark for contrast on light gradient */}
          <div className="md:w-3/5 text-primary-dark">
            <h3 className="text-3xl font-bold mb-4 text-accent-red border-b-2 border-primary-dark pb-2"> 
              Secretary, Correspondent & Principal
            </h3>
            <p className="text-xl font-extrabold mb-4">Mamatha Raj</p>
            {/* Background for internal quote adjusted slightly for legibility on gradient */}
            <p className="text-lg leading-relaxed border-l-4 border-accent-red pl-4 italic bg-gray-50 p-2 rounded-r-lg">
             Mamatha Raj serves as the Principal of the school and teaches Mathematics and Science at both primary and high school levels. Known for her strong command of academics and effective communication skills, she is beloved by students across all grades, from Kindergarten to 10th Standard. Her passion for teaching and dedication to students' success are the backbone of the school’s academic excellence.
            </p>
          </div>
        </div>
        
        {/* Section 3: Vision and Mission - Card Layout */}
        <h2 className="text-5xl font-extrabold text-center mb-12 mt-16 text-accent-red">Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div 
                className="p-6 text-white rounded-xl shadow-2xl border-t-4 border-accent-red"
                style={{ backgroundImage: 'linear-gradient(to top, #4f46e5, #4338ca 90%)' }} // Gradient style applied only to the box
            >
                <h3 className="text-4xl font-extrabold mb-4 border-b-4 border-accent-red pb-2">VISION</h3>
                <p className="text-lg leading-relaxed font-light">
                   Our vision is to eradicate illiteracy among the marginalized communities we serve and to significantly raise the literacy rate through structured, inclusive, and quality education.
                </p>
            </div>
            
            {/* Mission Card */}
            <div 
                className="p-6 text-white rounded-xl shadow-2xl border-t-4 border-accent-red"
                style={{ backgroundImage: 'linear-gradient(to top, #4f46e5, #4338ca 90%)' }} // Gradient style applied only to the box
            >
                <h3 className="text-4xl font-extrabold mb-4 border-b-4 border-accent-red pb-2">MISSION</h3>
                <p className="text-lg leading-relaxed font-light">
                    Equip students with practical life skills and communication abilities.<br></br>
Train them for sustainable livelihoods and personal development.<br></br>
Build a future where every child in our region grows up to be educated, ethical, healthy, and empowered.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;