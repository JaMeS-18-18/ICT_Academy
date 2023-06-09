import React from 'react'
import { CertificateIcon, GraduetesIcon, LifeChangeIcon, MyFileIcon } from '../../assets/icons'
import SectionImage from '../../assets/images/Rectangle 5.png'
import './info.css'
export default function index() {
return (
<div className='container mx-auto px-4 place-self-auto'>
  <div className="grid grid-cols-12">
    <div className="col-span-4">
      <div  className='flex items-center my-12'>
        <GraduetesIcon />
        <div style={{width: "100%"}} className="ms-5 ps-5 text-start ">
          <h4 className='text-xl font-semibold'>300+ muvaffaqiyatli bitiruvchi</h4>
          <p className='text-l text-secondary'>IT sohasida o’z o’rniga ega</p>
        </div>
      </div>
      <div className='flex items-center my-12'>
        <CertificateIcon />
        <div style={{width: "100%"}} className="ms-5 ps-5 text-start">
          <h4 className='text-xl font-semibold'>Kurs yakunida sertifikat</h4>
          <p className='text-l text-secondary'>Rezyume uchun plyus</p>
        </div>
      </div>
      <div className='flex items-center my-12'>
        <MyFileIcon />
        <div style={{width: "100%"}} className="ms-5 ps-5 text-start ">
          <h4 className='text-xl font-semibold'>Ishga joylashish kafolati</h4>
          <p className='text-l text-secondary'>O'rganish orqali pul topish</p>
        </div>
      </div>
      <div style={{width: "100%"}} className='flex items-center my-12'>
        <LifeChangeIcon />
        <div style={{width: "100%"}} className="ms-5 ps-5 text-start ">
          <h4 className='text-xl font-semibold'>Hayotni o'zgartirish</h4>
          <p className='text-l text-secondary'>Sizning va bizning asosiy maqsadimiz</p>
        </div>
      </div>
    </div>
    <div className="col-span-8 flex justify-center items-center relative">
      <img src={SectionImage} alt="" />
      <div className='statistik bg-primary'>
        <div className="card-1 border-e-2 w-32">
          <h2 className='text-5xl font-semibold'>17</h2>
          <p>Kurslar</p>
        </div>
        <div className="card-2 border-e-2 w-32 text-start">
          <h2 className='text-5xl font-semibold'>180</h2>
          <p>Bitiruvchilar</p>
        </div>
        <div className="card-3 w-32 text-start">
          <h2 className='text-5xl font-semibold'>50</h2>
          <p>Talabalar</p>
        </div>
      </div>
    </div>
  </div>
</div>
)
}