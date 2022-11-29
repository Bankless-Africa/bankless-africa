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
      <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css" />
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
      <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
    </div>
  )
}
