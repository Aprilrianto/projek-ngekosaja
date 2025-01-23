const express = require('express');
const router = express.Router();
const pesananController = require('../controllers/pesanan_controller');

// Endpoint untuk menambahkan data pesanan
router.post('/pesanan', pesananController.addPesanan);

// Endpoint untuk mendapatkan semua data pesanan
router.get('/pesanan', pesananController.getAllPesanan);

// Endpoint untuk mendapatkan data pesanan berdasarkan ID
router.get('/pesanan/:id', pesananController.getPesananById);

// Endpoint untuk mengupdate data pesanan
router.put('/pesanan/:id', pesananController.updatePesanan);

// Endpoint untuk menghapus data pesanan
router.delete('/pesanan/:id', pesananController.deletePesanan);

// Middleware untuk menangani error secara global
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Terjadi kesalahan pada server!' });
});

module.exports = router;