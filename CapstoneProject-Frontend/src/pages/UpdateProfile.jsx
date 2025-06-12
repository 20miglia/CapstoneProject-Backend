import React from 'react'
import { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import api from '../services/api.jsx';      
import { useNavigate } from 'react-router-dom';




function UpdateProfile() {
   const [userId, setUserId] = useState();

    const [player, setPlayer] = useState({
        fullname: '',
        username: '',
        email: '',
        password: ''
    });

   const navigate = useNavigate();

   useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(`/users/me`);
                setPlayer({
                    fullname: res.data.fullname || '',
                    username: res.data.username || '',
                    email: res.data.email || '',
                    password: '' // Non lo mostriamo mai
                });
                setUserId(res.data._id)
            } catch (err) {
                console.error('Errore durante il fetch del profilo', err);
            }
        };
        fetchData();
    }, []);


    const formHandler = (e) => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        });
    }

    

    const formUpdateSubmitHandler = async (e) => {
        e.preventDefault();

        try {        

            

            
            const response = await api.put(`/users/${userId}`, player);
            if (response.status === 200) {
                alert('Profile updated successfully');
                navigate('/profile'); // Redirect to profile page after update
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
        }
    }   
        

         


    


    return (
          <Container className="mt-5 w-50">
            <h2>Modifica Profilo</h2>
            <Form onSubmit={formUpdateSubmitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullname"
                        value={player.fullname}
                        onChange={formHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={player.username}
                        onChange={formHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={player.email}
                        onChange={formHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password (opzionale)</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={player.password}
                        onChange={formHandler}
                        placeholder="Lascia vuoto per non modificare"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Salva modifiche
                </Button>
            </Form>
        </Container>
       


    )
}

export default UpdateProfile
