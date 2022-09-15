import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Home/Newsletter";
import { Underline } from ".";
import Academy from '../../asset/Images/Academy_Banner.jpg'
import ProjectCard from "../../components/Social-Impact/Project-Card";
import { FaLink } from "react-icons/fa";


const data = {
    population: {
        members: 100,
        posts: 200
    },
    projects: Array.from(Array(3).fill(
        {
            title: 'Community Events',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.',
            user: {
                name: 'John Smith',
                image: Academy
            },
            metric: {
                date: new Date().toDateString(),
                likes: 10,
                comments: 23
            },
        },
    )),
    members: Array.from(Array(10).fill({name: 'John Smith', image: Academy})),
    url: 'https://community.farewell.com'
}


const SocialDetail = () => {
    return (
        <main className="dark:text-white dark:bg-black">
            <Head>
                <title>Social Impact</title>
            </Head>

            {/* Navbar Section */}
            <Navbar component="home" />

            <section className="w-10/12 mx-auto min-h-screen py-7 my-5">
                <h1 className="font-black mx-auto w-fit text-4xl mb-8">
                    Social <span className="text-red-600">Impact</span>
                    <Underline />
                </h1>

                <article className="w-full min-h-screen grid lg:grid-cols-4 gap-10">
                    <div className="lg:col-span-3">

                        <div className="w-full h-fit flex flex-col md:flex-row justify-between gap-4 gap-x-10">
                            <div className="md:w-2/4 h-fit">
                                <Image src={Academy} width={3} height={2} className="rounded-2xl" layout='responsive' />
                            </div>

                            <p className="md:w-9/12 h-full">
                                <h3 className="font-extrabold text-xl">Community name</h3>
                                <p className="md:mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                                amet luctus venenatis, lectus magna fringilla urna, porttitor
                                </p>
                            </p>


                        </div>

                        <h1 className="font-black w-fit text-2xl my-8">
                            Projects
                            <Underline />
                        </h1>

                        {
                            data.projects.map((project, x) => <ProjectCard key={x} {...project} />)
                        }
                    </div>

                    <div className="col-span-1">
                        <div className="flex gap-5 capitalize mb-5">
                            {
                                Object.entries(data.population).map((entry, x) => 
                                <div key={x}>
                                    <h5 className="font-bold">{entry[1]}</h5>
                                    <span className="text-gray-700 dark:text-white">{entry[0]}</span>
                                </div>)
                            }
                        </div>

                        <div className="h-fit">
                            <Image src={Academy} width={3} height={2} className="rounded-2xl" layout='responsive' />
                        </div>

                        <Link href={data.url} passHref><button className="bg-red-600 font-bold w-fit p-2 my-4 text-white px-5 rounded-md">
                            <FaLink className="inline" /> {data.url}
                        </button></Link>

                        <div>
                            <h3><span className="font-bold text-xl">Members</span> 100</h3>

                            <ul className="my-4">
                                {
                                    data.members.map((member, x) => 
                                    <div key={x} className="grid md:place-items-center grid-flow-col gap-5 mt-3 w-fit">
                                        <Image src={member.image} height={36} width={36} className='rounded-full float-left' layout="fixed" />
                                        <span>{member.name}</span>
                                    </div>)
                                }
                            </ul>

                            <Link href={data.url}><a className="text-red-500 text-xl font-medium">See all</a></Link>
                        </div>
                    </div>
                </article>

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

export default SocialDetail