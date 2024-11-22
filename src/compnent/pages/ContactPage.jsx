import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    // Scroll to top when the Contact page is loaded
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    const { name, contact, email, message } = formData;
    const VITE_EMAILJS_SERVICE_ID = 'service_u1k54k4';
    const VITE_EMAILJS_TEMPLATE_ID = 'template_c2taj5u';
    const VITE_EMAILJS_PUBLIC_KEY = 'M67wV3Sy7j26cB7CV';
    try {
      const result = await emailjs.send(
        VITE_EMAILJS_SERVICE_ID, // Replace with your service ID
        VITE_EMAILJS_TEMPLATE_ID, // Replace with your template ID
        {
          name,
          contact,
          email,
          message,
        },
        VITE_EMAILJS_PUBLIC_KEY // Replace with your public key
      );

      setResponseMessage('Your message has been sent successfully!');
      setFormData({
        name: '',
        contact: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setResponseMessage('Failed to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center pt-10 sm:pt-0">
        <h1 className="font-bold text-3xl text-[#1f4c9e]">
          Feel Free To Contact Us
        </h1>
      </div>
      <motion.div
        className="flex flex-col lg:flex-row max-w-6xl mx-auto mt-14 bg-white rounded-lg shadow-md sm:px-0 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Contact Details Section */}
        <motion.div
          className="bg-gray-100 p-6 sm:rounded-l-lg flex-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <span style={{ color: '#274756' }} className="text-2xl">
                📍
              </span>
              <h3
                style={{ color: '#274756' }}
                className="text-xl font-semibold"
              >
                LOCATE US
              </h3>
            </div>
            <p className="text-gray-700">
              12/1207F, 1&apos;st Floor Apple Square Building, Airport road
              <br />
              Ramanattukara, Kozhikode, 673633, Kerala
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <span style={{ color: '#274756' }} className="text-2xl">
                📞
              </span>
              <h3
                style={{ color: '#274756' }}
                className="text-xl font-semibold"
              >
                CALL US
              </h3>
            </div>
            <p className="text-gray-700">Phone : +91 9061004666</p>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span style={{ color: '#274756' }} className="text-2xl">
                ✉️
              </span>
              <h3
                style={{ color: '#274756' }}
                className="text-xl font-semibold"
              >
                MAIL US
              </h3>
            </div>
            <p className="text-gray-700">scarletmacawremediesclt@outlook.com</p>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="p-6 flex-1"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3
            style={{ color: '#274756' }}
            className="text-xl font-semibold mb-4"
          >
            Get In Touch
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2"
              style={{
                borderColor: '#274756',
              }}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact No"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2"
              style={{
                borderColor: '#274756',
              }}
              value={formData.contact}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2"
              style={{
                borderColor: '#274756',
              }}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Additional Message"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2"
              style={{
                borderColor: '#274756',
              }}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="text-white px-6 py-2 rounded hover:transition"
              style={{
                backgroundColor: '#274756',
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-gray-700">{responseMessage}</p>
          )}
        </motion.div>
      </motion.div>
      <div className="responsive-map max-w-6xl mx-2 sm:mx-auto mt-10 rounded-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15656.599384881474!2d75.871717!3d11.176539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65072323244f9%3A0x586a120c43dc2a6d!2sBank%20of%20Baroda%20Branch!5e0!3m2!1sen!2sin!4v1732205395475!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
