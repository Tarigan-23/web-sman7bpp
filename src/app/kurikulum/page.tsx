"use client"

import React, { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"

export default function KurikulumPage() {
  // State untuk mengontrol zoom popup gambar kalender akademik
  const [isZoomed, setIsZoomed] = useState(false)

  // Konfigurasi animasi staggered kelompok
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay Gelap Latar Belakang */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Konten Utama */}
      <div className="relative z-10 pt-24 md:pt-36 pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-16 md:space-y-24">
        
        <section className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-400/20 uppercase tracking-widest">
              Academic Framework
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mt-3 mb-1 leading-tight">
              Kurikulum & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pembelajaran</span>
            </h1>
            <p className="text-gray-400 text-xs md:text-base font-light max-w-2xl mx-auto leading-relaxed">
              Panduan implementasi Kurikulum Merdeka, struktur KSP, dan program penunjang akademik operasional SMA Negeri 7 Balikpapan.
            </p>
          </motion.div>
        </section>

        {/* ======================================================== */}
        {/* 2. KALENDER PENDIDIKAN & KETERANGAN                      */}
        {/* ======================================================== */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/10"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Kalender Akademik</h2>
            <p className="text-cyan-300 text-xs md:text-sm font-mono mt-1">Tahun Ajaran 2026/2027</p>
            <p className="text-gray-400 text-[10px] block lg:hidden mt-2 font-light animate-pulse">
              💡 Ketuk gambar untuk memperbesar kalender tanggal
            </p>
          </div>

          <div 
            onClick={() => setIsZoomed(true)}
            className="flex justify-center mb-6 bg-slate-950/40 p-2 md:p-4 rounded-xl border border-white/5 overflow-hidden cursor-zoom-in group relative"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
            <img
              src="/KA.png"
              alt="Kalender Akademik SMAN 7 Balikpapan"
              className="rounded-lg shadow-xl max-w-full h-auto object-contain border border-white/10 transition-transform duration-500 group-hover:scale-[1.005]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mt-6">
            <div className="lg:col-span-2 overflow-x-auto rounded-xl border border-white/10 bg-slate-950/20">
              <table className="w-full text-left border-collapse min-w-[300px]">
                <thead>
                  <tr className="bg-blue-500/20 text-blue-300 text-xs font-mono tracking-wider">
                    <th className="p-3 border-b border-white/10">Parameter Akademik</th>
                    <th className="p-3 border-b border-white/10 text-center">Durasi</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 divide-y divide-white/5 text-xs md:text-sm font-light">
                  <tr>
                    <td className="p-3 flex items-center gap-2">📅 <span>HEB Semester Ganjil</span></td>
                    <td className="p-3 text-center font-semibold text-blue-300">93 Hari</td>
                  </tr>
                  <tr>
                    <td className="p-3 flex items-center gap-2">🌱 <span>HEB Semester Genap</span></td>
                    <td className="p-3 text-center font-semibold text-blue-300">88 Hari</td>
                  </tr>
                  <tr className="bg-blue-400/5 font-medium text-white">
                    <td className="p-3 font-bold text-blue-400">📊 <span>TOTAL HBE KUMULATIF</span></td>
                    <td className="p-3 text-center font-black text-blue-400">181 Hari</td>
                  </tr>
                  <tr>
                    <td className="p-3 flex items-center gap-2">🧭 <span>Total Minggu Efektif</span></td>
                    <td className="p-3 text-center font-semibold text-cyan-300">36 Minggu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white">Dokumen Cetak Master</h4>
                <p className="text-gray-400 text-[11px] font-light leading-relaxed mt-1">Unduh berkas PDF kalender akademik pendidikan legalitas resmi dinas untuk keperluan arsip cetak fisik.</p>
              </div>
              <a 
                href="/download/KalenderAkademik.pdf"
                download
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs"
              >
                <span>📥</span> Download Kalender (PDF)
              </a>
            </div>
          </div>
        </motion.section>

        {/* ======================================================== */}
        {/* 3. KSP (KURIKULUM SATUAN PENDIDIKAN)                     */}
        {/* ======================================================== */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-gradient-to-r from-slate-900/60 to-slate-900/30 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/10"
        >
          <div className="max-w-3xl space-y-4">
            
            <h2 className="text-2xl md:text-3xl font-black text-white">Kurikulum Satuan Pendidikan (KSP)</h2>
            <p className="text-gray-300 text-xs md:text-base leading-relaxed font-light text-justify">
              KSP SMA Negeri 7 Balikpapan disusun sebagai pedoman operasional kontekstual sekolah yang menyelaraskan karakteristik lingkungan lokal Kalimantan Timur dengan visi misi kemajuan nasional. Dokumen ini memuat seluruh rencana strategis proses pengorganisasian pembelajaran, pemetaan muatan lokal, regulasi beban belajar siswa, hingga strategi peningkatan mutu pendidik secara akuntabel.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-md border border-white/5">📋 Dokumen KSP Aktif</span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-md border border-white/5">⚙️ Regulasi Kurikulum Merdeka</span>
            </div>
          </div>
        </motion.section>

        {/* ======================================================== */}
        {/* 4, 5, 6. STRUKTUR 3 PILAR UTAMA (GRID ANIMATION)         */}
        {/* ======================================================== */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Struktur Pengorganisasian Belajar</h2>
            <p className="text-gray-400 text-xs font-mono mt-1">Implementasi Tiga Komponen Kurikulum</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* 4. INTRAKURIKULER */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="text-3xl bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center border border-blue-500/20 text-blue-400 font-bold">01</div>
                <h3 className="text-lg md:text-xl font-bold text-white">Intrakurikuler</h3>
                <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed text-justify">
                  Pembelajaran reguler tatap muka yang berfokus pada kedalaman materi esensial mata pelajaran. Menerapkan sistem berdiferensiasi di mana peserta didik kelas XI dan XII dapat memilih mata pelajaran pilihan sesuai arah profesi, minat bakat, dan rencana kelanjutan studi tinggi mereka.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-blue-300">
                🎯 Target: Capaian Pembelajaran Akademik (CP)
              </div>
            </motion.div>

            {/* 5. KOKURIKULER */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="text-3xl bg-cyan-500/10 w-12 h-12 rounded-xl flex items-center justify-center border border-cyan-500/20 text-cyan-400 font-bold">02</div>
                <h3 className="text-lg md:text-xl font-bold text-white">Kokurikuler</h3>
                <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed text-justify">
                  Wadah khusus lintas mata pelajaran yang dirancang untuk memperkuat <strong className="text-cyan-300 font-normal">kompetensi, karakter, dan keterampilan peserta didik melalui berbagai kegiatan pembelajaran kontekstual</strong>. Kegiatan kokurikuler dilaksanakan secara terintegrasi dengan pembelajaran di kelas melalui tema-tema yang relevan dengan kebutuhan peserta didik, lingkungan, dan perkembangan zaman guna membentuk karakter, kreativitas, kemampuan berpikir kritis, kolaborasi, serta kepemimpinan siswa.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-cyan-300">
                🌱 Target: Penguatan Karakter & Soft Skills
              </div>
            </motion.div>

            {/* 6. EKSTRAKURIKULER */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="text-3xl bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center border border-purple-500/20 text-purple-400 font-bold">03</div>
                <h3 className="text-lg md:text-xl font-bold text-white">Ekstrakurikuler</h3>
                <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed text-justify">
                  Kegiatan pengembangan diri non-akademik di luar jam belajar formal operasional sekolah. Berfungsi menyalurkan hobi, meningkatkan kebugaran fisik, mengasah potensi bakat seni, serta pembiasaan keorganisasian melalui berbagai klub peminatan resmi di bawah koordinasi sekolah.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-purple-300">
                🚀 Target: Penyaluran Bakat & Prestasi Non-Akademik
              </div>
            </motion.div>
          </motion.div>
        </section>

      </div>

      {/* ======================================================== */}
      {/* FULLSCREEN LIGHTBOX ZOOM OVERLAY                        */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 text-white bg-white/10 p-2.5 rounded-full hover:bg-white/20 border border-white/10 text-xs font-mono font-bold transition-all tracking-wider">
              ✕ CLOSE MODAL
            </button>
            <motion.img
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              src="/KA.png"
              alt="Kalender Akademik Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}