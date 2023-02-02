import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import PodCard from "../components/Podcast/PodCard";
import Newsletter from "../components/Home/Newsletter";
import Head from "next/head";
const Podcast = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>Bankless Africa Podcast</title>
        <link rel="icon" href="../public/favicon.png" />
      </Head>
      <Navbar component="podcast" />
      <div className="bg-bgEdu min-w-screen h-auto bg-100% bg-no-repeat bg-center mt-8 md:mt-6 py-20 sm:py-40 md:py-52 xl:py-64 2xl:py-80 px-8">
        <h1 className="text-xl font-bold text-center text-white sm:text-4xl md:text-6xl">
          Bankless Africa Podcast
        </h1>
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
