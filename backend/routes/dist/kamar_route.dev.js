"use strict";

// Backend/routes/kamar_routes.js
var express = require('express');

var router = express.Router();

var kamarController = require('../controllers/kamar_controller'); // Endpoint untuk kamar


router.get('/kamar', kamarController.getAllKamar);
router.post('/kamar', kamarController.addKamar);
router.put('/kamar/:id', kamarController.updateKamar);
router["delete"]('/kamar/:id', kamarController.deleteKamar);
module.exports = router;