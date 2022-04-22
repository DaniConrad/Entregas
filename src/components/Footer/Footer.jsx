import React from 'react'
import { Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../icons/Logo'

const Footer = () => {
  return (
      <footer className='bg-dark'>
        <Container className='d-flex flex-row flex-wrap justify-content-around'>
            <div className='my-3'>
                <Link to='/'><Logo /></Link>
            </div>
            <div>       
            <h4 className='text-color-standard my-1'>Navegación</h4>
                    <Nav className="d-flex flex-column">
                        <Nav.Link as={Link} to="/products" className='text-color-standard'>Productos</Nav.Link>
                        <Nav.Link as={Link} to="/services" className='text-color-standard'>Servicios</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className='text-color-standard'>Contacto</Nav.Link>
                        <Nav.Link as={Link} to="/login" className='text-color-standard'>Privado</Nav.Link>
                    </Nav>
            </div>  
            <div>
                <h4 className='text-color-standard my-1'>Redes</h4>
                <Nav.Link target={'_blank'} href='https://www.instagram.com' className='text-color-standard'>Instagram</Nav.Link>
                <Nav.Link target={'_blank'} href='https://www.facebook.com' className='text-color-standard'>Facebook</Nav.Link>
                <Nav.Link target={'_blank'} href='https://www.tiktok.com' className='text-color-standard'>TikTok</Nav.Link>
            </div>
        </Container>
        <hr className='text-light m-0'/>
        <h6 className='text-light m-0 text-center'>Developed by DaniConrad</h6>
    </footer>
  )
}

export default Footer