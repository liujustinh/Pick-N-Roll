import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useField } from '../hooks/useField'
import './LoginForm.css'

const LoginForm = (props) => {
    const [username, resetUsername] = useField('text')
    const [password, resetPassword] = useField('text')

    const history = useHistory()

    const resetForms = () => {
        resetUsername()
        resetPassword()
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            if (username.value.length === 0 || password.value.length === 0) {
                console.log('Username or password field(s) empty')
                return
            }
            console.log(`Username: ${username.value}, Password: ${password.value}`)
        }
        catch (error) {
            resetForms()
        }
    }

    return (
        <Container className='login'>
            <Form onSubmit={handleLogin}>
                <h1 className='login__title'>
                    Member Login
                </h1>
                <Form.Group controlId='formBasicUsername'>
                    <Form.Label style={{fontFamily: "“Helvetica Neue”, Helvetica, Arial, sans-serif"}}>Username</Form.Label>
                    <Form.Control {...username} placeholder='Enter username'/>
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                    <Form.Label style={{fontFamily: "“Helvetica Neue”, Helvetica, Arial, sans-serif"}}>Password</Form.Label>
                    <Form.Control {...password} placeholder='Enter password'/>
                </Form.Group>
                <Button variant='primary' type='submit' className='login__button'>Login</Button>
            </Form>
        </Container>
    )
}

export default LoginForm
