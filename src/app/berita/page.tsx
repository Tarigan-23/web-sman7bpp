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
    // Jika link valid mengarah ke luar (cth: Instagram), biarkan default membuka tab baru
    if (item.sumberUrl && item.sumberUrl.startsWith("http") && !item.sumberUrl.includes("sman7-bpp.sch.id/galeri")) {
      return // Biarkan tag <a> menjalankan tugasnya
    }
    
    // Jika link kosong, berisi "#", atau mengarah ke galeri internal, cegah pindah halaman dan buka Detail Modal
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

                      {/* Deskripsi Singkat (Line Clamp agar seragam rapi) */}
                      <p className="text-slate-400 leading-relaxed font-light text-xs md:text-sm text-justify line-clamp-3 mt-3">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Penanda Aksi di bagian bawah kartu */}
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

      <AnimatePresence>
        {selectedBerita && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-text">
            
            {/* Lapisan Latar Belakang Gelap Modal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBerita(null)} // Klik luar untuk menutup
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Kontainer Utama Box Detail Berita (Ala Web News Premium) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
            >
              
              {/* Tombol Close Silang Pojok Kanan Atas */}
              <button
                onClick={() => setSelectedBerita(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white text-lg hover:bg-red-500 hover:border-red-500 transition duration-200"
              >
                ✕
              </button>

              {/* Area Gambar Utama Berita */}
              <div className="w-full h-56 md:h-80 relative overflow-hidden bg-black/40 border-b border-white/5 flex-shrink-0">
                <img
                  src={selectedBerita.gambar}
                  alt={selectedBerita.judul}
                  className="w-full h-full object-contain md:object-cover"
                />
                {/* Efek gradasi shadow pada gambar */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>

              {/* Area Text Isi Berita Penuh (Scrollable) */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                
                {/* Atribut Tanggal & Meta */}
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest">
                  <span>Warta SMANJU</span>
                  <span>•</span>
                  <span>📅 {selectedBerita.tanggal}</span>
                </div>

                {/* Judul Penuh */}
                <h2 className="text-xl md:text-3xl font-black text-white leading-tight tracking-tight">
                  {selectedBerita.judul}
                </h2>

                {/* Pembatas Line */}
                <div className="w-16 h-1 bg-blue-500 rounded-full my-2" />

                {/* Deskripsi Lengkap Tanpa Batasan (Justify Text Paragraf) */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed text-justify font-light whitespace-pre-line pt-2">
                  {selectedBerita.deskripsi}
                </p>

                {/* Tombol Opsi Eksternal jika ada (Misal mengarah ke halaman galeri/pendukung) */}
                {selectedBerita.sumberUrl && selectedBerita.sumberUrl !== "#" && (
                  <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-400">
                      Punya informasi tambahan terkait berita ini?
                    </span>
                    <a
                      href={selectedBerita.sumberUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs md:text-sm py-2.5 px-5 rounded-xl shadow-lg transition duration-200"
                    >
                      🔗 Lihat Dokumen / Galeri Pendukung
                    </a>
                  </div>
                )}
              </div>

              {/* Footer Modal Ringkas */}
              <div className="bg-slate-950/50 border-t border-white/5 px-6 py-4 flex items-center justify-between flex-shrink-0">
                <span className="text-[10px] text-slate-500 font-mono">ID BERITA: #{selectedBerita.id}</span>
                <button
                  onClick={() => setSelectedBerita(null)}
                  className="text-xs text-slate-400 hover:text-white transition duration-150 font-medium"
                >
                  Tutup Halaman ✕
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}