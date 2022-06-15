import Head from 'next/head'
import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer/Footer'
import Newsletter from '../components/Home/Newsletter'

const Learn = () => {
    return(
        <div className="bg-black">
            <Head>
            <title>Learn Crypto | Bankless Africa</title>
            <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
            <Newsletter />
          <Footer />
        </div>
    );
}
export default Learn;