import React from 'react'
import { Container, Row, Col, CardText } from 'react-bootstrap'
import AddMatch from './AddMatch';
import api from '../../services/api.jsx'
import { useState } from 'react'
import MatchList from './MatchList.jsx';


function MatchArea() {
    
        

    
      

    return (
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center">
            <Col md={8}>
            <h1 className="text-center mb-4">Match Area</h1>
            <p className="text-center">Qui puoi trovare tutte le partite e gli eventi in programma nella tua zona. Unisciti a noi per giocare e divertirti!</p>
            <p className="text-center">Restate sintonizzati per scoprire le prossime partite ed eventi!</p>
            <MatchList/>
            </Col>
          </Row>
        
        </Container>

        
    )
}

export default MatchArea

