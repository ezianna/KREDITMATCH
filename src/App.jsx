// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';
import LoginPage from './pages/LoginPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import InputPage from './pages/InputPage.jsx';
import RiwayatPage from './pages/RiwayatPage.jsx';
import GrafikPage from './pages/GrafikPage.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {isLoggedIn ? (
          <div className="flex">
            <Navbar setIsLoggedIn={setIsLoggedIn} />
            <div className="flex-1 ml-64">
              <Routes>
                <Route path="/dashboard" element={<LandingPage />} />
                <Route path="/input" element={<InputPage />} />
                <Route path="/riwayat" element={<RiwayatPage />} />
                <Route path="/grafik" element={<GrafikPage />} />
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;