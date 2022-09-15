import Image from "next/image"
import Link from "next/link"
import {AiOutlineLike} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import {FaRegCalendarAlt} from 'react-icons/fa'

const IconPack = {
    likes: <AiOutlineLike className="inline" />,
    comments: <BiCommentDetail className="inline" />,
    date: <FaRegCalendarAlt className="inline" />
}

const ProjectCard = ({title, description, user: {image, name}, metric}) => {
    return (
        <div className="shadow-xl dark:bg-darkBlack rounded-2xl w-full h-fit p-4 mb-5">
            <h3 className="text-2xl font-black text-red-500">{title}</h3>
            <p className="my-3">{description}</p>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="grid md:place-items-center grid-flow-col gap-4 w-fit">
                    <Image src={image} height={30} width={30} className='rounded-full float-left' layout="fixed" />
                    <span className="font-bold">{name}</span>
                </div>

                <div>
                    {Object.keys(IconPack).map((label, x) => <span key={x} className='inline-flex flex-row items-center gap-1 mx-2'>
                        {IconPack[label]} {metric[label]}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
