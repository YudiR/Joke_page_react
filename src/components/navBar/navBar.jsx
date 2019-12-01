import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import css from "./navBar.css";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";

const navbar = props => {
  return (
    <Navbar
      className="Nav"
      sticky="top"
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "#26272b" }}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ">
          <LinkContainer exact to="/">
            <Nav.Link active={false}>Enter Your Name </Nav.Link>
          </LinkContainer>

          <LinkContainer exact to="/mainPage">
            <Nav.Link active={false}>Main Page </Nav.Link>
          </LinkContainer>

          <LinkContainer exact to="/yourJoke">
            <Nav.Link active={false}>Make a Joke </Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/xandos">
            <Nav.Link active={false}>Play X And Os </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {
    isOnePlayer: state.forms.isOnePlayer
  };
};

export default connect(mapStateToProps)(navbar);
