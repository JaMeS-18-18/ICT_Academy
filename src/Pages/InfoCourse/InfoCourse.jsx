import React, { useEffect } from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useParams } from 'react-router-dom'
import PostCourse from '../../utils/PostCourse'
import Courses from '../../utils/GetApi'
import { DoneIcon } from '../../assets/icons'
import './infoCourse.css'

export default function InfoCourse() {
  const [open, setOpen] = useState(false)
  const [Status, setStatus] = useState(false)
  const [Status2, setStatus2] = useState(false)
  const [Name, SetName] = useState('')
  const [Phone, SetPhone] = useState('')
  const [Kurs, setKurs] = useState({});
  const cancelButtonRef = useRef(null)
  const {id} = useParams()

  useEffect(() => {
    Category()
  }, []);
    async function Category() {
      const result = await Courses.OneCourse(id)
      setKurs(result) 
    }


    const  SendMessage = async() => {
      let message = {
        full_name: Name,
        phone: Phone,
        courseid: id
      }
      const result = await PostCourse.Course(message)
      SetName('')
      SetPhone('')
      if(result == 201) {
        setOpen(false)
        setStatus2(true) 
        setTimeout(() => {
        setStatus2(false)
      }, 1000); 
    }
      if(result == 400){
        setStatus(true)
        setTimeout(() => {
          setStatus(false)
        }, 2000); 
      }  
    }


return (
<>
{
  Status && <div id="alert-border-2" style={{zIndex:999999, left: "10px", top: "10px"}} className="flex fixed p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
  <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div className="ml-3 text-sm font-medium">
    Iltimos hamma maydonlarni to'gri to'ldiring
  </div>
  <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-2" aria-label="Close">
    <span className="sr-only">Dismiss</span>
    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
}
{
 Status2 && <div id="alert-border-3"style={{zIndex:999999, left: "10px", top: "10px"}} className="flex  fixed left-80 p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
  <div class="ml-3 text-sm font-medium">
    Arizangiz Muvofaqqiyatli Jo'natildi
  </div>
  <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-3" aria-label="Close">
    <span class="sr-only">Dismiss</span>
    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
}
   <div className='container mx-auto px-4 place-self-auto py-16'>
  <h2 className='info_title text-3xl text-center md:text-4xl mt-5 mb-12'>{Kurs.name }</h2>
  <div className="grid grid-cols-12 gap-3">
    <div className="col-span-12 p-2 md:col-span-6 lg:col-span-3">
      <div className="info_card  bg-bg_gray">
        <div className="round_info">
          <h3>{Kurs.course_length} oy</h3>
        </div>
        <div className="">
          <h4 className='font-semibold text-xl my-3'>Kurs davomiyligi</h4>
          <p>{Kurs.course_length_desc}</p>
        </div>
      </div>
    </div>
    <div className="col-span-12 p-2 md:col-span-6 lg:col-span-3">
      <div className="info_card bg-bg_gray">
        <div className="round_info">
          <h3>{Kurs.modules}</h3>
        </div>
        <div className="">
          <h4 className='font-semibold text-xl my-3'>Modullar soni</h4>
          <p>{Kurs.modules_desc}</p>
        </div>
      </div>
    </div>
    <div className="col-span-12 p-2 md:col-span-6 lg:col-span-3">
      <div className="info_card bg-bg_gray">
        <div className="round_info">
          <h3>{Kurs.lessons}</h3>
        </div>
        <div className="">
          <h4 className='font-semibold text-xl my-3'>Darslar soni</h4>
          <p>{Kurs.lessons_desc}</p>
        </div>
      </div>
    </div>
    <div className="col-span-12 p-2 md:col-span-6 lg:col-span-3">
      <div className="info_card bg-bg_gray">
        <div className="round_info">
          <h3><DoneIcon/></h3>
        </div>
        <div className="">
          <h4 className='font-semibold text-xl my-3'>Portfolio + resume</h4>
          <p>Kurs oxirigacha sizga ishga joylashishingiz uchun portfolio va resume  tayyorlashga yordam beriladi</p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center">
    <button onClick={() => setOpen(true)} className='bg-primary text-white w-40 h-16 rounded-full mt-16'>Kursga yozilish</button>
  </div>
  <div className="mt-10">
    <h2 className='text-2xl md:text-4xl font-semibold my-5'>Batafsil</h2>
    <p className='md:text-xl'>{Kurs?.description}</p>
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
              <h2 className='text-4xl my-4 text-center font-semibold'>Kursga yozilish</h2>
              <div className="inputs">
                <label className='block'>F.I.SH *</label>
                <input onInput={(e) => SetName(e.target.value)} className='outline-primary border-bg_gray border-2' type="text" name="text" placeholder='F.I.SH' />
              </div>
              <div className="inputs">
                <label className='block'>Telefon Raqam *</label>
                <input onInput={(e) => SetPhone(e.target.value)}  className='outline-primary border-bg_gray border-2' type="number" name="text" placeholder='Telefon Raqam' />
              </div>
            {/* <div className="inputs">
              <label className='block'>Email *</label>
              <input onInput={(e) => SetEmail(e.target.value)}  className='outline-primary border-bg_gray border-2' type="email" name="text" placeholder='Email' />
            </div> */}
              <div className="flex justify-center">
                <button onClick={SendMessage} className='bg-primary text-white w-44 h-16 rounded-full mt-16 mx-5'>Ariza Jo'natish</button>
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
</>
)
}