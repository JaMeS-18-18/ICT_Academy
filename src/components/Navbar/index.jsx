import React from 'react'
import Logo from '../../assets/images/ICT academy-01.png'
import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='container mx-auto px-4 place-self-auto'>
      {/* <div className="nav ">
        <Link to={"/"}>
          <img className='' src={Logo} alt="" />
        </Link>
        <ul className='nav_link'>
          <Link to={'/Courses'}>
          <li className=' hover:text-primary my-1 transition ease-in-out delay-150'>Kurslar</li>
          </Link>
          <Link to={'/Portfolio'}>
          <li className=' hover:text-primary my-1 transition ease-in-out delay-150'>Portfolio</li>
          </Link>
          <Link to={'/About'}>
          <li className=' hover:text-primary my-1 transition ease-in-out delay-150'>Biz haqimizda</li>
          </Link>
          <li className=' hover:text-primary my-1 transition ease-in-out delay-150'>Yangiliklar</li>
          <li className='text-primary'>Ict Works</li>
        </ul>
        <button className='nav_btn bg-bg_gray'>
          Kirish
        </button>
      </div> */}
      


      <nav class="bg-transparent dark:bg-gray-900  w-full z-20 top-0 left-0  border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center">
      <img src={Logo} class="h-8 mr-3" alt="Flowbite Logo"/>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="nav_btn bg-bg_gray mx-3">Kirish</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 transition-all md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <Link to={'/Courses'}>
          <li className=' hover:text-primary my-1 transition ease-in-out delay-150'>Kurslar</li>
          </Link>
          <Link to={'/Portfolio'}>
          <li className=' hover:text-primary my-1 transition ease-in-out delay-150'>Portfolio</li>
          </Link>
          <Link to={'/About'}>
          <li className=' hover:text-primary my-1 transition ease-in-out delay-150'>Biz haqimizda</li>
          </Link>
         <Link to={'/News'}>
         <li className=' hover:text-primary my-1 transition ease-in-out delay-150'>Yangiliklar</li>
         </Link>
          <li className='text-primary'>Ict Works</li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}
