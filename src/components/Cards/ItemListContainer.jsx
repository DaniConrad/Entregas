import React, {useState, useEffect} from "react";
import {Container, Spinner} from 'react-bootstrap'
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from '../firebase/config'


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()
    
    useEffect( () => { 
        setLoading(true)
        const productsRef = collection(db, 'products')
        const q = categoryId ? query(productsRef, where('category', '==', categoryId)) : productsRef
        getDocs(q)
            .then (resp =>{
                const products = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                setItems(products)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId] );

    return(
    <div className="d-flex flex-column">
        <Container className="d-flex justify-content-center">
            {loading ? <Spinner animation="border" variant="light" /> : ''}
        </Container>

    <ItemList items={items}/>
    </div>
        
    )
}

export default ItemListContainer;
  
  





