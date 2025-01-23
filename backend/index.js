const express = require('express');
const path = require('path');
const cors = require('cors');
const kamarRoutes = require('./routes/kamar_routes');
const pesananRoutes = require('./routes/pesanan_routes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Menyajikan folder uploads secara statis
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Gunakan route kamar dan pesanan
app.use('/api', kamarRoutes);
app.use('/api', pesananRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});