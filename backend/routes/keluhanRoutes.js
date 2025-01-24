const express = require('express');
const router = express.Router();
const keluhanController = require('../controllers/keluhanController');

// Endpoint untuk keluhan
router.get('/keluhan', keluhanController.getAllKeluhan);
router.get('/keluhan/:id', keluhanController.getKeluhanById);
router.post('/keluhan', keluhanController.addKeluhan);
router.put('/keluhan/:id', keluhanController.updateKeluhan);
router.delete('/keluhan/:id', keluhanController.deleteKeluhan);

module.exports = router;