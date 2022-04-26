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
    <Container>
        <Form onSubmit={handleValidateLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    onChange={handleInputChange}
                    name='email'
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name='password'
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
  )
}
