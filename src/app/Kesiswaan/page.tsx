"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function KesiswaanPage() {
  // Menu Program Kesiswaan lengkap dengan tambahan Daftar Siswa & Daftar Kelas
  const menuKesiswaan = [
    { id: "ekskul", nama: "🎪 Ekstrakurikuler", href: "/ekskul" },
    { id: "Osis", nama: "👥 Organisasi (OSIS)", href: "/Osis" },
    { id: "Mpk", nama: "👥 Organisasi (MPK)", href: "/Mpk" },
    { id: "prestasi", nama: "🏆 Prestasi Siswa", href: "/prestasi" },
    { id: "siswa", nama: "👨‍🎓 Daftar Siswa", href: "/siswa" }, 
    { id: "kelas", nama: "🏫 Daftar Kelas", href: "/kelas" }, 
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden select-none">
      
      {/* ================= BACKGROUND ORNAMEN SERAGAM KONSISTEN ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg3.jpg" 
          alt="Latar Belakang SMANJU"
          fill
          priority
          className="object-cover object-center opacity-30 fixed" // Kecerahan disesuaikan agar tetap pekat dan nyaman
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-black/70 to-slate-950" />
        
        {/* Efek Lampu Sorot Gradasi Sinematik (Glow Ornamen) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-16">
        
        {/* HERO HEADER - SUDAH DISERAGAMKAN ANIMASI & STRUKTUR JUDULNYA */}
        <section className="text-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-400/20 uppercase tracking-widest">
              Manajemen Sekolah
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mt-3 mb-1 leading-tight uppercase">
              Bidang <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Kesiswaan</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-2">
              Membentuk kepribadian tangguh, mengasah potensi kepemimpinan, dan mewadahi kreativitas siswa SMA Negeri 7 Balikpapan.
            </p>
          </motion.div>
        </section>

        {/* TOMBOL NAVIGASI MENU (Pindah Halaman) */}
        <div className="w-full flex flex-col items-center border-t border-white/10 pt-12">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-6">
            Jelajahi Program Kesiswaan
          </p>
          
          {/* Slider otomatis aktif di HP jika menu melebihi lebar layar */}
          <div className="w-full overflow-x-auto no-scrollbar flex justify-start md:justify-center px-2">
            <div className="flex bg-slate-900/50 p-2 rounded-xl md:rounded-2xl border border-white/5 gap-2 min-w-max backdrop-blur-md shadow-xl">
              {menuKesiswaan.map((item) => (
                <Link key={item.id} href={item.href} passHref>
                  <button className="px-5 md:px-7 py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold text-slate-300 bg-white/5 hover:bg-blue-600 hover:text-white border border-white/5 shadow-md transition-all duration-300 whitespace-nowrap active:scale-95">
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