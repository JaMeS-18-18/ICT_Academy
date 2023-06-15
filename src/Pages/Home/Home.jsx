import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import Courses from '../../utils/GetApi'
import Banner from '../../components/Banner'
import Mentor from '../../components/Mentor'
import InfoSection from '../../components/Info_section'
import Comments from '../../components/Comments'
import { ArrowIcon } from '../../assets/images/Index'
import AnimateImg from '../../assets/images/Sphere-Green-Glossy.png'
import AnimateImgBody from '../../assets/images/Vector 4.png'
import './Home.css'

export default function Home() {
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
<m.div>
  <header className='container mx-auto px-4 place-self-auto my-10'>
    <div className="header bg-bg_black">
      <div className="">
        <p className='text-bg_gray mb-5 text-xs'>Biz bilan zamonaviy kasblarni o’rganing, tajriba oshiring, mutaxassis
          bo’ling va karierangizni boshlang!</p>
        <h2 className='head_title'>ICT IT-academy bilan zamonaviy kasblar mutaxassisi bo’ling</h2>
        <div className="grid md:flex justify-center items-center my-10">
          <Link to={'/Courses'}>
          <button className='flex kurslar_btn my-2 bg-primary p-4 mx-4 rounded-full'>
            <p className='mx-2'>Bizning Kurslar</p>
          </button>
          </Link>
        </div>
      </div>
    </div>
  </header>
  <section className='container mx-auto px-4 place-self-auto my-20'>
    <div className="">
      <h3 className='yonalish_txt '> IT soxasidagi 4 xil yo’nalishda 17 xil <br /> kurslarimiz mavjud </h3>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-5">
          {
          Kategoriyalar.length > 0 && Kategoriyalar.map(item => {
          return (
          <>
            <p onClick={() => (Category(item.id))} className={ActiveCourse == item.id ? "my-3 text-xl hover:text-primary cursor-pointer ms-4 transition-all text-primary" : "my-3 text-xl hover:text-primary cursor-pointer hover:ms-4 transition-all"}>{item.category}</p>
          </>
          )
          })
          }
        </div>
        <div className="col-span-12 md:col-span-7 flex">
          <div className="grid grid-cols-12">
            {
            Kurslar.length > 0 && Kurslar.map(item => {
            return(
            <>
              <div className="col-span-12 md:col-span-6">
                <Link to={`/InfoCourse/${item.id}`}> <div className="kurs_card my-4 mx-3 md:mx-8 cursor-pointer hover:bg-primary">
                <h4 className='text-3xl font-semibold'>{item.name}</h4>
                <p className='mt-3 mb-10'>{item.subtitle}</p>
                <div className="cursor-pointer">
                  <ArrowIcon />
                </div>
                <div className="flex relative">
                  <img src={AnimateImgBody} alt="" />
                  <img className='absolute top-5 right-0 img-round' src={AnimateImg} alt="" />
                </div>
              </div>
              </Link>
              </div>
          </>
          )
          })
          }
        </div>
      </div>
    </div>
    </div>
  </section>
  <Banner />
  <InfoSection />
  <Mentor />
  <Comments />
</m.div>
)
}