// src/routes/dataRoutes.js
import express from 'express';
import { db } from '../services/db.js';
import { hitungSkor } from '../utils/logic.js';

const router = express.Router();

// ===================== LOGIN ADMIN =====================
router.post('/login-admin', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi' });
  }

  const sql = `SELECT * FROM admin WHERE username = ? AND password = ?`;
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).json({ message: 'Kesalahan server' });
    if (results.length === 0) return res.status(401).json({ message: 'Login gagal' });
    res.json({ message: 'Login berhasil', user: results[0] });
  });
});

// ===================== LOGIN USER =====================
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi' });
  }

  const sql = `SELECT * FROM users WHERE username = ? AND password = ? LIMIT 1`;
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).json({ message: 'Kesalahan server' });
    if (results.length === 0) return res.status(401).json({ message: 'Username atau password salah' });
    res.json({ message: 'Login berhasil', user: results[0] });
  });
});

// ===================== SIMPAN DATA DAN HITUNG SKOR =====================
router.post('/', (req, res) => {
  const {
    nama, namaUsaha, lamaUsaha, penghasilan,
    agunan, riwayatKredit, tanggungan, usia, pendidikan
  } = req.body;

  if (
    !nama || !namaUsaha ||
    [lamaUsaha, penghasilan, agunan, riwayatKredit, tanggungan, usia, pendidikan].some(
      v => v === undefined || v === null || v === '' || isNaN(Number(v))
    )
  ) {
    return res.status(400).json({ message: 'Semua field harus diisi dengan nilai yang valid.' });
  }

  const hasil = hitungSkor({
    lamaUsaha, penghasilan, agunan, riwayatKredit,
    tanggungan, usia, pendidikan
  });

  if (!hasil) {
    return res.status(400).json({ message: 'Perhitungan skor gagal, cek input data.' });
  }

  const { ncf, nsf, skorAkhir } = hasil;
  console.log("🔢 Perhitungan skor:", { ncf, nsf, skorAkhir });

  const sql = `
    INSERT INTO users (
      nama, namaUsaha, lamaUsaha, penghasilan,
      agunan, riwayatKredit, tanggungan, usia,
      pendidikan, ncf, nsf, skorAkhir
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    nama, namaUsaha, lamaUsaha, penghasilan,
    agunan, riwayatKredit, tanggungan, usia,
    pendidikan, ncf, nsf, skorAkhir
  ], (err) => {
    if (err) {
      console.error("❌ DB Error:", err);
      return res.status(500).json({ message: 'Database error', error: err.message });
    }
    res.json({ message: '✅ Data berhasil disimpan' });
  });
});

// ===================== GET DATA RIWAYAT =====================
router.get('/', (req, res) => {
  const sql = `SELECT * FROM users ORDER BY id DESC LIMIT 10`;
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Gagal mengambil data', error: err.message });
    }
    res.json(results);
  });
});

export default router;
