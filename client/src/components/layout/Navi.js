import React, { Fragment, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import AuthContext from '../../context/auth/authContext'

const Navi = ({ title, icon }) => {
  const authContext = useContext(AuthContext)

  const { isAuthenticated, logout, loadUser } = authContext

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

  const onLogout = () => {
    logout()
  }

  const authLinks = (
    <Fragment>
      <Link to="/">
        <Nav.Link href="#syllabus">Carousel</Nav.Link>
      </Link>
      <Link to="/syllabus">
        <Nav.Link href="#syllabus">Syllabus</Nav.Link>
      </Link>

      <Link to="/blog">
        <Nav.Link href="#blog">Blog</Nav.Link>
      </Link>

      <Link to="/sidebar">
        <Nav.Link href="#sidebar">SideInfo</Nav.Link>
      </Link>

      <Link to="/infos">
        <Nav.Link href="#about">Infos</Nav.Link>
      </Link>
      <Link to="/publication">
        <Nav.Link href="#publication">publication</Nav.Link>
      </Link>
      <Link to="/placement">
        <Nav.Link href="#placement">placement</Nav.Link>
      </Link>

      <Link onClick={onLogout}>
        <Nav.Link href="#logout">Logout</Nav.Link>
      </Link>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <Link to="/login">
        <Nav.Link href="#contact">Login</Nav.Link>
      </Link>
    </Fragment>
  )

  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="order-first"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {isAuthenticated ? authLinks : guestLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Navi.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navi.defaultProps = {
  title: 'ISLEC',
  icon: 'fas fa-id-card-alt',
}

export default Navi
