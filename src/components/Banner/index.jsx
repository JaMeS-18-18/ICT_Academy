import React from 'react'
import { motion as m } from 'framer-motion'
import './banner.css'
import BannerImage from '../../assets/images/Mask group (1).png'

export default function index() {
  
  return (
    <m.div 
    initial={{ opacity: "0"}}
    animate={{ opacity: "100%"}}
    transition={{duration: 0.75, ease: "easeOut"}}
    exit={{opacity: 1,}}
    className='container mx-auto px-4 place-self-auto '>
      <div  className="banner bg-primary overflow-hidden">
        <m.img 
        initial={{y: "100%"}}
        animate={{y:0}}
        transition={{duration: 0.75}}
        className='banner_image' src={BannerImage} alt="" />
       <div className='overflow-hidden'>
       <m.h3 
        initial={{y: "100%"}}
        animate={{y:0}}
        transition={{duration: 0.75}}
        className='banner_txt'>Sizni ulkan <br /> muvoffaqiyatlar <br /> kutmoqda</m.h3>
       </div>
      </div>
    </m.div>
  )
}
  