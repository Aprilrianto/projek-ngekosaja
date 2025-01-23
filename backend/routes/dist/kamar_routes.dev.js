"use strict";

// Backend/routes/kamar_routes.js
var express = require('express');

var router = express.Router();

var kamarController = require('../controllers/kamar_controller');

var upload = require('../config/multer'); // Import Multer
// Endpoint untuk mendapatkan semua data kamar


router.get('/kamar', kamarController.getAllKamar); // Endpoint untuk menambahkan data kamar dengan upload gambar

router.post('/kamar', upload.single('gambar'), kamarController.addKamar); // Endpoint untuk mengupdate data kamar dengan upload gambar

router.put('/kamar/:id', upload.single('gambar'), kamarController.updateKamar); // Endpoint untuk menghapus data kamar

router["delete"]('/kamar/:id', kamarController.deleteKamar);
module.exports = router;