"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "/bg1.jpeg",
  "/masjid.jpeg",
  "/bg3.jpeg",
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Otomatis ganti background setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-950">
      
      {/* BACKGROUND SLIDER 
        Catatan: mode="wait" DIHAPUS agar gambar baru menimpa gambar lama secara cross-fade (tidak berkedip hitam)
      */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt="Suasana SMAN 7 Balikpapan"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Overlay gradasi ganda agar teks putih super kontras tanpa perlu text-shadow CSS yang berat */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
        </motion.div>
      </AnimatePresence>

      {/* KONTEN UTAMA */}
      <div className="relative z-20 text-center text-white px-4 flex flex-col items-center max-w-5xl mx-auto w-full">
        
        {/* LOGO SEKOLAH */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 md:mb-8 bg-black/10 backdrop-blur-sm p-3 rounded-full border border-white/10 shadow-2xl"
        >
          <Image 
            src="/LOGO_SMAN7.png"
            alt="Logo SMAN 7 Balikpapan" 
            width={128}
            height={128}
            className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          />
        </motion.div>

        {/* JUDUL UTAMA */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 tracking-tight leading-tight uppercase select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          SMA NEGERI 7 BALIKPAPAN<br className="block sm:hidden" />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent block sm:inline">
            
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-1.5 md:space-y-2 bg-black/10 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/10 max-w-xl mx-auto shadow-2xl"
        >
          {/* Baris 1: SMANJU */}
          <p className="text-white text-sm sm:text-base md:text-xl font-medium tracking-wide drop-shadow-sm">
            SMANJU
          </p>
          
          {/* Baris 2: Slogan Utama */}
          <p className="text-blue-500 text-sm sm:text-base md:text-xl font-medium tracking-wide drop-shadow-sm">
            "RELIGIUS-CERDAS-BERKARAKTER"
          </p>
          {/* Baris 3: Slogan Utama */}
          <p className="text-white text-sm sm:text-base md:text-xl font-medium tracking-wide drop-shadow-sm">
            SMANJU
          </p>
          {/* Baris 4: Slogan Utama */}
          <p className="text-blue-500 text-sm sm:text-base md:text-xl font-medium tracking-wide drop-shadow-sm">
            "SEMAKIN MAJU"
          </p>

        </motion.div>

        {/* TOMBOL SCROLL DOWN */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-[-18vh] sm:bottom-[-22vh] md:bottom-[-12vh] flex flex-col items-center gap-2"
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