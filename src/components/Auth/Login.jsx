import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm'

export const Login = () => {

    const initialForm = {
        email: '',
        password: '',
    }

    const {handleInputChange, handleValidateLogin} = useForm(initialForm)
    
  return (
    <Container className='d-flex align-items-center flex-column'>
        <Form onSubmit={handleValidateLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-light'>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Ingresa el email" 
                    onChange={handleInputChange}
                    name='email'
                    className='login-form-input'
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-light'>Contraseña</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Contraseña" 
                    name='password'
                    onChange={handleInputChange}
                    className='login-form-input'
                />
            </Form.Group>
            <Button className='btn-standard' type="submit">
                Ingresar
            </Button>
        </Form>
    </Container>
  )
}
