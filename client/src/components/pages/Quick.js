import React from 'react'

import Carousels from '../quicks/Quicks'
import CarouselForm from '../quicks/QuickForm'
import CarouselFilter from '../quicks/QuickFilter'

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
