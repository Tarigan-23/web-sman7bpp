"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SiswaItem {
    id: number
    nama: string
    nisn: string
    jenis_kelamin: string
    kelas: string
}

const daftarKelasMaster = [
    "X-A", "X-B", "X-C", "X-D", "X-E", "X-F", "X-G", "X-H", "X-I", "X-J", "X-K",
    "XI-A1", "XI-A2", "XI-B1", "XI-B2", "XI-C", "XI-D1", "XI-D2", "XI-D3", "XI-D4",
    "XII-A1", "XII-A2", "XII-B1", "XII-B2", "XII-C1", "XII-C2", "XII-D1", "XII-D2", "XII-D3"
]

export default function SiswaPublicContent({ initialSiswa }: { initialSiswa: SiswaItem[] }) {
    const [kelasAktif, setKelasAktif] = useState<string>("X-A")
    const [searchQuery, setSearchQuery] = useState<string>("")

    // Filter siswa berdasarkan kelas aktif dan pencarian
    const siswaTersaring = initialSiswa.filter(s =>
        s.kelas === kelasAktif &&
        s.nama.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Hitung statistik laki-laki dan perempuan berdasarkan siswa yang sedang aktif di kelas tersebut
    const totalLaki = siswaTersaring.filter(s => s.jenis_kelamin?.toLowerCase().includes("laki") || s.jenis_kelamin === "L").length
    const totalPerempuan = siswaTersaring.filter(s => s.jenis_kelamin?.toLowerCase().includes("perempuan") || s.jenis_kelamin === "P").length

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
            style={{ backgroundImage: "url('/background.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/75 z-0" />

            <div className="relative z-10 pt-24 md:pt-36 pb-20 px-4 md:px-6 max-w-4xl mx-auto space-y-6 md:space-y-10">

                <section className="text-center w-full">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-500/20 uppercase tracking-widest">
                            Database Kesiswaan Terintegrasi
                        </span>
                        <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mt-3 mb-1">
                            Daftar <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Siswa</span>
                        </h1>
                        <p className="text-gray-300 text-xs md:text-lg font-light">
                            SMA Negeri 7 Balikpapan
                        </p>
                    </motion.div>
                </section>

                {/* Navigasi Kelas: Grid Responsif */}
                <div className="w-full bg-slate-900/60 p-3 md:p-4 rounded-2xl border border-white/5">
                    <p className="text-xs text-slate-400 mb-2 font-medium text-center">Pilih Rombongan Belajar (Kelas):</p>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-1.5 md:gap-2">
                        {daftarKelasMaster.map((kelas) => {
                            const jumlahSiswa = initialSiswa.filter(s => s.kelas === kelas).length
                            return (
                                <button
                                    key={kelas}
                                    onClick={() => {
                                        setKelasAktif(kelas)
                                        setSearchQuery("")
                                    }}
                                    className={`py-2 px-1 rounded-xl text-xs font-bold transition-all duration-300 flex flex-col items-center justify-center gap-0.5 ${kelasAktif === kelas
                                        ? "bg-blue-500 text-white shadow-lg scale-105 ring-2 ring-blue-400/50"
                                        : "bg-slate-950/40 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                                        }`}
                                >
                                    <span>{kelas}</span>
                                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${kelasAktif === kelas ? "bg-white/20 text-white" : "bg-white/5 text-gray-500"
                                        }`}>
                                        {jumlahSiswa}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Live Search */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md mx-auto relative"
                >
                    <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-gray-400 text-sm">
                        🔍
                    </div>
                    <input
                        type="text"
                        placeholder={`Cari nama siswa di kelas ${kelasAktif}...`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-900/50 backdrop-blur-sm text-white placeholder-gray-400 text-xs md:text-sm rounded-xl pl-10 pr-4 py-2.5 md:py-3 border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                </motion.div>

                {/* Daftar Siswa Card */}
                <motion.div
                    layout
                    className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 border border-white/10 w-full min-h-[250px]"
                >
                    {/* Header Card dengan Informasi Rombel & Statistik Gender */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-4 mb-4 gap-3">
                        <div>
                            <h2 className="text-xl md:text-2xl font-black text-blue-400 tracking-wide uppercase">
                                📋 Rombel Kelas {kelasAktif}
                            </h2>
                            <p className="text-[10px] md:text-xs text-gray-400 mt-0.5">
                                Menampilkan {siswaTersaring.length} dari total siswa di kelas
                            </p>
                        </div>

                        {/* Statistik Badge Laki-laki & Perempuan */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-blue-300 bg-blue-500/10 px-3 py-1 rounded-xl border border-blue-500/20 font-mono font-semibold">
                                👦 L: {totalLaki}
                            </span>
                            <span className="text-xs text-pink-300 bg-pink-500/10 px-3 py-1 rounded-xl border border-pink-500/20 font-mono font-semibold">
                                👧 P: {totalPerempuan}
                            </span>
                        </div>
                    </div>

                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3.5 w-full">
                        <AnimatePresence mode="popLayout">
                            {siswaTersaring.length > 0 ? (
                                siswaTersaring.map((item, i) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        key={item.id}
                                        className="bg-slate-950/40 hover:bg-blue-500/10 rounded-xl px-4 py-3 border border-white/5 flex items-center justify-between group transition-all duration-300 hover:border-blue-500/20 shadow-md"
                                    >
                                        <div className="flex items-center gap-3 truncate">
                                            <span className="text-[10px] md:text-xs font-mono font-bold text-blue-400 bg-blue-500/10 h-5 w-5 rounded flex items-center justify-center shrink-0 border border-blue-500/20">
                                                {i + 1}
                                            </span>
                                            <div>
                                                <p className="text-xs md:text-sm font-medium text-gray-200 group-hover:text-white transition-colors truncate">
                                                    {item.nama}
                                                </p>
                                                <p className="text-[10px] text-slate-400">NISN: {item.nisn || "-"}</p>
                                            </div>
                                        </div>

                                        <span className={`text-[9px] md:text-[10px] uppercase font-mono px-2 py-0.5 rounded ${item.jenis_kelamin?.toLowerCase().includes("laki")
                                                ? "text-blue-300 bg-blue-500/10 border border-blue-500/20"
                                                : "text-pink-300 bg-pink-500/10 border border-pink-500/20"
                                            }`}>
                                            {item.jenis_kelamin}
                                        </span>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="col-span-1 sm:col-span-2 text-center py-12 text-gray-400 text-xs md:text-sm italic space-y-2"
                                >
                                    <p className="text-2xl">🧐</p>
                                    <p>Tidak ada data siswa ditemukan di kelas {kelasAktif}.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    )
}