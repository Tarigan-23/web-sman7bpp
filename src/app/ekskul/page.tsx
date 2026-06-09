"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const dataEkskul = [  
  {
    id: 2,
    nama: "SMAVE AMBASSADOR",
    kategori: "Umum",
    logo: "/",
    pembina: "",
    pelatih: "",
    ketua: "",
    jadwal: "",
    deskripsi: ""
  },
  {
    id: 3,
    nama: "ADIWIYATA",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 4,
    nama: "PRAMUKA",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 5,
    nama: "PMR",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 6,
    nama: "UKS",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 7,
    nama: "KARYA IMIAH REMAJA",
    kategori: "Akademik",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 8,
    nama: "ENGLISH CLUB",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ", 
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 9,
    nama: "KALIGRAFI",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ", 
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 10,
    nama: "KOMUNISAS KRISTEN",
    kategori: "Keagamaan",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 11,
    nama: "ROHIS",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 12,
    nama: "TAHFIDZ",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 13,
    nama: "KEWIRAUSAHAAN",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 14,
    nama: "SEVEN PODCAST",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 15,
    nama: "PIK-R",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 16,
    nama: "DT TATA BOGA",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 17,
    nama: "DT KECANTIKAN",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 18,
    nama: "DT TATA BUSAN",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 19,
    nama: "DT MULTIMEDIA",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 20,
    nama: "FUTSAL",
    kategori: "Olahraga",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 21,
    nama: "IT CLUB SMAVEN",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 22,
    nama: "KARATE",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 23,
    nama: "BAND",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 24,
    nama: "BASKETBALL",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 25,
    nama: "GREEN GENERATION",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 26,
    nama: "PASKIBRA",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 27,
    nama: "PENCAK SILAT",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 28,
    nama: "TIM TANGGUH BENCANA",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 29,
    nama: "KOMUNITAS SENI",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 30,
    nama: "PADUAN SUARA",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 31,
    nama: "VOLY",
    kategori: "",
    logo: "/",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
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