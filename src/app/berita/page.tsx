"use client"

import React from "react"
// 1. Mengimpor motion dan Variants dari framer-motion
import { motion, Variants } from "framer-motion"
import berita from "../../data/berita"

export default function BeritaPage() {
  // 2. Mendefinisikan cetakan animasi kelompok (Stagger)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Memberikan jeda 0.15 detik antar kartu berita
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
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

        {/* Judul Halaman (Animasi Fade In Turun) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold text-blue-400 drop-shadow-lg">
            Berita Terkait
          </h1>
          <p className="text-gray-200 text-xl mt-4 font-light tracking-wide">
            SMA Negeri 7 Balikpapan
          </p>
        </motion.div>

        {/* Grid Pembungkus Kartu Berita (Ditambahkan Kontrol Animasi Utama) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {berita.map((item) => (
            /* 3. Mengubah tag <a> menjadi <motion.a> agar kartu bisa bergerak */
            <motion.a
              key={item.id}
              href={item.sumberUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants} // Mengikuti ritme stagger pembungkusnya
              className="block group"
            >
              {/* Efek Hover Skala Dipertahankan Menggunakan Tailwind (group-hover:scale-105) */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 group-hover:scale-105 transition duration-300 cursor-pointer h-full shadow-xl">

                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full h-60 object-cover border-b border-white/5"
                />

                <div className="p-6">
                  <p className="text-blue-300 text-sm font-medium">
                    {item.tanggal}
                  </p>

                  <h2 className="text-2xl font-bold text-white mt-3 group-hover:text-blue-400 transition duration-200">
                    {item.judul}
                  </h2>

                  <p className="text-gray-300 mt-4 line-clamp-3 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>

              </div>
            </motion.a>
          ))}

        </motion.div>
      </div>
    </div>
  )
}