import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { StockManager } from './StockManager';

const PanelManager = () => {

  const { user, logout, loading } = useContext(AuthContext)
  const handleLogout = async() =>{
    await logout()
  }

  if (loading === true ) {
    return <h1>loading</h1>
  }
  
  return (
    <div>
       <h2>Hola {user.email}</h2> 
       <button onClick={handleLogout}>Logout</button>
       <StockManager />
    </div>
  )
}

export default PanelManager