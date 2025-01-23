import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/tabeloverview.css';

const TabelOverview = () => {
  const [kamar, setKamar] = useState([]);

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
    fetchKamar();
  }, []);

  // Hitung jumlah kamar tersedia dan terisi
  const jumlahTersedia = kamar.filter((k) => k.status === 'tersedia').length;
  const jumlahTerisi = kamar.filter((k) => k.status === 'terisi').length;

  return (
    <div className="table-container">
      <h1 className="table-title">Dashboard Overview</h1>

      {/* Card untuk menampilkan jumlah kamar */}
      <div className="card-container">
        <div className="info-card">
          <h3>Kamar Tersedia</h3>
          <p>{jumlahTersedia}</p>
        </div>
        <div className="info-card">
          <h3>Kamar Terisi</h3>
          <p>{jumlahTerisi}</p>
        </div>
      </div>
    </div>
  );
};

export default TabelOverview;