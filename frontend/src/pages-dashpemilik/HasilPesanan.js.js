import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Spinner, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';

const HasilPesanan = () => {
    const [pesanan, setPesanan] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Ambil data pesanan dari backend
    const fetchPesanan = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/pesanan');
            setPesanan(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Gagal mengambil data pesanan.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPesanan();
    }, []); // Ambil data setiap kali komponen dimuat

    // Handle hapus pesanan
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "Data yang dihapus tidak dapat dikembalikan!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:5000/api/pesanan/${id}`);
                fetchPesanan(); // Ambil data terbaru setelah hapus
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Data pesanan berhasil dihapus.',
                });
            } catch (error) {
                console.error('Error deleting data:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: 'Terjadi kesalahan saat menghapus data.',
                });
            }
        }
    };

    // Format mata uang
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(amount);
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

    return (
        <div className="dashboard-pesanan">
            <h1 className="text-center mb-4">Hasil Pesanan</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nama Pemesan</th>
                        <th>Email</th>
                        <th>Metode Pembayaran</th>
                        <th>Kamar ID</th>
                        <th>Total Pembayaran</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {pesanan.map((p) => (
                        <tr key={p.id}>
                            <td>{p.nama_pemesan}</td>
                            <td>{p.email_pemesan}</td>
                            <td>{p.metode_pembayaran}</td>
                            <td>{p.kamar_id}</td>
                            <td>{formatCurrency(p.total_pembayaran)}</td>
                            <td>{p.status_pesanan}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => handleDelete(p.id)}
                                >
                                    Hapus
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default HasilPesanan;