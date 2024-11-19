import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto my-10 bg-white rounded-lg shadow-md">
      {/* Contact Details Section */}
      <div className="bg-gray-100 p-6 rounded-lg sm:rounded-l-lg flex-1 mx-6 sm:mx-0">
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <span style={{ color: '#274756' }} className="text-2xl">
              📍
            </span>
            <h3 style={{ color: '#274756' }} className="text-xl font-semibold">
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
            <h3 style={{ color: '#274756' }} className="text-xl font-semibold">
              CALL US
            </h3>
          </div>
          <p className="text-gray-700">Phone : +91 8075748473</p>
        </div>

        <div>
          <div className="flex items-center space-x-3 mb-2">
            <span style={{ color: '#274756' }} className="text-2xl">
              ✉️
            </span>
            <h3 style={{ color: '#274756' }} className="text-xl font-semibold">
              MAIL US
            </h3>
          </div>
          <p className="text-gray-700">scarletmacawremedies@gmail.com</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="p-6 flex-1">
        <h3 style={{ color: '#274756' }} className="text-xl font-semibold mb-4">
          Get In Touch
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2"
            style={{
              borderColor: '#274756',
              focus: { borderColor: '#274756' },
            }}
          />
          <input
            type="text"
            placeholder="Contact No"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2"
            style={{
              borderColor: '#274756',
            }}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2"
            style={{
              borderColor: '#274756',
            }}
          />
          <textarea
            rows="5"
            placeholder="Additional Message"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2"
            style={{
              borderColor: '#274756',
            }}
          ></textarea>
          <button
            type="submit"
            className="text-white px-6 py-2 rounded hover:transition"
            style={{
              backgroundColor: '#274756',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
