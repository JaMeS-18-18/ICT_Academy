import React from 'react'
import s from '../../assets/images/Rectangle 5.png'
import './News_info.css'
import ImgNew from'../../assets/images/Rectangle 5.png'
import { Link } from 'react-router-dom'
export default function News_info() {
  return (
    <div className='container mx-auto px-4 place-self-auto'>
      <div className="grid grid-cols-12 my-5 md:my-16">
        <div className="col-span-4">
          <img className='info_news_img' src={s} alt="" />
        </div>
        <div className="col-span-8">
         <h2 className='text-xl md:text-4xl font-semibold mx-5'>Yangiliklar</h2>
        <p className='text-l mx-5 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo soluta rerum quidem. Rerum itaque quasi mollitia alias corporis aut quaerat est quod obcaecati minima vel, doloremque quibusdam? Explicabo neque quis nam culpa! Iusto, asperiores deserunt? Modi facere autem nobis laboriosam tempora deserunt dicta porro harum! Repudiandae libero optio, doloribus dolor inventore ipsum sunt accusamus, ducimus amet corrupti quia qui error. Harum quae tenetur at laboriosam necessitatibus voluptas numquam in ipsum voluptatem temporibus eius voluptatibus adipisci quis earum nemo facilis, debitis esse, exercitationem nihil quisquam ea delectus! Et dicta veritatis saepe, aut illum perspiciatis a iste laborum, rerum sunt incidunt minus doloremque! Quo non commodi facere cumque atque laudantium perferendis modi alias quae explicabo, id voluptatem unde sapiente, molestiae exercitationem eos iusto quod adipisci deleniti minima. Perspiciatis molestias omnis similique, at itaque laudantium atque eaque, doloremque, vero ut veniam molestiae sapiente voluptate! Dolore, distinctio explicabo quod consequatur commodi sit maxime totam nobis magnam ducimus iste eveniet dolorem numquam cum nisi veritatis facilis quaerat ipsa voluptates voluptatum vitae. Ad ipsum voluptatem aut perferendis ratione aliquam molestiae nam eius minima. Consectetur sequi ea quos perferendis dicta nisi eaque temporibus</p>
        </div>
        <div className="col-span-12">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem iusto numquam cupiditate voluptatum rem ut id! Modi labore ipsam quasi, rerum a quas inventore adipisci quibusdam aspernatur voluptatum recusandae aperiam dolorum voluptate voluptatibus eius ratione dignissimos nulla delectus possimus at? Consequuntur reiciendis fugit perferendis nam voluptates! Cupiditate accusamus officiis aliquam cum iste, fugit eos consectetur doloribus perferendis. Expedita consequuntur aliquam modi, similique ad laboriosam at enim adipisci molestiae accusamus qui voluptates, dolorem iste quas minima dolores quae soluta. Voluptas saepe sed, perferendis repellendus repellat expedita aliquam magnam odio et? Qui ipsam libero dolore dolor delectus dolores blanditiis repudiandae temporibus at dolorum corrupti, minima ullam hic. Eaque fugiat excepturi aperiam, aliquam similique maxime recusandae nostrum, corrupti fugit id nisi sit repellendus blanditiis optio explicabo totam architecto, accusamus atque? Harum error aliquam aperiam unde fugit illum. Dolorem tempora officia, ut voluptatem incidunt consectetur quam nostrum tempore quasi odit accusamus provident sit. Qui corrupti vel dolor esse voluptatum. Consequatur doloremque temporibus quis rerum, impedit expedita possimus debitis, omnis provident eum sapiente, minima esse dignissimos earum exercitationem recusandae consequuntur. Quae a perspiciatis laborum non blanditiis tenetur ipsa nemo deserunt qui similique! Dolor quisquam reprehenderit aut aliquid iusto nemo earum nostrum quod suscipit nobis!</p>
        </div>
      </div>
      <div className="latest_news">
        <h2 className='text-xl md:text-4xl font-semibold'>So'ngi Yangiliklar</h2>
        <div className="grid grid-cols-12">
        <div className=" col-span-12 md:col-span-6 lg:col-span-4">
        <div className="News_card my-5 bg-bg_gray">
          <img className='' src={ImgNew} alt="" />
          <h5 className='text-xl md:text-2xl mt-5 mb-2 font-semibold'>Yangilik</h5>
          <p className='text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae eligendi maxime pariatur quis quas ab esse nemo vel veritatis ex, ullam sint autem, dolorem officiis iure commodi itaque obcaecati quibusdam repellendus dignissimos inventore? Accusantium reiciendis odio nemo commodi, laudantium nam enim incidunt placeat? Odit maiores quae laudantium nam sequi!</p>
          <Link to={'/News_info'}>
          <button className='text-l text-white mt-5 bg-primary p-3 px-4 rounded-xl '>Batafsil</button>
          </Link>
        </div>
      </div>
      <div className=" col-span-12 md:col-span-6 lg:col-span-4">
        <div className="News_card my-5 bg-bg_gray">
          <img className='' src={ImgNew} alt="" />
          <h5 className='text-xl md:text-2xl mt-5 mb-2 font-semibold'>Yangilik</h5>
          <p className='text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae eligendi maxime pariatur quis quas ab esse nemo vel veritatis ex, ullam sint autem, dolorem officiis iure commodi itaque obcaecati quibusdam repellendus dignissimos inventore? Accusantium reiciendis odio nemo commodi, laudantium nam enim incidunt placeat? Odit maiores quae laudantium nam sequi!</p>
          <Link to={'/News_info'}>
          <button className='text-l text-white mt-5 bg-primary p-3 px-4 rounded-xl '>Batafsil</button>
          </Link>
        </div>
      </div>
      <div className=" col-span-12 md:col-span-6 lg:col-span-4">
        <div className="News_card my-5 bg-bg_gray">
          <img className='' src={ImgNew} alt="" />
          <h5 className='text-xl md:text-2xl mt-5 mb-2 font-semibold'>Yangilik</h5>
          <p className='text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae eligendi maxime pariatur quis quas ab esse nemo vel veritatis ex, ullam sint autem, dolorem officiis iure commodi itaque obcaecati quibusdam repellendus dignissimos inventore? Accusantium reiciendis odio nemo commodi, laudantium nam enim incidunt placeat? Odit maiores quae laudantium nam sequi!</p>
          <Link to={'/News_info'}>
          <button className='text-l text-white mt-5 bg-primary p-3 px-4 rounded-xl '>Batafsil</button>
          </Link>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}
