import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Academics from './Academics.jsx';
import Gallery from './Gallery.jsx';
import Contact from './Contact.jsx';
import AdmissionForm from './AdmissionForm.jsx'; // This line is likely the source of the error if AdmissionForm does not export default
import Popup from './Popup.jsx';

function MainLayout() {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleContactUsClick = () => {
    setShowPopup(false);
    window.location.href = '#contact';
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <ScrollToTop />
      <Navbar />

      {showPopup && (
        <Popup
          imageUrl="https://ik.imagekit.io/your_imagekit_id/promotional_popup.jpg"
          onClose={handleClosePopup}
          onContactClick={handleContactUsClick}
        />
      )}

      <main>
        <Home />
        <About />
        <Academics />
        <Gallery />
       
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
