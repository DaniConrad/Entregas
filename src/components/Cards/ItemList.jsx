import React from 'react'
import {Container} from 'react-bootstrap'
import Item from './Item'

 const ItemList = ({items}) => {

  return (
    <div>
      <Container className='d-flex justify-content-center flex-wrap my-3'>
        {items.map((product) => <Item product={product} key={product.id}/>)}
      </Container>
    </div>
  )
}

export default ItemList;