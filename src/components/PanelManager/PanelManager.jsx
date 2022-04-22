import React from 'react'
import { useAuth } from '../../Context/AuthContext'

const PanelManager = () => {

  const { user, logout, loading } = useAuth()

  console.log(user);

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
    </div>
  )
}

export default PanelManager