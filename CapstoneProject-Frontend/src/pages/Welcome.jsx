import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import './Welcome.css'
import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <Container>
            <Card className="cardWelcome text-center mt-5">
                <Card.Body>
                    <Card.Title><h2> Benvenuto nel Covo del Re </h2></Card.Title>
                    <Card.Text>
                        <h4>"Entra nell'affascinante mondo degli scacchi: impara, gioca e sfida la tua mente!"</h4>
                    </Card.Text>
                    <Button className='weButton' variant='dark' as={Link} to="/home">"Muovi i tuoi primi passi!"</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Welcome
