import React from 'react'
import './ListKurslar.css'
import { ArrowIcon} from '../../assets/images/Index'
import AnimateImg from '../../assets/images/Sphere-Green-Glossy.png'
import AnimateImgBody from '../../assets/images/Vector 4.png'
import { Link } from 'react-router-dom'
export default function index() {
  return (
    <div>
      <div className="">
        <h3 className='mt-10 md:mt-20 mb-10 text-2xl md:text-4xl font-semibold'>Kurslarimiz ro'yxati</h3>
        <div className="kurs_btn_card grid grid-cols-12  md:flex justify-between items-center">
        <button className='kurs_btn col-span-6 md:col-span-3 border-primary border-2 active:bg-primary  bg-primary'>Kompyuter savodxonligi</button>
        <button className='kurs_btn col-span-6 md:col-span-3 border-primary border-2 active:bg-primary my-5 mx-2 md:m-0 bg-primary-light text-primary active:text-black'>Foundation</button>
        <button className='kurs_btn col-span-6 md:col-span-3 border-primary border-2 active:bg-primary  bg-primary-light text-primary active:text-black'>Mutaxassislik</button>
        <button className='kurs_btn col-span-6 md:col-span-3 border-primary border-2 active:bg-primary my-5 mx-2 md:m-0 bg-primary-light text-primary active:text-black'>English IT</button>
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-3">
        <div className="col-span-12 px-3 md:p-0 md:col-span-4 my-7">
          <Link to={'/InfoCourse'}>
          <div className="kurs_card cursor-pointer hover:bg-primary">
            <h4 className='text-3xl font-semibold'>Texnika</h4>
            <p className='mt-3 mb-10'>Klaviaturada tezkorlik va terminal bilan ishlash</p>
            <div className="cursor-pointer">
            <ArrowIcon/>
            </div>
            <div className="flex relative">
              <img src={AnimateImgBody} alt="" />
              <img className='absolute top-5 right-0 img-round' src={AnimateImg} alt="" />
            </div>
          </div>
          </Link>
        </div>
        <div className="col-span-12 px-3 md:p-0 md:col-span-4 my-7">
          <Link to={'/InfoCourse'}>
          <div className="kurs_card cursor-pointer hover:bg-primary">
            <h4 className='text-3xl font-semibold'>Texnika</h4>
            <p className='mt-3 mb-10'>Klaviaturada tezkorlik va terminal bilan ishlash</p>
            <div className="cursor-pointer">
            <ArrowIcon/>
            </div>
            <div className="flex relative">
              <img src={AnimateImgBody} alt="" />
              <img className='absolute top-5 right-0 img-round' src={AnimateImg} alt="" />
            </div>
          </div>
          </Link>
        </div>
        <div className="col-span-12 px-3 md:p-0 md:col-span-4 my-7">
          <Link to={'/InfoCourse'}>
          <div className="kurs_card cursor-pointer hover:bg-primary">
            <h4 className='text-3xl font-semibold'>Texnika</h4>
            <p className='mt-3 mb-10'>Klaviaturada tezkorlik va terminal bilan ishlash</p>
            <div className="cursor-pointer">
            <ArrowIcon/>
            </div>
            <div className="flex relative">
              <img src={AnimateImgBody} alt="" />
              <img className='absolute top-5 right-0 img-round' src={AnimateImg} alt="" />
            </div>
          </div>
          </Link>
        </div>
        <div className="col-span-12 px-3 md:p-0 md:col-span-4 my-7">
          <Link to={'/InfoCourse'}>
          <div className="kurs_card cursor-pointer hover:bg-primary">
            <h4 className='text-3xl font-semibold'>Texnika</h4>
            <p className='mt-3 mb-10'>Klaviaturada tezkorlik va terminal bilan ishlash</p>
            <div className="cursor-pointer">
            <ArrowIcon/>
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
  )
}
