import React from 'react';
import Navbar from './compnent/Navbar';
import Footer from './compnent/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './compnent/pages/HomePage';
import AboutPage from './compnent/pages/AboutPage';
import ServicesPage from './compnent/pages/ServicesPage';
import ContactPage from './compnent/pages/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
      {/* Persistent Sidebar */}
      <Navbar />
      {/* <HomePage/> */}

      {/* Main Content Area */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      {/* Persistent Footer */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
