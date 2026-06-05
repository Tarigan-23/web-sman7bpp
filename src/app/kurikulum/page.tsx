"use client"

import React, { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"

export default function KurikulumPage() {
  // State untuk mengontrol zoom popup gambar kalender akademik di mobile
  const [isZoomed, setIsZoomed] = useState(false)

  // Konfigurasi animasi staggered kelompok
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay Gelap Latar Belakang */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* Konten Utama */}
      <div className="relative z-10 pt-24 md:pt-36 pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* ======================================================== */}
        {/* HERO TITLE                                               */}
        {/* ======================================================== */}
        <section className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-400/20 uppercase tracking-widest">
              Academic Development
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mt-3 mb-1 leading-tight">
              Kurikulum & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pembelajaran</span>
            </h1>
            <p className="text-gray-300 text-xs md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Sistem pendidikan adaptif dan inovatif di SMA Negeri 7 Balikpapan untuk mencetak generasi unggul berteknologi.
            </p>
          </motion.div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 1: PENGANTAR KURIKULUM MERDEKA                   */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-10 border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-stretch">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
                <span className="text-blue-400">#</span> Esensi Kurikulum Merdeka
              </h2>
              <div className="text-gray-300 leading-relaxed md:leading-8 text-xs md:text-base text-justify font-light space-y-4">
                <p>
                  SMA Negeri 7 Balikpapan menerapkan <strong className="text-blue-300 font-semibold">Kurikulum Merdeka</strong> secara menyeluruh, menitikberatkan pada fleksibilitas akademik, kedalaman materi, serta penguatan kompetensi nyata. Struktur kurikulum ini diintegrasikan langsung dengan <strong>Projek Penguatan Profil Pelajar Pancasila (P5)</strong> untuk mengasah soft skills siswa.
                </p>
                <p>
                  Melalui ekosistem merdeka belajar, kami memfasilitasi peserta didik agar dapat mengeksplorasi minat dan bakatnya secara personal, membangun kemampuan berpikir kritis, serta adaptif terhadap akselerasi teknologi industri modern.
                </p>
              </div>
            </div>
            
            {/* Box 3 Pilar Utama */}
            <div className="bg-slate-950/40 border border-white/5 rounded-xl md:rounded-2xl p-5 md:p-6 flex flex-col justify-center backdrop-blur-sm shadow-inner">
              <h4 className="text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 text-center mb-4 uppercase tracking-wider">
                3 Pilar Utama Pelaksanaan
              </h4>
              <ul className="text-gray-200 space-y-3.5 font-medium text-xs md:text-sm">
                {[
                  { icon: "🎯", label: "Intrakurikuler yang Fleksibel" },
                  { icon: "🌱", label: "Kokurikuler (Projek Penguatan P5)" },
                  { icon: "🚀", label: "Ekstrakurikuler Berbasis Minat" }
                ].map((pilar, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/5 p-2.5 rounded-lg border border-white/5 hover:border-blue-500/20 transition-all">
                    <span className="text-sm md:text-base">{pilar.icon}</span> 
                    <span className="text-gray-300 text-xs md:text-sm font-light">{pilar.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* SECTION 2: METODE BELAJAR UNGgULAN (CARD GRID)           */}
        {/* ======================================================== */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center">
            Metode Belajar Unggulan
          </h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          >
            {[
              { icon: "💻", title: "Blended Learning", text: "Mengombinasikan efisiensi ruang tatap muka fisik di kelas dengan platform tata kelola digital interaktif. Memberikan kebebasan akses materi belajar esensial kapan saja dan dari mana saja." },
              { icon: "🤝", title: "Project-Based Learning", text: "Mengajak siswa memecahkan studi kasus atau problem nyata di lapangan lewat proyek kelompok kolaboratif. Mengasah insting kerja sama, kreativitas, dan kepemimpinan visioner." },
              { icon: "🔬", title: "Inquiry & Discovery", text: "Mendorong rasa penasaran alami peserta didik melalui jalur eksperimen ilmiah dan riset mandiri terpimpin. Membentuk karakteristik mentalitas pembelajar tangguh sepanjang hayat." }
            ].map((metode, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/10 transition-all duration-300 hover:border-blue-500/20 hover:shadow-2xl"
              >
                <div className="text-3xl bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center border border-blue-500/20 mb-4">{metode.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{metode.title}</h3>
                <p className="text-gray-300 leading-relaxed text-xs md:text-sm text-justify font-light">
                  {metode.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 3: KALENDER PENDIDIKAN + INTERACTIVE ZOOM       */}
        {/* ======================================================== */}
        <motion.div
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

          {/* Gambar Kontainer Interaktif */}
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

          {/* Area Download File */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-950/40 p-4 md:p-5 rounded-xl border border-white/5">
            <div className="text-center md:text-left space-y-0.5">
              <h4 className="text-sm md:text-base font-semibold text-white">Butuh Dokumen Cetak Master?</h4>
              <p className="text-gray-400 text-[11px] md:text-xs font-light">Unduh versi PDF resolusi tinggi resmi untuk dicetak secara fisik.</p>
            </div>
            <a 
              href="/download/KalenderAkademik.pdf"
              download
              className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap text-xs md:text-sm"
            >
              <span>📥</span> Download Kalender (PDF)
            </a>
          </div>
        </motion.div> 

        {/* ======================================================== */}
        {/* SECTION 4: GRID TIMELINE AGENDA SEMESTER                 */}
        {/* ======================================================== */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {/* SEMESTER GANJIL */}
          <motion.div variants={itemVariants} className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/10 shadow-xl space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-blue-400 border-b border-white/10 pb-2.5 flex items-center gap-2">
              🍂 Agenda Semester Ganjil (2026)
            </h3>
            <div className="space-y-3 max-h-[450px] overflow-y-auto pr-1 no-scrollbar">
              {[
                { date: "13 Mei 2026", desc: "Awal Masuk Sekolah" },
                { date: "13 - 15 Mei 2026", desc: "Masa Pengenalan Lingkungan Sekolah (MPLS)" },
                { date: "17 Agustus 2026", desc: "Hari Kemerdekaan Republik Indonesia" },
                { date: "25 Agustus 2026", desc: "Maulid Nabi Muhammad SAW" },
                { date: "28 Sep - 5 Okt 2026", desc: "HUT SMANJU & Pelaksanaan Bulan Bahasa" },
                { date: "26 Okt - 5 Nov 2026", desc: "Pelaksanaan TKA - SULINJAR" },
                { date: "23 Nov - 2 Des 2026", desc: "Asesmen Sumatif Akhir Semester (ASAS)" },
                { date: "18 Desember 2026", desc: "Pembagian Rapor Semester Ganjil" },
                { date: "25 Desember 2026", desc: "Hari Raya Natal" },
                { date: "21 - 31 Desember 2026", desc: "Libur Akhir Semester Ganjil" }
              ].map((agenda, idx) => (
                <div key={idx} className="bg-slate-950/30 p-2.5 rounded-lg border border-white/5 flex items-start justify-between gap-4 text-xs md:text-sm hover:border-blue-500/10 transition-colors">
                  <span className="font-mono text-blue-300 font-medium shrink-0">{agenda.date}</span>
                  <span className="text-gray-300 font-light text-right">{agenda.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SEMESTER GENAP */}
          <motion.div variants={itemVariants} className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/10 shadow-xl space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-cyan-400 border-b border-white/10 pb-2.5 flex items-center gap-2">
              🌱 Agenda Semester Genap (2027)
            </h3>
            <div className="space-y-3 max-h-[450px] overflow-y-auto pr-1 no-scrollbar">
              {[
                { date: "1 Januari 2027", desc: "Libur Tahun Baru Masehi" },
                { date: "5 Januari 2027", desc: "Peringatan Isra Mi'raj" },
                { date: "6 Februari 2027", desc: "Hari Raya Imlek" },
                { date: "8 - 10 Februari 2027", desc: "Libur Awal Puasa Ramadhan 1448H" },
                { date: "11, 12, 15 Feb 2027", desc: "Pesantren Ramadhan / Pendalaman Kitab Suci" },
                { date: "8 - 12 Maret 2027", desc: "Libur Seputar Hari Raya Idul Fitri" },
                { date: "10 - 11 Maret 2027", desc: "Hari Raya Idul Fitri 1448H" },
                { date: "19 Maret 2027", desc: "Hari Raya Nyepi" },
                { date: "22 Mar - 2 Apr 2027", desc: "Asesmen Satuan Pendidikan (ASP)" },
                { date: "26 Maret 2027", desc: "Wafat Isa Almasih (Jumat Agung)" },
                { date: "21 April 2027", desc: "Hari Kartini" },
                { date: "1 Mei 2027", desc: "Hari Buruh Internasional" },
                { date: "16 Mei 2027", desc: "Hari Kenaikan Isa Almasih" },
                { date: "17 Mei 2027", desc: "Hari Raya Idul Adha" },
                { date: "20 Mei 2027", desc: "Hari Raya Waisak" },
                { date: "26 Mei - 4 Jun 2027", desc: "Asesmen Sumatif Akhir Tahun (ASAT)" },
                { date: "18 Juni 2027", desc: "Pembagian Rapor Semester Genap" },
                { date: "12 Juli 2027", desc: "Hari Pertama Masuk Sekolah TA Baru" }
              ].map((agenda, idx) => (
                <div key={idx} className="bg-slate-950/30 p-2.5 rounded-lg border border-white/5 flex items-start justify-between gap-4 text-xs md:text-sm hover:border-cyan-500/10 transition-colors">
                  <span className="font-mono text-cyan-300 font-medium shrink-0">{agenda.date}</span>
                  <span className="text-gray-300 font-light text-right">{agenda.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ======================================================== */}
        {/* SECTION 5: ALOKASI WAKTU BELAJAR (EFEKTIF TABLE)        */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/10"
        >
          <div className="text-center space-y-1 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Rincian Hari Efektif Belajar
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-light text-xs px-2">
              Rekapitulasi resmi kuantitas Hari Efektif Belajar (HEB) dan jumlah minggu aktif pelaksanaan operasional akademik.
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950/20">
            <table className="w-full text-left border-collapse min-w-[350px]">
              <thead>
                <tr className="bg-blue-500/20 text-blue-300 text-xs font-mono tracking-wider">
                  <th className="p-3 md:p-4 border-b border-white/10">Parameter Akademik</th>
                  <th className="p-3 md:p-4 border-b border-white/10 text-center w-[35%]">Jumlah / Durasi</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 divide-y divide-white/5 text-xs md:text-sm font-light">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 md:p-4 flex items-center gap-2">📅 <span>HEB Semester Ganjil</span></td>
                  <td className="p-3 md:p-4 text-center font-semibold text-blue-300 whitespace-nowrap">93 Hari</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 md:p-4 flex items-center gap-2">🌱 <span>HEB Semester Genap</span></td>
                  <td className="p-3 md:p-4 text-center font-semibold text-blue-300 whitespace-nowrap">88 Hari</td>
                </tr>
                <tr className="bg-blue-400/5 font-medium text-white">
                  <td className="p-3 md:p-4 flex items-center gap-2 font-bold text-blue-400">📊 <span>TOTAL HBE KUMULATIF</span></td>
                  <td className="p-3 md:p-4 text-center font-black text-blue-400 whitespace-nowrap">181 Hari</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 md:p-4 flex items-center gap-2">🧭 <span>Total Minggu Efektif</span></td>
                  <td className="p-3 md:p-4 text-center font-semibold text-cyan-300 whitespace-nowrap">36 Minggu</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-left text-[11px] text-gray-400 italic px-1">
            *Catatan Glosarium: <strong className="text-gray-300 font-normal">HEB / HBE</strong> = Hari Efektif Belajar reguler.
          </div>
        </motion.div>

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