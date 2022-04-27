import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthContext'
import { StockManager } from './StockManager';

const PanelManager = () => {

  const { logout, loading } = useContext(AuthContext)
  const handleLogout = async() =>{
    await logout()
  }

  if (loading === true ) {
    return <Spinner animation="border" variant="light" />
  }
  
  return (
    <div className='mx-2 text-light'>
       <h2>Hola administrador</h2> 
       <button onClick={handleLogout} className='btn btn-secondary'>Cerrar sesión</button>
       <StockManager />
    </div>
  )
}

export default PanelManager