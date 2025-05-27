// src/pages/RiwayatPage.jsx
import TabelRiwayat from '../components/TabelRiwayat';

function RiwayatPage() {
  return (
    <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Riwayat Pengajuan Kredit</h1>
      <TabelRiwayat />
    </div>
  );
}

export default RiwayatPage;