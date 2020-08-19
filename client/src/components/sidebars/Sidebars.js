import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import SidebarItem from './SidebarItem'
import Spinner from '../layout/Spinner'
import SidebarContext from '../../context/sidebar/sidebarContext'

const Sidebars = () => {
  const sidebarContext = useContext(SidebarContext)

  const { sidebars, filtered, getSidebars, loading } = sidebarContext

  useEffect(() => {
    getSidebars()
    // eslint-disable-next-line
  }, [])

  if (sidebars !== null && sidebars.length === 0 && !loading) {
    return <h4>Please add a Sidebar</h4>
  }

  return (
    <Fragment>
      {sidebars !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((sidebar) => (
                <CSSTransition
                  key={sidebar._id}
                  timeout={500}
                  classNames="item"
                >
                  <SidebarItem sidebar={sidebar} />
                </CSSTransition>
              ))
            : sidebars.map((sidebar) => (
                <CSSTransition
                  key={sidebar._id}
                  timeout={500}
                  classNames="item"
                >
                  <SidebarItem sidebar={sidebar} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Sidebars
