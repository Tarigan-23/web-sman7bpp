"use client"

import React, { useState, useEffect } from "react"
// Mengimpor motion dan Variants dari framer-motion untuk animasi modern ala KurikulumPage
import { motion, Variants } from "framer-motion"

export default function SPMBPage() {
  // 1. Konfigurasi animasi kelompok (Staggered) agar kartu statistik & alur muncul berurutan
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Memberikan jeda antar kartu saat pemicu aktif
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  }

  // 2. State Timer Countdown Stabil (Target 2 Juni 2026 berdasarkan gambar mockup Anda)
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 })

  useEffect(() => {
    const targetDate = new Date("2026-06-22T23:59:59")
    const targetUnix = Math.floor(targetDate.getTime() / 1000)

    const calculateTime = () => {
      const now = Math.floor(Date.now() / 1000)
      const diff = targetUnix - now
      
      if (diff <= 0) {
        setTimeLeft({ hari: 0, jam: 0, menit: 0, detik: 0 })
        return
      }

      setTimeLeft({
        hari: Math.floor(diff / 86400),
        jam: Math.floor((diff % 86400) / 3600),
        menit: Math.floor((diff % 3600) / 60),
        detik: diff % 60,
      })
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/bg3.jpg')",
      }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto block">
        
        {/* ================= HERO SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Sisi Kiri: Judul & Keterangan Utama */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm font-semibold text-blue-400 backdrop-blur-sm"
            >
              📢 Pendaftaran Dibuka - TP 2026/2027
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-white tracking-wide drop-shadow-lg leading-tight"
            >
              Sistem Penerimaan <br />
              <span className="text-blue-400">Murid Baru (SPMB)</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-200 text-lg font-light leading-relaxed text-justify"
            >
              Selamat datang di gerbang pendaftaran resmi SMA Negeri 7 Balikpapan. Proses pendaftaran dilakukan secara online, transparan, dan akuntabel melalui sistem integrasi SPMB Provinsi Kalimantan Timur.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#alur-pendaftaran"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition duration-300"
              >
                Lihat Alur Pendaftaran
              </a>
              <a
                href="https://spmb-balikpapan.kaltimprov.go.id/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-6 rounded-2xl backdrop-blur transition duration-300 flex items-center gap-2"
              >
                ✨ Portal SPMB
              </a>
            </motion.div>
          </div>

          {/* Sisi Kanan: Card Hitung Mundur (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              🔥 Hitung Mundur Pendaftaran Tahap I
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Pendaftaran Tahap I akan dibuka pada <span className="text-blue-400 font-semibold">22 - 24 Juni 2026</span>.
            </p>

            {/* Grid Angka Countdown */}
            <div className="grid grid-cols-4 gap-3 text-center">
              {[
                { label: "Hari", value: timeLeft.hari },
                { label: "Jam", value: timeLeft.jam },
                { label: "Menit", value: timeLeft.menit },
                { label: "Detik", value: timeLeft.detik },
              ].map((time, idx) => (
                <div key={idx} className="bg-black/20 border border-white/5 rounded-2xl p-3 backdrop-blur-sm">
                  <span className="block text-3xl font-bold text-blue-400 font-mono tabular-nums">
                    {String(time.value).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-gray-300 uppercase tracking-wider">{time.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= 2. CORE STATISTICS SECTION ================= */}
        {/* Menggunakan Grid murni, otomatis turun ke bawah tanpa absolute positioning yang merusak layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {[
            { tag: "👥 DAYA TAMPUNG", num: "440", desc: "Siswa baru TP 2026/2027" },
            { tag: "🗺️ JALUR MASUK", num: "5", desc: "Pilihan jalur pendaftaran" },
            { tag: "🏅 AKREDITASI", num: "A", desc: "Kategori Sekolah Unggulan" },
            { tag: "📍 NPSN:", num: "30401504", desc: "BALIKPAPAN TIMUR - LAMARU JL. MULAWARMAN" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white/15 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-white/10 transition-colors duration-300 hover:border-white/20"
            >
              <span className="text-xs font-bold text-blue-400 block tracking-wider mb-2">{stat.tag}</span>
              <span className="text-4xl font-black text-white block mb-1 drop-shadow-md">{stat.num}</span>
              <span className="text-sm text-gray-300 font-light">{stat.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= 3. STEP BY STEP ALUR PENDAFTARAN ================= */}
        <div id="alur-pendaftaran" className="mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Step By Step</span>
            <h2 className="text-4xl font-bold text-white mt-2">Alur Pendaftaran</h2>
            <p className="text-gray-300 mt-3 font-light max-w-xl mx-auto">
              Ikuti 4 langkah berikut dengan teliti agar proses pendaftaran Anda berjalan lancar.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { step: "Langkah 01", title: "Pendaftaran Online", icon: "📝", desc: "Buat akun & isi data diri secara lengkap di portal pendaftaran SPMB." },
              { step: "Langkah 02", title: "Upload Berkas", icon: "📤", desc: "Unggah hasil scan rapor, akte kelahiran, KK, dan dokumen pendukung." },
              { step: "Langkah 03", title: "Verifikasi & Seleksi", icon: "🔍", desc: "Panitia memverifikasi keabsahan berkas dan melakukan proses seleksi sistem jalur." },
              { step: "Langkah 04", title: "Pengumuman", icon: "📢", desc: "Hasil seleksi diumumkan melalui website resmi ini, dilanjutkan daftar ulang." },
            ].map((alur, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white/15 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-white/10 transition-colors duration-300 hover:border-white/20 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-4 bg-blue-500/10 border border-blue-400/20 w-12 h-12 rounded-2xl flex items-center justify-center">
                    {alur.icon}
                  </div>
                  <span className="text-xs font-bold text-blue-400 block tracking-widest uppercase mb-1">{alur.step}</span>
                  <h4 className="text-xl font-bold text-white mb-3">{alur.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">{alur.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  )
}