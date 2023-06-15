import React, { useEffect, useState } from 'react'
import Mentor from '../../components/Mentor'
import GetAbout from '../../utils/GetAbout'
import Logo from '../../assets/images/ICT academy-01s.png'
import { EmailIcon, LocationIcon, PhonrIcon } from '../../assets/icons'
import './About.css'
export default function About() {
  const [Biz, setBiz] = useState({});
  useEffect(() => {
    AboutUS()
  }, []);
 async function AboutUS() {
    const result = await GetAbout.About()
    setBiz(result[0])
  }
  return (
    <div className='container mx-auto px-4 place-self-auto'>
      <div className="grid grid-cols-12 my-24">
        <div className="col-span-12 md:col-span-6 text-center">
          <img className='h-100' src={Biz.image} alt="" />
          <h4 className='text-2xl mt-6 font-semibold'>{Biz.director}</h4>
          <p className='text-xl'>{Biz.director_pos}</p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <h2 className='text-2xl md:text-4xl font-semibold mt-10 mb-3 md:my-3'>{Biz.title}</h2>
          <p className='md:text-xl'>{Biz.body}</p>
        </div>
      </div>
      <Mentor/>

      <h2 className='text-2xl md:text-4xl font-semibold mt-28 mb-5'>Faoliyatimiz</h2>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <p className='md:text-xl mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed asperiores doloremque quo ipsum maxime dignissimos aspernatur possimus, doloribus rerum non, cum quasi dolor eos impedit! Voluptatum, placeat minus. Ipsa voluptas dicta provident magnam incidunt accusamus dolores nobis ex, eveniet voluptatibus saepe, voluptatum, natus veritatis excepturi tempore consequuntur vel architecto ut consectetur voluptates quod ipsum ad fugit? A corrupti quaerat nulla modi praesentium adipisci magni odio blanditiis illo quasi similique explicabo cupiditate, commodi eos maxime eaque pariatur.</p>
        </div>
        <div className="col-span-12 md:col-span-6 flex items-center justify-center">
          <img className='w-50 h-50' src={Logo} alt="" />
        </div>
      </div>

      <h2 className='text-4xl font-semibold mb-5 mt-20'>Biz bilan aloqa</h2>
      <div className="contact bg-bg_gray">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <div className=" my-10">
            <div className="flex">
              <LocationIcon/> <h3 className='mx-2 text-xl font-semibold'>Manzil</h3>
            </div>
            <p>Yunusobod tumani, Bodomzor mahallasi, 34-uy</p>
          </div>
          <div className=" my-10">
            <div className="flex">
              <PhonrIcon/> <h3 className='mx-2 text-xl font-semibold'>Telefon</h3>
            </div>
            <p>+988 95 143 00 13</p>
          </div>
          <div className=" my-10">
            <div className="flex">
              <EmailIcon/> <h3 className='mx-2 text-xl font-semibold'>Manzil</h3>
            </div>
            <p>ictacademy@gmail.com</p>
          </div>

        </div>
        <div className="col-span-12 md:col-span-6">
        <iframe title='Ict-Academy' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5498396505905!2d69.28872207530173!3d41.34040117130588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3db2b06783b%3A0x84660e201e025d7a!2sICT%20ACADEMY!5e0!3m2!1suz!2s!4v1686311857254!5m2!1suz!2s" width="100%" height="100%" style={{borderRadius: "30px"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      </div>
    </div>
  )
}
