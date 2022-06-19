import React, { useEffect } from "react";
import Image from "next/image";

function Card({ page, title, description, url }) {

  return (
    <div className="w-64 shadow-2xl bg-gradient-to-b from-zinc-800 to-zinc-800 rounded-xl xl:w-96">
      <a href={page}>
      <div className=""><Image src={url} layout="responsive" width={200} height={150} alt=""/></div>
      <div className="px-4 pb-2">
        <h2 className="mt-2 text-lg font-normal text-white">{title}</h2>
        <p className="text-base font-light text-white">{description}</p>
      </div>
      </a>
    </div>
  )
}

export default Card
