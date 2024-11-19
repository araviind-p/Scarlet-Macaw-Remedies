import React from 'react';
import Sidebar from './compnent/Sidebar';
import './index.css';

import Footer from './compnent/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './compnent/pages/HomePage';
import AboutPage from './compnent/pages/AboutPage';
import ServicesPage from './compnent/pages/ServicesPage';
import ContactPage from './compnent/pages/ContactPage';
import About from './compnent/About';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Sidebar></Sidebar>
     <About/>
      <div className='grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-16'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
<div/>
  <Footer />
      </div>
    </BrowserRouter>
  );
};
     
    


      

