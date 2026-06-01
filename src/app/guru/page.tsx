"use client"

import { motion } from "framer-motion"

// Interface TypeScript untuk Guru & Staf
interface PersonelItem {
  nama: string
  jabatan: string // Menggunakan 'jabatan' agar fleksibel untuk Mapel Guru maupun Posisi Staf
  foto: string
}

export default function GuruPage() {
  // === DATA BARU: Kepala Sekolah ===
  const kepalaSekolah: PersonelItem = {
    nama: "Drs. H. Sukarni, M.Pd.",
    jabatan: "Kepala Sekolah",
    foto: "/kepsek.webp", // Sesuaikan nama file fotonya di folder public
  }

  // === DATA BARU: Wakil Kepala Sekolah ===
  const wakasek: PersonelItem[] = [
    {
      nama: "Supriyadi, S.Pd., M.Si.",
      jabatan: "Waka Kurikulum",
      foto: "/waka1.webp",
    },
    {
      nama: "Ekawati, S.Pd.",
      jabatan: "Waka Kesiswaan",
      foto: "/waka2.webp",
    },
    {
      nama: "Irwan Syahputra, M.T.",
      jabatan: "Waka Sarana & Prasarana",
      foto: "/waka3.webp",
    },
    {
      nama: "Siti Zubaidah, S.Pd.",
      jabatan: "Waka Humas",
      foto: "/waka4.webp",
    },
  ]

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

  const staf: PersonelItem[] = [
    { nama: "Hasan Basri, A.Md.", jabatan: "Kepala Tata Usaha", foto: "/st1.webp" },
    { nama: "Rizky Amalia, S.E.", jabatan: "Bendahara Sekolah", foto: "/gr54.webp" },
    { nama: "Supriyanto", jabatan: "Staf Administrasi & Dapodik", foto: "/gr1.webp" },
    { nama: "Tri Utami, S.Sos.", jabatan: "Pustakawan", foto: "/gr2.webp" },
  ]

  const keamanan: PersonelItem[] = [
    { nama: "Slamet Rahardjo", jabatan: "Komandan Regu Keamanan", foto: "/sc1.webp" },
    { nama: "Agus Setiawan", jabatan: "Staf Keamanan & Ketertiban", foto: "/sc2.webp" },
    { nama: "Roni Wijaya", jabatan: "Petugas Jaga Malam", foto: "/sc3.webp" },
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
            Profil Manajemen & Tenaga Pendidik
          </h1>
          <p className="text-gray-200 text-2xl mt-4 font-medium">
            SMA Negeri 7 Balikpapan
          </p>
        </div>

        {/* ================= SECTION 0A: KEPALA SEKOLAH ================= */}
        {/* MODIFIKASI: Mengubah ukuran max-w-xs agar lebar kartu sejajar sempurna dengan Wakasek */}
        <div className="flex justify-center mb-20 relative block">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col items-center border border-white/10 max-w-xs w-full"
          >
            <div className="text-center mb-3 bg-blue-500/20 text-blue-300 font-bold px-3 py-1 rounded-full text-xs tracking-wide uppercase border border-blue-400/20">
              Pimpinan Tertinggi
            </div>
            {/* MODIFIKASI: Tinggi foto dipotong jadi h-[260px] supaya proporsional */}
            <div className="relative w-full h-[260px] bg-black/20 rounded-xl overflow-hidden shadow-inner">
              <img
                src={kepalaSekolah.foto}
                alt={kepalaSekolah.nama}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-white leading-snug">
                {kepalaSekolah.nama}
              </h2>
              <p className="text-blue-400 font-semibold text-sm mt-1 uppercase tracking-wider">
                {kepalaSekolah.jabatan}
              </p>
            </div>
          </motion.div>
        </div>


        {/* ================= SECTION 0B: WAKIL KEPALA SEKOLAH ================= */}
        <div className="mb-12 border-b border-white/10 pb-4">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-400">#</span> Wakil Kepala Sekolah
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full px-2 relative mb-24">
          {wakasek.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col justify-between h-full border border-white/10"
            >
              <div className="relative w-full h-[240px] bg-black/20 rounded-xl overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-white leading-snug line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                  {item.nama}
                </h3>
                <p className="text-cyan-400 font-semibold text-xs mt-1 uppercase tracking-wider">
                  {item.jabatan}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        {/* ================= SECTION 1: DAFTAR GURU ================= */}
        <div className="mb-12 border-b border-white/10 pb-4">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-400">#</span> Daftar Guru
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
              <div className="relative w-full h-[280px] bg-black/20 rounded-xl overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-full h-full object-cover object-top"
                />
              </div>
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
        <div className="mt-24 mb-12 border-b border-white/10 pt-6 pb-4 block relative">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-400">#</span> Staf Tata Usaha & Kependidikan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-2 relative mb-24">
          {staf.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col justify-between h-full border border-white/10"
            >
              <div className="relative w-full h-[280px] bg-black/20 rounded-xl overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-full h-full object-cover object-top"
                />
              </div>
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


        {/* ================= SECTION 3: TIM KEAMANAN ================= */}
        <div className="mt-24 mb-12 border-b border-white/10 pt-6 pb-4 block relative">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400">#</span> Tim Keamanan & Jaga Malam
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-2 relative">
          {keamanan.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col justify-between h-full border border-white/10"
            >
              <div className="relative w-full h-[280px] bg-black/20 rounded-xl overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white leading-snug line-clamp-1">
                  {item.nama}
                </h3>
                <p className="text-amber-400 font-semibold text-sm mt-1">
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