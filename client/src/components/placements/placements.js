import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PlacementItem from './placementItem'
import Spinner from '../layout/Spinner'
import PlacementContext from '../../context/placement/placementContext'

const Placements = () => {
  const placementContext = useContext(PlacementContext)

  const {
    placements,
    filtered,
    getPlacements,
    loading,
  } = placementContext

  useEffect(() => {
    getPlacements()
    // eslint-disable-next-line
  }, [])

  if (placements !== null && placements.length === 0 && !loading) {
    return <h4>Please add a placement</h4>
  }

  return (
    <Fragment>
      {placements !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((placement) => (
                <CSSTransition
                  key={placement._id}
                  timeout={500}
                  classNames="item"
                >
                  <PlacementItem placement={placement} />
                </CSSTransition>
              ))
            : placements.map((placement) => (
                <CSSTransition
                  key={placement._id}
                  timeout={500}
                  classNames="item"
                >
                  <PlacementItem placement={placement} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Placements
