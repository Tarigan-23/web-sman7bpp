"use client"

import React, { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface GaleriItem {
  judul: string
  gambar: string[]
  deskripsi?: string
  tanggal: string
  kategori: string
}

export default function HumasPage() {
  const [sectionAktif, setSectionAktif] = useState("mitra")

  // State Navigasi Galeri Dokumentasi Laporan
  const [selectedItem, setSelectedItem] = useState<GaleriItem | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0)

  // ==========================================
  // DATA DOKUMENTASI KEGIATAN HUMAS
  // ==========================================
  const galeriHumas: GaleriItem[] = [
    {
      judul: "Lobi Sekolah",
      gambar: ["/bg1.jpeg", "/galeri3.jpg", "/galeri4.jpg"],
      deskripsi: "",
      tanggal: "12 MEI 2026",
      kategori: "Kemitraan"
    },
    {
      judul: "no data",
      gambar: ["/bg2.jpeg"],
      deskripsi: "no data",
      tanggal: "",
      kategori: "Humas"
    },
    {
      judul: "no data",
      gambar: ["/galeri3.jpg", "/galeri5.jpg"],
      deskripsi: "no data",
      tanggal: "",
      kategori: "Humas"
    },
    {
      judul: "no data",
      gambar: ["/galeri4.jpg"],
      deskripsi: "no data",
      tanggal: "",
      kategori: "Humas"
    },
    {
      judul: "no data",
      gambar: ["/galeri5.jpg"],
      deskripsi: "no data",
      tanggal: "",
      kategori: ""
    },
    {
      judul: "no data",
      gambar: ["/galeri6.jpg"],
      deskripsi: "no data",
      tanggal: "",
      kategori: ""
    }
  ]

  const openModal = (item: GaleriItem) => {
    setSelectedItem(item)
    setCurrentImgIndex(0)
  }

  const closeModal = () => setSelectedItem(null)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedItem) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedItem.gambar.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedItem) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedItem.gambar.length) % selectedItem.gambar.length)
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden select-none">
      
      {/* ================= BACKGROUND ORNAMEN SERAGAM KONSISTEN ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg3.jpeg" // Menggunakan file background terpusat (.jpg)
          alt="Latar Belakang SMANJU"
          fill
          priority
          className="object-cover object-center opacity-30 fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-black/75 to-slate-950" />
        
        {/* Efek Lampu Sorot Gradasi Sinematik */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-8 md:space-y-12">
        
        {/* HERO HEADER - SERAGAM DENGAN WAKA LAIN */}
        <section className="w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-400/20 uppercase tracking-widest">
              Sinergi & Kemitraan
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mt-3 mb-1 leading-tight uppercase">
              Hubungan <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Masyarakat</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-1">
              Membangun jembatan komunikasi yang kokoh antara SMAN 7 Balikpapan, alumni, institusi pendidikan, hingga dunia industri.
            </p>
          </motion.div>
        </section>

        {/* SUB NAVIGASI HUMAS - Smooth Swipe di HP */}
        <div className="w-full flex flex-col items-center pt-4">
          <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest mb-3 font-medium">Layanan & Sub-Kategori Humas</p>
          <div className="w-full overflow-x-auto no-scrollbar flex justify-start md:justify-center px-2">
            <div className="flex bg-slate-900/50 p-2 rounded-xl md:rounded-2xl border border-white/5 gap-2 min-w-max backdrop-blur-md shadow-xl">
              
              {/* TOMBOL ALUMNI */}
              <Link href="/alumni">
                <button className="px-4 py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap text-slate-300 bg-white/5 hover:bg-blue-600 hover:text-white active:scale-95">
                  🎓 Alumni
                </button>
              </Link>

              {/* TOMBOL KERJA SAMA MITRA */}
              <button
                onClick={() => setSectionAktif("mitra")}
                className={`px-4 py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                  sectionAktif === "mitra" 
                    ? "bg-blue-600 text-white shadow-md scale-[1.02]" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                🤝 Kerja Sama Mitra
              </button>

              {/* TOMBOL HUBUNGAN KOMUNITAS */}
              <button
                onClick={() => setSectionAktif("komunitas")}
                className={`px-4 py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                  sectionAktif === "komunitas" 
                    ? "bg-blue-600 text-white shadow-md scale-[1.02]" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                🌐 Hubungan Komunitas
              </button>

            </div>
          </div>
        </div>

        {/* SWITCHABLE KONTEN AREA */}
        <div className="w-full min-h-[120px]">
          <AnimatePresence mode="wait">
            {sectionAktif === "mitra" && (
              <motion.div 
                key="mitra-sub" 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }} 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center text-slate-300 text-xs md:text-sm font-light max-w-4xl mx-auto leading-relaxed"
              >
                🤝 Data kemitraan Dunia Usaha Dunia Industri (DUDI), MoU, serta daftar list perguruan tinggi negeri / swasta relasi SMAN 7 Balikpapan dapat dikonfigurasi pada area tab ini.
              </motion.div>
            )}

            {sectionAktif === "komunitas" && (
              <motion.div 
                key="komunitas-sub" 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }} 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center text-slate-300 text-xs md:text-sm font-light max-w-4xl mx-auto leading-relaxed"
              >
                🌐 Agenda penyuluhan, rilis publikasi berita prestasi, integrasi komite perlindungan sekolah, serta program aksi bakti sosial kemasyarakatan.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SEKSI PERMANEN: LAPORAN GALERI DOKUMENTASI */}
        <section className="w-full border-t border-white/10 pt-10 space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide uppercase">
              📸 Laporan & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dokumentasi</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm font-light mt-1">
              Momen transparan, arsip pertanggungjawaban, dan feed dokumentasi publikasi Humas.
            </p>
          </div>

          {/* Grid Galeri Feed */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-3 gap-2 md:gap-4 max-w-6xl mx-auto"
          >
            {galeriHumas.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 0.98 }}
                onClick={() => openModal(item)}
                className="relative aspect-square w-full bg-slate-900 border border-white/10 overflow-hidden cursor-zoom-in group rounded-xl shadow-lg"
              >
                <img
                  src={item.gambar[0]}
                  alt={item.judul}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[8px] md:text-[10px] font-bold text-blue-300 uppercase hidden sm:block">
                  {item.kategori}
                </div>

                {item.gambar.length > 1 && (
                  <div className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-md text-white z-10 border border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5-15H18a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 16.5h-1.5M4.5 19.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 15 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                    </svg>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-2 text-center backdrop-blur-[2px]">
                  <p className="text-white text-xs font-bold hidden md:line-clamp-1">{item.judul}</p>
                  <span className="text-blue-300 text-[11px] font-medium mt-1 hidden md:block">🔍 Perbesar Gambar</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* ======================================================== */}
      {/* 5. LIGHTBOX MODAL CAROUSEL MINIMALIS (Sesuai Request)     */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-text"
            onClick={closeModal}
          >
            {/* Backdrop Gelap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Container Box Lightbox */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Silang Pojok Kanan Atas */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white text-base hover:bg-red-500 hover:border-red-500 transition duration-200"
              >
                ✕
              </button>

              {/* Box Tampilan Gambar Utama (Carousel) */}
              <div className="w-full flex-1 bg-black/40 relative flex items-center justify-center overflow-hidden min-h-[35vh] md:min-h-[50vh] p-2">
                <img 
                  src={selectedItem.gambar[currentImgIndex]} 
                  alt={selectedItem.judul} 
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
                />

                {/* Tombol Navigasi Kanan-Kiri Jika Gambar Lebih dari Satu */}
                {selectedItem.gambar.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 bg-black/60 text-white p-2.5 rounded-full hover:bg-blue-600 border border-white/10 transition z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>
                    </button>

                    <button onClick={nextImage} className="absolute right-4 bg-black/60 text-white p-2.5 rounded-full hover:bg-blue-600 border border-white/10 transition z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>

                    {/* Dot Indicator Slider */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
                      {selectedItem.gambar.map((_, idx) => (
                        <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImgIndex ? "bg-blue-500 scale-125" : "bg-neutral-500"}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Caption Minimalis di Bawah Gambar (Hanya Judul, Kategori & Tanggal) */}
              <div className="p-5 bg-slate-950/80 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 flex-shrink-0">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] bg-blue-500/10 text-blue-300 font-bold px-2 py-0.5 rounded border border-blue-500/20 uppercase tracking-widest">
                      {selectedItem.kategori}
                    </span>
                  </div>
                  <h2 className="text-base md:text-lg font-bold text-white tracking-wide">
                    {selectedItem.judul}
                  </h2>
                </div>
                
                <div className="text-right shrink-0">
                  <p className="text-[11px] text-slate-400 font-mono tracking-wider bg-white/5 px-2.5 py-1 rounded-md border border-white/5 inline-block">
                    📅 {selectedItem.tanggal}
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