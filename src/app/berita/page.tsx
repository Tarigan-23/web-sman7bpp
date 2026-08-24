"use client"

import React, { useState, useEffect } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { supabase } from "../../lib/supabase"

interface BeritaItem {
  id: number
  judul: string
  tanggal: string
  gambar: string[]
  deskripsi: string
  sumberUrl: string
}

export default function BeritaPage() {
  const [berita, setBerita] = useState<BeritaItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedBerita, setSelectedBerita] = useState<BeritaItem | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0)

  // Fetch data dari Supabase
  useEffect(() => {
    async function fetchBerita() {
      try {
        const { data, error } = await supabase
          .from("berita")
          .select("*")
          .order('id', { ascending: false });
          
        if (error) {
          console.error("Error fetching berita from Supabase:", error)
          return
        }

        if (data) {
          const formattedData: BeritaItem[] = data.map((item: any) => {
            let gambarArray: string[] = []
            if (Array.isArray(item.gambar)) {
              gambarArray = item.gambar
            } else if (typeof item.gambar === "string" && item.gambar.startsWith("[")) {
              try {
                gambarArray = JSON.parse(item.gambar)
              } catch {
                gambarArray = [item.gambar]
              }
            } else if (item.gambar) {
              gambarArray = [item.gambar]
            } else {
              gambarArray = ["/bg3.jpg"]
            }

            return {
              id: Number(item.id) || Date.now(),
              judul: item.judul || "",
              tanggal: item.tanggal || "",
              gambar: gambarArray,
              deskripsi: item.deskripsi || "",
              sumberUrl: item.sumber_url || item.sumberUrl || "#",
            }
          })
          setBerita(formattedData)
        }
      } catch (err) {
        console.error("Failed to load news from Supabase:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchBerita()
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  // Fungsi saat kartu diklik: Jika sumberUrl eksternal (bukan galeri internal), biarkan buka link. Jika tidak, buka modal detail.
  const handleCardClick = (e: React.MouseEvent, item: BeritaItem) => {
    if (item.sumberUrl && item.sumberUrl.startsWith("http") && !item.sumberUrl.includes("sman7-bpp.sch.id")) {
      return // Biarkan membuka link eksternal di tab baru
    }
    e.preventDefault()
    setSelectedBerita(item)
    setCurrentImgIndex(0)
  }

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
        <Image src="/bg3.jpg" alt="Latar Belakang SMANJU" fill priority className="object-cover object-center opacity-25 fixed" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950" />
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-16 px-4 max-w-7xl mx-auto space-y-12">
        <section className="text-center w-full">
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase">
            Berita <span className="text-blue-400">Terkait</span>
          </h1>
        </section>

        {loading ? (
          <div className="text-center text-slate-500 py-20">Memuat berita...</div>
        ) : (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {berita.map((item) => {
              const previewImg = Array.isArray(item.gambar) && item.gambar.length > 0 ? item.gambar[0] : "/bg3.jpg";
              return (
                <motion.a 
                  key={item.id} 
                  href={item.sumberUrl} 
                  variants={cardVariants} 
                  onClick={(e) => handleCardClick(e, item)} 
                  className="block group h-full cursor-pointer"
                >
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 h-full shadow-xl hover:border-blue-500/50 transition duration-300 flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                      <Image 
                        src={previewImg} 
                        alt={item.judul} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition duration-500" 
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <p className="text-blue-400 text-xs font-semibold">📅 {item.tanggal}</p>
                      <h2 className="text-lg font-bold mt-2 line-clamp-2 group-hover:text-blue-300 transition-colors">{item.judul}</h2>
                      <p className="text-slate-400 text-sm mt-3 line-clamp-3 leading-relaxed">{item.deskripsi}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </div>

      {/* MODAL DETAIL BERITA (POPUP DENGAN SLIDER FOTO) */}
      <AnimatePresence>
        {selectedBerita && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBerita(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* TOMBOL CLOSE */}
              <button
                onClick={() => setSelectedBerita(null)}
                className="absolute top-4 right-4 z-30 bg-black/60 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-white/20"
              >
                ✕
              </button>

              {/* BAGIAN KIRI: SLIDER GAMBAR */}
              <div className="w-full md:w-1/2 bg-black relative flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                {selectedBerita.gambar.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 z-20 bg-black/50 hover:bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center transition border border-white/20"
                    >
                      ❮
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 z-20 bg-black/50 hover:bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center transition border border-white/20"
                    >
                      ❯
                    </button>
                  </>
                )}

                <div className="relative w-full h-[350px] md:h-[500px]">
                  <Image
                    src={selectedBerita.gambar[currentImgIndex] || "/bg3.jpg"}
                    alt={selectedBerita.judul}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Indikator Titik Slider */}
                {selectedBerita.gambar.length > 1 && (
                  <div className="absolute bottom-4 flex justify-center space-x-1.5 z-10 w-full">
                    {selectedBerita.gambar.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentImgIndex ? "w-6 bg-blue-500" : "w-1.5 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* BAGIAN KANAN: DETAIL TEKS BERITA */}
              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                      INFORMASI
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      📅 {selectedBerita.tanggal}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold leading-snug text-white">
                    {selectedBerita.judul}
                  </h2>

                  <div className="w-full h-[1px] bg-white/10" />

                  <div className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {selectedBerita.deskripsi}
                  </div>
                </div>

                {selectedBerita.sumberUrl && selectedBerita.sumberUrl !== "#" && (
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={selectedBerita.sumberUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      🔗 Kunjungi Tautan Sumber &rarr;
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}