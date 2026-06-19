"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import Image from "next/image"

// Interface TypeScript untuk Personel Komite
interface KomiteItem {
  nama: string
  jabatan: string
  foto: string
}

export default function KomitePage() {
  // === 1. PIMPINAN UTAMA (Ketua Komite) ===
  const ketuaKomite: KomiteItem = {
    nama: "Heny yohana",
    jabatan: "Ketua Komite Sekolah",
    foto: "/komite/ketua.jpeg", 
  }

  // === 2. INTI KOMITE (Wakil, Sekretaris, Bendahara) ===
  const intiKomite: KomiteItem[] = [
    {
      nama: "Ir. Budyastono",
      jabatan: "Wakil Ketua Komite",
      foto: "/komite/waka.jpeg",
    },
    {
      nama: "Yuliana",
      jabatan: "Sekretaris",
      foto: "/komite/seketaris.jpeg",
    },
    {
      nama: "Nur Fitria Akbar",
      jabatan: "Bendahara",
      foto: "/komite/bendehara.jpeg",
    },
  ]

  // === 3. ANGGOTA / JABATAN BIDANG LAINNYA ===
  const bidangKomite: KomiteItem[] = [
    { nama: "Nurul Bidayah", jabatan: "Pengolahan Dana Masyaraka", foto: "/komite/bpdm1.jpeg" },
    { nama: "Erna Astuti ", jabatan: "Pengolahan Dana Masyaraka", foto: "/komite/bpdm2.jpeg" },
    { nama: "Dewi susanti", jabatan: "Sarana Prasarana", foto: "/komite/bsp1.jpeg" },
    { nama: "Eka Lestari", jabatan: "Sarana Prasarana", foto: "/komite/bsp2.jpeg" },
    { nama: "dr.h.Hadi Pitono, M.Pd", jabatan: "Sarana Prasarana", foto: "/komite/bsp3.jpeg" },
    { nama: "Bambang Hermanto", jabatan: "Jaringan Kerjasama dan Sistem Informasi", foto: "/komite/bjksi1.jpeg" },
    { nama: "Yohana", jabatan: "Jaringan Kerjasama dan Sistem Informasi", foto: "/komite/bjksi2.jpeg" },
    { nama: "Heni Panjaya ", jabatan: "Penggalian Sumber Daya Sekolah", foto: "/komite/bpsds1.jpeg" },
    { nama: "Muhammad Mujib Ridwan", jabatan: "Penggalian Sumber Daya Sekolah", foto: "/komite/bpsds2.jpeg" },
    { nama: "Darul Arkam Nurkarim,S.Pd", jabatan: "Pengendalian Kualitas Pelayanan Pendidikan", foto: "/komite/bpkpp1.jpeg" },
  ]

  // Framer Motion Variants untuk Efek Stagger Loading
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden select-none">
      
      {/* ================= BACKGROUND SINEMATIK PREMIUM ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg3.jpg" 
          alt="Latar Belakang SMANJU"
          fill
          priority
          className="object-cover object-center opacity-25 fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950" />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto block space-y-16">
        
        {/* Header Section */}
        <section className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="bg-amber-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-amber-400 border border-amber-400/20 uppercase tracking-widest">
              Mitra Kerja Sekolah
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mt-3 mb-1 leading-tight uppercase">
              Komite <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Sekolah</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg font-light tracking-wide max-w-2xl mx-auto">
              Sinergi Orang Tua Siswa dan SMA Negeri 7 Balikpapan
            </p>
          </motion.div>
        </section>

        {/* ================= SECTION 1: KETUA KOMITE (TOP LEVEL) ================= */}
        <div className="flex justify-center relative px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-b from-amber-500/10 to-white/5 backdrop-blur-md rounded-3xl p-4 md:p-5 flex flex-col items-center border border-amber-500/30 max-w-[260px] md:max-w-sm w-full shadow-2xl shadow-amber-500/5 group"
          >
            <div className="relative w-full h-[220px] md:h-[320px] bg-black/40 rounded-2xl overflow-hidden shadow-inner border border-white/5">
              <Image
                src={ketuaKomite.foto}
                alt={ketuaKomite.nama}
                fill
                sizes="(max-width: 768px) 260px, 380px"
                priority
                className="object-cover object-top transition duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback jika foto spesifik belum ada
                  const target = e.target as HTMLImageElement;
                  target.src = "/gr.webp";
                }}
              />
            </div>
            <div className="mt-4 md:mt-5 text-center">
              <h2 className="text-base md:text-2xl font-black text-white leading-snug tracking-tight">
                {ketuaKomite.nama}
              </h2>
              <p className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-bold text-xs md:text-sm mt-1.5 uppercase tracking-widest">
                {ketuaKomite.jabatan}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= SECTION 2: PENGURUS INTI (WAKIL, SEKRETARIS, BENDAHARA) ================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20" />
            <h2 className="text-sm md:text-lg font-bold text-slate-400 uppercase tracking-widest text-center">
              Pengurus Inti
            </h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto"
          >
            {intiKomite.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl p-2 md:p-4 flex flex-col justify-between h-full border border-white/10 group transition-all duration-300 hover:border-amber-500/20"
              >
                <div className="relative w-full h-[140px] md:h-[260px] bg-black/20 rounded-lg md:rounded-xl overflow-hidden border border-white/5">
                  <Image
                    src={item.foto}
                    alt={item.nama}
                    fill
                    sizes="(max-width: 768px) 33vw, 30vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/gr.webp";
                    }}
                  />
                </div>
                <div className="mt-3 text-center flex-grow flex flex-col justify-between">
                  <h3 className="text-[11px] md:text-lg font-bold text-slate-100 leading-tight line-clamp-2 min-h-[2.2rem] md:min-h-[3rem] flex items-center justify-center">
                    {item.nama}
                  </h3>
                  <p className="text-amber-400 font-semibold text-[9px] md:text-xs mt-1 uppercase tracking-wider">
                    {item.jabatan}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= SECTION 3: BIDANG-BIDANG / ANGGOTA LAINNYA ================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20" />
            <h2 className="text-sm md:text-lg font-bold text-slate-400 uppercase tracking-widest text-center">
              Anggota & Bidang Kerja
            </h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {bidangKomite.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg p-3 flex items-center gap-3 md:gap-4 border border-white/5 transition-all duration-300 hover:border-white/10 group"
              >
                {/* Foto Mini di Sebelah Kiri Untuk Variasi Modern Layout */}
                <div className="relative w-14 h-14 md:w-20 md:h-20 bg-black/30 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                  <Image
                    src={item.foto}
                    alt={item.nama}
                    fill
                    sizes="(max-width: 768px) 56px, 80px"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/gr.webp";
                    }}
                  />
                </div>
                {/* Informasi Jabatan */}
                <div className="flex-grow min-w-0">
                  <h3 className="text-xs md:text-base font-bold text-slate-100 truncate">
                    {item.nama}
                  </h3>
                  <p className="text-[10px] md:text-xs font-medium text-slate-400 mt-0.5 md:mt-1 truncate">
                    {item.jabatan}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  )
}