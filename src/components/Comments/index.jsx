import React, { useEffect, useState } from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Scrollbar, Pagination } from "swiper";
import GetComments from '../../utils/GetComments'
import {LeftCarouselIconBlack, RightCarouselIconBlack } from '../../assets/images/Index'
import './comments.css'
export default function Index() {
  const [FeedBacks, setFeedBacks] = useState([]);

  useEffect(() => {
    FeedBack()
  }, []);
  async function FeedBack() {
    const AllComment = await GetComments.Commnets()
    setFeedBacks(AllComment)
  }

  return (
    <div className='container mx-auto px-4 place-self-auto'>
      <div className="comments">
        <h3 className='text-2xl md:text-4xl text-center md:text-start'>Bitiruvchilarimizning <br /> muvaffaqiyatli  hikoyalari</h3>
        <div className="flex px-14 md:px-0">

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
            {FeedBacks.length > 0 &&
              FeedBacks.map((item) => (
                <SwiperSlide key={item.id}>
                 <div style={{height: "450px"}}>
                  <div className="comment_card">
                      <p>{item.feedback.slice(0,200)}...</p>
                      <div className='flex float-bottom  items-center'>
                        <img className='w-10 h-10 rounded-full' src={item.image} alt="" />
                        <div className='mx-5'>
                          <h6>{item.full_name}</h6>
                          <p className='text-primary'>{item.profession}</p>
                        </div>
                      </div>
                    </div>
                 </div>
                </SwiperSlide>
              ))}
            <div className="swiper-button-prev"><LeftCarouselIconBlack /></div>
            <div className="swiper-button-next"><RightCarouselIconBlack /></div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
