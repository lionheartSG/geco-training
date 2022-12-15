import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link, NavLink } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"

function NaviBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg={"dark"} variant={"dark"}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/movie">
              <Nav.Link>Movie</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NaviBar
