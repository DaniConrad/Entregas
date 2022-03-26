import React, {useEffect, useState}from 'react'
import { Spinner } from 'react-bootstrap'
import { ItemDetail } from './ItemDetail';
import {getStock} from '../mocks/Api'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState ({}) ;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true)
      getStock
      .then((res) => setProductDetail(res.find((prod) => prod.id === '03')))
      .catch((err) => console.error(err.message))
      .finally(() => setLoading(false))
    
    }, [])
    
  return (
    <div className="d-flex flex-column align-items-center">
        {loading ? <Spinner animation="border" variant="light" /> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer