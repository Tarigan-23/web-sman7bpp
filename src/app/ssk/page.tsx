"use client"

import React, { useState, useEffect } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { supabase } from "../../lib/supabase"

export interface SSKProgram {
  id: string
  judul: string
  kategori?: string
  tanggal: string
  narasiLengkap: string
  tipeMedia: "video" | "image"
  mediaUrls: string[]
  videoEmbedUrl?: string
  tautanBerita?: string
  penanggungJawab?: string
}

export default function SSKPage() {
  const [dataSSK, setDataSSK] = useState<SSKProgram[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedItem, setSelectedItem] = useState<SSKProgram | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0)

  // Fetch data SSK Program dari Supabase
  useEffect(() => {
    async function fetchSSKData() {
      try {
        const { data, error } = await supabase
          .from("ssk_program")
          .select("*")
          .order("created_at", { ascending: false })

        if (error) {
          console.error("Error fetching SSK program:", error)
          return
        }

        if (data) {
          const formattedData: SSKProgram[] = data.map((item: any) => ({
            id: item.id,
            judul: item.judul,
            kategori: item.kategori,
            tanggal: item.tanggal,
            narasiLengkap: item.narasi_lengkap || item.narasiLengkap || "",
            tipeMedia: item.tipe_media || item.tipeMedia || "image",
            mediaUrls: Array.isArray(item.media_urls)
              ? item.media_urls
              : typeof item.media_urls === "string" && item.media_urls.startsWith("[")
              ? JSON.parse(item.media_urls)
              : [item.media_urls || "/bg1.jpeg"],
            videoEmbedUrl: item.video_embed_url || item.videoEmbedUrl,
            tautanBerita: item.tautan_berita || item.tautanBerita,
            penanggungJawab: item.penanggung_jawab || item.penanggungJawab,
          }))
          setDataSSK(formattedData)
        }
      } catch (err) {
        console.error("Failed to load SSK data from Supabase:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchSSKData()
  }, [])

  const openModal = (item: SSKProgram) => {
    setSelectedItem(item)
    setCurrentImgIndex(0)
  }

  const closeModal = () => setSelectedItem(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    if (selectedItem) {
      window.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedItem])

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
      
      {/* BACKGROUND ORNAMEN */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg3.jpeg"
          alt="Latar Belakang SMANJU"
          fill
          priority
          className="object-cover object-center opacity-30 fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-black/80 to-slate-950" />
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[45vw] h-[45vw] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content */}
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
              Mengintegrasikan pendidikan kependudukan, Generasi Berencana (GenRe), dan isu demografi untuk membentuk warga sekolah SMAN 7 Balikpapan yang berwawasan masa depan.
            </p>
          </motion.div>
        </section>

        {/* FEED KONTEN DOKUMENTASI & NARASI */}
        <section className="w-full border-t border-white/10 pt-10 space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide uppercase">
              🌱 Dokumentasi <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">& Kegiatan SSK</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm font-light mt-1">
              Klik pada kartu kegiatan untuk melihat tayangan lengkap dan narasi kegiatan secara detail.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20 text-emerald-400">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-400"></div>
            </div>
          ) : (
            /* Grid Cards */
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
            >
              {dataSSK.map((item) => (
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
                      src={item.mediaUrls[0] || "/bg1.jpeg"}
                      alt={item.judul}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(e) => {(e.target as HTMLImageElement).src = "/bg1.jpeg"}}
                    />
                    
                    {/* Badge Tipe Media */}
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                      {item.tipeMedia === "video" ? "🎬 Video Instagram" : "🖼️ Galeri Foto"}
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-emerald-300 text-xs font-semibold bg-black/80 px-3.5 py-1.5 rounded-full border border-emerald-500/40">
                        ▶️ Putar Video & Baca Detail
                      </span>
                    </div>
                  </div>

                  {/* Tampilan Narasi Ringkas */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span className="text-emerald-400 font-semibold uppercase">{item.kategori || "SSK"}</span>
                        <span>📅 {item.tanggal}</span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition line-clamp-2">
                        {item.judul}
                      </h3>
                      
                      {/* Teks Narasi Potongan Awal */}
                      <p className="text-xs text-slate-400 line-clamp-3 font-light leading-relaxed whitespace-pre-line">
                        {item.narasiLengkap}
                      </p>
                    </div>

                    {/* Tombol Baca Selengkapnya */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 group-hover:underline flex items-center gap-1">
                        Baca Selengkapnya <span>→</span>
                      </span>
                      {item.penanggungJawab && (
                        <span className="text-[10px] text-slate-400">{item.penanggungJawab}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      </div>

      {/* ======================================================== */}
      {/* POPUP DETAIL MODAL MODERN & SINEMATIK (Instagram + Narasi)*/}
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

            {/* Container Box Lightbox */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 px-3 py-1.5 rounded-full bg-black/80 border border-white/20 flex items-center gap-2 text-white text-xs hover:bg-red-600 hover:border-red-500 transition duration-200 backdrop-blur-md"
                title="Tekan ESC untuk menutup"
              >
                <span>X</span>
              </button>

              {/* KOLOM KIRI: Video Instagram / Carousel Foto */}
              <div className="md:col-span-7 bg-black/90 flex items-center justify-center p-2 relative overflow-hidden min-h-[350px] md:min-h-[580px]">
                {selectedItem.tipeMedia === "video" && selectedItem.videoEmbedUrl ? (
                  <iframe
                    src={selectedItem.videoEmbedUrl}
                    title={selectedItem.judul}
                    className="w-full h-[380px] sm:h-[480px] md:h-[560px] border-0 rounded-xl"
                    allowFullScreen
                    scrolling="no"
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    <img 
                      src={selectedItem.mediaUrls[currentImgIndex]} 
                      alt={selectedItem.judul} 
                      className="max-w-full max-h-[500px] object-contain rounded-lg shadow-lg"
                      onError={(e) => {(e.target as HTMLImageElement).src = "/bg1.jpeg"}}
                    />

                    {selectedItem.mediaUrls.length > 1 && (
                      <>
                        <button onClick={prevImage} className="absolute left-4 bg-black/60 text-white p-2.5 rounded-full hover:bg-emerald-600 border border-white/10 transition z-10">
                          ‹
                        </button>
                        <button onClick={nextImage} className="absolute right-4 bg-black/60 text-white p-2.5 rounded-full hover:bg-emerald-600 border border-white/10 transition z-10">
                          ›
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* KOLOM KANAN: Full Narasi & Detail Info */}
              <div className="md:col-span-5 p-6 flex flex-col justify-between overflow-y-auto bg-slate-950/90 border-t md:border-t-0 md:border-l border-white/10 space-y-4 max-h-[50vh] md:max-h-[580px]">
                <div className="space-y-4">
                  {/* Badge Header & Tanggal */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 pr-12 md:pr-0">
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-300 font-bold px-2.5 py-1 rounded border border-emerald-500/20 uppercase tracking-widest">
                      {selectedItem.kategori || "SSK Program"}
                    </span>
                    {selectedItem.tanggal && (
                      <span className="text-[11px] text-slate-400 font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        📅 {selectedItem.tanggal}
                      </span>
                    )}
                  </div>

                  {/* Judul Utama */}
                  <h2 className="text-lg md:text-xl font-bold text-white leading-snug">
                    {selectedItem.judul}
                  </h2>

                  {/* Narasi Lengkap */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Narasi Kegiatan:</h4>
                    <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                      {selectedItem.narasiLengkap}
                    </p>
                  </div>
                </div>

                {/* Footer Link & Penanggung Jawab */}
                <div className="pt-4 border-t border-white/10 space-y-3 shrink-0">
                  {selectedItem.penanggungJawab && (
                    <div className="text-xs text-slate-400">
                      Pelaksana: <strong className="text-slate-200">{selectedItem.penanggungJawab}</strong>
                    </div>
                  )}

                  {selectedItem.tautanBerita && (
                    <a
                      href={selectedItem.tautanBerita}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 text-xs text-emerald-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-600 px-4 py-2.5 rounded-xl border border-emerald-500/30 transition duration-200 font-medium"
                    >
                      <span>📸 Buka Postingan Asli di Instagram</span>
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