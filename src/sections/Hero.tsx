"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const images = [
  "/bg1.jpeg",
  "/background.jpg",
  "/bg2.jpeg",
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
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* BACKGROUND SLIDER DENGAN ANIMASI FADE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[currentIndex]}')` }}
        >
          {/* Overlay Gelap agar teks tetap terbaca */}
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* KONTEN UTAMA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6 flex flex-col items-center"
      >
        {/* LOGO SEKOLAH */}
        <div className="mb-8">
          <img 
            src="/LOGO_SMAN7.png"
            alt="Logo SMAN 7 Balikpapan" 
            className="w-32 h-32 object-contain drop-shadow-2xl"
          />
        </div>
        {/* ... bagian konten utama ... */}
        <h1 
          className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-white"
          style={{
            textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0px 2px 0 #000, 2px 0px 0 #000, 0px -2px 0 #000, -2px 0px 0 #000'
          }}
        >
          SMA NEGERI 7 BALIKPAPAN
        </h1>

        <p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-ligt italic text-white"
          style={{
            textShadow: '1.5px 1.5px 0 #000, -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 0px 1.5px 0 #000, 1.5px 0px 0 #000, 0px -1.5px 0 #000, -1.5px 0px 0 #000'
          }}
        >
          "Mewujudkan Generasi Unggul, Modern, dan Berprestasi"
        </p>

      </motion.div>
    </section>
  )
}