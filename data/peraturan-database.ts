export interface Peraturan {
  id: string;
  jenis: string;
  nomor: string;
  tahun: string;
  tentang: string;
  file: string;
  kategori: string;
  status: string;
  tanggal: string;
  instansi: string;
  deskripsi: string;
}

export const peraturanDatabase: Peraturan[] = [
  // Undang-Undang
  {
    id: "uu-11-2020",
    jenis: "Undang-Undang",
    nomor: "11",
    tahun: "2020",
    tentang: "Cipta Kerja",
    file: "https://legalitas.org/peraturan/uu-11-2020.pdf",
    kategori: "Ekonomi & Investasi",
    status: "Berlaku",
    tanggal: "2020-11-02",
    instansi: "DPR RI",
    deskripsi: "Undang-Undang tentang Cipta Kerja untuk menciptakan lapangan kerja dan meningkatkan investasi"
  },
  {
    id: "uu-7-2021",
    jenis: "Undang-Undang",
    nomor: "7",
    tahun: "2021",
    tentang: "Harmonisasi Peraturan Perpajakan",
    file: "https://legalitas.org/peraturan/uu-7-2021.pdf",
    kategori: "Perpajakan",
    status: "Berlaku",
    tanggal: "2021-10-29",
    instansi: "DPR RI",
    deskripsi: "Undang-Undang tentang Harmonisasi Peraturan Perpajakan untuk meningkatkan kepatuhan pajak"
  },
  {
    id: "uu-1-2023",
    jenis: "Undang-Undang",
    nomor: "1",
    tahun: "2023",
    tentang: "Kitab Undang-Undang Hukum Pidana",
    file: "https://legalitas.org/peraturan/uu-1-2023.pdf",
    kategori: "Hukum Pidana",
    status: "Berlaku",
    tanggal: "2023-01-02",
    instansi: "DPR RI",
    deskripsi: "Undang-Undang tentang Kitab Undang-Undang Hukum Pidana yang baru"
  },
  {
    id: "uu-6-2023",
    jenis: "Undang-Undang",
    nomor: "6",
    tahun: "2023",
    tentang: "Harmonisasi Peraturan Keuangan Negara",
    file: "https://legalitas.org/peraturan/uu-6-2023.pdf",
    kategori: "Keuangan Negara",
    status: "Berlaku",
    tanggal: "2023-01-17",
    instansi: "DPR RI",
    deskripsi: "Undang-Undang tentang Harmonisasi Peraturan Keuangan Negara"
  },
  {
    id: "uu-10-2023",
    jenis: "Undang-Undang",
    nomor: "10",
    tahun: "2023",
    tentang: "Pengembangan dan Penguatan Sektor Keuangan",
    file: "https://legalitas.org/peraturan/uu-10-2023.pdf",
    kategori: "Sektor Keuangan",
    status: "Berlaku",
    tanggal: "2023-02-15",
    instansi: "DPR RI",
    deskripsi: "Undang-Undang tentang Pengembangan dan Penguatan Sektor Keuangan"
  },
  {
    id: "uu-20-2023",
    jenis: "Undang-Undang",
    nomor: "20",
    tahun: "2023",
    tentang: "Kesehatan",
    file: "https://legalitas.org/peraturan/uu-20-2023.pdf",
    kategori: "Kesehatan",
    status: "Berlaku",
    tanggal: "2023-08-08",
    instansi: "DPR RI",
    deskripsi: "Undang-Undang tentang Kesehatan yang baru"
  },

  // Peraturan Pemerintah
  {
    id: "pp-5-2021",
    jenis: "Peraturan Pemerintah",
    nomor: "5",
    tahun: "2021",
    tentang: "Penyelenggaraan Perizinan Berusaha Berbasis Risiko",
    file: "https://legalitas.org/peraturan/pp-5-2021.pdf",
    kategori: "Perizinan Usaha",
    status: "Berlaku",
    tanggal: "2021-02-02",
    instansi: "Pemerintah RI",
    deskripsi: "Peraturan Pemerintah tentang Penyelenggaraan Perizinan Berusaha Berbasis Risiko"
  },
  {
    id: "pp-6-2021",
    jenis: "Peraturan Pemerintah",
    nomor: "6",
    tahun: "2021",
    tentang: "Penyelenggaraan Perizinan Berusaha di Daerah",
    file: "https://legalitas.org/peraturan/pp-6-2021.pdf",
    kategori: "Perizinan Usaha",
    status: "Berlaku",
    tanggal: "2021-02-02",
    instansi: "Pemerintah RI",
    deskripsi: "Peraturan Pemerintah tentang Penyelenggaraan Perizinan Berusaha di Daerah"
  },
  {
    id: "pp-12-2023",
    jenis: "Peraturan Pemerintah",
    nomor: "12",
    tahun: "2023",
    tentang: "Tata Cara Perizinan Usaha Mikro dan Kecil",
    file: "https://legalitas.org/peraturan/pp-12-2023.pdf",
    kategori: "UMKM",
    status: "Berlaku",
    tanggal: "2023-03-15",
    instansi: "Pemerintah RI",
    deskripsi: "Peraturan Pemerintah tentang Tata Cara Perizinan Usaha Mikro dan Kecil"
  },
  {
    id: "pp-1-2024",
    jenis: "Peraturan Pemerintah",
    nomor: "1",
    tahun: "2024",
    tentang: "Penataan Ruang Laut",
    file: "https://legalitas.org/peraturan/pp-1-2024.pdf",
    kategori: "Penataan Ruang",
    status: "Berlaku",
    tanggal: "2024-01-15",
    instansi: "Pemerintah RI",
    deskripsi: "Peraturan Pemerintah tentang Penataan Ruang Laut"
  },
  {
    id: "pp-14-2023",
    jenis: "Peraturan Pemerintah",
    nomor: "14",
    tahun: "2023",
    tentang: "Penyertaan Modal Negara",
    file: "https://legalitas.org/peraturan/pp-14-2023.pdf",
    kategori: "Keuangan Negara",
    status: "Berlaku",
    tanggal: "2023-04-20",
    instansi: "Pemerintah RI",
    deskripsi: "Peraturan Pemerintah tentang Penyertaan Modal Negara"
  },

  // Peraturan Presiden
  {
    id: "perpres-10-2021",
    jenis: "Peraturan Presiden",
    nomor: "10",
    tahun: "2021",
    tentang: "Bidang Usaha Penanaman Modal",
    file: "https://legalitas.org/peraturan/perpres-10-2021.pdf",
    kategori: "Investasi",
    status: "Berlaku",
    tanggal: "2021-03-04",
    instansi: "Presiden RI",
    deskripsi: "Peraturan Presiden tentang Bidang Usaha Penanaman Modal"
  },
  {
    id: "perpres-49-2021",
    jenis: "Peraturan Presiden",
    nomor: "49",
    tahun: "2021",
    tentang: "Perubahan atas Perpres 10/2021 tentang Bidang Usaha Penanaman Modal",
    file: "https://legalitas.org/peraturan/perpres-49-2021.pdf",
    kategori: "Investasi",
    status: "Berlaku",
    tanggal: "2021-06-25",
    instansi: "Presiden RI",
    deskripsi: "Perubahan atas Perpres 10/2021 tentang Bidang Usaha Penanaman Modal"
  },
  {
    id: "perpres-82-2023",
    jenis: "Peraturan Presiden",
    nomor: "82",
    tahun: "2023",
    tentang: "Percepatan Iklim Investasi Nasional",
    file: "https://legalitas.org/peraturan/perpres-82-2023.pdf",
    kategori: "Investasi",
    status: "Berlaku",
    tanggal: "2023-08-30",
    instansi: "Presiden RI",
    deskripsi: "Peraturan Presiden tentang Percepatan Iklim Investasi Nasional"
  },
  {
    id: "perpres-1-2024",
    jenis: "Peraturan Presiden",
    nomor: "1",
    tahun: "2024",
    tentang: "Penyederhanaan Birokrasi",
    file: "https://legalitas.org/peraturan/perpres-1-2024.pdf",
    kategori: "Birokrasi",
    status: "Berlaku",
    tanggal: "2024-01-10",
    instansi: "Presiden RI",
    deskripsi: "Peraturan Presiden tentang Penyederhanaan Birokrasi"
  },
  {
    id: "perpres-2-2024",
    jenis: "Peraturan Presiden",
    nomor: "2",
    tahun: "2024",
    tentang: "Dewan Nasional Ekonomi Kreatif",
    file: "https://legalitas.org/peraturan/perpres-2-2024.pdf",
    kategori: "Ekonomi Kreatif",
    status: "Berlaku",
    tanggal: "2024-01-20",
    instansi: "Presiden RI",
    deskripsi: "Peraturan Presiden tentang Dewan Nasional Ekonomi Kreatif"
  },

  // Instruksi Presiden
  {
    id: "inpres-2-2022",
    jenis: "Instruksi Presiden",
    nomor: "2",
    tahun: "2022",
    tentang: "Percepatan Peningkatan Penggunaan Produk Dalam Negeri",
    file: "https://legalitas.org/peraturan/inpres-2-2022.pdf",
    kategori: "Produk Dalam Negeri",
    status: "Berlaku",
    tanggal: "2022-03-30",
    instansi: "Presiden RI",
    deskripsi: "Instruksi Presiden tentang Percepatan Peningkatan Penggunaan Produk Dalam Negeri"
  },
  {
    id: "inpres-1-2023",
    jenis: "Instruksi Presiden",
    nomor: "1",
    tahun: "2023",
    tentang: "Percepatan Kemudahan Berusaha",
    file: "https://legalitas.org/peraturan/inpres-1-2023.pdf",
    kategori: "Kemudahan Berusaha",
    status: "Berlaku",
    tanggal: "2023-01-15",
    instansi: "Presiden RI",
    deskripsi: "Instruksi Presiden tentang Percepatan Kemudahan Berusaha"
  },
  {
    id: "inpres-3-2024",
    jenis: "Instruksi Presiden",
    nomor: "3",
    tahun: "2024",
    tentang: "Pemberantasan Korupsi Terintegrasi",
    file: "https://legalitas.org/peraturan/inpres-3-2024.pdf",
    kategori: "Pemberantasan Korupsi",
    status: "Berlaku",
    tanggal: "2024-02-01",
    instansi: "Presiden RI",
    deskripsi: "Instruksi Presiden tentang Pemberantasan Korupsi Terintegrasi"
  },

  // Keputusan Presiden
  {
    id: "keppres-12-2020",
    jenis: "Keputusan Presiden",
    nomor: "12",
    tahun: "2020",
    tentang: "Penetapan Bencana Nonalam Penyebaran Covid-19 sebagai Bencana Nasional",
    file: "https://legalitas.org/peraturan/keppres-12-2020.pdf",
    kategori: "Penanggulangan Bencana",
    status: "Berlaku",
    tanggal: "2020-04-13",
    instansi: "Presiden RI",
    deskripsi: "Keputusan Presiden tentang Penetapan Bencana Nonalam Penyebaran Covid-19 sebagai Bencana Nasional"
  },
  {
    id: "keppres-3-2021",
    jenis: "Keputusan Presiden",
    nomor: "3",
    tahun: "2021",
    tentang: "Satuan Tugas Percepatan Investasi",
    file: "https://legalitas.org/peraturan/keppres-3-2021.pdf",
    kategori: "Investasi",
    status: "Berlaku",
    tanggal: "2021-01-25",
    instansi: "Presiden RI",
    deskripsi: "Keputusan Presiden tentang Satuan Tugas Percepatan Investasi"
  },
  {
    id: "keppres-5-2024",
    jenis: "Keputusan Presiden",
    nomor: "5",
    tahun: "2024",
    tentang: "Hari Libur Nasional",
    file: "https://legalitas.org/peraturan/keppres-5-2024.pdf",
    kategori: "Hari Libur",
    status: "Berlaku",
    tanggal: "2024-01-15",
    instansi: "Presiden RI",
    deskripsi: "Keputusan Presiden tentang Hari Libur Nasional Tahun 2024"
  },

  // Peraturan Menteri
  {
    id: "permen-3-2021",
    jenis: "Peraturan Menteri",
    nomor: "3",
    tahun: "2021",
    tentang: "Standar Kegiatan Usaha dan Produk pada Penyelenggaraan Perizinan Berusaha Berbasis Risiko",
    file: "https://legalitas.org/peraturan/permen-3-2021.pdf",
    kategori: "Perizinan Usaha",
    status: "Berlaku",
    tanggal: "2021-02-02",
    instansi: "Kementerian Investasi/BKPM",
    deskripsi: "Peraturan Menteri tentang Standar Kegiatan Usaha dan Produk pada Penyelenggaraan Perizinan Berusaha Berbasis Risiko"
  },
  {
    id: "permen-5-2021",
    jenis: "Peraturan Menteri",
    nomor: "5",
    tahun: "2021",
    tentang: "Perizinan Berusaha Berbasis Risiko Sektor Perdagangan",
    file: "https://legalitas.org/peraturan/permendag-5-2021.pdf",
    kategori: "Perdagangan",
    status: "Berlaku",
    tanggal: "2021-02-15",
    instansi: "Kementerian Perdagangan",
    deskripsi: "Peraturan Menteri tentang Perizinan Berusaha Berbasis Risiko Sektor Perdagangan"
  },
  {
    id: "permen-1-2022",
    jenis: "Peraturan Menteri",
    nomor: "1",
    tahun: "2022",
    tentang: "Tanda Daftar Usaha Pariwisata Berbasis Risiko",
    file: "https://legalitas.org/peraturan/permenparekraf-1-2022.pdf",
    kategori: "Pariwisata",
    status: "Berlaku",
    tanggal: "2022-01-20",
    instansi: "Kementerian Pariwisata dan Ekonomi Kreatif",
    deskripsi: "Peraturan Menteri tentang Tanda Daftar Usaha Pariwisata Berbasis Risiko"
  },
  {
    id: "permen-7-2022",
    jenis: "Peraturan Menteri",
    nomor: "7",
    tahun: "2022",
    tentang: "Penyelenggaraan Sertifikasi Halal",
    file: "https://legalitas.org/peraturan/permen-7-2022.pdf",
    kategori: "Sertifikasi Halal",
    status: "Berlaku",
    tanggal: "2022-03-10",
    instansi: "Kementerian Agama",
    deskripsi: "Peraturan Menteri tentang Penyelenggaraan Sertifikasi Halal"
  },
  {
    id: "permen-8-2023",
    jenis: "Peraturan Menteri",
    nomor: "8",
    tahun: "2023",
    tentang: "Perizinan Sektor Konstruksi",
    file: "https://legalitas.org/peraturan/permen-8-2023.pdf",
    kategori: "Konstruksi",
    status: "Berlaku",
    tanggal: "2023-04-25",
    instansi: "Kementerian Pekerjaan Umum dan Perumahan Rakyat",
    deskripsi: "Peraturan Menteri tentang Perizinan Sektor Konstruksi"
  },
  {
    id: "permen-2-2024",
    jenis: "Peraturan Menteri",
    nomor: "2",
    tahun: "2024",
    tentang: "Digitalisasi Perizinan",
    file: "https://legalitas.org/peraturan/permen-2-2024.pdf",
    kategori: "Digitalisasi",
    status: "Berlaku",
    tanggal: "2024-01-20",
    instansi: "Kementerian Investasi/BKPM",
    deskripsi: "Peraturan Menteri tentang Digitalisasi Perizinan"
  },
  {
    id: "permen-4-2024",
    jenis: "Peraturan Menteri",
    nomor: "4",
    tahun: "2024",
    tentang: "Standar Pelayanan Perizinan",
    file: "https://legalitas.org/peraturan/permen-4-2024.pdf",
    kategori: "Standar Pelayanan",
    status: "Berlaku",
    tanggal: "2024-02-01",
    instansi: "Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi",
    deskripsi: "Peraturan Menteri tentang Standar Pelayanan Perizinan"
  },

  // Keputusan Menteri
  {
    id: "kemkeu-sk-123-2022",
    jenis: "Keputusan Menteri",
    nomor: "SK-123",
    tahun: "2022",
    tentang: "Penetapan KBLI Tertentu",
    file: "https://legalitas.org/peraturan/kemkeu-sk-123-2022.pdf",
    kategori: "KBLI",
    status: "Berlaku",
    tanggal: "2022-06-15",
    instansi: "Kementerian Keuangan",
    deskripsi: "Keputusan Menteri tentang Penetapan KBLI Tertentu"
  },
  {
    id: "kmk-sk-45-2020",
    jenis: "Keputusan Menteri",
    nomor: "SK-45",
    tahun: "2020",
    tentang: "Tim Pelaksana Reformasi Regulasi",
    file: "https://legalitas.org/peraturan/kmk-sk-45-2020.pdf",
    kategori: "Reformasi Regulasi",
    status: "Berlaku",
    tanggal: "2020-08-20",
    instansi: "Kementerian Koordinator Bidang Perekonomian",
    deskripsi: "Keputusan Menteri tentang Tim Pelaksana Reformasi Regulasi"
  },
  {
    id: "kmk-sk-77-2024",
    jenis: "Keputusan Menteri",
    nomor: "SK-77",
    tahun: "2024",
    tentang: "Forum Sinkronisasi Peraturan",
    file: "https://legalitas.org/peraturan/kmk-sk-77-2024.pdf",
    kategori: "Sinkronisasi Peraturan",
    status: "Berlaku",
    tanggal: "2024-01-30",
    instansi: "Kementerian Koordinator Bidang Perekonomian",
    deskripsi: "Keputusan Menteri tentang Forum Sinkronisasi Peraturan"
  },

  // Peraturan Daerah
  {
    id: "perda-1-2021",
    jenis: "Peraturan Daerah",
    nomor: "1",
    tahun: "2021",
    tentang: "Rencana Tata Ruang Wilayah",
    file: "https://legalitas.org/peraturan/perda-1-2021.pdf",
    kategori: "Tata Ruang",
    status: "Berlaku",
    tanggal: "2021-03-15",
    instansi: "DPRD Provinsi",
    deskripsi: "Peraturan Daerah tentang Rencana Tata Ruang Wilayah"
  },
  {
    id: "perda-2-2022",
    jenis: "Peraturan Daerah",
    nomor: "2",
    tahun: "2022",
    tentang: "Pajak Daerah dan Retribusi Daerah",
    file: "https://legalitas.org/peraturan/perda-2-2022.pdf",
    kategori: "Pajak Daerah",
    status: "Berlaku",
    tanggal: "2022-04-20",
    instansi: "DPRD Provinsi",
    deskripsi: "Peraturan Daerah tentang Pajak Daerah dan Retribusi Daerah"
  },
  {
    id: "perda-6-2023",
    jenis: "Peraturan Daerah",
    nomor: "6",
    tahun: "2023",
    tentang: "Perubahan RTRW",
    file: "https://legalitas.org/peraturan/perda-6-2023.pdf",
    kategori: "Tata Ruang",
    status: "Berlaku",
    tanggal: "2023-07-10",
    instansi: "DPRD Provinsi",
    deskripsi: "Peraturan Daerah tentang Perubahan Rencana Tata Ruang Wilayah"
  },
  {
    id: "perda-7-2024",
    jenis: "Peraturan Daerah",
    nomor: "7",
    tahun: "2024",
    tentang: "Pemberdayaan Koperasi",
    file: "https://legalitas.org/peraturan/perda-7-2024.pdf",
    kategori: "Koperasi",
    status: "Berlaku",
    tanggal: "2024-01-25",
    instansi: "DPRD Provinsi",
    deskripsi: "Peraturan Daerah tentang Pemberdayaan Koperasi"
  },

  // Peraturan Gubernur
  {
    id: "pergub-3-2021",
    jenis: "Peraturan Gubernur",
    nomor: "3",
    tahun: "2021",
    tentang: "Pelaksanaan Perizinan Berusaha Berbasis Risiko di Provinsi",
    file: "https://legalitas.org/peraturan/pergub-3-2021.pdf",
    kategori: "Perizinan Usaha",
    status: "Berlaku",
    tanggal: "2021-03-25",
    instansi: "Gubernur",
    deskripsi: "Peraturan Gubernur tentang Pelaksanaan Perizinan Berusaha Berbasis Risiko di Provinsi"
  },
  {
    id: "pergub-12-2022",
    jenis: "Peraturan Gubernur",
    nomor: "12",
    tahun: "2022",
    tentang: "Pelayanan Perizinan Terintegrasi",
    file: "https://legalitas.org/peraturan/pergub-12-2022.pdf",
    kategori: "Pelayanan Perizinan",
    status: "Berlaku",
    tanggal: "2022-06-15",
    instansi: "Gubernur",
    deskripsi: "Peraturan Gubernur tentang Pelayanan Perizinan Terintegrasi"
  },
  {
    id: "pergub-22-2023",
    jenis: "Peraturan Gubernur",
    nomor: "22",
    tahun: "2023",
    tentang: "Pembangunan Berkelanjutan",
    file: "https://legalitas.org/peraturan/pergub-22-2023.pdf",
    kategori: "Pembangunan",
    status: "Berlaku",
    tanggal: "2023-09-20",
    instansi: "Gubernur",
    deskripsi: "Peraturan Gubernur tentang Pembangunan Berkelanjutan"
  },
  {
    id: "pergub-4-2024",
    jenis: "Peraturan Gubernur",
    nomor: "4",
    tahun: "2024",
    tentang: "Penguatan Investasi Daerah",
    file: "https://legalitas.org/peraturan/pergub-4-2024.pdf",
    kategori: "Investasi",
    status: "Berlaku",
    tanggal: "2024-02-05",
    instansi: "Gubernur",
    deskripsi: "Peraturan Gubernur tentang Penguatan Investasi Daerah"
  },

  // Peraturan Bupati
  {
    id: "perbup-4-2021",
    jenis: "Peraturan Bupati",
    nomor: "4",
    tahun: "2021",
    tentang: "OSS Berbasis Risiko di Kabupaten",
    file: "https://legalitas.org/peraturan/perbup-4-2021.pdf",
    kategori: "OSS",
    status: "Berlaku",
    tanggal: "2021-04-10",
    instansi: "Bupati",
    deskripsi: "Peraturan Bupati tentang OSS Berbasis Risiko di Kabupaten"
  },
  {
    id: "perbup-8-2022",
    jenis: "Peraturan Bupati",
    nomor: "8",
    tahun: "2022",
    tentang: "Penguatan UMKM",
    file: "https://legalitas.org/peraturan/perbup-8-2022.pdf",
    kategori: "UMKM",
    status: "Berlaku",
    tanggal: "2022-07-25",
    instansi: "Bupati",
    deskripsi: "Peraturan Bupati tentang Penguatan UMKM"
  },
  {
    id: "perbup-11-2023",
    jenis: "Peraturan Bupati",
    nomor: "11",
    tahun: "2023",
    tentang: "Perlindungan UMKM",
    file: "https://legalitas.org/peraturan/perbup-11-2023.pdf",
    kategori: "UMKM",
    status: "Berlaku",
    tanggal: "2023-10-15",
    instansi: "Bupati",
    deskripsi: "Peraturan Bupati tentang Perlindungan UMKM"
  },
  {
    id: "perbup-12-2024",
    jenis: "Peraturan Bupati",
    nomor: "12",
    tahun: "2024",
    tentang: "Pengembangan Ekonomi Kreatif",
    file: "https://legalitas.org/peraturan/perbup-12-2024.pdf",
    kategori: "Ekonomi Kreatif",
    status: "Berlaku",
    tanggal: "2024-01-30",
    instansi: "Bupati",
    deskripsi: "Peraturan Bupati tentang Pengembangan Ekonomi Kreatif"
  },

  // Peraturan Walikota
  {
    id: "perwali-5-2021",
    jenis: "Peraturan Walikota",
    nomor: "5",
    tahun: "2021",
    tentang: "OSS Berbasis Risiko di Kota",
    file: "https://legalitas.org/peraturan/perwali-5-2021.pdf",
    kategori: "OSS",
    status: "Berlaku",
    tanggal: "2021-04-15",
    instansi: "Walikota",
    deskripsi: "Peraturan Walikota tentang OSS Berbasis Risiko di Kota"
  },
  {
    id: "perwali-9-2022",
    jenis: "Peraturan Walikota",
    nomor: "9",
    tahun: "2022",
    tentang: "Peningkatan Investasi Daerah",
    file: "https://legalitas.org/peraturan/perwali-9-2022.pdf",
    kategori: "Investasi",
    status: "Berlaku",
    tanggal: "2022-08-20",
    instansi: "Walikota",
    deskripsi: "Peraturan Walikota tentang Peningkatan Investasi Daerah"
  },
  {
    id: "perwali-13-2023",
    jenis: "Peraturan Walikota",
    nomor: "13",
    tahun: "2023",
    tentang: "Inovasi Pelayanan Publik",
    file: "https://legalitas.org/peraturan/perwali-13-2023.pdf",
    kategori: "Pelayanan Publik",
    status: "Berlaku",
    tanggal: "2023-11-10",
    instansi: "Walikota",
    deskripsi: "Peraturan Walikota tentang Inovasi Pelayanan Publik"
  },
  {
    id: "perwali-14-2024",
    jenis: "Peraturan Walikota",
    nomor: "14",
    tahun: "2024",
    tentang: "Digitalisasi Administrasi",
    file: "https://legalitas.org/peraturan/perwali-14-2024.pdf",
    kategori: "Digitalisasi",
    status: "Berlaku",
    tanggal: "2024-02-10",
    instansi: "Walikota",
    deskripsi: "Peraturan Walikota tentang Digitalisasi Administrasi"
  },

  // Peraturan Kepala
  {
    id: "perka-1-2021",
    jenis: "Peraturan Kepala",
    nomor: "1",
    tahun: "2021",
    tentang: "Pedoman Standar Pelayanan Publik",
    file: "https://legalitas.org/peraturan/perka-1-2021.pdf",
    kategori: "Pelayanan Publik",
    status: "Berlaku",
    tanggal: "2021-05-20",
    instansi: "Kepala Lembaga",
    deskripsi: "Peraturan Kepala tentang Pedoman Standar Pelayanan Publik"
  },
  {
    id: "perka-3-2023",
    jenis: "Peraturan Kepala",
    nomor: "3",
    tahun: "2023",
    tentang: "Pedoman Integrasi Data",
    file: "https://legalitas.org/peraturan/perka-3-2023.pdf",
    kategori: "Integrasi Data",
    status: "Berlaku",
    tanggal: "2023-08-15",
    instansi: "Kepala Lembaga",
    deskripsi: "Peraturan Kepala tentang Pedoman Integrasi Data"
  },
  {
    id: "perka-4-2024",
    jenis: "Peraturan Kepala",
    nomor: "4",
    tahun: "2024",
    tentang: "Standar Layanan Berbasis Elektronik",
    file: "https://legalitas.org/peraturan/perka-4-2024.pdf",
    kategori: "Layanan Elektronik",
    status: "Berlaku",
    tanggal: "2024-01-25",
    instansi: "Kepala Lembaga",
    deskripsi: "Peraturan Kepala tentang Standar Layanan Berbasis Elektronik"
  },

  // Surat Edaran
  {
    id: "se-6-2020",
    jenis: "Surat Edaran",
    nomor: "6",
    tahun: "2020",
    tentang: "Pelayanan Perizinan Selama Masa Pandemi",
    file: "https://legalitas.org/peraturan/se-6-2020.pdf",
    kategori: "Pelayanan Perizinan",
    status: "Berlaku",
    tanggal: "2020-04-01",
    instansi: "Kementerian",
    deskripsi: "Surat Edaran tentang Pelayanan Perizinan Selama Masa Pandemi"
  },
  {
    id: "se-2-2021",
    jenis: "Surat Edaran",
    nomor: "2",
    tahun: "2021",
    tentang: "Adaptasi Kebiasaan Baru di Perkantoran",
    file: "https://legalitas.org/peraturan/se-2-2021.pdf",
    kategori: "Kesehatan",
    status: "Berlaku",
    tanggal: "2021-06-15",
    instansi: "Kementerian",
    deskripsi: "Surat Edaran tentang Adaptasi Kebiasaan Baru di Perkantoran"
  },
  {
    id: "se-5-2023",
    jenis: "Surat Edaran",
    nomor: "5",
    tahun: "2023",
    tentang: "Penggunaan Tanda Tangan Elektronik",
    file: "https://legalitas.org/peraturan/se-5-2023.pdf",
    kategori: "Tanda Tangan Elektronik",
    status: "Berlaku",
    tanggal: "2023-09-20",
    instansi: "Kementerian",
    deskripsi: "Surat Edaran tentang Penggunaan Tanda Tangan Elektronik"
  },
  {
    id: "se-7-2024",
    jenis: "Surat Edaran",
    nomor: "7",
    tahun: "2024",
    tentang: "Panduan Pelayanan Terpadu",
    file: "https://legalitas.org/peraturan/se-7-2024.pdf",
    kategori: "Pelayanan Terpadu",
    status: "Berlaku",
    tanggal: "2024-02-15",
    instansi: "Kementerian",
    deskripsi: "Surat Edaran tentang Panduan Pelayanan Terpadu"
  }
];

// Helper functions
export function getPeraturanByJenis(jenis: string): Peraturan[] {
  return peraturanDatabase.filter(p => p.jenis === jenis);
}

export function getPeraturanByKategori(kategori: string): Peraturan[] {
  return peraturanDatabase.filter(p => p.kategori === kategori);
}

export function getPeraturanByTahun(tahun: string): Peraturan[] {
  return peraturanDatabase.filter(p => p.tahun === tahun);
}

export function searchPeraturan(query: string): Peraturan[] {
  const q = query.toLowerCase().trim();
  return peraturanDatabase.filter(p => 
    p.jenis.toLowerCase().includes(q) ||
    p.nomor.toLowerCase().includes(q) ||
    p.tahun.includes(q) ||
    p.tentang.toLowerCase().includes(q) ||
    p.kategori.toLowerCase().includes(q) ||
    p.instansi.toLowerCase().includes(q) ||
    p.deskripsi.toLowerCase().includes(q)
  );
}

export function getPeraturanByStatus(status: string): Peraturan[] {
  return peraturanDatabase.filter(p => p.status === status);
}

export function getTotalPeraturanCount(): number {
  return peraturanDatabase.length;
}

export function getPeraturanCategories(): string[] {
  return [...new Set(peraturanDatabase.map(p => p.kategori))];
}

export function getPeraturanJenis(): string[] {
  return [...new Set(peraturanDatabase.map(p => p.jenis))];
}

export function getPeraturanYears(): string[] {
  return [...new Set(peraturanDatabase.map(p => p.tahun))].sort((a, b) => b.localeCompare(a));
}
