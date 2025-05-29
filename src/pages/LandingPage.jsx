import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#27548a] px-4">
      <div
        className="max-w-xl text-center border border-[#f3f3e0] bg-[#f3f3e0] rounded-xl p-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          Sistem KreditMatch
        </h1>
        <p className="text-black-200 mb-6">
          Aplikasi ini membantu menentukan kelayakan kredit berdasarkan kriteria tertentu menggunakan metode "Profile Matching".
        </p>
        <p className="text-black-200 mb-6">
          Pengguna dapat memasukkan data-data seperti pendapatan usaha, lama usaha berjalan, jaminan, histori pembayaran, dan nilai aset. Yang kemudian dianalisis menggunakan "Decision Support System" yang mampu memberikan rekomendasi pemberian kredit kepada pelaku UMKM secara objektif, efisien, dan akurat.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/input"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Mulai Input Data
          </Link>
          <Link
            to="/riwayat"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Lihat Riwayat Kredit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
