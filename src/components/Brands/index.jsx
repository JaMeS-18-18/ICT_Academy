import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Scrollbar, Pagination } from "swiper";
import './Brand.css'
import GetComments from '../../utils/GetComments';
export default function Index() {
  const [Company, setCompany] = useState([]);

  useEffect(() => {
    kompaniya()
  }, []);
  async function kompaniya() {
    // let onlylogo = []
    const result = await GetComments.Commnets()
  //   result?.map(item => {
  //    if(item.company_logo) {
  //     onlylogo.push(item)
  //   } 
  // })
  setCompany(result)
  }
  return (
    <div className='my-14'>
      <h3 className='brand_title'>Bitiriuvchilarimiz zabt etgan <br /> kompaniyalar</h3>
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {Company.length > 0 &&
            Company.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="logo_card">
                  <img className='h-24 w-25' src={item?.company_logo} alt="" />            
                  <span className="text-xl">{item?.company}</span>
                </div>
              </SwiperSlide>
            ))}
          {/* <div className="swiper-button-prev"><RightCarouselIcon /></div> */}
          {/* <div className="swiper-button-next"><LeftCarouselIcon /></div> */}
        </Swiper>
    </div>
  )
}
