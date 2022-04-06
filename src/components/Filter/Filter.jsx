import React from 'react'
import { Button, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../App.css'

const Filter = () => {
  return (
    <Container className='d-flex justify-content-center mt-1'>
        <div className='border border-2 border-secondary rounded p-2 ' style={{width: '28rem'}}>
        <h2 className='d-flex justify-content-center text-light text-color-standard'>Filtros</h2>
        <Container className='d-flex justify-content-center'>
            <Link to="/products"><Button  className='mx-1 '>Productos</Button></Link>
            <Link to="/category/crystal"><Button  className='mx-1 '>Cristalería</Button></Link>
            <Link to="/category/beer"><Button  className='mx-1 '>Cervezas</Button></Link>
        </Container>
</div>
    </Container>
  )
}

export default Filter