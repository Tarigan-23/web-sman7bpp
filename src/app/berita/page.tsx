"use client"

import React, { useState } from "react"
// Mengimpor motion, Variants, dan AnimatePresence untuk animasi modal pop-up yang halus
import { motion, Variants, AnimatePresence } from "framer-motion"
import Image from "next/image"
import berita from "../../data/berita"

// Definisikan tipe data berita agar aman
interface BeritaItem {
  id: number
  judul: string
  tanggal: string
  gambar: string
  deskripsi: string
  sumberUrl: string
}

export default function BeritaPage() {
  // State untuk menyimpan berita yang sedang aktif dipilih/diklik untuk detail
  const [selectedBerita, setSelectedBerita] = useState<BeritaItem | null>(null)

  // Cetakan animasi kelompok (Stagger)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  }

  // Fungsi Handler saat Kartu Berita diklik
  const handleCardClick = (e: React.MouseEvent, item: BeritaItem) => {
    if (item.sumberUrl && item.sumberUrl.startsWith("http") && !item.sumberUrl.includes("sman7-bpp.sch.id/galeri")) {
      return 
    }
    
    e.preventDefault()
    setSelectedBerita(item)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden select-none">
      
      {/* ================= BACKGROUND ORNAMEN SERAGAM SINEMATIK ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg3.jpg" 
          alt="Latar Belakang SMANJU"
          fill
          priority
          className="object-cover object-center opacity-25 fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950" />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto block space-y-12">

        {/* Header Section */}
        <section className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-400/20 uppercase tracking-widest">
              Informasi & Kegiatan
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mt-3 mb-1 leading-tight uppercase">
              Berita <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Terkait</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg font-light tracking-wide">
              Seputar Berita Resmi SMA Negeri 7 Balikpapan
            </p>
          </motion.div>
        </section>

        {/* Pembungkus Kartu Berita (Grid) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch" 
        >
          {berita.map((item) => (
            <motion.a
              key={item.id}
              href={item.sumberUrl || "#"}
              target={item.sumberUrl && item.sumberUrl.startsWith("http") && !item.sumberUrl.includes("galeri") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              variants={cardVariants}
              onClick={(e) => handleCardClick(e, item)}
              className="block group h-full focus:outline-none"
            >
              {/* Kartu Utama */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 sm:group-hover:scale-[1.02] sm:group-hover:border-white/20 transition duration-300 cursor-pointer h-full shadow-xl flex flex-col justify-between">
                
                <div>
                  {/* 1. UKURAN GAMBAR */}
                  <div className="w-full h-48 md:h-56 overflow-hidden relative border-b border-white/5 flex-shrink-0 bg-black/20">
                    <img
                      src={item.gambar}
                      alt={item.judul}
                      className="w-full h-full object-cover transition duration-500 sm:group-hover:scale-105"
                    />
                  </div>

                  {/* 2. AREA KONTEN TEXT */}
                  <div className="p-5 md:p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                        📅 {item.tanggal}
                      </p>

                      {/* Judul */}
                      <h2 className="text-base md:text-lg font-bold text-slate-100 mt-2 line-clamp-2 group-hover:text-blue-400 transition duration-200 leading-snug min-h-[2.8rem]">
                        {item.judul}
                      </h2>

                      {/* Deskripsi Singkat */}
                      <p className="text-slate-400 leading-relaxed font-light text-xs md:text-sm text-justify line-clamp-3 mt-3 break-words">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Penanda Aksi */}
                <div className="p-5 md:p-6 pt-0 flex items-center justify-between text-xs font-semibold text-blue-400">
                  <span>
                    {item.sumberUrl && item.sumberUrl.startsWith("http") && !item.sumberUrl.includes("galeri") 
                      ? "Buka Instagram ↗" 
                      : "Baca Detail Berita →"}
                  </span>
                </div>

              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ================= MODAL DETAIL POPUP PREMIUM (ALA INSTAGRAM DARI GALERI) ================= */}
      <AnimatePresence>
        {selectedBerita && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-10 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedBerita(null)}
          >
            {/* Tombol Close Pojok Atas Kanan Layar */}
            <button 
              className="absolute top-4 right-4 text-white hover:text-red-400 transition z-50 p-2" 
              onClick={() => setSelectedBerita(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Kotak Utama Postingan Split View */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-5xl h-[85vh] md:h-[80vh] flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl select-text"
              onClick={(e) => e.stopPropagation()}
            >
              {/* KOLOM KIRI: Media Image Viewer (Full Tanpa Potong) */}
              <div className="relative flex-1 bg-slate-950 flex items-center justify-center h-[45%] md:h-full group border-b md:border-b-0 border-slate-800">
                <img 
                  src={selectedBerita.gambar} 
                  alt={selectedBerita.judul} 
                  className="w-full h-full object-contain max-h-full block p-1"
                />
              </div>

              {/* KOLOM KANAN: Detail Informasi Berita */}
              <div className="w-full md:w-[380px] bg-slate-900 flex flex-col h-[55%] md:h-full">
                {/* Header Akun Sekolah */}
                <div className="p-4 border-b border-slate-800 flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-black shadow-md">
                    S7
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-bold tracking-wide">sman7balikpapan</h3>
                    <p className="text-slate-400 text-[11px] font-medium">Balikpapan, Kalimantan Timur</p>
                  </div>
                </div>

                {/* Area Konten Deskripsi Berita (Scrollable & Dukung Baris Baru) */}
                <div className="p-4 flex-1 overflow-y-auto space-y-4 text-slate-300 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-slate-800">
                  <div>
                    <p className="text-blue-400 text-xs font-mono font-bold uppercase mb-1">[Warta SMANJU]</p>
                    <h2 className="text-white font-bold text-base mb-2 leading-snug">{selectedBerita.judul}</h2>
                    
                    {/* Pembacaan deskripsi split baris baru \n */}
                    <div className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify font-light space-y-3">
                      {selectedBerita.deskripsi.split("\n").map((line, index) => (
                        <p key={index} className="min-h-[1rem]">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Section Dokumen / Galeri Pendukung (Tetap di tab yang sama jika ada) */}
                  {selectedBerita.sumberUrl && selectedBerita.sumberUrl !== "#" && (
                    <div className="pt-4 border-t border-slate-800/60">
                      <a
                        href={selectedBerita.sumberUrl}
                        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-lg transition duration-200"
                      >
                        🔗 Lihat Dokumen / Galeri Pendukung
                      </a>
                    </div>
                  )}

                  {/* Section Komentar Interaktif Tiruan Biar Sama Persis */}
                  <div className="pt-3 border-t border-slate-800/60 space-y-2.5 text-xs">
                    <div>
                      <span className="text-white font-semibold mr-2">osissmaven</span>
                      <span className="text-slate-400">Sukses terus SMANJU! Makin menyala 🔥</span>
                    </div>
                    <div>
                      <span className="text-white font-semibold mr-2">mpksmaven</span>
                      <span className="text-slate-400">SMANJU....Semakin Majuu 🙌</span>
                    </div>
                  </div>
                </div>

                {/* Bagian Bawah: Metadata & Tanggal Kegiatan */}
                <div className="p-4 border-t border-slate-800 bg-slate-950/40 space-y-3">
                  <div className="flex space-x-4 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 cursor-pointer hover:text-red-500 transition">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 cursor-pointer hover:text-blue-500 transition">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-1.923 2.413a4.474 4.474 0 0 0 3.536-1.003c.43-.244.97-.242 1.4.03a9.14 9.14 0 0 0 3.128.533Z" />
                    </svg>
                  </div>
                  <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">
                    Diupload: {selectedBerita.tanggal}
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}