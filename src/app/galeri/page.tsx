"use client"

import React, { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"

interface GaleriItem {
  judul: string
  gambar: string[]
  deskripsi?: string
}

export default function GaleriPage() {
  // Data galeri (kamu bisa menyesuaikan path gambarnya di public folder)
  const galeri: GaleriItem[] = [
    {
      judul: "Kunjungan IKN",
      gambar: ["/bg1.jpeg", "/galeri3.jpg", "/galeri4.jpg"],
      deskripsi: "Menikmati pemandangan indah di sekitar area Istana Garuda, Ibu Kota Nusantara bersama rekan-rekan."
    },
    {
      judul: "Acara Adat Budaya",
      gambar: ["/bg2.jpeg"],
      deskripsi: "Mengenakan pakaian adat dalam rangka melestarikan budaya lokal dan memperingati hari besar."
    },
    {
      judul: "Mulia 5K Fun Run",
      gambar: ["/galeri3.jpg", "/galeri5.jpg"],
      deskripsi: "Semangat mencapai garis finish di event Mulia 5K Fun Run 2025! Terus bergerak maju."
    },
    {
      judul: "Eksplorasi Alam",
      gambar: ["/galeri4.jpg"],
      deskripsi: "Melihat lautan awan yang menyejukkan mata di pagi hari dari puncak bukit."
    },
    {
      judul: "Sertifikasi BNSP",
      gambar: ["/galeri5.jpg"],
      deskripsi: "Lembaga Sertifikasi Profesi Universitas Mulia Balikpapan untuk meningkatkan kompetensi mahasiswa."
    },
    {
      judul: "Ramah Tamah Aron Rudang Mayang",
      gambar: ["/galeri6.jpg"],
      deskripsi: "Dokumentasi kegiatan hangat malam ramah tamah bersama seluruh tim panitia."
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
      transition: { staggerChildren: 0.08 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay Background Utama */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 pt-24 pb-20 px-4 max-w-6xl mx-auto block">

        {/* Judul Halaman */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white tracking-wide uppercase">
            Galeri Kegiatan
          </h1>
          <p className="text-gray-400 text-sm mt-2 font-light">
            Momen dan Dokumentasi Pilihan - SMA Negeri 7 Balikpapan
          </p>
        </motion.div>

        {/* Grid Galeri (Hanya menampilkan foto persegi ala feed Instagram) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 gap-1 md:gap-4"
        >
          {galeri.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 0.99 }}
              onClick={() => openModal(item)}
              className="relative aspect-square w-full bg-neutral-900 overflow-hidden cursor-pointer group"
            >
              {/* Foto Utama */}
              <img
                src={item.gambar[0]}
                alt={item.judul}
                className="w-full h-full object-cover transition duration-500 group-hover:brightness-75"
              />

              {/* Indikator Multi-Foto di Pojok Kanan Atas */}
              {item.gambar.length > 1 && (
                <div className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-md text-white z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5-15H18a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 16.5h-1.5M4.5 19.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 15 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>
                </div>
              )}

              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                <span className="text-white text-sm font-medium hidden md:block">Lihat Postingan</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- MODAL POPUP ALA INSTAGRAM --- */}
      <AnimatePresence>
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Tombol Close */}
            <button className="absolute top-4 right-4 text-white hover:text-gray-300 z-50" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Kotak Utama Postingan */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-black border border-neutral-800 w-full max-w-5xl h-[85vh] md:h-[75vh] flex flex-col md:flex-row rounded-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* KOLOM KIRI: Foto & Navigasi Slider */}
              <div className="relative flex-1 bg-neutral-950 flex items-center justify-center h-1/2 md:h-full group">
                <img 
                  src={selectedItem.gambar[currentImgIndex]} 
                  alt={selectedItem.judul} 
                  className="max-w-full max-h-full object-contain"
                />

                {/* Tombol Panah Kiri */}
                {selectedItem.gambar.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>
                    </button>

                    {/* Tombol Panah Kanan */}
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>

                    {/* Indikator Titik (Dots Carousel) */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                      {selectedItem.gambar.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImgIndex ? "bg-blue-500" : "bg-neutral-500"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* KOLOM KANAN: Detail Info / Samping Feed */}
              <div className="w-full md:w-[380px] bg-neutral-900 border-t md:border-t-0 md:border-l border-neutral-800 flex flex-col h-1/2 md:h-full">
                
                {/* Header Akun Instansi */}
                <div className="p-4 border-b border-neutral-800 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                    S7
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-semibold">sman7balikpapan</h3>
                    <p className="text-neutral-400 text-[11px]">Balikpapan, Kaltim</p>
                  </div>
                </div>

                {/* Konten Utama / Caption & Keterangan */}
                <div className="p-4 flex-1 overflow-y-auto space-y-4 custom-scrollbar">
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">{selectedItem.judul}</p>
                    <p className="text-neutral-300 text-xs leading-relaxed">
                      {selectedItem.deskripsi || "Tidak ada deskripsi tambahan untuk postingan ini."}
                    </p>
                  </div>

                  {/* Variasi Tambahan: Section Komentar Estetik Statis */}
                  <div className="pt-2 border-t border-neutral-800/50 space-y-3">
                    <div className="text-[12px]">
                      <span className="text-white font-semibold mr-2">osis_sman7</span>
                      <span className="text-neutral-400">Kegiatannya seru banget kemarin! 🔥</span>
                    </div>
                    <div className="text-[12px]">
                      <span className="text-white font-semibold mr-2">infobpp</span>
                      <span className="text-neutral-400">Keren, sukses terus acaranya! 🙌</span>
                    </div>
                  </div>
                </div>

                {/* Bagian Bawah: Tombol Aksi Estetik (Like, Comment, Share) */}
                <div className="p-4 border-t border-neutral-800 space-y-2 bg-neutral-900/50">
                  <div className="flex space-x-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer hover:text-neutral-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer hover:text-neutral-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-1.923 2.413a4.474 4.474 0 0 0 3.536-1.003c.43-.244.97-.242 1.4.03a9.14 9.14 0 0 0 3.128.533Z" />
                    </svg>
                  </div>
                  <p className="text-[11px] text-neutral-400 uppercase tracking-wider">7 DESEMBER 2025</p>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}