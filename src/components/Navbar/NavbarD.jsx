import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartIcon from '../Cart/CartWidget/CartIcon';
import Logo from '../icons/Logo';


const NavbarD = () => {
    return( 
      <header className="App-header">
          <Navbar className='nav-back-color' expand="lg">
              <Container>
                <Navbar.Brand as={Link} to="/">
                  <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/products" className='fs-4 underline text-color-standard'>Productos</Nav.Link>
                    <Nav.Link as={Link} to="/services" className='fs-4 underline text-color-standard'>Servicios</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className='fs-4 underline text-color-standard'>Contacto</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                <CartIcon />
              </Container>
            </Navbar>
      </header>
)};


export default NavbarD;