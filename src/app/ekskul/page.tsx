"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const dataEkskul = [  
  {
    id: 2,
    nama: "SMAVE AMBASSADOR",
    kategori: "Umum",
    logo: "/ekskul/ambassador.jpeg",
    pembina: "",
    pelatih: "",
    ketua: "",
    jadwal: "",
    deskripsi: ""
  },
  {
    id: 3,
    nama: "ADIWIYATA",
    kategori: "Umum",
    logo: "/ekskul/adiwiata.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 4,
    nama: "PRAMUKA",
    kategori: "Umum",
    logo: "/ekskul/pramuka.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 5,
    nama: "PMR",
    kategori: "Umum",
    logo: "/ekskul/pmr.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 6,
    nama: "UKS",
    kategori: "Umum",
    logo: "/ekskul/uks.jpeg",
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
    logo: "/ekskul/karyailmiah.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 8,
    nama: "ENGLISH CLUB",
    kategori: "Akademik",
    logo: "/ekskul/english.jpeg",
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
    logo: "/ekskul/kalig.jpeg",
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
    logo: "/ekskul/kokris.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 11,
    nama: "ROHIS",
    kategori: "Keagamaan",
    logo: "/ekskul/rohis.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 12,
    nama: "TAHFIDZ",
    kategori: "Keagamaan",
    logo: "/ekskul/tahfidz.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 13,
    nama: "KEWIRAUSAHAAN",
    kategori: "Umum",
    logo: "/ekskul/kewirausahaan.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 14,
    nama: "SEVEN PODCAST",
    kategori: "Umum",
    logo: "/ekskul/pdcast.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 15,
    nama: "PIK-R",
    kategori: "Umum",
    logo: "/ekskul/pik-r.jpeg",
    pembina: "Juni Alvionita Nainggolan, S.Psi",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 16,
    nama: "DT TATA BOGA",
    kategori: "Umum",
    logo: "/ekskul/dttataboga.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 17,
    nama: "DT KECANTIKAN",
    kategori: "Umum",
    logo: "/ekskul/dtkecantikan.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 18,
    nama: "DT TATA BUSAN",
    kategori: "Umum",
    logo: "/ekskul/dttatabusana.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 19,
    nama: "DT MULTIMEDIA",
    kategori: "Umum",
    logo: "/ekskul/dtmultimedia.jpeg",
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
    logo: "/ekskul/futsal.jpeg",
    pembina: "Aji utama, S.Pd",
    pelatih: "Achmad Hidayat",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 21,
    nama: "IT CLUB SMAVEN",
    kategori: "Umum",
    logo: "/ekskul/itclub.jpeg",
    pembina: "",
    pelatih: "Yegar Tarigan",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 22,
    nama: "KARATE",
    kategori: "",
    logo: "/ekskul/karate.jpeg",
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
    logo: "/ekskul/band.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 24,
    nama: "BASKETBALL",
    kategori: "Olahra",
    logo: "/ekskul/basketball.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 25,
    nama: "GREEN GENERATION",
    kategori: "Umum",
    logo: "/ekskul/green.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 26,
    nama: "PASKIBRA",
    kategori: "Akademik",
    logo: "/ekskul/paskibra.jpeg",
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
    logo: "/ekskul/pencaksilat.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 28,
    nama: "TIM TANGGUH BENCANA",
    kategori: "Umum",
    logo: "/ekskul/ttb.jpeg",
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
    logo: "/ekskul/komsen.jpeg",
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
    logo: "/ekskul/padus.jpeg",
    pembina: "",
    pelatih: "  ",
    ketua: " ",
    jadwal: " ",
    deskripsi: ""
  },
  {
    id: 31,
    nama: "VOLY",
    kategori: "Olahraga",
    logo: "/ekskul/voly.jpeg",
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
                {/* Logo/Photo Section */}
                <div className="h-48 w-full bg-black/30 relative overflow-hidden border-b border-white/5">
                 <img 
                    src={ekskul.logo} 
                    alt={ekskul.nama} 
                     className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-700 ease-out"
                   />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
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