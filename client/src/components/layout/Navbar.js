import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <Link onClick={onLogout}>
        <Nav.Link href="#logout">Logout</Nav.Link>
      </Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/register">
        <Nav.Link href="#contact">Register</Nav.Link>
      </Link>
      <Link to="/login">
        <Nav.Link href="#contact">Login</Nav.Link>
      </Link>
    </Fragment>
  );

  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
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
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
