"use client"

import React from "react"
// Mengimpor motion dan Variants untuk animasi masuk yang mulus
import { motion, Variants } from "framer-motion"

export default function GaleriPage() {
  const galeri = [
    {
      gambar: "/bg1.jpeg",
      judul: "Upacara Bendera",
    },
    {
      gambar: "/bg2.jpeg",
      judul: "Pramuka",
    },
    {
      gambar: "/galeri3.jpg",
      judul: "Class Meeting",
    },
    {
      gambar: "/galeri4.jpg",
      judul: "Lomba Akademik",
    },
    {
      gambar: "/galeri5.jpg",
      judul: "Study Tour",
    },
    {
      gambar: "/galeri6.jpg",
      judul: "Kegiatan OSIS",
    },
    {
      gambar: "/galeri7.jpg",
      judul: "Hari Guru",
    },
    {
      gambar: "/galeri8.jpg",
      judul: "Ekstrakurikuler",
    },
  ]

  // Konfigurasi animasi masuk (Staggered)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 // Memberikan jeda 0.1 detik antar item galeri
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
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
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto block">

        {/* Judul Halaman */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold text-blue-400 drop-shadow-lg">
            Galeri Sekolah
          </h1>
          <p className="text-gray-200 text-xl mt-4 font-light tracking-wide">
            SMA Negeri 7 Balikpapan
          </p>
        </motion.div>

        {/* Grid Galeri */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {galeri.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }} // Gambar sedikit membesar saat kursor di atasnya (efek interaktif ringan)
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl h-full transition duration-300 group-hover:border-white/20">
                
                {/* Bagian Gambar */}
                <div className="overflow-hidden aspect-video w-full bg-slate-900/50 flex items-center justify-center">
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Keterangan Judul di Bawahnya */}
                <div className="p-4 bg-black/20">
                  <h2 className="text-white font-medium text-base text-center group-hover:text-blue-300 transition duration-200">
                    {item.judul}
                  </h2>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}