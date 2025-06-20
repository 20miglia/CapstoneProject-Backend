import React from 'react'
import { Navbar, Nav, Container, NavDropdown, NavLink, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './StyleNavbar.css'; // Assuming you have a CSS file for styling
import corona6 from '../../assets/corona6.png'


function NavBar() {
         const navigate = useNavigate();

            const handleLogout = () => {
                localStorage.removeItem("token");
                navigate("/login");
            }
            






    return (
        <Navbar expand="lg" bg="dark" variant="dark" className='styleNavbar mb-3'>
            <Container>
                <Navbar.Brand href="#home" className='brand d-flex align-items-center'>Il Covo del Re<Image className='logo d-inline-block align-top ms-2 me-1' src={corona6} alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/profile">My-Profile</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                       <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
    )
}

export default NavBar
