import UpcomingPodcastCards from "./UpcomingPodcastCards"

const Past = ({ data }) => {

    return(
        <div className="mx-1 sm:mx-6 lg:mx-24 px-3 py-3 relative my-16">
            <h1 className="text-white text-2xl">Past Podcast</h1>
            <div className="mt-10 sm:grid sm:grid-cols-2 lg:grid-cols-3 space-y-4 sm:space-y-0 gap-8">
                {
                    data.map((data) => <UpcomingPodcastCards
                        key={data.id}
                        id={data.id}
                        href={data.external_urls.spotify}
                        audio={data.audio_preview_url}
                        thumbnail={data.images[0].url}
                        author={data.author}
                        title={data.name}
                        desc={data.description}
                        duration={data.duration_ms} />)
                }
            </div>
        </div>
    )
}

export default Past