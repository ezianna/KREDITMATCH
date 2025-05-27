// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Sistem Pendukung Keputusan Kredit</h1>
        <p className="text-gray-600 mb-6">
          Aplikasi ini membantu menentukan kelayakan kredit berdasarkan kriteria tertentu menggunakan metode Profile Matching.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Mulai Input Data
          </button>
          <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition">
            Lihat Riwayat
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;