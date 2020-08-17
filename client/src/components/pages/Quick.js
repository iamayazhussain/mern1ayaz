import React from 'react'

import Carousels from '../quicks/quicks'
import CarouselForm from '../quicks/quickForm'
import CarouselFilter from '../quicks/quickFilter'

const Info = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <CarouselForm />
      </div>
      <div className="col-md-12 mt-20">
        <CarouselFilter />
        <Carousels />
      </div>
    </div>
  )
}

export default Info
