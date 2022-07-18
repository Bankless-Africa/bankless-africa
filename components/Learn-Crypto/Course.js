import React from 'react'
import Card from '../Home/Card'
import card2 from "../../asset/Images/Academy_Banner.jpg";

function Course() {
  return (
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold py-4">Learn Crypto</h2>
        <a href="https://app.banklessacademy.com/" target='_blank'>
        <Card title="Bankless Academy" description="Bankless Academy is on a mission to introduce 1 billion people to the exciting possibilities of cryptocurrency, DeFi, and beyond." url={card2} /></a>
    </div>
  )
}

export default Course