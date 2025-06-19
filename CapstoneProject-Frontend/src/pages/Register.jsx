import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import api from '../services/api.jsx';
import './StyleRegister.css';


function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [viewMessage, setViewMessage] = useState(false);
    
    const [player, setPlayer] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        verified: ''
    });



    const formHandler = (e) => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })
    }


    const formSubmitHandler = async (e) => {
          e.preventDefault();

          try {
            if (!player.fullname || !player.username || !player.email || !player.password) {
                setViewMessage(true);
                setError('All fields are required');
                setTimeout(() => setViewMessage(false), 5000);
                return;
               }

               
               const newPlayer = {  
                fullname: player.fullname,
                username: player.username,
                email: player.email,
                password: player.password,
                verified: false
                }

                const response = await api.post('/auth/register', newPlayer);
                if (response.status === 201 || response.status === 200) {
                    localStorage.setItem("token", response.data.token )
                    navigate("/login")
                   }
            }
                

        
          catch (err) {
                const msg = err.response?.data?.message || 'An error occurred during registration';
                setViewMessage(true);
                setError(msg);
                setTimeout(() => setViewMessage(false), 5000);
            }

    }




    return (
        <Container className='registerContainer mt-5' style={{ maxWidth: '400px' }} >
        

            <Form onSubmit={formSubmitHandler}>

                <Form.Group>
                    <Form.Label className='word'>Fullname</Form.Label>
                    <Form.Control className='controlForm' type="fullname" name="fullname" value={player.fullname} onChange={formHandler} required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className='word'>Username</Form.Label>
                    <Form.Control className='controlForm' type="username" name="username" value={player.username} onChange={formHandler} required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className='word'>Email</Form.Label>
                    <Form.Control className='controlForm' type="email" name="email" value={player.email} onChange={formHandler} required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className='word'>Password</Form.Label>
                    <Form.Control className='controlForm' type="password" name="password" value={player.password} onChange={formHandler} required/>
                </Form.Group>

                <Form.Group>
                    <Button type='submit' className='registerButton w-100 mt-3'>Register</Button>
                </Form.Group>

            </Form>
           
        
        </Container>
    )
}

export default Register
