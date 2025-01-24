import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../style/usekeluhan.css'

const UserKeluhan = () => {
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/keluhan', {
        nama,
        pesan,
      });

      // Tampilkan notifikasi sukses menggunakan SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Keluhan berhasil dikirim!',
        confirmButtonText: 'OK',
      });

      // Reset form
      setNama('');
      setPesan('');
    } catch (error) {
      // Tampilkan notifikasi error menggunakan SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Gagal mengirim keluhan. Silakan coba lagi.',
        confirmButtonText: 'OK',
      });
      console.error('Error:', error);
    }
  };

  return (
    <div className="user-keluhan">
      <h1>Form Keluhan</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Pesan Keluhan:</label>
          <textarea
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            required
          />
        </div>
        <button type="submit">Kirim Keluhan</button>
      </form>
    </div>
  );
};

export default UserKeluhan;