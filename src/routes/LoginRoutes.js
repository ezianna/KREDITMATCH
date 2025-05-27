// src/routes/LoginRoutes.js
db.query(
  'SELECT * FROM users WHERE username = ? AND password = ?',
  [username, password],
  (err, result) => {
    if (err) {
      console.error('DB Query Error:', err);
      return res.status(500).json({ message: 'DB Error' });
    }

    if (result.length > 0) {
      res.json({ message: 'Login berhasil' });
    } else {
      res.status(401).json({ message: 'Username atau password salah' });
    }
  }
);
