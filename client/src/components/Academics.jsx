import React, { useState, useEffect } from 'react';

// --- CircularText Component (Self-Contained Implementation) ---
const CircularText = ({ text, spinDuration = 20, className = '' }) => {
  const characters = text.split('');
  const radius = 100; // Radius of the circle in pixels (Adjust this to scale)

  return (
    // Outer container: Flex and mx-auto center the entire component within its parent
    <div className={`flex items-center justify-center w-64 h-64 mx-auto ${className}`}>
      {/* Inner container: Relative position and size for rotation axis */}
      <div 
        className="relative w-full h-full"
        style={{ 
            '--spin-duration': `${spinDuration}s`,
            animation: 'spin-slow var(--spin-duration) linear infinite', // Apply animation directly
        }}
      >
        {characters.map((char, index) => {
          // Calculate the angle for each character
          const angle = (index / characters.length) * 360; 

          return (
            <span
              key={index}
              // UPDATED: Use responsive text size - base size is small, scales up on medium screens
              className="absolute origin-center font-extrabold text-lg sm:text-xl md:text-2xl whitespace-nowrap text-accent-gold dark:text-accent-red"
              style={{
                // Position the span absolutely in the center, then rotate it to the desired point, 
                // and translate it outwards by the radius.
                left: '50%',
                top: '50%',
                transform: `
                    rotate(${angle}deg) 
                    translate(-50%, -50%) 
                    translateY(-${radius}px) 
                    rotate(${-angle}deg)
                `,
                transformOrigin: '50% 50%',
              }}
            >
              {char === '*' ? ' ' : char}
            </span>
          );
        })}
      </div>
      <style>{`
        /* Define the custom spinning animation for the text container */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// --- BlurText Component (Self-Contained Implementation) ---
const BlurText = ({ text, delay = 150, animateBy = 'words', direction = 'top', onAnimationComplete, className = '' }) => {
    // Simple state to track which elements are visible/animated
    const [animated, setAnimated] = useState(false);
    
    // Split the text into elements based on the animateBy prop
    const elements = animateBy === 'chars' 
      ? text.split('').map(char => char === ' ' ? '\u00A0' : char) // Replace spaces with non-breaking spaces
      : text.split(' '); // Split by words

    useEffect(() => {
        // Simple setTimeout to trigger the animation effect
        const timer = setTimeout(() => {
            setAnimated(true);
            if (onAnimationComplete) {
                // Delay the completion call slightly longer than the total word animation duration
                setTimeout(onAnimationComplete, elements.length * delay + 500); 
            }
        }, 100); 

        return () => clearTimeout(timer);
    }, [elements.length, delay, onAnimationComplete]);

    const getTransform = (index) => {
        let transformValue = 'translate(0, 0)';
        if (!animated) {
            switch (direction) {
                case 'top':
                    transformValue = 'translateY(20px)';
                    break;
                case 'bottom':
                    transformValue = 'translateY(-20px)';
                    break;
                case 'left':
                    transformValue = 'translateX(-20px)';
                    break;
                case 'right':
                    transformValue = 'translateX(20px)';
                    break;
                default:
                    transformValue = 'translateY(20px)';
            }
        }
        return transformValue;
    };

    return (
        <h2 className={`font-extrabold text-center ${className}`}>
            {elements.map((element, elementIndex) => (
                <span
                    key={elementIndex}
                    style={{
                        display: 'inline-block',
                        marginRight: animateBy === 'words' ? '0.5em' : '0', // Add space between words
                        opacity: animated ? 1 : 0,
                        filter: animated ? 'blur(0px)' : 'blur(5px)',
                        transform: getTransform(elementIndex),
                        transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                        transitionDelay: `${elementIndex * delay}ms`,
                    }}
                >
                    {element}
                </span>
            ))}
        </h2>
    );
};

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


function Academics() {
  // Define custom text color for high contrast on light gradient boxes
  const cardTextColor = {
    color: '#111827' // Text dark/black for contrast
  };

  return (
    // Outer container: Dark Blue to Light Blue Gradient: #000046 → #1cb5e0
    <div 
        id="academics" 
        className="py-16 px-4 md:px-8 text-white transition-colors duration-500 bg-gradient-to-br from-[#000046] to-[#1cb5e0] dark:from-bg-dark-slate dark:to-gray-900"
    >
      <div className="container mx-auto">
        
        {/* === HEADER SECTION: CircularText (Left) and BlurText (Right) === */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-center mb-12">
            
            {/* Circular Text (on Left) */}
            {/* The outer container size is already responsive (w-48/h-48 on mobile, up to w-64/h-64 on tablet/desktop) */}
            <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
                <CircularText
                    text="SRI*MAMTHA*SCHOOL*"
                    spinDuration={15}
                    className="w-48 h-48 sm:w-64 sm:h-64"
                />
            </div>

            {/* Animated Heading (BlurText) */}
            <div className="text-center md:text-left">
                <BlurText
                    text="Future-Ready Curriculum"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-4xl sm:text-5xl text-accent-gold dark:text-accent-red"
                />
                <p className="text-xl text-center md:text-left mt-4 text-gray-200 dark:text-gray-400">
                    Our academic programs are built on innovation, integration, and individual growth.
                </p>
            </div>
        </div>
        {/* =============================================================== */}
        
        {/* Academic Programs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Why Choose */}
          <div 
            className="p-8 rounded-2xl shadow-xl border-t-8 border-accent-red transition-all duration-300 transform hover:scale-[1.02]"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #f2994a, #f2c94c)', // Orange-to-Gold
            }}
          >
            <h3 className="text-2xl font-bold mb-3 text-primary-indigo" style={cardTextColor}>Why Choose Sri Mamatha School?</h3>
            <p className="leading-relaxed" style={cardTextColor}>
              Sri Mamatha School is not just an educational institution — it’s a beacon of hope for hundreds of children from rural, underprivileged communities around Kolleru Lake. Our school offers a nurturing, inclusive, and empowering environment where every child receives personal attention and the tools needed to build a brighter future.
            </p>
          </div>
          
          {/* Card 2: Unique Features */}
          <div 
            className="p-8 rounded-2xl shadow-xl border-t-8 border-accent-red transition-all duration-300 transform hover:scale-[1.02]"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #f2994a, #f2c94c)', // Orange-to-Gold
            }}
          >
            <h3 className="text-2xl font-bold mb-3 text-primary-indigo" style={cardTextColor}>What makes us unique</h3>
            <ul className="list-disc list-inside space-y-2 leading-relaxed" style={cardTextColor}>
              <li>Affordable & Free Education.</li>
              <li>Community-Oriented Approach.</li>
              <li>Ethics & Values.</li>
              <li>Student-Centered Learning.</li>
            </ul>
          </div>
          
          {/* Card 3: Academics */}
          <div 
            className="p-8 rounded-2xl shadow-xl border-t-8 border-accent-red transition-all duration-300 transform hover:scale-[1.02]"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #f2994a, #f2c94c)', // Orange-to-Gold
            }}
          >
            <h3 className="text-2xl font-bold mb-3 text-primary-indigo" style={cardTextColor}>Academics</h3>
            <ul className="list-disc list-inside space-y-2 leading-relaxed" style={cardTextColor}>
              <li><b>Languages:</b> English, Telugu, and Hindi</li>
              <li><b>Mathematics</b></li>
              <li><b>Science</b> (Physics, Chemistry, Biology)</li>
              <li><b>Social Studies</b> (History, Civics, Geography, Economics)</li>
              <li><b>Computer Education</b></li>
              <li><b>Moral and Value Education</b></li>
            </ul>
          </div>
        </div>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />
        
      </div>
    </div>
  );
}

export default Academics;
