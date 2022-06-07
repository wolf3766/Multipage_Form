import React, { Component } from 'react'
import { Navbar, Container , Nav } from 'react-bootstrap'
import "../styles/navbar.css"

export default class Navbarcomp extends Component {
  render() {
    return (
      <div className='navbar'>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >Loan Form</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <Nav.Link href="/First_Page">Basic details</Nav.Link>
        <Nav.Link href="/Second_Page">Business details</Nav.Link>
        <Nav.Link href="/Third_Page">Loan details</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      </div>
    )
  }
}
