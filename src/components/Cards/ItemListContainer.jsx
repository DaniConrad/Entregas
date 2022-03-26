import React, {useState, useEffect} from "react";
import {Container, Spinner} from 'react-bootstrap'
import ItemList from "./ItemList";
import { getStock } from '../mocks/Api'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect( () => { 
        setLoading(true)
        getStock
        .then((res) => setItems(res))
        .catch((err) => console.error(err.message))
        .finally(() => setLoading(false))
    }, [] );

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
  
  





