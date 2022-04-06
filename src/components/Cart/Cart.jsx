import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext'
import { BsFillTrashFill, BsFillDashCircleFill, BsFillPlusCircleFill } from 'react-icons/bs'
import '../../App.css'

export const Cart = () => {

    const {cart, removeItem, totalCart, plusItemInCart, dashItemInCart,  emptyCart,  } = useContext(CartContext)
    
    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(-1)
    }
    
  return (
    <Container>
        <h2 className='text-light'>Carrito de Compras</h2>
              <hr className='text-light'/>
          {
          cart.map((item) => (
              <div className='d-flex justify-content-center 'key={item.id}>
                  <div className='personal-bg-cart d-flex justify-content-center px-2 my-2 flex-wrap'>
                    <div className='d-flex justify-content-center'>
                      <img src={item.img} alt={item.name} className="cart-img"/>
                    </div>
                        <div className='d-flex align-items-center flex-wrap'>
                          <h4   className='text-light m-2 text-center' style={{width: '10rem'}}>{item.name}</h4>
                          <Button onClick={() => dashItemInCart(item.id)} className='bg-transparent border-0 d-flex align-items-center justify-content-center' >
                             <BsFillDashCircleFill 
                                  color='#000'
                              />
                          </Button>
                          <p className='text-light m-2 text-center' style={{width: '6rem'}}>Cantidad: {item.Quantity}</p>
                          <Button onClick={() => plusItemInCart(item.id)} className='bg-transparent border-0 d-flex align-items-center justify-content-center'>
                              <BsFillPlusCircleFill 
                                 color='#000'
                              />
                          </Button>
                          <p className='text-light m-2 text-center' style={{width: '7rem'}}>Precio: $ {item.price}</p>
                          <button onClick={() => removeItem(item.id)} className='me-2 btn'>
                            <BsFillTrashFill 
                                size={'2rem'}
                                color={'#A31616'}
                                alt={'Eliminar artículo'}
                                title={'Eliminar artículo'}
                              />
                           </button> 
                    </div>
                  </div>
                </div>
          ))
            }
        <h2 className='mb-2 text-light'>Total: $ {totalCart()}</h2>
            <div className='d-flex'>
              <button className='btn btn-buy-cart  text-light mx-2'>
               Comprar carrito
                </button>
              <button onClick={()=>emptyCart()} className='btn btn-empty-cart text-light mx-2'>
                Vaciar carrito
                </button>
            </div>
          <hr className='text-light'/>
        <button className='btn btn-secondary m-3'onClick={handleNavigate}>Volver</button>
    </Container>
  )
}
