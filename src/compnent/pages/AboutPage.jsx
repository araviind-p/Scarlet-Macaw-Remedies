import React from "react";
import { motion } from "framer-motion";
import Drolet from "../../assets/Drolet.png"
import Finlet from "../../assets/Finlet.png"
import Oxylet from "../../assets/Oxylet.png"

const AboutPage = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-6 sm:px-12 lg:px-24 pt-28">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-[#018bc9] mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Scarlet Macaw Remedies: Celebrating 10 Years of Excellence
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg leading-relaxed mb-8 text-center sm:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Since 2014, Scarlet Macaw Remedies has been a leading pharmaceutical marketing company,
          delivering high-quality medicines to patients across the nation. As a sister concern of Scarlet
          Pharma, we take pride in our unwavering commitment to excellence.
        </motion.p>
        <motion.p
          className="text-gray-700 text-lg leading-relaxed mb-8 text-center sm:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Our partnerships with renowned manufacturers, such as Labindus, VTV, and Novel India, ensure
          that our products meet the highest standards of quality, backed by WHO GMP certifications.
        </motion.p>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 sm:p-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-blue-900 mb-4">
            Our Top-Selling Brands
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {/* DROLET Brand */}
            <motion.div
              className="rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <img
                src={Drolet}
                alt="DROLET"
                className="w-40 h-40 object-cover"
              />
            </motion.div>

            {/* OXYLET Brand */}
            <motion.div
              className="rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <img
                src={Oxylet}
                alt="OXYLET"
                className="w-40 h-40 object-cover"
              />
            </motion.div>

            {/* FINLET Brand */}
            <motion.div
              className="rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <img
                src={Finlet}
                alt="FINLET"
                className="w-40 h-40 object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.p
          className="text-gray-700 text-lg leading-relaxed mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          As we celebrate this milestone, we assure our customers and stakeholders that we will
          continue to launch innovative and effective products in the coming days.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutPage;
