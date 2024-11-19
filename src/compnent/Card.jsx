import React from "react";
import { motion } from "framer-motion";

const Card = ({ image, title, description, buttonText }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.95 }}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-6"
        >
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-4">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>

                {/* Description */}
                <p className="text-gray-600 mb-4">{description}</p>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                    {buttonText}
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Card;