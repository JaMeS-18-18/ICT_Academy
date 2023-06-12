import React from 'react'
import Banner from '../../components/Banner'
import Mentor from '../../components/Mentor'
import InfoSection from '../../components/Info_section'
import Comments from '../../components/Comments'
import { motion as m } from 'framer-motion'
import { PhonrIcon, RigthChevronIcon } from '../../assets/icons'
import './Home.css'
import { Link } from 'react-router-dom'
import { ArrowIcon } from '../../assets/images/Index'
import AnimateImg from '../../assets/images/Sphere-Green-Glossy.png'
import AnimateImgBody from '../../assets/images/Vector 4.png'

export default function Home() {
return (
<m.div>
  <header className='container mx-auto px-4 place-self-auto my-10'>
    <div className="header bg-bg_black">
      <div className="">
        <p className='text-bg_gray mb-5 text-xs'>Biz bilan zamonaviy kasblarni o’rganing, tajriba oshiring, mutaxassis
          bo’ling va karierangizni boshlang!</p>
        <h2 className='head_title'>ICT IT-academy bilan zamonaviy kasblar mutaxassisi bo’ling</h2>
        <div className="flex justify-center items-center my-10">
          <button className='flex bg-primary p-4 mx-4 rounded-full'>
            <RigthChevronIcon />
            <p className='mx-2'>Tizimga Kirish</p>
          </button>
          <button className='border-bg_gray flex border-2 p-4 mx-4 rounded-full'>
            <PhonrIcon />
            <p className='mx-2'>Biz bilan aloqa</p>
          </button>
        </div>
      </div>
    </div>
  </header>
  <section className='container mx-auto px-4 place-self-auto my-20'>
    <div className="">
      <h3 className='yonalish_txt '> IT soxasidagi 4 xil yo’nalishda 17 xil <br /> kurslarimiz mavjud </h3>
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <p className='my-3 text-xl hover:text-primary cursor-pointer hover:ms-4 transition-all'>Kompyuter Savodxonligi</p>
          <p className='my-3 text-xl hover:text-primary cursor-pointer hover:ms-4 transition-all'>Foundation</p>
          <p className='my-3 text-xl hover:text-primary cursor-pointer hover:ms-4 transition-all'>Mutaxassislik</p>
          <p className='my-3 text-xl hover:text-primary cursor-pointer hover:ms-4 transition-all'>English for IT</p>
        </div>
        <div className="col-span-7 flex">
          <div className="grid grid-cols-12">
          <div className="col-span-6">
              <Link to={'/InfoCourse'}> <div className="kurs_card m-4 cursor-pointer hover:bg-primary">
              <h4 className='text-3xl font-semibold'>Texnika</h4>
              <p className='mt-3 mb-10'>Klaviaturada tezkorlik va terminal bilan ishlash</p>
              <div className="cursor-pointer">
                <ArrowIcon />
              </div>
              <div className="flex relative">
                <img src={AnimateImgBody} alt="" />
                <img className='absolute top-5 right-0 img-round' src={AnimateImg} alt="" />
              </div>
            </div>
            </Link>
          </div>
          <div className="col-span-6">
            <Link to={'/InfoCourse'}> <div className="kurs_card m-4 cursor-pointer hover:bg-primary">
            <h4 className='text-3xl font-semibold'>Texnika</h4>
            <p className='mt-3 mb-10'>Klaviaturada tezkorlik va terminal bilan ishlash</p>
            <div className="cursor-pointer">
              <ArrowIcon />
            </div>
            <div className="flex relative">
              <img src={AnimateImgBody} alt="" />
              <img className='absolute top-5 right-0 img-round' src={AnimateImg} alt="" />
            </div>
          </div>
          </Link>
        </div>
        <div className="col-span-6">
            <Link to={'/InfoCourse'}> <div className="kurs_card m-4 cursor-pointer hover:bg-primary">
            <h4 className='text-3xl font-semibold'>Texnika</h4>
            <p className='mt-3 mb-10'>Klaviaturada tezkorlik va terminal bilan ishlash</p>
            <div className="cursor-pointer">
              <ArrowIcon />
            </div>
            <div className="flex relative">
              <img src={AnimateImgBody} alt="" />
              <img className='absolute top-5 right-0 img-round' src={AnimateImg} alt="" />
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  </section>
  <Banner />
  <InfoSection />
  <Mentor />
  <Comments />
</m.div>
)
}