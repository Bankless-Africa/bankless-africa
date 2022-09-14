import Head from "next/head";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Home/Newsletter";
import Card from "../components/Social-Impact/Card";
import Academy from '../asset/Images/Academy_Banner.jpg'

const Underline = () => <hr className="w-4/5 mx-auto mt-3 border-0 rounded-md h-2 bg-gradient-to-r from-red-700 to-blue-700" />

const DummyData = {
    title: 'Learn Crypto',
    description: 'Start your crypto journey with our easy to understand educated resources. Start your crypto journey withour easy to',
    image: Academy,
    url: './com1'
}

const SocialImpact = () => {
    return(
        <main className="dark:text-white dark:bg-black">
            <Head>
                <title>Social Impact</title>
            </Head>

            {/* Navbar Section */}
            <Navbar component="home" />

            <section className="w-10/12 mx-auto min-h-screen py-12 my-5">
                <h1 className="font-black mx-auto w-fit text-4xl">
                    Social <span className="text-red-600">Impact</span>
                    <Underline />
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                    {
                        // just creating 6 dummy elements
                        Array.from(Array(6).keys()).map((x) => <Card key={x} {...DummyData} />)
                    }
                </div>
            </section>

            {/* Newsletter */}
            <div className="bg-slate-300 w-full h-fit">
                <Newsletter />
            </div>

            {/* Footer Section */}
            <Footer />
        </main>
    )
}

export default SocialImpact