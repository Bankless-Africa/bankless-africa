import React, { useEffect } from 'react';
import Image from 'next/image';
import card1 from '../../asset/Images/crypto.png';
import card2 from '../../asset/Images/socialimpact.png';
import card3 from '../../asset/Images/news.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex flex-col gap-8 mt-32 text-white xl:gap-20 lg:flex-row"
    >
      <div className="w-64 shadow-2xl bg-gradient-to-b from-zinc-800 to-zinc-800 rounded-xl xl:w-96">
        <div className="">
          <Image
            src={card1}
            layout="responsive"
            width={200}
            height={150}
            alt=""
          />
        </div>
        <div className="px-4 pb-2">
          <h2 className="mt-2 text-lg font-normal text-white">Learn Crypto</h2>
          <p className="text-base font-light text-white">
            Start your crypto journey with our easy to understand educated
            resources.
          </p>
        </div>
      </div>
      <div className="w-64 shadow-2xl  bg-gradient-to-b from-zinc-800 to-zinc-800 rounded-xl xl:w-96">
        <div className="">
          <Image
            src={card2}
            layout="responsive"
            width={200}
            height={150}
            alt=""
          />
        </div>
        <div className="px-4 pb-2">
          <h2 className="mt-2 text-lg font-normal text-white">Social Impact</h2>
          <p className="text-base font-light text-white">
            We want a better world for everyone, especially the less fortunate
            and vulnerable communities.
          </p>
        </div>
      </div>
      <a href="https://banklessafrica.substack.com/" target="_blank">
        <div className="w-64 shadow-2xl  bg-gradient-to-b from-zinc-800 to-zinc-800 rounded-xl xl:w-96">
          <div className="">
            <Image
              src={card3}
              layout="responsive"
              width={200}
              height={150}
              alt=""
            />
          </div>
          <div className="px-4 pb-2">
            <h2 className="mt-2 text-lg font-normal text-white">News</h2>
            <p className="text-base font-light text-white">
              Stay up to date with well curated news about crypto and web3
              around Africa.{' '}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
