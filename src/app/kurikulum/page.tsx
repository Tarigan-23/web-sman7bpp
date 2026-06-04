"use client"

import React from "react"
// Mengimpor motion dan Variants dari framer-motion untuk animasi modern
import { motion, Variants } from "framer-motion"

export default function KurikulumPage() {
  // Konfigurasi animasi kelompok (Staggered) untuk kartu metode belajar
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Memberikan jeda antar kartu saat muncul
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

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto block">
        
        {/* Judul Halaman - Responsif */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-blue-400 tracking-wide drop-shadow-lg leading-tight">
            Kurikulum & Pembelajaran
          </h1>
          <p className="text-gray-200 text-sm md:text-xl mt-2 md:mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            Sistem pendidikan adaptif dan inovatif di SMA Negeri 7 Balikpapan untuk mencetak generasi unggul berteknologi.
          </p>
        </motion.div>

        {/* 1. Pengantar Kurikulum Merdeka */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-10 border border-white/10 mb-10 md:mb-16"
        >
          {/* Berubah dari flex-col di HP ke Grid di desktop */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-10 items-stretch lg:items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                <span className="text-blue-400"></span> Kurikulum Merdeka
              </h2>
              <div className="text-gray-200 leading-relaxed md:leading-8 text-sm md:text-lg text-justify font-normal space-y-4">
                <p>
                  SMA Negeri 7 Balikpapan menerapkan <strong className="text-blue-300 font-semibold">Kurikulum Merdeka</strong> yang berfokus pada kebebasan akademik, pengembangan karakter melalui <strong>Projek Penguatan Profil Pelajar Pancasila (P5)</strong>, serta pembelajaran yang disesuaikan dengan minat dan bakat siswa.
                </p>
                <p>
                  Dengan pendekatan ini, kami memastikan setiap siswa tidak hanya menguasai teori, tetapi juga memiliki keterampilan berpikir kritis, kolaboratif, dan siap bersaing di era digital.
                </p>
              </div>
            </div>
            
            {/* Ilustrasi/Grafik Ringkasan Pilar */}
            <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl md:rounded-2xl p-5 md:p-6 text-center backdrop-blur-sm shadow-inner mt-2 lg:mt-0">
              <h4 className="text-xl md:text-2xl font-bold text-blue-300 mb-4">3 Pilar Utama</h4>
              <ul className="text-left text-gray-200 space-y-3 font-medium text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span>🎯</span> <span>Intrakurikuler yang Fleksibel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🌱</span> <span>Kokurikuler (Projek P5)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🚀</span> <span>Ekstrakurikuler Berbasis Minat</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 2. Metode Belajar Unggulan */}
        <div className="mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-10 text-center"
          >
            Metode Belajar Kami
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Card 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border border-white/10 transition-all duration-300 hover:border-white/20"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">💻</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Blended Learning</h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base text-justify">
                Mengombinasikan pembelajaran tatap muka di kelas dengan platform digital interaktif, memudahkan siswa mengakses materi kapan saja.
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border border-white/10 transition-all duration-300 hover:border-white/20"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🤝</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Project-Based Learning</h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base text-justify">
                Siswa belajar memecahkan masalah nyata melalui proyek kelompok, mengasah kerja sama, kreativitas, dan kepemimpinan.
              </p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border border-white/10 transition-all duration-300 hover:border-white/20"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🔬</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Inquiry & Discovery</h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base text-justify">
                Mendorong rasa ingin tahu siswa melalui eksperimen dan riset mandiri, membangun mentalitas pembelajar sepanjang hayat.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* 3. Kalender Pendidikan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-10 border border-white/10 mb-10 md:mb-16"
        >
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white">Kalender Pendidikan</h2>
            <p className="text-blue-200 text-sm md:text-base mt-1 md:mt-2 font-medium">Tahun Ajaran Aktif SMA Negeri 7 Balikpapan</p>
          </div>

          {/* Wrapper gambar agar aman dari overflow di HP */}
          <div className="flex justify-center mb-6 md:mb-10 bg-black/20 p-2 md:p-4 rounded-xl md:rounded-2xl border border-white/5 overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              src="/Kalender-Akademik.jpg"
              alt="Gambar Kalender Pendidikan SMA Negeri 7 Balikpapan"
              className="rounded-lg md:rounded-xl shadow-lg max-w-full h-auto object-contain border border-white/10"
            />
          </div>

          {/* Ruang Aksi Download Responsif */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 bg-black/30 p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10">
            <div className="text-center md:text-left">
              <h4 className="text-base md:text-lg font-semibold text-white">Butuh Dokumen Cetak?</h4>
              <p className="text-gray-300 text-xs md:text-sm mt-1">Unduh versi PDF resolusi tinggi untuk dicetak atau disimpan di perangkat Anda.</p>
            </div>
            <a 
              href="/download/POSTER.pdf"
              download
              className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 md:px-8 rounded-xl md:rounded-2xl shadow-lg transition duration-300 flex items-center justify-center gap-2 whitespace-nowrap text-sm md:text-base"
            >
              <span>📥</span> Download Kalender (PDF)
            </a>
          </div>
        </motion.div> 

        {/* Grid Jadwal Semester */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16"
        >
          {/* Semester Ganjil */}
          <motion.div variants={itemVariants} className="bg-white/15 backdrop-blur-md p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4 md:mb-6 border-b border-white/10 pb-3 flex items-center gap-2">
              🍂 Semester Ganjil
            </h3>
            <ul className="space-y-4 text-gray-200 text-sm md:text-lg">
              <li className="flex justify-between items-start border-b border-white/5 pb-2 gap-4">
                <span className="font-semibold">Juli</span>
                <span className="text-right text-xs md:text-sm text-blue-200 max-w-[200px]">Hari Pertama Sekolah & MPLS</span>
              </li>
              <li className="flex justify-between items-start border-b border-white/5 pb-2 gap-4">
                <span className="font-semibold">September</span>
                <span className="text-right text-xs md:text-sm text-blue-200 max-w-[200px]">Asesmen Sumatif Tengah Semester (ASTS)</span>
              </li>
              <li className="flex justify-between items-start gap-4">
                <span className="font-semibold">Desember</span>
                <span className="text-right text-xs md:text-sm text-blue-200 max-w-[200px]">Asesmen Akhir Semester & Pembagian Raport</span>
              </li>
            </ul>
          </motion.div>

          {/* Semester Genap */}
          <motion.div variants={itemVariants} className="bg-white/15 backdrop-blur-md p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4 md:mb-6 border-b border-white/10 pb-3 flex items-center gap-2">
              🌱 Semester Genap
            </h3>
            <ul className="space-y-4 text-gray-200 text-sm md:text-lg">
              <li className="flex justify-between items-start border-b border-white/5 pb-2 gap-4">
                <span className="font-semibold">Januari</span>
                <span className="text-right text-xs md:text-sm text-blue-200 max-w-[200px]">Hari Pertama Masuk Semester Genap</span>
              </li>
              <li className="flex justify-between items-start border-b border-white/5 pb-2 gap-4">
                <span className="font-semibold">Maret</span>
                <span className="text-right text-xs md:text-sm text-blue-200 max-w-[200px]">Asesmen Tengah Semester & Ujian Sekolah Kelas XII</span>
              </li>
              <li className="flex justify-between items-start gap-4">
                <span className="font-semibold">Juni</span>
                <span className="text-right text-xs md:text-sm text-blue-200 max-w-[200px]">Asesmen Akhir Tahun & Kenaikan Kelas</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* 4. Alokasi Waktu Belajar (Tabel Struktur Beban) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-10 border border-white/10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-6 text-center">
            Struktur Beban Belajar
          </h2>
          <p className="text-gray-200 text-center mb-6 md:mb-10 max-w-xl mx-auto font-light text-xs md:text-sm px-2">
            Gambaran pembagian jam pelajaran (JP) mingguan untuk memberikan keseimbangan antara akademik dan pengembangan karakter.
          </p>
          
          {/* Scroll horizontal aman untuk HP */}
          <div className="overflow-x-auto rounded-xl md:rounded-2xl border border-white/10 bg-slate-900/20">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-blue-500/20 text-blue-300">
                  <th className="p-3 md:p-4 text-xs md:text-sm font-bold border-b border-white/10">Komponen Pembelajaran</th>
                  <th className="p-3 md:p-4 text-xs md:text-sm font-bold border-b border-white/10 text-center w-[25%]">Kelas X</th>
                  <th className="p-3 md:p-4 text-xs md:text-sm font-bold border-b border-white/10 text-center w-[25%]">Kelas XI & XII</th>
                </tr>
              </thead>
              <tbody className="text-gray-200 divide-y divide-white/10 text-xs md:text-base">
                <tr className="hover:bg-white/5 transition">
                  <td className="p-3 md:p-4 font-normal">Kegiatan Intrakurikuler (Mata Pelajaran Wajib/Pilihan)</td>
                  <td className="p-3 md:p-4 text-center whitespace-nowrap">34 JP / minggu</td>
                  <td className="p-3 md:p-4 text-center whitespace-nowrap">36 JP / minggu</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-3 md:p-4 font-normal">Projek Penguatan Profil Pelajar Pancasila (P5)</td>
                  <td className="p-3 md:p-4 text-center whitespace-nowrap">8 JP / minggu</td>
                  <td className="p-3 md:p-4 text-center whitespace-nowrap">6 JP / minggu</td>
                </tr>
                <tr className="hover:bg-white/5 transition bg-blue-400/5">
                  <td className="p-3 md:p-4 font-semibold text-blue-200">Total Alokasi Waktu Per Minggu</td>
                  <td className="p-3 md:p-4 text-center font-bold text-blue-200 whitespace-nowrap">42 JP</td>
                  <td className="p-3 md:p-4 text-center font-bold text-blue-200 whitespace-nowrap">42 JP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  )
}