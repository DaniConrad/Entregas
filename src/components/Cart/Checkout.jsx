import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Navigate, Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import '../../App.css'
import { useForm } from '../../hooks/useForm'
import { useResponsive } from '../../hooks/useResponsive'

const Checkout = () => {

  const {cart} = useContext(CartContext)
  const {responsive, checkViewport} = useResponsive()

  useEffect(() => {
    checkViewport(470)
  }, [checkViewport])

  const initialForm = {
      name: '',
      email: '',
      tel: '',
  }

  const {values, orderId, handleInputChange, handleValidate} = useForm(initialForm)

  
  if (orderId){
    return <Container>
                        <div className='d-flex justify-content-center'>
                          <div className="checkout-order d-flex justify-content-center my-1 shadow-lg" >
                            <div className="row">
                              <div className="d-flex flex-column justify-content-center align-items-center col-lg-8 col-md-8 col-12">
                                <h4 className="text-light fs-2">¡Gracias por tu compra!</h4>
                                <p className="mb-0 text-light fs-5 text-center">Guarda tu número de orden para el rastreo:</p>
                                <p className=" mb-0 text-light fs-5">"{orderId}"</p>
                              </div>  
                              <div className="col-lg-4 col-md-4  col-12 d-flex justify-content-center">
                                <img src="https://i.ibb.co/FDj5xxB/3414323.png" className="checkout-order-img" alt='beers'/>
                              </div>
                            </div>
                          </div>
                        </div>
              <Link to='/'><button className='btn btn-secondary my-2'>Volver</button></Link>
           </Container>
  }

  if(cart.length === 0){
    return <Navigate to='/'/>
  }

  return (
    <Container>
      <h3 className='text-light'>Finalización de orden</h3>
      <hr className='text-light'/>
      <form onSubmit={handleValidate} className='d-flex align-items-center flex-column'>
        <input 
          className={`form-control mb-1 standard-form ${responsive ? 'standard-form-mobile' : 'standard-form-desktop'}`}
          type={'text'} 
          value={values.name} 
          onChange={handleInputChange}
          name='name'
          placeholder='Ingresa tu Nombre y Apellido.'
        />
        <input 
          className={`form-control mb-1 standard-form ${responsive ? 'standard-form-mobile' : 'standard-form-desktop'}`} 
          type={'email'} 
          value={values.email} 
          name='email'
          placeholder='Ingresa tu email.'
          onChange={handleInputChange}
        />
        <input 
          className={`form-control mb-1 standard-form ${responsive ? 'standard-form-mobile' : 'standard-form-desktop'}`} 
          type={'text'} 
          value={values.tel} 
          onChange={handleInputChange}
          placeholder='Ingresa tu teléfono.'
          name='tel'
        />
        <button className='btn btn-primary' type='submit'>Enviar</button>
      </form>
      
    </Container>
  )
}

export default Checkout