import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../asset/Images/logo.png';
import { Transition } from '@headlessui/react';
const Navbar = ({ component }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  console.log(component);

  return (
    <div>
      <nav className="relative z-10 w-full bg-black shadow-sm">
        <div className="w-full">
          <div className="flex items-center w-full h-20">
            <div className="flex justify-between items-center w-full mx-5 items lg:mx-14 xl:mx-24">
              <div className="flex items-center justify-center flex-shrink-0 ">
                <div className="w-40 h-20 cursor-pointer md:w-56 md:h-16">
                  <Link href="/">
                    <a>
                      <Image
                        src={logo}
                        alt="bankless africa logo"
                        width={140}
                        height={60}
                        className=""
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex ml-0 space-x-14 md:space-x-7 xl:space-x-14 lg:ml-36">
                  <Link href="/">
                    <a
                      className={
                        component === 'home' || component === ''
                          ? 'px-3 py-2 text-lg font-bold text-red-600 cursor-pointer hover:font-black'
                          : 'px-3 py-2 text-lg font-bold text-white cursor-pointer hover:font-black'
                      }
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="/about">
                    <a
                      className={
                        component === 'about'
                          ? 'px-3 py-2 text-lg font-bold text-red-600 cursor-pointer hover:font-black'
                          : 'px-3 py-2 text-lg font-bold text-white cursor-pointer hover:font-black'
                      }
                    >
                      About
                    </a>
                  </Link>
                  {/* <Link href="/learn-crypto">
                    <a className={
                      component === "learn" ? "px-3 py-2 text-lg font-bold text-red-600 cursor-pointer hover:font-black" : "px-3 py-2 text-lg font-bold text-white cursor-pointer hover:font-black"
                    }>
                      Learn Crypto
                    </a>
                  </Link> */}

                  <button
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown"
                    class="text-white focus:ring-1 focus:outline-none font-medium rounded-lg text-lg px-4 py-2.5 text-center inline-flex items-center"
                    type="button"
                  >
                    Contents{' '}
                    <svg
                      class="ml-2 w-4 h-4"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  <div
                    id="dropdown"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefault"
                    >
                      <li>
                        <a
                          target="_blank"
                          href="https://medium.com/@banklessafrica"
                          className={
                            'px-3 py-2 text-lg font-bold hover:text-red-600 cursor-pointer hover:font-black'
                          }
                        >
                          Blogs
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://banklessafrica.substack.com/"
                          className={
                            'px-3 py-2 text-lg font-bold hover:text-red-600 cursor-pointer hover:font-black'
                          }
                        >
                          {' '}
                          Newsletter
                        </a>
                      </li>
                    </ul>
                  </div>

                  <a
                    target="_blank"
                    href="https://banklessafrica.podbean.com/"
                    className={
                      component === 'podcast'
                        ? 'px-3 py-2 text-lg font-bold text-red-600 cursor-pointer hover:font-black'
                        : 'px-3 py-2 text-lg font-bold text-white cursor-pointer hover:font-black'
                    }
                  >
                    Podcast
                  </a>

                  <a
                    target="_blank"
                    className={
                      component === 'blog'
                        ? 'px-3 py-2 text-lg font-bold text-red-600 cursor-pointer hover:font-black'
                        : 'px-3 py-2 text-lg font-bold text-white cursor-pointer hover:font-black'
                    }
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
                {/* <Link href="/learn-crypto">
                  <a className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-red-600">
                    Learn Crypto
                  </a>
                </Link> */}
                <Link href="/podcast">
                  <a className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-red-600">
                    Podcast
                  </a>
                </Link>
                  <a target='_blank' href="https://medium.com/@banklessafrica/" className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-red-600">
                    Blog
                  </a>
                  <a target='_blank' href="https://banklessafrica.podbean.com/" className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-red-600">
                    Newsletter
                  </a>
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

export default Navbar;
