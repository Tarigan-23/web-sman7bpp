"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface KelasItem {
  namaKelas: string
  siswa: string[]
}

export default function SiswaPage() {
  // Data Master Siswa
  const dataKelas: KelasItem[] = [
    {
      namaKelas: "X-A",
      siswa: [
        
      ],
    },
    {
      namaKelas: "X-B",
      siswa: [
        
      ],
    },
    {
      namaKelas: "X-C",
      siswa: [
        
      ],
    },
    {
      namaKelas: "X-D",
      siswa: [
        ],
    },
    {
      namaKelas: "X-E",
      siswa: [
        ],
    },
    {
      namaKelas: "X-F",
      siswa: [
        ],
    },
    {
      namaKelas: "X-G",
      siswa: [
        ],
    },
    {
      namaKelas: "X-H",
      siswa: [
        ],
    },
    {
      namaKelas: "X-I",
      siswa: [
        ],
    },
    {
      namaKelas: "X-J",
      siswa: [
        
      ],
    },
    {
      namaKelas: "X-K",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XI-A1",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XI-A2",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XI-B1",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XI-B2",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XI-C",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XI-D1",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XI-D2",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XI-D3",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XI-D4",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XII-A1",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XII-A2",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XII-B1",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XII-B2",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XII-C1",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XII-C2",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XII-D1",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XII-D2",
      siswa: [
        
      ],
    },
    {
      namaKelas: "XII-D3",
      siswa: [
        
      ],
    },
  ]

  // State untuk mengontrol kelas mana yang sedang aktif dipilih oleh user
  const [kelasAktif, setKelasAktif] = useState<string>("XI IPS 1")
  // State untuk filter pencarian nama siswa
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Mengambil data siswa dari kelas yang sedang aktif dipilih
  const kelasTerpilih = dataKelas.find(k => k.namaKelas === kelasAktif)
  
  // Memfilter nama siswa berdasarkan query pencarian yang diketik user
  const siswaTersaring = kelasTerpilih
    ? kelasTerpilih.siswa.filter(nama => 
        nama.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay Backdrop Gelap */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* Konten Utama */}
      <div className="relative z-10 pt-24 md:pt-36 pb-20 px-4 md:px-6 max-w-4xl mx-auto space-y-6 md:space-y-10">
        
        {/* HERO HEADER */}
        <section className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-500/20 uppercase tracking-widest">
              Database Kesiswaan Terintegrasi
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mt-3 mb-1">
              Daftar <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Siswa</span>
            </h1>
            <p className="text-gray-300 text-xs md:text-lg font-light">
              SMA Negeri 7 Balikpapan
            </p>
          </motion.div>
        </section>

        {/* CONTROLLER: Navigasi Pilih Kelas (Bisa di-swipe horizontal di HP) */}
        <div className="w-full flex justify-start sm:justify-center overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex bg-slate-900/60 p-1 rounded-xl border border-white/5 gap-1.5 min-w-max">
            {dataKelas.map((item) => (
              <button
                key={item.namaKelas}
                onClick={() => {
                  setKelasAktif(item.namaKelas)
                  setSearchQuery("") // Reset pencarian jika pindah kelas
                }}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  kelasAktif === item.namaKelas
                    ? "bg-blue-500 text-white shadow-lg scale-105"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{item.namaKelas}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  kelasAktif === item.namaKelas ? "bg-white/20 text-white" : "bg-white/10 text-gray-400"
                }`}>
                  {item.siswa.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* INPUT LIVE SEARCH: Fitur Pencarian Pintar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md mx-auto relative"
        >
          <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-gray-400 text-sm">
            🔍
          </div>
          <input
            type="text"
            placeholder={`Cari nama di kelas ${kelasAktif}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/50 backdrop-blur-sm text-white placeholder-gray-400 text-xs md:text-sm rounded-xl pl-10 pr-4 py-2.5 md:py-3 border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-3.5 flex items-center text-gray-400 hover:text-white text-xs font-mono"
            >
              ✕ Clear
            </button>
          )}
        </motion.div>

        {/* CARD CONTAINER SISWA */}
        <motion.div
          layout
          className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 border border-white/10 w-full min-h-[250px]"
        >
          <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
            <h2 className="text-xl md:text-2xl font-black text-blue-400 tracking-wide uppercase">
              📋 Rombel {kelasAktif}
            </h2>
            <span className="text-[10px] md:text-xs text-gray-400 font-mono">
              Menampilkan {siswaTersaring.length} Hasil
            </span>
          </div>

          {/* DYNAMIC GRID LIST SISWA: 1 Kolom di HP, 2 Kolom di Desktop */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3.5 w-full"
          >
            <AnimatePresence mode="popLayout">
              {siswaTersaring.length > 0 ? (
                siswaTersaring.map((nama, i) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    key={`${kelasAktif}-${nama}-${i}`}
                    className="bg-slate-950/40 hover:bg-blue-500/10 rounded-xl px-4 py-3 border border-white/5 flex items-center justify-between group transition-all duration-300 hover:border-blue-500/20 shadow-md"
                  >
                    <div className="flex items-center gap-3 truncate">
                      <span className="text-[10px] md:text-xs font-mono font-bold text-blue-400 bg-blue-500/10 h-5 w-5 rounded flex items-center justify-center shrink-0 border border-blue-500/20">
                        {i + 1}
                      </span>
                      <p className="text-xs md:text-sm font-medium text-gray-200 group-hover:text-white transition-colors truncate">
                        {nama}
                      </p>
                    </div>
                    
                    {/* Badge mini pemanis aksen teknologi */}
                    <span className="text-[9px] md:text-[10px] text-gray-500 uppercase font-mono group-hover:text-blue-300 transition-colors hidden sm:block">
                      Active
                    </span>
                  </motion.div>
                ))
              ) : (
                /* Kondisi jika nama yang dicari tidak ditemukan */
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-1 sm:col-span-2 text-center py-12 text-gray-400 text-xs md:text-sm italic space-y-2"
                >
                  <p className="text-2xl">🧐</p>
                  <p>Nama siswa "<span className="text-blue-400 font-semibold">{searchQuery}</span>" tidak ditemukan di kelas {kelasAktif}.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}