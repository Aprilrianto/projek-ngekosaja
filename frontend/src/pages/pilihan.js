import '../style/card.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const Pilihan = () => {
    const targetDate = new Date('2024-12-31T23:59:59');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [kamar, setKamar] = useState([]);

    // Fungsi untuk menghitung waktu tersisa
    function calculateTimeLeft() {
        const now = new Date();
        const difference = targetDate - now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 4, hours: 20, minutes: 20, seconds: 30 };
        }

        return timeLeft;
    }

    // Ambil data kamar dari backend
    const fetchKamar = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/kamar');
            setKamar(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        fetchKamar(); // Ambil data kamar saat komponen pertama kali di-render

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="pilihan">
            <Container fluid>
                <Row className="promo-header">
                    <Col>
                        <h1 className="mt-5">Promo Gede Gedean!</h1>
                    </Col>
                    <Col className="text-end">
                        <button className="button-lihat-semua mt-5">Lihat Semua</button>
                    </Col>
                </Row>
                <div className="countdown-display mt-3 p-3">
                    {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </div>

                <Row className="mt-5">
                    {kamar.map((data) => (
                        <Col md={3} key={data.id} className="mb-4">
                            <Link to={`/buat-pesanan/${data.id}`} className="text-decoration-none">
                                <Card className="h-100 shadow-sm">
                                    <Card.Img
                                        variant="top"
                                        src={`http://localhost:5000/uploads/${data.gambar}`}
                                        alt={data.nomor_kamar}
                                    />
                                    <Card.Body>
                                        <Badge bg="light" text="dark" className="mb-2">
                                            {data.tipe_kamar}
                                        </Badge>
                                        <Card.Title>{data.nomor_kamar}</Card.Title>
                                        <Card.Text className="text-muted mb-1">
                                            <i className="bi bi-geo-alt-fill text-success"></i> {data.deskripsi}
                                        </Card.Text>
                                        <Card.Text className="text-warning mb-1">
                                            <i className="bi bi-star-fill"></i> 4.9 (24)
                                        </Card.Text>
                                        <Card.Text className="text-muted text-decoration-line-through">
                                            Rp 500.000
                                        </Card.Text>
                                        <div className="d-flex align-items-center">
                                            <Badge bg="danger" className="me-2">12%</Badge>
                                            <Card.Text className='Harga'>
                                                Rp {data.harga}/Bulan
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Pilihan;