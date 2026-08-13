export interface PrestasiItem {
  id: string
  judul: string
  peraih: string
  kategori: "Akademik" | "Olahraga" | "Beladiri" | "Seni" | "Teknologi" | "Keagamaan" | "Kepeminpinan"
  tingkat: "Nasional" | "Provinsi" | "Kota"
  tahun: string
  gambar: string
  deskripsi: string
  isHighlight?: boolean
}

const daftarPrestasi: PrestasiItem[] = [
  {
    id: "p24",
    judul: "Open Turnamen Karate Satria Wadokai 1 tingkat Provinsi Kalimantan Timur",
    peraih: "Ainun Jariyah – Kelas X.B1",
    kategori: "Beladiri",
    tingkat: "Provinsi",
    tahun: "2026",
    gambar: "/berita/262.jpeg",
    deskripsi: "Berhasil meraih Juara 1 Kumite Junior Putri Kelas -48 kg",
    isHighlight: true
  },
  {
    id: "p23",
    judul: "Open Turnamen Karate Satria Wadokai 1 tingkat Provinsi Kalimantan Timur",
    peraih: "Ariembi – Kelas XII D2",
    kategori: "Beladiri",
    tingkat: "Provinsi",
    tahun: "2026",
    gambar: "/berita/262.jpeg",
    deskripsi: "Berhasil meraih Juara 1 Kumite Junior Putri Kelas -53 kg",
    isHighlight: true
  },
  {
    id: "p22",
    judul: "Juara 2 Festival Karya CBP 2026",
    peraih: "Tim CBP SMA Negeri 7 Balikpapan",
    kategori: "Akademik",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/prestasi/pres2.jpeg",
    deskripsi: "1. Ibu Hj. Murdiana, S.Pd. (Pembina) 2. Keysa Fortuna Alfisari (XII-A2) 3.Nadia Friska Pakpahan (XII-B1)  4. Nazril Al Ihksan (XII-B2) 5. Jezi Maiza (XII-B1) 6. Muhammad Rizki Apriliyanto (XII-B2)SELAMAT & SUKSES Segenap keluarga besar SMA Negeri 7 Balikpapan mengucapkan selamat dan sukses kepada Tim CBP SMA Negeri 7 Balikpapan atas prestasi yang membanggakan dengan meraih Juara II pada Festival Karya CBP Tahun 2026 Prestasi ini merupakan buah dari kerja keras, kreativitas, semangat pantang menyerah, serta kolaborasi yang luar biasa antara peserta didik dan pembina. Semoga pencapaian ini menjadi motivasi untuk terus berkarya, berinovasi, dan mengukir prestasi yang lebih tinggi di masa mendatang. Terima kasih kepada seluruh pihak yang telah memberikan dukungan. Teruslah menjadi generasi yang Religius, Cerdas, dan Berprestasi. 👏 Selamat kepada Tim CBP SMAN 7 Balikpapan! Kami bangga atas pencapaian kalian.",
    isHighlight: true
  },
  {
    id: "p21",
    judul: "Juara 2 Kategori Sosial Media Terbaik",
    peraih: "Kurnia Akifah Nailah (Kelas XII-A1)",
    kategori: "Akademik",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/prestasi/pres1.jpeg",
    deskripsi: "Prestasi ini merupakan bukti bahwa generasi muda SMA Negeri 7 Balikpapan tidak hanya unggul dalam bidang akademik, tetapi juga mampu menjadi teladan, inspirator, dan agen perubahan dalam menyuarakan nilai-nilai kehidupan yang sehat, berkarakter, serta berdaya saing.",
    isHighlight: true
  },
  {
    id: "p20",
    judul: "Juara 1 Kategori GenRengers Terbaik",
    peraih: "Rasya Maulana Saputra (Kelas XII-A1)",
    kategori: "Akademik",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/prestasi/pres1.jpeg",
    deskripsi: "Prestasi ini merupakan bukti bahwa generasi muda SMA Negeri 7 Balikpapan tidak hanya unggul dalam bidang akademik, tetapi juga mampu menjadi teladan, inspirator, dan agen perubahan dalam menyuarakan nilai-nilai kehidupan yang sehat, berkarakter, serta berdaya saing.",
    isHighlight: true
  },
  {
    id: "p19",
    judul: "Juara Kategori Duta GenRe Persahabatan Puteri",
    peraih: "Trie Wahdana (Kelas XI-A1)",
    kategori: "Akademik",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/prestasi/pres1.jpeg",
    deskripsi: "Prestasi ini merupakan bukti bahwa generasi muda SMA Negeri 7 Balikpapan tidak hanya unggul dalam bidang akademik, tetapi juga mampu menjadi teladan, inspirator, dan agen perubahan dalam menyuarakan nilai-nilai kehidupan yang sehat, berkarakter, serta berdaya saing.",
    isHighlight: true
  },
  {
    id: "p18",
    judul: "Juara 2 KRENOVA 2026 ",
    peraih: "Tim Nyscientia",
    kategori: "Akademik",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/138.png",
    deskripsi: "Kegiatan KRENOVA ini bertujuan untuk mendorong terbentuknya ekosistem inovasi dibidang ilmu pengetahuan dan teknologi guna meningkatkan daya saing serta kesejahteraan masyarakat Kota Balikpapan.",
    isHighlight: true
  },
  {
    id: "p17",
    judul: "JUARA 2 INOVASI TINGKAT SMA / SMK",
    peraih: "SMA NEGERI 7 BALIKPAPAN",
    kategori: "Teknologi",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/j2inov.png",
    deskripsi: "SMA NEGERI 7 BALIKPAPAN (INOVASI STRIP PH BERBASIS EKSTRAK UBI JALAR UNGU (IPOMOEA BATATAS L.) SEBAGAI INDIKATOR KUALITAS AIR TAMBAK DI BALIKPAPAN TIMUR",
    isHighlight: true
  },
  {
    id: "p16",
    judul: "Juara 2 Futsal dalam event Olimpiade Elektro Poltekba",
    peraih: "Tim futsal SMA Negeri 7 Balikpapan",
    kategori: "Olahraga",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/133.png",
    deskripsi: "Kabar membanggakan! Tim futsal SMA Negeri 7 Balikpapan berhasil meraih Juara 2 Futsal dalam event Olimpiade Elektro Poltekba 🤩🏆",
    isHighlight: true
  },
  {
    id: "p15",
    judul: "Putri Duta Pariwisata Manuntung Kota Balikpapan 2026",
    peraih: "Nadia Friska Pakpahan (XI-B1)",
    kategori: "Kepeminpinan",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/116.png",
    deskripsi: "Selamat dan sukses kami ucapkan kepada seluruh peserta didik SMA Negeri 7 Balikpapan yang telah berjuang dalam ajang FLS3N tingkat kota."
  },
  {
    id: "p14",
    judul: "Juara harapan 3 lomba film pendek",
    peraih: "Rizki Aulia, Nazril Al, Kalifa Nur",
    kategori: "Seni",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/pr6.png",
    deskripsi: "Selamat dan sukses kami ucapkan kepada seluruh peserta didik SMA Negeri 7 Balikpapan yang telah berjuang dalam ajang FLS3N tingkat kota."
  },
  {
    id: "p13",
    judul: "Juara Harapan 3 cabang lomba vocal solo putri",
    peraih: "Aurel (XI-C1)",
    kategori: "Seni",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/pr5.png",
    deskripsi: "Selamat dan sukses kami ucapkan kepada seluruh peserta didik SMA Negeri 7 Balikpapan yang telah berjuang dalam ajang FLS3N tingkat kota."
  },
  {
    id: "p12",
    judul: "Juara 3 cabang lomba musik tradisional",
    peraih: "Tim FLS3N 7 Balikpapan",
    kategori: "Seni",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/pr4.png",
    deskripsi: "Selamat dan sukses kami ucapkan kepada seluruh peserta didik SMA Negeri 7 Balikpapan yang telah berjuang dalam ajang FLS3N tingkat kota."
  },
  {
    id: "p11",
    judul: "Juara 3 cabang jurnalistik",
    peraih: "Kurnia Akifah Nailah (XI-A1)",
    kategori: "Akademik",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/pr3.png",
    deskripsi: "Selamat dan sukses kami ucapkan kepada seluruh peserta didik SMA Negeri 7 Balikpapan yang telah berjuang dalam ajang FLS3N tingkat kota."
  },
  {
    id: "p10",
    judul: "Juara 3 cabang lomba kriya",
    peraih: "Wijdan Nurinayah.D (XI-A1)",
    kategori: "Seni",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/pr2.png",
    deskripsi: "Selamat dan sukses kami ucapkan kepada seluruh peserta didik SMA Negeri 7 Balikpapan yang telah berjuang dalam ajang FLS3N tingkat kota."
  },
  {
    id: "p9",
    judul: "Juara 2 cabang lomba komik digital",
    peraih: "Azki Khabibah (XI-C1)",
    kategori: "Teknologi",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/pr1.png",
    deskripsi: "Selamat dan sukses kami ucapkan kepada seluruh peserta didik SMA Negeri 7 Balikpapan yang telah berjuang dalam ajang FLS3N tingkat kota."
  },
  {
    id: "p8",
    judul: "Juara 1 Cabang Lomba Cerpen",
    peraih: "Nuraini Azzura S (XI-C1)",
    kategori: "Akademik",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/115.png",
    deskripsi: "Selamat dan sukses kami ucapkan kepada seluruh peserta didik SMA Negeri 7 Balikpapan yang telah berjuang dalam ajang FLS3N tingkat kota."
  },
  {
    id: "p7",
    judul: "Sebagai Finalis Nasional Olimpiade Orbit 2026 (Piala Hasri Ainun Habibie)",
    peraih: "Gusti Billy Destany (Kelas XI-C1)",
    kategori: "Akademik",
    tingkat: "Nasional",
    tahun: "2026",
    gambar: "/90.png",
    deskripsi: "Prestasi ini menjadi bukti kerja keras, dedikasi, dan semangat belajar yang luar biasa. Semoga dapat memberikan hasil terbaik di babak final serta terus menginspirasi teman-teman lainnya untuk berprestasi."
  },
  {
    id: "p6",
    judul: "prestasi Best Green Lifestyle dalam Forum Duta Lingkungan Hidup Kota Balikpapan",
    peraih: "ananda Aurelia Nur Oktavia (XI-C1)",
    kategori: "Kepeminpinan",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/90.png",
    deskripsi: "Prestasi ini menjadi bukti bahwa generasi muda SMAN 7 Balikpapan mampu berperan aktif dalam berbagai bidang"
  },
  {
    id: "p5",
    judul: "Finalis 24 Besar Forum Duta Wisata Manuntung Kota Balikpapan (FDBW) 2026",
    peraih: "Nadia Friska Pakpahan (XI-B1)",
    kategori: "Kepeminpinan",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/dt2.png",
    deskripsi: "Prestasi ini menjadi bukti bahwa generasi muda SMAN 7 Balikpapan mampu berperan aktif dalam berbagai bidang"
  },
  {
    id: "p4",
    judul: "Finalis 24 Besar Duta Lingkungan Hidup Kota Balikpapan 2026",
    peraih: "Aurelia Nur Oktavia (XI-C1)",
    kategori: "Kepeminpinan",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/dt1.png",
    deskripsi: "Prestasi ini menjadi bukti bahwa generasi muda SMAN 7 Balikpapan mampu berperan aktif dalam berbagai bidang"
  },
  {
    id: "p3",
    judul: "Favorite Putra Duta Anti Narkoba Kota Balikpapan 2026",
    peraih: "Dzaki Dzulfikar Ma’arif (kelas X-E)",
    kategori: "Kepeminpinan",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/18.png",
    deskripsi: "Prestasi ini menjadi bukti bahwa generasi muda SMAN 7 Balikpapan mampu berperan aktif dalam berbagai bidang"
  },
  {
    id: "p2",
    judul: "uara 3 Musabaqah Hifdzil Qur’an (MHQ) se-Balikpapan Timur kategori 10 Juz",
    peraih: "Ananda Qonita Munadiyatul Husna Kelas X-A",
    kategori: "Keagamaan",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/69.jpg",
    deskripsi: "SMA Negeri 7 Balikpapan mengucapkan selamat kepada Ananda Qonita Munadiyatul Husna Kelas X-A atas prestasinya meraih Juara 3 Musabaqah Hifdzil Qur’an (MHQ) se-Balikpapan Timur kategori 10 Juz."
  },
  {
    id: "p1",
    judul: "Juara Kategori Favorit dalam kegiatan Forum Pemilihan Duta Anti Narkoba Kota Balikpapan Tahun 2026",
    peraih: "Dzaki Dzulfikar Ma’arif (kelas X-E)",
    kategori: "Kepeminpinan",
    tingkat: "Kota",
    tahun: "2026",
    gambar: "/18.png",
    deskripsi: "Dzaki Dzulfikar Ma’arif berhasil meraih Juara Kategori Favorit dalam Forum Pemilihan Duta Anti Narkoba Kota Balikpapan Tahun 2026"
  }
]

export default daftarPrestasi