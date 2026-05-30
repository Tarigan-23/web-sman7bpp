"use client"

import React from "react"
import { motion } from "framer-motion"
// 1. Import data berita pusat agar isinya selalu selaras/sama
import beritaData from "../data/berita" 

export default function BeritaHome() {
  // Mengambil 3 berita terbaru saja untuk ditampilkan di beranda
  const beritaTerbaru = beritaData.slice(0, 3);

  return (
    <section className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Judul Bagian */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-400">
            Berita Terbaru
          </h2>
          <p className="mt-3 text-gray-400">
            Ikuti terus perkembangan aktivitas dan prestasi di SMA Negeri 7 Balikpapan
          </p>
        </div>

        {/* Grid Kartu Berita */}
        <div className="grid md:grid-cols-3 gap-8">
          {beritaTerbaru.map((berita, index) => (
            <motion.div
              key={berita.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-blue-500/50 transition duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={berita.gambar} 
                  alt={berita.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-blue-400 font-medium">{berita.tanggal}</span>
                
                {/* Judul bisa diklik langsung menuju link */}
                <a href={berita.sumberUrl} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-bold mt-2 line-clamp-2 hover:text-blue-300 cursor-pointer">
                    {berita.judul}
                  </h3>
                </a>

                {/* Deskripsi/Ringkasan berita */}
                <p className="text-gray-400 text-sm mt-3 line-clamp-3">
                  {berita.deskripsi} {/* Menyelaraskan properti dari 'ringkasan' ke 'deskripsi' */}
                </p>
                
                {/* 2. Mengubah button menjadi tag tautan (anchor tag) agar berfungsi */}
                <div className="mt-5 pt-4 border-t border-slate-700/50">
                  <a 
                    href={berita.sumberUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
                  >
                    Baca Selengkapnya &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}