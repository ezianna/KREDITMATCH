// src/pages/GrafikPage.jsx
import GrafikKredit from '../components/GrafikKredit';

function GrafikPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* ✅ Hapus tag <justify> yang tidak valid */}
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Grafik Nilai Kredit</h1>
      <div className="bg-white shadow rounded p-4">
        <GrafikKredit />
      </div>
    </div>
  );
}

export default GrafikPage;