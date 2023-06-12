import React from 'react'
import Img from '../../assets/images/RectangleLogo.png'
import Img2 from '../../assets/images/googlelogo_color_272x92dpGoogle.png'
import Img3 from '../../assets/images/Без названия (1)WK.png'
import Img4 from '../../assets/images/Без названияYandex.png'
import Img5 from '../../assets/images/logo-1549293917-751701datasite.png'
import Slider from "react-slick";
import './Brand.css'
export default function Index() {
  let settings = {
    className: 'sample',
    accessibility: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // dots: true
  }
  return (
    <div className='my-14'>
      <h3 className='brand_title'>Bitiriuvchilarimiz <br /> zabt etgan <br /> kompaniyalar</h3>
      <Slider {...settings}>
          <div className="logo_card">
              <img className='' src={Img} alt="" />            
          </div>
          <div className="logo_card">
              <img className='' src={Img2} alt="" />            
          </div>
          <div className="logo_card">
              <img className='' src={Img3} alt="" />            
          </div>
          <div className="logo_card">
              <img className='' src={Img5} alt="" />            
          </div>
          <div className="logo_card">
              <img className='' src={Img4} alt="" />            
          </div>
        </Slider>
    </div>
  )
}
