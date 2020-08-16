import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import SyllabItem from './SyllabItem'
import Spinner from '../layout/Spinner'
import SyllabContext from '../../context/syllab/syllabContext'

const Syllabs = () => {
  const syllabContext = useContext(SyllabContext)

  const { syllabs, filtered, getSyllabs, loading } = syllabContext

  useEffect(() => {
    getSyllabs()
    // eslint-disable-next-line
  }, [])

  if (syllabs !== null && syllabs.length === 0 && !loading) {
    return <h4>Please add a Syllabusf</h4>
  }

  return (
    <Fragment>
      {syllabs !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((syllab) => (
                <CSSTransition key={syllab._id} timeout={500} classNames="item">
                  <SyllabItem syllab={syllab} />
                </CSSTransition>
              ))
            : syllabs.map((syllab) => (
                <CSSTransition key={syllab._id} timeout={500} classNames="item">
                  <SyllabItem syllab={syllab} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Syllabs
