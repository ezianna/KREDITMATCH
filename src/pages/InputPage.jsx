// src/pages/InputPage.jsx
import React, { useState, useCallback } from 'react';
import axios from 'axios';

function InputPage() {
  const [form, setForm] = useState({
    nama: '',
    namaUsaha: '',
    lamaUsaha: '',
    penghasilan: '',
    agunan: '',
    riwayatKredit: '',
    tanggungan: '',
    usia: '',
    pendidikan: ''
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      lamaUsaha: Number(form.lamaUsaha),
      penghasilan: Number(form.penghasilan),
      agunan: Number(form.agunan),
      riwayatKredit: Number(form.riwayatKredit),
      tanggungan: Number(form.tanggungan),
      usia: Number(form.usia),
      pendidikan: Number(form.pendidikan),
    };

    try {
      await axios.post('http://localhost:5000/api/data', payload);
      alert('Data berhasil dikirim!');
      setForm({
        nama: '',
        namaUsaha: '',
        lamaUsaha: '',
        penghasilan: '',
        agunan: '',
        riwayatKredit: '',
        tanggungan: '',
        usia: '',
        pendidikan: ''
      });
    } catch (error) {
      alert('Terjadi kesalahan saat mengirim data.');
      console.error(error);
    }
  }, [form]);

  return (
    <div className="min-h-screen bg-[#27548a] rounded-xl p-8">
      <form onSubmit={handleSubmit} className="p-8 bg-yellow-100 rounded-2xl shadow-xl border-4 border-gray-900 max-w-4xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Silahkan Input Data!
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Nama</label>
            <input 
              type="text" 
              name="nama" 
              value={form.nama} 
              onChange={handleChange} 
              required 
              className="w-full bg-teal-700 text-white rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
              placeholder="Masukkan nama"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Nama Usaha</label>
            <input 
              type="text" 
              name="namaUsaha" 
              value={form.namaUsaha} 
              onChange={handleChange} 
              required 
              className="w-full bg-teal-700 text-white rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
              placeholder="Masukkan nama usaha"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Lama Usaha (tahun)</label>
            <input 
              type="number" 
              name="lamaUsaha" 
              value={form.lamaUsaha} 
              onChange={handleChange} 
              required 
              className="w-full bg-teal-700 text-white rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
              placeholder="Contoh: 5"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Penghasilan (Rp)</label>
            <input 
              type="number" 
              name="penghasilan" 
              value={form.penghasilan} 
              onChange={handleChange} 
              required 
              className="w-full bg-teal-700 text-white rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
              placeholder="Contoh: 5000000"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Riwayat Kredit (skor)</label>
            <input 
              type="number" 
              name="riwayatKredit" 
              value={form.riwayatKredit} 
              onChange={handleChange} 
              required 
              className="w-full bg-teal-700 text-white rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
              placeholder="Contoh: 750"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Jumlah Tanggungan</label>
            <input 
              type="number" 
              name="tanggungan" 
              value={form.tanggungan} 
              onChange={handleChange} 
              required 
              className="w-full bg-teal-700 text-white rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
              placeholder="Contoh: 3"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Usia</label>
            <input 
              type="number" 
              name="usia" 
              value={form.usia} 
              onChange={handleChange} 
              required 
              className="w-full bg-teal-700 text-white rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
              placeholder="Contoh: 35"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Agunan</label>
            <select 
              name="agunan" 
              value={form.agunan} 
              onChange={handleChange} 
              required 
              className="w-full bg-teal-700 text-white rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="" className="text-gray-400">Pilih Agunan ▼</option>
              <option value="0">Tidak Ada</option>
              <option value="1">Agunan Rumah</option>
              <option value="2">Agunan Kendaraan</option>
              <option value="3">Agunan Lainnya</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Pendidikan Terakhir</label>
            <select 
              name="pendidikan" 
              value={form.pendidikan} 
              onChange={handleChange} 
              required 
              className="w-full bg-teal-700 text-white rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="" className="text-gray-400">Pilih Pendidikan ▼</option>
              <option value="1">SD</option>
              <option value="2">SMP</option>
              <option value="3">SMA</option>
              <option value="4">Diploma</option>
              <option value="5">Sarjana</option>
              <option value="6">Pasca Sarjana</option>
            </select>
          </div>
        </div>

        <div className="text-center pt-4">
          <button 
            type="submit" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
          >
            ▶ Kirim
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputPage;