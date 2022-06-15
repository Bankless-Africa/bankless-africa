import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../asset/Images/logo.svg";
import { Transition } from "@headlessui/react";
import Podcast from "../../pages/podcast";

const PodcastNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute inset-x-0 top-0">
      <nav className="relative z-10 w-full bg-black shadow-sm">
        <div className="w-full">
          <div className="flex items-center w-full h-20">
            <div className="flex items-center w-full mx-5 items lg:mx-14 xl:mx-24">
              <div className="flex items-center justify-center flex-shrink-0 ">
                <div className="w-40 cursor-pointer h-11 md:w-56 md:h-16">
                <Link href="/">
                    <a>
                  <Image src={logo} alt="bankless africa logo" width={90} height={70} className="" />
                </a>
                </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex ml-0 space-x-14 md:space-x-7 xl:space-x-14 lg:ml-36">
                <Link href="/">
                    <a className="px-3 py-2 text-lg font-bold text-red-600 cursor-pointer hover:font-black">
                      Home
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600">
                      About
                    </a>
                  </Link>
                  <Link href="/podcast">
                    <a className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600">
                      Podcast
                    </a>
                  </Link>
                  <a
                    target="_blank"
                    className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
                    href="https://medium.com/@banklessafrica/"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
            {/* Mobile responsiveness */}
            <div className="flex mr-10 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-white bg-black rounded-md hover:bg-black focus:outline-none focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 bg-black sm:px-3"
              >
                 <Link href="/">
                  <a className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-red-600">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-red-600">
                    About
                  </a>
                </Link>
                <Link href="/podcast">
                  <a className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-red-600">
                    Podcast
                  </a>
                </Link>
                <a
                    target="_blank"
                    className="px-3 py-2 text-lg font-bold text-white rounded-md cursor-pointer hover:bg-red-600"
                    href="https://medium.com/@banklessafrica/"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a> 
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default PodcastNav;