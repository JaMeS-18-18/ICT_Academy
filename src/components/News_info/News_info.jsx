import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import GetArtivcle from '../../utils/GetArtivcle'
import './News_info.css'
export default function News_info() {
  const [Yangilik, setYangilik] = useState([]);
  const [OneYangilik, setOneYangilik] = useState({});
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    News(location.state)
  }, []);
 async function News(id) {
    const result = await GetArtivcle.Article()
    const result2 = await GetArtivcle.Article(id)
    setYangilik(result)
    setOneYangilik(result2)
  }
  return (
    <div className='container mx-auto px-4 place-self-auto'>
      <div className="grid grid-cols-12 my-5 md:my-16">
        <div className="col-span-4 float-start">
          <img className='info_news_img' src={OneYangilik.image} alt="" />
        </div>
        <div className="col-span-8 float-end">
         <h2 className='text-xl md:text-4xl font-semibold mx-5'>{OneYangilik.title}</h2>
        <p className='text-l mx-5 my-3'>{OneYangilik?.description?.slice(0, 1240)}</p>
        </div>
        <div className="col-span-12">
          <p>{OneYangilik.description}</p>
        </div>
      </div>
      <div className="latest_news">
        <h2 className='text-xl md:text-4xl font-semibold'>So'ngi Yangiliklar</h2>
        <div className="grid grid-cols-12">
        {
        Yangilik.length > 0 ? Yangilik.map(item => {
          return(
            <div className=" col-span-12 md:col-span-6 lg:col-span-4">
              <div className="News_card my-5 bg-bg_gray">
                <img className='' src={item.image} alt="" />
                <h5 className='text-xl md:text-2xl mt-5 mb-2 font-semibold'>{item.title.slice(0,19)}...</h5>
                <p className='text-l'>{item.description.slice(0, 250)}...</p>
                <button onClick={() => News(item.id)}  className='text-l text-white mt-5 bg-primary p-3 px-4 rounded-xl '>Batafsil</button>
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
