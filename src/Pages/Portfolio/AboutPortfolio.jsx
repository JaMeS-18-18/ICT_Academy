import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Projects from '../../utils/Projects';
import PlayStore from '../../assets/images/Google Play.png'
import AppStore from '../../assets/images/App Store.png'
import Logo from '../../assets/images/ICT academy-01s.png'

export default function AboutPortfolio() {
  const {id} = useParams()
  const [AboutProject, setAboutProject] = useState({});
  useEffect(() => {
    Project()
  }, []);
 async function Project() {
    const result = await Projects.Projects(id)
    setAboutProject(result)
  }
  return (
    <div className='container mx-auto px-4 place-self-auto my-7'>
      <h2 className='text-5xl font-semibold mt-24 mb-14'>Loyihalarimiz</h2>
      {/* <div className="flex w-96 justify-evenly md:justify-between md:my-10">
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
      </div> */}
      <div className="grid grid cols-12">
        <div className="col-span-12">
          <img className='w-full' style={{objectFit: "cover"}} src={AboutProject?.product_image_2} alt="" />    
          <div className="flex justify-center items-center my-10">
          <a className='mx-5 cursor-pointer' href={AboutProject?.product_url_ios}><img src={AppStore}></img></a>    
          <a className='mx-5 cursor-pointer' href={AboutProject?.product_url_android}><img src={PlayStore}></img></a>      
          </div>
        </div>
      </div>

      <h2 className='text-2xl md:text-4xl font-semibold mt-28 mb-5'>Mijoz Haqida</h2>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <p className='md:text-xl mb-5'>{AboutProject?.about_customer}</p>
        </div>
        <div className="col-span-12 md:col-span-6 flex items-center justify-center">
          <img className='w-50 h-50' src={Logo} alt="" />
        </div>
      </div>

      <h2 className='text-2xl md:text-4xl font-semibold mt-28 mb-5'>Talablar</h2>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 flex items-center justify-center">
          <img className='w-50 h-50 pe-8 border-24' style={{height: "400px", width:"100%", objectFit: "cover"}} src={AboutProject?.product_image} alt="" />
        </div>
        <div className="col-span-12 md:col-span-6">
          <p className='md:text-xl mb-5'>{AboutProject?.requirements}</p>
        </div>
      </div>
    </div>
  )
}
