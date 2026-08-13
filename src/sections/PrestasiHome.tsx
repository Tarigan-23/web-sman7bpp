"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import daftarPrestasi from "../data/prestasi"

export default function PrestasiHome() {
  // Mengambil 3 prestasi terbaru (3 teratas dari data)
  const prestasiTerbaru = daftarPrestasi.slice(0, 3)

  const getBadgeStyle = (tingkat: string) => {
    switch (tingkat) {
      case "Nasional":
        return "bg-amber-500/20 text-amber-300 border-amber-500/40"
      case "Provinsi":
        return "bg-blue-500/20 text-blue-300 border-blue-400/40"
      default:
        return "bg-emerald-500/20 text-emerald-300 border-emerald-400/40"
    }
  }

  return (
    <section className="bg-slate-900 text-white py-12 md:py-20 px-4 md:px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Judul Bagian */}
        <div className="text-center mb-10 md:mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            🏆 Hall of Fame
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-amber-400 mt-2">
            Prestasi Terbaru Siswa
          </h2>
          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Catatan kebanggaan dan pencapaian luar biasa dari putra-putri SMA Negeri 7 Balikpapan
          </p>
        </div>

        {/* GRID RESPONSIF: 1 kolom (HP), 2 kolom (tablet), 3 kolom (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {prestasiTerbaru.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-amber-500/50 transition duration-300 group flex flex-col h-full"
            >
              {/* Wadah Gambar Prestasi */}
              <div className="h-48 overflow-hidden relative w-full bg-neutral-900">
                <Image
                  src={item.gambar}
                  alt={item.judul}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                
                {/* Badge Tingkat (Nasional/Provinsi/Kota) & Tahun */}
                <span className={`absolute top-3 left-3 border px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md ${getBadgeStyle(item.tingkat)}`}>
                  🥇 {item.tingkat}
                </span>
                <span className="absolute bottom-2.5 right-3 bg-black/60 backdrop-blur-sm text-gray-300 text-[10px] px-2 py-0.5 rounded font-mono font-semibold">
                  {item.tahun}
                </span>
              </div>

              {/* Konten Teks Kartu */}
              <div className="p-5 md:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block">
                    {item.kategori}
                  </span>

                  <h3 className="text-lg md:text-xl font-bold text-white mt-1.5 line-clamp-2 leading-snug group-hover:text-amber-300 transition-colors">
                    {item.judul}
                  </h3>

                  <p className="text-gray-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700/50 flex items-center justify-between">
                  <span className="text-xs text-gray-300 italic truncate max-w-[80%]">
                    Oleh: {item.peraih}
                  </span>
                  <span className="text-amber-400 text-sm">🏆</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol Lihat Semua Prestasi */}
        <div className="mt-10 md:mt-12 text-center">
          <Link
            href="/prestasi"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition duration-300 shadow-md text-sm md:text-base"
          >
            Lihat Semua Prestasi &rarr;
          </Link>
        </div>

      </div>
    </section>
  )
}