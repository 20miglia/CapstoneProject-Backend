import React from 'react'
import { Button, ListGroup, CardImg, Card, Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import api from '../../services/api.jsx'
import { Link } from 'react-router-dom'
import './StyleMatchList.css' 


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
                <ListGroup.Item key={i} >
                    <Row className="g-3 align-items-center">
                    <Col xs={12} md={5}>
                        <h5 className='mod'> {u.name}</h5>
                        <h6>- {u.description}</h6>
                        <h5>- {u.location}</h5>
                        <h5>- {u.date}</h5>
                    </Col>
                <Col xs={12} md={4}>
                  <Card className="h-100 ">
                    <Card.Img className='styleCard' variant="top" src={u.matchlocation}/>
                  </Card>
                </Col>

                <Col xs={12} md={3} className="d-flex flex-column gap-2">
                  <Button className='bt2'  onClick={() => deleteMatch(u._id)}>Elimina Evento</Button>
                  <Button className='bt2' as={Link} to={`/updatematch/${u._id}`}  >Modifica Evento</Button>
                </Col>
                  </Row>
                </ListGroup.Item>
            ))}
            
                <Button as={Link} to='/addmatch' className='bt1 w-100 mt-3'>Aggiungi il Tuo Evento Partita!</Button>
                
        </ListGroup>




    )
}

export default MatchList

