// src/components/TabelRiwayat.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TabelRiwayat = () => {
  const [hasilList, setHasilList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then((res) => setHasilList(res.data))
      .catch((err) => console.error('Gagal fetch data riwayat', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10 text-white text-xl">Loading data...</p>;

  if (hasilList.length === 0)
    return <p className="text-center mt-10 text-white text-xl">Belum ada data riwayat.</p>;

  return (
    <div className="mt-10 max-w-full mx-auto px-4">
      <div className="overflow-x-auto overflow-y-auto max-h-[600px] bg-yellow-100 shadow-xl rounded-2xl border-4 border-gray-900">
        <table className="min-w-full text-sm text-left text-gray-800 whitespace-nowrap">
          <thead className="bg-yellow-400 text-gray-900 uppercase text-xs tracking-wider font-bold">
            <tr>
              <th className="px-4 py-4 border-r border-gray-900">No</th>
              <th className="px-4 py-4 border-r border-gray-900">Nama</th>
              <th className="px-4 py-4 border-r border-gray-900">Nama Usaha</th>
              <th className="px-4 py-4 border-r border-gray-900">Lama Usaha</th>
              <th className="px-4 py-4 border-r border-gray-900">Penghasilan</th>
              <th className="px-4 py-4 border-r border-gray-900">NCF</th>
              <th className="px-4 py-4 border-r border-gray-900">NSF</th>
              <th className="px-4 py-4 border-r border-gray-900">Skor</th>
              <th className="px-4 py-4">Rekomendasi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {hasilList.map((hasil, idx) => (
              <tr key={hasil.id ?? idx} className="hover:bg-yellow-50 transition-colors">
                <td className="px-4 py-3 font-medium border-r border-gray-300">{idx + 1}</td>
                <td className="px-4 py-3 font-medium border-r border-gray-300">{hasil.nama ?? '-'}</td>
                <td className="px-4 py-3 border-r border-gray-300">{hasil.namaUsaha ?? '-'}</td>
                <td className="px-4 py-3 border-r border-gray-300">{hasil.lamaUsaha ?? '-'}</td>
                <td className="px-4 py-3 border-r border-gray-300">{hasil.penghasilan?.toLocaleString('id-ID') ?? '-'}</td>
                <td className="px-4 py-3 border-r border-gray-300">{hasil.ncf != null ? hasil.ncf.toFixed(2) : '-'}</td>
                <td className="px-4 py-3 border-r border-gray-300">{hasil.nsf != null ? hasil.nsf.toFixed(2) : '-'}</td>
                <td className="px-4 py-3 border-r border-gray-300">{hasil.skorAkhir != null ? hasil.skorAkhir.toFixed(2) : '-'}</td>
                <td className="px-4 py-3">
                  {hasil.kategori ? (
                    hasil.lolos ? (
                      <span className="text-green-600 font-semibold bg-green-100 px-2 py-1 rounded">{hasil.kategori} ✅</span>
                    ) : (
                      <span className="text-red-600 font-semibold bg-red-100 px-2 py-1 rounded">{hasil.kategori} ❌</span>
                    )
                  ) : (
                    <span className="text-gray-500 italic">Belum dihitung</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelRiwayat;