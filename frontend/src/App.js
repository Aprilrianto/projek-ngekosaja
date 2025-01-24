import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/beranda';
import Pemilikkos from './pages/pemilikkos';
import Faq from './pages/faq';
import Tentangkami from './pages/tentangkami';
import Detailkos from './pages/detailkos';
import Register from './pages/register';
import Login from './pages/login';
// import Paymentkos from './pages/paymentkos';
import Riwayatkos from './pages/riwayatkos';
import DetailPayment from './pages/detailpayment'; // Sesuaikan path-nya



// dashboard pemilik kost
import Dashboard_overview from './pages-dashpemilik/dashboard_overview';
import Kamar from './pages-dashpemilik/dashboard_kamar';
import Dashboard_pembayaran from './pages-dashpemilik/dashboard_pembayaran';
import BuatPesanan from './pages/BuatPesanan';


//dahboard admin
import Dashboard_ulasan from './pages-dashboard_admin/dashboard_ulasan';

const App = () => {
    return (
        <Router> 
            <div > 
                <Routes>
                    <Route path="/" element={<Beranda />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/pemilikkos" element={<Pemilikkos />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/tentangkami" element={<Tentangkami />} />
                    <Route path="/detailkos/:id" element={<Detailkos />} />
                    <Route path="/detailpayment" element={<DetailPayment />} />
                    <Route path="/riwayatkos" element={<Riwayatkos />} />
                    <Route path="/buat-pesanan/:id" element={<BuatPesanan />} />

                     {/* dashboard pemilik kost */}
                    <Route path="/dashboard_overview" element={<Dashboard_overview />} />
                    <Route path="/dashboard_kamar" element={<Kamar/>} />
                    <Route path="/dashboard_pembayaran" element={<Dashboard_pembayaran/>} />


                    <Route path="/dashboard_ulasan" element={<Dashboard_ulasan/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
