import React from 'react';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

import '../style/header.css'

const Header_admin = () => {
    return (
        <Navbar expand="lg" className="header-navbar">
            <Container fluid className="header-container">
                
                <Navbar.Brand className="header-brand">
                    <img
                        src={require('../aset/logo-ngekos.png')}
                        alt="Logo"
                        className="header-logo"
                    />
                    Dasboard admin
                </Navbar.Brand>

                
                <Form className="d-flex mx-auto">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form>

                
                <div className="header-profile">
                    <Link to="/profile">
                        <CgProfile/>
                    </Link>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header_admin;
