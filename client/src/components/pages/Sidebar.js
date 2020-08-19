import React from 'react'

import Carousels from '../sidebars/Sidebars'
import CarouselForm from '../sidebars/SidebarForm'
import CarouselFilter from '../sidebars/SidebarFilter'

const Sidebar = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <CarouselForm />
      </div>

      <div className="col-md-6 pt-45">
        <CarouselFilter />
        <Carousels />
      </div>
    </div>
  )
}

export default Sidebar
