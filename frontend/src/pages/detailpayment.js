import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineShareAlt, AiOutlineDownload } from 'react-icons/ai';
import { jsPDF } from 'jspdf';
import '../style/detailpay.css'
import bg from '../aset/kos 1.jpg';

const DetailPayment = () => {
    const [showModal, setShowModal] = useState(false);

    const handlePayClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    // Function to handle the PDF download
    const handleDownload = () => {
        const doc = new jsPDF();

        // Adding content to the PDF
        doc.text('Pembayaran berhasil', 10, 10);
        doc.text('Nomor Pemesanan: AJA/2024/0390', 10, 20);
        doc.text('Tanggal Pembayaran: 20 Sep 2024', 10, 30);
        doc.text('Metode Pembayaran: Transfer Bank BCA', 10, 40);
        doc.text('Penerima: Ratna Fitri', 10, 50);
        doc.text('Total Pembayaran: Rp430.000', 10, 60);

        // Trigger the download of the PDF file
        doc.save('bukti-pembayaran.pdf');
    };

    return (
        <Container className="detail-payment">
            <div className="d-flex align-items-center mb-3">
                <Link to="/" className="icon-back me-2">
                    <AiOutlineArrowLeft size={24} />
                </Link>
                <h3>Sewa Kos</h3>
            </div>

            <Row className="mt-4">
                <Col md={6}>
                    <div className="payment-box">
                        <h5 className="section-title">Detail Sewa</h5>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p>Check-in</p>
                                <p className="text-muted">27 September 2024</p>
                            </div>
                            <a href="#ubah">Ubah</a>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p>Durasi Sewa</p>
                                <p className="text-muted">Bulanan</p>
                            </div>
                            <a href="#ubah">Ubah</a>
                        </div>
                    </div>

                    <div className="payment-box">
                        <h5 className="section-title">Metode Pembayaran</h5>
                        <Form.Select>
                            <option>BANK CENTRAL ASIA</option>
                            <option>Bank Mandiri</option>
                            <option>Bank BNI</option>
                        </Form.Select>
                        <p className="mt-3">Nomor Virtual Account</p>
                        <div className="virtual-account-box">
                            <div className="d-flex align-items-center">
                                <span className="fw-bold">12345 6789 012345</span>
                                <Button variant="link" className="ms-3">📋</Button>
                            </div>
                        </div>
                    </div>

                    <div className="payment-box">
                        <h5 className="section-title">Kesepakatan Sewa & Kebijakan Kos</h5>
                        <Form.Check type="checkbox" label="Saya memahami dan menyetujui seluruh syarat, ketentuan, serta kebijakan refund dan peraturan kos." />
                    </div>
                    <Button className="button-pay mt-3" onClick={handlePayClick}>Bayar Sekarang</Button>
                </Col>

                <Col md={6}>
                    <div className="payment-box d-flex">
                        <Image src={bg} rounded />
                        <div className="ms-3">
                            <h5>Kost Harmoni Asri</h5>
                            <p className="text-muted">Putri</p>
                            <p className="text-muted">
                                <span role="img" aria-label="location">📍</span> Tipes, Surakarta
                                <span role="img" aria-label="star">⭐</span> 4.9
                            </p>
                        </div>
                    </div>

                    <div className="payment-box">
                        <h5 className="section-title">Detail Pembayaran</h5>
                        <div className="d-flex justify-content-between">
                            <p>Biaya Sewa Bulanan</p>
                            <p>Rp400.000</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Biaya Air</p>
                            <p>Rp20.000</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Biaya Kebersihan</p>
                            <p>Rp10.000</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p><strong>Total Pembayaran</strong></p>
                            <p><strong>Rp430.000</strong></p>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Payment Success Modal */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <div className="d-flex justify-content-center mb-3">
                        <div style={{ fontSize: '4rem', color: '#059b28' }}>✓</div>
                    </div>
                    <h4>Pembayaran Berhasil</h4>
                    <p>Terima kasih. Pembayaran Anda telah kami terima.</p>
                    <div className="payment-box text-start">
                        <p><strong>Nomor Pemesanan :</strong> AJA/2024/0390</p>
                        <p><strong>Tanggal Pembayaran :</strong> 20 Sep 2024</p>
                        <p><strong>Metode Pembayaran :</strong> Transfer Bank BCA</p>
                        <p><strong>Penerima :</strong>Ratna Fitri</p>
                        <p><strong>Total Pembayaran :</strong>Rp430.000</p>
                    </div>
                    <div className="d-flex justify-content-around mt-3">
                        <Button variant="outline-success" className="d-flex align-items-center">
                            <AiOutlineShareAlt className="me-2" /> Bagikan
                        </Button>
                        <Button variant="outline-success" className="d-flex align-items-center" onClick={handleDownload}>
                            <AiOutlineDownload className="me-2" /> Unduh Bukti
                        </Button>
                    </div>
                    <Button className="button-pay mt-3" onClick={handleClose}>Selesai</Button>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default DetailPayment;
