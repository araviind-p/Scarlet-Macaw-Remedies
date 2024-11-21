import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Logo from '../../public/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Store last scroll position
  const [isVisible, setIsVisible] = useState(true); // Track if navbar is visible
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigateAndScroll = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }

    setTimeout(() => {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
      });
    }, 100);
  };

  const handlePageNavigation = (route) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hide navbar on scroll down, show on scroll up
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // If scrolling down, hide navbar
      setIsVisible(false);
    } else {
      // If scrolling up, show navbar
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Listen for scroll events

    // Clean up the scroll event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`bg-[#e9f9f9] text-black z-10 fixed w-full bg-opacity-95 transition-transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <RouterLink to={'/'}>
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold">
                <img src={Logo} alt="Logo" className="h-12" />
              </span>
            </div>
          </RouterLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => handleNavigateAndScroll('home')}
              className="hover:text-[#1b4e8c] font-semibold cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigateAndScroll('about')}
              className="hover:text-[#1b4e8c] font-semibold cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNavigateAndScroll('products')}
              className="hover:text-[#1b4e8c] font-semibold cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={() => handlePageNavigation('/contact')}
              className="hover:text-[#1b4e8c] font-semibold cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.8, 0.5, 1], // Smooth easing curve
            }}
            className="md:hidden overflow-hidden min-h-screen flex flex-col justify-center bg-[#e9f9f9] shadow-lg"
          >
            <div className="px-4 pb-4 flex flex-col justify-evenly items-center text-2xl -mt-24">
              <button
                onClick={() => {
                  toggleMenu();
                  handleNavigateAndScroll('home');
                }}
                className="block text-black hover:text-[#1b4e8c] font-semibold p-2 rounded cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  handleNavigateAndScroll('about');
                }}
                className="block text-black hover:text-[#1b4e8c] font-semibold p-2 rounded cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  handleNavigateAndScroll('products');
                }}
                className="block text-black hover:text-[#1b4e8c] font-semibold p-2 rounded cursor-pointer"
              >
                Products
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  handlePageNavigation('/contact');
                }}
                className="block text-black hover:text-[#1b4e8c] font-semibold p-2 rounded cursor-pointer"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
