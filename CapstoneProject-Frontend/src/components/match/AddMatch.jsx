import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap';
import api from '../../services/api.jsx';

function AddMatch() {
    const [alertMsg, setAlertMsg] = useState('');
    const [viewMessage, setViewMessage] = useState(false);
    const [image, setImage] = useState();

    const [match, setMatch] = useState({
        name: '',
        date: '',
        location: '',
        description: ''
    })

    
    
    const formMatchHandler = (e) => {
        setMatch({
            ...match,
            [e.target.name]: e.target.value
        })
    }

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const formSubmitMatchHandler = async (e) => {
        e.preventDefault();

        try {
            if (!match.name || !match.date || !match.location || !match.description) {
                setViewMessage(true);   
                setAlertMsg('All fields are required');
                setTimeout(() => setViewMessage(false), 5000);
                return;
            }

            

            const newMatch = {
                name: match.name,
                date: match.date,
                location: match.location,
                description: match.description
            }

            const response = await api.post('/events', newMatch);
            if (response.status === 201 || response.status === 200) {
                const createdEvent = response.data;

                if (image) {
                    const formData = new FormData();
                    formData.append('matchlocation', image);

                    await api.patch(`/events/${createdEvent._id}/image`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });

                    
                }






                setViewMessage(true);
                setAlertMsg('Match added successfully');
                setTimeout(() => setViewMessage(false), 5000);
                setMatch([...match, response.data]);
                setImage(null);
            }
           }  


        catch (err) {
            const msg = err.response?.data?.message || 'An error occurred while adding the match';
            setViewMessage(true);
            setAlertMsg(msg);
            setTimeout(() => setViewMessage(false), 5000);
        }
    }








    return (
        <div className='AddMatchContainer w-50 mx-auto mt-5'>

            <Form onSubmit={formSubmitMatchHandler}>

                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" value={match.name} onChange={formMatchHandler} required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" name="date" value={match.date} onChange={formMatchHandler} required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="location" name="location" value={match.location} onChange={formMatchHandler} required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" accept="image/*" onChange={imageHandler} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="description" name="description" value={match.description} onChange={formMatchHandler} required/>
                </Form.Group>

                <Form.Group>
                    <Button variant="primary" type='submit' className='w-100 mt-3'>Add-Match</Button>
                </Form.Group>

            </Form>

        </div>
    )
}

export default AddMatch
