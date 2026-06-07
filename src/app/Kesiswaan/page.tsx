"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function KesiswaanPage() {
  // Menu Program Kesiswaan lengkap dengan tambahan Daftar Siswa & Daftar Kelas
  const menuKesiswaan = [
    { id: "ekskul", nama: "🎪 Ekstrakurikuler", href: "/ekskul" },
    { id: "Osis", nama: "👥 Organisasi (OSIS)", href: "/Osis" },
    { id: "prestasi", nama: "🏆 Prestasi Siswa", href: "/prestasi" },
    { id: "siswa", nama: "👨‍🎓 Daftar Siswa", href: "/siswa" }, // Link aktif ke halaman siswa Anda
    { id: "kelas", nama: "🏫 Daftar Kelas", href: "/kelas" }, // Link aktif ke halaman kelas Anda
  ]

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{ backgroundImage: "url('/bg3.jpeg')" }}
    >
      {/* Overlay Backdrop */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 pt-28 md:pt-36 pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-16">
        
        {/* HERO HEADER */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-400/20 uppercase tracking-wider">
              Manajemen Sekolah
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-wide mt-3 mb-2">
              Bidang <span className="text-blue-400">Kesiswaan</span>
            </h1>
            <p className="text-gray-300 text-xs md:text-base max-w-2xl mx-auto leading-relaxed px-2">
              Membentuk kepribadian tangguh, mengasah potensi kepemimpinan, dan mewadahi kreativitas siswa SMA Negeri 7 Balikpapan.
            </p>
          </motion.div>

        </section>

        {/* TOMBOL NAVIGASI MENU (Pindah Halaman) */}
        <div className="w-full flex flex-col items-center border-t border-white/10 pt-12">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">Jelajahi Program Kesiswaan</p>
          
          {/* Slider otomatis aktif di HP jika menu melebihi lebar layar */}
          <div className="w-full overflow-x-auto no-scrollbar flex justify-start md:justify-center px-2">
            <div className="flex bg-slate-900/50 p-2 rounded-xl md:rounded-2xl border border-white/5 gap-2 min-w-max">
              {menuKesiswaan.map((item) => (
                <Link key={item.id} href={item.href}>
                  <button className="px-5 md:px-7 py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold text-gray-300 bg-white/5 hover:bg-blue-500 hover:text-white border border-white/5 shadow-md transition-all duration-300 whitespace-nowrap active:scale-95">
                    {item.nama}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}