import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/beranda';
import Pemilikkos from './pages/pemilikkos';
import Faq from './pages/faq';
import Tentangkami from './pages/tentangkami';
import Detailkos from './pages/detailkos';
import Register from './pages/register';
import Login from './pages/login';
import Paymentkos from './pages/paymentkos';
import Riwayatkos from './pages/riwayatkos';



// dashboard pemilik kost
import Dashboard_overview from './pages-dashpemilik/dashboard_overview';
import Kamar from './pages-dashpemilik/dashboard_kamar';

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
                    <Route path="/paymentkos" element={<Paymentkos />} />
                    <Route path="/riwayatkos" element={<Riwayatkos />} />
                    

                     {/* dashboard pemilik kost */}
                    <Route path="/dashboard_overview" element={<Dashboard_overview />} />
                    <Route path="/dashboard_kamar" element={<Kamar/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
