import React, {useState, useEffect} from "react";
import {Container, Spinner} from 'react-bootstrap'
import ItemList from "./ItemList";
import { getStock } from '../mocks/Api'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()
    
    useEffect( () => { 
        setLoading(true)
        getStock
        .then((res) => {
            if (categoryId) {
                setItems( res.filter( (prod) => prod.category === categoryId ) )
            }else{
                setItems( res )
            }
        })
        
        .catch((err) => console.error(err.message))
        .finally(() => setLoading(false))
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
  
  





