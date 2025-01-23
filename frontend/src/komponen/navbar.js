import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../aset/logo-ngekos.png';
import '../style/buttonnav.css';

const NavbarComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();  

    
    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <Navbar bg="light" data-bs-theme="light" fixed="top">
            <Container className="d-flex justify-content-between align-items-center">
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '40px', height: '40px', marginRight: '10px' }}
                    />
                    <span className="navbar-brand-text">NgekosAja</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={`mx-4 ${location.pathname === '/' ? 'active' : ''}`}
                        >
                            Beranda
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/pemilikkos"
                            className={`mx-4 ${location.pathname === '/pemilikkos' ? 'active' : ''}`}
                        >
                            Pemilik Kos
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/faq"
                            className={`mx-4 ${location.pathname === '/faq' ? 'active' : ''}`}
                        >
                            Faq
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/tentangkami"
                            className={`mx-4 ${location.pathname === '/tentangkami' ? 'active' : ''}`}
                        >
                            Tentang Kami
                        </Nav.Link>
                        
                    </Nav>
                    <div className="ms-4">
                        <button className="custom-buttonn" onClick={handleLoginClick}>
                            Masuk
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
