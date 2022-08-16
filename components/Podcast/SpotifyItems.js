import Upcoming from "../Podcast/Upcoming"
import Past from "../Podcast/Past"
import { useEffect, useState } from "react"
import axios from "axios"

const SpotifyItems = ({ token }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get("https://api.spotify.com/v1/shows/41TNnXSv5ExcQSzEGLlGhy", {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then((response) => setData(response.data))
    }, [])
    return(
        <div>
            {
                data ? <Upcoming data={data.episodes.items.slice(0, 6)} bearer={token} /> : <div className="text-white text-center">No Upcoming Events Found</div>
            }
            
            {
                data ? <Past data={data.episodes.items.slice(-7, -1)} bearer={token} /> : <div className="text-white text-center">No Upcoming Events Found</div>
            }
        </div>
    )
}

export default SpotifyItems