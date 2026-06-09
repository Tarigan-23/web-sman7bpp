"use client"

import React, { useState, useEffect } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// KUMPULAN GAMBAR POSTER / BROSUR SPMB (Bisa kamu tambah sesukamu)
const daftarPoster = [
  { id: 1, src: "/spandukspmb2026.png", alt: "Spanduk Utama SPMB SMANJU 2026" },
  { id: 2, src: "/SPMB_25.cdr.png", alt: "Informasi Persyaratan & Jalur Masuk" }, // Ganti dengan aset brosurmu jika ada
]

export default function SPMBPage() {
  // 1. Konfigurasi animasi kelompok (Staggered) ala KurikulumPage
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  // State untuk kontrol Slider Brosur/Poster
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === daftarPoster.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? daftarPoster.length - 1 : prev - 1))
  }

  // 2. State Timer Countdown Stabil
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
    <div className="min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden select-none">
      
    
<div className="absolute inset-0 z-0 w-full h-full">
  <Image
    src="/bg3.jpeg"
    alt="Latar Belakang SMAN 7 Balikpapan"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center opacity-45 pointer-events-none" />
  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950" />
  
  {/* Efek Lampu Sorot Gradasi Glow Sinematik */}
  <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
</div>

      {/* Content Container */}
      <div className="relative z-10 pt-24 md:pt-32 px-4 max-w-7xl mx-auto space-y-24">
        

        {/* ================= HERO SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sisi Kiri: Judul & Keterangan Utama */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-blue-400 backdrop-blur-sm uppercase tracking-wider"
            >
              📢 Pendaftaran Dibuka - TP 2026/2027
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight text-white"
            >
              Sistem Penerimaan <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-400 bg-clip-text text-transparent">Murid Baru (SPMB)</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-sm md:text-base font-light leading-relaxed text-justify"
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
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 px-6 rounded-2xl shadow-lg transition duration-300"
              >
                Lihat Alur Pendaftaran
              </a>
              <a
                href="https://spmb-balikpapan.kaltimprov.go.id/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-bold py-3 px-6 rounded-2xl backdrop-blur transition duration-300 flex items-center gap-2"
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
            className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8 border border-white/10"
          >
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              🔥 Hitung Mundur Pendaftaran Tahap I
            </h3>
            <p className="text-slate-400 text-xs mb-6">
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
                <div key={idx} className="bg-black/40 border border-white/5 rounded-2xl p-3 backdrop-blur-sm">
                  <span className="block text-2xl md:text-3xl font-black text-blue-400 font-mono tabular-nums">
                    {String(time.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">{time.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= CORE STATISTICS SECTION ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { tag: "👥 DAYA TAMPUNG", num: "440", desc: "Siswa baru TP 2026/2027" },
            { tag: "🗺️ JALUR MASUK", num: "5", desc: "Pilihan jalur pendaftaran" },
            { tag: "🏅 AKREDITASI", num: "A", desc: "Kategori Sekolah Unggulan" },
            { tag: "📍 NPSN:", num: "30401504", desc: "BALIKPAPAN TIMUR - LAMARU" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl p-5 border border-white/5 transition-colors duration-300 hover:border-white/10"
            >
              <span className="text-[10px] md:text-xs font-bold text-blue-400 block tracking-wider mb-2">{stat.tag}</span>
              <span className="text-3xl md:text-4xl font-black text-white block mb-1 drop-shadow-md">{stat.num}</span>
              <span className="text-xs text-slate-400 font-light leading-tight">{stat.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= SECTION BROSUR & POSTER SLIDER (BARU) ================= */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <span className="text-amber-400 text-xs font-bold font-mono tracking-widest uppercase">Media Informasi</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-200 mt-1">Poster & Brosur Resmi</h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mt-2" />
          </div>

          {/* Frame Bingkai Slider */}
          <div className="relative bg-white/5 border border-white/10 p-3 md:p-4 rounded-3xl shadow-2xl backdrop-blur-sm overflow-hidden aspect-[4/3] md:aspect-[16/9] max-h-[500px] w-full flex items-center justify-center group">
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={daftarPoster[currentSlide].src}
                    alt={daftarPoster[currentSlide].alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tombol Geser Kiri */}
            <button
              onClick={prevSlide}
              className="absolute left-6 w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-white text-sm hover:bg-blue-600 transition shadow-lg opacity-0 group-hover:opacity-100 duration-300"
            >
              ❮
            </button>

            {/* Tombol Geser Kanan */}
            <button
              onClick={nextSlide}
              className="absolute right-6 w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-white text-sm hover:bg-blue-600 transition shadow-lg opacity-0 group-hover:opacity-100 duration-300"
            >
              ❯
            </button>

            {/* Indikator Titik (Dots) di Bawah Slider */}
            <div className="absolute bottom-8 flex gap-2 z-20">
              {daftarPoster.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "w-6 bg-blue-500" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= 3. STEP BY STEP ALUR PENDAFTARAN ================= */}
        <div id="alur-pendaftaran" className="space-y-10 pt-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-blue-400 text-xs font-bold font-mono tracking-widest uppercase">Step By Step</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-200 mt-1">Alur Pendaftaran</h2>
            <p className="text-slate-400 text-xs md:text-sm font-light max-w-xl mx-auto mt-2">
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
                className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/5 transition-colors duration-300 hover:border-white/10 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="text-2xl mb-4 bg-blue-500/10 border border-blue-400/20 w-12 h-12 rounded-xl flex items-center justify-center">
                    {alur.icon}
                  </div>
                  <span className="text-[10px] font-bold text-blue-400 block tracking-widest uppercase mb-1">{alur.step}</span>
                  <h4 className="text-base font-bold text-white mb-2">{alur.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-light text-justify">{alur.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  )
}