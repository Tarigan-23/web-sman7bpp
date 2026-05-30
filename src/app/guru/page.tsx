"use client"

import { motion } from "framer-motion"

// Interface TypeScript untuk Guru & Staf
interface PersonelItem {
  nama: string
  jabatan: string // Menggunakan 'jabatan' agar fleksibel untuk Mapel Guru maupun Posisi Staf
  foto: string
}

export default function GuruPage() {
  const guru: PersonelItem[] = [
    { nama: "Drs. Ahmad Fauzi", jabatan: "Matematika", foto: "/gr1.webp" },
    { nama: "Siti Rahmawati, S.Pd", jabatan: "Bahasa Indonesia", foto: "/gr2.webp" },
    { nama: "Budi Santoso, S.Kom", jabatan: "Informatika", foto: "/gr3.webp" },
    { nama: "Nur Aini, S.Pd", jabatan: "Bahasa Inggris", foto: "/gr4.webp" },
    { nama: "Andi Saputra, S.Pd", jabatan: "Fisika", foto: "/gr5.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr7.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr8.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr9.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr10.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr11.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr12.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr13.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr14.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr15.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr16.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr17.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr18.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr19.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr20.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr21.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr22.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr23.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr24.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr25.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr26.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr27.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr28.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr29.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr30.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr31.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr32.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr33.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr34.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr35.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr36.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr37.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr38.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr39.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr40.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr41.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr42.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr43.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr44.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr45.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr46.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr47.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr48.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr49.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr50.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr51.webp" },
    { nama: "Dewi Lestari, S.Pd", jabatan: "Kimia", foto: "/gr52.webp" },
  ]

  // === DATA BARU: Daftar Staf Tata Usaha / Kependidikan ===
  const staf: PersonelItem[] = [
    {
      nama: "Hasan Basri, A.Md.",
      jabatan: "Kepala Tata Usaha",
      foto: "/st1.webp", // Silakan sesuaikan nama file gambarnya di folder public
    },
    {
      nama: "Rizky Amalia, S.E.",
      jabatan: "Bendahara Sekolah",
      foto: "/gr54.webp",
    },
    {
      nama: "Supriyanto",
      jabatan: "Staf Administrasi & Dapodik",
      foto: "/gr1.webp",
    },
    {
      nama: "Tri Utami, S.Sos.",
      jabatan: "Pustakawan",
      foto: "/gr2.webp",
    },
  ]

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed py-10 px-6 relative w-full"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      {/* Overlay Background */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Konten Utama */}
      <div className="relative z-10 w-full max-w-6xl mx-auto block pt-10">
        
        {/* Judul Halaman */}
        <div className="text-center mb-16 block relative">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-400 tracking-tight leading-normal">
            Profil Tenaga Pendidik
          </h1>
          <p className="text-gray-200 text-2xl mt-4 font-medium">
            SMA Negeri 7 Balikpapan
          </p>
        </div>

        {/* ================= SECTION 1: DAFTAR GURU ================= */}
        <div className="mb-12 border-b border-white/10 pb-4">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-400">#</span> Daftar Guru Pengajar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-2 relative mb-24">
          {guru.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col justify-between h-full border border-white/10"
            >
              {/* Wadah Foto Guru */}
              <div className="relative w-full h-[280px] bg-black/20 rounded-xl overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-full h-full object-cover object-top scale-100"
                />
              </div>

              {/* Informasi Guru */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white leading-snug line-clamp-1">
                  {item.nama}
                </h3>
                <p className="text-blue-300 font-semibold text-sm mt-1">
                  {item.jabatan}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        {/* ================= SECTION 2: DAFTAR STAF ================= */}
        {/* PERBAIKAN: Menambahkan mt-24 (Margin Top) dan pt-6 agar memberikan jarak yang pas dari kartu atasnya */}
        <div className="mt-24 mb-12 border-b border-white/10 pt-6 pb-4 block relative">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-400">#</span> Staf Tata Usaha & Kependidikan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-2 relative">
          {staf.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col justify-between h-full border border-white/10"
            >
              {/* Wadah Foto Staf */}
              <div className="relative w-full h-[280px] bg-black/20 rounded-xl overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-full h-full object-cover object-top scale-100"
                />
              </div>

              {/* Informasi Staf */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white leading-snug line-clamp-1">
                  {item.nama}
                </h3>
                <p className="text-emerald-400 font-semibold text-sm mt-1">
                  {item.jabatan}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}