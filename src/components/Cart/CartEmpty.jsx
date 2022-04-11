import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { Container,} from 'react-bootstrap';
import { BsCartX } from 'react-icons/bs'
import '../../App.css'

export const CartEmpty = () => {
    
    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(-1)
    }
    
  return (
    <Container>
      <div className='d-flex align-items-center flex-column'>
      <BsCartX
        size={'10rem'}
        className="my-2 cart-color"
      />
        <h2 className='text-color-standard'>No hay nada en el carrito</h2>
        </div>
        <hr className='text-light'/>
        <button className='btn btn-secondary m-3'onClick={handleNavigate}>Volver</button>
    </Container>
  )
}
