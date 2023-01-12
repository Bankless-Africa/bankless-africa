import React from 'react'
import Card from '../Home/Card'
import card2 from "../../asset/Images/Academy_Banner.jpg";

function Course() {
  return (
    <div className="mx-auto bg-black px-23">
      {/* <h2 className="text-3xl font-bold py-4">Learn Crypto</h2> */}
      {/* <a href="https://app.banklessacademy.com/" target='_blank'>
        <Card title="Bankless Academy" description="Bankless Academy is on a mission to introduce 1 billion people to the exciting possibilities of cryptocurrency, DeFi, and beyond." url={card2} /></a> */}
      {/* <iframe src="https://app.banklessacademy.com/lessons/wallet-basics?embed=bankless-africa" width="100%" height="850px"></iframe> */}
      {/* iframe tyo embed the whole of bankless africa on the learn crypto page */}
      <iframe src="https://app.banklessacademy.com/?fullembed=bankless-africa" frameborder="0" width='100%' height='1500px' ></iframe>
    </div>
  )
}

export default Course