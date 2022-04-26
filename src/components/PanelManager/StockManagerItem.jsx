import React, { useState } from "react";
import { Card, Button, Container } from 'react-bootstrap'
import { db } from '../../firebase/config';
import {collection, documentId, getDocs, query, where, updateDoc } from 'firebase/firestore'
import { modifiedAlertPanel } from "../helpers/Alerts/PanelManager/modifiedAlertPanel";
import { unModifiedAlertPanel } from "../helpers/Alerts/PanelManager/unModifiedAlertPanel";

const StockManagerItem = ({product}) =>{
    
    const [quantity, setQuantity] = useState(0)

        const handleInput = (e) => {
            setQuantity(
                e.target.value
              )
        }

    const handleQuantity = async (product, operation) =>{
        
        const productsRef = collection(db, 'products')
        const q = query(productsRef, where(documentId(), '==', product.id))
        const products =  await getDocs(q)
        
        products.docs.forEach((doc) =>{
            const dataStock = Number(doc.data().stock)
            if (operation === 'plus') {
                updateDoc(doc.ref, {
                    stock:  dataStock + Number(quantity)
               })
               if (quantity === 0) {
                unModifiedAlertPanel()
                   return
               }
               modifiedAlertPanel()
               setQuantity(0)
            }else{
                    updateDoc(doc.ref, {
                         stock: dataStock - quantity
                    })
                    modifiedAlertPanel()
                    setQuantity(0)
            }
          })
    }
    
    
    return(
            <Card style={{ width: '18rem' }} bg="dark" className="d-flex align-items-center m-3">
                <Card.Img style={{ width: '55%', height:'55%' }} variant="top" alt={product.name} src= {product.img} className="mt-4"/>
                <Card.Body>
                    <Card.Title className="text-light text-center">{product.name}</Card.Title>
                    <Container >
                        <Card.Text className="d-flex justify-content-center text-light">
                        Stock disponible: {product.stock}
                        </Card.Text>
                        <input type="text" onChange={handleInput} />
                        <Button onClick={() => handleQuantity(product, 'plus')}>+</Button>
                        <Button onClick={() => handleQuantity(product)}>-</Button>
                    </Container>
                </Card.Body>
            </Card> 
    )}

export default StockManagerItem;

