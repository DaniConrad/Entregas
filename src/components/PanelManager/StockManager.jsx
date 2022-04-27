import React from 'react'
import { collection, getDocs} from "firebase/firestore"; 
import { db } from '../../firebase/config'
import { useEffect, useState } from 'react'
import StockManagerItem from './StockManagerItem';

export const StockManager = () => {
    const [items, setItems] = useState([]);

      useEffect( () => { 
        const productsRef = collection(db, 'products')
        getDocs(productsRef)
            .then (resp =>{
                const products = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                setItems(products)
            })
    }, [] );
    
    
  return (
    <div className='d-flex justify-content-center flex-wrap'>
        {items.map((product) => <StockManagerItem 
                                  product={product}  
                                  key={product.id}
                                />
                    )
        }
    </div>
  )
}

