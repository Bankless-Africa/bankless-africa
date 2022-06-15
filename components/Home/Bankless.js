import React, { useEffect } from "react";
import Image from "next/image";
import bankless from "../../asset/Images/bankless.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bankless = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  
  return (
    <div data-aos="fade-up" data-aos-duration="10000" className="flex flex-col items-center justify-center py-16 bg-black md:flex-row">
      <div className="flex flex-col space-x-8">
        <div className="flex justify-center">
          <h1 className="mb-4 text-3xl font-bold text-white lg:text-5xl">Why Go <span className="text-red-600">Bankless?</span></h1>
        </div>
        <div className="md:max-w-5xl">
          <p className="max-w-xl font-normal leading-8 text-white mb-11 xl:text-xl lg:max-w-md xl:max-w-4xl">
              Going Bankless is about freedom. Freedom to build wealth. It’s about
              taking back control. Something that is missing in a world of Central
              Banks and government controlled fiat currencies. It’s about
              accessing the new monetary system that is open to everyone
              regardless of your colour, location, gender etc. Going Bankless is
              embarking on a journey towards self-sovereignty, finanical and
              economic freedom. Going Bankless is about changing the world for the
              better.
            </p>
          <div>
        </div>
        </div>
      </div>
      <div className="mx-14"><Image src={bankless} alt="" className="" /></div>
    </div>
    
  );
};

export default Bankless;
