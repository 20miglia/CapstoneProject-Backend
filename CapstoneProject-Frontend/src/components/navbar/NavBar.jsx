import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './StyleNavbar.css'; // Assuming you have a CSS file for styling


function NavBar() {
         const navigate = useNavigate();

            const handleLogout = () => {
                localStorage.removeItem("token");
                navigate("/login");
            }
            






    return (
        <Navbar expand="lg" bg="dark" variant="dark" className='styleNavbar mb-3'>
            <Container>
                <Navbar.Brand href="#home">Il Covo del Re</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/profile">My Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar
