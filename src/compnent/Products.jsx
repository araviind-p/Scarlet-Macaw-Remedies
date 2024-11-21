import React, { useState } from 'react';
import Card from './Card';
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
import TRAMLET_P from '../assets/Ortho Range/TRAMLET_P.png';
import MACOPAN from '../assets/Gastro Range/MACOPAN.png';
import MACOPAN_DSR from '../assets/Gastro Range/MACOPAN_DSR.png';
import SILVELET from '../assets/Skin Range/SILVELET.png';
import FUNGILET_CREAM from '../assets/Skin Range/FUNGILET_CREAM.png';
import MOBILET_P from '../assets/MOBILET_P.png';

const productsData = [
  { id: 1, image: DROLET, title: "DROLET", category: "Gynecology" },
  { id: 2, image: UTFOROLL, title: "UTFOROLL", category: "Gynecology" },
  { id: 3, image: FOROL_XT, title: "FOROL-XT", category: "Gynecology" },
  { id: 4, image: OXYLET, title: "OXYLET", category: "GP" },
  { id: 5, image: LOON, title: "LOON", category: "GP" },
  { id: 6, image: LOON_M, title: "LOON-M", category: "GP" },
  { id: 7, image: OXYLET_P, title: "OXYLET-P", category: "Pediatric" },
  { id: 8, image: FINLET, title: "FINLET", category: "Pediatric" },
  { id: 9, image: INSTABONE, title: "INSTABONE", category: "Ortho" },
  { id: 10, image: CASSOWARY, title: "CASSOWARY", category: "Ortho" },
  { id: 11, image: PUFFIN_6, title: "PUFFIN-6", category: "Ortho" },
  { id: 12, image: TRAMLET_P, title: "TRAMLET-P", category: "Ortho" },
  { id: 13, image: MACOPAN, title: "MACOPAN", category: "Gastro" },
  { id: 14, image: MACOPAN_DSR, title: "MACOPAN-DSR", category: "Gastro" },
  { id: 15, image: SILVELET, title: "SILVELET", category: "Skin" },
  { id: 16, image: FUNGILET_CREAM, title: "FUNGILET-CREAM", category: "Skin" },
  { id: 17, image: MOBILET_P, title: "MOBILET-P", category: "Others" },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div id="products" className="pt-16 px-6 sm:px-12 lg:px-24">
      <h1 className="font-bold text-[#1c4e92] text-3xl sm:text-4xl items-center justify-center flex">
        Our Range Of Products
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {["All", "Gynecology", "GP", "Pediatric", "Ortho", "Gastro", "Skin", "Others"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-md font-medium ${
              selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-16 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} image={product.image} title={product.title} />
        ))}
      </div>
    </div>
  );
};

export default Products;
