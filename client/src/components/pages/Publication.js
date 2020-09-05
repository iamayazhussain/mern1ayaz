import React from 'react'

import Carousels from '../publications/publications'
import CarouselForm from '../publications/publicationForm'
import CarouselFilter from '../publications/publicationFilter'

const Publication = () => {
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

export default Publication
