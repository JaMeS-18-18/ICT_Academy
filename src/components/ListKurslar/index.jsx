import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Courses from '../../utils/GetApi'
import { ArrowIcon, LeftCarouselIcon, RightCarouselIcon} from '../../assets/images/Index'
import AnimateImg from '../../assets/images/Sphere-Green-Glossy.png'
import AnimateImgBody from '../../assets/images/Vector 4.png'
import './ListKurslar.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { A11y, Navigation, Scrollbar, Pagination } from "swiper";


export default function Index() {
  const [Kategoriyalar, setKategoriyalar] = useState([]);
  const [Kurslar, setKurslar] = useState([]);
  const [ActiveCourse, setActiveCourse] = useState(1);
  
  useEffect(() => {
    Category(1)
  }, []);
    async function Category(id) {
      const CourseCategory = await Courses.CourseCategory()
      setKategoriyalar(CourseCategory)
      const Course = await Courses.CourseCategoryChild(id)
      setKurslar(Course)
      setActiveCourse(id)
    }
  return (
    <div>
      <div className="">
        {/* <h3 className='mt-10 md:mt-20 mb-10 text-2xl md:text-4xl font-semibold'>Kurslarimiz ro'yxati</h3> */}
        <div className="my-5 h-28">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev2',
            nextEl: '.swiper-button-next2',
          }}
          autoplay={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
          }}
          style={{height: "100%"}}
        >
          {
            Kategoriyalar.length > 0 && Kategoriyalar.map((item,index) => {
              return (
                <>
                <SwiperSlide key={index}>
                <button onClick={() => {Category(item.id)}} className={item.id == ActiveCourse ? 'kurs_btn  border-primary border-2 active:bg-primary me-2 bg-primary my-2 text-white' : 'kurs_btn  border-primary border-2 hover:bg-primary my-2 '}>{item.category}</button>
                </SwiperSlide>
                </>
              )
            })
          }
          <div className="swiper-button-prev2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVR4nO3UvWoCQRSG4cc/tBfSiEVARIRYLGksvA2b3IR1bBUVEbQI3q4srGCxo5JZt3Hfct7imzNnzqGi4gkSTAKuhR+RfGGHWo5rYI/PmIAhNqjnuPTsgFFMwABHNHNcWtUK45iAfnbLUMA669O/6eEP7YBf4jsm4AMndAL+FzORnNENuCkWCuBRJcsiKimlJ6X9rtLm5Hbit6+c+NJ215XkztOkW3gecBXvyAWabBOXDqOb2wAAAABJRU5ErkJggg=="/></div>
          <div className="swiper-button-next2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVR4nO3UOwrCQBSF4c/nBqxsIoKICIraiBuxcRPuQAtFRHyAhduVQAqRJAiZNJK/nFP8c5g7l4qKD9ZoSWeMhQBEuKGZktVwxDyEaIAHGhmiQ9KqMEOcUE/J4rMrRiFEE5yT238Tt7ygH0I0wy4jiwfkiV4I0TJH1MYd3RCiLVYZWQevEE32OU0eRZuU/iaTsqdrWPY/GZT946MfdtdCQTY5W3gaagtX/DlvYj0TlCevqpgAAAAASUVORK5CYII="/></div>
        </Swiper>
        {/* <button className='kurs_btn col-span-6 md:col-span-3 border-primary border-2 active:bg-primary my-5 mx-2 md:m-0 bg-primary-light text-primary active:text-black'>Foundation</button>
        <button className='kurs_btn col-span-6 md:col-span-3 border-primary border-2 active:bg-primary  bg-primary-light text-primary active:text-black'>Mutaxassislik</button>
        <button className='kurs_btn col-span-6 md:col-span-3 border-primary border-2 active:bg-primary my-5 mx-2 md:m-0 bg-primary-light text-primary active:text-black'>English IT</button> */}
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-3">
        {
          Kurslar.length > 0 && Kurslar.map(item => {
            return (
              <div className="col-span-12 px-5 md:p-0 md:col-span-6 lg:col-span-4 mt-2 mb-7">
                <Link to={`/InfoCourse/${item.id}`}>
                <div className="kurs_card cursor-pointer hover:bg-primary">
                  <h4 className='text-3xl font-semibold'>{item.name}</h4>
                  <p className='mt-3 mb-10'>{item.subtitle}</p>
                  <div className="cursor-pointer">
                  <ArrowIcon/>
                  </div>
                  <div className="flex relative">
                    <img src={AnimateImgBody} alt="" />
                    <img className='absolute top-5 right-0 img-round' src={AnimateImg} alt="" />
                  </div>
                </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
