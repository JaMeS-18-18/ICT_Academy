import React from 'react'
import { Link } from 'react-router-dom'
import {InstagramIcon, LinkedinIcon, LongArrowIcon, YoutubeIcon} from '../../assets/images/Index'
import './footer.css'
export default function index() {
return (
<div className='container mx-auto px-4 place-self-auto my-7'>
  <div className="footer p-10 bg-bg_black">
    <div className='flex items-end'>
      <h3 style={{width: "30%"}} className='text-xl md:text-3xl font-semibold'>ICT IT Academy</h3>
      <div style={{width: "80%"}}>
        <div className='hidden md:inline-flex hr'></div>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-3 ">
      <div className="col-span-12 md:col-span-3 my-5">
        <p className=' text-bg_gray footer_link hover:text-primary transition ease-in-out delay-100  w-48'>Biz sizga dasturlash soxasida karierangizni boshlashingizga va olgan
          bilimlaringizni mustaxkamlashingiz uchun yordam beramiz.</p>
      </div>
      <div className="col-span-12 md:col-span-3 my-5">
        <span className='mx-5 text-xl'>Bizning servislarimiz</span>
      </div>
      <div className="col-span-12 order-2 md:order-1 md:col-span-3">
        <Link to={'/Courses'}>
          <div className='flex justify-between my-5 me-5  items-center'>
            <span className='footer_link hover:text-primary transition ease-in-out delay-100 '>Kurslar </span>
            <LongArrowIcon />
          </div>
        </Link>
        <div className='hr'></div>
<Link to={'/Portfolio'}>
<div className='flex justify-between my-5 me-5  items-center'>
          <span className='footer_link hover:text-primary transition ease-in-out delay-100 '>Portfolio </span>
          <LongArrowIcon />
        </div>
</Link>
        <div className='hr'></div>
        <Link to={'/About'}>
        <div className='flex justify-between my-5 me-5  items-center'>
          <span className='footer_link hover:text-primary transition ease-in-out delay-100 '>Biz Haqimizda </span>
          <LongArrowIcon />
        </div>
        </Link>
        <div className='hr'></div>

      <div className='flex justify-between m-auto my-5 cursor-pointer'>
        <a href="https://www.instagram.com/ictacademy_uz/"><InstagramIcon/></a>
        <LinkedinIcon/>
        <a href="https://www.youtube.com/@ictacademy4799"><YoutubeIcon/></a>
      </div>
      </div>
      <div className="col-span-12 md:col-span-3 order-1">
       <Link to={'/News'} >
       <div className='flex justify-between my-5 me-5'>
          <span className='footer_link hover:text-primary transition ease-in-out delay-100 '>Yangiliklar </span>
          <LongArrowIcon />
        </div>
       </Link>
        <div className='hr'></div>

        <div className='flex justify-between my-5 me-5'>
          <span className='footer_link hover:text-primary transition ease-in-out delay-100 '><a href="tel:99895-143-00-13">Biz bilan aloqa</a> </span>
          <LongArrowIcon />
        </div>
        <div className='hr'></div>
      </div>
    </div>
  </div>
</div>
)
}