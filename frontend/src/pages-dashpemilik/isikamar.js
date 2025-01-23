import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form, Table, Spinner, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Isikamar = () => {
  const [kamar, setKamar] = useState([]);
  const [formData, setFormData] = useState({
    nomor_kamar: '',
    tipe_kamar: '',
    harga: '',
    deskripsi: '',
    status: 'tersedia',
    gambar: null,
  });
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil data kamar dari backend
  const fetchKamar = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/kamar');
      setKamar(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Terjadi kesalahan saat mengambil data kamar.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKamar();
  }, []);

  // Handle perubahan input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle perubahan file gambar
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      gambar: e.target.files[0],
    });
  };

  // Handle submit form (tambah/edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('nomor_kamar', formData.nomor_kamar);
    data.append('tipe_kamar', formData.tipe_kamar);
    data.append('harga', formData.harga);
    data.append('deskripsi', formData.deskripsi);
    data.append('status', formData.status);
    if (formData.gambar) {
      data.append('gambar', formData.gambar);
    }

    try {
      if (editId) {
        // Jika editId ada, lakukan update
        await axios.put(`http://localhost:5000/api/kamar/${editId}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setEditId(null);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data kamar berhasil diperbarui.',
        });
      } else {
        // Jika editId tidak ada, lakukan tambah data
        await axios.post('http://localhost:5000/api/kamar', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data kamar berhasil ditambahkan.',
        });
      }
      fetchKamar(); // Ambil data terbaru setelah tambah/edit
      setFormData({
        nomor_kamar: '',
        tipe_kamar: '',
        harga: '',
        deskripsi: '',
        status: 'tersedia',
        gambar: null,
      });
      setShowModal(false); // Tutup modal setelah submit
    } catch (error) {
      console.error('Error submitting data:', error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Terjadi kesalahan saat menyimpan data.',
      });
    }
  };

  // Handle edit data
  const handleEdit = (kamar) => {
    setFormData({
      ...kamar,
      gambar: null,
    });
    setEditId(kamar.id);
    setShowModal(true); // Buka modal saat edit
  };

  // Handle hapus data
  const handleDelete = async (id) => {
    // Konfirmasi sebelum menghapus
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
        await axios.delete(`http://localhost:5000/api/kamar/${id}`);
        fetchKamar(); // Ambil data terbaru setelah hapus
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data kamar berhasil dihapus.',
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
    <div className="dashboard-kamar">
      <h1 className="text-center mb-4">Manajemen Kamar</h1>

      {/* Tombol Tambah Kamar */}
      <Button variant="primary" onClick={() => setShowModal(true)} className="mb-4">
        Tambah Kamar
      </Button>

      {/* Modal untuk Tambah/Edit Kamar */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Edit Kamar' : 'Tambah Kamar'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nomor Kamar</Form.Label>
              <Form.Control
                type="text"
                name="nomor_kamar"
                placeholder="Nomor Kamar"
                value={formData.nomor_kamar}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipe Kamar</Form.Label>
              <Form.Control
                type="text"
                name="tipe_kamar"
                placeholder="Tipe Kamar"
                value={formData.tipe_kamar}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                placeholder="Harga"
                value={formData.harga}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                name="deskripsi"
                placeholder="Deskripsi"
                value={formData.deskripsi}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="tersedia">Tersedia</option>
                <option value="terisi">Terisi</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gambar</Form.Label>
              <Form.Control
                type="file"
                name="gambar"
                onChange={handleFileChange}
                accept="image/*"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editId ? 'Update Kamar' : 'Tambah Kamar'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Tabel untuk menampilkan data kamar */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nomor Kamar</th>
            <th>Tipe Kamar</th>
            <th>Harga</th>
            <th>Deskripsi</th>
            <th>Status</th>
            <th>Gambar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {kamar.map((k) => (
            <tr key={k.id}>
              <td>{k.nomor_kamar}</td>
              <td>{k.tipe_kamar}</td>
              <td>Rp{k.harga}</td>
              <td>{k.deskripsi}</td>
              <td>{k.status}</td>
              <td>
                {k.gambar && (
                  <img
                    src={`http://localhost:5000/uploads/${k.gambar}`}
                    alt="Kamar"
                    width="100"
                  />
                )}
              </td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(k)} className="me-2">
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(k.id)}>
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

export default Isikamar;