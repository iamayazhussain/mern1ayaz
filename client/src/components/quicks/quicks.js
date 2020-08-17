import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import QuickItem from './QuickItem'
import Spinner from '../layout/Spinner'
import QuickContext from '../../context/quick/quickContext'

const Quicks = () => {
  const quickContext = useContext(QuickContext)

  const { quicks, filtered, getQuicks, loading } = quickContext

  useEffect(() => {
    getQuicks()
    // eslint-disable-next-line
  }, [])

  if (quicks !== null && quicks.length === 0 && !loading) {
    return <h4>Please add a quick</h4>
  }

  return (
    <Fragment>
      {quicks !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((quick) => (
                <CSSTransition key={quick._id} timeout={500} classNames="item">
                  <QuickItem quick={quick} />
                </CSSTransition>
              ))
            : quicks.map((quick) => (
                <CSSTransition key={quick._id} timeout={500} classNames="item">
                  <QuickItem quick={quick} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Quicks
