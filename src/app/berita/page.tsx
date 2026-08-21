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

  // ... (containerVariants, cardVariants, handleCardClick, nextImage, prevImage tetap SAMA)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const handleCardClick = (e: React.MouseEvent, item: BeritaItem) => {
    if (item.sumberUrl && item.sumberUrl.startsWith("http") && !item.sumberUrl.includes("sman7-bpp.sch.id/galeri")) {
      return
    }
    e.preventDefault()
    setSelectedBerita(item)
    setCurrentImgIndex(0)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedBerita) setCurrentImgIndex((prev) => (prev + 1) % selectedBerita.gambar.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedBerita) setCurrentImgIndex((prev) => (prev - 1 + selectedBerita.gambar.length) % selectedBerita.gambar.length)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden select-none">
      {/* Background Ornamen tetap sama */}
      <div className="absolute inset-0 z-0">
        <Image src="/bg3.jpg" alt="Latar Belakang SMANJU" fill priority className="object-cover object-center opacity-25 fixed" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950" />
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-16 px-4 max-w-7xl mx-auto space-y-12">
        <section className="text-center w-full">
          {/* Header tetap sama */}
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase">Berita <span className="text-blue-400">Terkait</span></h1>
        </section>

        {loading ? (
          <div className="text-center text-slate-500">Memuat berita...</div>
        ) : (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {berita.map((item) => (
              // Kartu Berita (seperti kode awalmu)
              <motion.a key={item.id} href={item.sumberUrl} variants={cardVariants} onClick={(e) => handleCardClick(e, item)} className="block group h-full">
                {/* ... isi kartu sama persis ... */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 h-full shadow-xl">
                  <img src={item.gambar[0]} alt={item.judul} className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <p className="text-blue-400 text-xs font-semibold">📅 {item.tanggal}</p>
                    <h2 className="text-lg font-bold mt-2">{item.judul}</h2>
                    <p className="text-slate-400 text-sm mt-3 line-clamp-3">{item.deskripsi}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
      {/* ... (Modal Detail tetap sama) ... */}
    </div>
  )
}