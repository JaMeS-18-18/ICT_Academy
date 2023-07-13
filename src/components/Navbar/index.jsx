import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/ICT academy-01.png'
import Phone from '../../assets/images/phone.png'
import './navbar.css'
export default function Navbar() {
  const [Active, setActive] = useState(localStorage.getItem("count") || 0);
  const NavBar = (count) => {
    setActive(count)
    localStorage.setItem("count", count)
  }
  return (
    <div className='container px-4 mx-auto place-self-auto'>
      <nav class="dark:bg-gray-900   border-gray-200 dark:border-gray-600 fixed bg-border-color top-0 left-0 w-full " style={{ zIndex: 9999 }}>
        <div class=" md:container flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <img src={Logo} style={{ objectFit: "contain" }} class="w-[70px] lg:h-auto lg:w-auto  mr-3" alt="ICt Logo" />
          </a>
          <div class="flex md:order-2">
            <div className="mt-2 md:mt-0">
              <a href="tel:+998951430013"><img className='phone_logo' src={Phone} alt="" /></a>
            </div>
            <button type="button" className="text-primary font-bold mx-3"><a href="tel:+998951430013">+998 95 143 00 13</a></button>
            <button data-collapse-toggle="navbar-sticky" type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul
              class="nav_ul flex w-full justify-between flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 transition-all md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <div >
                <NavLink to={'/'}> <li className={'hover:text-primary my-1 transition ease-in-out delay-150'}>Asosiy</li>
                </NavLink>
              </div>
              <div >
                <NavLink to={'/Courses'}> <li className={'hover:text-primary my-1 transition ease-in-out delay-150'}>Kurslar</li>
                </NavLink>
              </div>
              <div >
                <NavLink to={'/Portfolio'}> <li className={'hover:text-primary my-1 transition ease-in-out delay-150'}>Portfolio
                </li>
                </NavLink>
              </div>
              <div >
                <NavLink to={'/About'}> <li className={'hover:text-primary my-1 transition ease-in-out delay-150'}>Biz haqimizda
                </li>
                </NavLink>
              </div>
              <div >
                <NavLink to={'/News'}> <li className={'hover:text-primary my-1 transition ease-in-out delay-150'}>Yangiliklar</li>
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}