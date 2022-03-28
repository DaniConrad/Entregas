import React, {useEffect, useState}from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { ItemDetail } from './ItemDetail';
import { getStock } from '../mocks/Api'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState (null) ;
    const [loading, setLoading] = useState(true);

    const {itemId} = useParams()
    
    useEffect(() => {
      setLoading(true)
      getStock
      .then((res) => setProductDetail(res.find((prod) => prod.id === itemId)))
      .catch((err) => console.error(err.message))
      .finally(() => setLoading(false))
    
    }, [itemId])
    
  return (
    <div className="d-flex flex-column align-items-center">
        {loading ? <Spinner animation="border" variant="light" /> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer