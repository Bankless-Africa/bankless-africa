import box1 from "../../components/Podcast/Images/podcast_cover.png";
import box2 from "../../components/Podcast/Images/sats_gwei.png";
import Image from "next/image";
import Link from "next/link";

import { ShareIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";

function PastCard() {
  return (
    <div>
      <section class="cardbg max-w-6xl px-3 py-8 sm:px-20 md:px-32 lg:px-16 mx-auto relative rounded-3xl">
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
                  <a href=""> Read more </a>
                </span>
              </p>

              <div className="flex space-x-4 mt-10">
                <button className="flex items-center p-3 text-white border-2 border-white rounded-lg">
                  <span>
                    <SpeakerWaveIcon className="h-6 w-6 text-white" />
                  </span>
                  <p className="ml-2"> Listen on...</p>
                </button>
                <button className="flex items-center p-3 text-white border-2 border-white rounded-lg">
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
                <button className="flex items-center p-3 text-white border-2 border-white rounded-lg">
                  <span>
                    <SpeakerWaveIcon className="h-6 w-6 text-white" />
                  </span>
                  <p className="ml-2"> Listen on...</p>
                </button>
                <button className="flex items-center p-3 text-white border-2 border-white rounded-lg">
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
      
    </div>
  );
}

export default PastCard;
