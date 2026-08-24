"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "/bg1.jpeg",
  "/sarpras/masjid.jpeg",
  "/bg3.jpeg",
  "/sarpras/8.jpeg"
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-950">
      
      {/* BACKGROUND SLIDER */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "linear" }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Dokumentasi SMAN 7 Balikpapan"
            fill
            priority={currentIndex === 0}
            unoptimized={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover object-center" 
          />
          {/* Overlay Gradasi */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75 z-10" />
        </motion.div>
      </AnimatePresence>

      {/* KONTEN UTAMA */}
      <div className="relative z-20 text-center text-white px-4 flex flex-col items-center max-w-5xl mx-auto w-full">
        {/* LOGO SEKOLAH */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 md:mb-8 bg-black/10 backdrop-blur-sm p-3 rounded-full border border-white/10"
        >
          <Image 
            src="/LOGO_SMAN7.png"
            alt="Logo SMAN 7 Balikpapan" 
            width={128}
            height={128}
            className="w-20 h-20 md:w-28 md:h-28 object-contain"
          />
        </motion.div>

        {/* JUDUL UTAMA - Dibuat 1 Baris dengan whitespace-nowrap dan penyesuaian teks responsif */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 tracking-tight uppercase whitespace-nowrap"
        >
          SMA NEGERI 7{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            BALIKPAPAN
          </span>
        </motion.h1>

        {/* SLOGAN */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2 bg-black/20 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/10 max-w-xl mx-auto"
        >
          <p className="text-blue-400 text-sm sm:text-base md:text-xl font-bold tracking-widest">
            SMANJU
          </p>
          <p className="text-white text-xs sm:text-sm md:text-lg font-medium italic">
            "RELIGIUS - CERDAS - BERKARAKTER"
          </p>
          <div className="w-12 h-[1px] bg-white/20 mx-auto" />
          <p className="text-cyan-400 text-xs sm:text-sm md:text-base font-semibold tracking-wider">
            SEMAKIN MAJU
          </p>
        </motion.div>

        {/* TOMBOL SCROLL DOWN */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-sm text-blue-400"
          >
            ⬇️
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}