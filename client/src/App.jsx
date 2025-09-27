import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Academics from './components/Academics.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import AdmissionForm from './components/AdmissionForm.jsx';
import NotFound from './pages/NotFound.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AdminPrivateRoute from './components/AdminPrivateRoute.jsx';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <ScrollToTop />
      <Navbar />
      <main>
        {/* Main Single-Scroll Sections */}
        <Home />
        <About />
        <Academics />
        <Gallery />
        <AdmissionForm />
        <Contact />

        {/* Protected and Special Routes */}
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminPrivateRoute />}>
            <Route index element={<AdminDashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;