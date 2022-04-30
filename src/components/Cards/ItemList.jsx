import React from 'react'
import {Container} from 'react-bootstrap'
import Filter from '../Filter/Filter'
import Item from './Item'

 const ItemList = ({items}) => {

  return (
    <div>
      <Container className='d-flex justify-content-center flex-wrap my-3'>
        <Filter />
        {items.map((product) => <Item product={product} key={product.id}/>)}
      </Container>
    </div>
  )
}

export default ItemList;