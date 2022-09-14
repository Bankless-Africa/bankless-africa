import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({title, description, user: {image, name}, metric: {date, likes, comments}}) => {
    return (
        <div className="shadow-md dark:bg-gray-600 rounded-2xl w-full h-fit p-4">
            <h3 className="text-2xl font-black text-red-500">{title}</h3>
            <p className="my-3">{description}</p>
            <div className="flex flex-row justify-between">
                <div className="grid place-items-center grid-flow-col gap-4">
                    <Image src={image} height={25} width={25} className='rounded-full float-left' layout="fixed" />
                    <span className="font-bold">{name}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard