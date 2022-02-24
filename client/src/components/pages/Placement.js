import React from 'react'

import Carousels from '../placements/placements'
import CarouselForm from '../placements/placementForm'
import CarouselFilter from '../placements/placementFilter'

const Placement = () => {
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

export default Placement
