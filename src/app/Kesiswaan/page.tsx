"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function KesiswaanPage() {
  // Menu Program Kesiswaan lengkap dengan tambahan Daftar Siswa & Daftar Kelas
  const menuKesiswaan = [
    { id: "ekskul", nama: "🎪 Ekstrakurikuler", href: "/ekskul" },
    { id: "osis", nama: "👥 Organisasi (OSIS)", href: "/osis" },
    { id: "prestasi", nama: "🏆 Prestasi Siswa", href: "/prestasi" },
    { id: "siswa", nama: "👨‍🎓 Daftar Siswa", href: "/siswa" }, // Link aktif ke halaman siswa Anda
    { id: "kelas", nama: "🏫 Daftar Kelas", href: "/kelas" }, // Link aktif ke halaman kelas Anda
  ]

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
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
              Membentuk kepribadian tangguh, mengasah potensi kepemimpinan, dan mewadahi kreativitas siswa SMAN 7 Balikpapan.
            </p>
          </motion.div>

          {/* Card Visi Misi Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-10 border border-white/10 shadow-2xl"
          >
            {/* Visi */}
            <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/10 pb-5 lg:pb-0 lg:pr-6">
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span>🎯</span> Visi Kesiswaan
              </h2>
              <p className="text-gray-200 leading-relaxed font-light text-xs md:text-sm text-justify">
                Terwujudnya generasi muda SMAN 7 Balikpapan yang berakhlak mulia, berkarakter kuat, mandiri, unggul dalam prestasi non-akademik, serta adaptif terhadap perkembangan teknologi global.
              </p>
            </div>

            {/* Misi */}
            <div className="lg:col-span-2 lg:pl-2">
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                <span>🚀</span> Misi Kesiswaan
              </h2>
              <ul className="space-y-2.5 text-gray-200 text-xs md:text-sm">
                {[
                  "Menyelenggarakan kegiatan keagamaan guna memperkokoh keimanan siswa.",
                  "Mengoptimalkan peran Ekstrakurikuler sebagai wadah penyaluran minat dan bakat.",
                  "Membentuk kepemimpinan siswa yang berintegritas melalui pembinaan OSIS & MPK.",
                  "Mendorong partisipasi aktif siswa dalam berbagai kompetisi non-akademik."
                ].map((misi, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-[10px] font-bold text-blue-300 border border-blue-400/20">
                      {idx + 1}
                    </span>
                    <span className="font-light leading-relaxed">{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
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