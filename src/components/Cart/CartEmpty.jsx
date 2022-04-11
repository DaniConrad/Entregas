import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext'
import { BsFillTrashFill, BsFillDashCircleFill, BsFillPlusCircleFill } from 'react-icons/bs'
import '../../App.css'

export const CartEmpty = () => {
    
    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(-1)
    }
    
  return (
    <Container>
        <h2 className='text-light'>No hay nada en el carrito</h2>
        <hr className='text-light'/>
        <button className='btn btn-secondary m-3'onClick={handleNavigate}>Volver</button>
    </Container>
  )
}
