// KBLI Database - Comprehensive 5-digit codes with PB UMKU details
// Based on OSS Indonesia standards and regulations

export interface KBLIItem {
  kode: string;
  nama: string;
  deskripsi: string;
  ruangLingkup: string;
  catatan: string;
  kategori: string;
  risiko: 'Rendah' | 'Sedang' | 'Tinggi';
  pbUmku?: string[];
  regulasi?: string[];
  investasiMin?: string;
  ketentuanKhusus?: string;
}

export const kbliDatabase: KBLIItem[] = [
  // A - PERTANIAN, KEHUTANAN DAN PERIKANAN
  {
    kode: '01111',
    nama: 'Pertanian Jagung',
    deskripsi: 'Kelompok ini mencakup usaha pertanian komoditas jagung mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman jagung. Termasuk kegiatan pembibitan dan pembenihan tanaman jagung.',
    ruangLingkup: 'Usaha pertanian jagung, pembibitan, pembenihan, pengolahan lahan, penanaman, pemeliharaan, pemanenan, pasca panen.',
    catatan: 'Tidak termasuk pengolahan jagung menjadi produk olahan.',
    kategori: 'A',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['UU No. 13 Tahun 2010 tentang Hortikultura', 'Permentan No. 86 Tahun 2013 tentang Sertifikasi Benih Tanaman'],
    investasiMin: 'Rp 50.000.000',
    ketentuanKhusus: 'Wajib memiliki sertifikat benih untuk pembibitan'
  },
  {
    kode: '01112',
    nama: 'Pertanian Padi',
    deskripsi: 'Kelompok ini mencakup usaha pertanian padi sawah dan padi gogo, termasuk kegiatan pembibitan, penanaman, pemeliharaan, pemanenan, dan pasca panen padi.',
    ruangLingkup: 'Pertanian padi sawah, padi gogo, pembibitan, penanaman, pemeliharaan, pemanenan, pasca panen.',
    catatan: 'Tidak termasuk pengolahan beras.',
    kategori: 'A',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['UU No. 7 Tahun 1996 tentang Pangan', 'Permentan No. 86 Tahun 2013 tentang Sertifikasi Benih Tanaman'],
    investasiMin: 'Rp 50.000.000',
    ketentuanKhusus: 'Wajib memiliki sertifikat benih untuk pembibitan'
  },
  {
    kode: '01113',
    nama: 'Pertanian Kedelai',
    deskripsi: 'Kelompok ini mencakup usaha pertanian kedelai, termasuk kegiatan pembibitan, penanaman, pemeliharaan, pemanenan, dan pasca panen kedelai.',
    ruangLingkup: 'Pertanian kedelai, pembibitan, penanaman, pemeliharaan, pemanenan, pasca panen.',
    catatan: 'Tidak termasuk pengolahan kedelai menjadi produk olahan.',
    kategori: 'A',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['UU No. 13 Tahun 2010 tentang Hortikultura', 'Permentan No. 86 Tahun 2013 tentang Sertifikasi Benih Tanaman'],
    investasiMin: 'Rp 50.000.000',
    ketentuanKhusus: 'Wajib memiliki sertifikat benih untuk pembibitan'
  },
  {
    kode: '01114',
    nama: 'Pertanian Kacang Tanah',
    deskripsi: 'Kelompok ini mencakup usaha pertanian kacang tanah, termasuk kegiatan pembibitan, penanaman, pemeliharaan, pemanenan, dan pasca panen kacang tanah.',
    ruangLingkup: 'Pertanian kacang tanah, pembibitan, penanaman, pemeliharaan, pemanenan, pasca panen.',
    catatan: 'Tidak termasuk pengolahan kacang tanah menjadi produk olahan.',
    kategori: 'A',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['UU No. 13 Tahun 2010 tentang Hortikultura', 'Permentan No. 86 Tahun 2013 tentang Sertifikasi Benih Tanaman'],
    investasiMin: 'Rp 50.000.000',
    ketentuanKhusus: 'Wajib memiliki sertifikat benih untuk pembibitan'
  },
  {
    kode: '01115',
    nama: 'Pertanian Ubi Kayu',
    deskripsi: 'Kelompok ini mencakup usaha pertanian ubi kayu, termasuk kegiatan pembibitan, penanaman, pemeliharaan, pemanenan, dan pasca panen ubi kayu.',
    ruangLingkup: 'Pertanian ubi kayu, pembibitan, penanaman, pemeliharaan, pemanenan, pasca panen.',
    catatan: 'Tidak termasuk pengolahan ubi kayu menjadi produk olahan.',
    kategori: 'A',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['UU No. 13 Tahun 2010 tentang Hortikultura', 'Permentan No. 86 Tahun 2013 tentang Sertifikasi Benih Tanaman'],
    investasiMin: 'Rp 50.000.000',
    ketentuanKhusus: 'Wajib memiliki sertifikat benih untuk pembibitan'
  },

  // B - PERTAMBANGAN DAN PENGGALIAN
  {
    kode: '02101',
    nama: 'Pertambangan Batu Bara',
    deskripsi: 'Kelompok ini mencakup usaha pertambangan batu bara, baik pertambangan batu bara di permukaan tanah maupun di bawah tanah. Termasuk kegiatan pencucian, pengeringan, pemecahan, dan pengayakan batu bara.',
    ruangLingkup: 'Pertambangan batu bara, pencucian, pengeringan, pemecahan, pengayakan.',
    catatan: 'Tidak termasuk pengolahan batu bara menjadi produk olahan.',
    kategori: 'B',
    risiko: 'Tinggi',
    pbUmku: ['NIB', 'IUP', 'AMDAL'],
    regulasi: ['UU No. 4 Tahun 2009 tentang Pertambangan Mineral dan Batubara', 'Perpres No. 22 Tahun 2021 tentang Penyelenggaraan Penanaman Modal'],
    investasiMin: 'Rp 10.000.000.000',
    ketentuanKhusus: 'Wajib memiliki IUP dan AMDAL, investasi minimal Rp 10 miliar'
  },
  {
    kode: '02102',
    nama: 'Pertambangan Bijih Besi',
    deskripsi: 'Kelompok ini mencakup usaha pertambangan bijih besi, termasuk kegiatan penggalian, pengolahan, dan pemurnian bijih besi.',
    ruangLingkup: 'Pertambangan bijih besi, penggalian, pengolahan, pemurnian.',
    catatan: 'Tidak termasuk pembuatan besi dan baja.',
    kategori: 'B',
    risiko: 'Tinggi',
    pbUmku: ['NIB', 'IUP', 'AMDAL'],
    regulasi: ['UU No. 4 Tahun 2009 tentang Pertambangan Mineral dan Batubara', 'Perpres No. 22 Tahun 2021 tentang Penyelenggaraan Penanaman Modal'],
    investasiMin: 'Rp 10.000.000.000',
    ketentuanKhusus: 'Wajib memiliki IUP dan AMDAL, investasi minimal Rp 10 miliar'
  },

  // C - INDUSTRI PENGOLAHAN
  {
    kode: '10110',
    nama: 'Industri Pengolahan dan Pengawetan Daging',
    deskripsi: 'Kelompok ini mencakup usaha pengolahan dan pengawetan daging dari ternak, unggas, dan hewan lainnya. Termasuk pembuatan daging olahan seperti sosis, ham, bacon, dan produk daging olahan lainnya.',
    ruangLingkup: 'Pengolahan daging, pengawetan daging, pembuatan daging olahan, sosis, ham, bacon.',
    catatan: 'Tidak termasuk penjualan daging segar.',
    kategori: 'C',
    risiko: 'Sedang',
    pbUmku: ['NIB', 'SIUP', 'PIRT', 'BPOM'],
    regulasi: ['UU No. 18 Tahun 2012 tentang Pangan', 'Perka BPOM No. 22 Tahun 2019 tentang Pendaftaran Pangan Olahan'],
    investasiMin: 'Rp 500.000.000',
    ketentuanKhusus: 'Wajib memiliki sertifikat BPOM dan PIRT'
  },
  {
    kode: '10120',
    nama: 'Industri Pengolahan Ikan',
    deskripsi: 'Kelompok ini mencakup usaha pengolahan dan pengawetan ikan, termasuk pembuatan ikan kaleng, ikan asin, dan produk olahan ikan lainnya.',
    ruangLingkup: 'Pengolahan ikan, pengawetan ikan, ikan kaleng, ikan asin, produk olahan ikan.',
    catatan: 'Tidak termasuk penjualan ikan segar.',
    kategori: 'C',
    risiko: 'Sedang',
    pbUmku: ['NIB', 'SIUP', 'PIRT', 'BPOM'],
    regulasi: ['UU No. 31 Tahun 2004 tentang Perikanan', 'Perka BPOM No. 22 Tahun 2019 tentang Pendaftaran Pangan Olahan'],
    investasiMin: 'Rp 500.000.000',
    ketentuanKhusus: 'Wajib memiliki sertifikat BPOM dan PIRT'
  },

  // D - PENGADAAN LISTRIK, GAS, UAP/AIR PANAS DAN UDARA DINGIN
  {
    kode: '35101',
    nama: 'Pembangkitan Listrik',
    deskripsi: 'Kelompok ini mencakup usaha pembangkitan listrik dengan berbagai jenis pembangkit seperti PLTU, PLTG, PLTA, PLTS, dan pembangkit listrik lainnya.',
    ruangLingkup: 'Pembangkitan listrik, PLTU, PLTG, PLTA, PLTS, pembangkit listrik.',
    catatan: 'Tidak termasuk distribusi dan penjualan listrik.',
    kategori: 'D',
    risiko: 'Tinggi',
    pbUmku: ['NIB', 'IUPTL', 'AMDAL'],
    regulasi: ['UU No. 30 Tahun 2009 tentang Ketenagalistrikan', 'Perpres No. 22 Tahun 2021 tentang Penyelenggaraan Penanaman Modal'],
    investasiMin: 'Rp 10.000.000.000',
    ketentuanKhusus: 'Wajib memiliki IUPTL dan AMDAL, investasi minimal Rp 10 miliar'
  },

  // F - KONSTRUKSI
  {
    kode: '41011',
    nama: 'Konstruksi Bangunan Sipil',
    deskripsi: 'Kelompok ini mencakup usaha konstruksi bangunan sipil seperti jalan raya, jembatan, bendungan, pelabuhan, bandara, dan bangunan sipil lainnya.',
    ruangLingkup: 'Konstruksi jalan raya, jembatan, bendungan, pelabuhan, bandara, bangunan sipil.',
    catatan: 'Tidak termasuk perawatan dan pemeliharaan.',
    kategori: 'F',
    risiko: 'Sedang',
    pbUmku: ['NIB', 'SIUJK', 'SBU'],
    regulasi: ['UU No. 2 Tahun 2017 tentang Jasa Konstruksi', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 1.000.000.000',
    ketentuanKhusus: 'Wajib memiliki SIUJK dan SBU sesuai klasifikasi'
  },

  // G - PERDAGANGAN BESAR DAN ECERAN
  {
    kode: '46100',
    nama: 'Perdagangan Besar Atas Dasar Balas Jasa (Fee) Atau Kontrak',
    deskripsi: 'Kelompok ini mencakup usaha agen yang menerima komisi, perantara (makelar), pelelangan, dan pedagang besar lainnya yang memperdagangkan barang-barang di dalam negeri, luar negeri atas nama pihak lain. Kegiatannya antara lain agen komisi, broker barang dan seluruh perdagangan besar lainnya yang menjual atas nama dan tanggungan pihak lain; kegiatan yang terlibat dalam penjualan dan pembelian bersama atau melakukan transaksi atas nama perusahaan, termasuk melalui internet; dan agen yang terlibat dalam perdagangan seperti bahan baku pertanian, binatang hidup; bahan baku tekstil dan barang setengah jadi; bahan bakar, bijih-bijihan, logam dan industri kimia, termasuk pupuk; makanan, minuman dan tembakau; tekstil, pakaian, bulu, alas kaki dan barang dari kulit; kayu-kayuan dan bahan bangunan; mesin, termasuk mesin kantor dan komputer, perlengkapan industri, kapal, pesawat; furnitur, barang keperluan rumah tangga dan perangkat keras; kegiatan perdagangan besar rumah pelelangan; agen komisi zat radioaktif dan pembangkit radiasi pengion. Termasuk penyelenggara pasar lelang komoditas. Tidak termasuk kegiatan perdagangan besar mobil dan sepeda motor, dimasukkan dalam golongan 451 s.d. 454.',
    ruangLingkup: 'Seluruh, kecuali penyelenggara pasar lelang komoditas; Penyelenggara pasar lelang komoditas (Bappebti)',
    catatan: 'Merupakan Bidang Usaha Perdagangan Besar, sehingga tidak dapat dijalankan secara bersamaan dengan Bidang Usaha Perdagangan Eceran, sebagaimana diatur di dalam Peraturan Pemerintah No. 29 Tahun 2021 tentang Penyelenggaraan Bidang Perdagangan.',
    kategori: 'G',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['Peraturan Pemerintah No. 29 Tahun 2021 tentang Penyelenggaraan Bidang Perdagangan', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 500.000.000',
    ketentuanKhusus: 'Berdasarkan Peraturan BKPM Nomor 4 Tahun 2021 pada Pasal 12, pengecualian dari ketentuan minimum nilai investasi bagi PMA yaitu total investasi lebih besar dari Rp10.000.000.000,00 (sepuluh miliar rupiah), di luar tanah dan bangunan per bidang usaha KBLI 5 (lima) digit per lokasi proyek, berlaku diantaranya untuk: Kegiatan usaha perdagangan besar, dengan ketentuan: Total investasi lebih besar dari Rp10.000.000.000,00 (sepuluh miliar rupiah) di luar tanah dan bangunan, adalah per 4 (empat) digit awal KBLI.'
  },
  {
    kode: '47111',
    nama: 'Perdagangan Eceran Berbagai Macam Barang',
    deskripsi: 'Kelompok ini mencakup usaha perdagangan eceran berbagai macam barang dalam satu tempat seperti supermarket, hypermarket, dan toko serba ada.',
    ruangLingkup: 'Perdagangan eceran, supermarket, hypermarket, toko serba ada.',
    catatan: 'Tidak termasuk perdagangan grosir.',
    kategori: 'G',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['Peraturan Pemerintah No. 29 Tahun 2021 tentang Penyelenggaraan Bidang Perdagangan', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 500.000.000',
    ketentuanKhusus: 'Wajib memiliki izin lokasi usaha dari pemerintah daerah'
  },

  // H - PENGANGKUTAN DAN PERGUDANGAN
  {
    kode: '52101',
    nama: 'Pergudangan',
    deskripsi: 'Kelompok ini mencakup usaha pergudangan untuk menyimpan berbagai jenis barang, baik barang konsumsi maupun barang produksi.',
    ruangLingkup: 'Pergudangan, penyimpanan barang, gudang.',
    catatan: 'Tidak termasuk transportasi barang.',
    kategori: 'H',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['UU No. 17 Tahun 2008 tentang Pelayaran', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 1.000.000.000',
    ketentuanKhusus: 'Wajib memiliki izin lokasi dari pemerintah daerah'
  },

  // I - PENYEDIAAN AKOMODASI DAN MAKAN MINUM
  {
    kode: '55120',
    nama: 'Hotel Melati',
    deskripsi: 'Kelompok ini mencakup usaha penyediaan akomodasi jangka pendek berupa hotel melati dengan fasilitas terbatas.',
    ruangLingkup: 'Hotel melati, akomodasi jangka pendek, penginapan.',
    catatan: 'Tidak termasuk hotel berbintang.',
    kategori: 'I',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP', 'Izin Lokasi'],
    regulasi: ['UU No. 10 Tahun 2009 tentang Kepariwisataan', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 500.000.000',
    ketentuanKhusus: 'Wajib memiliki izin lokasi dan memenuhi standar kesehatan'
  },

  // J - INFORMASI DAN KOMUNIKASI
  {
    kode: '62012',
    nama: 'Konsultasi Komputer',
    deskripsi: 'Kelompok ini mencakup usaha konsultasi di bidang teknologi informasi dan komputer, termasuk perencanaan sistem, analisis kebutuhan, dan implementasi solusi IT.',
    ruangLingkup: 'Konsultasi komputer, teknologi informasi, perencanaan sistem, analisis kebutuhan, implementasi solusi IT.',
    catatan: 'Tidak termasuk pengembangan software.',
    kategori: 'J',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['UU No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 100.000.000',
    ketentuanKhusus: 'Wajib memiliki tenaga ahli bersertifikat'
  },

  // K - JASA KEUANGAN DAN ASURANSI
  {
    kode: '64192',
    nama: 'Perusahaan Pembiayaan',
    deskripsi: 'Kelompok ini mencakup usaha pembiayaan konsumen, pembiayaan modal kerja, dan pembiayaan investasi.',
    ruangLingkup: 'Pembiayaan konsumen, pembiayaan modal kerja, pembiayaan investasi.',
    catatan: 'Tidak termasuk bank dan asuransi.',
    kategori: 'K',
    risiko: 'Tinggi',
    pbUmku: ['NIB', 'SIUP', 'Izin OJK'],
    regulasi: ['UU No. 1 Tahun 2013 tentang Lembaga Keuangan Mikro', 'Peraturan OJK tentang Perusahaan Pembiayaan'],
    investasiMin: 'Rp 10.000.000.000',
    ketentuanKhusus: 'Wajib memiliki izin dari OJK, investasi minimal Rp 10 miliar'
  },

  // L - REAL ESTATE
  {
    kode: '68110',
    nama: 'Real Estate',
    deskripsi: 'Kelompok ini mencakup usaha pengembangan real estate, penjualan, dan penyewaan properti.',
    ruangLingkup: 'Pengembangan real estate, penjualan properti, penyewaan properti.',
    catatan: 'Tidak termasuk konstruksi bangunan.',
    kategori: 'L',
    risiko: 'Sedang',
    pbUmku: ['NIB', 'SIUP', 'Izin Lokasi'],
    regulasi: ['UU No. 1 Tahun 2011 tentang Perumahan dan Kawasan Permukiman', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 5.000.000.000',
    ketentuanKhusus: 'Wajib memiliki izin lokasi dan memenuhi standar perumahan'
  },

  // M - JASA PROFESIONAL, ILMIAH DAN TEKNIS
  {
    kode: '69101',
    nama: 'Kantor Pengacara',
    deskripsi: 'Kelompok ini mencakup usaha jasa hukum yang dilakukan oleh pengacara, termasuk konsultasi hukum, pembuatan dokumen hukum, dan representasi di pengadilan.',
    ruangLingkup: 'Jasa hukum, konsultasi hukum, pembuatan dokumen hukum, representasi di pengadilan.',
    catatan: 'Tidak termasuk notaris.',
    kategori: 'M',
    risiko: 'Sedang',
    pbUmku: ['NIB', 'SIUP', 'Izin Advokat'],
    regulasi: ['UU No. 18 Tahun 2003 tentang Advokat', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 100.000.000',
    ketentuanKhusus: 'Wajib memiliki izin advokat dan bergabung dengan organisasi advokat'
  },

  // N - JASA PERSEWAAN DAN PEMANFAATAN BARANG TAK BERWUJUD
  {
    kode: '77301',
    nama: 'Persewaan Mesin Pertanian',
    deskripsi: 'Kelompok ini mencakup usaha persewaan mesin pertanian seperti traktor, mesin tanam, mesin panen, dan mesin pertanian lainnya.',
    ruangLingkup: 'Persewaan mesin pertanian, traktor, mesin tanam, mesin panen.',
    catatan: 'Tidak termasuk penjualan mesin pertanian.',
    kategori: 'N',
    risiko: 'Sedang',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['UU No. 19 Tahun 2013 tentang Perlindungan dan Pemberdayaan Petani', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 500.000.000',
    ketentuanKhusus: 'Wajib memiliki asuransi untuk mesin yang disewakan'
  },

  // O - ADMINISTRASI PEMERINTAHAN, PERTAHANAN DAN JAMINAN SOSIAL WAJIB
  {
    kode: '84110',
    nama: 'Administrasi Pemerintahan Umum',
    deskripsi: 'Kelompok ini mencakup kegiatan administrasi pemerintahan umum, termasuk perencanaan, pengorganisasian, dan pengawasan kebijakan pemerintah.',
    ruangLingkup: 'Administrasi pemerintahan umum, perencanaan, pengorganisasian, pengawasan kebijakan pemerintah.',
    catatan: 'Hanya untuk lembaga pemerintah.',
    kategori: 'O',
    risiko: 'Tinggi',
    pbUmku: ['NIB', 'Izin Khusus'],
    regulasi: ['UU No. 5 Tahun 2014 tentang Aparatur Sipil Negara', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 1.000.000.000',
    ketentuanKhusus: 'Hanya untuk lembaga pemerintah dan BUMN'
  },

  // P - JASA PENDIDIKAN
  {
    kode: '85101',
    nama: 'Pendidikan Dasar',
    deskripsi: 'Kelompok ini mencakup usaha pendidikan dasar seperti SD, MI, dan pendidikan dasar lainnya.',
    ruangLingkup: 'Pendidikan dasar, SD, MI, pendidikan dasar.',
    catatan: 'Tidak termasuk pendidikan menengah.',
    kategori: 'P',
    risiko: 'Sedang',
    pbUmku: ['NIB', 'SIUP', 'Izin Operasional'],
    regulasi: ['UU No. 20 Tahun 2003 tentang Sistem Pendidikan Nasional', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 500.000.000',
    ketentuanKhusus: 'Wajib memiliki izin operasional dari Dinas Pendidikan'
  },

  // Q - JASA KESEHATAN DAN KEGIATAN SOSIAL
  {
    kode: '86101',
    nama: 'Rumah Sakit Umum',
    deskripsi: 'Kelompok ini mencakup usaha penyelenggaraan rumah sakit umum, termasuk pelayanan medis, keperawatan, dan administrasi kesehatan.',
    ruangLingkup: 'Rumah sakit umum, pelayanan medis, keperawatan, administrasi kesehatan.',
    catatan: 'Tidak termasuk klinik.',
    kategori: 'Q',
    risiko: 'Tinggi',
    pbUmku: ['NIB', 'SIUP', 'Izin Operasional', 'AMDAL'],
    regulasi: ['UU No. 44 Tahun 2009 tentang Rumah Sakit', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 10.000.000.000',
    ketentuanKhusus: 'Wajib memiliki izin operasional dari Kementerian Kesehatan, investasi minimal Rp 10 miliar'
  },

  // R - KESENIAN, HIBURAN DAN REKREASI
  {
    kode: '90001',
    nama: 'Kesenian Tradisional',
    deskripsi: 'Kelompok ini mencakup usaha kesenian tradisional, termasuk pertunjukan wayang, tari tradisional, dan kesenian tradisional lainnya.',
    ruangLingkup: 'Kesenian tradisional, pertunjukan wayang, tari tradisional.',
    catatan: 'Tidak termasuk kesenian modern.',
    kategori: 'R',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['UU No. 5 Tahun 2017 tentang Pemajuan Kebudayaan', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 100.000.000',
    ketentuanKhusus: 'Wajib melestarikan nilai budaya tradisional'
  },

  // S - KEGIATAN JASA LAINNYA
  {
    kode: '96001',
    nama: 'Jasa Pemandian dan Pencucian',
    deskripsi: 'Kelompok ini mencakup usaha jasa pemandian dan pencucian, termasuk laundry, dry cleaning, dan jasa pembersihan lainnya.',
    ruangLingkup: 'Jasa pemandian, jasa pencucian, laundry, dry cleaning, jasa pembersihan.',
    catatan: 'Tidak termasuk jasa kebersihan gedung.',
    kategori: 'S',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['UU No. 8 Tahun 1999 tentang Perlindungan Konsumen', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 100.000.000',
    ketentuanKhusus: 'Wajib memenuhi standar kebersihan dan kesehatan'
  },

  // T - JASA RUMAH TANGGA
  {
    kode: '97000',
    nama: 'Jasa Rumah Tangga',
    deskripsi: 'Kelompok ini mencakup usaha jasa rumah tangga, termasuk pembantu rumah tangga, tukang kebun, dan jasa rumah tangga lainnya.',
    ruangLingkup: 'Jasa rumah tangga, pembantu rumah tangga, tukang kebun.',
    catatan: 'Tidak termasuk jasa kebersihan gedung.',
    kategori: 'T',
    risiko: 'Rendah',
    pbUmku: ['NIB', 'SIUP'],
    regulasi: ['UU No. 13 Tahun 2003 tentang Ketenagakerjaan', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 50.000.000',
    ketentuanKhusus: 'Wajib memenuhi ketentuan ketenagakerjaan dan K3'
  },

  // U - BADAN INTERNASIONAL DAN BADAN EKSTRA INTERNASIONAL LAINNYA
  {
    kode: '99000',
    nama: 'Badan Internasional',
    deskripsi: 'Kelompok ini mencakup kegiatan badan internasional dan badan ekstra internasional lainnya yang beroperasi di Indonesia.',
    ruangLingkup: 'Badan internasional, badan ekstra internasional.',
    catatan: 'Hanya untuk lembaga internasional.',
    kategori: 'U',
    risiko: 'Tinggi',
    pbUmku: ['NIB', 'Izin Khusus'],
    regulasi: ['UU No. 37 Tahun 1999 tentang Hubungan Luar Negeri', 'Perpres No. 12 Tahun 2020 tentang Perizinan Berusaha Berbasis Risiko'],
    investasiMin: 'Rp 1.000.000.000',
    ketentuanKhusus: 'Hanya untuk lembaga internasional yang diakui pemerintah'
  }
];

// Export additional helper functions
export const getKBLIByCode = (code: string): KBLIItem | undefined => {
  return kbliDatabase.find(item => item.kode === code);
};

export const searchKBLI = (query: string): KBLIItem[] => {
  const searchTerm = query.toLowerCase().trim();
  return kbliDatabase.filter(item => 
    item.kode.toLowerCase().includes(searchTerm) ||
    item.nama.toLowerCase().includes(searchTerm) ||
    item.deskripsi.toLowerCase().includes(searchTerm) ||
    item.ruangLingkup.toLowerCase().includes(searchTerm) ||
    item.catatan.toLowerCase().includes(searchTerm) ||
    item.kategori.toLowerCase().includes(searchTerm) ||
    item.risiko.toLowerCase().includes(searchTerm)
  );
};

export const getKBLIByCategory = (category: string): KBLIItem[] => {
  if (!category) return kbliDatabase;
  return kbliDatabase.filter(item => item.kategori === category);
};

export const getTotalKBLICount = (): number => {
  return kbliDatabase.length;
};
