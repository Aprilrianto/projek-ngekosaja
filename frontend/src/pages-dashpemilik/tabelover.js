import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form, Table, Spinner, Alert } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Swal from 'sweetalert2';
import '../style/tabeloverview.css';

const TabelOverview = () => {
  const [kamar, setKamar] = useState([]);
  const [pesanan, setPesanan] = useState([]);
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
    }
  };

  // Ambil data pesanan dari backend
  const fetchPesanan = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/pesanan');
      setPesanan(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchKamar();
    fetchPesanan();
    setLoading(false);
  }, []);

  // Format data untuk grafik status kamar
  const formatDataForKamarChart = (kamar) => {
    const jumlahTersedia = kamar.filter((k) => k.status === 'tersedia').length;
    const jumlahTerisi = kamar.filter((k) => k.status === 'terisi').length;

    return [
      { name: 'Tersedia', Jumlah: jumlahTersedia },
      { name: 'Terisi', Jumlah: jumlahTerisi },
    ];
  };

  // Format data untuk grafik pesanan dan pembayaran per bulan
  const formatDataForPesananChart = (pesanan) => {
    const bulan = [
      'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
      'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
    ];

    // Inisialisasi data per bulan
    const dataPerBulan = bulan.map((namaBulan) => ({
      name: namaBulan,
      JumlahPesanan: 0,
      TotalPembayaran: 0,
    }));

    // Hitung jumlah pesanan dan total pembayaran per bulan
    pesanan.forEach((p) => {
      const tanggalPesanan = new Date(p.created_at);
      const bulanPesanan = tanggalPesanan.getMonth(); // 0 (Jan) - 11 (Des)
      dataPerBulan[bulanPesanan].JumlahPesanan += 1;
      dataPerBulan[bulanPesanan].TotalPembayaran += p.total_pembayaran;
    });

    return dataPerBulan;
  };

  const kamarChartData = formatDataForKamarChart(kamar);
  const pesananChartData = formatDataForPesananChart(pesanan);

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
    <div className="dashboard-overview">
      <h1 className="text-center mb-4">Dashboard Overview</h1>

      {/* Grafik Status Kamar */}
      <div className="chart-container">
        <h2>Status Kamar</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={kamarChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Jumlah" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Grafik Jumlah Pesanan per Bulan */}
      <div className="chart-container">
        <h2>Jumlah Pesanan per Bulan</h2>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={pesananChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="JumlahPesanan"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Grafik Total Pembayaran per Bulan */}
      <div className="chart-container">
        <h2>Total Pembayaran per Bulan</h2>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={pesananChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="TotalPembayaran"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TabelOverview;