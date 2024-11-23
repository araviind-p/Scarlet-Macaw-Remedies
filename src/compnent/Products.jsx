import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from './Card'; // Assuming Card is your product display component

// Import product images
import DROLET from '../assets/Gynecology Range/DROLET.png';
import UTFOROLL from '../assets/Gynecology Range/UT_FOROLL.png';
import FOROL_XT from '../assets/Gynecology Range/FOROL_XT.png';
import OXYLET from '../assets/GP Range/OXYLET.png';
import LOON from '../assets/GP Range/LOON.png';
import LOON_M from '../assets/GP Range/LOON_M.png';
import OXYLET_P from '../assets/Pediatric Range/OXYLET_P.png';
import FINLET from '../assets/Pediatric Range/FINLET.png';
import INSTABONE from '../assets/Ortho Range/INSTABONE.png';
import CASSOWARY from '../assets/Ortho Range/CASSOWARY.png';
import PUFFIN_6 from '../assets/Ortho Range/PUFFIN_6.png';
import DICLOFINE_GEL from '../assets/Ortho Range/DICLOFINE_GEL.png';
import TRAMLET_P from '../assets/Ortho Range/TRAMLET_P.png';
import MACOPAN from '../assets/Gastro Range/MACOPAN.png';
import MACOPAN_DSR from '../assets/Gastro Range/MACOPAN_DSR.png';
import SILVELET from '../assets/Skin Range/SILVELET.png';
import FUNGILET_CREAM from '../assets/Skin Range/FUNGILET_CREAM.png';
import MUPIROSE from '../assets/Skin Range/MUPIROSE.png';
import MOBILET_P from '../assets/Others/MOBILET_P.png';

// Products Data
const productsData = [
  { id: 1, image: DROLET, title: 'DROLET', category: 'Gynecology' },
  { id: 2, image: UTFOROLL, title: 'UTFOROLL', category: 'Gynecology' },
  { id: 3, image: FOROL_XT, title: 'FOROL-XT', category: 'Gynecology' },
  { id: 4, image: OXYLET, title: 'OXYLET', category: 'GP' },
  { id: 5, image: LOON, title: 'LOON', category: 'GP' },
  { id: 6, image: LOON_M, title: 'LOON-M', category: 'GP' },
  { id: 7, image: OXYLET_P, title: 'OXYLET-P', category: 'Pediatric' },
  { id: 8, image: FINLET, title: 'FINLET', category: 'Pediatric' },
  { id: 9, image: INSTABONE, title: 'INSTABONE', category: 'Ortho' },
  { id: 10, image: CASSOWARY, title: 'CASSOWARY', category: 'Ortho' },
  { id: 11, image: PUFFIN_6, title: 'PUFFIN-6', category: 'Ortho' },
  { id: 12, image: DICLOFINE_GEL, title: 'DICLOFINE-GEL', category: 'Ortho' },
  { id: 13, image: TRAMLET_P, title: 'TRAMLET-P', category: 'Ortho' },
  { id: 14, image: MACOPAN, title: 'MACOPAN', category: 'Gastro' },
  { id: 15, image: MACOPAN_DSR, title: 'MACOPAN-DSR', category: 'Gastro' },
  { id: 16, image: FUNGILET_CREAM, title: 'FUNGILET-CREAM', category: 'Skin' },
  { id: 17, image: SILVELET, title: 'SILVELET', category: 'Skin' },
  { id: 18, image: MUPIROSE, title: 'MUPIROSE', category: 'Skin' },
  { id: 19, image: MOBILET_P, title: 'MOBILET-P', category: 'Others' },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8); // Initial visible count

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(8); // Reset visible count on category change
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData.slice(0, visibleCount)
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div id="products" className="pt-16 px-6 sm:px-12 lg:px-24 pb-20">
      {/* Heading */}
      <motion.h1
        className="font-bold text-[#1c4e92] text-3xl sm:text-4xl items-center justify-center flex"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Range Of Products
      </motion.h1>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {[
          'All',
          'Pediatric',
          'GP',
          'Gynecology',
          'Ortho',
          'Gastro',
          'Skin',
          'Others',
        ].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-md font-medium ${
              selectedCategory === category
                ? 'bg-[#036ba2] text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Products Grid */}
      <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-16 gap-6 sm:gap-5">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      {selectedCategory === 'All' && visibleCount < productsData.length && (
        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleLoadMore}
            className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            Load More
          </motion.button>
        </div>
      )}
      <section className="bg-[#000839] py-16 px-6 sm:px-12 lg:px-24 rounded-2xl text-center mt-20">
        {/* Yellow Line */}
        <div className="w-24 h-1 mx-auto bg-yellow-500 mb-4"></div>

        <h2 className="text-3xl sm:text-4xl font-bold text-[#d2e2fc] mb-4">
          Shaping Health Together
        </h2>
        <p className="text-lg text-white mb-8 text-justify sm:text-center">
          Have a vision for innovative healthcare solutions? Contact Scarlet
          Macaw Remedies today to explore how our high-quality medicines and
          expertise can help bring it to life. Together, we can enhance lives
          and shape a healthier future.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-500 text-white font-semibold text-lg py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors"
        >
          <Link to="/contact">Contact Us</Link>
        </motion.button>
      </section>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      className=""
      initial={{ opacity: 0, x: 50, y: 50 }}
      animate={
        isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: 50 }
      }
      transition={{ duration: 0.5 }}
    >
      <Card image={product.image} title={product.title} />
    </motion.div>
  );
};

export default Products;
