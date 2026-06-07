"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const dataEkskul = [  
  {
    id: 1,
    nama: "Pramuka",
    kategori: "Umum",
    logo: "/logo-pramuka.png", 
    pembina: "Budi Santoso, S.Pd.",
    pelatih: "Kak Ridwan Saputra",
    ketua: "Andi Wijaya", 
    jadwal: "Jumat, 14:00 WITA",
    deskripsi: "Membentuk karakter siswa yang disiplin, mandiri, berjiwa kepemimpinan, dan menjunjung tinggi nilai gotong royong."
  },
  {
    id: 2,
    nama: "Palang Merah Remaja (PMR)",
    kategori: "Umum",
    logo: "/logo-pmr.webp",
    pembina: "Siti Rahma, S.Kep.",
    pelatih: "dr. Erna Koesnadi",
    ketua: "Rina Amelia",
    jadwal: "Rabu, 14:00 WITA",
    deskripsi: "Melatih kepedulian sosial, memberikan pertolongan pertama, serta mengedukasi siswa mengenai kesehatan dan donor darah."
  },
  {
    id: 3,
    nama: "Paskibra",
    kategori: "Akademik",
    logo: "/logo-paskibra.webp",
    pembina: "Dedi Setiawan, M.Pd.",
    pelatih: "Sertu Bambang Pamungkas",
    ketua: "Rizky Pratama",
    jadwal: "Sabtu, 08:00 WITA",
    deskripsi: "Mengasah ketahanan fisik, mental, dan kedisiplinan tinggi melalui baris-berbaris demi penugasan upacara besar sekolah."
  },
  {
    id: 4,
    nama: "Rohani Islam (Rohis)",
    kategori: "Keagamaan",
    logo: "/logo-rohis.webp",
    pembina: "Ustadz Ahmad Fauzi",
    pelatih: "Ustadz Syarifuddin, Lc.",
    ketua: "Muhammad Ihsan",
    jadwal: "Kamis, 15:30 WITA",
    deskripsi: "Wadah pendalaman iman dan takwa, pembentukan akhlak mulia, serta kajian Islam yang inklusif di lingkungan sekolah."
  },
  {
    id: 5,
    nama: "Basket",
    kategori: "Olahraga",
    logo: "/logo-basket.webp",
    pembina: "Hendra Wijaya, S.Pd.",
    pelatih: "Coach Doni Setiawan",
    ketua: "Kevin Sanjaya",
    jadwal: "Selasa & Kamis, 16:00 WITA",
    deskripsi: "Mengembangkan bakat olahraga bola basket, kerja sama tim, fisik yang prima, serta persiapan kompetisi antar sekolah."
  },
  {
    id: 6,
    nama: "Pacu Kuda",
    kategori: "Olahraga",
    logo: "/logo-berkuda.webp",
    pembina: "Guntur, S.Pd",
    pelatih: "Coach Yudi Antoro",
    ketua: "Yegar Tarigan",
    jadwal: "Selasa & Kamis, 16:00 WITA",
    deskripsi: "Mengembangkan bakat berkuda, fisik yang prima, serta persiapan kompetisi berkuda antar sekolah."
  },
]

export default function EkskulPage() {
  const [kategoriEkskul, setKategoriEkskul] = useState("Semua")

  const totalEkskul = dataEkskul.length

  const ekskulTersaring = kategoriEkskul === "Semua" 
    ? dataEkskul 
    : dataEkskul.filter(item => item.kategori === kategoriEkskul)

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/75 z-0"></div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
        
        {/* TOMBOL BACK KE KESISWAAN */}
        <div className="mb-6">
          <Link href="/Kesiswaan" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 hover:text-white transition duration-200">
            ⬅️ Kembali ke Kesiswaan
          </Link>
        </div>

        {/* HEADER HERO */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-wide mb-2">
            Daftar <span className="text-blue-400">Ekstrakurikuler</span>
          </h1>
          <p className="text-gray-300 text-xs md:text-sm max-w-xl mx-auto font-light">
            Wadah resmi eksplorasi potensi, minat, dan bakat luar biasa di luar jam belajar SMAN 7 Balikpapan.
          </p>
        </div>

        {/* STATISTIK BOX TERSIMPLIFIKASI (HANYA TOTAL EKSUAL UTAMA) */}
        <div className="max-w-xs mx-auto bg-slate-900/40 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl mb-10 text-center">
          <div className="text-4xl md:text-5xl font-black text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            {totalEkskul}
          </div>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-300 mt-1 font-bold">
            Total Ekskul
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["Semua", "Olahraga", "Akademik", "Keagamaan", "Umum"].map((kat) => (
            <button
              key={kat}
              onClick={() => setKategoriEkskul(kat)}
              className={`px-4 py-1.5 rounded-lg font-medium text-xs transition-all ${
                kategoriEkskul === kat
                  ? "bg-blue-600 text-white border border-blue-500 shadow-md"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>

        {/* CARDS GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {ekskulTersaring.map((ekskul) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={ekskul.id} 
                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 flex flex-col overflow-hidden hover:border-blue-500/30 transition-all group"
              >
                {/* Logo Section */}
                <div className="h-40 w-full bg-black/20 flex items-center justify-center border-b border-white/5">
                  <img 
                    src={ekskul.logo} 
                    alt={ekskul.nama} 
                    className="h-24 w-24 object-contain group-hover:scale-105 transition duration-500 filter drop-shadow-[0_4px_10px_rgba(59,130,246,0.25)]"
                  />
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="bg-blue-500/20 text-blue-300 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {ekskul.kategori}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 group-hover:text-blue-400 transition">
                      {ekskul.nama}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed mt-1 text-justify font-light">
                      {ekskul.deskripsi}
                    </p>
                  </div>

                  {/* Metadata Section (Pembina, Pelatih, Ketua) */}
                  <div className="space-y-1.5 border-t border-white/5 pt-3 text-[11px] text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pembina:</span>
                      <span className="text-white font-light">{ekskul.pembina}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pelatih:</span>
                      <span className="text-white font-light">{ekskul.pelatih}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ketua:</span>
                      <span className="text-white font-light">{ekskul.ketua}</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-gray-400">Jadwal:</span>
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded border border-blue-400/10 font-semibold">
                        ⏰ {ekskul.jadwal}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  )
}