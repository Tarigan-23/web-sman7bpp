"use client"

import React from "react"
import { motion, Variants } from "framer-motion"

export default function SambutanPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto block">
        
        {/* Judul Utama Halaman */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-blue-400 drop-shadow-lg leading-tight">
            Sambutan Kepala Sekolah
          </h1>
          <p className="text-gray-200 text-base md:text-xl mt-2 md:mt-4 font-medium">
            SMA Negeri 7 Balikpapan
          </p>
        </motion.div>

        {/* Section 1: Sambutan Kepala Sekolah */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          // Di mobile padding menggunakan px-4 agar kartu memanfaatkan ruang layar semaksimal mungkin
          className="bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl px-4 py-6 md:p-10 border border-white/10 mb-10 md:mb-16"
        >
          {/* Menggunakan Flexbox arah kolom di mobile (flex-col) dan Grid di desktop (lg:grid-cols-3) */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-10 items-stretch lg:items-center">
            
            {/* 1. JUDUL: Dipaksa berada di paling atas saat di HP */}
            <div className="w-full lg:col-span-2 lg:order-1">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                <span className="text-blue-400">#</span> Kepala Sekolah
              </h2>
            </div>

            {/* 2. FOTO KEPSEK: Diatur Full Kiri-Kanan kontainer di HP */}
            <div className="w-full lg:col-span-1 flex justify-center lg:order-3">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="/kepsek.webp"
                alt="Kepala Sekolah"
                // w-full h-auto memaksa gambar mengisi 100% lebar kontainer kartu secara rapi di HP
                className="w-full lg:w-[300px] lg:h-[400px] object-cover rounded-xl md:rounded-3xl shadow-xl border border-white/10"
              />
            </div>

            {/* 3. NAMA & JABATAN: Tepat di bawah foto untuk versi Mobile */}
            <div className="w-full block lg:hidden my-2">
              <h3 className="text-xl font-bold text-white leading-tight">
                Puspani Bandrang, M. Pd.
              </h3>
              <p className="text-sm text-blue-300 font-medium mt-1">
                Kepala SMA Negeri 7 Balikpapan
              </p>
            </div>

            {/* 4. KATA SAMBUTAN: Berada di paling bawah setelah Nama & Jabatan */}
            <div className="w-full lg:col-span-2 lg:order-2 text-gray-200 leading-relaxed md:leading-8 text-sm md:text-lg text-justify font-normal space-y-4">
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

            {/* Nama & Jabatan khusus tampilan Desktop (Disembunyikan di HP) */}
            <div className="hidden lg:block lg:col-span-2 lg:order-4 mt-4">
              <h3 className="text-2xl font-bold text-white">
                Puspani Bandrang, M. Pd.
              </h3>
              <p className="text-blue-300 font-medium">
                Kepala SMA Negeri 7 Balikpapan
              </p>
            </div>

          </div>
        </motion.div>

        {/* Section 2: Visi & Misi */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16"
        >
          {/* Visi */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border border-white/10 flex flex-col"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
              <span className="text-blue-400">#</span> Visi
            </h2>
            <p className="text-gray-200 leading-relaxed md:leading-8 text-sm md:text-lg text-justify flex-1">
              Terwujudnya Insan Sekolah Yang Religius, Cerdas, Berprestasi, Berwawasan global, Dan Berbudaya Lingkungan.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border border-white/10"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
              <span className="text-blue-400">#</span> Misi
            </h2>
            <ul className="text-gray-200 leading-relaxed md:leading-8 text-sm md:text-lg list-disc pl-5 space-y-2 md:space-y-3 font-normal text-justify">
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
          className="bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-10 border border-white/10 w-full block"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-10 text-center flex items-center justify-center gap-2">
            <span className="text-blue-400">#</span> Struktur Organisasi
          </h2>

          <div className="flex justify-center w-full overflow-x-auto">
            <motion.img
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              src="/struktur.png"
              alt="Struktur Organisasi"
              className="rounded-xl md:rounded-3xl shadow-2xl min-w-[500px] md:min-w-0 max-w-full h-auto border border-white/5"
            />
          </div>
        </motion.div>

      </div>
    </div>
  )
}