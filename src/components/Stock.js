import React, {useState, useEffect} from "react";
import RenderCards from "./Logic";
import {Container} from 'react-bootstrap';



const onAdd = (count) =>{
    console.log(`Se agregan ${count} al carrito`);
  }

const stock = [
    {   id:1, 
        name:"Botellón", 
        description:"Capacidad de 2L con tapa a rosca.", 
        price: 1500, 
        stock: 15,
        img:"",
        initial: 1,
    },
    {   id:2, 
        name:"Vaso Perzonalizado", 
        description:"Cristalería oficial de la marca con logo de 500ml", 
        price: 500, 
        stock: 40,
        img:"", 
        initial: 1,
    },
    {   id:3, 
        name:"Cerveza embotellada", 
        description:"Presentación de 750ml.", 
        price: 200, 
        stock: 50,
        img:"",
        initial: 1,
    },
    {   id:4, 
        name:"Barril", 
        description:"Variedad a gusto de 20L, puedes solicitar el alquier de la chopera.", 
        price: 5000, 
        stock: 4,
        img:"",
        initial: 1,
    }
];

const getStock = () =>{
    return new Promise((resolve, reject) => {
        if (stock.length === 0) {
            reject(new Error('No hay datos'))
        }
        setTimeout(() => {
        resolve(stock);
    }, 1500)
    })
}

const ShowPosts = () => {
    const [items, setPosts] = useState([]);
    
    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await getStock(); 
                setPosts(res.map((prod, i) => (
                                  <RenderCards 
                                    key={i}
                                    id={prod.id}
                                    name={prod.name}
                                    stock={prod.stock}
                                    initial={prod.initial}
                                    onAdd={onAdd}
                                  />
                                )));
            } catch (err) {
                console.error(err.message);
            }
        }
        fetchData();
    }, [] );
    return <Container className="d-flex justify-content-between">
                {items}
            </Container>
}

export default ShowPosts;
  
  





