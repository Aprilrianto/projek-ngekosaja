const db = require('../config/database');

// Mengambil semua data keluhan
exports.getAllKeluhan = (req, res) => {
  const query = 'SELECT * FROM keluhan';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Mengambil data keluhan berdasarkan ID
exports.getKeluhanById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM keluhan WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Keluhan tidak ditemukan' });
    }
    res.json(results[0]);
  });
};

// Menambahkan data keluhan
exports.addKeluhan = (req, res) => {
  const { nama, pesan } = req.body;

  const query = `
    INSERT INTO keluhan (nama, pesan)
    VALUES (?, ?)
  `;
  db.query(query, [nama, pesan], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Keluhan berhasil ditambahkan', id: results.insertId });
  });
};

// Mengupdate data keluhan
exports.updateKeluhan = (req, res) => {
  const { id } = req.params;
  const { nama, pesan } = req.body;

  const query = `
    UPDATE keluhan
    SET nama = ?, pesan = ?
    WHERE id = ?
  `;
  db.query(query, [nama, pesan, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Keluhan berhasil diperbarui' });
  });
};

// Menghapus data keluhan
exports.deleteKeluhan = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM keluhan WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Keluhan berhasil dihapus' });
  });
};