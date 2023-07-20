import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GetArtivcle from '../../utils/GetArtivcle';
import './News.css'
export default function News() {
  const [Yangilik, setYangilik] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    Newss()
  }, []);
 async function Newss() {
    const result = await GetArtivcle.Article()
    setYangilik(result)
  }

  function GoInfo(id) {
    navigate('/News_info', {state: id})
  }
return (
<div className='container mx-auto px-4 place-self-auto py-2'>
  <div className="News">
    <h2 className='text-xl md:text-4xl font-semibold my-4 md:my-10'>Yangiliklar</h2>
    <div className="grid grid-cols-12">
      {
        Yangilik.length > 0 ? Yangilik.map(item => {
          return(
            <div className=" col-span-12 md:col-span-6 lg:col-span-4">
              <div className="News_card my-5 bg-bg_gray">
                <img className='' src={item.image} alt="" />
                <h5 className='text-xl md:text-2xl mt-5 mb-2 font-semibold'>{item.title.slice(0,19)}...</h5>
                <p className='text-l'>{item.description.slice(0, 250)}...</p>
                <button onClick={() => GoInfo(item.id)} className='text-l text-white mt-5 bg-primary p-3 px-4 rounded-xl '>Batafsil</button>
              </div>
            </div>
          )
        }) : ""
      }
    </div>
  </div>
</div>
)
}