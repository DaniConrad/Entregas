import React, { useState, useEffect } from "react";
import {Card, Button, Container} from 'react-bootstrap'
import CartPlus from "./icons/CartPlus";
import CartDash from "./icons/CartDash";

const RenderCards = ({stock, initial, onAdd, name, id, img, description}) =>{
    // Quantity to add to cart
    const [Count, SetItem] = useState(initial);

    
    const quantItem = (prop) =>{
        if (Count === 0 && (prop === '-') && stock === 0) {
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
    <Card style={{ width: '18rem' }} bg="dark" className="d-flex align-items-center">
        <Card.Img style={{ width: '55%', height:'55%' }} variant="top" alt={description} src= {img} className="mt-4"/>
        <Card.Body>
            <Card.Title className="text-light text-center">{name}</Card.Title>
            <Container className="mb-2 d-flex border justify-content-center personalized-width">
                <Button onClick={()=>quantItem('+')} className='bg-transparent border-0'>
                    <CartPlus />
                </Button>
                <Card.Text className="m-2 text-light">
                 {Count}
                </Card.Text>
                <Button onClick={()=>quantItem('-')} className='bg-transparent border-0'>
                    <CartDash />
                </Button>
            </Container>
            <Container className="d-flex justify-content-center flex-column">
                <Button onClick={()=>addCart(Count)} variant="primary" disabled={btnOn} id={id}>Agregar al carrito</Button>
                <Card.Text className="d-flex justify-content-center text-light">
                 Stock disponible: {stock}
                </Card.Text>
            </Container>
        </Card.Body>
    </Card>
    )}

export default RenderCards;

