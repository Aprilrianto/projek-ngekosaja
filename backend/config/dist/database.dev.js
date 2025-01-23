"use strict";

// Backend/config/database.js
var mysql = require('mysql2');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // Ganti dengan username MySQL Anda
  password: '',
  // Ganti dengan password MySQL Anda
  database: 'db_ngekosajaa' // Ganti dengan nama database Anda

});
db.connect(function (err) {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');
});
module.exports = db;