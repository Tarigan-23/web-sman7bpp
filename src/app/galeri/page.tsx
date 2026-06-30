"use client"

import React, { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface GaleriItem {
  judul: string
  gambar: string[]
  deskripsi?: string
  tanggal: string
  kategori: string
}

export default function GaleriPage() {
  // DATA GALERI KEGIATAN SMAN 7 BALIKPAPAN
  const galeri: GaleriItem[] = [
    {
      judul: "ECamp 2026 ~ S P E A K . S H A R E . S H I N E ✨",
      gambar: ["/berita/168.png", "/berita/169.jpeg", "/berita/166.jpeg", ],
      deskripsi: "Liburan makin berarti bareng E-Camp SMAN 7 Balikpapan! 🇬🇧",
      tanggal: "30 Juni 2026",
      kategori: "Dokumentasi"
    },
    {
      judul: "Masih ada pertanyaan seputar SPMB Tahap II, khususnya Jalur Domisili?",
      gambar: ["/SPMB-Tahap-II/1.jpg", "/SPMB-Tahap-II/2.jpg", "/SPMB-Tahap-II/3.jpg", "/SPMB-Tahap-II/4.jpg", "/SPMB-Tahap-II/5.jpg", "/SPMB-Tahap-II/6.jpg"],
      deskripsi: "Tenang, kamu tidak sendirian. Kami memahami bahwa proses pendaftaran sering kali menimbulkan berbagai pertanyaan dan kebingungan Melalui postingan ini, SMA Negeri 7 Balikpapan telah merangkum beberapa pertanyaan yang paling sering ditanyakan beserta jawabannya untuk membantu kamu memahami proses SPMB dengan lebih mudah. Yuk, geser slide berikutnya dan temukan jawaban atas pertanyaanmu! Jika masih ada hal yang ingin ditanyakan, jangan ragu untuk menghubungi kami melalui layanan informasi resmi SMA Negeri 7 Balikpapan. Kami siap membantu dan menantikan kehadiranmu sebagai bagian dari keluarga besar SMAN 7 Balikpapan.",
      tanggal: "28 Juni 2026",
      kategori: "Informasi"
    },
    {
      judul: "Pengumuman Hasil Sleksi SPMB Tahap 1",
      gambar: ["/berita/164.jpeg", "/galeri/pngumspmb1.jpeg", "/galeri/pngumspmb2.jpeg", "/galeri/pngumspmb3.jpeg", "/galeri/pngumspmb4.jpeg", "/galeri/pngumspmb5.jpeg", "/galeri/pngumspmb6.jpeg"],
      deskripsi: "Info selengkapnya bisa dilihat di halaman SPMB",
      tanggal: "28 Juni 2026",
      kategori: "Informasi"
    },
    {
      judul: "Peserta OSN SMAN 7 Balikpapan",
      gambar: ["/berita/timosn1.jpeg", "/berita/timosn2.jpeg", "/berita/timosn3.jpeg", "/berita/timosn4.jpeg", "/berita/timosn5.jpeg"],
      deskripsi: "",
      tanggal: "18 Juni 2026",
      kategori: "Informasi"
    },
    {
      judul: "🌟 INFORMASI SPMB KALTIM 2026 🌟",
      gambar: ["/galeri/spmb1.jpeg", "/galeri/spmb2.jpeg"],
      deskripsi: "",
      tanggal: "18 Juni 2026",
      kategori: "Informasi"
    },
    {
      judul: "Rapat Kenaikan Kelas",
      gambar: ["/galeri/1.jpeg", "/galeri/2.jpeg", "/galeri/3.jpeg", "/galeri/4.jpeg", "/galeri/5.jpeg", "/galeri/6.jpeg", "/galeri/7.jpeg", "/galeri/8.jpeg", "/galeri/9.jpeg", "/galeri/10.jpeg"],
      deskripsi: "",
      tanggal: "17 Juni 2026",
      kategori: "Dokumentasi"
    },
    {
      judul: "Info lengkap SPMB 2026",
      gambar: ["/spmb/SPANDUKSPMB2026.png", "/spmb/spmb4.jpeg", "/spmb/spmb5.png", "/spmb/spmb6.png", "/spmb/spmb7.png"],
      deskripsi: "",
      tanggal: "08 Juni 2026",
      kategori: "Informasi"
    },
    {
      judul: "Pramuka Penegak Laksana",
      gambar: ["/41.png"],
      deskripsi: "Pramuka penegak laksana SMA Negeri 7 Balikpapan.",
      tanggal: "14 - 15 Februari 2026",
      kategori: "Ekskul"
    }
  ]

  const [selectedItem, setSelectedItem] = useState<GaleriItem | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0)

  const openModal = (item: GaleriItem) => {
    setSelectedItem(item)
    setCurrentImgIndex(0)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/bg3.jpeg')",
      }}
    >
      {/* Overlay Backdrop - Sedikit lebih gelap untuk meningkatkan kontras teks */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* Konten Utama */}
      <div className="relative z-10 pt-24 md:pt-36 pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-8 md:space-y-12">
        
        {/* HERO TITLE - Tampilan super tajam & responsif */}
        <section className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-500/20 uppercase tracking-widest">
              Dokumentasi Kegiatan
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-wide mt-3 mb-1">
              GALERI <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">SMANJU</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-xl font-light tracking-wide">
              SMA Negeri 7 Balikpapan
            </p>
          </motion.div>
        </section>

        {/* Grid Galeri Ala Instagram */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 bg-slate-900/40 p-2 sm:p-4 rounded-2xl border border-white/5 backdrop-blur-sm"
        >
          {galeri.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(item)}
              className="relative aspect-square w-full bg-slate-950 overflow-hidden cursor-pointer group rounded-sm sm:rounded-md border border-white/5"
            >
              {/* Foto Utama */}
              <Image
                src={item.gambar[0]}
                alt={item.judul}
                fill
                sizes="(max-w-7xl) 33vw"
                className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
              />

              {/* Indikator Multi-Foto */}
              {item.gambar.length > 1 && (
                <div className="absolute top-2 right-2 bg-black/70 p-1.5 rounded-md text-white z-10 backdrop-blur-sm border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5-15H18a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 16.5h-1.5M4.5 19.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 15 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>
                </div>
              )}

              {/* Kategori Tag */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-2 text-center">
                <span className="text-white text-xs md:text-sm font-semibold tracking-wide line-clamp-1 px-1">{item.judul}</span>
                <span className="text-blue-400 text-[10px] uppercase font-mono mt-1 hidden sm:block bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/30">{item.kategori}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- MODAL POPUP DETAIL ALA INSTAGRAM --- */}
      <AnimatePresence>
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-10 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            {/* Tombol Close Pojok Atas Kanan Layar */}
            <button className="absolute top-4 right-4 text-white hover:text-red-400 transition z-50 p-2" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Kotak Utama Postingan */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-5xl h-[85vh] md:h-[80vh] flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* KOLOM KIRI: Media Image Viewer & Slider */}
              <div className="relative flex-1 bg-slate-950 flex items-center justify-center h-[45%] md:h-full group border-b md:border-b-0 border-slate-800">
                <Image 
                  src={selectedItem.gambar[currentImgIndex]} 
                  alt={selectedItem.judul} 
                  fill
                  sizes="(max-w-5xl) 60vw"
                  className="object-contain"
                  priority
                />

                {/* Navigasi Panah Kiri */}
                {selectedItem.gambar.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-3 bg-black/60 text-white p-2 rounded-full hover:bg-blue-600 transition backdrop-blur-sm border border-white/10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>
                    </button>

                    {/* Navigasi Panah Kanan */}
                    <button 
                      onClick={nextImage}
                      className="absolute right-3 bg-black/60 text-white p-2 rounded-full hover:bg-blue-600 transition backdrop-blur-sm border border-white/10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>

                    {/* Dots Carousel */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                      {selectedItem.gambar.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImgIndex ? "bg-blue-500 w-3" : "bg-slate-500"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* KOLOM KANAN: Detail Informasi Instansi */}
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

                {/* Area Konten Caption / Deskripsi */}
                <div className="p-4 flex-1 overflow-y-auto space-y-4 text-slate-300 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-slate-800">
                  <div>
                    <p className="text-blue-400 text-xs font-mono font-bold uppercase mb-1">[{selectedItem.kategori}]</p>
                    <h2 className="text-white font-bold text-base mb-2 leading-snug">{selectedItem.judul}</h2>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      {selectedItem.deskripsi || "Tidak ada rincian deskripsi untuk dokumentasi ini."}
                    </p>
                  </div>

                  {/* Section Komentar Interaktif Tiruan */}
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
                    Diupload: {selectedItem.tanggal}
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