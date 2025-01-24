import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/isikeluhan.css'
const AdminDashboard = () => {
  const [keluhanList, setKeluhanList] = useState([]);

  // Ambil data keluhan dari backend
  useEffect(() => {
    const fetchKeluhan = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/keluhan');
        setKeluhanList(response.data);
      } catch (error) {
        console.error('Error fetching keluhan:', error);
      }
    };

    fetchKeluhan();
  }, []);

  // Fungsi untuk menghapus keluhan
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/keluhan/${id}`);
      setKeluhanList(keluhanList.filter((keluhan) => keluhan.id !== id));
    } catch (error) {
      console.error('Error deleting keluhan:', error);
    }
  };

  // Fungsi untuk mengubah status keluhan (sudah dibaca/belum)
  const handleStatusChange = async (id, status) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/keluhan/${id}`, {
        status: status === 'Sudah Dibaca' ? 'Belum Dibaca' : 'Sudah Dibaca',
      });

      // Update status di frontend
      setKeluhanList(
        keluhanList.map((keluhan) =>
          keluhan.id === id ? { ...keluhan, status: response.data.status } : keluhan
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Dashboard Admin - Daftar Keluhan</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Pesan</th>
            <th>Tanggal</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {keluhanList.map((keluhan) => (
            <tr key={keluhan.id}>
              <td>{keluhan.nama}</td>
              <td>{keluhan.pesan}</td>
              <td>{new Date(keluhan.tanggal).toLocaleString()}</td>
              <td>
                <button
                  className={`status-button ${keluhan.status === 'Sudah Dibaca' ? 'read' : 'unread'}`}
                  onClick={() => handleStatusChange(keluhan.id, keluhan.status)}
                >
                  {keluhan.status || 'Belum Dibaca'}
                </button>
              </td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(keluhan.id)}>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;