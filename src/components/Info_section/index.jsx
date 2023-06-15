import React from 'react'
import { motion as m } from 'framer-motion'
import SectionImage from '../../assets/images/Rectangle 5.png'
import { CertificateIcon, GraduetesIcon, LifeChangeIcon, MyFileIcon } from '../../assets/icons'
import './info.css'

export default function index() {
return (
<m.div initial={{ opacity: "0"}} animate={{ opacity: "100%"}} transition={{duration: 0.75, ease: "easeOut"}}
  exit={{opacity: 1,}} className='container mx-auto px-4 place-self-auto'>
  <div className="grid grid-cols-12">
    <m.div className="col-span-12 md:col-span-4">
      <m.div  className='flex items-center my-12'>
        <GraduetesIcon />
        <div style={{width: "100%"}} className="ms-5 ps-5 text-start ">
          <m.h4 initial={{y: "200%"}} animate={{y:0}} transition={{duration: 0.75}}  className='text-xl font-semibold'>300+ muvaffaqiyatli bitiruvchi</m.h4>
          <m.p initial={{y: "200%"}} animate={{y:0}} transition={{duration: 0.75}} className='text-l text-secondary'>IT sohasida o’z o’rniga ega</m.p>
        </div>
      </m.div>
      <m.div className='flex items-center my-12 '>
        <CertificateIcon />
        <div style={{width: "100%"}} className="ms-5 ps-5 text-start overflow-hidden">
          <m.h4 initial={{y: "200%"}} animate={{y:0}} transition={{duration: 0.75}} className='text-xl font-semibold'>
            Kurs yakunida sertifikat</m.h4>
          <m.p initial={{y: "200%"}} animate={{y:0}} transition={{duration: 0.75}} className='text-l text-secondary'>
            Rezyume uchun plyus</m.p>
        </div>
      </m.div>
      <div className='flex items-center my-12'>
        <MyFileIcon />
        <div style={{width: "100%"}} className="ms-5 ps-5 text-start ">
          <m.h4 initial={{y: "200%"}} animate={{y:0}} transition={{duration: 0.75}} className='text-xl font-semibold'>Ishga joylashish kafolati</m.h4>
          <m.p  initial={{y: "200%"}} animate={{y:0}} transition={{duration: 0.75}} className='text-l text-secondary'>O'rganish orqali pul topish</m.p>
        </div>
      </div>
      <div style={{width: "100%"}}
        className='flex items-center my-12'>
        <LifeChangeIcon />
        <div style={{width: "100%"}} className="ms-5 ps-5 text-start ">
          <m.h4 initial={{y: "200%"}} animate={{y:0}} transition={{duration: 0.75}}  className='text-xl font-semibold'>Hayotni o'zgartirish</m.h4>
          <m.p initial={{y: "200%"}} animate={{y:0}} transition={{duration: 0.75}} className='text-l text-secondary'>Sizning va bizning asosiy maqsadimiz</m.p>
        </div>
      </div>
    </m.div>
    <div className="col-span-12 md:col-span-8 mb-16 flex justify-center items-center relative">
      <m.img initial={{x: "100%"}} animate={{x:0}} transition={{duration: 0.75}} src={SectionImage} alt="" />
      <div className='statistik bg-primary '>
        <div className="card-1 md:border-e-2 w-32">
          <h2 className='text-2xl text-center md:text-5xl font-semibold'>17</h2>
          <p className='text-center'>Kurslar</p>
        </div>
        <div className="card-2 md:border-e-2 w-32 text-start">
          <h2 className='text-2xl text-center md:text-start md:text-5xl font-semibold'>180</h2>
          <p className='text-center md:text-start'>Bitiruvchilar</p>
        </div>
        <div className="card-3 w-32 text-start">
          <h2 className='text-2xl text-center md:text-start md:text-5xl font-semibold'>50</h2>
          <p className='text-center md:text-start'>Talabalar</p>
        </div>
      </div>
    </div>
  </div>
</m.div>
)
}