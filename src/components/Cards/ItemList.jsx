import React from 'react'
import {Container} from 'react-bootstrap'
import Item from './Item'

 const ItemList = ({items}) => {
  const onAdd = (count) =>{
  }

  return (
      <Container className='d-flex justify-content-between'>
        {items.map((product) => <Item onAdd={onAdd} product={product} key={product.id}/>)}
      </Container>
  )
}

export default ItemList;