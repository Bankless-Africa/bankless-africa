import Navbar from '../components/Nav/Navbar'
import Footer from "../components/Footer/Footer";
import PastCard from "../components/Podcast/PastCard";
import Newsletter from "../components/Home/Newsletter";
import Head from "next/head";
const Podcast = () => {
    return(
        <div className="bg-black">
            <Head>
            <title>Bankless Africa Podcast</title>
            <link rel='icon' href='../public/favicon.png' />
      </Head>
            <Navbar component="podcast" />
            <div className="bg-bgEdu min-w-screen h-auto bg-100% bg-no-repeat bg-center mt-8 md:mt-6 py-20 sm:py-40 md:py-52 xl:py-64 2xl:py-80 px-8">
                <h1 className="text-xl font-bold text-center text-white sm:text-4xl md:text-6xl">Bankless Africa Podcast</h1>
            </div>
            <div className="pb-10 mt-3 bg-black">
            <p class="ml-10 text-4xl text-white">Upcoming Podcast</p>
            <PastCard />
           
<div class="container py-8 px-3 mx-0 min-w-full flex flex-col items-center">
  <button class="bg-red-600 shadow text-white font-bold py-2 px-4 mt-3 rounded">See More</button>
</div>
            </div>
            <Newsletter />
          <Footer />
        </div>
    );
}
export default Podcast;