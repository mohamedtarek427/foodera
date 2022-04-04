import React from 'react';
import './Navs.css'
import logo from './../../asstets/logo.png'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Navs = () => {
    return (
        <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} title="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">about us</Nav.Link>
              <Nav.Link href="#home">explore food</Nav.Link>
              <Nav.Link href="#home">Review</Nav.Link>
              <Nav.Link href="#link">faq</Nav.Link>
                </Nav>
                <Nav>
            <Nav.Link id="lastnav">01273397388</Nav.Link>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navs;
