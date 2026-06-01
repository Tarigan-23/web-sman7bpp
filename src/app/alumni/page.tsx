"use client"

import React from "react"
import { motion } from "framer-motion"

// Interface untuk data statistik & grafik distribusi
interface StatCard {
  label: string
  value: string | number
  subValue?: string
}

interface UniversitasItem {
  nama: string
  lokasi: string
  jumlah: number
  persentase: number // Untuk panjang progress bar (0 - 100)
}

export default function AlumniPage() {
  // 1. Data Statistik Utama
  const statistikAlumni: StatCard[] = [
    { label: "Total Alumni", value: "31", subValue: "Terdata Tahun 2026" },
    { label: "Melanjutkan Kuliah", value: "31", subValue: "(100%) Di Perguruan Tinggi" },
    { label: "Bekerja / Berwirausaha", value: "0", subValue: "(0%) Belum Terlaporkan" },
    { label: "Status Lainnya", value: "0", subValue: "Tidak Diketahui" },
  ]

  // 2. Data Distribusi Kampus PTN
  const distribusiPTN: UniversitasItem[] = [
    { nama: "Universitas Gadjah Mada", lokasi: "Yogyakarta", jumlah: 11, persentase: 100 },
    { nama: "Universitas Diponegoro", lokasi: "Semarang", jumlah: 3, persentase: 27 },
    { nama: "Universitas Negeri Surabaya", lokasi: "Surabaya", jumlah: 3, persentase: 27 },
    { nama: "Institut Pertanian Bogor", lokasi: "Bogor", jumlah: 3, persentase: 27 },
    { nama: "Universitas Negeri Malang", lokasi: "Malang", jumlah: 1, persentase: 9 },
    { nama: "Universitas Jember", lokasi: "Jember", jumlah: 1, persentase: 9 },
    { nama: "Universitas Negeri Medan", lokasi: "Medan", jumlah: 1, persentase: 9 },
  ]

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6">
        
        {/* Judul Halaman */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-blue-400 tracking-wide drop-shadow-lg">
            Alumni 
          </h1>
          <p className="text-gray-200 text-xl mt-4 max-w-2xl mx-auto">
            Jejak langkah para alumni SMAN 7 Balikpapan di berbagai penjuru Indonesia.
          </p>
        </div>

        {/* ================= SECTION 1: STATISTIK ALUMNI ================= */}
        <section className="block relative w-full mb-16">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">#</span> Ringkasan Data Kelulusan
            </h2>
          </div>

          {/* Grid Angka Statistik */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {statistikAlumni.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center shadow-xl flex flex-col justify-center min-h-[160px]"
              >
                <span className="text-4xl md:text-5xl font-black text-blue-400 block tracking-tight mb-2">
                  {stat.value}
                </span>
                <h3 className="text-white font-bold text-base leading-snug">
                  {stat.label}
                </h3>
                {stat.subValue && (
                  <p className="text-gray-300 text-xs mt-1.5 font-medium">
                    {stat.subValue}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 2: DISTRIBUSI PERGURUAN TINGGI ================= */}
        <section className="block relative w-full clear-both">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">#</span> Distribusi Perguruan Tinggi (PTN)
            </h2>
          </div>

          {/* Container List Grafik Progress Bar */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
            {distribusiPTN.map((ptn, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 w-full">
                
                {/* Bagian Nama Kampus */}
                <div className="w-full md:w-1/3">
                  <h4 className="text-white font-bold text-base md:text-lg leading-tight">
                    {ptn.nama}
                  </h4>
                  <span className="text-gray-400 text-xs font-semibold tracking-wider">
                    {ptn.lokasi}
                  </span>
                </div>

                {/* Bagian Grafik Batang (Progress Bar) */}
                <div className="w-full md:w-1/2 bg-black/30 h-4 rounded-full overflow-hidden relative border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${ptn.persentase}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  />
                </div>

                {/* Bagian Jumlah Alumni */}
                <div className="w-full md:w-1/6 text-left md:text-right">
                  <span className="text-blue-300 font-extrabold text-lg">
                    {ptn.jumlah}{" "}
                  </span>
                  <span className="text-gray-300 text-sm font-medium">
                    Alumni
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}