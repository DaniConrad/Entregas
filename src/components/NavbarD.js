import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../img/logo.png'


const NavbarD = () => {
    return( 
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
             <img src={logo} width="100" height="100" className="d-inline-block align-top" alt="React Bootstrap logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
            <Nav className="me-auto">
              <Nav.Link href="#home" className='fs-4'>Productos</Nav.Link>
              <Nav.Link href="#link" className='fs-4'>Servicios</Nav.Link>
              <Nav.Link href="#link" className='fs-4'>Galería</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
)};
    


export default NavbarD;