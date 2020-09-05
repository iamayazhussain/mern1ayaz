import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PublicationItem from './publicationItem'
import Spinner from '../layout/Spinner'
import PublicationContext from '../../context/publication/publicationContext'

const Publications = () => {
  const publicationContext = useContext(PublicationContext)

  const {
    publications,
    filtered,
    getPublications,
    loading,
  } = publicationContext

  useEffect(() => {
    getPublications()
    // eslint-disable-next-line
  }, [])

  if (publications !== null && publications.length === 0 && !loading) {
    return <h4>Please add a publication</h4>
  }

  return (
    <Fragment>
      {publications !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((publication) => (
                <CSSTransition
                  key={publication._id}
                  timeout={500}
                  classNames="item"
                >
                  <PublicationItem publication={publication} />
                </CSSTransition>
              ))
            : publications.map((publication) => (
                <CSSTransition
                  key={publication._id}
                  timeout={500}
                  classNames="item"
                >
                  <PublicationItem publication={publication} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Publications
