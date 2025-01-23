import '../style/card.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button'; // Import Button

// Mengambil gambar
import kos1 from '../aset/kos 1.jpg';
import kos2 from '../aset/kos 2.jpg';
import kos3 from '../aset/kos 3.jpg';
import kos4 from '../aset/kos 4.jpg';
import bg1 from '../aset/bg1.jpg';
import bg2 from '../aset/bg2.jpg';
import bg3 from '../aset/bg3.jpg';
import bg4 from '../aset/bg4.jpg';

const rekomendasi = () => {
    const cardData = [
        {
            image: kos1,
            title: "Kos Putri Harmoni Asri",
            location: "Cemara Indah, Mutiara",
            rating: "4.9 (24)",
            originalPrice: "Rp 454.000",
            discountedPrice: "Rp 400.000/Bulan",
            discount: "12%",
            category: "Putri"
        },
        {
            image: kos2,
            title: "Kos rozi",
            location: "Jl. Melati No.12",
            rating: "4.8 (30)",
            originalPrice: "Rp 500.000",
            discountedPrice: "Rp 450.000/Bulan",
            discount: "10%",
            category: "Putra"
        },
        {
            image: kos3,
            title: "Kos Putri Rahayu",
            location: "Jl. Rahayu No.15",
            rating: "4.7 (20)",
            originalPrice: "Rp 480.000",
            discountedPrice: "Rp 430.000/Bulan",
            discount: "10%",
            category: "Putri"
        },
        {
            image: kos4,
            title: "Kos Putri Bunga",
            location: "Jl. Bunga No.5",
            rating: "4.6 (18)",
            originalPrice: "Rp 460.000",
            discountedPrice: "Rp 420.000/Bulan",
            discount: "9%",
            category: "Putri"
        },
        {
            image: bg1,
            title: "Kos Putri Bunga",
            location: "Jl. Bunga No.5",
            rating: "4.6 (18)",
            originalPrice: "Rp 460.000",
            discountedPrice: "Rp 420.000/Bulan",
            discount: "9%",
            category: "Putri"
        },
        {
            image: bg2,
            title: "Kos Putri Bunga",
            location: "Jl. Bunga No.5",
            rating: "4.6 (18)",
            originalPrice: "Rp 460.000",
            discountedPrice: "Rp 420.000/Bulan",
            discount: "9%",
            category: "Putri"
        },
        {
            image: bg3,
            title: "Kos Putri Bunga",
            location: "Jl. Bunga No.5",
            rating: "4.6 (18)",
            originalPrice: "Rp 460.000",
            discountedPrice: "Rp 420.000/Bulan",
            discount: "9%",
            category: "Putri"
        },
        {
            image: bg4,
            title: "Kos Putri Bunga",
            location: "Jl. Bunga No.5",
            rating: "4.6 (18)",
            originalPrice: "Rp 460.000",
            discountedPrice: "Rp 420.000/Bulan",
            discount: "9%",
            category: "Putri"
        },
    ];

    return (
        <div className="rekomendasi">
            <Container fluid>
            <Row className="mt-5">
                <Col className="d-flex align-items-center justify-content-between">
                    <h1 className="rekomendasi">Rekomendasi</h1>
                    <button className="button-lihat-semua mt-5">Lihat Semua</button>
                </Col>
            </Row>
                <Row className="mt-5">
                    {cardData.slice(0, 4).map((data, index) => (
                        <Col md={3} key={index} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img 
                                    variant="top" 
                                    src={data.image} 
                                    alt={`Kos Image ${index + 1}`} 
                                />
                                <Card.Body>
                                    <Badge bg="light" text="dark" className="mb-2">{data.category}</Badge>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text className="text-muted mb-1">
                                        <i className="bi bi-geo-alt-fill text-success"></i> {data.location}
                                    </Card.Text>
                                    <Card.Text className="text-warning mb-1">
                                        <i className="bi bi-star-fill"></i> {data.rating}
                                    </Card.Text>
                                    <Card.Text className="text-muted text-decoration-line-through">
                                        {data.originalPrice}
                                    </Card.Text>
                                    <div className="d-flex align-items-center">
                                    <Badge bg="danger" className="me-2">{data.discount}</Badge>
                                    <Card.Text className="Harga">
                                             {data.discountedPrice}
                                    </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row className="mt-5">
                    {cardData.slice(4, 8).map((data, index) => (
                        <Col md={3} key={index} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img 
                                    variant="top" 
                                    src={data.image} 
                                    alt={`Kos Image ${index + 5}`} // Update index for alt text
                                />
                                <Card.Body>
                                    <Badge bg="light" text="dark" className="mb-2">{data.category}</Badge>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text className="text-muted mb-1">
                                        <i className="bi bi-geo-alt-fill text-success"></i> {data.location}
                                    </Card.Text>
                                    <Card.Text className="text-warning mb-1">
                                        <i className="bi bi-star-fill"></i> {data.rating}
                                    </Card.Text>
                                    <Card.Text className="text-muted text-decoration-line-through">
                                        {data.originalPrice}
                                    </Card.Text>
                                    <div className="d-flex align-items-center">
                                        <Badge bg="danger" className="me-2">{data.discount}</Badge>
                                        <Card.Text className='Harga'>
                                            {data.discountedPrice}
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default rekomendasi;
