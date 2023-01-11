import Image from 'next/image';
import logo from '../../asset/Images/logo.png';
import discord from '../../asset/Images/discord-svg.svg';
import twitter from '../../asset/Images/twitter.png';
import youtube from '../../asset/Images/youtube.png';
import medium from '../../asset/Images/Medium.png';
import telegram from '../../asset/Images/telegram.png';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="items-center py-4 text-white bg-black px-14 xl:px-10">
      <header className="items-center mx-20 md:mx-0 xl:mx-4 2xl:mx-20 xl:mt-14 ">
        <Image src={logo} width={140} height={60} alt="footer" />
      </header>
      <div className="flex-row justify-between hidden text-left items-left xl:flex xl:mt-12 xl:mx-10 2xl:mx-24 xl:gap-20">
        <p className="max-w-lg mt-5 text-xl leading-6 text-left text-gray-200 md:mt-6">
          Bankless Africa also operates as a development consultancy with the
          express purpose of identifying, supporting and executing various
          projects and tactics to accelerate African Development through web 3.0
          and subsequent derivative technologies.
        </p>
        <div className="flex flex-col">
          <div className="flex flex-row flex-1 xl:gap-10 2xl:gap-20">
            <div className="flex flex-col">
              {/* <div>
                <Link href="/about">
                  <a className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600">
                    About Us
                  </a>
                </Link>
              </div> */}
              <div>
                <Link href="/learn-crypto">
                  <a className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600">
                    Learn Crypto
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <a
                  target="_blank"
                  className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
                  href="https://medium.com/@banklessafrica/"
                  rel="noopener noreferrer"
                >
                  Bankless Africa Blog
                </a>
              </div>
              <div>
                <Link href="/privacy-policy">
                  <a className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600">
                    Privacy Policy
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10 mt-4">
            <a
              target="_blank"
              className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
              href="https://discord.gg/rMJthQ8kXD"
              rel="noopener noreferrer"
            >
              <Image
                src={discord}
                alt="discord"
                height={'25px'}
                width={'25px'}
              />
            </a>
            <a
              target="_blank"
              className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
              href="https://twitter.com/Bankless_Africa"
              rel="noopener noreferrer"
            >
              <Image src={twitter} alt="twitter" />
            </a>
            <a
              target="_blank"
              className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
              href="https://www.youtube.com/channel/UCQpxQNwFfV-YIkvDH7CnBrQ/"
              rel="noopener noreferrer"
            >
              <Image src={youtube} alt="youtube" />
            </a>
            <a
              target="_blank"
              className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
              href="https://medium.com/@banklessafrica/"
              rel="noopener noreferrer"
            >
              <Image src={medium} alt="medium" />
            </a>
            <a
              target="_blank"
              className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
              href="https://t.me/banklessafrica/"
              rel="noopener noreferrer"
            >
              <Image src={telegram} alt="telegram" />
            </a>
          </div>
        </div>
      </div>

      <div className="xl:hidden">
        <p className="max-w-2xl mx-auto mt-5 text-xl leading-6 text-center text-gray-200 md:mt-6">
          Bankless Africa also operates as a development consultancy with the
          express purpose of identifying, supporting and executing various
          projects and tactics to accelerate African Development through web 3.0
          and subsequent derivative technologies.
        </p>
        <div className="grid grid-flow-row mt-10 space-y-5 text-base font-bold text-center md:text-lg lg:text-xl">
          {/* <div>
            <Link href="/about">
              <a className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600">
                About Us
              </a>
            </Link>
          </div>
          <div>
            <Link href="/learn-crypto">
              <a className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600">
                Learn Crypto
              </a>
            </Link>
          </div> */}
          <div>
            <a
              target="_blank"
              className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
              href="https://medium.com/@banklessafrica/"
              rel="noopener noreferrer"
            >
              Bankless Africa Blog
            </a>
          </div>
          <div>
            <Link href="/privacy-policy">
              <a className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600">
                Privacy Policy
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-10 gap-4 sm:flex sm:flex-row sm:gap-20 sm:px-9 md:px-12 md:ml-10 lg:gap-28 lg:px-20">
          <a
            target="_blank"
            className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
            href="https://discord.gg/rMJthQ8kXD"
            rel="noopener noreferrer"
          >
            <Image src={discord} alt="discord" height={'25px'} width={'25px'}/>
          </a>
          <a
            target="_blank"
            className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
            href="https://twitter.com/Bankless_Africa"
            rel="noopener noreferrer"
          >
            <Image src={twitter} alt="twitter" />
          </a>
          <a
            target="_blank"
            className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
            href="https://www.youtube.com/channel/UCQpxQNwFfV-YIkvDH7CnBrQ/"
            rel="noopener noreferrer"
          >
            {' '}
            <Image src={youtube} alt="youtube" />
          </a>
          <a
            target="_blank"
            className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
            href="https://medium.com/@banklessafrica/"
            rel="noopener noreferrer"
          >
            <Image src={medium} alt="medium" />{' '}
          </a>
          <a
            target="_blank"
            className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
            href="https://t.me/banklessafrica/"
            rel="noopener noreferrer"
          >
            {' '}
            <Image src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
      <footer className="mt-12 text-xs font-normal text-center md:text-sm md:pb-8 lg:text-lg lg:pb-12">
        Copyright © 2022 Bankless Africa | Powered by Bankless Africa
      </footer>
    </div>
  );
};

export default Footer;
