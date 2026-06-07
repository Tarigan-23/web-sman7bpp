"use client"

import React, { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Link from "next/link" // Import Link untuk navigasi antar halaman

// ==========================================
// INTERFACE & DATA COMPONENT
// ==========================================
interface GaleriItem {
  judul: string
  gambar: string[]
  deskripsi?: string
  tanggal: string
  kategori: string
}

export default function HumasPage() {
  // Mengubah default tab aktif langsung ke "mitra" karena alumni sudah punya halaman sendiri
  const [sectionAktif, setSectionAktif] = useState("mitra")

  // State Khusus Navigasi Galeri Dokumentasi Laporan
  const [selectedItem, setSelectedItem] = useState<GaleriItem | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0)

  // ==========================================
  // DATA DOKUMENTASI KEGIATAN HUMAS (STYLE INSTAGRAM FEED)
  // ==========================================
  const galeriHumas: GaleriItem[] = [
    {
      judul: "Kunjungan Kerja IKN",
      gambar: ["/bg1.jpeg", "/galeri3.jpg", "/galeri4.jpg"],
      deskripsi: "Menjalin silaturahmi dan peninjauan area publik bersama perwakilan komite sekolah di area Istana Garuda, Ibu Kota Nusantara.",
      tanggal: "12 MEI 2026",
      kategori: "Kemitraan"
    },
    {
      judul: "Acara Adat Sumpah Pemuda",
      gambar: ["/bg2.jpeg"],
      deskripsi: "Mengenakan pakaian adat nusantara guna memperkuat keharmonisan hubungan internal antar civitas akademika sekolah.",
      tanggal: "28 OKTOBER 2025",
      kategori: "Komunitas"
    },
    {
      judul: "KEGIATAN 2025",
      gambar: ["/galeri3.jpg", "/galeri5.jpg"],
      deskripsi: "Aksi kolaborasi Humas dan Universitas Mulia dalam mengampanyekan gaya hidup sehat ke masyarakat Balikpapan.",
      tanggal: "15 DESEMBER 2025",
      kategori: "Sosialisasi"
    },
    {
      judul: "Eksplorasi Lingkungan Hidup",
      gambar: ["/galeri4.jpg"],
      deskripsi: "Dokumentasi kegiatan bakti sosial penanaman bibit pohon bersama komunitas hijau lokal di wilayah perbukitan.",
      tanggal: "22 FEBRUARI 2026",
      kategori: "Komunitas"
    },
    {
      judul: "Sertifikasi Kompetensi BNSP",
      gambar: ["/galeri5.jpg"],
      deskripsi: "Penandatanganan kerja sama pelaksanaan sertifikasi kompetensi keahlian untuk jaminan penyerapan lulusan di dunia industri.",
      tanggal: "04 MARET 2026",
      kategori: "Kemitraan"
    },
    {
      judul: "Ramah Tamah Alumni SMAN 7",
      gambar: ["/galeri6.jpg"],
      deskripsi: "Malam keakraban, sharing session karir, dan pembentukan pengurus ikatan alumni lintas generasi angkatan.",
      tanggal: "10 APRIL 2026",
      kategori: "Alumni"
    }
  ]

  // Handler Fungsi Galeri Modal
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

  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Main Content Container */}
      <div className="relative z-10 pt-28 md:pt-36 pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-16">
        
        {/* ======================================================== */}
        {/* 1. HERO HEADER & VISI MISI                               */}
        {/* ======================================================== */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-400/20 uppercase tracking-wider">
              Sinergi & Kemitraan
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-wide mt-3 mb-2">
              Hubungan <span className="text-blue-400">Masyarakat</span>
            </h1>
            <p className="text-gray-300 text-xs md:text-base max-w-2xl mx-auto leading-relaxed px-2">
              Membangun jembatan komunikasi yang kokoh antara SMAN 7 Balikpapan, alumni, institusi pendidikan, hingga dunia industri.
            </p>
          </motion.div>
          
        </section>

        {/* ======================================================== */}
        {/* 2. SUB NAVIGASI HUMAS (ALUMNI MENJADI RUNNING ROUTE LINK) */}
        {/* ======================================================== */}
        <div className="w-full flex flex-col items-center border-t border-white/10 pt-10">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Layanan & Sub-Kategori Humas</p>
          <div className="w-full overflow-x-auto no-scrollbar flex justify-start md:justify-center px-2">
            <div className="flex bg-slate-900/50 p-1.5 rounded-xl border border-white/5 gap-1.5 min-w-max">
              
              {/* TOMBOL ALUMNI: Menggunakan Link Menuju Halaman Statistik Alumni Anda */}
              <Link href="/alumni">
                <button className="px-5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap text-gray-300 bg-white/5 hover:bg-blue-500 hover:text-white active:scale-95">
                  🎓 Alumni
                </button>
              </Link>

              {/* TOMBOL KERJA SAMA MITRA */}
              <button
                onClick={() => setSectionAktif("mitra")}
                className={`px-5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                  sectionAktif === "mitra" ? "bg-blue-500 text-white shadow-lg" : "text-gray-300 hover:bg-white/5"
                }`}
              >
                🤝 Kerja Sama Mitra
              </button>

              {/* TOMBOL HUBUNGAN KOMUNITAS */}
              <button
                onClick={() => setSectionAktif("komunitas")}
                className={`px-5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                  sectionAktif === "komunitas" ? "bg-blue-500 text-white shadow-lg" : "text-gray-300 hover:bg-white/5"
                }`}
              >
                🌐 Hubungan Komunitas
              </button>

            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. SWITCHABLE KONTEN AREA (TANPA COMPONENT ALUMNI)        */}
        {/* ======================================================== */}
        <div className="w-full min-h-[160px]">
          <AnimatePresence mode="wait">
            {sectionAktif === "mitra" && (
              <motion.div 
                key="mitra-sub" 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }} 
                className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 text-center text-gray-300 text-xs md:text-sm font-light max-w-4xl mx-auto"
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
                className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 text-center text-gray-300 text-xs md:text-sm font-light max-w-4xl mx-auto"
              >
                🌐 Agenda penyuluhan, rilis publikasi berita prestasi, integrasi komite perlindungan sekolah, serta program aksi bakti sosial kemasyarakatan.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ======================================================== */}
        {/* 4. SEKSI PERMANEN: LAPORAN GALERI DOKUMENTASI            */}
        {/* ======================================================== */}
        <section className="w-full border-t border-white/10 pt-14 space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide uppercase">
              📸 Laporan & <span className="text-blue-400">Dokumentasi</span>
            </h2>
            <p className="text-gray-400 text-xs md:text-sm font-light mt-1">
              Momen transparan, arsip pertanggungjawaban, dan feed dokumentasi publikasi Humas.
            </p>
          </div>

          {/* Grid Galeri Feed ala Instagram */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-3 gap-1.5 md:gap-4 max-w-6xl mx-auto"
          >
            {galeriHumas.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 0.99 }}
                onClick={() => openModal(item)}
                className="relative aspect-square w-full bg-neutral-900 border border-white/5 overflow-hidden cursor-pointer group rounded-md md:rounded-xl"
              >
                <img
                  src={item.gambar[0]}
                  alt={item.judul}
                  className="w-full h-full object-cover transition duration-500 group-hover:brightness-75"
                />

                <div className="absolute top-2 left-2 bg-blue-600/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[8px] md:text-[10px] font-bold text-white uppercase hidden sm:block">
                  {item.kategori}
                </div>

                {item.gambar.length > 1 && (
                  <div className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-md text-white z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5-15H18a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 16.5h-1.5M4.5 19.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 15 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                    </svg>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-200 flex flex-col items-center justify-center p-2 text-center">
                  <p className="text-white text-xs font-bold hidden md:line-clamp-1">{item.judul}</p>
                  <span className="text-blue-300 text-[11px] font-medium mt-1 hidden md:block">Buka Laporan →</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* ======================================================== */}
      {/* 5. MODAL INTERAKTIF CAROUSEL ALA INSTAGRAM                */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <button className="absolute top-4 right-4 text-white hover:text-gray-300 z-50" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-black border border-neutral-800 w-full max-w-5xl h-[80vh] md:h-[70vh] flex flex-col md:flex-row rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-1 bg-neutral-950 flex items-center justify-center h-1/2 md:h-full group">
                <img 
                  src={selectedItem.gambar[currentImgIndex]} 
                  alt={selectedItem.judul} 
                  className="max-w-full max-h-full object-contain"
                />

                {selectedItem.gambar.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-3 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>
                    </button>

                    <button onClick={nextImage} className="absolute right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
                      {selectedItem.gambar.map((_, idx) => (
                        <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImgIndex ? "bg-blue-500 scale-125" : "bg-neutral-500"}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="w-full md:w-[360px] bg-neutral-900 border-t md:border-t-0 md:border-l border-neutral-800 flex flex-col h-1/2 md:h-full">
                <div className="p-3.5 border-b border-neutral-800 flex items-center space-x-3 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                    S7
                  </div>
                  <div>
                    <h3 className="text-white text-xs font-semibold">humas_sman7bpp</h3>
                    <p className="text-neutral-400 text-[10px]">Balikpapan, Kaltim</p>
                  </div>
                </div>

                <div className="p-4 flex-1 overflow-y-auto space-y-4 text-xs">
                  <div>
                    <p className="text-white font-bold text-sm mb-1.5">{selectedItem.judul}</p>
                    <p className="text-neutral-300 leading-relaxed text-justify font-light">
                      {selectedItem.deskripsi || "Tidak ada deskripsi tambahan."}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-800/60 space-y-2.5">
                    <div>
                      <span className="text-white font-semibold mr-1.5">komite.sman7</span>
                      <span className="text-neutral-400 font-light">Sinergi dokumentasi yang sangat transparan 👍</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between shrink-0">
                  <div className="flex space-x-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 cursor-pointer hover:text-red-400 transition"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                  </div>
                  <p className="text-[10px] text-neutral-500 font-mono tracking-wider">{selectedItem.tanggal}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}