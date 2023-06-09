import React from 'react'
import Banner from '../../components/Banner'
import Mentor from '../../components/Mentor'
import InfoSection from '../../components/Info_section'
import Comments from '../../components/Comments'
import { motion as m } from 'framer-motion'

export default function Home() {
  return (
    <m.div>
      <Banner/>
      <InfoSection/>
      <Mentor/>
      <Comments/>
    </m.div>
  )
}
