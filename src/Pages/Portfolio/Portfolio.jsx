import React from 'react'
import PortfolioImg from '../../assets/images/mockup2.png'
export default function Portfolio() {
  return (
    <div className='container mx-auto px-4 place-self-auto my-7'>
      <h2 className='text-5xl font-semibold mt-24 mb-14'>Loyihalarimiz</h2>
      <div className="flex w-96 justify-evenly md:justify-between md:my-10">
        <div className="">
          <h6 className='text-2xl font-semibold'>20+</h6>
          <p>veb saytlar</p>
        </div>
        <div className="">
          <h6 className='text-2xl font-semibold'>40+</h6>
          <p>mobil ilovalar</p>
        </div>
        <div className="">
          <h6 className='text-2xl font-semibold'>100+</h6>
          <p>telegram botlar</p>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 my-10 cursor-pointer">
          <img src={PortfolioImg} alt="" />
        </div>
        <div className="col-span-12 md:col-span-6 my-10 cursor-pointer">
         <img src={PortfolioImg} alt="" />
        </div>
        <div className="col-span-12 md:col-span-6 my-10 cursor-pointer">
          <img src={PortfolioImg} alt="" />
        </div>
        <div className="col-span-12 md:col-span-6 my-10 cursor-pointer">
         <img src={PortfolioImg} alt="" />
        </div>
      </div>

      
    </div>
  )
}
