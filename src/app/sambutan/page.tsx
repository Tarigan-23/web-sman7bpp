"use client"

import React, { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function SambutanPage() {
  // State untuk mengontrol pop-up zoom gambar struktur di mobile
  const [isZoomed, setIsZoomed] = useState(false)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-950">
      
      {/* Background Utama Teroptimasi Next.js */}
      <div className="absolute inset-0 z-0">
              <Image
                     src="/bg3.jpeg"
                     alt="Latar Belakang SMANJU"
                     fill
                     priority
                     className="object-cover object-center opacity-25 fixed" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950" />
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
          </div>
      {/* Konten Utama */}
      <div className="relative z-10 pt-24 md:pt-36 pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-10 md:space-y-16">
        
        <section className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-400/20 uppercase tracking-widest">
              Welcome Greeting
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mt-3 mb-1 leading-tight">
              Sambutan <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Kepala Sekolah</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-xl font-light tracking-wide">
              SMA Negeri 7 Balikpapan
            </p>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-10 border border-white/10"
        >
          {/* Grid responsive layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-center">
            
            {/* 1. TEKS SAMBUTAN (KIRI) - lg:order-1 membuat teks duluan di desktop */}
            <div className="w-full lg:col-span-2 order-2 lg:order-1 flex flex-col justify-between h-full space-y-4 md:space-y-6">
              <h2 className="text-xl md:text-3xl font-extrabold text-white flex items-center gap-2 border-b border-white/5 pb-3">
                <span className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400 text-sm md:text-xl border border-blue-500/20"></span>
                
              </h2>
              
              <div className="text-slate-300 leading-relaxed md:leading-8 text-xs md:text-base text-justify font-light space-y-4">
                <p className="italic text-slate-200 font-normal">Assalamu’alaikum Warahmatullahi Wabarakatuh.</p>
                <p>
                  Selamat datang di website resmi <strong className="text-white font-medium">SMA Negeri 7 Balikpapan</strong>. Kami menyampaikan ucapan terimakasih atas kunjungan Bapak dan Ibu di laman ini. Website ini dirancang dan dikembangkan secara adaptif sebagai jembatan informasi, transparansi akademik, serta media komunikasi interaktif yang menghubungkan seluruh ekosistem warga sekolah, orang tua/wali murid dan masyarakat luas secara realtime yang kami hadirkan sebagai bentuk transparansi dan dedikasi dalam memberikan layanan pendidikan terbaik. 
                </p>
                <p>
                  Selaras dengan dinamika perkembangan zaman, kami berkomitmen penuh untuk mengintegrasikan teknologi modern ke dalam instrumen pembelajaran demi melahirkan generasi pembelajar yang religius, cerdas secara kognitif, berwawasan global, dan terus berprestasi dengan tetap memegang teguh identitas luhur nilai-nilai Pancasila.
                </p>
                <p>
                  Kami berharap media digital ini mampu menjadi wadah inspirasi sekaligus etalase kreativitas tanpa batas bagi semua peserta didik dan guru-guru serta tenaga kependidikan SMA Negeri 7 Balikpapan untuk terus mendulang prestasi gemilang dalam mewujudkan visi SMA Negeri 7 Balikpapan.
                </p>
                <p className="italic text-slate-200 font-normal">Wassalamu’alaikum Warahmatullahi Wabarakatuh.</p>
              </div>
            </div>

            {/* 2. FOTO KEPSEK & IDENTITAS (KANAN) - lg:order-2 memindahkannya ke kanan pada desktop */}
            <div className="w-full lg:col-span-1 order-1 lg:order-2 flex flex-col items-center text-center space-y-4">
              <div className="relative w-full max-w-[280px] lg:max-w-full aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl border border-white/10 shadow-xl bg-slate-900/50 group">
                <Image
                  src="/kepsek.webp"
                  alt="Kepala SMA Negeri 7 Balikpapan"
                  fill
                  sizes="(max-w-md) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                
                {/* Badge Nama Mengambang Khusus Mobile di dalam Foto */}
                <div className="absolute bottom-4 left-4 right-4 text-left block lg:hidden">
                  <h3 className="text-base font-bold text-white leading-tight">
                    Puspani, M. Pd.
                  </h3>
                  <p className="text-[11px] text-blue-300 font-medium mt-0.5">
                    Kepala Sekolah
                  </p>
                </div>
              </div>

              {/* Identitas Khusus Desktop View (Hidden di HP) */}
              <div className="hidden lg:block text-center lg:text-left w-full pt-2 border-t border-white/5">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Puspani, M. Pd.
                </h3>
                <p className="text-sm text-blue-400 font-medium mt-0.5">
                  Kepala SMA Negeri 7 Balikpapan
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch"
        >
          {/* VISI CARD */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/10 flex flex-col group hover:border-blue-500/20 transition-all duration-300"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="p-2 bg-blue-500/10 rounded-xl text-blue-400 text-xs md:text-sm border border-blue-500/20">🎯</span> 
              VISI SEKOLAH
            </h2>
            <div className="bg-slate-950/30 border border-white/5 p-4 rounded-xl flex items-center justify-center flex-1">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-200 leading-relaxed md:leading-8 text-sm md:text-lg text-center md:text-justify font-medium">
                "Terwujudnya Insan Sekolah yang Religius, Cerdas, Berprestasi, Berwawasan Global, dan Berbudaya Lingkungan."
              </p>
            </div>
          </motion.div>

          {/* MISI CARD */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/10 group hover:border-cyan-500/20 transition-all duration-300"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="p-2 bg-cyan-500/10 rounded-xl text-cyan-400 text-xs md:text-sm border border-cyan-500/20">📋</span> 
              MISI SEKOLAH
            </h2>
            <ul className="text-slate-300 leading-relaxed md:leading-7 text-xs md:text-sm space-y-3 font-light text-justify">
              {[
                "Menumbuhkan penghayatan terhadap ajaran agama yang dianut serta meningkatkan keimanan dan ketaqwaan terhadap Allah SWT, Tuhan Yang Maha Esa.",
                "Membiasakan seluruh warga sekolah untuk taat beribadah secara konsisten sesuai dengan koridor agama dan kepercayaan masing-masing.",
                "Mewujudkan budaya sekolah yang inklusif sebagai ladang tumbuh suburnya budi pekerti luhur dan akhlak mulia.",
                "Menyelenggarakan pembelajaran bermakna dan bimbingan efektif agar setiap siswa berkembang optimal sesuai keunikan bakat, minat, dan potensi internalnya.",
                "Mengakselerasi kompetensi numerasi dan literasi digital berlandaskan prinsip kejujuran, kemandirian, serta daya saing sains yang kompetitif."
              ].map((misi, index) => (
                <li key={index} className="flex items-start gap-2.5 group/li">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] font-bold text-cyan-400 border border-cyan-500/30 group-hover/li:bg-cyan-500 group-hover/li:text-slate-950 transition-colors">
                    {index + 1}
                  </span>
                  <span className="group-hover/li:text-white transition-colors">{misi}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/10 w-full block"
        >
          <div className="text-center space-y-2 mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold text-white flex items-center justify-center gap-2.5">
              <span className="p-2 bg-blue-500/10 rounded-xl text-blue-400 text-xs md:text-sm border border-blue-500/20">🌿</span> 
              Struktur Organisasi
            </h2>
            <p className="text-slate-400 text-[10px] md:text-xs block lg:hidden font-light animate-pulse">
              💡 Ketuk gambar untuk memperbesar bagan struktur
            </p>
          </div>

          {/* Wrapper Kontainer Gambar Bagan */}
          <div 
            onClick={() => setIsZoomed(true)} 
            className="flex justify-center w-full overflow-x-auto no-scrollbar cursor-zoom-in group relative"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl duration-500 pointer-events-none" />
            <div className="relative min-w-[400px] sm:min-w-[550px] md:min-w-0 max-w-full w-full aspect-[16/9] md:aspect-[21/9]">
              <Image
                src="/struktur organisasi.jpeg"
                alt="Struktur Organisasi SMA Negeri 7 Balikpapan"
                fill
                className="rounded-xl md:rounded-2xl shadow-2xl object-contain border border-white/5 transition-transform duration-500 group-hover:scale-[1.005]"
              />
            </div>
          </div>
        </motion.div> 

      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10 text-xs font-mono font-bold transition-all">
              ✕ CLOSE
            </button>
            <div className="relative w-full h-[85vh]">
              <Image
                src="/struktur organisasi.jpeg"
                alt="Struktur Organisasi Terbuka"
                fill
                className="object-contain rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}