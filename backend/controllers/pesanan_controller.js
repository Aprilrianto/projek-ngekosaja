const db = require('../config/database');

// Menambahkan data pesanan
exports.addPesanan = async (req, res) => {
  const { nama_pemesan, email_pemesan, metode_pembayaran, kamar_id, total_pembayaran, catatan } = req.body;

  // Validasi sederhana
  if (!nama_pemesan || !email_pemesan || !metode_pembayaran || !kamar_id || !total_pembayaran) {
    return res.status(400).json({ error: 'Semua field harus diisi kecuali catatan.' });
  }

  const query = `
    INSERT INTO pesanan (nama_pemesan, email_pemesan, metode_pembayaran, kamar_id, total_pembayaran, catatan)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  try {
    const [results] = await db.promise().query(query, [nama_pemesan, email_pemesan, metode_pembayaran, kamar_id, total_pembayaran, catatan]);
    res.status(201).json({ message: 'Pesanan berhasil dibuat!', id: results.insertId });
  } catch (err) {
    console.error('Error adding pesanan:', err);
    res.status(500).json({ error: 'Gagal menambahkan pesanan.', details: err.message });
  }
};

// Mengambil semua data pesanan
exports.getAllPesanan = async (req, res) => {
  const query = 'SELECT * FROM pesanan';

  try {
    const [results] = await db.promise().query(query);
    res.json(results);
  } catch (err) {
    console.error('Error fetching pesanan:', err);
    res.status(500).json({ error: 'Gagal mengambil data pesanan.', details: err.message });
  }
};

// Mengambil data pesanan berdasarkan ID
exports.getPesananById = async (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM pesanan WHERE id = ?';

  try {
    const [results] = await db.promise().query(query, [id]);
    if (results.length === 0) {
      return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    }
    res.json(results[0]);
  } catch (err) {
    console.error('Error fetching pesanan by id:', err);
    res.status(500).json({ error: 'Gagal mengambil data pesanan.', details: err.message });
  }
};

// Mengupdate data pesanan
exports.updatePesanan = async (req, res) => {
  const { id } = req.params;
  const { nama_pemesan, email_pemesan, metode_pembayaran, kamar_id, total_pembayaran, catatan, status_pesanan } = req.body;

  // Validasi sederhana
  if (!nama_pemesan || !email_pemesan || !metode_pembayaran || !kamar_id || !total_pembayaran || !status_pesanan) {
    return res.status(400).json({ error: 'Semua field harus diisi kecuali catatan.' });
  }

  const query = `
    UPDATE pesanan
    SET nama_pemesan = ?, email_pemesan = ?, metode_pembayaran = ?, kamar_id = ?, total_pembayaran = ?, catatan = ?, status_pesanan = ?
    WHERE id = ?
  `;

  try {
    const [results] = await db.promise().query(query, [nama_pemesan, email_pemesan, metode_pembayaran, kamar_id, total_pembayaran, catatan, status_pesanan, id]);
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    }
    res.json({ message: 'Pesanan berhasil diupdate!' });
  } catch (err) {
    console.error('Error updating pesanan:', err);
    res.status(500).json({ error: 'Gagal mengupdate pesanan.', details: err.message });
  }
};

// Menghapus data pesanan
exports.deletePesanan = async (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM pesanan WHERE id = ?';

  try {
    const [results] = await db.promise().query(query, [id]);
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    }
    res.json({ message: 'Pesanan berhasil dihapus!' });
  } catch (err) {
    console.error('Error deleting pesanan:', err);
    res.status(500).json({ error: 'Gagal menghapus pesanan.', details: err.message });
  }
};