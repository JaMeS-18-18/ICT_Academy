import React, { useEffect, useState } from 'react'
import Mentor from '../../components/Mentor'
import GetAbout from '../../utils/GetAbout'
import Logo from '../../assets/images/ICT academy-01s.png'
import { EmailIcon, LocationIcon, PhonrIcon } from '../../assets/icons'
import './About.css'
import PostCourse from '../../utils/PostCourse'
import PostMessage from '../../utils/PostMessage'
export default function About() {
  const [Biz, setBiz] = useState({});
  const [Name, SetName] = useState('')
  const [Phone, SetPhone] = useState('')
  const [Message, SetMessage] = useState('')
  const [Status, setStatus] = useState(false)
  const [Status2, setStatus2] = useState(false)
  useEffect(() => {
    AboutUS()
  }, []);
 async function AboutUS() {
    const result = await GetAbout.About()
    setBiz(result[0])
  }

  const SendMessage = async() => {
    let message = {
      full_name: Name,
      phone: Phone,
      body: Message,
    }
    const result = await PostMessage.Message(message)
    SetName('')
    SetPhone('')
    SetMessage('')
    console.log(result);
    if(result == 201) {
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
    <div className='container mx-auto px-4 place-self-auto'>
      <div className="grid grid-cols-12 my-24">
        <div className="col-span-12 md:col-span-6 text-center px-5">
          <img className='biz-image' src={Biz.image} alt="" />
          <h4 className='text-2xl mt-6 font-semibold'>{Biz.director}</h4>
          <p className='text-xl'>{Biz.director_pos}</p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <h2 className='text-2xl md:text-4xl font-semibold mt-10 mb-3 md:my-3'>{Biz.title}</h2>
          <p className='md:text-xl'>{Biz.body}</p>
        </div>
      </div>
      <Mentor/>

      <h2 className='text-2xl md:text-4xl font-semibold mt-28 mb-5'>Faoliyatimiz</h2>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <p className='md:text-xl mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed asperiores doloremque quo ipsum maxime dignissimos aspernatur possimus, doloribus rerum non, cum quasi dolor eos impedit! Voluptatum, placeat minus. Ipsa voluptas dicta provident magnam incidunt accusamus dolores nobis ex, eveniet voluptatibus saepe, voluptatum, natus veritatis excepturi tempore consequuntur vel architecto ut consectetur voluptates quod ipsum ad fugit? A corrupti quaerat nulla modi praesentium adipisci magni odio blanditiis illo quasi similique explicabo cupiditate, commodi eos maxime eaque pariatur.</p>
        </div>
        <div className="col-span-12 md:col-span-6 flex items-center justify-center">
          <img className='w-50 h-50' src={Logo} alt="" />
        </div>
      </div>

      <h2 className='text-4xl font-semibold mb-5 mt-20'>Biz bilan aloqa</h2>
      <div className="contact bg-bg_gray">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
        <div className="">
              <h2 className='text-4xl my-4 text-center font-semibold'></h2>
              <div className="inputs">
                <label className='block'>F.I.SH *</label>
                <input autoComplete='off' onInput={(e) => SetName(e.target.value)} className='outline-primary border-bg_gray border-2' type="text" name="text" placeholder='F.I.SH' accept='false' />
              </div>
              <div className="inputs">
                <label className='block'>Telefon Raqam *</label>
                <input autoComplete='off' onInput={(e) => SetPhone(e.target.value)}  className='outline-primary border-bg_gray border-2' type="number" name="text" placeholder='Telefon Raqam' />
              </div>
            <div className="inputs">
              <label className='block'>Sizning habaringiz *</label>
              <textarea autoComplete='off' onInput={(e) => SetMessage(e.target.value)}  className='outline-primary border-bg_gray border-2 rounded-xl' type="email" name="text" placeholder='yozing...' cols={47} rows={4} />
            </div>
              <div className="flex justify-center">
                <button onClick={SendMessage} className='bg-primary text-white w-44 h-16 rounded-full mx-5'>Ariza Jo'natish</button>
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  </>
  )
}
