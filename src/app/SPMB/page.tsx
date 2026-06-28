"use client"

import React, { useState, useEffect } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// KUMPULAN GAMBAR POSTER / BROSUR UTAMA (Slider atas)
const daftarPoster = [
  { id: 1, src: "/spmb/SPANDUKSPMB2026.png", alt: "Spanduk Utama SPMB SMANJU 2026" },
  { id: 2, src: "/spmb/jadwalSPMB.jpeg", alt: "Jadwal Pelaksanaan SPMB Tahun Ajaran 2026/2027" },
  { id: 3, src: "/spmb/SPMB_25.cdr.png", alt: "Informasi Persyaratan & Jalur Masuk" }, 
  { id: 4, src: "/spmb/spmb1.jpeg", alt: "pelaksanaan pra pendaftaran" },
  { id: 5, src: "/spmb/spmb2.jpeg", alt: "SPMB" },
  { id: 6, src: "/spmb/spmb3.jpeg", alt: "SPMB" },
  { id: 7, src: "/spmb/spmb4.jpeg", alt: "SPMB" },
]

// DATA UNTUK 3 POSTER BARU DI BAWAH ALUR PENDAFTARAN
const posterTambahan = [
  { id: 1, src: "/spmb/spmb5.jpeg", title: "Pemberitahuan Untuk Masyarakat", alt: "Info Terbaru" }, 
  { id: 2, src: "/spmb/spmb8.jpeg", title: "Jadwal Akses SPMB", alt: "Poster Informasi untuk mengakses SPMB" },   
  { id: 3, src: "/spmb/spmb4.jpeg", title: "Contoh Kategiri Prestasi", alt: "Poster Kategori Prestasi" }, 
]

// PATH FILE LENGKAP DOKUMEN PENGUMUMAN FORMAL
const FILE_PENGUMUMAN_PDF = "/pdf/SPMB_2026_Pengumuman_Hasil_Seleksi_Tahap_1.pdf"
const FILE_PANDUAN_DAFTAR_ULANG = "/pdf/SPMB_2026_Panduan_Daftar_Ulang.pdf"

export default function SPMBPage() {
  // Konfigurasi animasi kelompok (Staggered)
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

  // State untuk kontrol Slider Brosur/Poster Utama
  const [currentSlide, setCurrentSlide] = useState(0)
  // State untuk Preview Zoom Poster
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === daftarPoster.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? daftarPoster.length - 1 : prev - 1))
  }

  // State Timer Countdown Stabil
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 })

  useEffect(() => {
    const targetDate = new Date("2026-06-26T12:00:00")
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
      
      {/* Background Ornamen */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/bg3.jpeg"
          alt="Latar Belakang SMAN 7 Balikpapan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 pointer-events-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950" />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 pt-24 md:pt-32 px-4 max-w-7xl mx-auto space-y-24">
        
        {/* ================= HERO SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#pengumuman-tahap1"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-sm font-black py-3 px-6 rounded-2xl shadow-lg transition duration-300 flex items-center gap-2"
              >
                📄 Buka Hasil Seleksi Tahap I
              </a>
              <a
                href="https://spmb-balikpapan.kaltimprov.go.id/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-bold py-3 px-6 rounded-2xl backdrop-blur transition duration-300 flex items-center gap-2"
              >
                ✨ Portal SPMB
              </a>
            </div>
          </div>

          {/* Sisi Kanan: Card Hitung Mundur */}
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
              Pendaftaran Tahap I diperpanjang s/d <span className="text-blue-400 font-semibold">JUMAT 26 JUNI 2026</span>.
            </p>

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


        {/* ================= REVISI TOTAL: BANNER PENGUMUMAN HASIL SELEKSI TAHAP I (DOKUMEN UTAMA) ================= */}
        <motion.section 
          id="pengumuman-tahap1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-emerald-950/40 to-slate-900/60 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.08)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Informasi Teks Kiri */}
            <div className="md:col-span-8 space-y-4">
              <div className="w-fit bg-emerald-500/10 border border-emerald-400/30 rounded-full px-3 py-1 text-[10px] font-black text-emerald-400 uppercase tracking-wider">
                📢 PENGUMUMAN RESMI KELULUSAN
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                Hasil Seleksi Administrasi &amp; Berkas <br />
                <span className="text-emerald-400">Pendaftaran SPMB Tahap I</span>
              </h2>
              <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed text-justify max-w-2xl">
                Surat Ketetapan Kepala Sekolah mengenai daftar nama calon peserta didik baru yang dinyatakan <b>Lolos Seleksi Berkas Tahap I</b> Tahun Ajaran 2026/2027 telah diterbitkan. Silakan klik tombol unduh dokumen PDF resmi di samping untuk membuka lembar lampiran kelulusan dan mencari nama Anda.
              </p>
            </div>

            {/* Aksi Unduh PDF Kanan */}
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center w-full">
              <a 
                href="/download/HASIL-SLEKSI-SPMB-TAHAP1.PDF"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs py-4 px-6 rounded-xl font-black tracking-wide text-center transition shadow-xl shadow-emerald-500/10 active:scale-95 flex items-center justify-center gap-2"
              >
                📥 Lihat Daftar Kelulusan (PDF)
              </a>
              <a 
                href="/spmb/dok-daftarulang.png"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs py-4 px-6 rounded-xl font-bold text-center transition flex items-center justify-center gap-2"
              >
                📋 Alur &amp; Syarat Daftar Ulang
              </a>
            </div>

          </div>

          {/* Catatan Kaki Tambahan Pemberitahuan */}
          <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400 flex flex-wrap gap-x-6 gap-y-2 font-mono">
            <span>📍 Lokasi Verifikasi Fisik: Aula SMAN 7 Balikpapan</span>
            <span>📅 Pelaksanaan Daftar Ulang: 29 Juni – 01 Juli 2026</span>
          </div>
        </motion.section>


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

        {/* ================= SECTION BROSUR & POSTER SLIDER ================= */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <span className="text-amber-400 text-xs font-bold font-mono tracking-widest uppercase">Media Informasi</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-200 mt-1">Poster & Brosur Resmi</h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mt-2" />
          </div>

          <div className="relative bg-white/5 border border-white/10 p-3 md:p-4 rounded-3xl shadow-2xl backdrop-blur-sm overflow-hidden aspect-[4/3] md:aspect-[16/9] max-h-[500px] w-full flex items-center justify-center group">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full cursor-zoom-in"
                  onClick={() => setSelectedPoster(daftarPoster[currentSlide].src)}
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

            <button
              onClick={prevSlide}
              className="absolute left-6 w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-white text-sm hover:bg-blue-600 transition shadow-lg opacity-0 group-hover:opacity-100 duration-300"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-white text-sm hover:bg-blue-600 transition shadow-lg opacity-0 group-hover:opacity-100 duration-300"
            >
              ❯
            </button>

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

        {/* ================= STEP BY STEP ALUR PENDAFTARAN ================= */}
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

          {/* ================= PLACEHOLDER 3 POSTER BARU (DI BAWAH ALUR) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-12 space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] bg-white/10 flex-1" />
              <h3 className="text-sm md:text-base font-bold tracking-wider text-amber-400 uppercase bg-slate-950 px-4 py-1 rounded-full border border-amber-500/20">
                📌 Brosur & Panduan Pelengkap
              </h3>
              <div className="h-[1px] bg-white/10 flex-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {posterTambahan.map((poster) => (
                <motion.div
                  key={poster.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/5 hover:border-white/10 p-3 rounded-2xl backdrop-blur-sm shadow-xl flex flex-col gap-3 group"
                >
                  <div 
                    onClick={() => setSelectedPoster(poster.src)}
                    className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-black/40 border border-white/5 cursor-zoom-in group-hover:border-blue-500/30 transition-colors duration-300"
                  >
                    <Image
                      src={poster.src}
                      alt={poster.alt}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-300 flex items-center justify-center">
                      <span className="bg-slate-900/90 text-white border border-white/10 px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-2xl">
                        🔍 Ketuk untuk Memperbesar
                      </span>
                    </div>
                  </div>
                  <div className="px-1 py-1">
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-blue-400 transition-colors duration-200 block truncate">
                      {poster.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      {/* ================= SCREEN-WIDE MODAL OVERLAY ZOOM (PREVIEW PREMIUM) ================= */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPoster(null)}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono text-xl hover:bg-white/10 transition-colors">
              ✕
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative w-full h-full max-w-4xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPoster}
                alt="Pratinjau Brosur Diperbesar"
                fill
                className="object-contain"
                sizes="(max-w-1024px) 100vw, 1024px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}