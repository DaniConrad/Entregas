import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

export const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if (loading === true ) {
        return <h1>loading</h1>
      }

    if (!user) {
        return <Navigate to='/login' />
    }

    return <>{children}</>
}
