import React from 'react';

function Academics() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://ik.imagekit.io/your_imagekit_id/academics_hero.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Academics</h1>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Educational Philosophy</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            We believe in a holistic approach to education that goes beyond textbooks. Our curriculum is designed to foster critical thinking, creativity, and problem-solving skills, preparing students for the challenges of the future. We integrate technology, hands-on projects, and real-world applications to make learning engaging and relevant.
          </p>
        </div>
      </section>

      <hr className="my-10 border-gray-300 dark:border-gray-700" />

      {/* Academic Programs Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-3">Primary School</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our primary school curriculum focuses on building a strong foundation in literacy and numeracy, while introducing students to science, arts, and social studies in a fun and interactive environment.
              </p>
            </div>
            {/* Program 2 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-3">Middle School</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Middle school is a time for exploration. Our program encourages students to delve into specialized subjects, develop independent learning habits, and participate in a wide range of extracurricular activities.
              </p>
            </div>
            {/* Program 3 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-3">High School</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our high school curriculum is college-preparatory, offering a diverse selection of advanced placement courses, electives, and career-oriented programs to prepare students for higher education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-10 border-gray-300 dark:border-gray-700" />

      {/* Departments Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Academic Departments</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">Science</span>
            <span className="bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">Mathematics</span>
            <span className="bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">Humanities</span>
            <span className="bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full font-medium">Languages</span>
            <span className="bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200 px-4 py-2 rounded-full font-medium">Arts</span>
            <span className="bg-indigo-200 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full font-medium">Physical Education</span>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Academics;