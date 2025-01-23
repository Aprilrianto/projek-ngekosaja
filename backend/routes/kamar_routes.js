const express = require('express');
const router = express.Router();
const kamarController = require('../controllers/kamar_controller');
const upload = require('../config/multer');

// Endpoint untuk mendapatkan semua data kamar
router.get('/kamar', kamarController.getAllKamar);

// Endpoint untuk mendapatkan data kamar berdasarkan ID
router.get('/kamar/:id', kamarController.getKamarById);

// Endpoint untuk menambahkan data kamar dengan upload gambar
router.post('/kamar', upload.single('gambar'), kamarController.addKamar);

// Endpoint untuk mengupdate data kamar dengan upload gambar
router.put('/kamar/:id', upload.single('gambar'), kamarController.updateKamar);

// Endpoint untuk menghapus data kamar
router.delete('/kamar/:id', kamarController.deleteKamar);

module.exports = router;