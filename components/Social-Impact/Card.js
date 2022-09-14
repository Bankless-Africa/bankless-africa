import Image from "next/image"
import Link from "next/link"

const Card = ({title, description, image, url}) => {
    return (
        <div className="bg-black text-white dark:bg-gray-600 rounded-2xl w-full h-fit p-6 grid gap-3 items-center">
            <div className="w-full mx-auto">
                <Image src={image} height={7} width={12} className='rounded-2xl' layout="responsive" />
            </div>
            <h3 className="text-2xl font-black">{title}</h3>
            <p className="">{description}</p>
            <Link href={url} passHref><button className="bg-red-600 font-bold w-fit p-2 px-5 rounded-md">View Community</button></Link>
        </div>
    )
}

// Card.propsType = {
//     title: string,
//     description: string,
//     image: string,
//     // CTA url
//     url: string
// }

export default Card