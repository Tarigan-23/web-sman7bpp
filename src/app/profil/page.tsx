"use client"

import React from "react"
// 1. Mengimpor motion dan Variants dari framer-motion
import { motion, Variants } from "framer-motion"

export default function ProfilPage() {
  // 2. Membuat objek variasi animasi agar elemen muncul berurutan (Stagger)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Memberikan jeda antar elemen anak
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Konten Utama */}
      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto block">

        {/* Judul Halaman (Animasi Fade In Turun) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold text-blue-400 drop-shadow-lg">
            Profil School
          </h1>
          <p className="text-gray-200 text-xl mt-4 font-light tracking-wide">
            SMA Negeri 7 Balikpapan
          </p>
        </motion.div>

        {/* Bagian Atas: Tentang Sekolah & Status Resmi (Staggered Scroll Animation) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16"
        >
          
          {/* Tentang Sekolah (Kiri - Tengah) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-blue-400">#</span> Tentang Sekolah
              </h2>
              <p className="text-gray-200 leading-8 text-lg text-justify mb-4">
                SMA Negeri 7 Balikpapan merupakan salah satu satuan pendidikan dengan jenjang SMA di Kota Balikpapan. Sekolah ini berkomitmen penuh dalam menyelenggarakan pendidikan tingkat menengah yang bermutu tinggi guna menghasilkan lulusan yang cerdas, adaptif, serta berintegritas.
              </p>
              <p className="text-gray-200 leading-8 text-lg text-justify">
                As lembaga pendidikan formal, sekolah ini terus bertransformasi mengintegrasikan teknologi ke dalam sistem pembelajaran, meningkatkan kualitas pendidik, serta memfasilitasi minat dan bakat siswa baik di bidang akademik maupun non-akademik.
              </p>
            </div>
          </motion.div>

          {/* Identitas Formal Sekolah (Kanan) */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 flex flex-col justify-center"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-blue-600 mb-6 text-center tracking-wide uppercase bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                Status Resmi
              </h2>
              
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition duration-200">
                      <td className="p-4 text-sm font-semibold text-white uppercase tracking-wider w-1/3">Status</td>
                      <td className="p-4 text-lg font-bold text-white">NEGERI</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition duration-200">
                      <td className="p-4 text-sm font-semibold text-emerald-300 uppercase tracking-wider">Akreditasi</td>
                      <td className="p-4 text-xl font-black text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">A (Sangat Baik)</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition duration-200">
                      <td className="p-4 text-sm font-semibold text-purple-300 uppercase tracking-wider">NPSN</td>
                      <td className="p-4 text-base font-bold text-white font-mono tracking-widest">30401490</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition duration-200">
                      <td className="p-4 text-sm font-semibold text-amber-300 uppercase tracking-wider">Kurikulum</td>
                      <td className="p-4 text-base font-extrabold text-white">Kurikulum Merdeka</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Bagian Bawah: Sejarah Sekolah */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10"
        >
          <h2 className="text-4xl font-bold text-white mb-6 text-center lg:text-left flex items-center gap-2">
            <span className="text-blue-400">#</span> Sejarah Sekolah
          </h2>
          <div className="space-y-4 text-gray-200 leading-8 text-lg text-justify">
            <p>
              SMA Negeri 7 Balikpapan didirikan sebagai respons atas meningkatnya kebutuhan akses pendidikan menengah atas yang berkualitas di wilayah Balikpapan. Sejak awal pendiriannya, sekolah ini dirancang untuk menciptakan generasi penerus bangsa yang unggul di Kalimantan Timur.
            </p>
            <p>
              Dari tahun ke tahun, sekolah terus mengalami perkembangan pesat. Mulai dari peningkatan sarana prasarana fisik seperti laboratorium, perpustakaan digital, fasilitas olahraga, hingga raihan prestasi yang diperoleh oleh para siswa di tingkat kota, provinsi, bahkan nasional.
            </p>
            <p>
              Kini, di era transformasi digital, SMA Negeri 7 Balikpapan berdiri kokoh mempertahankan dedikasinya untuk mencetak pemuda-pemudi mandiri yang siap bersaing dalam menghadapi tantangan zaman dengan pondasi karakter yang kuat.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}