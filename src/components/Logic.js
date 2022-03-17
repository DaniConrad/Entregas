import React, { useState } from "react";
import {Card, Button, Container} from 'react-bootstrap'
import CartPlus from "./icons/CartPlus";
import CartDash from "./icons/CartDash";

const RenderCards = () =>{
    let stock = 7;
    let cart = [];

    const [Count, SetItem] = useState(0);

    function addCart (){
        stock=stock-Count
        console.log(...cart);
        console.log(`Stock actual ${stock}`);
    }
    
    const addItem = (prop) =>{
        if (Count === 0 && (prop == '-')) {
            return;
        }
        if (prop === '+') {
            SetItem(Count +1);
            if (Count === stock) {
                SetItem(Count +0);
            }
        }else{
            SetItem(Count -1);
            }
        }
    

    

    return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Container className="mb-2 d-flex border justify-content-between personalized-width">
                <Button onClick={()=>addItem('+')} className='bg-transparent border-0'>
                    <CartPlus />
                </Button>
                <Card.Text className="m-2">
                 {Count}
                </Card.Text>
                <Button onClick={()=>addItem('-')} className='bg-transparent border-0'>
                    <CartDash />
                </Button>
            </Container>
                <Button onClick={()=>addCart()} variant="primary">Agregar al carrito</Button>
        </Card.Body>
    </Card>
    )}

export default RenderCards;

