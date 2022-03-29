import React from 'react'
import {Container} from 'react-bootstrap'
import Item from './Item'

 const ItemList = ({items}) => {
  const onAdd = (count) =>{
  }

  return (
    <div>
      <Container className='d-flex justify-content-center flex-wrap my-3'>
        {items.map((product) => <Item onAdd={onAdd} product={product} key={product.id}/>)}
      </Container>
    </div>
  )
}

export default ItemList;