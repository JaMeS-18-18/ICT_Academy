import React from 'react'
import {InstagramIcon, LinkedinIcon, LongArrowIcon, YoutubeIcon} from '../../assets/images/Index'
import './footer.css'
export default function index() {
return (
<div className='container mx-auto px-4 place-self-auto my-7'>
  <div className="footer bg-bg_black">
    <div className='flex items-end'>
      <h3 style={{width: "30%"}} className='text-3xl font-semibold'>ICT IT Academy</h3>
      <div style={{width: "80%"}}>
        <div className='hr'></div>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-3 ">
      <div className="col-span-1 my-5">
        <p className=' text-bg_gray footer_link hover:text-primary transition ease-in-out delay-100  w-48'>Biz sizga dasturlash soxasida karierangizni boshlashingizga va olgan
          bilimlaringizni mustaxkamlashingiz uchun yordam beramiz.</p>
      </div>
      <div className="col-span-1 my-5">
        <span className='mx-5 text-xl'>Bizning servislarimiz</span>
      </div>
      <div className="col-span-1">
        <div className='flex justify-between my-5 me-5  items-center'>
          <span className='footer_link hover:text-primary transition ease-in-out delay-100 '>ICT IT Academy </span>
          <LongArrowIcon />
        </div>
        <div className='hr'></div>
        <div className='flex justify-between my-5 me-5  items-center'>
          <span className='footer_link hover:text-primary transition ease-in-out delay-100 '>ICT IT Academy </span>
          <LongArrowIcon />
        </div>
        <div className='hr'></div>
        <div className='flex justify-between my-5 me-5  items-center'>
          <span className='footer_link hover:text-primary transition ease-in-out delay-100 '>ICT IT Academy </span>
          <LongArrowIcon />
        </div>
        <div className='hr'></div>

      <div className='flex justify-between m-auto my-5 cursor-pointer'>
        <InstagramIcon/>
        <LinkedinIcon/>
        <YoutubeIcon/>
      </div>
      </div>
      <div className="col-span-1">
        <div className='flex justify-between my-5 me-5'>
          <span className='footer_link hover:text-primary transition ease-in-out delay-100 '>Biz haqimizda </span>
          <LongArrowIcon />
        </div>
        <div className='hr'></div>

        <div className='flex justify-between my-5 me-5'>
          <span className='footer_link hover:text-primary transition ease-in-out delay-100 '>Biz bilan aloqa </span>
          <LongArrowIcon />
        </div>
        <div className='hr'></div>
      </div>
    </div>
    
  </div>
</div>
)
}