// src/components/FormKredit.jsx
import React, { useState, useCallback } from 'react';
import axios from 'axios';

const FormField = ({ label, name, value, onChange, type = 'text', options }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-1">
        {label}
      </label>
      {options ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#27548A] focus:border-[#27548A]"
        >
          <option value="">{`Pilih ${label}`}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={`Masukkan ${label}`}
          required
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#27548A] focus:border-[#27548A]"
        />
      )}
    </div>
  );
};

function FormKredit({ onSuccess }) {
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

  const labelMap = {
    nama: 'Nama Pemohon',
    namaUsaha: 'Nama Usaha',
    lamaUsaha: 'Lama Usaha (tahun)',
    penghasilan: 'Penghasilan (Rp)',
    agunan: 'Jenis Agunan',
    riwayatKredit: 'Riwayat Kredit (skor)',
    tanggungan: 'Jumlah Tanggungan',
    usia: 'Usia (tahun)',
    pendidikan: 'Pendidikan Terakhir'
  };

  const opsiPendidikan = [
    { label: "SD", value: "1" },
    { label: "SMP", value: "2" },
    { label: "SMA", value: "3" },
    { label: "Diploma", value: "4" },
    { label: "Sarjana", value: "5" },
    { label: "Pasca Sarjana", value: "6" },
  ];

  const opsiAgunan = [
    { label: "Tidak Ada", value: "0" },
    { label: "Agunan Rumah", value: "1" },
    { label: "Agunan Kendaraan", value: "2" },
    { label: "Agunan Lainnya", value: "3" },
  ];

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
      onSuccess?.();
    } catch (error) {
      alert('Terjadi kesalahan saat mengirim data.');
      console.error(error);
    }
  }, [form, onSuccess]);

  return (
    <form onSubmit={handleSubmit} className="bg-[#F3F3E0] p-6 rounded-2xl shadow-lg max-w-2xl mx-auto mt-8 space-y-4">
      <h2 className="text-2xl font-semibold text-center text-white mb-4 border-4 border-[#DDA853] p-2 rounded-xl bg-[#27548A]">
        Form Pengajuan Kredit
      </h2>

      {Object.keys(form).map((key) => (
        <FormField
          key={key}
          name={key}
          label={labelMap[key]}
          value={form[key]}
          onChange={handleChange}
          type={['lamaUsaha', 'penghasilan', 'riwayatKredit', 'tanggungan', 'usia'].includes(key) ? 'number' : 'text'}
          options={key === 'pendidikan' ? opsiPendidikan : key === 'agunan' ? opsiAgunan : null}
        />
      ))}

      <div className="text-center">
        <button
          type="submit"
          className="bg-[#27548A] hover:bg-[#183B4E] text-white font-semibold px-6 py-2 rounded-lg transition duration-200"
        >
          Kirim Data
        </button>
      </div>
    </form>
  );
}

export default FormKredit;
