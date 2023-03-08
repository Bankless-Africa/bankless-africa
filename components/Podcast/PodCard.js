import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import box1 from "../../components/Podcast/Images/podcast_cover.png";
import box2 from "../../components/Podcast/Images/sats_gwei.png";
import Image from "next/image";
import { ShareIcon, SpeakerWaveIcon, XMarkIcon  } from "@heroicons/react/24/outline";
import { FaSpotify, FaApple, FaRss, FaGoogle, FaWifi } from "react-icons/fa";
import { Link } from "react-scroll";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PodCard = () => {
  const cancelButtonRef = useRef(null);
  const [Open, setOpen] = React.useState(false)

  const cancelReadmoreRef = useRef(null);
  const [Readmore, setReadmore] = React.useState(false)

  return (
    <div class="container mx-auto max-w-6xl">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={4000}
      >
          <section class="cardbg max-w-6xl px-3 py-8 sm:px-20 md:px-32 lg:px-16 mx-auto relative rounded-3xl ">
          <div class="container items-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 my-12 sm:my-16">
              <div class="flex flex-col">
              <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <Image className="rounded-lg object-cover shadow-lg" src={box1} alt="podcast"  /></div>
              </div>
              <div class="flex flex-col">
                <h2 className="text-3xl font-bold text-white">
                  Pidgin Parlour Crypto Podcast
                  <br />
                </h2>
                <p className="text-xl mt-3 mb-3 text-white">by Pidgin Parlour</p>

                <p class="text-gray-200 text-base sm:text-1xl leading-6 lg:text-1xl break-all">
                  Pidgin Parlor na centre of crypto education and culture for the
                  African pipul wey dey speak Pidgin. The show go dey break down
                  plenti crypto concepts wey just dey confuse person into simple
                  forms wey everyday African go fit dey relate with. And all these
                  things go dey for pidgin, the localized language wey over 75
                  million Africans dey speak. This pidgin parlour crypto podcast
                  dey bring crypto education and culture come inside s...
                  <span className="text-red-600">
                  <Link onClick={() => setReadmore(!Readmore)}> Read more </Link>
                  </span>
                </p>

                <div className="flex space-x-4 mt-10">
                  <button onClick={() => setOpen(!Open)} className="flex items-center p-3 text-white border-2 border-white rounded-lg">
                    <span>
                      <SpeakerWaveIcon className="h-6 w-6 text-white" />
                    </span>
                    <p className="ml-2"> Listen on...</p>
                  </button>
                  <button onClick={() => setOpen(!Open)} className="flex items-center p-3 text-white border-2 border-white rounded-lg">
                    <span>
                      <ShareIcon className="h-6 w-6 text-white" />
                    </span>
                    <p className="ml-2"> Share</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="cardbg mt-10 max-w-6xl px-3 py-8 sm:px-20 md:px-32 lg:px-16 mx-auto relative rounded-3xl">
          <div class="container items-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 my-12 sm:my-16">
              <div class="flex flex-col">
              <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <Image className="rounded-lg object-cover shadow-lg" src={box2} alt="podcast"  /></div>
              </div>
              <div class="flex flex-col">
                <h2 className="text-3xl font-bold text-white">
                  Sats and Gwei Podcast
                  <br />
                </h2>
                <p className="text-xl mt-3 mb-3 text-white">by Sats and Gwei</p>

                <p class="text-gray-200 text-base sm:text-1xl leading-6 lg:text-1xl break-all">
                  Bankless Africa presents Sats & Gwei, a podcast for your weekly
                  crypto news update from all around Africa!
                  <br />
                  Sats & Gwei is a Bankless Africa podcast that brings you weekly
                  crypto/web3 headlines about the Africa continent. Stay up to
                  date with the most relevant crypto happenings across Africa.
                </p>

                <div className="flex space-x-4 mt-10">
                  <button onClick={() => setOpen(!Open)} className="flex items-center p-3 text-white border-2 border-white rounded-lg">
                    <span>
                      <SpeakerWaveIcon className="h-6 w-6 text-white" />
                    </span>
                    <p className="ml-2"> Listen on...</p>
                  </button>
                  <button onClick={() => setOpen(!Open)} className="flex items-center p-3 text-white border-2 border-white rounded-lg">
                    <span>
                      <ShareIcon className="h-6 w-6 text-white" />
                    </span>
                    <p className="ml-2"> Share</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slider>

      <Transition.Root show={Open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg cardbg px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                <div className="flex justify-end">
                    <button
                      aria-label="Close"
                      className=" close"
                      type="button"
                      onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                    >
                      <span aria-hidden={true}>
                        <XMarkIcon className="text-white w-6 h-6" />
                      </span>
                    </button>
                  </div>
                  <div className="text-left">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                      Listen on
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-white">
                       You can listen to this podcast on
                       </p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 mt-10 mb-10">
                <button className="flex items-center p-1 text-white border-2 border-white rounded-lg">
                  <span>
                    
                  <FaApple className="h-6 w-6 text-fuchsia-500" />
                  </span>
                  <a href="https://podcasts.apple.com/us/podcast/pidgin-parlour-crypto-podcast/id1651579729" className="text-sm ml-2"> apple Podcast</a>
                </button>
                <button className="flex items-center p-1 text-white border-2 border-white rounded-lg">
                  <span>
                  <FaRss className="h-6 w-6 text-gray-500" />
                  </span>
                  <a href="https://rss.com/podcasts/pidginparlour/" className="text-sm ml-2"> Rss Podcast</a>
                </button>
                <button  className="flex items-center p-1 text-white border-2 border-white rounded-lg">
                  <span>
                  <FaWifi className="h-6 w-6 text-green-900" />
                  </span>
                  <a href="https://www.podbean.com/podcast-detail/4xqnz-28b6b5/Pidgin-Parlour-Crypto-Podcast" className="text-sm ml-2"> Podbean</a>
                </button>
                <button className="flex items-center p-1 text-white border-2 border-white rounded-lg">
                  <span>
                  <FaSpotify className="h-6 w-6 text-green-500" />
                  </span>
                  <a href="https://open.spotify.com/show/3hDjVgNS0pj0eJY7V9Q2wf" className="ml-2"> Spotify</a>
                </button>
              
              </div>
              <div className="flex space-x-3 mt-10 mb-10">
                <button  className="flex items-center p-1 text-white border-2 border-white rounded-lg">
                  <span>
                  <FaGoogle className="h-6 w-6 text-blue-500" />
                  </span>
                  <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL3BpZGdpbnBhcmxvdXIvZmVlZC54bWw" className="text-sm ml-2"> Google podcast</a>
                </button>
                
              
              </div>
              
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    <Transition.Root show={Readmore} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelReadmoreRef} onClose={setReadmore}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg cardbg px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                <div className="flex justify-end">
                    <button
                      aria-label="Close"
                      className=" close"
                      type="button"
                      onClick={() => setReadmore(false)}
                    ref={cancelButtonRef}
                    >
                      <span aria-hidden={true}>
                        <XMarkIcon className="text-white w-6 h-6" />
                      </span>
                    </button>
                  </div>
                  <div className="text-left">
                    <Dialog.Title as="h2" className="text-lg font-medium leading-6 text-white">
                    Pidgin Parlour Crypto Podcast
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-white">
                        
Pidgin Parlor na centre of crypto education and culture for the African pipul wey dey speak Pidgin. The show go dey break down plenti crypto concepts wey just dey confuse person into simple forms wey everyday African go fit dey relate with. And all these things go dey for pidgin, the localized language wey over 75 million Africans dey speak. 

This pidgin parlour crypto podcast dey bring crypto education and culture come inside street."Pidgin Parlour is the centre of crypto education and culture for the everyday pidgin-speaking African. The show breaks down complex crypto concepts into bite-size, easy and simple-to-digest content for the everyday African. And this is all done in pidgin, a localised English spoken by over 75 million Africans. Piding Parlour Crypto Podcast brings crypto education and culture to the streets
                       </p>
                    </div>
                  </div>
                </div>  
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
     
    </div>
  );
}

export default PodCard
