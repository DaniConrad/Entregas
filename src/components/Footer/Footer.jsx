import React, { useEffect } from 'react'
import { Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../icons/Logo'
import { useResponsive } from '../../hooks/useResponsive'
const Footer = () => {

  const {responsive, checkViewport} = useResponsive()
    
  useEffect(() => {
    checkViewport(470)
  }, [checkViewport])
    


  return (
      <footer className='bg-dark'>
        <Container className={`d-flex flex-wrap  ${responsive ? 'flex-column align-items-center' : 'flex-row justify-content-around'}`}>
            <div className='footer-logo-container my-3 '>
                <Link to='/'><Logo /></Link>
            </div>
            <div className='footer-nav-container'>       
            <h4 className='text-color-standard my-1'>Navegación</h4>
                    <Nav className="d-flex flex-column">
                        <Nav.Link as={Link} to="/products" className='text-color-standard'>Productos</Nav.Link>
                        <Nav.Link as={Link} to="/services" className='text-color-standard'>Servicios</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className='text-color-standard'>Contacto</Nav.Link>
                        <Nav.Link as={Link} to="/login" className='text-color-standard'>Privado</Nav.Link>
                    </Nav>
            </div>  
            <div className='footer-media-container'>
                <h4 className={`text-color-standard my-1 ${responsive ? 'text-center' : ''}`}>Redes</h4>
                <div className={`d-flex ${responsive ? 'flex-row' : 'flex-column'}`}>
                    <Nav.Link target={'_blank'} href='https://www.instagram.com' className='text-color-standard'>Instagram</Nav.Link>
                    <Nav.Link target={'_blank'} href='https://www.facebook.com' className='text-color-standard'>Facebook</Nav.Link>
                    <Nav.Link target={'_blank'} href='https://www.tiktok.com' className='text-color-standard'>TikTok</Nav.Link>
                </div>
            </div>
        </Container>
        <hr className='text-light m-0'/>
        <h6 className='text-light m-0 text-center'>Developed by DaniConrad</h6>
    </footer>
  )
}

export default Footer