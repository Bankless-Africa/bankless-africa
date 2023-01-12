import Head from 'next/head';
import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import Newsletter from '../components/Home/Newsletter';
import Course from '../components/Learn-Crypto/Course';

const Learn = () => {
  return (
    <div>
      <Head>
        <title>Learn Crypto | Bankless Africa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar component="learn" />
      <div className="">
        <Course />
        <Footer />
      </div>
    </div>
  );
};
export default Learn;
