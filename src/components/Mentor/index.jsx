import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Scrollbar, Pagination } from "swiper";
import GetMentors from "../../utils/GetMentors";
import { GitHubIcon, TelegramIcon, LinkedinWhiteIcon, LeftCarouselIcon, RightCarouselIcon } from "../../assets/images/Index";
import 'swiper/css';
import './mentor.css'
export default function SliderExample() {
  const [Teachers, setTeachers] = useState([]);

  useEffect(() => {
    Mentor()
  }, []);
  async function Mentor() {
    const AllTeacher = await GetMentors.Mentors()
    setTeachers(AllTeacher)
  }


  return (
    <div className="container mx-auto px-4 place-self-auto">
      <div className="section_mentor bg-bg_black place-content-between">
        <div className="section_dots dots_1"></div>
        <div className="section_dots dots_2"></div>
        <div className="section_dots dots_3"></div>
        <div className="section_dots dots_4"></div>
        <h2 className="section_mentor_txt">Bizning malakali <br /> mentorlarimiz</h2>
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
          {Teachers.length > 0 &&
            Teachers.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="carusel">
                  <div style={{backgroundImage: `url(${item.image})`}}  className="card_carusel">
                {/* */}
                    <div className="flex card-border">
                    <a className={item.github ? "me-5" : "d-none"} href={item.github}>
                      <GitHubIcon />
                      </a>
                     <a className={item.linkedin ? "me-5" : "d-none"} href={item.linkedin}>
                      <LinkedinWhiteIcon />
                     </a>
                     <a className={item.telegram ? "me-5" : "d-none"} href={item.telegram}>
                       <TelegramIcon />
                     </a>
                    </div>
                    <div>
                      <h3 className="mentor_name">{item.name}</h3>
                      <p className="mentor_Stack">{item.profession}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          <div className="swiper-button-prev"><RightCarouselIcon /></div>
          <div className="swiper-button-next"><LeftCarouselIcon /></div>
        </Swiper>
      </div>
    </div>
  )
}