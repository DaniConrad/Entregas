import React, { useState, useEffect } from "react";
import { Card, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CartPlus from "../icons/CartPlus";
import CartDash from "../icons/CartDash";

const Item = ({onAdd, product}) =>{
    // Quantity to add to cart
    const [Count, SetItem] = useState(product.initial);
    
    const plusItem = (prop) =>{
        if (prop === '+') {
            if (Count === product.stock || product.stock === 0) {
                return;
            }
            SetItem(Count +1);
        }
    }

    const dashItem = (prop) =>{
        if (Count === product.initial || (Count === 0 && (prop === '-') && product.stock === 0)) {
            return;
        }else{
            SetItem(Count -1);
            }
        }

    //Disable and enable addCart button with the stock disponibility
    const [btnOn, btnDisabled] = useState(false)
    useEffect( () =>{
       if (product.stock === 0) {
            btnDisabled(true)
        }else{
            btnDisabled(false)
        }
        }, [product.stock])

    // Cart
    function addCart (Count){
        onAdd(Count);
    }
    

    return(
    <Card style={{ width: '18rem' }} bg="dark" className="d-flex align-items-center">
        <Card.Img style={{ width: '55%', height:'55%' }} variant="top" alt={product.name} src= {product.img} className="mt-4"/>
        <Card.Body>
            <Card.Title className="text-light text-center">{product.name}</Card.Title>
            <Container className="mb-2 d-flex border justify-content-center personalized-width">
                <Button onClick={()=>plusItem('+')} className='bg-transparent border-0'>
                    <CartPlus />
                </Button>
                <Card.Text className="m-2 text-light">
                 {Count}
                </Card.Text>
                <Button onClick={()=>dashItem('-')} className='bg-transparent border-0'>
                    <CartDash />
                </Button>
            </Container>
            <Container className="d-flex justify-content-center flex-column">
                <Link to={`/detail/${product.id}`}><Button onClick={()=>addCart(Count)} variant="primary" disabled={btnOn} id={product.id}>Ver detalles</Button></Link>
                <Card.Text className="d-flex justify-content-center text-light">
                 Stock disponible: {product.stock}
                </Card.Text>
            </Container>
        </Card.Body>
    </Card>
    )}

export default Item;

