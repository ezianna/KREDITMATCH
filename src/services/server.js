// src/services/server.js
import express from 'express';
import cors from 'cors';
import dataRoutes from '../routes/dataRoutes.js'; // ini penting
import { db } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/data', dataRoutes);

// Pakai routing yang sudah dipisah
app.use('/api/data', dataRoutes);

// Tes koneksi DB saat startup
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Gagal konek ke DB:", err.message);
  } else {
    console.log("✅ Terkoneksi ke DB MySQL");
    connection.release();
  }
});

app.listen(5000, () => console.log("✅ Server jalan di http://localhost:5000"));
