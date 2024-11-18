import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1b5121] text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold">MyLogo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
            <a href="#" className="hover:text-gray-200">
              About
            </a>
            <a href="#" className="hover:text-gray-200">
              Services
            </a>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
            >
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="space-y-2 px-4 pb-4">
              <a
                href="#"
                onClick={toggleMenu}
                className="block text-white hover:bg-[#77bfca] p-2 rounded"
              >
                Home
              </a>
              <a
                href="#"
                onClick={toggleMenu}
                className="block text-white hover:bg-[#77bfca] p-2 rounded"
              >
                About
              </a>
              <a
                href="#"
                onClick={toggleMenu}
                className="block text-white hover:bg-[#77bfca] p-2 rounded"
              >
                Services
              </a>
              <a
                href="#"
                onClick={toggleMenu}
                className="block text-white hover:bg-[#77bfca] p-2 rounded"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
