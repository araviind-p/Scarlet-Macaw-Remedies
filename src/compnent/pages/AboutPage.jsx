import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheck, FaFileAlt, FaPen, FaUser } from 'react-icons/fa';
import ABOUT from '../../assets/about.jpg';

const AboutPage = () => {
  const introRef = useRef(null);
  const countRef = useRef(null);
  const stepsRef = useRef(null);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const isIntroView = useInView(introRef, { triggerOnce: false });
  const isCountInView = useInView(countRef, { triggerOnce: false });
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

  // Function to trigger count animation when in view
  useEffect(() => {
    if (isCountInView) {
      // Reset counters each time the section becomes visible
      setCount1(0);
      setCount2(0);
      setCount3(0);
    }
  }, [isCountInView]);

  // Count animation logic
  useEffect(() => {
    if (isCountInView) {
      const interval1 = setInterval(() => {
        setCount1((prev) => {
          if (prev < 10) return prev + 1;
          clearInterval(interval1);
          return prev;
        });
      }, 100);

      const interval2 = setInterval(() => {
        setCount2((prev) => {
          if (prev < 20) return prev + 1;
          clearInterval(interval2);
          return prev;
        });
      }, 100);

      const interval3 = setInterval(() => {
        setCount3((prev) => {
          if (prev < 10000) return prev + 100;
          clearInterval(interval3);
          return prev;
        });
      }, 10);

      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
      };
    }
  }, [isCountInView]);

  return (
    <section
      id="about"
      className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 pt-24 sm:pt-32 sm:py-32 px-6 sm:px-12 lg:px-24"
    >
      {/* Core values Section */}
      <section className="mb-20" ref={stepsRef}>
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[#4ab9ce] text-xl pb-3">Values Driven</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a204c] mb-10">
            Our Core Values and Commitments
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <motion.div
                whileHover={{ scale: 1.05 }} // Subtle hover scale
                key={step.id}
                className="flex hover:bg-gray-100 flex-col items-center text-center shadow-md rounded-lg p-6 cursor-pointer transition-transform duration-300 ease-out"
                initial={{ opacity: 0, y: 30 }}
                animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.1,
                  duration: 0.1,
                }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-[#ebf8ff] text-[#60bbe8] rounded-lg mb-4">
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

      {/* Delivering excellence */}
      <motion.div
        ref={introRef}
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isIntroView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Paragraph 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Section (with Animation) */}
          <motion.div
            className="order-1 lg:order-1 flex justify-center" // Image on the left for desktop
            initial={{ opacity: 0, x: -20 }}
            animate={isIntroView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <img
              src={ABOUT}
              alt="About Scarlet Macaw Remedies"
              className="w-full max-w-sm md:max-w-md lg:max-w-xl h-auto object-contain"
            />
          </motion.div>

          {/* Text Section */}
          <div className="order-2 lg:order-2 md:pl-8">
            <p className="text-[#4ab9ce] text-xl pb-3 text-center sm:text-left">
              Commitment Defined
            </p>
            <motion.h2
              className="text-3xl font-extrabold text-[#030a3a] mb-8 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntroView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Delivering Excellence with Certified Expertise
            </motion.h2>
            <motion.p
              className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntroView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Since 2014, Scarlet Macaw Remedies has been a trusted
              pharmaceutical company providing high-quality medicines
              nationwide. As a sister concern of Scarlet Pharma, we collaborate
              with leading manufacturers like Labindus, VTV, and Novel India to
              deliver safe, effective healthcare solutions, ensuring the highest
              quality standards with WHO GMP certifications. We are committed to
              launching innovative products for a healthier future.
            </motion.p>

            <motion.div
              className="max-w-6xl mx-auto mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-8 text-center">
                {/* Statistics Item 1 */}
                <motion.div
                  ref={countRef}
                  className="p-6 bg-white shadow-xl rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#026a9f]">
                    {count1}+
                  </h3>
                  <p className="text-md sm:text-lg text-[#535353]">
                    Years In Market
                  </p>
                </motion.div>

                {/* Statistics Item 2 */}
                <motion.div
                  className="p-6 bg-white shadow-xl rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#026a9f]">
                    {count2}+
                  </h3>
                  <p className="text-md sm:text-lg text-[#535353]">Products</p>
                </motion.div>

                {/* Statistics Item 3 */}
                <motion.div
                  className="p-6 bg-white shadow-xl rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#026a9f]">
                    {count3}+
                  </h3>
                  <p className="text-md sm:text-lg text-[#535353]">Customers</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
