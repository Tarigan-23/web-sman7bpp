"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function SPMBPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center relative overflow-hidden select-none">

      {/* Background Ornamen */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/bg3.jpeg"
          alt="Latar Belakang SMAN 7 Balikpapan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-4 max-w-3xl w-full mx-auto">

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 border border-white/10 text-center relative overflow-hidden group"
        >
          {/* Subtle hover effect on card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-white/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(59,130,246,0.2)]"
          >
            <span className="text-4xl md:text-5xl">🎓</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-block bg-amber-500/10 border border-amber-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-amber-400 backdrop-blur-sm uppercase tracking-wider mb-6">
              Tahun Ajaran 2026/2027
            </div>

            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight text-white mb-6">
              Penerimaan Murid Baru <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-400 bg-clip-text text-transparent">Telah Selesai</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto mb-10">
              Terima kasih atas antusiasme dan partisipasi seluruh pendaftar pada Seleksi Penerimaan Murid Baru (SPMB) SMA Negeri 7 Balikpapan Tahun Ajaran 2026/2027. Seluruh rangkaian proses seleksi telah resmi ditutup.
            </p>

            <div className="flex justify-center">
              <Link
                href="/"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-bold py-3 px-8 rounded-2xl backdrop-blur transition duration-300 flex items-center gap-2"
              >
                ← Kembali ke Beranda
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}