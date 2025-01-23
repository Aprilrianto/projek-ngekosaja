import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';

const BuatPesanan = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [kamar, setKamar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        nama_pemesan: '',
        email_pemesan: '',
        metode_pembayaran: 'transfer_bank',
        catatan: '',
    });

    useEffect(() => {
        const fetchKamar = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/kamar/${id}`);
                if (response.data) {
                    setKamar(response.data);
                } else {
                    setError('Kamar tidak ditemukan.');
                }
            } catch (error) {
                console.error('Error fetching kamar:', error);
                setError('Terjadi kesalahan saat mengambil data kamar.');
            } finally {
                setLoading(false);
            }
        };
        fetchKamar();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...formData,
            kamar_id: id,
            total_pembayaran: kamar.harga,
        };
        console.log('Submitting payload:', payload);
        try {
            const response = await axios.post('http://localhost:5000/api/pesanan', payload);
            if (response.data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Pesanan berhasil dibuat!',
                }).then(() => {
                    // Navigasi ke halaman DetailPayment dengan membawa data pesanan
                    navigate('/detailpayment', {
                        state: {
                            pesanan: response.data, // Data pesanan dari backend
                            kamar: kamar, // Data kamar yang dipesan
                        },
                    });
                });
            }
        } catch (error) {
            console.error('Error creating pesanan:', error);
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Terjadi kesalahan saat membuat pesanan.',
            });
        }
    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-5">
                <Alert variant="danger">{error}</Alert>
            </div>
        );
    }

    if (!kamar) {
        return (
            <div className="container mt-5">
                <Alert variant="warning">Kamar tidak ditemukan.</Alert>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Buat Pesanan</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nama Pemesan</Form.Label>
                    <Form.Control
                        type="text"
                        name="nama_pemesan"
                        value={formData.nama_pemesan}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email Pemesan</Form.Label>
                    <Form.Control
                        type="email"
                        name="email_pemesan"
                        value={formData.email_pemesan}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Metode Pembayaran</Form.Label>
                    <Form.Select
                        name="metode_pembayaran"
                        value={formData.metode_pembayaran}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="transfer_bank">Transfer Bank</option>
                        <option value="e_wallet">E-Wallet</option>
                        <option value="kartu_kredit">Kartu Kredit</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Catatan</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="catatan"
                        value={formData.catatan}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Buat Pesanan
                </Button>
            </Form>
        </div>
    );
};

export default BuatPesanan;