"use client"

import React,{ useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Data Ekskul
const dataEkskul = [  
  {
    id: 1,
    nama: "Pramuka",
    kategori: "Umum",
    logo: "/", 
    pembina: "Budi Santoso, S.Pd.",
    ketua: "Andi Wijaya",
    wa: "6281234567890", 
    jadwal: "Jumat, 14:00 WITA",
    deskripsi: "Membentuk karakter siswa yang disiplin, mandiri, berjiwa kepemimpinan, dan menjunjung tinggi nilai gotong royong."
  },
  {
    id: 2,
    nama: "Palang Merah Remaja (PMR)",
    kategori: "Umum",
    logo: "/.webp",
    pembina: "Siti Rahma, S.Kep.",
    ketua: "Rina Amelia",
    wa: "6289876543210",
    jadwal: "Rabu, 14:00 WITA",
    deskripsi: "Melatih kepedulian sosial, memberikan pertolongan pertama, serta mengedukasi siswa mengenai kesehatan dan donor darah."
  },
  {
    id: 3,
    nama: "Paskibra",
    kategori: "Akademik",
    logo: "/.webp",
    pembina: "Dedi Setiawan, M.Pd.",
    ketua: "Rizky Pratama",
    wa: "625651973841",
    jadwal: "Sabtu, 08:00 WITA",
    deskripsi: "Mengasah ketahanan fisik, mental, dan kedisiplinan tinggi melalui baris-berbaris demi penugasan upacara besar sekolah."
  },
  {
    id: 4,
    nama: "Rohani Islam (Rohis)",
    kategori: "Keagamaan",
    logo: "/.webp",
    pembina: "Ustadz Ahmad Fauzi",
    ketua: "Muhammad Ihsan",
    wa: "6281344556677",
    jadwal: "Kamis, 15:30 WITA",
    deskripsi: "Wadah pendalaman iman dan takwa, pembentukan akhlak mulia, serta kajian Islam yang inklusif di lingkungan sekolah."
  },
  {
    id: 5,
    nama: "Basket",
    kategori: "Olahraga",
    logo: "/st5.",
    pembina: "Hendra Wijaya, S.Pd.",
    ketua: "Kevin Sanjaya",
    wa: "6287766554433",
    jadwal: "Selasa & Kamis, 16:00 WITA",
    deskripsi: "Mengembangkan bakat olahraga bola basket, kerja sama tim, fisik yang prima, serta persiapan kompetisi antar sekolah."
  },
  {
    id: 6,
    nama: "Pacu Kuda",
    kategori: "Olahraga",
    logo: "/st5.",
    pembina: "Guntur, S.Pd",
    ketua: "Yegar Tarigan",
    wa: "6287766554433",
    jadwal: "Selasa & Kamis, 16:00 WITA",
    deskripsi: "Mengembangkan Bakat berkuda, fisik yang prima, serta persiapan kompetisi antar sekolah."
  },
]

export default function EkskulPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua")

  // Menghitung statistik ekskul otomatis
  const totalEkskul = dataEkskul.length
  const totalUmum = dataEkskul.filter(item => item.kategori === "Umum").length
  const totalOlahraga = dataEkskul.filter(item => item.kategori === "Olahraga").length
  const totalAkademik = dataEkskul.filter(item => item.kategori === "Akademik").length
  const totalKeagamaan = dataEkskul.filter(item => item.kategori === "Keagamaan").length

  // Menyaring data berdasarkan tab kategori
  const ekskulTersaring = kategoriAktif === "Semua" 
    ? dataEkskul 
    : dataEkskul.filter(item => item.kategori === kategoriAktif)

  // Array pembantu untuk looping statistik counter
  const statistikCounter = [
    { nilai: totalEkskul, label: "Ekskul Aktif", utama: true },
    { nilai: totalUmum, label: "Umum", utama: false },
    { nilai: totalOlahraga, label: "Olahraga", utama: false },
    { nilai: totalAkademik, label: "Akademik", utama: false },
    { nilai: totalKeagamaan, label: "Keagamaan", utama: false },
  ]

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto block">
        
        {/* === HEADER HERO === */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="bg-white/10 text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-white/10 uppercase tracking-wider">
            SMA Negeri 7 Balikpapan
          </span>
          <h1 className="text-6xl font-bold text-blue-400 tracking-wide drop-shadow-lg mt-4 mb-2">
            Ekstrakurikuler
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
            Kembangkan bakat, minat, dan potensi diri bersama komunitas aktif dan berprestasi di SMAN 7 Balikpapan.
          </p>
        </motion.div>

        {/* === STATISTIK COUNTER WITH SCROLL ANIMATION === */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white/15 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-2xl mb-12 overflow-x-auto no-scrollbar"
        >
          <div className="flex justify-between items-center gap-6 min-w-max px-4">
            {statistikCounter.map((stat, index) => (
              <React.Fragment key={index}>
                {/* Kartu Angka Individu */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center flex-1 px-4"
                >
                  <div className={`text-4xl font-black drop-shadow ${stat.utama ? 'text-blue-400' : 'text-white'}`}>
                    {stat.nilai}
                  </div>
                  <div className={`text-sm mt-1 uppercase tracking-wider ${stat.utama ? 'font-bold text-white' : 'font-semibold text-gray-200'}`}>
                    {stat.label}
                  </div>
                </motion.div>

                {/* Sekat Garis Pembatas (Tidak dipasang di akhir item) */}
                {index < statistikCounter.length - 1 && (
                  <div className="h-10 w-[1px] bg-white/20 hidden sm:block"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* === FILTER TABS === */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["Semua", "Olahraga", "Akademik", "Keagamaan", "Umum"].map((kategori) => (
            <button
              key={kategori}
              onClick={() => setKategoriAktif(kategori)}
              className={`px-6 py-2.5 rounded-xl font-medium transition duration-300 text-sm relative ${
                kategoriAktif === kategori
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/5"
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>

        {/* === GRID LIST EKSKUL WITH LAYOUT ANIMATION === */}
        {/* Menggunakan motion.div untuk container induk grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {/* AnimatePresence mengontrol animasi item yang hilang/muncul saat disaring */}
          <AnimatePresence mode="popLayout">
            {ekskulTersaring.map((ekskul) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
                key={ekskul.id} 
                className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden hover:transform hover:-translate-y-2 transition duration-300 group"
              >
                {/* Wadah Gambar / Logo Ekskul */}
                <div className="h-52 w-full relative bg-black/40 overflow-hidden flex items-center justify-center border-b border-white/5">
                  <img 
                    src={ekskul.logo} 
                    alt={ekskul.nama} 
                    className="h-40 w-40 object-contain rounded-2xl group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Konten Utama */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-2">
                    <span className="bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {ekskul.kategori}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {ekskul.nama}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                    {ekskul.deskripsi}
                  </p>

                  {/* Informasi Pengurus & Jadwal */}
                  <div className="space-y-2.5 border-t border-white/10 pt-4 mb-6 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pembina:</span>
                      <span className="font-medium text-white">{ekskul.pembina}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ketua:</span>
                      <span className="font-medium text-white">{ekskul.ketua}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Jadwal Latihan:</span>
                      <span className="px-2 py-0.5 bg-white/5 text-blue-300 text-xs font-semibold rounded-md border border-white/5">
                        ⏰ {ekskul.jadwal}
                      </span>
                    </div>
                  </div>

                  {/* Tombol Hubungi Via WhatsApp Ketua */}
                  <a
                    href={`https://wa.me/${ekskul.wa}?text=Halo%20Kak%20${ekskul.ketua},%20saya%20ingin%20bertanya%20mengenai%20ekskul%20${ekskul.nama}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    💬 Hubungi Ketua (WA)
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  )
}