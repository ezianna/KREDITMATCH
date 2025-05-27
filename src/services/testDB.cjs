// src/services/testDB.cjs
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'spk_db'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Koneksi gagal:', err.message);
  } else {
    console.log('✅ Koneksi berhasil ke database!');
  }
});
