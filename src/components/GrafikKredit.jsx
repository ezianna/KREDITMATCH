import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Label
} from "recharts";

export default function GrafikKredit() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/data")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  // Filter dan sort dari skorAkhir tertinggi ke terendah
  const dataValid = data
    .filter(d => d.skorAkhir !== null)
    .sort((a, b) => b.skorAkhir - a.skorAkhir);

  return (
    <div className="p-6 bg-[#f3f3e0] rounded-xl p-8 shadow rounded">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Grafik Skor Akhir Kredit</h2>

      {/* Bungkus ResponsiveContainer dengan div yang bisa scroll horizontal */}
      <div className="overflow-x-auto">
        {/* Width minimum disesuaikan dengan jumlah data supaya grafik melebar */}
        <div style={{ minWidth: dataValid.length * 60 }}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={dataValid} margin={{ top: 10, right: 30, left: 0, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nama" angle={-30} textAnchor="end" interval={0}>
                <Label value="Nama Pemohon" offset={30} position="bottom" />
              </XAxis>
              <YAxis>
                <Label
                  value="Skor Akhir"
                  angle={-90}
                  position="insideLeft"
                  offset={10}
                  style={{ textAnchor: 'middle' }}
                />
              </YAxis>
              <Tooltip />
              <Bar dataKey="skorAkhir" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
