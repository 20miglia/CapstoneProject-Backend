import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import api from '../services/api.jsx';
import './StyleLogin.css';


function Login() {
     const navigate = useNavigate();
     const [error, setError] = useState('');

     const [playerLogin, setPlayerLogin] = useState({
        email: '',
        password: ''
     });


        const formHandler = (e) => {
            setPlayerLogin({
                ...playerLogin,
                [e.target.name]: e.target.value
            });
        }

    const formSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/auth/login', playerLogin);
            const token = response.data.token;
            localStorage.setItem("token", token);
            navigate("/home");
        }
        catch (err) {
            const msg = err.response?.data?.message || 'An error occurred during login';
            setError(msg);
        }

    }


    return (
        <Container className="loginContainer mt-5" style={{ maxWidth: '400px' }}>

            <Form onSubmit={formSubmit} className='mt-3 '>

                <Form.Group>
                    <Form.Label className='word'>Email</Form.Label>
                    <Form.Control className='controlForm' type="email" name="email" value={playerLogin.email} onChange={formHandler} required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className='word'>Password</Form.Label>
                    <Form.Control className='controlForm' type="password" name="password" value={playerLogin.password} onChange={formHandler} required/>
                </Form.Group>

                <Form.Group>
                    <Button type="submit" className='loginButton w-100 mt-3'>Login</Button>
                </Form.Group>

            </Form>

        </Container>
             



    )
}

export default Login
