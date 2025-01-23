const express = require('express');
const path = require('path');
const cors = require('cors');
const kamarRoutes = require('./routes/kamar_routes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Menyajikan folder uploads secara statis
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', kamarRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});