export const siteContacts = {
  phoneDisplay: '0811-113-666',
  phoneWhatsApp: '62811113666',
  email: 'Legal@RuangOffice.com',
  addressMain: 'Jl. Daan Mogot No. 176, Jakarta Barat',
  workHours: 'Senin–Jumat 09.00–17.00 WIB',
};

export const heroContent = {
  headlineLine1: 'Virtual Office, Pendirian PT,',
  headlineAccent: 'Perizinan Usaha',
  headlineLine2: 'di Jakarta & Seluruh Indonesia',
  description:
    'Ambil dari pengalaman panjang RuangOffice: alamat kantor siap pakai, pendirian badan usaha, dan pengurusan izin dengan standar OSS RBA. Layanan cepat, transparan, dan 100% legal untuk pertumbuhan bisnis Anda.',
  stats: [
    { label: 'Klien Aktif', value: '100+', description: 'Klien yang aktif menggunakan layanan' },
    { label: 'Tahun', value: '3+', description: 'Tahun pengalaman melayani' },
    { label: 'Kepuasan', value: '95%', description: 'Tingkat kepuasan klien' },
    { label: 'Support', value: '24/7', description: 'Layanan customer support' },
  ],
};

export const servicesContent = [
  {
    key: 'pendirian-pt',
    title: 'Pendirian PT',
    icon: '🏢',
    points: ['Akta Pendirian', 'SK Kemenkumham', 'NPWP Perusahaan', 'NIB OSS'],
    description:
      'Proses pendirian PT cepat dan legal sesuai standar OSS RBA. Selesai dalam 1-3 hari kerja dengan garansi 100% legal.',
    price: 'Mulai dari Rp 2,5 juta',
  },
  {
    key: 'pendirian-cv',
    title: 'Pendirian CV',
    icon: '🤝',
    points: ['Akta Pendirian', 'SK Kemenkumham', 'NPWP Perusahaan', 'Izin Usaha'],
    description:
      'Pendirian CV dengan proses mudah dan cepat. Cocok untuk bisnis skala kecil hingga menengah.',
    price: 'Mulai dari Rp 1,8 juta',
  },
  {
    key: 'virtual-office',
    title: 'Virtual Office',
    icon: '🏢',
    points: ['Alamat Bisnis Bergengsi', 'Layanan Surat', 'Meeting Room', 'Receptionist'],
    description:
      'Alamat bisnis profesional di lokasi strategis Jakarta lengkap dengan layanan surat menyurat dan meeting room.',
    price: 'Mulai dari Rp 200 ribu/bulan',
  },
  {
    key: 'private-office',
    title: 'Private Office',
    icon: '🏢',
    points: ['Ruang Kerja Eksklusif', 'Furniture Lengkap', 'Internet High-Speed', 'Utilities'],
    description:
      'Kantor pribadi modern dan fully furnished untuk operasional bisnis yang optimal dan produktif.',
    price: 'Mulai dari Rp 3 juta/bulan',
  },
  {
    key: 'perizinan-usaha',
    title: 'Perizinan Usaha',
    icon: '📋',
    points: ['NIB OSS', 'SIUP', 'TDP', 'Izin Operasional'],
    description:
      'Pengurusan berbagai jenis perizinan bisnis sesuai regulasi terbaru untuk kelancaran operasional usaha.',
    price: 'Mulai dari Rp 500 ribu',
  },
  {
    key: 'konsultasi-hukum',
    title: 'Konsultasi Hukum',
    icon: '⚖️',
    points: ['Review Kontrak', 'Compliance Check', 'Legal Opinion', 'Dispute Resolution'],
    description:
      'Pendampingan kepatuhan regulasi dan konsultasi hukum bisnis oleh tim ahli berpengalaman.',
    price: 'Mulai dari Rp 300 ribu/sesi',
  },
];

export const footerQuickLinks = [
  { text: 'Pendirian PT', href: '#pendirian-pt' },
  { text: 'Pendirian CV', href: '#pendirian-cv' },
  { text: 'Virtual Office', href: '#virtual-office' },
  { text: 'Private Office', href: '#private-office' },
  { text: 'Konsultasi Hukum', href: '#konsultasi' },
  { text: 'Perizinan', href: '#perizinan' },
];

export const localBrandAssets = {
  logoIco: '/assets/img/logo-ro.ico',
  heroIllustration: '/assets/ruangoffice/images/background-title-large.png',
};

export type ServiceItem = (typeof servicesContent)[number];

