import React, { useState, useEffect } from "react";
import {Card, Button, Container} from 'react-bootstrap'
import CartPlus from "./icons/CartPlus";
import CartDash from "./icons/CartDash";

const RenderCards = ({stock, initial, onAdd}) =>{
    // Quantity to add to cart
    const [Count, SetItem] = useState(initial);

    
    const quantItem = (prop) =>{
        if (Count === 0 && (prop == '-') && stock === 0) {
            return;
        }
        if (prop === '+') {
            if (Count === stock || stock === 0) {
                return;
            }
            SetItem(Count +1);
        }else{
            if (Count === initial) {
                return;
            }
            SetItem(Count -1);
            }
        }

    //Disable and enable addCart button with the stock disponibility
    const [btnOn, btnDisabled] = useState(false)
    useEffect( () =>{
       if (stock === 0) {
            btnDisabled(true)
        }
        })

    // Cart
    function addCart (Count){
        onAdd(Count);
    }
    

    return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Container className="mb-2 d-flex border justify-content-between personalized-width">
                <Button onClick={()=>quantItem('+')} className='bg-transparent border-0'>
                    <CartPlus />
                </Button>
                <Card.Text className="m-2">
                 {Count}
                </Card.Text>
                <Button onClick={()=>quantItem('-')} className='bg-transparent border-0'>
                    <CartDash />
                </Button>
            </Container>
            <Container className="d-flex justify-content-center flex-column">
                <Button onClick={()=>addCart(Count)} variant="primary" disabled={btnOn}>Agregar al carrito</Button>
                <Card.Text className="d-flex justify-content-center">
                 Stock disponible: {stock}
                </Card.Text>
            </Container>
        </Card.Body>
    </Card>
    )}

export default RenderCards;

