import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {



    return (
        <Container>
            <div className='text-center mt-5'>
                <h1>Home Page</h1>
                <p>Benvenuto nell'home page della mia applicazione!</p>
                <p>Qui puoi trovare gli ultimi aggiornamenti e funzionalità.</p>
                <p>Sentitevi liberi di esplorare e godervi il vostro soggiorno nell'affascinante mondo degli scacchi!</p>
            </div>
            <Button as={Link} to="/matcharea" variant="dark" className='w-100 mt-3'>Clicca qui per visualizzare i match vicino casa e partecipa!</Button>
        </Container>
    )
}

export default Home
