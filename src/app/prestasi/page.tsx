"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PrestasiItem {
  id: string
  judul: string
  peraih: string
  kategori: "Akademik" | "Olahraga" | "Seni" | "Teknologi" | "Keagamaan" | "Kepeminpinan"
  tingkat: "Nasional" | "Provinsi" | "Kota"
  tahun: string
  gambar: string
  deskripsi: string
  isHighlight?: boolean
}

export default function PrestasiPage() {
  const [filterKategori, setFilterKategori] = useState<string>("Semua")

  const daftarPrestasi: PrestasiItem[] = [
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

  const prestasiHighlight = daftarPrestasi.filter(item => item.isHighlight)
  const prestasiReguler = filterKategori === "Semua"
    ? daftarPrestasi.filter(item => !item.isHighlight)
    : daftarPrestasi.filter(item => item.kategori === filterKategori && !item.isHighlight)

  const getBadgeStyle = (tingkat: string) => {
    switch (tingkat) {
      case "Nasional": return "bg-amber-500/20 text-amber-300 border-amber-500/40"
      case "Provinsi": return "bg-blue-500/20 text-blue-300 border-blue-400/40"
      default: return "bg-emerald-500/20 text-emerald-300 border-emerald-400/40"
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/75 z-0"></div>

      <div className="relative z-10 pt-24 md:pt-36 pb-16 px-4 md:px-6 max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* HERO TITLE & STATS COUNTER */}
        <section className="text-center space-y-4 md:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="bg-amber-500/10 text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full text-amber-300 border border-amber-500/20 uppercase tracking-wider">
              🏆 Hall of Fame SMAN 7
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-wide mt-2.5 mb-1.5">
              Prestasi <span className="text-amber-400">Siswa</span>
            </h1>
            <p className="text-gray-300 text-xs md:text-base max-w-2xl mx-auto leading-relaxed px-1">
              Catatan sejarah tinta emas kepemimpinan, kecerdasan, dan kreativitas tanpa batas dari putra-putri terbaik SMAN 7 Balikpapan.
            </p>
          </motion.div>

          {/* Mini Counter - Flex Row Tetap Rapi di HP Kecil */}
          <div className="flex justify-center gap-2.5 md:gap-8 max-w-xl mx-auto pt-2">
            {[
              { angka: "12+", label: "Nasional" },
              { angka: "34+", label: "Provinsi" },
              { angka: "80+", label: "Kota" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-sm px-2 py-2 md:px-4 md:py-2.5 rounded-xl flex-1 text-center">
                <span className="block text-lg md:text-2xl font-black text-amber-400">{stat.angka}</span>
                <span className="text-[9px] md:text-xs text-gray-400 uppercase font-medium tracking-tight block">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED BENTO GRID (Highlight Teratas) */}
        <section className="w-full space-y-4">
          <h2 className="text-sm md:text-xl font-bold text-white tracking-wider flex items-center gap-1.5">
            <span className="text-amber-400">✨</span> SOROTAN PRESTASI TERKINI
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {prestasiHighlight.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-neutral-900">
                  <img 
                    src={item.gambar} 
                    alt={item.judul}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {(e.target as HTMLImageElement).src = "/ggi.png"}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                  <span className={`absolute top-3 left-3 border px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm ${getBadgeStyle(item.tingkat)}`}>
                    🥇 {item.tingkat}
                  </span>
                  <span className="absolute bottom-2.5 right-3 bg-black/60 backdrop-blur-sm text-gray-300 text-[10px] px-2 py-0.5 rounded font-mono font-semibold">
                    {item.tahun}
                  </span>
                </div>

                <div className="p-4 md:p-6 relative z-10 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-amber-400 text-[10px] uppercase font-bold tracking-widest block">{item.kategori}</span>
                    <h3 className="text-white font-black text-base md:text-xl leading-snug group-hover:text-amber-300 transition-colors">
                      {item.judul}
                    </h3>
                    <p className="text-gray-300 font-light text-xs md:text-sm text-justify line-clamp-3">
                      {item.deskripsi}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-[10px]">🎓</div>
                    <span className="text-xs text-gray-200 font-medium truncate">{item.peraih}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ARSIP & TROPHIES LIST */}
        <section className="w-full border-t border-white/10 pt-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-lg md:text-2xl font-black text-white tracking-wide uppercase">
                🏛 Imun & <span className="text-amber-400">Daftar Juara</span>
              </h2>
              <p className="text-gray-400 text-xs font-light">
                Kumpulan riwayat kemenangan SMA NEGERI 7 BALIKPAPAN.
              </p>
            </div>

            {/* Filter Navigasi - Geser Horizontal di HP */}
            <div className="overflow-x-auto no-scrollbar py-1 -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex bg-slate-900/60 p-1 rounded-xl border border-white/5 gap-1 min-w-max">
                {["Semua", "Akademik", "Olahraga", "Seni", "Teknologi"].map((kat) => (
                  <button
                    key={kat}
                    onClick={() => setFilterKategori(kat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                      filterKategori === kat
                        ? "bg-amber-500 text-slate-950 shadow-md font-bold scale-105"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {kat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Piala Reguler */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            <AnimatePresence mode="popLayout">
              {prestasiReguler.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={item.id}
                  className="bg-white/5 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col justify-between group hover:border-amber-500/20 transition-all duration-300 shadow-lg"
                >
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-start">
                      <span className={`border px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${getBadgeStyle(item.tingkat)}`}>
                        {item.tingkat}
                      </span>
                      <span className="text-gray-400 text-[10px] font-mono font-semibold">{item.tahun}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-amber-400 font-bold uppercase tracking-wider block">{item.kategori}</span>
                      <h4 className="text-white font-bold text-sm md:text-base mt-0.5 leading-snug group-hover:text-amber-300 transition-colors">
                        {item.judul}
                      </h4>
                    </div>
                    <p className="text-gray-300 font-light text-xs leading-relaxed text-justify line-clamp-2">
                      {item.deskripsi}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="truncate italic max-w-[85%]">Oleh: {item.peraih}</span>
                    <span className="text-amber-400 font-bold text-xs shrink-0">🏆</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

      </div>
    </div>
  )
}