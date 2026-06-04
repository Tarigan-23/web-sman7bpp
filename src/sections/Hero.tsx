"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image" // Impor Image Next.js untuk optimasi performa

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
      
      {/* BACKGROUND SLIDER DENGAN ANIMASI FADE + NEXT.JS IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* Migrasi ke next/image agar loading gambar di HP jauh lebih cepat dan ringan */}
          <Image
            src={images[currentIndex]}
            alt="Suasana SMA Negeri 7 Balikpapan"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Overlay Gelap: Diturunkan sedikit opacity-nya (bg-black/50) agar teks bershadow Anda makin kontras */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </motion.div>
      </AnimatePresence>

      {/* KONTEN UTAMA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center text-white px-5 flex flex-col items-center max-w-4xl mx-auto"
      >
        {/* LOGO SEKOLAH: Ukuran adaptif (w-20 di HP, w-32 di Desktop) */}
        <div className="mb-6 md:mb-8">
          <Image 
            src="/LOGO_SMAN7.png"
            alt="Logo SMAN 7 Balikpapan" 
            width={128}
            height={128}
            className="w-20 h-20 md:w-32 md:h-32 object-contain drop-shadow-2xl"
          />
        </div>

        {/* JUDUL: Diubah menjadi text-3xl di HP, md:text-6xl, lg:text-7xl di Desktop */}
        <h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight text-white leading-tight md:leading-none"
          style={{
            textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0px 2px 0 #000, 2px 0px 0 #000, 0px -2px 0 #000, -2px 0px 0 #000'
          }}
        >
          SMA NEGERI 7 <br className="block md:hidden" /> BALIKPAPAN
        </h1>

        {/* TEKS VISI/MISI: Diubah menjadi text-sm/base di HP, md:text-xl/2xl di Desktop */}
        <p 
          className="text-sm sm:text-base md:text-xl lg:text-2xl max-w-2xl mx-auto font-light italic text-gray-100 leading-relaxed px-2 md:px-0"
          style={{
            textShadow: '1.5px 1.5px 0 #000, -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 0px 1.5px 0 #000, 1.5px 0px 0 #000, 0px -1.5px 0 #000, -1.5px 0px 0 #000'
          }}
        >
          SMANJU
        "Religius - Cerdas - Berprestasi"
          SMANJU
        "Semakin Maju"
        </p>

      </motion.div>
    </section>
  )
}