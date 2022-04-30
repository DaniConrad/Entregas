import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Error404 = () => {
  const navigate = useNavigate()

  const handleNavigate = () =>{
      navigate(-1)
  }

  return (
    <div className='container d-flex flex-column align-items-center py-5'>
      <h2 className='text-light'>Error 404</h2>
      <img src="https://i.ibb.co/Zgkh6RK/enlace-roto.png" alt="enlace-roto" border="0" width={'25%'}></img>
      <h3 className='text-light'>Parece que este link no existe.</h3>
      <button className='btn btn-secondary m-3' onClick={handleNavigate}>Volver atrás</button>
    </div>
  )
}


