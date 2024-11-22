import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheck, FaFileAlt, FaPen, FaUser } from 'react-icons/fa';

const AboutPage = () => {
  const topSellingRef = useRef(null);
  const stepsRef = useRef(null);

  // Track when each section is in view
  const isTopSellingInView = useInView(topSellingRef, { triggerOnce: true });
  const isStepsInView = useInView(stepsRef, { triggerOnce: true });

  const steps = [
    {
      id: 1,
      icon: <FaUser size={32} />,
      title: 'Trusted Quality',
      description:
        'We are committed to providing safe, effective, and high-quality medicines that meet rigorous standards, ensuring the best outcomes for patients.',
    },
    {
      id: 2,
      icon: <FaPen size={32} />,
      title: 'Professional Expertise',
      description:
        'Our team of highly qualified professionals combines knowledge, precision, and dedication to deliver reliable healthcare solutions.',
    },
    {
      id: 3,
      icon: <FaFileAlt size={32} />,
      title: 'Patient-First Approach',
      description:
        'With a focus on patient well-being, we prioritize personalized care and tailor our pharmaceutical offerings to meet diverse healthcare needs.',
    },
    {
      id: 4,
      icon: <FaCheck size={32} />,
      title: 'Innovative Solutions',
      description:
        'We embrace cutting-edge technology and research to develop advanced, impactful pharmaceutical products that enhance lives.',
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-6 sm:px-12 lg:px-24"
    >
      {/* Intro Section */}
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
          Scarlet Macaw Remedies : Celebrating 10 Years of Excellence
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg leading-relaxed mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Since 2014, Scarlet Macaw Remedies has been a leading pharmaceutical
          marketing company, delivering high-quality medicines to patients
          across the nation. As a sister concern of Scarlet Pharma, we take
          pride in our unwavering commitment to excellence.
        </motion.p>
        <motion.p
          className="text-gray-700 text-lg leading-relaxed mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Our partnerships with renowned manufacturers, such as Labindus, VTV,
          and Novel India, ensure that our products meet the highest standards
          of quality, backed by WHO GMP certifications. As we celebrate this
          milestone, we assure our customers and stakeholders that we will
          continue to launch innovative and effective products in the coming
          days.
        </motion.p>

        {/* Our Top-Selling Brands Section */}
        <motion.div
          ref={topSellingRef}
          className="rounded-lg p-6 sm:p-8 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={isTopSellingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-8 flex items-center justify-center">
            Our Top-Selling Brands
          </h3>
          <div className="flex flex-wrap gap-8 justify-center">
            {/* DROLET Brand */}
            <motion.div
              className="text-center text-lg font-semibold text-blue-900 transform transition-transform hover:scale-105 bg-red-200 p-3 rounded-md"
              initial={{ opacity: 0 }}
              animate={isTopSellingInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              DROLET
            </motion.div>

            {/* OXYLET Brand */}
            <motion.div
              className="text-center text-lg font-semibold text-blue-900 transform transition-transform hover:scale-105 bg-yellow-200 p-3 rounded-md"
              initial={{ opacity: 0 }}
              animate={isTopSellingInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              OXYLET
            </motion.div>

            {/* FINLET Brand */}
            <motion.div
              className="text-center text-lg font-semibold text-blue-900 transform transition-transform hover:scale-105 bg-orange-300 p-3 rounded-md"
              initial={{ opacity: 0 }}
              animate={isTopSellingInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              FINLET
            </motion.div>
          </div>
        </motion.div>

        {/* Easy Steps to Get Your Solution Section */}
        <section className="py-16" ref={stepsRef}>
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h3 className="text-blue-700 font-semibold uppercase mb-2 text-xl">
              Fastest Solution
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4c90] mb-10">
              Easy Steps to Get Your Solution
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: step.id * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.95 }}
                  key={step.id}
                  className="flex flex-col items-center text-center shadow-md rounded-lg p-3 cursor-default"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-100 text-[#1f4c9e] rounded-lg mb-4">
                    {step.icon}
                  </div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-800 text-md">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </motion.div>
    </section>
  );
};

export default AboutPage;
