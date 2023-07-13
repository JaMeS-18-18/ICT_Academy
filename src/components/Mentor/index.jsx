import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Scrollbar, Pagination } from "swiper";
import GetMentors from "../../utils/GetMentors";
import { GitHubIcon, TelegramIcon, LinkedinWhiteIcon, LeftCarouselIcon, RightCarouselIcon, InstagramIcon,  } from "../../assets/images/Index";
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
    <div className="container mx-auto md:px-4 place-self-auto">
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
                    <div className="flex card-border justify-around">
                    <a className={item.github ? "" : "hidden"} href={item.github}>
                      <GitHubIcon />
                      </a>
                     <a className={item.linkedin  ? "" : "hidden "} href={item.linkedin  }>
                        <img style={{borderRadius: 50, width: 40}} src="data:image/png;base64,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"/>
                     </a>
                     <a className={item.telegram ? "" : "hidden"} href={item.telegram}>
                       <TelegramIcon />
                     </a>
                     <a className={item.instagram ? "bg-primary rounded-full p-2" : "hidden"} href={item.instagram}>
                     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5klEQVR4nK2WyTIEQRCGW5gbhgjLyfYmlhcQhoewnIVww+BpbMERR8vB9giWccaY2wSfyPHXKKKr9bT+I+ZQ01n/X5mVWZlR5AFoA2aBXeAJqJMede3ZAWaMy+f2RYaAC/LDuXHGidhpDHfAnP5rjz1VDMwWGAbmgXtxPTXFFC7nyRFQjP4JoBs4FudZI4y6E+fJv0SALaAGbErMeTYT6eINczl48iauqtYLWu/YoqLFcALBAFAGbnTiGnANrAP9nt2mxDa0HhV3JfJSuBAQsdBWE7LrFSgF9hZkU7dFAwkiHzLZA8aADv3GgX19ewemAxxf/CEhhct5spQQ1mXZvAB9WYTKzpOQiANwINu1LEK3+jT2+1uM7YRsr7MIuVTtTCHU5ad1q0LVFoSKLgOzCFnNGMZTCE3K9iqLkBWjYT+F0KFsV7MI9asYDcsJIiuyeQZ6WxaSUUnFiFLYsqtTv0nPE7OZCnA0hf56gqZVjCE8J4j8eILSPKp9Vox22Ur7KnBpdxIXLm+fe1Qf/TYxH+UMYNFvEzZIoCZVzFGkB3gQd8m1chskUPvNq5WfiPO0ORH9Gk7u1RlHQgkSILeLtzuxcDlPvocTz9DEbJDIC+bJYOhUFkarHRsCLRtbHSBtz7Y4fgyQn5G0AInoCrHkAAAAAElFTkSuQmCC"/>
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