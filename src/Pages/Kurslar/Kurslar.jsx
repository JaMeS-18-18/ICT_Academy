import React from 'react'
import ListKurslar from '../../components/ListKurslar'
import Maqsad from '../../components/Maqsad'
import Brands from '../../components/Brands/'
import { motion as m } from 'framer-motion'
export default function Kurslar() {
  return (
    <m.div>
    <div className='container mx-auto px-4 place-self-auto'>
      <ListKurslar/>
      <Maqsad/>
      <Brands/>
    </div>
    </m.div>
  )
}
