import React from 'react'
import './ListKurslar.css'
import { ArrowIcon} from '../../assets/images/Index'
import AnimateImg from '../../assets/images/Sphere-Green-Glossy.png'
import AnimateImgBody from '../../assets/images/Vector 4.png'
export default function index() {
  return (
    <div>
      <div className="">
        <h3 className='mt-20 mb-10 text-4xl font-semibold'>Kurslarimiz ro'yxati</h3>
        <div className="kurs_btn_card">
        <button className='kurs_btn border-primary border-2 active:bg-primary  bg-primary'>Kompyuter savodxonligi</button>
        <button className='kurs_btn border-primary border-2 active:bg-primary  bg-primary-light text-primary active:text-black'>Foundation</button>
        <button className='kurs_btn border-primary border-2 active:bg-primary  bg-primary-light text-primary active:text-black'>Mutaxassislik</button>
        <button className='kurs_btn border-primary border-2 active:bg-primary  bg-primary-light text-primary active:text-black'>English for IT</button>
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-3">
        <div className="col-span-4 my-7">
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
        </div>
        <div className="col-span-4 my-7">
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
        </div>
        <div className="col-span-4 my-7">
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
        </div>
        <div className="col-span-4 my-7">
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
        </div>
      </div>
    </div>
  )
}
