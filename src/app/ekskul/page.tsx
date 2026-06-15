"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const dataEkskul = [  
  {
    id: 1,
    nama: "SMAVE AMBASSADOR",
    kategori: "Umum",
    logo: "/ekskul/ambassador.jpeg",
    pembina: "Sri Yunita, S.Pd",
    pelatih: "-",
  },
  {
    id: 2,
    nama: "ADIWIYATA",
    kategori: "Umum",
    logo: "/ekskul/adiwiata.jpeg",
    pembina: "-",
    pelatih: "-",
  },
  {
    id: 3,
    nama: "PRAMUKA",
    kategori: "Umum",
    logo: "/ekskul/pramuka.jpeg",
    pembina: "Arfah, S.Pd (Putra), Roslindah, S.Pd (Putri)",
    pelatih: "Wimpi",
  },
  {
    id: 4,
    nama: "PMR",
    kategori: "Umum",
    logo: "/ekskul/pmr.jpeg",
    pembina: "Delis Miftahul Janah, S.Pd.",
    pelatih: "Silvi Wulandari",
  },
  {
    id: 5,
    nama: "UKS",
    kategori: "Umum",
    logo: "/ekskul/uks.jpeg",
    pembina: "-",
    pelatih: "-",
  },
  {
    id: 6,
    nama: "KARYA ILMIAH REMAJA",
    kategori: "Akademik",
    logo: "/ekskul/karyailmiah.jpeg",
    pembina: "Eka Normawati, S.Pd.",
    pelatih: "-",
  },
  {
    id: 7,
    nama: "ENGLISH CLUB",
    kategori: "Akademik",
    logo: "/ekskul/english.jpeg",
    pembina: "Dita Wardhany, S.Pd.",
    pelatih: "-",
  },
  {
    id: 8,
    nama: "KALIGRAFI",
    kategori: "Seni",
    logo: "/ekskul/kalig.jpeg",
    pembina: "Sukrillah, S.Pd",
    pelatih: "Ach. Baidhawi",
  },
  {
    id: 9,
    nama: "KOMUNITAS KRISTEN",
    kategori: "Keagamaan",
    logo: "/ekskul/kokris.jpeg",
    pembina: "-",
    pelatih: "-",
  },
  {
    id: 10,
    nama: "ROHIS",
    kategori: "Keagamaan",
    logo: "/ekskul/rohis.jpeg",
    pembina: "-",
    pelatih: "-",
  },
  {
    id: 11,
    nama: "TAHFIDZ",
    kategori: "Keagamaan",
    logo: "/ekskul/tahfidz.jpeg",
    pembina: "-",
    pelatih: "-",
  },
  {
    id: 12,
    nama: "KEWIRAUSAHAAN",
    kategori: "Umum",
    logo: "/ekskul/kewirausahaan.jpeg",
    pembina: "Rodatul Jannah, S.Pd.",
    pelatih: "-",
  },
  {
    id: 13,
    nama: "SEVEN PODCAST",
    kategori: "Umum",
    logo: "/ekskul/pdcast.jpeg",
    pembina: "Setian Adi Nugroho, S.Kom",
    pelatih: "Ririn Damayanti",
  },
  {
    id: 14,
    nama: "PIK-R",
    kategori: "Umum",
    logo: "/ekskul/pik-r.jpeg",
    pembina: "Juni Alvionita Nainggolan, S.Psi",
    pelatih: "-",
  },
  {
    id: 15,
    nama: "DT TATA BOGA",
    kategori: "Umum",
    logo: "/ekskul/dttataboga.jpeg",
    pembina: "Rodatul Jannah, S.Pd",
    pelatih: "Nirra",
  },
  {
    id: 16,
    nama: "DT KECANTIKAN",
    kategori: "Umum",
    logo: "/ekskul/dtkecantikan.jpeg",
    pembina: "Nova Agustina, S.Pd",
    pelatih: "Riska Salim",
  },
  {
    id: 17,
    nama: "DT TATA BUSANA",
    kategori: "Umum",
    logo: "/ekskul/dttatabusana.jpeg",
    pembina: "Novita Susanti, S.Pd.",
    pelatih: "Akinawati",
  },
  {
    id: 18,
    nama: "DT MULTIMEDIA",
    kategori: "Umum",
    logo: "/ekskul/dtmultimedia.jpeg",
    pembina: "Dasril, S.Kom",
    pelatih: "Husodo Ragil P. / Anang H.",
  },
  {
    id: 19,
    nama: "FUTSAL",
    kategori: "Olahraga",
    logo: "/ekskul/futsal.jpeg",
    pembina: "Aji Utama, S.Pd",
    pelatih: "Achmad Hidayat",
  },
  {
    id: 20,
    nama: "IT CLUB SMAVEN",
    kategori: "Umum",
    logo: "/ekskul/itclub.jpeg",
    pembina: "Elok Setyowati, S.Pd",
    pelatih: "Yegar Tarigan",
  },
  {
    id: 21,
    nama: "KARATE",
    kategori: "Bela diri",
    logo: "/ekskul/karate.jpeg",
    pembina: "Yudho Prasetyo, S.Pd.",
    pelatih: "Radian Efendi",
  },
  {
    id: 22,
    nama: "BAND",
    kategori: "Seni",
    logo: "/ekskul/band.jpeg",
    pembina: "Andi Fadly Amdan, S.Pd.",
    pelatih: "Abdul Halim Muhammad",
  },
  {
    id: 23,
    nama: "BASKETBALL",
    kategori: "Olahraga",
    logo: "/ekskul/basketball.jpeg",
    pembina: "Heriansyah, S.Pd",
    pelatih: "Frisky Pelealu",
  },
  {
    id: 24,
    nama: "GREEN GENERATION",
    kategori: "Umum",
    logo: "/ekskul/green.jpeg",
    pembina: "Dra. Rohani",
    pelatih: "-",
  },
  {
    id: 25,
    nama: "PASKIBRA",
    kategori: "Akademik",
    logo: "/ekskul/paskibra.jpeg",
    pembina: "Rita Ariyani, S.Pd",
    pelatih: "Riki Adi Putra",
  },
  {
    id: 26,
    nama: "PENCAK SILAT",
    kategori: "Bela diri",
    logo: "/ekskul/pencaksilat.jpeg",
    pembina: "Sri Narti, S.Pd",
    pelatih: "Mutaji",
  },
  {
    id: 27,
    nama: "TIM TANGGUH BENCANA",
    kategori: "Umum",
    logo: "/ekskul/ttb.jpeg",
    pembina: "Rizka Furqany, M.Pd.",
    pelatih: "-",
  },
  {
    id: 28,
    nama: "KOMUNITAS SENI",
    kategori: "Seni",
    logo: "/ekskul/komsen.jpeg",
    pembina: "-",
    pelatih: "-",
  },
  {
    id: 29,
    nama: "SMAVEN CHOIR",
    kategori: "Seni",
    logo: "/ekskul/padus.jpeg",
    pembina: "Dame Lasniroha Sitorus, S.Th",
    pelatih: "Gilberd Marada Pakpahan",
  },
  {
    id: 30,
    nama: "VOLI",
    kategori: "Olahraga",
    logo: "/ekskul/voly.jpeg",
    pembina: "Eka Januardi, S.Pd",
    pelatih: "Kurnia Abdul Fattah",
  },
  {
    id: 31,
    nama: "Tari Tradisional dan Dance",
    kategori: "Seni",
    logo: "/ekskul/default.jpeg", 
    pembina: "Nirwana, S.Pd",
    pelatih: "Sabilillah Sayuti",
  },
  {
    id: 32,
    nama: "E-Sport",
    kategori: "Olahraga",
    logo: "/ekskul/default.jpeg",
    pembina: "Sella Lipiantanna, S.Pd.",
    pelatih: "Harly",
  },
  {
    id: 33,
    nama: "KRIYA",
    kategori: "Seni",
    logo: "/ekskul/krysta.jpeg",
    pembina: "Darni, S.Pd",
    pelatih: "Turotul Afifah",
  },
  {
    id: 34,
    nama: "Bulu Tangkis",
    kategori: "Olahraga",
    logo: "/ekskul/default.jpeg",
    pembina: "Yudho Prasetyo, S.Pd.",
    pelatih: "-",
  },
  {
    id: 35,
    nama: "Tilawah",
    kategori: "Keagamaan",
    logo: "/ekskul/default.jpeg",
    pembina: "Heni Fatmawati, S.Pd",
    pelatih: "Fathul Karim",
  }
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
      style={{ backgroundImage: "url('/bg3.jpeg')" }}
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
            Wadah resmi eksplorasi potensi, minat, dan bakat luar biasa di luar jam belajar SMA Negeri 7 Balikpapan.
          </p>
        </div>

        {/* STATISTIK BOX */}
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
          {["Semua", "Olahraga", "Akademik", "Keagamaan", "Seni", "Bela diri", "Umum"].map((kat) => (
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
                {/* Logo/Photo Section - DIUPDATE AGAR LOGO TIDAK TERPOTONG */}
                <div className="h-48 w-full bg-black/50 relative overflow-hidden border-b border-white/5 p-4 flex items-center justify-center">
                  <img 
                    src={ekskul.logo} 
                    alt={ekskul.nama} 
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-500 ease-out z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-0"></div>
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
                  </div>

                  {/* Metadata Section */}
                  <div className="space-y-1.5 border-t border-white/5 pt-3 text-[11px] text-gray-300">
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-gray-400 shrink-0">Pembina:</span>
                      <span className="text-white font-light text-right">{ekskul.pembina}</span>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-gray-400 shrink-0">Pelatih:</span>
                      <span className="text-white font-light text-right">{ekskul.pelatih}</span>
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