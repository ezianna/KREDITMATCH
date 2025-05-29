// src/utils/logic.js

const profilIdeal = {
  lamaUsaha: 3,
  penghasilan: 3,
  agunan: 4,
  riwayatKredit: 4,
  tanggungan: 2,
  usia: 2,
  pendidikan: 5,
};

export function konversiKeSkala(namaKriteria, nilai) {
  const konversi5 = (n) => {
    if (isNaN(n)) return null;
    return n >= 90 ? 5 : n >= 80 ? 4 : n >= 70 ? 3 : n >= 60 ? 2 : 1;
  };

  const n = Number(nilai);
  if (isNaN(n)) return null;

  switch (namaKriteria) {
    case "pendidikan":
      return n >= 1 && n <= 6 ? n : null;
    case "usia":
      return n >= 50 ? 2 : n >= 40 ? 3 : n >= 30 ? 4 : 5;
    case "agunan":
      return n === 0 ? 1 : n === 1 ? 3 : n === 2 ? 4 : n === 3 ? 5 : null;
    case "riwayatKredit":
      return n === 1 ? 4 : n === 0 ? 2 : 1;
    default:
      return konversi5(n);
  }
}

export function bobotGap(gap) {
  const tabel = {
    0: 5, 1: 4.5, "-1": 4, 2: 3.5, "-2": 3,
    3: 2.5, "-3": 2, 4: 1.5, "-4": 1,
  };
  return tabel[gap] || 1;
}

export function hitungSkor(data) {
  const cfList = ["lamaUsaha", "penghasilan", "agunan", "riwayatKredit"];
  const sfList = ["tanggungan", "usia", "pendidikan"];

  let totalCF = 0, totalSF = 0;

  for (const k of cfList) {
    let nilai = konversiKeSkala(k, data[k]);
    if (nilai === null || isNaN(nilai)) nilai = 1; // fallback
    const gap = nilai - profilIdeal[k];
    totalCF += bobotGap(gap);
  }

  for (const k of sfList) {
    let nilai = konversiKeSkala(k, data[k]);
    if (nilai === null || isNaN(nilai)) nilai = 1;
    const gap = nilai - profilIdeal[k];
    totalSF += bobotGap(gap);
  }

  const ncf = totalCF / cfList.length;
  const nsf = totalSF / sfList.length;
  const skorAkhir = ncf * 0.6 + nsf * 0.4;

  // 🔍 Kategori penilaian
  let kategori;
  if (skorAkhir >= 3.5) {
    kategori = "Sangat layak";
  } else if (skorAkhir >= 3.1) {
    kategori = "Layak";
  } else {
    kategori = "Belum Layak";
  }

  // ✅ Status lolos atau tidak
  const lolos = skorAkhir >= 3.1;

  return { ncf, nsf, skorAkhir, kategori, lolos };
}
