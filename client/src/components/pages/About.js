import React from 'react'

import Carousels from '../infos/Infos'
import CarouselForm from '../infos/InfoForm'
import CarouselFilter from '../infos/InfoFilter'

const About = () => {
  return (
    <div>
      <div>
        <CarouselForm />
      </div>
      <div>
        <CarouselFilter />
        <Carousels />
      </div>
    </div>
  )
}

export default About
