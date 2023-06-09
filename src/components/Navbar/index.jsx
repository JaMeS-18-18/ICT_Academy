import React from 'react'
import Logo from '../../assets/images/ICT academy-01.png'
import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='container mx-auto px-4 place-self-auto'>
      <div className="nav">
        <Link to={"/"}>
          <img className='' src={Logo} alt="" />
        </Link>
        <ul className='nav_link'>
          <Link to={'/Courses'}>
          <li className=' hover:text-primary transition ease-in-out delay-150'>Kurslar</li>
          </Link>
          <li className=' hover:text-primary transition ease-in-out delay-150'>Portfolio</li>
          <li className=' hover:text-primary transition ease-in-out delay-150'>Biz haqimizda</li>
          <li className=' hover:text-primary transition ease-in-out delay-150'>Yangiliklar</li>
          <li className='text-primary'>Ict Works</li>
        </ul>
        <button className='nav_btn bg-bg_gray '>
          Kirish
        </button>
      </div>
    </div>
  )
}
