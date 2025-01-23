import { Navbar, Container } from 'react-bootstrap';
const headerpay = () => {
    return (
        <Navbar expand="lg" className="header-navbar">
        <Container fluid className="header-container">
            
            <Navbar.Brand className="header-brand">
                <img
                    src={require('../aset/logo-ngekos.png')}
                    alt="Logo"
                    className="header-logo"
                />
               NgekosAja
            </Navbar.Brand>
        </Container>
    </Navbar>
    )
}
export default headerpay;