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
            className="w-[75vw] sm:w-auto md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden sm:m-3 "
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
            </div>
        </motion.div>
    );
};

export default Card;