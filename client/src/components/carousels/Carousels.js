import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import CarouselItem from './CarouselItem'
import Spinner from '../layout/Spinner'
import CarouselContext from '../../context/carousel/carouselContext'

const Carousels = () => {
  const carouselContext = useContext(CarouselContext)

  const { carousels, filtered, getCarousels, loading } = carouselContext

  useEffect(() => {
    getCarousels()
    // eslint-disable-next-line
  }, [])

  if (carousels !== null && carousels.length === 0 && !loading) {
    return <h4>Please add a carousel</h4>
  }

  return (
    <Fragment>
      {carousels !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((carousel) => (
                <CSSTransition
                  key={carousel._id}
                  timeout={500}
                  classNames="item"
                >
                  <CarouselItem carousel={carousel} />
                </CSSTransition>
              ))
            : carousels.map((carousel) => (
                <CSSTransition
                  key={carousel._id}
                  timeout={500}
                  classNames="item"
                >
                  <CarouselItem carousel={carousel} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Carousels
