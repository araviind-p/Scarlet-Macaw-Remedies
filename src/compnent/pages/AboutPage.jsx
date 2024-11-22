import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheck, FaFileAlt, FaPen, FaUser } from 'react-icons/fa';
import ABOUT from '../../assets/about.jpg';

const AboutPage = () => {
  const introRef = useRef(null);
  const topSellingRef = useRef(null);
  const stepsRef = useRef(null);

  // Track when each section is in view
  const isIntroView = useInView(introRef, { triggerOnce: false });
  const isTopSellingInView = useInView(topSellingRef, { triggerOnce: false });
  const isStepsInView = useInView(stepsRef, { triggerOnce: false });

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
        ref={introRef}
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isIntroView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-[#1a204c] mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntroView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Delivering Excellence with Certified Expertise
        </motion.h2>

        {/* Paragraph 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Section (with Animation) */}
          <motion.div
            className="order-2 md:order-1 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={isIntroView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <img
              src={ABOUT}
              alt="About Scarlet Macaw Remedies"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </motion.div>

          {/* Text Section */}
          <div className="order-1 md:order-2 md:pl-8">
            <motion.p
              className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntroView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Since 2014, Scarlet Macaw Remedies has been a trusted
              pharmaceutical marketing company, providing high-quality medicines
              nationwide. As a sister concern of Scarlet Pharma, we are
              committed to excellence, partnering with leading manufacturers to
              deliver safe, effective healthcare solutions that prioritize
              patient well-being and promote a healthier future.
            </motion.p>

            <motion.p
              className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntroView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Our partnerships with renowned manufacturers, such as Labindus,
              VTV, and Novel India, ensure that our products meet the highest
              standards of quality, backed by WHO GMP certifications. As we
              celebrate this milestone, we assure our customers and stakeholders
              that we will continue to launch innovative and effective products
              in the coming days.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Top-Selling Brands Section */}
      <motion.div
        ref={topSellingRef}
        className="rounded-lg p-6 sm:p-8 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isTopSellingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-[#1a204c] mb-8 flex items-center justify-center">
          Our Top-Selling Brands
        </h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {['DROLET', 'OXYLET', 'FINLET'].map((brand, index) => (
            <motion.div
              key={brand}
              className="text-center cursor-default text-lg font-semibold text-white transform transition-transform hover:scale-105 bg-yellow-500 p-3 rounded-md"
              initial={{ opacity: 0 }}
              animate={isTopSellingInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Steps Section */}
      <section className="pt-16" ref={stepsRef}>
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a204c] mb-10">
            Our Core Values and Commitments
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={step.id}
                className="flex flex-col items-center text-center shadow-md rounded-lg p-6 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: step.id * 0.2,
                  duration: 0.5,
                }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 text-[#1A4D8F] rounded-lg mb-4">
                  {step.icon}
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-800 text-md text-justify">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default AboutPage;
