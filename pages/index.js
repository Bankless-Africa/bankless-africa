import 'animate.css';
import Head from 'next/head'
import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Home/Hero'
import Partner from '../components/Home/Partner'
import Bankless from '../components/Home/Bankless'
import Newsletter from '../components/Home/Newsletter'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Bankless Africa</title>
        <meta
          name='description'
          content='An african media node for the Bankless crypto media DAO'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Navbar Section */}
      <Navbar component="home" />

      {/* Main Section */}
      <main className='bg-black'>
        <Hero />
        <Bankless />
        <Partner />
        <Newsletter />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
