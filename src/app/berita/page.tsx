"use client"

import React from "react"
// Mengimpor motion dan Variants dari framer-motion
import { motion, Variants } from "framer-motion"
import berita from "../../data/berita"

export default function BeritaPage() {
  // Mendefinisikan cetakan animasi kelompok (Stagger)
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
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto block">

        {/* Judul Halaman - Responsif (text-3xl di HP, text-6xl di Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-blue-400 drop-shadow-lg tracking-tight">
            Berita Terkait
          </h1>
          <p className="text-gray-200 text-sm md:text-xl mt-2 md:mt-4 font-light tracking-wide">
            SMA Negeri 7 Balikpapan
          </p>
        </motion.div>

        {/* Pembungkus Kartu Berita */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch" 
        >

          {berita.map((item) => (
            <motion.a
              key={item.id}
              href={item.sumberUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="block group h-full"
            >
              {/* Kartu Utama - Hover Scale dinonaktifkan di mobile agar tidak mengganggu touch screen */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 sm:group-hover:scale-[1.03] transition duration-300 cursor-pointer h-full shadow-xl flex flex-col">
                
                {/* 1. UKURAN GAMBAR - Responsif (h-48 di HP, h-56 di Desktop) */}
                <div className="w-full h-48 md:h-56 overflow-hidden relative border-b border-white/5 flex-shrink-0">
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="w-full h-full object-cover transition duration-300 sm:group-hover:scale-110"
                  />
                </div>

                {/* 2. UKURAN KONTEN TEXT - Menjadi fleksibel di HP (h-auto) dan dikunci di desktop (md:h-72) */}
                <div className="p-5 md:p-6 flex flex-col justify-between flex-grow h-auto md:h-72">
                  <div>
                    <p className="text-blue-300 text-xs md:text-sm font-medium">
                      {item.tanggal}
                    </p>

                    {/* Judul - Responsif font size */}
                    <h2 className="text-lg md:text-xl font-bold text-white mt-1 md:mt-2 line-clamp-2 group-hover:text-blue-400 transition duration-200 min-h-[2.8rem] md:min-h-[3.5rem] leading-snug">
                      {item.judul}
                    </h2>

                    {/* Deskripsi - Menggunakan line-clamp agar rapi tanpa scroll internal di HP */}
                    <div className="mt-2 md:mt-3 pr-1 md:h-32 md:overflow-y-auto md:scrollbar-thin md:scrollbar-thumb-white/20">
                      <p className="text-gray-300 leading-relaxed font-light text-xs md:text-sm text-justify line-clamp-3 md:line-clamp-none">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                  
                  {/* Penanda link khusus mobile agar user tahu kartu bisa diklik */}
                  <div className="mt-4 flex items-center justify-end md:hidden text-xs text-blue-300 font-medium">
                    Baca Selengkapnya →
                  </div>
                </div>

              </div>
            </motion.a>
          ))}

        </motion.div>
      </div>
    </div>
  )
}