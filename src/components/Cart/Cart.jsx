import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import '../../App.css'
import { CartEmpty } from './CartEmpty';
import { CartFilled } from './CartFilled';

export const Cart = () => {

    const {cart} = useContext(CartContext)
    
  return (
    cart.length===0 ? 
                      <CartEmpty />
                    : 
                      <CartFilled />
  )
}
