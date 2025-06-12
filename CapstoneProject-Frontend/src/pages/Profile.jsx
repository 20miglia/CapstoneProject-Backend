import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
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
        
        <Container className='profileContainer mt-5 mb-5 w-25'>
            <Row >
                <Col className='colProfile p-3 mb-5' xs={12}>
                <div>
                    <div>
                        <h3 className='profileDiv'>Fullname: {profileData.fullname}</h3>
                    </div>

                    <div>
                        <h3>Username: {profileData.username}</h3>
                    </div>

                    <div>
                        <h3>Email: {profileData.email}</h3>
                    </div>

                    <div>
                        <h3>Password: ********</h3>
                    </div>
                    <Button as={Link} to="/updateprofile">Update Profile</Button>
                </div>
                
                </Col>
            </Row>
        </Container >

       

        

    )
}

export default Profile
