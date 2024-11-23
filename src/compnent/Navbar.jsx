import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Logo from '/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
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

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`bg-[#e9f9f9] text-black z-10 fixed w-full bg-opacity-95 transition-transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 pt-2 relative">
        <div className="grid grid-cols-3 sm:grid-cols-5 items-center h-[70px] sm:h-16 md:h-20 gap-4">
          {/* Logo Section */}
          <RouterLink to={'/'}>
            <div className="col-span-1 flex items-center justify-start z-30">
              <img
                src={Logo}
                alt="Logo"
                className="h-[70px] sm:h-14 md:h-20 w-auto z-30"
              />
            </div>
          </RouterLink>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:col-span-3 md:text-lg lg:text-xl sm:flex items-center justify-center space-x-6 md:space-x-10 lg:space-x-16">
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
              Contact Us
            </button>
          </div>

          {/* Contact Section */}
          <div className="hidden sm:flex items-center justify-end col-span-1">
            <div className="text-[#fff] bg-[#1a4d91] py-2 px-4 rounded-lg text-sm md:text-lg font-semibold flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p>+91 9061004666</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden col-span-2 flex justify-end z-30">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-8 h-8 mr-4"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.8, 0.5, 1],
            }}
            className="absolute top-0 left-0 w-full h-screen bg-[#e9f9f9] shadow-lg z-20 flex flex-col items-center justify-center"
          >
            <div className="px-4 pb-4 text-2xl flex flex-col items-center">
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
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
