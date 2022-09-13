import Head from "next/head";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";

const Underline = () => <hr className="w-4/5 mx-auto mt-2 border-0 rounded-md h-2 bg-gradient-to-r from-red-700 to-blue-700" />

const SocialImpact = () => {
    return(
        <main>
            <Head>
                <title>Social Impact</title>
            </Head>

            {/* Navbar Section */}
            <Navbar component="home" />

            <section className="w-full min-h-screen pt-12 dark:text-white dark:bg-black">
                <h1 className="font-black mx-auto w-fit text-4xl">
                    Social <span className="text-red-600">Impact</span>
                    <Underline />
                </h1>
            </section>

            {/* Footer Section */}
            <Footer />
        </main>
    )
}

export default SocialImpact