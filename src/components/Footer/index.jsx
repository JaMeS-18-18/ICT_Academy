import React from 'react'
import { Link } from 'react-router-dom'
import {InstagramIcon, LinkedinIcon, LongArrowIcon, YoutubeIcon} from '../../assets/images/Index'
import './footer.css'
import { EmailIcon, LocationIcon, PhonrIcon } from '../../assets/icons'
export default function index() {
return (
<div className='mt-7'>
  <div className="footer p-10 bg-bg_black ">
    <div className="md:container md:mx-auto md:px-4 md:place-self-auto">
    <div className='flex items-end'>
    </div>
    <div className=" grid-cols-12 flex flex-wrap gap-3 ">
      <div className="col-span-12 md:col-span-3 my-5">
      <h3  className='text-xl md:text-3xl my-4 font-semibold'>ICT IT Academy</h3>
       <div className="md:w-[380px]">
        <span className=' text-bg_gray  footer_link hover:text-primary transition ease-in-out delay-100'>Biz sizga dasturlash soxasida karierangizni boshlashingizga va olgan bilimlaringizni mustaxkamlashingiz uchun yordam beramiz.Biz sizga dasturlash soxasida karierangizni boshlashingizga va olgan bilimlaringizni mustaxkamlashingiz uchun yordam beramiz.</span>
       </div>
      </div>
      {/* <div className="col-span-12 md:col-span-4 my-5">
        <div className="text-center text-l md:text-xl my-5 font-semibold">
        <p>Biz ijtimoiy tarmoqlarda</p>
        <div className='flex justify-around items-center h-full m-auto my-5 cursor-pointer'>
        <a className='mx-3' href="https://www.instagram.com/ictacademy_uz/"><InstagramIcon/></a>
        <LinkedinIcon/>
        <a className='mx-3' href="https://www.youtube.com/@ictacademy4799"><YoutubeIcon/></a>
        </div>
      </div>
      </div> */}
      <div className="col-span-12 md:col-span-4">
          <div className=" my-10">
            <div className="flex">
              <LocationIcon color={'white'}/> <h3 className='mx-2 text-xl font-semibold'>Manzil</h3>
            </div>
            <p>Yunusobod tumani, Bodomzor mahallasi, 34-uy</p>
          </div>
          <div className=" my-10">
            <div className="flex">
              <PhonrIcon color={'white'}/> <h3 className='mx-2 text-xl font-semibold'>Telefon</h3>
            </div>
            <p>+988 95 143 00 13</p>
          </div>
          <div className=" my-10">
            <div className="flex">
              <EmailIcon color={'white'}/> <h3 className='mx-2 text-xl font-semibold'>Manzil</h3>
            </div>
            <p>ictacademy@gmail.com</p>
          </div>

        </div>
      <div className="col-span-12 md:col-span-5 pt-4">
      <p className='my-5  text-center text-xl md:text-xl font-semibold'>Bizning Manzil</p>
        <iframe title='Ict-Academy' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5498396505905!2d69.28872207530173!3d41.34040117130588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3db2b06783b%3A0x84660e201e025d7a!2sICT%20ACADEMY!5e0!3m2!1suz!2s!4v1686311857254!5m2!1suz!2s" width="100%" height="300px" style={{borderRadius: "30px"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </div>
  </div>
</div>
)
}