// src/pages/GrafikPage.jsx
import GrafikKredit from '../components/GrafikKredit';

function GrafikPage() {
  return (
    <div className="min-h-screen bg-[#27548a] rounded-xl p-8">
      <div className="max-w-6xl mx-auto bg-[#27548a] rounded-xl p-8">
        <h1 className="text-7xl font-bold mb-6 text-white text-center">Grafik Nilai Kredit</h1>
        <div className="bg-yellow-100 shadow-xl rounded-2xl border-4 border-gray-900 p-6">
          <GrafikKredit />
        </div>
      </div>
    </div>
  );
}

export default GrafikPage;