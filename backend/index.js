const express = require('express');
const path = require('path');
const cors = require('cors');
const kamarRoutes = require('./routes/kamar_routes');
const pesananRoutes = require('./routes/pesanan_routes');
const keluhanRoutes = require('./routes/keluhanRoutes'); // Impor keluhanRoutes

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Menyajikan folder uploads secara statis
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Gunakan route kamar, pesanan, dan keluhan
app.use('/api', kamarRoutes);
app.use('/api', pesananRoutes);
app.use('/api', keluhanRoutes); // Tambahkan keluhanRoutes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});