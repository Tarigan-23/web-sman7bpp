"use client"

import React from "react"
// PERBAIKAN: Impor 'Variants' untuk menegaskan tipe data ke TypeScript
import { motion, Variants } from "framer-motion"

export default function SambutanPage() {
  // PERBAIKAN: Tambahkan tipe data ': Variants' di sini
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // PERBAIKAN: Tambahkan tipe data ': Variants' di sini
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto block">
        
        {/* Judul Utama */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold text-blue-400 drop-shadow-lg">
            Sambutan Kepala Sekolah
          </h1>
          <p className="text-gray-200 text-xl mt-4 font-medium">
            SMA Negeri 7 Balikpapan
          </p>
        </motion.div>

        {/* Section 1: Sambutan Kepala Sekolah */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            
            {/* Teks Sambutan */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-blue-400">#</span> Kepala Sekolah
              </h2>

              <div className="text-gray-200 leading-8 text-lg text-justify font-normal space-y-4">
                <p>Assalamu’alaikum Warahmatullahi Wabarakatuh.</p>
                <p>
                  Selamat datang di website resmi SMA Negeri 7 Balikpapan.
                  Website ini hadir sebagai sarana informasi dan komunikasi
                  bagi seluruh warga sekolah serta masyarakat luas.
                </p>
                <p>
                  Kami berkomitmen untuk menciptakan lingkungan pendidikan
                  yang unggul, berkarakter, berprestasi, dan berbasis teknologi.
                  Semoga website ini dapat memberikan manfaat dan menjadi
                  media informasi yang inspiratif bagi semua pihak.
                </p>
                <p>Wassalamu’alaikum Warahmatullahi Wabarakatuh.</p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white">
                  Puspani Bandrang, M. Pd.
                </h3>
                <p className="text-blue-300 font-medium">
                  Kepala SMA Negeri 7 Balikpapan
                </p>
              </div>
            </div>

            {/* Foto Kepala Sekolah */}
            <div className="flex justify-center order-1 lg:order-2">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="/kepsek.webp"
                alt="Kepala Sekolah"
                className="w-[300px] h-[400px] object-cover rounded-3xl shadow-xl border border-white/10"
              />
            </div>

          </div>
        </motion.div>

        {/* Section 2: Visi & Misi */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16"
        >
          {/* Visi */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10 flex flex-col"
          >
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-blue-400">#</span> Visi
            </h2>
            <p className="text-gray-200 leading-8 text-lg text-justify flex-1">
              Terwujudnya Insan Sekolah Yang Religius, Cerdas, Berprestasi, Berwawasan global, Dan Berbudaya Lingkungan.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10"
          >
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-blue-400">#</span> Misi
            </h2>
            <ul className="text-gray-200 leading-8 text-lg list-disc pl-6 space-y-3 font-normal">
              <li>Menumbuhkan Penghayatan Tehadap Ajaran Agama Yang Dianut Serta Meningkatkan Keimanan Dan Ketaqwaan Tehadap Allah SWT, Tuhan YME.</li>
              <li>Membiasakan Semua Warga Sekolah Untuk Taat Beribadah Sesuai Agama Dan Kepercayaan Masing - Masing</li>
              <li>Mewujudkan Budaya Sekolah Yang Baik Sebagai Ladang Tumbuh Suburnya Budi Pekerti Luhur dan Berakhlak Mulia Selaras Profil Pelajar Pancasila</li>
              <li>Mewujudkan Pembelajaran Yang Bermakna Dan Bimbingan Secara Efektif, Sehingga Setiap Siswa Dapat Berkembang Secara Optimal Sesuai Bakat, Minat Dan Potensi Yang Dimiliki</li>
              <li>Meningkatkan Kompetensi Numerasi Dan Literasi, Sesuai Prinsip Kejujuran, Kemandirian, Serta Bakat, Minat Dan Potensi Peserta Didik.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Section 3: Struktur Organisasi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10 w-full block"
        >
          <h2 className="text-4xl font-bold text-white mb-10 text-center flex items-center justify-center gap-2">
            <span className="text-blue-400">#</span> Struktur Organisasi
          </h2>

          <div className="flex justify-center w-full">
            <motion.img
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              src="/struktur.png"
              alt="Struktur Organisasi"
              className="rounded-3xl shadow-2xl max-w-full h-auto border border-white/5"
            />
          </div>
        </motion.div>

      </div>
    </div>
  )
}