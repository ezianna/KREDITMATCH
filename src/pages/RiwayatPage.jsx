// src/pages/RiwayatPage.jsx
import TabelRiwayat from '../components/TabelRiwayat';

function RiwayatPage() {
  return (
    
    <div
        className="min-h-screen flex flex-col justify-center items-center bg-[#27548a] px-4">
        <h1 className="text-7xl font-bold text-white mb-4">
          Tabel Riwayat Kredit Mahasiswa
        </h1>
      <TabelRiwayat />
    </div>
  );
}

export default RiwayatPage;