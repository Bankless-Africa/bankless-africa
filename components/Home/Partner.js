import React, { useEffect } from "react";
import Image from "next/image";
// Images
import underline from "../../asset/Images/underline.png";
import bitcoin from "../../asset/Images/bitcoin.png";
import dao from "../../asset/Images/dao.png";
import carbon from "../../asset/Images/carbon.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Partner = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center px-20 bg-black py-14 xl:py-20">
      <div className="mb-3 text-3xl font-bold text-center text-white">
        <p>Partners</p>
      </div>
      <div className="mb-14">
        <Image src={underline} alt="" className="" />
      </div>

      {/* Partners logo */}
      <div className="flex flex-col items-center gap-16 xl:gap-32 md:flex-row md:px-24 lg:gap-8">
        <a href="https://bitcoinmagazine.com/" target="_blank"><Image src={bitcoin} alt="bitcoin" className="animate-shakey" /></a>
        <a href="https://bankless.community/" target="_blank"><Image src={dao} alt="dao" className="" /></a>
        <a href="https://carboncollectiblenfts.com/" target="_blank"><Image src={carbon} alt="carbon-collectible-nfts" className="" /></a>
      </div>
    </div>
  );
};

export default Partner;
