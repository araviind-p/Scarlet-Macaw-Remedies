import React from 'react';
import Card from './Card';
import DROLET from '../assets/Gynecology Range/DROLET.png'
import UTFOROLL from '../assets/Gynecology Range/UT_FOROLL.png'
import FOROL_XT from '../assets/Gynecology Range/FOROL_XT.png'
import OXYLET from '../assets/GP Range/OXYLET.png'
import LOON from '../assets/GP Range/LOON.png'
import LOON_M from '../assets/GP Range/LOON_M.png'
import OXYLET_P from '../assets/Pediatric Range/OXYLET_P.png'
import FINLET from '../assets/Pediatric Range/FINLET.png'
import INSTABONE from '../assets/Ortho Range/INSTABONE.png'
import CASSOWARY from '../assets/Ortho Range/CASSOWARY.png'
import PUFFIN_6 from '../assets/Ortho Range/PUFFIN_6.png'
import TRAMLET_P from '../assets/Ortho Range/TRAMLET_P.png'
import MACOPAN from '../assets/Gastro Range/MACOPAN.png'
import MACOPAN_DSR from '../assets/Gastro Range/MACOPAN_DSR.png'
import SILVELET from '../assets/Skin Range/SILVELET.png'
import FUNGILET_CREAM from '../assets/Skin Range/FUNGILET_CREAM.png'
import MOBILET_P from '../assets/MOBILET_P.png'

const Products = () => {
  return (
    <div id="products" className="pt-16 px-6 sm:px-12 lg:px-24">
      <h1 className="font-bold text-[#1c4e92] text-3xl sm:text-4xl items-center justify-center flex">
        Our Range Of Products
      </h1>
      <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-16">
        <Card
          image={DROLET}
          title="DROLET"
        />
        <Card
          image={UTFOROLL}
          title="UTFOROLL"
        />
        <Card
          image={FOROL_XT}
          title="FOROL-XT"
        />
        <Card
          image={OXYLET}
          title="OXYLET"
        />
        <Card
          image={LOON}
          title="LOON"
        />
        <Card
          image={LOON_M}
          title="LOON-M"
        />
        <Card
          image={OXYLET_P}
          title="OXYLET-P"
        />
        <Card
          image={FINLET}
          title="FINLET"
        />
        <Card
          image={INSTABONE}
          title="INSTABONE"
        />
        <Card
          image={CASSOWARY}
          title="CASSOWARY"
        />
        <Card
          image={PUFFIN_6}
          title="PUFFIN-6"
        />
        <Card
          image={TRAMLET_P}
          title="TRAMLET-P"
        />
        <Card
          image={MACOPAN}
          title="MACOPAN"
        />
        <Card
          image={MACOPAN_DSR}
          title="MACOPAN-DSR"
        />
        <Card
          image={SILVELET}
          title="SILVELET"
        />
        <Card
          image={FUNGILET_CREAM}
          title="FUNGILET-CREAM"
        />
        <Card
          image={MOBILET_P}
          title="MOBILET-P"
        />
      </div>
    </div>
  );
};

export default Products;
