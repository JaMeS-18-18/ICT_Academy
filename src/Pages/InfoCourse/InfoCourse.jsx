import React from 'react'
import './infoCourse.css'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function InfoCourse() {

  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

return (
<div className='container mx-auto px-4 place-self-auto py-16'>
  <h2 className='info_title text-3xl text-center md:text-4xl mt-5 mb-12'>Frontend React.js kursi</h2>
  <div className="grid grid-cols-12 gap-3">
    <div className="col-span-12 p-2 md:col-span-3">
      <div className="info_card  bg-bg_gray">
        <div className="round_info">
          <h3>4 oy</h3>
        </div>
        <div className="">
          <h4 className='font-semibold text-xl my-3'>Kurs davomiyligi</h4>
          <p>Kurs 4 oy davomida malakali mentorlar tomonidan olib boriladi.</p>
        </div>
      </div>
    </div>
    <div className="col-span-12 p-2 md:col-span-3">
      <div className="info_card bg-bg_gray">
        <div className="round_info">
          <h3>4 oy</h3>
        </div>
        <div className="">
          <h4 className='font-semibold text-xl my-3'>Kurs davomiyligi</h4>
          <p>Kurs 4 oy davomida malakali mentorlar tomonidan olib boriladi.</p>
        </div>
      </div>
    </div>
    <div className="col-span-12 p-2 md:col-span-3">
      <div className="info_card bg-bg_gray">
        <div className="round_info">
          <h3>4 oy</h3>
        </div>
        <div className="">
          <h4 className='font-semibold text-xl my-3'>Kurs davomiyligi</h4>
          <p>Kurs 4 oy davomida malakali mentorlar tomonidan olib boriladi.</p>
        </div>
      </div>
    </div>
    <div className="col-span-12 p-2 md:col-span-3">
      <div className="info_card bg-bg_gray">
        <div className="round_info">
          <h3>4 oy</h3>
        </div>
        <div className="">
          <h4 className='font-semibold text-xl my-3'>Kurs davomiyligi</h4>
          <p>Kurs 4 oy davomida malakali mentorlar tomonidan olib boriladi.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center">
    <button onClick={() => setOpen(true)} className='bg-primary text-white w-40 h-16 rounded-full mt-16'>Kursga yozilish</button>
  </div>
  <div className="mt-10">
    <h2 className='text-2xl md:text-4xl font-semibold my-5'>Batafsil</h2>
    <p className='md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta explicabo minus ipsum
      consequuntur fugit vel qui, recusandae impedit iure, optio earum ut similique quibusdam. Optio inventore
      asperiores tenetur repellat iste aspernatur. Architecto nisi ad ea porro accusamus similique harum veniam atque
      numquam qui nulla, maiores sequi quisquam deleniti officia autem consectetur eos dolorem? Quis a eaque itaque
      enim. Repellendus itaque, obcaecati repellat molestiae blanditiis quas deserunt vel hic debitis expedita, quae
      dolores tenetur fuga distinctio cupiditate veritatis? Distinctio sit accusantium sed ad consequatur dignissimos,
      exercitationem veniam alias earum vero, commodi, impedit nemo necessitatibus accusamus ullam obcaecati vitae
      eaque? Perspiciatis doloremque, deserunt temporibus nam mollitia, inventore labore laboriosam sunt beatae
      repudiandae amet fugiat commodi praesentium dolorem magnam voluptas? Ipsa necessitatibus delectus sapiente facilis
      molestiae, natus deserunt! Quos voluptas commodi earum delectus corporis, maiores ullam officia libero vel
      doloribus sapiente impedit, voluptatibus facilis incidunt accusamus dolor ducimus, placeat nobis mollitia quod
      nulla quis. Sit voluptate voluptatum laudantium non reiciendis, dolores in dignissimos doloribus, fuga autem
      vitae? Libero temporibus itaque consectetur quos, perspiciatis laboriosam dolores dolore dolor voluptates esse
      deserunt nemo, officiis quam at rem nobis voluptatum totam ipsum illum neque hic suscipit cupiditate reprehenderit
      quae? A saepe quis quasi. Exercitationem, voluptas.</p>
  </div>






  <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-l mx-64 flex justify-center">
              <Dialog.Title>
              <div className="Register">
              <h2 className='text-4xl my-4 text-center font-semibold'>Ro’yxatdan o’tish</h2>
              <div className="inputs">
                <label className='block'>F.I.SH *</label>
                <input className='outline-primary border-bg_gray border-2' type="text" name="text" placeholder='F.I.SH' />
              </div>
              <div className="inputs">
                <label className='block'>Telefon Raqam *</label>
                <input className='outline-primary border-bg_gray border-2' type="number" name="text" placeholder='Telefon Raqam' />
              </div>
            <div className="inputs">
              <label className='block'>Email *</label>
              <input className='outline-primary border-bg_gray border-2' type="email" name="text" placeholder='Email' />
            </div>
              <div className="flex justify-center">
                <button className='bg-primary text-white w-44 h-16 rounded-full mt-16 mx-5'>Ariza Jo'natish</button>
                <button onClick={() => setOpen(false)} className='bg-bg_gray w-44 h-16 rounded-full mt-16'>Qaytish</button>
              </div>
            </div>
              </Dialog.Title>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

</div>
)
}