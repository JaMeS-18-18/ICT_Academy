import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Courses from '../../utils/GetApi'
import { ArrowIcon} from '../../assets/images/Index'
import AnimateImg from '../../assets/images/Sphere-Green-Glossy.png'
import AnimateImgBody from '../../assets/images/Vector 4.png'
import './ListKurslar.css'

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
        <h3 className='mt-10 md:mt-20 mb-10 text-2xl md:text-4xl font-semibold'>Kurslarimiz ro'yxati</h3>
        <div className="kurs_btn_card grid grid-cols-12  md:flex justify-between items-center">
          {
            Kategoriyalar.length > 0 && Kategoriyalar.map(item => {
              return (
                <>
                <button onClick={() => {Category(item.id)}} className={item.id == ActiveCourse ? 'kurs_btn col-span-6 md:col-span-3 border-primary border-2 active:bg-primary  bg-primary text-white' : 'kurs_btn col-span-6 md:col-span-3 border-primary border-2 hover:bg-primary  '}>{item.category}</button>
                </>
              )
            })
          }
        {/* <button className='kurs_btn col-span-6 md:col-span-3 border-primary border-2 active:bg-primary my-5 mx-2 md:m-0 bg-primary-light text-primary active:text-black'>Foundation</button>
        <button className='kurs_btn col-span-6 md:col-span-3 border-primary border-2 active:bg-primary  bg-primary-light text-primary active:text-black'>Mutaxassislik</button>
        <button className='kurs_btn col-span-6 md:col-span-3 border-primary border-2 active:bg-primary my-5 mx-2 md:m-0 bg-primary-light text-primary active:text-black'>English IT</button> */}
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-3">
        {
          Kurslar.length > 0 && Kurslar.map(item => {
            return (
              <div className="col-span-12 px-3 md:p-0 md:col-span-4 my-7">
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
