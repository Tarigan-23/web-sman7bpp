"use client"

import React from "react"
import { motion, Variants } from "framer-motion"

export default function ProfilPage() {
  // Variasi animasi untuk efek staggered (berurutan) saat komponen muncul
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
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      {/* Overlay Backdrop - Sedikit lebih gelap untuk meningkatkan kontras teks */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* Konten Utama */}
      <div className="relative z-10 pt-24 md:pt-36 pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-8 md:space-y-12">

        {/* HERO TITLE - Tampilan super tajam & responsif */}
        <section className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-500/20 uppercase tracking-widest">
              Garda Edukasi Kalimantan Timur
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-wide mt-3 mb-1">
              Profil <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Sekolah</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-xl font-light tracking-wide">
              SMA Negeri 7 Balikpapan
            </p>
          </motion.div>
        </section>

        {/* UTAMA GRID: Tentang Sekolah & Status Resmi */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          
          {/* Tentang Sekolah Card (Kiri - Makan 2 Kolom di Desktop) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-8 border border-white/10 flex flex-col justify-between group hover:border-blue-500/20 transition-colors duration-500"
          >
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl md:text-3xl font-bold text-white flex items-center gap-2.5">
                <span className="p-2 bg-blue-500/10 rounded-xl text-blue-400 text-lg md:text-2xl border border-blue-500/20">🏫</span> 
                Tentang Sekolah
              </h2>
              
              <div className="text-gray-300 leading-relaxed md:leading-8 text-xs md:text-base text-justify font-light space-y-4">
                <p>
                  <strong className="text-white font-medium">SMA Negeri 7 Balikpapan</strong> merupakan salah satu satuan pendidikan dengan jenjang SMA di Kota Balikpapan. Sekolah ini berkomitmen penuh dalam menyelenggarakan pendidikan tingkat menengah yang bermutu tinggi guna menghasilkan lulusan yang cerdas, adaptif, serta memiliki integritas moral yang kokoh.
                </p>
                <p>
                  Sebagai lembaga pendidikan formal yang dinamis, sekolah ini terus bertransformasi mengintegrasikan teknologi ke dalam sistem pembelajaran, meningkatkan kualitas pendidik, serta memfasilitasi minat dan bakat siswa baik di bidang akademik maupun non-akademik demi menyongsong generasi emas masa depan.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Status Resmi - Diubah dari tabel kaku menjadi Grid Card Modern */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-6 border border-white/10 flex flex-col justify-between gap-4 group hover:border-cyan-500/20 transition-colors duration-500"
          >
            <div className="space-y-4">
              <h2 className="text-lg md:text-2xl font-bold text-white flex items-center gap-2.5 text-center lg:text-left">
                <span className="p-2 bg-cyan-500/10 rounded-xl text-cyan-400 text-sm md:text-xl border border-cyan-500/20">📊</span>
                Status Resmi
              </h2>
              
              {/* Grid 2x2 untuk menampung metrik formal sekolah agar responsif */}
              <div className="grid grid-cols-2 gap-3">
                
                {/* Status */}
                <div className="bg-slate-950/40 border border-white/5 rounded-xl p-3 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Status</span>
                  <span className="text-sm md:text-base font-extrabold text-white mt-0.5">NEGERI</span>
                </div>

                {/* Akreditasi */}
                <div className="bg-slate-950/40 border border-white/5 rounded-xl p-3 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">Akreditasi</span>
                  <span className="text-sm md:text-base font-black text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)] mt-0.5">A (Unggul)</span>
                </div>

                {/* NPSN */}
                <div className="bg-slate-950/40 border border-white/5 rounded-xl p-3 flex flex-col justify-center col-span-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400">NPSN</span>
                  <span className="text-xs md:text-sm font-bold text-white font-mono tracking-wider mt-0.5">30401490</span>
                </div>

                {/* Kurikulum */}
                <div className="bg-slate-950/40 border border-white/5 rounded-xl p-3 flex flex-col justify-center col-span-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">Kurikulum</span>
                  <span className="text-[11px] md:text-xs font-extrabold text-white tracking-tight mt-0.5 leading-tight">Merdeka Belajar</span>
                </div>

              </div>
            </div>

            {/* Tambahan Info Mini Footer Legalitas di bagian bawah card */}
            <div className="text-[10px] text-gray-400 italic text-center pt-2 border-t border-white/5">
              Terverifikasi Kementerian Pendidikan & Kebudayaan RI
            </div>
          </motion.div>

        </motion.div>

        {/* SEJARAH SEKOLAH SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-8 border border-white/10 group hover:border-blue-500/20 transition-colors duration-500"
        >
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-3xl font-bold text-white flex items-center gap-2.5">
              <span className="p-2 bg-blue-500/10 rounded-xl text-blue-400 text-lg md:text-2xl border border-blue-500/20">📜</span> 
              Sejarah Sekolah
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed md:leading-8 text-xs md:text-base text-justify font-light">
              <p>
                <strong className="text-white font-medium">SMA Negeri 7 Balikpapan</strong> didirikan sebagai respons konkret atas meningkatnya kebutuhan masyarakat akan akses pendidikan menengah atas yang berkualitas tinggi dan inklusif di wilayah Kota Balikpapan. Sejak fajar awal pendiriannya, seluruh elemen sekolah didesain terstruktur untuk mencetak generasi penerus bangsa yang unggul di peta pendidikan Kalimantan Timur.
              </p>
              <p>
                Dari warsa ke warsa, infrastruktur dan tata pamong sekolah terus mengalami eskalasi perkembangan yang signifikan. Transformasi ini melingkupi peremajaan sarana prasarana fisik kelas, digitalisasi perpustakaan, ekspansi laboratorium sains dan komputer, hingga rentetan raihan prestasi prestisius yang berhasil disabet oleh para siswa-siswi di level kota, provinsi, maupun kancah nasional.
              </p>
              <p>
                Kini, berbekal komitmen digitalisasi ekosistem sekolah, SMA Negeri 7 Balikpapan berdiri tegak mempertahankan dedikasi luhurnya. Kami siap menempa pemuda-pemudi mandiri yang berdaya saing global untuk menaklukkan dinamisnya tantangan zaman tanpa mengikis fondasi karakter budi pekerti yang kuat.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}