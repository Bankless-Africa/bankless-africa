import box1 from "../../components/Podcast/Images/box1.png";
import Image from "next/image";

function PastCard() {
  return (
        <section className="max-w-6xl px-3 py-3 mx-auto relative bg-gradient-to-b from-red-600 to-red-600 rounded-3xl">
<div className="container items-center max-w-6xl  mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 my-12 sm:my-16">
        <div className="flex flex-col">
        <h2 className="font-bold text-2xl text-white sm:text-4xl leading-6 lg:text-3xl mt-3">Listen, learn, and lead others into the future</h2>
        <p className="mt-4 text-gray-200 text-base sm:text-1xl leading-6 lg:text-1xl break-all">Every single episodes educates you on Web3, Defi, and Crypto.</p>    
        </div>
      <div className=" flex flex-col"> <iframe title="banklessAfrica Podcast" allowtransparency="true" height="315" width="100%" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=94twg-cca80a-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=none&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=c73a3a&size=315" allowFullScreen=""></iframe></div>
    </div>
  </div>
    </section>
  )
}

export default PastCard