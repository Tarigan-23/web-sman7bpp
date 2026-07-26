"use client"

import React, { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { DATA_PROGRAM_SSK, SSKProgram } from "../../data/sskData"

export default function SSKPage() {
  const [selectedItem, setSelectedItem] = useState<SSKProgram | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0)

  const openModal = (item: SSKProgram) => {
    setSelectedItem(item)
    setCurrentImgIndex(0)
  }

  const closeModal = () => setSelectedItem(null)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedItem) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedItem.mediaUrls.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedItem) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedItem.mediaUrls.length) % selectedItem.mediaUrls.length)
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden select-none">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg3.jpeg"
          alt="Latar Belakang SMANJU"
          fill
          priority
          className="object-cover object-center opacity-30 fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-black/80 to-slate-950" />
        
        {/* Lampu Sorot Sinematik Tema Hijau Emerald/Teal */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[45vw] h-[45vw] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-8 md:space-y-12">
        
        {/* HERO HEADER */}
        <section className="w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="bg-emerald-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-emerald-300 border border-emerald-400/20 uppercase tracking-widest">
              Garda Berencana & Literasi Kependudukan
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mt-3 mb-1 leading-tight uppercase">
              Sekolah Siaga <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Kependudukan</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-1">
              Mengintegrasikan pendidikan kependudukan, Generasi Berencana (GenRe), dan isu demografi untuk membentuk warga sekolah SMA Negeri 7 Balikpapan yang berwawasan masa depan.
            </p>
          </motion.div>
        </section>

        {/* SEKSI GALERI FEED PROGRAM & NARASI */}
        <section className="w-full border-t border-white/10 pt-10 space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide uppercase">
              Dokumentasi <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">& Aksi Program</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm font-light mt-1">
              Klik pada kartu program untuk melihat narasi detail, dokumentasi foto/video, serta pranala rilis berita terkait.
            </p>
          </div>

          {/* Grid Program SSK */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
          >
            {DATA_PROGRAM_SSK.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                onClick={() => openModal(item)}
                className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden cursor-pointer group shadow-lg flex flex-col justify-between hover:border-emerald-500/50 transition duration-300"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                  <img
                    src={item.mediaUrls[0]}
                    alt={item.judul}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badge Tipe Media */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                    {item.tipeMedia === "video" ? "🎬 Video Program" : "🖼️ Galeri Foto"}
                  </div>

                  {item.mediaUrls.length > 1 && (
                    <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded-md text-white text-[10px] z-10 border border-white/10">
                      +{item.mediaUrls.length - 1} Foto
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-emerald-300 text-xs font-semibold bg-black/70 px-3 py-1.5 rounded-full border border-emerald-500/30">
                      📖 Baca Narasi Detail
                    </span>
                  </div>
                </div>

                {/* Ringkasan Narasi */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>📅 {item.tanggal || "Terjadwal"}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition line-clamp-2">
                      {item.judul}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 font-light leading-relaxed">
                      {item.deskripsiRingkasan}
                    </p>
                  </div>

                  {item.penanggungJawab && (
                    <div className="pt-2 border-t border-white/5 text-[10px] text-slate-400 flex items-center justify-between">
                      <span>Pelaksana:</span>
                      <span className="text-slate-300 font-medium">{item.penanggungJawab}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* ======================================================== */}
      {/* MODAL LIGHTBOX & DETAIL NARASI PROGRAM (POPUP)          */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 select-text"
            onClick={closeModal}
          >
            {/* Backdrop Gelap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Container Box Lightbox Detail */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Silang */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white text-base hover:bg-red-500 hover:border-red-500 transition duration-200"
              >
                ✕
              </button>

              {/* Media Display */}
              <div className="w-full bg-black/60 relative flex items-center justify-center min-h-[250px] md:min-h-[380px] shrink-0">
                {selectedItem.tipeMedia === "video" && selectedItem.videoEmbedUrl ? (
                  <iframe
                    src={selectedItem.videoEmbedUrl}
                    title={selectedItem.judul}
                    className="w-full h-[260px] md:h-[380px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-[260px] md:h-[380px] flex items-center justify-center p-2">
                    <img 
                      src={selectedItem.mediaUrls[currentImgIndex]} 
                      alt={selectedItem.judul} 
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                    />

                    {selectedItem.mediaUrls.length > 1 && (
                      <>
                        <button onClick={prevImage} className="absolute left-4 bg-black/60 text-white p-2.5 rounded-full hover:bg-emerald-600 border border-white/10 transition z-10">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                          </svg>
                        </button>

                        <button onClick={nextImage} className="absolute right-4 bg-black/60 text-white p-2.5 rounded-full hover:bg-emerald-600 border border-white/10 transition z-10">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>

                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
                          {selectedItem.mediaUrls.map((_: string, idx: number) => (
                            <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImgIndex ? "bg-emerald-400 scale-125" : "bg-neutral-500"}`} />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Detail Narasi */}
              <div className="p-6 overflow-y-auto space-y-4 bg-slate-950/90 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white mt-2">
                      {selectedItem.judul}
                    </h2>
                  </div>
                  {selectedItem.tanggal && (
                    <span className="text-xs text-slate-400 font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      📅 {selectedItem.tanggal}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Uraian & Deskripsi Kegiatan:</h4>
                  <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                    {selectedItem.narasiLengkap}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  {selectedItem.penanggungJawab && (
                    <span className="text-slate-400">
                      Pelaksana: <strong className="text-slate-200">{selectedItem.penanggungJawab}</strong>
                    </span>
                  )}

                  {selectedItem.tautanBerita && (
                    <a
                      href={selectedItem.tautanBerita}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/80 px-3 py-1.5 rounded-lg border border-emerald-500/30 transition"
                    >
                      <span>🔗 Baca Liputan Berita Terkait</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}