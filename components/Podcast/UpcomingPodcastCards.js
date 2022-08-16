import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const UpcomingPodcastCards = ({ id, title, description, thumbnail, duration, href }) => {

    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const mins = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
    const secs = Math.floor((duration % (1000 * 60)) / 1000)

    const time = hours + ":" + mins + ":" + (secs < 10 ? "0"+secs : secs)

    const token = window.location.hash.substring(1).split("&").find(elem => elem.startsWith('access_token')).split("=")[1]

    const [publisher, setPublisher] = useState(null)

    useEffect(() => {
        axios.get(`https://api.spotify.com/v1/episodes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then((response) => setPublisher(response.data))
    }, [])

    return(
        <div className="text-white">
                    <Image src={thumbnail} width={600} height={500} />
                    <div className="bg-ash text-white p-5 -mt-2 space-y-1">
                        <h6 className="text-sm">Hosted by <span className="text-red-600">{publisher?.show.publisher}</span></h6>
                        <h4 className="text-lg">{title}</h4>
                        <p className="text-sm max-h-10 h-10 truncate text-white">{description}</p>
                        <div className="flex justify-between items-center">
                            <Link href={href}>
                                <a>
                                    <button className="text-sm bg-red-600 p-3 rounded-lg">
                                        <Image src="/play.png" width={10} height={10} /> Play this episode
                                    </button>
                                </a>
                            </Link>
                            <button className="text-sm bg-lightAsh p-3 rounded-lg flex items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p>{time}</p>
                            </button>
                        </div>
                    </div>
                </div>
        
    )
}
export default UpcomingPodcastCards