"use strict";

var express = require('express');

var path = require('path');

var cors = require('cors');

var kamarRoutes = require('./routes/kamar_routes');

var app = express();
var port = 5000;
app.use(cors());
app.use(express.json()); // Menyajikan folder uploads secara statis

app.use('/uploads', express["static"](path.join(__dirname, 'uploads')));
app.use('/api', kamarRoutes);
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});