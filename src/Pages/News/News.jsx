import React from 'react'
import ImgNew from'../../assets/images/Rectangle 5.png'
import './News.css'
import { Link } from 'react-router-dom'
export default function News() {
return (
<div className='container mx-auto px-4 place-self-auto'>
  <div className="News">
    <h2 className='text-xl md:text-4xl font-semibold my-4 md:my-10'>Yangiliklar</h2>
    <div className="grid grid-cols-12">
      <div className=" col-span-12 md:col-span-6 lg:col-span-4">
        <div className="News_card my-5 bg-bg_gray">
          <img className='' src={ImgNew} alt="" />
          <h5 className='text-xl md:text-2xl mt-5 mb-2 font-semibold'>Yangilik</h5>
          <p className='text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae eligendi maxime pariatur quis quas ab esse nemo vel veritatis ex, ullam sint autem, dolorem officiis iure commodi itaque obcaecati quibusdam repellendus dignissimos inventore? Accusantium reiciendis odio nemo commodi, laudantium nam enim incidunt placeat? Odit maiores quae laudantium nam sequi!</p>
          <Link to={'/News_info'}>
          <button className='text-l text-white mt-5 bg-primary p-3 px-4 rounded-xl '>Batafsil</button>
          </Link>
        </div>
      </div>
      <div className=" col-span-12 md:col-span-6 lg:col-span-4">
        <div className="News_card my-5 bg-bg_gray">
          <img className='' src={ImgNew} alt="" />
          <h5 className='text-xl md:text-2xl mt-5 mb-2 font-semibold'>Yangilik</h5>
          <p className='text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae eligendi maxime pariatur quis quas ab esse nemo vel veritatis ex, ullam sint autem, dolorem officiis iure commodi itaque obcaecati quibusdam repellendus dignissimos inventore? Accusantium reiciendis odio nemo commodi, laudantium nam enim incidunt placeat? Odit maiores quae laudantium nam sequi!</p>
          <Link to={'/News_info'}>
          <button className='text-l text-white mt-5 bg-primary p-3 px-4 rounded-xl '>Batafsil</button>
          </Link>
        </div>
      </div>
      <div className=" col-span-12 md:col-span-6 lg:col-span-4">
        <div className="News_card my-5 bg-bg_gray">
          <img className='' src={ImgNew} alt="" />
          <h5 className='text-xl md:text-2xl mt-5 mb-2 font-semibold'>Yangilik</h5>
          <p className='text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae eligendi maxime pariatur quis quas ab esse nemo vel veritatis ex, ullam sint autem, dolorem officiis iure commodi itaque obcaecati quibusdam repellendus dignissimos inventore? Accusantium reiciendis odio nemo commodi, laudantium nam enim incidunt placeat? Odit maiores quae laudantium nam sequi!</p>
          <Link to={'/News_info'}>
          <button className='text-l text-white mt-5 bg-primary p-3 px-4 rounded-xl '>Batafsil</button>
          </Link>
        </div>
      </div>
      <div className=" col-span-12 md:col-span-6 lg:col-span-4">
        <div className="News_card my-5 bg-bg_gray">
          <img className='' src={ImgNew} alt="" />
          <h5 className='text-xl md:text-2xl mt-5 mb-2 font-semibold'>Yangilik</h5>
          <p className='text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae eligendi maxime pariatur quis quas ab esse nemo vel veritatis ex, ullam sint autem, dolorem officiis iure commodi itaque obcaecati quibusdam repellendus dignissimos inventore? Accusantium reiciendis odio nemo commodi, laudantium nam enim incidunt placeat? Odit maiores quae laudantium nam sequi!</p>
          <Link to={'/News_info'}>
          <button className='text-l text-white mt-5 bg-primary p-3 px-4 rounded-xl '>Batafsil</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
)
}