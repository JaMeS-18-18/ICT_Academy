import React, { useEffect, useState } from 'react'
import PlayStore from '../../assets/images/Google Play.png'
import AppStore from '../../assets/images/App Store.png'
import Projects from '../../utils/Projects';
import Logo from '../../assets/images/ICT academy-01s.png'
import { Link } from 'react-router-dom';
import './Portfolio.css'
import { ArrowIcon } from '../../assets/icons';
export default function Portfolio() {
  const [Loyiha, setLoyiha] = useState([]);
  const [Loyiha2, setLoyiha2] = useState({});

  useEffect(() => {
    Project()
  }, []);
 async function Project() {
    const result = await Projects.Projects()
    setLoyiha(result)
    setLoyiha2(result)
    console.log(result);
  }
  return (
    <div className='container mx-auto px-4 place-self-auto my-7'>
      <h2 className='text-5xl font-semibold mt-24 mb-14'>Loyihalarimiz</h2>
      {/* <div className="flex w-96 justify-evenly md:justify-between md:my-10">
        <div className="">
          <h6 className='text-2xl font-semibold'>20+</h6>
          <p>veb saytlar</p>
        </div>
        <div className="">
          <h6 className='text-2xl font-semibold'>40+</h6>
          <p>mobil ilovalar</p>
        </div>
        <div className="">
          <h6 className='text-2xl font-semibold'>100+</h6>
          <p>telegram botlar</p>
        </div>
      </div> */}

      <div className="grid grid-cols-12">
        {
          Loyiha.length > 0 && Loyiha.map(item => {
            return (
              <div  className="col-span-12 folio md:col-span-6 my-10 cursor-pointer relative">
                <Link to={`/Portfolio_info/${item.id}`}>
                <img className='folio_img'  src={item.product_image_2} alt="" />
                <div className="folio_card">
                  <div className="flex justify-between">
                    <div className="">
                    <p className='text-xl'>{item.product_name}</p>
                    <p className='text-sm text-secondary'>{item?.requirements?.slice(0,20)}</p>
                    </div>
                    <div className="folio_go">
                      <p className='icon_arrow'><ArrowIcon/></p>
                    </div>
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
