// src/services/db.js
import mysql from 'mysql2';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'spk_db'
});
