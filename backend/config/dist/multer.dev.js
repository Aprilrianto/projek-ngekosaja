"use strict";

// Backend/config/multer.js
var multer = require('multer');

var path = require('path'); // Konfigurasi penyimpanan file


var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/'); // Folder tempat menyimpan file
  },
  filename: function filename(req, file, cb) {
    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    var ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext); // Nama file unik
  }
}); // Filter file (hanya menerima gambar)

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Hanya file gambar yang diizinkan!'), false);
  }
}; // Inisialisasi Multer


var upload = multer({
  storage: storage,
  fileFilter: fileFilter
});
module.exports = upload;