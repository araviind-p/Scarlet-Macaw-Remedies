import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DOCTORTEAM from '../assets/doctorTeam.png';
import { scroller } from 'react-scroll';

const HeroSection = () => {
  const [years, setYears] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setYears((prevYears) => {
        if (prevYears < 10) {
          return prevYears + 1;
        } else {
          clearInterval(interval);
          return prevYears;
        }
      });
    }, 200); // Adjust the speed of the counter
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      id="home"
      className="max-w-[1400px] mx-auto min-h-screen -mt-6 sm:mt-6 lg:-mt-0 bg-[#E9F8F9] py-16 px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-evenly gap-x-14 gap-y-14 font-poppins"
    >
      {/* Left Content */}
      <motion.div
        className="max-w-lg text-center lg:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-[#4ab9ce] text-xl pb-3 text-left ml-[2px]">
          Health First
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-left text-[#2c60a4] leading-tight mb-4">
          <span className="text-[#1A4D8F]">Protecting</span> You and Your Family
        </h1>
        <p className="text-gray-600 mb-6 text-justify">
          Scarlet Macaw Remedies is dedicated to enhancing lives with trusted,
          safe, and effective medicines. We put patients first because your
          well-being matters most.
        </p>
        <div className="flex flex-col sm:flex-row justify-evenly sm:justify-start items-center gap-y-6 sm:gap-y-0">
          <div className="flex items-center">
            <motion.h1
              className="text-5xl font-bold text-[#1A4D8F]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {years}+
            </motion.h1>
            <span className="text-xl ml-0 sm:ml-3 text-gray-900 mr-0 sm:mr-6">
              Years Of Certified Medical Excellence
            </span>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-white font-semibold mt-6 py-3 px-3 rounded-lg shadow-lg hover:bg-yellow-600 transition"
        >
          <Link
            onClick={() => {
              scroller.scrollTo('about', {
                smooth: true,
                duration: 500,
              });
            }}
          >
            Read More
          </Link>
        </motion.button>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="relative "
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        <div className="sm:w-[550px] lg:w-[700px] bg-white rounded-full ">
          <motion.img
            src={DOCTORTEAM} // Replace with your image path
            alt="Doctor Team"
            className="rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
