const db = require('../config/database');
const upload = require('../config/multer');

// Mengambil semua data kamar
exports.getAllKamar = (req, res) => {
  const query = 'SELECT * FROM kamar';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Mengambil data kamar berdasarkan ID
exports.getKamarById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM kamar WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Kamar tidak ditemukan' });
    }
    res.json(results[0]);
  });
};

// Menambahkan data kamar dengan upload gambar
exports.addKamar = (req, res) => {
  const { nomor_kamar, tipe_kamar, harga, deskripsi, status } = req.body;
  const gambar = req.file ? req.file.filename : null;

  const query = `
    INSERT INTO kamar (nomor_kamar, tipe_kamar, harga, deskripsi, status, gambar)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [nomor_kamar, tipe_kamar, harga, deskripsi, status, gambar], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Kamar added successfully', id: results.insertId });
  });
};

// Mengupdate data kamar dengan upload gambar
exports.updateKamar = (req, res) => {
  const { id } = req.params;
  const { nomor_kamar, tipe_kamar, harga, deskripsi, status } = req.body;
  const gambar = req.file ? req.file.filename : null;

  const query = `
    UPDATE kamar
    SET nomor_kamar = ?, tipe_kamar = ?, harga = ?, deskripsi = ?, status = ?, gambar = ?
    WHERE id = ?
  `;
  db.query(query, [nomor_kamar, tipe_kamar, harga, deskripsi, status, gambar, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Kamar updated successfully' });
  });
};

// Menghapus data kamar
exports.deleteKamar = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM kamar WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Kamar deleted successfully' });
  });
};