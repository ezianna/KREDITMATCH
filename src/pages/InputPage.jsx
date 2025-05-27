import { useState } from 'react';

function InputPage() {
  const [formData, setFormData] = useState({
    nama: '',
    namaUsaha: '',
    lamaUsaha: '',
    penghasilan: '',
    riwayatKredit: '',
    tanggungan: '',
    usia: '',
    agunan: '',
    pendidikan: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Data form:', formData);
    // Di sini nanti akan ditambahkan logika untuk mengirim data
    alert('Data berhasil disimpan!');
  };

  const agunanOptions = [
    'Pilih Agunan',
    'Rumah',
    'Kendaraan',
    'Tanah',
    'Sertifikat Deposito',
    'Emas',
    'Tidak Ada'
  ];

  const pendidikanOptions = [
    'Pilih Pendidikan',
    'SD',
    'SMP',
    'SMA/SMK',
    'Diploma',
    'Sarjana (S1)',
    'Magister (S2)',
    'Doktor (S3)'
  ];

  const InputField = ({ label, value, onChange, type = "text", placeholder = "" }) => (
    <div className="mb-4">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || label}
        className="w-full px-6 py-4 bg-slate-600 text-white placeholder-gray-300 rounded-full border-none outline-none focus:ring-2 focus:ring-blue-400 text-center font-medium"
      />
    </div>
  );

  const SelectField = ({ label, value, onChange, options }) => (
    <div className="mb-4 relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-6 py-4 bg-slate-600 text-white rounded-full border-none outline-none focus:ring-2 focus:ring-blue-400 text-center font-medium appearance-none cursor-pointer"
      >
        {options.map((option, index) => (
          <option key={index} value={index === 0 ? '' : option} className="bg-slate-600">
            {option}
          </option>
        ))}
      </select>
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex">
      {/* Sidebar */}
      <div className="w-64 p-6 flex flex-col space-y-4">
        <button className="bg-yellow-100 text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-200 transition">
          Input Data
        </button>
        <button className="bg-yellow-100 text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-200 transition">
          Riwayat
        </button>
        <button className="bg-yellow-100 text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-200 transition">
          Grafik
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 flex flex-col items-center">
        {/* Header */}
        <div className="bg-yellow-100 text-gray-800 px-8 py-4 rounded-2xl mb-8 shadow-lg">
          <h1 className="text-2xl font-bold text-center">Silahkan Input Data!</h1>
        </div>

        {/* Form Container */}
        <div className="bg-yellow-50 p-8 rounded-3xl shadow-2xl w-full max-w-2xl border-4 border-black">
          <div className="space-y-4">
            <InputField
              label="Nama"
              value={formData.nama}
              onChange={(value) => handleInputChange('nama', value)}
              placeholder="Nama"
            />

            <InputField
              label="Nama Usaha"
              value={formData.namaUsaha}
              onChange={(value) => handleInputChange('namaUsaha', value)}
              placeholder="Nama Usaha"
            />

            <InputField
              label="Lama Usaha"
              value={formData.lamaUsaha}
              onChange={(value) => handleInputChange('lamaUsaha', value)}
              placeholder="Lama Usaha (tahun)"
              type="number"
            />

            <InputField
              label="Penghasilan"
              value={formData.penghasilan}
              onChange={(value) => handleInputChange('penghasilan', value)}
              placeholder="Penghasilan (Rupiah)"
              type="number"
            />

            <InputField
              label="Riwayat Kredit"
              value={formData.riwayatKredit}
              onChange={(value) => handleInputChange('riwayatKredit', value)}
              placeholder="Riwayat Kredit"
            />

            <InputField
              label="Tanggungan"
              value={formData.tanggungan}
              onChange={(value) => handleInputChange('tanggungan', value)}
              placeholder="Jumlah Tanggungan"
              type="number"
            />

            <InputField
              label="Usia"
              value={formData.usia}
              onChange={(value) => handleInputChange('usia', value)}
              placeholder="Usia (tahun)"
              type="number"
            />

            <SelectField
              label="Pilih Agunan"
              value={formData.agunan}
              onChange={(value) => handleInputChange('agunan', value)}
              options={agunanOptions}
            />

            <SelectField
              label="Pilih Pendidikan"
              value={formData.pendidikan}
              onChange={(value) => handleInputChange('pendidikan', value)}
              options={pendidikanOptions}
            />

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-200 flex items-center justify-center mx-auto"
              >
                <span className="mr-2">▶</span>
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputPage;