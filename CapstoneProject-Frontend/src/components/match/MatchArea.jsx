import React from 'react'
import { Container, Row, Col, CardText } from 'react-bootstrap'
import AddMatch from './AddMatch';
import api from '../../services/api.jsx'
import { useState } from 'react'
import MatchList from './MatchList.jsx';
import './StyleMatchArea.css'


function MatchArea() {
    
        

    
      

    return (
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center">
            <Col md={8}>
            <h1 className="text-center mb-4">Match nelle Tue Vicinanze!</h1>
            <h3 className="text-center">"Qui puoi trovare tutte le partite e gli eventi in programma nella tua zona. <br /> Inoltre potrai creare anche il tuo evento personale. <br /> Unisciti alla community per giocare e divertiti!"</h3>
            <MatchList/>
            </Col>
          </Row>
        
        </Container>

        
    )
}

export default MatchArea

