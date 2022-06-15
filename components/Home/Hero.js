import Link from "next/link";
import Image from "next/image";
import mobileHeader from "../../asset/Images/mobileheader.png";
import heroheader from "../../asset/Images/heroheader.png";
import Card from "./Card";

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
          accessing the new monetary system that is open to everyone regardless
          of your colour, location, gender etc.
        </p>

        <div className="flex flex-col mt-10 md:flex-row md:space-x-4">
        <Link href="/about"> 
        <button className="w-auto px-10 py-4 text-white bg-red-600 rounded-lg whitespace-nowrap hover:border-2 hover:border-red-600 hover:bg-black">Join us</button>
        </Link>
        <Link href="/podcast">
          <button className="w-auto px-10 py-4 mt-4 text-white border-2 border-red-600 rounded-lg whitespace-nowrap md:mt-0">Learn more</button>
        </Link>
        </div>
        <Card />
    </div>
  );
};

export default Hero;
