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
    nama: "Puspani, M.Pd.",
    jabatan: "Kepala Sekolah",
    foto: "/kepsek.webp", // Sesuaikan nama file fotonya di folder public
  }

  // === DATA BARU: Wakil Kepala Sekolah ===
  const wakasek: PersonelItem[] = [
    {
      nama: "Lulik Ariyani, M.Pd.",
      jabatan: "Waka Kurikulum",
      foto: "/gr24.webp",
    },
    {
      nama: "Sultan, S.Sos.",
      jabatan: "Waka Kesiswaan",
      foto: "/gr33.webp",
    },
    {
      nama: "Suyanto, S.Pd.",
      jabatan: "Waka Sarana & Prasarana",
      foto: "/gr4.webp",
    },
    {
      nama: "Ayi Solihin, M.Pd.",
      jabatan: "Waka Humas",
      foto: "/gr28.webp",
    },
  ]

  const guru: PersonelItem[] = [
    { nama: "Dra. Tri Astuti", jabatan: "Guru Matematika", foto: "/gr7.webp" },
    { nama: "Hj. Nurlaila, S.Pd", jabatan: "Guru Ekonomi", foto: "/gr13.webp" },
    { nama: "Dra. Wahidah, M.Pd.", jabatan: "Guru Fisika", foto: "/gr16.webp" },
    { nama: "Eka Januardi, S.Pd", jabatan: "Guru PJOK", foto: "/gr53.webp" },
    { nama: "Drs. Hasan, M. Pd. I", jabatan: "Guru PAI", foto: "/gr21.webp" },
    { nama: "Muhammad Idris, S.Pd.", jabatan: "Guru Kimia", foto: "/gr45.webp" },
    { nama: "Megaria Tamba, S.Pd.", jabatan: "Guru BHS Jerman", foto: "/gr6.webp" },
    { nama: "Dra. Sri Rahayu R.", jabatan: "Guru BHS Indonesia", foto: "/gr8.webp" },
    { nama: "Dra. Rohani", jabatan: "Guru Sejarah", foto: "/gr23.webp" },
    { nama: "Drs. Amri, M.Pd.", jabatan: "Guru Fisika", foto: "/gr17.webp" },
    { nama: "Ida Sularkoni, S.Pd", jabatan: "Guru matematika", foto: "/gr19.webp" },
    { nama: "Amirudin Siwasiwan, S. Pd.", jabatan: "Guru Geografi", foto: "/gr20.webp" },
    { nama: "Drs. Suleman Pasudi", jabatan: "Guru BHS Inggris", foto: "/gr5.webp" },
    { nama: "Hj. Rita Ariyani, S.Pd", jabatan: "Guru PKN", foto: "/gr9.webp" },
    { nama: "Petrus Pasiakan, S. Pd.", jabatan: "Guru matematika", foto: "/gr12.webp" },
    { nama: "Lulik Ariyani, M.Pd", jabatan: "Guru Kimia", foto: "/gr24.webp" },
    { nama: "Murti, S.Pd", jabatan: "Guru Ekonomi", foto: "/gr.webp" },
    { nama: "Suyanto, S.Pd", jabatan: "Guru Geografi", foto: "/gr4.webp" },
    { nama: "Ayi Solihin, M.Pd.", jabatan: "Guru PAI", foto: "/gr28.webp" },
    { nama: "Tri Wahyuni, S.Pd", jabatan: "Guru Ekonomi", foto: "/gr25.webp" },
    { nama: "Yudho Prasetyo, S.Pd", jabatan: "Guru PJOK", foto: "/gr32.webp" },
    { nama: "Heni Fatmawati, S. Pd.", jabatan: "Guru BK", foto: "/gr49.webp" },
    { nama: "Andi Fadly Amdan, 5. Pd.", jabatan: "Guru Seni Budaya", foto: "/gr54.webp" },
    { nama: "Setian Adi Nugroho, S. Kom.", jabatan: "Guru TIK", foto: "/gr3.webp" },
    { nama: "Sunarti, S.Pd.", jabatan: "Guru BHS Indonesia", foto: "/gr7.webp" },
    { nama: "Sultan, S. Sos", jabatan: "Guru Sosiologi", foto: "/gr33.webp" },
    { nama: "Dasril Hidayat, S. Kom.", jabatan: "Guru TIK", foto: "/gr44.webp" },
    { nama: "Hj. Murdiana, S.Pd.", jabatan: "Guru Prakarya/Ekonomi", foto: "/gr.webp" },
    { nama: "Sri Yunita, S.Pd.", jabatan: "Guru Prakarya/Biologi", foto: "/gr10.webp" },
    { nama: "Tri Nur Janah Kusumaningrum,", jabatan: "Guru Antropologi", foto: "/gr42.webp" },
    { nama: "Aji Utama, S. Pd.", jabatan: "", foto: "/gr18.webp" },
    { nama: "Arfah, S.Pd", jabatan: "Guru Sosiologi", foto: "/gr43.webp" },
    { nama: "Darni, S. Pd.", jabatan: "Guru BK", foto: "/gr38.webp" },
    { nama: "Heriansyah, S. Pd.", jabatan: "Guru Sejarah", foto: "/gr14.webp" },
    { nama: "Liliyanda Megawati, S.Pd", jabatan: "Guru BK", foto: "/gr31.webp" },
    { nama: "Rizka Furqany, M.Pd", jabatan: "Guru matematika", foto: "/gr30.webp" },
    { nama: "Ratna Hastati, S. Pd.", jabatan: "Guru Bhs ingris", foto: "/gr.webp" },
    { nama: "Sukrillah, S. Pd. I", jabatan: "Guru PAI", foto: "/gr27.webp" },
    { nama: "Dame Lasniroha Sitorus, S. Th.", jabatan: "Guru PAK", foto: "/gr35.webp" },
    { nama: "Marpuah, S. Pd.", jabatan: "Guru BHS Indonesia", foto: "/gr47.webp" },
    { nama: "Elok Setyowati, S. Pd.", jabatan: "Guru TIK", foto: "/gr46.webp" },
    { nama: "Sella Lipiantanna, S. Pd.", jabatan: "Guru matematika", foto: "/gr50.webp" },
    { nama: "Juni Alvionita Nainggolan, S.Psi", jabatan: "Guru BK", foto: "/gr34.webp" },
    { nama: "Ikka Desy Fatmawaty, S. Pd", jabatan: "Guru Biologi", foto: "/gr37.webp" },
    { nama: "Nirwana, S. Pd.", jabatan: "Guru Seni Budaya", foto: "/gr.webp" },
    { nama: "Roslindah, S. Pd.", jabatan: "Guru Sosiologi", foto: "/gr51.webp" },
    { nama: "Eka Normawati, S. Pd", jabatan: "Guru Kimia", foto: "/gr48.webp" },
    { nama: "Sri Narti, S. Pd.", jabatan: "Guru matematika", foto: "/gr52.webp" },
    { nama: "Novita Susanti, S.Pd", jabatan: "Guru Fisika", foto: "/gr1.webp" },
    { nama: "Delis Miftahul Janah, S.Pd", jabatan: "Guru PKN", foto: "/gr29.webp" },
    { nama: "Nova Agustina, S.Pd", jabatan: "Guru BHS Indonesia", foto: "/gr26.webp" },
    { nama: "Rodatul Jannah, S. Pd", jabatan: "Guru BHS Inggris", foto: "/gr2.webp" },
    { nama: "Anisa Ulfa, S. Pd", jabatan: "Guru PKN", foto: "/gr11.webp" },
    { nama: "Dita Wardhany, S.Pd", jabatan: "Guru BHS Inggris", foto: "/gr39.webp" },
      ]

  const staf: PersonelItem[] = [
    { nama: "Retno Ayu Lestari", jabatan: "Staf Tata Usaha", foto: "/gr41.webp" },
    { nama: "Umrail", jabatan: "Bendehara", foto: "/gr.webp" },
    { nama: "Mirnawati", jabatan: "Staf Tata Usaha", foto: "/gr36.webp" },
    { nama: "Mudhofir", jabatan: "Staf Tata Usaha", foto: "/gr22.webp" },
    { nama: "Sudawati", jabatan: "Staf Tata Usaha", foto: "/gr40.webp" },   
    { nama: "Anang Aryanto", jabatan: "Staf Tata Usaha", foto: "/gr.webp" },
  ]

  const keamanan: PersonelItem[] = [
    { nama: "Setyajid", jabatan: "Satpam", foto: "/st6.webp" },
    { nama: "Siyono", jabatan: "Satpam", foto: "/st8.webp" },
    { nama: "Eko Supriyono", jabatan: "Satpam", foto: "/st9.webp" },
    { nama: "Surya Pranata Gama", jabatan: "Satpam", foto: "/st7.webp" },
    { nama: "Suwisno", jabatan: "Kebersihan", foto: "/st5.webp" },
    { nama: "Meriya", jabatan: "Kebersihan", foto: "/st2.webp" },
    { nama: "Muari", jabatan: "Kebersihan", foto: "/st3.webp" },
    { nama: "Ika Jadiyati", jabatan: "Kebersihan", foto: "/st1.webp" },
    { nama: "Sonhaji", jabatan: "Kebersihan", foto: "/st4.webp" },
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
            Profil Guru & Staf 
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
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col items-center border border-white/10 max-w-xs w-full">

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
            <span className="text-blue-400"></span> Wakil Kepala Sekolah
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
        <div className="mt-24 mb-12 border-b border-white/10 pt-6 pb-4 block relative flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-blue-500 flex items-center justify-center gap-2">
            <span className="text-amber-400"></span> Dewan Guru
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
        <div className="mt-24 mb-12 border-b border-white/10 pt-6 pb-4 block relative flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-blue-600 flex items-center justify-center gap-2">
            <span className="text-amber-400"></span> Staf Tata Usaha
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
        <div className="mt-24 mb-12 border-b border-white/10 pt-6 pb-4 block relative flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-blue-600 flex items-center justify-center gap-2">
            <span className="text-amber-400"></span> Staf Keamanan & Kebersihan
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