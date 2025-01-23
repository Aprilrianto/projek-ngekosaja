"use strict";

// Backend/controllers/kamar_controller.js
var db = require('../config/database');

var upload = require('../config/multer'); // Import Multer
// Mengambil semua data kamar


exports.getAllKamar = function (req, res) {
  var query = 'SELECT * FROM kamar';
  db.query(query, function (err, results) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.json(results);
  });
}; // Menambahkan data kamar dengan upload gambar


exports.addKamar = function (req, res) {
  var _req$body = req.body,
      nomor_kamar = _req$body.nomor_kamar,
      tipe_kamar = _req$body.tipe_kamar,
      harga = _req$body.harga,
      deskripsi = _req$body.deskripsi,
      status = _req$body.status;
  var gambar = req.file ? req.file.filename : null; // Ambil nama file gambar

  var query = "\n    INSERT INTO kamar (nomor_kamar, tipe_kamar, harga, deskripsi, status, gambar)\n    VALUES (?, ?, ?, ?, ?, ?)\n  ";
  db.query(query, [nomor_kamar, tipe_kamar, harga, deskripsi, status, gambar], function (err, results) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.json({
      message: 'Kamar added successfully',
      id: results.insertId
    });
  });
}; // Mengupdate data kamar dengan upload gambar


exports.updateKamar = function (req, res) {
  var id = req.params.id;
  var _req$body2 = req.body,
      nomor_kamar = _req$body2.nomor_kamar,
      tipe_kamar = _req$body2.tipe_kamar,
      harga = _req$body2.harga,
      deskripsi = _req$body2.deskripsi,
      status = _req$body2.status;
  var gambar = req.file ? req.file.filename : null; // Ambil nama file gambar

  var query = "\n    UPDATE kamar\n    SET nomor_kamar = ?, tipe_kamar = ?, harga = ?, deskripsi = ?, status = ?, gambar = ?\n    WHERE id = ?\n  ";
  db.query(query, [nomor_kamar, tipe_kamar, harga, deskripsi, status, gambar, id], function (err, results) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.json({
      message: 'Kamar updated successfully'
    });
  });
}; // Menghapus data kamar


exports.deleteKamar = function (req, res) {
  var id = req.params.id;
  var query = 'DELETE FROM kamar WHERE id = ?';
  db.query(query, [id], function (err, results) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.json({
      message: 'Kamar deleted successfully'
    });
  });
};