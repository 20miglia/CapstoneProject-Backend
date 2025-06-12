import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import api from '../../services/api.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get matchId from URL


function UpdateMatch() {
    const [viewMessage, setViewMessage] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    
    const {id} = useParams(); // Assuming matchId is passed as a URL parameter


     const [match, setMatch] = useState({
        name: '',
        date: '',
        location: '',
        description: ''
    });

    const navigate = useNavigate();

    const formUpdateMatchHandler = (e) => {
        setMatch({
            ...match,   
            [e.target.name]: e.target.value
        })

    }


    
   const fetchMatch = async () => {
        try {
            const response = await api.get(`/events/${id}`);
            console.log("Dati caricati:", response.data);
            if (response.status === 200) {
                setMatch({
                    name: response.data.name || '',
                    date: response.data.date?.split('T')[0] || '',
                    location: response.data.location || '',
                    description: response.data.description || ''
                });
                
            }
        } 
        
        catch (err) {
            const msg = err.response?.data?.message || 'An error occurred while fetching the match';
            setViewMessage(true);
            setAlertMsg(msg);
            setTimeout(() => setViewMessage(false), 5000);
        }
    }

    useEffect(() => {
        console.log("ID da URL:", id);
         fetchMatch();
    }, [id]); // Fetch match data when matchId changes




    





    const formSubmitUpdateMatchHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await api.put(`/events/${id}`, match);
            if (response.status === 200) {
                setViewMessage(true);
                setAlertMsg('Match updated successfully');
                setTimeout(() => setViewMessage(false), 5000);
                navigate('/matcharea'); // Redirect to match area after update
                

            }
        } catch (err) {
            const msg = err.response?.data?.message || 'An error occurred while updating the match';
            setViewMessage(true);
            setAlertMsg(msg);
            setTimeout(() => setViewMessage(false), 5000);
        }
    }       
        

   




    return (
        <div className='UpdateMatchContainer'>

            <Form onSubmit={formSubmitUpdateMatchHandler} className='w-50 mx-auto mt-5'>

                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={match.name} onChange={formUpdateMatchHandler}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" name="date" value={match.date} onChange={formUpdateMatchHandler}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" name="location" value={match.location} onChange={formUpdateMatchHandler}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={match.description} onChange={formUpdateMatchHandler}/>
                </Form.Group>

                <Form.Group>
                    <Button variant="primary" type='submit' className='w-100 mt-3'>Update-Match</Button>
                </Form.Group>

            </Form>

        </div>
    )
}

export default UpdateMatch
