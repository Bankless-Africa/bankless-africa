import Navbar from '../components/Nav/Navbar'
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Podcast/Newsletter";
import Head from "next/head";
import SpotifyItems from '../components/Podcast/SpotifyItems';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Podcast = () => {

    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"

    const [token, setToken] = useState(null)

    var login

    useEffect(() => {
        if (typeof window != "undefined") {
            const hash = window.location.hash
            if (!token && hash) {
                login = hash.substring(1).split("&").find(elem => elem.startsWith('access_token')).split("=")[1]
                setToken(login)
            }
        }
    }, [])

    return(
        <div className="bg-black">
            <Head>
                <title>Bankless Africa Podcast</title>
                <link rel='icon' href='../public/favicon.png' />
            </Head>
            <Navbar component="podcast" />
            <div className="bg-bgEdu min-w-screen h-auto bg-cover bg-no-repeat bg-center md:mt-6 lg:mt-0 py-20 sm:py-40 md:py-52 xl:py-64 2xl:py-80 px-8">
                <h1 className="text-xl font-bold text-center text-white sm:text-4xl md:text-6xl">Bankless Africa Podcast</h1>
            </div>
            <div className="pb-10 bg-black">
                {
                    token ? <SpotifyItems token={token} /> : <div className='text-center py-10'>
                        <Link href={`${AUTH_ENDPOINT}?client_id=${process.env.CLIENT_ID}&redirect_uri=https://bankless-africa.vercel.app/podcast&response_type=token`}>
                            <a>
                                <button className='bg-green-600 text-white font-semibold rounded-lg p-3'>Login With Spotify</button>
                            </a>
                        </Link>
                    </div>
                }
            </div>
            <Newsletter />
          <Footer component="podcast" />
        </div>
    );
}
export default Podcast;