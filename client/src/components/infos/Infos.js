import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import InfoItem from './InfoItem'
import Spinner from '../layout/Spinner'
import InfoContext from '../../context/info/infoContext'

const Infos = () => {
  const infoContext = useContext(InfoContext)

  const { infos, filtered, getInfos, loading } = infoContext

  useEffect(() => {
    getInfos()
    // eslint-disable-next-line
  }, [])

  if (infos !== null && infos.length === 0 && !loading) {
    return <h4>Please add a info</h4>
  }

  return (
    <Fragment>
      {infos !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((info) => (
                <CSSTransition key={info._id} timeout={500} classNames="item">
                  <InfoItem info={info} />
                </CSSTransition>
              ))
            : infos.map((info) => (
                <CSSTransition key={info._id} timeout={500} classNames="item">
                  <InfoItem info={info} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Infos
