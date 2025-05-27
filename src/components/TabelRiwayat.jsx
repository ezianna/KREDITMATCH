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

  if (loading) return <p className="text-center mt-10">Loading data...</p>;

  if (hasilList.length === 0)
    return <p className="text-center mt-10 text-gray-600">Belum ada data riwayat.</p>;

  return (
    <div className="mt-10 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-white text-center border-b-4 border-yellow-500 pb-2">Riwayat Penilaian</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3">Nama</th>
              <th className="px-4 py-3">NCF</th>
              <th className="px-4 py-3">NSF</th>
              <th className="px-4 py-3">Skor Akhir</th>
              <th className="px-4 py-3">Rekomendasi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {hasilList.map((hasil) => (
              <tr key={hasil.id ?? hasil.nama}>
                <td className="px-4 py-3 font-medium">{hasil.nama ?? '-'}</td>
                <td className="px-4 py-3">{hasil.ncf != null ? hasil.ncf.toFixed(2) : '-'}</td>
                <td className="px-4 py-3">{hasil.nsf != null ? hasil.nsf.toFixed(2) : '-'}</td>
                <td className="px-4 py-3">{hasil.skorAkhir != null ? hasil.skorAkhir.toFixed(2) : '-'}</td>
                <td className="px-4 py-3">
                  {hasil.skorAkhir != null && hasil.skorAkhir >= 4 ? (
                    <span className="text-green-600 font-semibold">Layak ✅</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Belum Layak ❌</span>
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
