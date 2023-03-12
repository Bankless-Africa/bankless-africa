import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import PodCard from '../components/Podcast/PodCard';
import Newsletter from '../components/Home/Newsletter';
import Head from 'next/head';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Podcast = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>Bankless Africa Podcast</title>
        <link rel="icon" href="../public/favicon.png" />
      </Head>
      <Navbar component="podcast" />
      <div className="">
        <Slider
          dots={true}
          infinite={true}
          speed={200}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          arrows={false}
        >
          <div className="bg-bgEdu min-w-screen h-auto bg-100% bg-no-repeat bg-center mt-8 md:mt-6 py-20 sm:py-40 md:py-52 xl:py-64 2xl:py-80 px-8">
            <h1 className="text-xl font-bold text-center text-white sm:text-4xl md:text-6xl">
              Pidgin Parlour Crypto Podcast
            </h1>
          </div>
          <div className="bg-aboutBg1 min-w-screen h-auto bg-100% bg-no-repeat bg-center mt-8 md:mt-6 py-20 sm:py-40 md:py-52 xl:py-64 2xl:py-80 px-8">
            <h1 className="text-xl font-bold text-center text-white sm:text-4xl md:text-6xl">
              Sats and Gwei Podcast
            </h1>
          </div>
          <div className="bg-bgEdu min-w-screen h-auto bg-100% bg-no-repeat bg-center mt-8 md:mt-6 py-20 sm:py-40 md:py-52 xl:py-64 2xl:py-80 px-8">
            <h1 className="text-xl font-bold text-center text-white sm:text-4xl md:text-6xl">
              Bankless Africa Podcast
            </h1>
          </div>
        </Slider>
      </div>
      <div className="pb-10 mt-3 bg-black">
        <PodCard />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Podcast;
