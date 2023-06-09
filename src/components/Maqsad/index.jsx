import React from 'react'
import './Maqsad.css'
import Peoples from '../../assets/images/Frame 33916.png'
export default function index() {
return (
<div>
  <div className="">
    <div className="grid grid-cols-12">
      <div className="col-span-6 pe-8">
        <div className="maqsadimiz bg-active-color relative">
          <div className="section_dotss dots_11"></div>
          <div className="section_dotss dots_22"></div>
          <div className="section_dotss dots_33"></div>
          <div className="section_dotss dots_44"></div>
          <div className="maqsad_card">
            <h5 className='text-xl text-active-color'>Bizning maqsadimiz</h5>
          </div>
          <p className='info_maqsad my-5'>Bizning maqsadimiz yurtimiz yoshlarini zamonaviy kasblar mutaxassisi bo’lishiga
            yordam berish va yurtimizda IT soxasini <br /> rivojiga hissa qo’shish</p>
          <h2 className='text-7xl my-9 font-semibold'>20+</h2>
          <p>yirik kompaniyalarda bizning bitiruvchilar mavjud</p>
        </div>
      </div>
      <div className="col-span-6">
        <div className="maqsad_right flex justify-center items-center">
          <img src={Peoples} alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
)
}