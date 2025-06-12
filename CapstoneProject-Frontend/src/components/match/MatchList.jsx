import React from 'react'
import { Button, ListGroup, CardImg, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import api from '../../services/api.jsx'
import { Link } from 'react-router-dom'
import './StyleMatchList.css' // Assuming you have a CSS file for styling


function MatchList() {

        const [listMatch, setListMatch] = useState([]);

    // Simulated data for matches
    const allMatches = async () => {
        try {
            const response = await api.get('/events');
            setListMatch(response.data);
        }
        catch (err) {
            console.error('Error fetching matches:', err);
        }

    }

    useEffect(() => {
        allMatches();
    }, [])


    const deleteMatch = async (_id) => {
        try {
            const response = await api.delete(`/events/${_id}`);
            if (response.status === 200) {
                setListMatch(listMatch.filter(match => match._id !== _id));
            }
        }   
        catch (err) {
            console.error('Error deleting match:', err);
        }
    }

    return (
        
        <ListGroup className="mt-4">


            {listMatch.map((u,i) => (
                <ListGroup.Item key={i} className="d-flex justify-content-between align-items-center">
                    
                    <div>
                        <h4>{u.name}</h4>
                        <h6>{u.description}</h6>
                        <h5>{u.location}</h5>
                        <h5 className="badge bg-success rounded-pill">{u.date}</h5>
                    </div>
                  <Card >
                    <Card.Img className='styleCard' variant="top" src={u.matchlocation}/>
                  </Card>
                  <Button variant="warning" onClick={() => deleteMatch(u._id)} className='mx-2'>Elimina Evento</Button>
                  <Button as={Link} to={`/updatematch/${u._id}`}  variant="success">Modifica Evento</Button>
                  
                </ListGroup.Item>
            ))}
            
                <Button as={Link} to='/addmatch' variant="dark" className='w-100 mt-3'>Aggiungi il Tuo Evento Partita!</Button>
                
        </ListGroup>




    )
}

export default MatchList

