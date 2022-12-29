import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import bankless from '../asset/Images/bankless.png';
// import underline from '../components/About/Images/underline.png';
// import Newsletter from '../components/Home/Newsletter';
import bankless from '../../asset/Images/bankless.png';
import underline from '../../components/About/Images/underline.png';
import Newsletter from '../../components/Home/Newsletter';
import Partner from '../../components/Home/Partner';
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Main() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id='about' className="bg-black">
      <div className="flex flex-col">
        <div
          className="bg-aboutBg1 min-w-screen h-auto bg-100% bg-no-repeat bg-center -mt-2 md:mt-6 pt-20 pb-32 sm:pt-40 sm:pb-52 md:pt-36 md:pb-64 lg:px-24
      xl:pb-72 2xl:pb-80 px-8"
        >
          <h1 className="mb-4 text-3xl font-bold text-center text-white lg:text-5xl">
            About Bankless Africa
          </h1>
          <h1 className="text-center text-white lg:text-5xl sm:text-4xl md:text-6xl">
            We are on a quest to help onboard{' '}
            <span className="text-red-600">everyday</span> Africans to crypto/web3.
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center py-16 bg-black md:flex-row">
          <div className="mx-14">
            <Image src={bankless} alt="" className="" />
          </div>
          <div className="flex flex-col space-x-8">
            <div className="flex flex-col justify-center ml-9">
              <h1 className="mb-4 text-3xl font-bold text-white lg:text-5xl">
                Who We Are
              </h1>
              <div className="max-w-8">
                <Image src={underline} alt="underline" />
              </div>
            </div>
            <div className="md:max-w-5xl">
              <p className="max-w-xl font-normal leading-8 text-white mb-11 xl:text-xl lg:max-w-md xl:max-w-4xl">
                Bankless Africa taps into the vision and mission of the
                BanklessDAO to help onboard everyday Africans to bitcoin, defi
                and web3. Bitcoin, Ethereum, Defi and other related crypto
                innovations have ushered the world into a new dawn. A frontier
                for achieving true economic freedom, self-sovereignty and
                financial independence. Bankless Africa is here to help steer,
                guide and educate Africa to take part in this frontier.
              </p>
              <div></div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="10000"
          className="flex justify-center mx-16 mb-10 md:mx-10 lg:mx-24"
        >
          <div className="flex flex-col justify-between sm:flex-row md:max-w-5xl">
            <div className="flex flex-col flex-1 px-5 py-10 mx-4 text-center text-white bg-darkBlack rounded-xl">
              <h1 className="text-3xl text-white lg:text-5xl">Mission</h1>
              <div className="max-w-8">
                <Image src={underline} alt="underline" />
              </div>
              <div className="text-xs text-white sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Our mission is to promote, educate and propagate truly bankless
                media, culture and education towards the adoption of trustless,
                decentralized money systems and blockchain technology.{' '}
              </div>
            </div>
            <div className="flex flex-col flex-1 px-5 py-10 mx-4 mt-5 text-center text-white bg-darkBlack rounded-xl sm:mt-0">
              <h1 className="text-3xl text-white lg:text-5xl">Vision</h1>
              <div className="max-w-8">
                <Image src={underline} alt="underline" />
              </div>
              <div className="text-xs text-white sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Our vision is to be a driving force for capacity building,
                economic empowerment and financial sovereignty in Africa.{' '}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center mt-10 mb-10 space-x-5 space-y-5 text-center sm:flex-row sm:mx-20">
        <h2 className="text-3xl text-white lg:text-5xl sm:mt-5">GO BANKLESS</h2>
        <div>
          <form className="flex">
            <input type="email" className="p-2 text-white placeholder-white bg-black border border-white outline-none" placeholder="Email" />
            <button className="p-5 text-white bg-red-600 rounded-tr-lg rounded-br-lg">Subscribe</button>
          </form>
        </div>
    </div> */}
        {/* <div className="flex flex-col justify-between px-6 py-10 bg-red-600 sm:flex-row sm:items-center sm:space-x-10 sm:px-20 lg:px-24">
        <div>
          <h2 className="text-3xl text-white lg:text-5xl sm:mt-5">Join Us</h2>
          <div className="mt-5 text-xs text-white sm:text-sm md:text-base lg:text-lg xl:text-xl">Our community is always open to new members</div>
        </div>
        <div>
            <button className="px-8 py-2 mt-5 text-red-600 bg-white rounded-md sm:mt-0">Join</button>
        </div>
    </div> */}

      </div>
    </div>
  );
}
