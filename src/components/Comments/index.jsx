import React from 'react'
import './comments.css'
import Img from '../../assets/images/man_PNG6533.png'
import Slider from "react-slick";

export default function index() {
  let settings = {
    className: 'sample',
    accessibility: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }

  return (
    <div className='container mx-auto px-4 place-self-auto'>
      <div className="comments">
        <h3 className='text-2xl md:text-4xl text-center md:text-start'>Bitiruvchilarimizning <br /> muvaffaqiyatli  hikoyalari</h3>
        <div className="flex px-14 md:px-0">
        <Slider {...settings}>
          <div className="comment_card">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iusto id praesentium atque veniam est, ab suscipit? Velit accusamus, exercitationem nulla fugit modi beatae eaque.</p>
            <div className='flex mt-20 items-center'>
              <img className='w-10 h-10 rounded-full' src={Img} alt="" />            
              <div className='mx-5'>
                <h6>Jamil Malikov</h6>
                <p className='text-primary'>FrontEnd</p>
              </div>
            </div>
          </div>
          <div className="comment_card">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iusto id praesentium atque veniam est, ab suscipit? Velit accusamus, exercitationem nulla fugit modi beatae eaque.</p>
            <div className='flex mt-20 items-center'>
              <img className='w-10 h-10 rounded-full' src={Img} alt="" />            
              <div className='mx-5'>
                <h6>Jamil Malikov</h6>
                <p className='text-primary'>FrontEnd</p>
              </div>
            </div>
          </div>
          <div className="comment_card">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iusto id praesentium atque veniam est, ab suscipit? Velit accusamus, exercitationem nulla fugit modi beatae eaque.</p>
            <div className='flex mt-20 items-center'>
              <img className='w-10 h-10 rounded-full' src={Img} alt="" />            
              <div className='mx-5'>
                <h6>Jamil Malikov</h6>
                <p className='text-primary'>FrontEnd</p>
              </div>
            </div>
          </div>
          <div className="comment_card">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iusto id praesentium atque veniam est, ab suscipit? Velit accusamus, exercitationem nulla fugit modi beatae eaque.</p>
            <div className='flex mt-20 items-center'>
              <img className='w-10 h-10 rounded-full' src={Img} alt="" />            
              <div className='mx-5'>
                <h6>Jamil Malikov</h6>
                <p className='text-primary'>FrontEnd</p>
              </div>
            </div>
          </div>
          <div className="comment_card">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iusto id praesentium atque veniam est, ab suscipit? Velit accusamus, exercitationem nulla fugit modi beatae eaque.</p>
            <div className='flex mt-20 items-center'>
              <img className='w-10 h-10 rounded-full' src={Img} alt="" />            
              <div className='mx-5'>
                <h6>Jamil Malikov</h6>
                <p className='text-primary'>FrontEnd</p>
              </div>
            </div>
          </div>
          <div className="comment_card">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iusto id praesentium atque veniam est, ab suscipit? Velit accusamus, exercitationem nulla fugit modi beatae eaque.</p>
            <div className='flex mt-20 items-center'>
              <img className='w-10 h-10 rounded-full' src={Img} alt="" />            
              <div className='mx-5'>
                <h6>Jamil Malikov</h6>
                <p className='text-primary'>FrontEnd</p>
              </div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    </div>
  )
}
