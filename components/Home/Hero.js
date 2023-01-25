import Link from 'next/link';
import Image from 'next/image';
import mobileHeader from '../../asset/Images/mobileheader.png';
import heroheader from '../../asset/Images/heroheader.png';
import discord from '../../asset/Images/discord-svg.svg';
import Card from './Card';

import card1 from '../../asset/Images/BAXacademy.jpeg';
import card2 from '../../asset/Images/socialimpact.png';
import card3 from '../../asset/Images/news.png';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center py-10 bg-black bg-right-top bg-no-repeat bg-contain px-9 sm:px-14 sm:py-3 lg:px-20 lg:pb-20 xl:px-2 xl:pb-40 xl:pt-72 bg-hero">
      <div className="mt-16 w-60 h-7 sm:mt-20 sm:w-72 sm:h-14 md:mt-28 xl:w-4/5 xl:hidden">
        <Image src={mobileHeader} alt="header" className="" />
      </div>
      <div className="hidden xl:block">
        <Image src={heroheader} alt="header" className="" />
      </div>

      <p className="max-w-lg mx-auto mt-5 text-xl leading-6 text-center text-gray-200 md:mt-6">
        Going Bankless is about freedom. Freedom to build wealth. It’s about
        accessing the new monetary system that is open to everyone regardless of
        your colour, location, gender etc.
      </p>

      <div className="flex flex-col mt-10 md:flex-row md:space-x-4">
        <a target="_blank" href="https://discord.gg/rMJthQ8kXD">
          <button className=" flex justify-evenly w-auto px-10 py-4 text-white bg-red-600 rounded-lg whitespace-nowrap hover:border-2 hover:border-red-600 hover:bg-black">
            <span className='mr-2'>
              <Image
                src={discord}
                alt="discord"
                height={'25px'}
                width={'25px'}
              />
            </span>{' '}
            Join us
          </button>
        </a>
        <Link href="#about">
          <button className="w-auto px-10 py-4 mt-4 text-white border-2 border-red-600 rounded-lg whitespace-nowrap md:mt-0">
            Learn more
          </button>
        </Link>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col gap-8 mt-32 text-white xl:gap-20 lg:flex-row"
      >
        <Card
          page="/learn-crypto"
          title="Learn Crypto"
          description="Start your crypto journey with our easy to understand educated resources."
          url={card1}
        />

        <Card
          page="#"
          title="Social Impact"
          description="Start your crypto journey with our easy to understand educated resources."
          url={card2}
        />
        <a href="https://banklessafrica.substack.com/" target="_blank">
          <Card
            title="News"
            description="Start your crypto journey with our easy to understand educated resources."
            url={card3}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
