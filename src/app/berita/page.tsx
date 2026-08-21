"use client"

import React, { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { berita as beritaData } from "../../data/berita"

interface BeritaItem {
  id: number
  judul: string
  tanggal: string
  gambar: string[] | string
  deskripsi: string
  sumberUrl: string
}

export default function BeritaPage() {
  // Ubah otomatis data berita agar properti 'gambar' SELALU berupa array
  const formattedBerita = beritaData.map((item: any) => ({
    ...item,
    gambar: Array.isArray(item.gambar) ? item.gambar : [item.gambar],
  }))
  const [berita] = useState<BeritaItem[]>(formattedBerita)
  const [selectedBerita, setSelectedBerita] = useState<BeritaItem | null>(null)

  // State untuk melacak index foto yang sedang aktif di dalam modal detail
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0)

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

  const handleCardClick = (e: React.MouseEvent, item: BeritaItem) => {
    if (item.sumberUrl && item.sumberUrl.startsWith("http") && !item.sumberUrl.includes("sman7-bpp.sch.id/galeri")) {
      return
    }

    e.preventDefault()
    setSelectedBerita(item)
    setCurrentImgIndex(0) // Reset index foto ke yang pertama saat membuka modal baru
  }

  // Navigasi Slider Foto
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedBerita) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedBerita.gambar.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedBerita) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedBerita.gambar.length) % selectedBerita.gambar.length)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden select-none">

      {/* Background Ornamen */}
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

        {/* Grid Kartu Berita (Tanpa Loading karena data statis lokal) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
              <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 sm:group-hover:scale-[1.02] sm:group-hover:border-white/20 transition duration-300 cursor-pointer h-full shadow-xl flex flex-col justify-between">

                <div>
                  {/* TAMPILAN GAMBAR UTAMA KARTU (Mengambil index pertama [0]) */}
                  <div className="w-full h-48 md:h-56 overflow-hidden relative border-b border-white/5 flex-shrink-0 bg-black/20">
                    <img
                      src={item.gambar[0]}
                      alt={item.judul}
                      className="w-full h-full object-cover transition duration-500 sm:group-hover:scale-105"
                    />
                    {/* Icon Indikator Multi-Post ala Instagram di pojok kanan atas kartu */}
                    {item.gambar.length > 1 && (
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm p-1.5 rounded-lg text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5 3h10.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Area Konten Text */}
                  <div className="p-5 md:p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                        📅 {item.tanggal}
                      </p>
                      <h2 className="text-base md:text-lg font-bold text-slate-100 mt-2 line-clamp-2 group-hover:text-blue-400 transition duration-200 leading-snug min-h-[2.8rem]">
                        {item.judul}
                      </h2>
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

      {/* Modal Detail Popup Premium */}
      <AnimatePresence>
        {selectedBerita && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-10 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedBerita(null)}
          >
            {/* Tombol Close */}
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
              {/* KOLOM KIRI: Media Image Viewer */}
              <div className="relative flex-1 bg-slate-950 flex items-center justify-center h-[45%] md:h-full group border-b md:border-b-0 border-slate-800 overflow-hidden">

                {/* Gambar Berdasarkan Index Aktif */}
                <motion.img
                  key={currentImgIndex}
                  src={selectedBerita.gambar[currentImgIndex]}
                  alt={selectedBerita.judul}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-contain max-h-full block p-1 select-none"
                />

                {/* Tombol Navigasi Slider */}
                {selectedBerita.gambar.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 bg-black/50 hover:bg-black/80 p-2 rounded-full text-white transition backdrop-blur-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-3 bg-black/50 hover:bg-black/80 p-2 rounded-full text-white transition backdrop-blur-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>

                    {/* Indikator Dots Slider */}
                    {/* Indikator Dots Slider */}
                    <div className="absolute bottom-4 flex justify-center space-x-1.5 z-10 w-full">
                      {(Array.isArray(selectedBerita.gambar) ? selectedBerita.gambar : [selectedBerita.gambar]).map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImgIndex ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/40'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* KOLOM KANAN: Detail Informasi Berita */}
              <div className="w-full md:w-[380px] bg-slate-900 flex flex-col h-[55%] md:h-full">
                <div className="p-4 border-b border-slate-800 flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-black shadow-md">
                    S7
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-bold tracking-wide">sman7balikpapan</h3>
                    <p className="text-slate-400 text-[11px] font-medium">Balikpapan, Kalimantan Timur</p>
                  </div>
                </div>

                <div className="p-4 flex-1 overflow-y-auto space-y-4 text-slate-300 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-slate-800">
                  <div>
                    <p className="text-blue-400 text-xs font-mono font-bold uppercase mb-1">[Warta SMANJU]</p>
                    <h2 className="text-white font-bold text-base mb-2 leading-snug">{selectedBerita.judul}</h2>

                    <div className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify font-light space-y-3">
                      {selectedBerita.deskripsi.split("\n").map((line, index) => (
                        <p key={index} className="min-h-[1rem]">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

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