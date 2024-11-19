import React from 'react';
import Sidebar from './compnent/Sidebar';
import './index.css';

import Footer from './compnent/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './compnent/pages/HomePage';
import AboutPage from './compnent/pages/AboutPage';
import ServicesPage from './compnent/pages/ServicesPage';
import ContactPage from './compnent/pages/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
