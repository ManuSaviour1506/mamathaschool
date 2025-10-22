import React from 'react';

function About() {
  // Define custom text color for high contrast on light gradient boxes
  const cardTextColor = {
    color: '#111827' // Text dark/black for contrast
  };

  return (
    // Outer container: Dark Blue to Light Blue Gradient: #000046 → #1cb5e0
    <div 
      id="about" 
      className="py-16 text-white transition-colors duration-500 bg-gradient-to-br from-[#000046] to-[#1cb5e0] dark:from-bg-dark-slate dark:to-gray-900" 
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-accent-gold dark:text-accent-red">Meet Our Dedicated Leadership</h2>

        {/* --------------------------------------------------------- */}
        {/* Section 1: President - Image Left, Content Right (Standard Row) */}
        {/* Card Background: Orange-to-Gold Gradient: #f2994a → #f2c94c */}
        {/* --------------------------------------------------------- */}
        <div 
          className="flex flex-col md:flex-row items-center gap-12 mb-16 p-10 rounded-2xl shadow-2xl transition-all duration-300 border-l-8 border-accent-red transform hover:scale-[1.01]"
          style={{ backgroundImage: 'linear-gradient(to right, #f2994a, #f2c94c)' }}
        >
          <div className="md:w-2/5 flex-shrink-0">
            <img 
              // Image for Dr. Raju
              src="https://res.cloudinary.com/ddgfjerss/image/upload/v1759251463/Screenshot_2025-09-29_at_1.14.25_AM_x4byzg.png"
              alt="Dr. Raju, President, Sri Mamatha Educational Society"
              className="w-full h-auto object-cover rounded-xl shadow-xl border-4 border-accent-red transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          {/* Text color is dark for contrast on the light orange-gold gradient */}
          <div className="md:w-3/5" style={cardTextColor}>
            <h3 className="text-3xl font-bold mb-4 text-primary-indigo border-b-2 border-primary-indigo pb-2"> 
              President, Sri Mamatha Educational Society
            </h3>
            <p className="text-xl font-extrabold mb-4">Dr. Raju</p>
            {/* Background for internal quote adjusted slightly for legibility on gradient */}
            <p className="text-lg leading-relaxed border-l-4 border-primary-indigo pl-4 italic bg-white bg-opacity-70 p-4 rounded-r-lg shadow-inner">
             Dr. Raju oversees the overall management of the school and is also responsible for teaching English and Moral Values. With vast experience in education and voluntary service, he has worked with underprivileged children in metropolitan areas such as Bangalore, Mysore, and Hyderabad, focusing on Christian-based educational values. His dedication to the welfare of street children and rag-picking youth reflects his lifelong commitment to social upliftment.
            </p>
          </div>
        </div>

        {/* --------------------------------------------------------- */}
        {/* Section 2: Principal - Content Left, Image Right (Reverse Row - ZIG-ZAG) */}
        {/* Card Background: Orange-to-Gold Gradient: #f2994a → #f2c94c */}
        {/* --------------------------------------------------------- */}
        <div 
          className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16 p-10 rounded-2xl shadow-2xl transition-all duration-300 border-r-8 border-accent-red transform hover:scale-[1.01]"
          style={{ backgroundImage: 'linear-gradient(to right, #f2994a, #f2c94c)' }}
        >
          <div className="md:w-2/5 flex-shrink-0">
            <img 
              // Image for Mamatha Raj
              src="https://res.cloudinary.com/ddgfjerss/image/upload/v1760812975/WhatsApp_Image_2025-10-17_at_11.49.37_sy3x4j.jpg"
              alt="Mamatha Raj, Secretary, Correspondent & Principal"
              className="w-full h-auto object-cover rounded-xl shadow-xl border-4 border-accent-red transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          {/* Text color is dark for contrast on the light orange-gold gradient */}
          <div className="md:w-3/5" style={cardTextColor}>
            <h3 className="text-3xl font-bold mb-4 text-primary-indigo border-b-2 border-primary-indigo pb-2"> 
              Secretary, Correspondent & Principal
            </h3>
            <p className="text-xl font-extrabold mb-4">Mamatha Raj</p>
            {/* Background for internal quote adjusted slightly for legibility on gradient */}
            <p className="text-lg leading-relaxed border-l-4 border-primary-indigo pl-4 italic bg-white bg-opacity-70 p-4 rounded-r-lg shadow-inner">
             Mamatha Raj serves as the Principal of the school and teaches Mathematics and Science at both primary and high school levels. Known for her strong command of academics and effective communication skills, she is beloved by students across all grades, from Kindergarten to 10th Standard. Her passion for teaching and dedication to students' success are the backbone of the school’s academic excellence.
            </p>
          </div>
        </div>
        
        {/* --------------------------------------------------------- */}
        {/* Section 3: Vision and Mission - Card Layout */}
        {/* --------------------------------------------------------- */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 mt-16 text-accent-gold dark:text-accent-red">Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div 
                className="p-8 rounded-2xl shadow-2xl border-t-4 border-accent-red transition-all duration-300 transform hover:scale-[1.02]"
                style={{ backgroundImage: 'linear-gradient(to right, #f2994a, #f2c94c)' }} // Orange-to-Gold
            >
                <h3 className="text-3xl font-extrabold mb-4 border-b-4 border-primary-indigo pb-2" style={cardTextColor}>VISION</h3>
                <p className="text-lg leading-relaxed font-light" style={cardTextColor}>
                   Our vision is to eradicate illiteracy among the marginalized communities we serve and to significantly raise the literacy rate through structured, inclusive, and quality education.
                </p>
            </div>
            
            {/* Mission Card */}
            <div 
                className="p-8 rounded-2xl shadow-2xl border-t-4 border-accent-red transition-all duration-300 transform hover:scale-[1.02]"
                style={{ backgroundImage: 'linear-gradient(to right, #f2994a, #f2c94c)' }} // Orange-to-Gold
            >
                <h3 className="text-3xl font-extrabold mb-4 border-b-4 border-primary-indigo pb-2" style={cardTextColor}>MISSION</h3>
                <p className="text-lg leading-relaxed font-light" style={cardTextColor}>
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
