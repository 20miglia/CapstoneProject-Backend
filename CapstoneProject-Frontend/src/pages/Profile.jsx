import React from 'react'
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import api from '../services/api'
import './StyleProfile.css'
import { Link } from 'react-router-dom'



function Profile() {
    const [profileData, setProfileData] = useState([]);

    const fetchProfileData = async () => {
        try {
            const response = await api.get('/users/me');
            setProfileData(response.data);
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
    }
    useEffect(() => {
        fetchProfileData();
    }, []);









    return (
        
        <Container className='profileContainer mt-5 mb-5 d-flex'> 
            <Row className="w-100" style={{ maxWidth: '600px' }}>
                <Col xs={12} className='colProfile p-3 mb-5'>
                  
                   <div>
                    <div className='ser'>
                        <h4 className='pot'>Fullname: {profileData.fullname} </h4>
                    </div>

                    <div className='ser'>
                        <h4 className='pot'>Username: {profileData.username}</h4>
                    </div>

                    <div className='ser'>
                        <h4 className='pot'>Email: {profileData.email}</h4>
                    </div>

                    <div className='ser'>
                        <h4 className='pot'>Password: ********</h4>
                    </div>
                    <Button className='btUpdate w-100 mt-3' as={Link} to="/updateprofile">Update Profile</Button>
                   </div>
                  
                </Col>
            </Row>
        </Container >

       

        

    )
}

export default Profile
