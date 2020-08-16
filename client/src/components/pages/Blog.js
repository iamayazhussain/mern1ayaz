import React from 'react'

import Carousels from '../blog/Blog'
import CarouselForm from '../blog/BlogForm'
import CarouselFilter from '../blog/BlogFilter'

const Home = () => {
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

export default Home
