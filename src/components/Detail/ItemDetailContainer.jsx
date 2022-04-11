import React, {useEffect, useState}from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { ItemDetail } from './ItemDetail';
import { getStock } from '../mocks/Api'
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState (null) ;
    const [loading, setLoading] = useState(true);

    const {itemId} = useParams()
    
    useEffect(() => {
      setLoading(true)
    
      const docRef = doc(db, 'products', itemId)
      getDoc(docRef)
          .then (doc => {
            setProductDetail({id: doc.id, ...doc.data()})
          })
          .finally(() => setLoading(false))

    }, [itemId])
    
  return (
    <div className="d-flex flex-column align-items-center">
        {loading ? <Spinner animation="border" variant="light" /> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer