"use client"

import { motion } from "framer-motion"
import Image from "next/image" 

// Interface TypeScript untuk Guru & Staf
interface PersonelItem {
  nama: string
  jabatan: string 
  foto: string
}

export default function GuruPage() {
  // === DATA BARU: Kepala Sekolah ===
  const kepalaSekolah: PersonelItem = {
    nama: "Puspani, M.Pd.",
    jabatan: "Kepala Sekolah",
    foto: "/kepsek.webp", 
  }

  // === DATA BARU: Wakil Kepala Sekolah ===
  const wakasek: PersonelItem[] = [
    {
      nama: "Lulik Ariyani, M.Pd.",
      jabatan: "Waka Kurikulum",
      foto: "/guru/gr24.webp",
    },
    {
      nama: "Sultan, S.Sos.",
      jabatan: "Waka Kesiswaan",
      foto: "/guru/gr33.webp",
    },
    {
      nama: "Petrus Pasiakan, S. Pd.",
      jabatan: "Waka Sarana & Prasarana",
      foto: "/guru/gr12.webp",
    },
    {
      nama: "Ayi Solihin, M.Pd.",
      jabatan: "Waka Humas",
      foto: "/guru/gr28.webp",
    },
  ]

  const guru: PersonelItem[] = [
    { nama: "Hj. Nurlaila, S.Pd", jabatan: "Guru Ekonomi", foto: "/guru/gr13.webp" },
    { nama: "Dra. Wahidah, M.Pd.", jabatan: "Guru Fisika", foto: "/guru/gr16.webp" },
    { nama: "Eka Januardi, S.Pd", jabatan: "Guru PJOK", foto: "/guru/gr53.webp" },
    { nama: "Drs. Hasan, M. Pd. I", jabatan: "Guru PAI", foto: "/guru/gr21.webp" },
    { nama: "Muhammad Idris, S.Pd.", jabatan: "Guru Kimia", foto: "/guru/gr45.webp" },
    { nama: "Megaria Tamba, S.Pd.", jabatan: "Guru BHS Jerman", foto: "/guru/gr6.webp" },
    { nama: "Dra. Sri Rahayu R.", jabatan: "Guru BHS Indonesia", foto: "/guru/gr8.webp" },
    { nama: "Dra. Rohani", jabatan: "Guru Sejarah", foto: "/guru/gr23.webp" },
    { nama: "Drs. Amri, M.Pd.", jabatan: "Guru Fisika", foto: "/guru/gr17.webp" },
    { nama: "Ida Sularkoni, S.Pd", jabatan: "Guru matematika", foto: "/guru/gr19.webp" },
    { nama: "Amirudin Siwasiwan, S. Pd.", jabatan: "Guru Geografi", foto: "/guru/gr20.webp" },
    { nama: "Drs. Suleman Pasudi", jabatan: "Guru BHS Inggris", foto: "/guru/gr5.webp" },
    { nama: "Hj. Rita Ariyani, S.Pd", jabatan: "Guru PKN", foto: "/guru/gr9.webp" },
    { nama: "Petrus Pasiakan, S. Pd.", jabatan: "Guru matematika", foto: "/guru/gr12.webp" },
    { nama: "Lulik Ariyani, M.Pd", jabatan: "Guru Kimia", foto: "/guru/gr24.webp" },
    { nama: "Murti, S.Pd", jabatan: "Guru Ekonomi", foto: "/guru/MURTI.png" },
    { nama: "Suyanto, S.Pd", jabatan: "Guru Geografi", foto: "/guru/gr4.webp" },
    { nama: "Ayi Solihin, M.Pd.", jabatan: "Guru PAI", foto: "/guru/gr28.webp" },
    { nama: "Tri Wahyuni, S.Pd", jabatan: "Guru Ekonomi", foto: "/guru/gr25.webp" },
    { nama: "Yudho Prasetyo, S.Pd", jabatan: "Guru PJOK", foto: "/guru/gr32.webp" },
    { nama: "Heni Fatmawati, S. Pd.", jabatan: "Guru BK", foto: "/guru/gr49.webp" },
    { nama: "Andi Fadly Amdan, S. Pd.", jabatan: "Guru Seni Budaya", foto: "/guru/gr54.webp" },
    { nama: "Setian Adi Nugroho, S. Kom.", jabatan: "Guru TIK", foto: "/guru/gr3.webp" },
    { nama: "Sunarti, S.Pd.", jabatan: "Guru BHS Indonesia", foto: "/guru/gr7.webp" },
    { nama: "Sultan, S. Sos", jabatan: "Guru Sosiologi", foto: "/guru/gr33.webp" },
    { nama: "Dasril Hidayat, S. Kom.", jabatan: "Guru TIK", foto: "/guru/gr44.webp" },
    { nama: "Hj. Murdiana, S.Pd.", jabatan: "Guru Prakarya/Ekonomi", foto: "/guru/murdiana.png" },
    { nama: "Sri Yunita, S.Pd.", jabatan: "Guru Prakarya/Biologi", foto: "/guru/gr10.webp" },
    { nama: "Tri Nur Janah Kusumaningrum,", jabatan: "Guru Antropologi", foto: "/guru/gr42.webp" },
    { nama: "Aji Utama, S. Pd.", jabatan: "Guru PJOK", foto: "/guru/gr18.webp" },
    { nama: "Arfah, S.Pd", jabatan: "Guru Sosiologi", foto: "/guru/gr43.webp" },
    { nama: "Darni, S. Pd.", jabatan: "Guru BK", foto: "/guru/gr38.webp" },
    { nama: "Heriansyah, S. Pd.", jabatan: "Guru Sejarah", foto: "/guru/gr14.webp" },
    { nama: "Liliyanda Megawati, S.Pd", jabatan: "Guru BK", foto: "/guru/gr31.webp" },
    { nama: "Rizka Furqany, M.Pd", jabatan: "Guru matematika", foto: "/guru/gr30.webp" },
    { nama: "Ratna Hastati, S. Pd.", jabatan: "Guru Bhs ingris", foto: "/guru/ratna.png" },
    { nama: "Sukrillah, S. Pd. I", jabatan: "Guru PAI", foto: "/guru/gr27.webp" },
    { nama: "Dame Lasniroha Sitorus, S. Th.", jabatan: "Guru PAK", foto: "/guru/gr35.webp" },
    { nama: "Marpuah, S. Pd.", jabatan: "Guru BHS Indonesia", foto: "/guru/gr47.webp" },
    { nama: "Elok Setyowati, S. Pd.", jabatan: "Guru TIK", foto: "/guru/gr46.webp" },
    { nama: "Sella Lipiantanna, S. Pd.", jabatan: "Guru matematika", foto: "/guru/gr50.webp" },
    { nama: "Juni Alvionita Nainggolan, S.Psi", jabatan: "Guru BK", foto: "/guru/gr34.webp" },
    { nama: "Ikka Desy Fatmawaty, S. Pd", jabatan: "Guru Biologi", foto: "/guru/gr37.webp" },
    { nama: "Nirwana, S. Pd.", jabatan: "Guru Seni Budaya", foto: "/guru/nirwana.png" },
    { nama: "Roslindah, S. Pd.", jabatan: "Guru Sosiologi", foto: "/guru/gr51.webp" },
    { nama: "Eka Normawati, S. Pd", jabatan: "Guru Kimia", foto: "/guru/gr48.webp" },
    { nama: "Sri Narti, S. Pd.", jabatan: "Guru matematika", foto: "/guru/gr52.webp" },
    { nama: "Novita Susanti, S.Pd", jabatan: "Guru Fisika", foto: "/guru/gr1.webp" },
    { nama: "Delis Miftahul Janah, S.Pd", jabatan: "Guru PKN", foto: "/guru/gr29.webp" },
    { nama: "Nova Agustina, S.Pd", jabatan: "Guru BHS Indonesia", foto: "/guru/gr26.webp" },
    { nama: "Rodatul Jannah, S. Pd", jabatan: "Guru BHS Inggris", foto: "/guru/gr2.webp" },
    { nama: "Anisa Ulfa, S. Pd", jabatan: "Guru PKN", foto: "/guru/gr11.webp" },
    { nama: "Dita Wardhany, S.Pd", jabatan: "Guru BHS Inggris", foto: "/guru/gr39.webp" },
  ]

  const staf: PersonelItem[] = [
    { nama: "Retno Ayu Lestari", jabatan: "Staf Tata Usaha", foto: "/guru/gr41.webp" },
    { nama: "Umrail", jabatan: "Bendehara", foto: "/guru/UMRAIL.png" },
    { nama: "Mirnawati", jabatan: "Staf Tata Usaha", foto: "/guru/gr36.webp" },
    { nama: "Mudhofir", jabatan: "Staf Tata Usaha", foto: "/guru/gr22.webp" },
    { nama: "Sudawati", jabatan: "Staf Tata Usaha", foto: "/guru/gr40.webp" },   
    { nama: "Anang Aryanto", jabatan: "Staf Tata Usaha", foto: "/guru/ANANG.png" },
  ]

  const keamanan: PersonelItem[] = [
    { nama: "Setyajid", jabatan: "Satpam", foto: "/guru/st6.webp" },
    { nama: "Siyono", jabatan: "Satpam", foto: "/guru/st8.webp" },
    { nama: "Eko Supriyono", jabatan: "Satpam", foto: "/guru/st9.webp" },
    { nama: "Surya Pranata Gama", jabatan: "Satpam", foto: "/guru/st7.webp" },
    { nama: "Suwisno", jabatan: "Kebersihan", foto: "/guru/st5.webp" },
    { nama: "Meriya", jabatan: "Kebersihan", foto: "/guru/st2.webp" },
    { nama: "Muari", jabatan: "Kebersihan", foto: "/guru/st3.webp" },
    { nama: "Sonhaji", jabatan: "Kebersihan", foto: "/guru/st4.webp" },
  ]

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed py-6 md:py-10 px-3 md:px-6 relative w-full"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      {/* Overlay Background */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Konten Utama */}
      <div className="relative z-10 w-full max-w-7xl mx-auto block pt-6 md:pt-10">
        
        {/* Judul Halaman - Responsif */}
        <div className="text-center mb-12 md:mb-16 block relative">
          <h1 className="text-3xl md:text-6xl font-bold text-blue-400 tracking-tight leading-snug md:leading-normal">
            Profil Guru & Staf 
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl mt-2 md:mt-4 font-medium">
            SMA Negeri 7 Balikpapan
          </p>
        </div>

        {/* ================= SECTION 0A: KEPALA SEKOLAH ================= */}
        <div className="flex justify-center mb-16 md:mb-20 relative block px-4">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-3 md:p-4 flex flex-col items-center border border-white/10 max-w-[220px] md:max-w-xs w-full"
          >
            <div className="relative w-full h-[180px] md:h-[260px] bg-black/20 rounded-xl overflow-hidden shadow-inner">
              <Image
                src={kepalaSekolah.foto}
                alt={kepalaSekolah.nama}
                fill
                sizes="(max-width: 768px) 220px, 320px"
                priority // Foto teratas diberikan prioritas pemuatan instan
                className="object-cover object-top"
              />
            </div>
            <div className="mt-3 md:mt-4 text-center">
              <h2 className="text-sm md:text-xl font-bold text-white leading-snug line-clamp-2">
                {kepalaSekolah.nama}
              </h2>
              <p className="text-blue-400 font-semibold text-[10px] md:text-sm mt-1 uppercase tracking-wider">
                {kepalaSekolah.jabatan}
              </p>
            </div>
          </motion.div>
        </div>


        {/* ================= SECTION 0B: WAKIL KEPALA SEKOLAH ================= */}
        <div className="mt-16 md:mt-24 mb-8 md:mb-12 border-b border-white/10 pt-4 pb-3 block relative flex flex-col items-center justify-center text-center">
          <h2 className="text-xl md:text-3xl font-bold text-blue-400 flex items-center justify-center gap-2">
            Wakil Kepala Sekolah
          </h2>
        </div>

        {/* Menggunakan grid-cols-3 di HP dan md:grid-cols-4 di Desktop */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 w-full relative mb-16 md:mb-24">
          {wakasek.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl p-2 md:p-4 flex flex-col justify-between h-full border border-white/10"
            >
              <div className="relative w-full h-[140px] md:h-[240px] bg-black/20 rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  fill
                  sizes="(max-width: 768px) 33vw, 25vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-2 md:mt-4 text-center flex-grow flex flex-col justify-between">
                <h3 className="text-[11px] md:text-lg font-bold text-white leading-snug line-clamp-2 min-h-[2.5rem] md:min-h-[3.5rem] flex items-center justify-center">
                  {item.nama}
                </h3>
                <p className="text-cyan-400 font-semibold text-[9px] md:text-xs mt-1 uppercase tracking-wider">
                  {item.jabatan}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        {/* ================= SECTION 1: DAFTAR GURU ================= */}
        <div className="mt-16 md:mt-24 mb-8 md:mb-12 border-b border-white/10 pt-4 pb-3 block relative flex flex-col items-center justify-center text-center">
          <h2 className="text-xl md:text-3xl font-bold text-blue-400 flex items-center justify-center gap-2">
            Dewan Guru
          </h2>
        </div>

        {/* Menggunakan grid-cols-3 di HP dan md:grid-cols-4 di Desktop */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 w-full relative mb-16 md:mb-24">
          {guru.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl p-2 md:p-4 flex flex-col justify-between h-full border border-white/10"
            >
              <div className="relative w-full h-[140px] md:h-[280px] bg-black/20 rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  fill
                  sizes="(max-width: 768px) 33vw, 25vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-2 md:mt-4 text-center">
                {/* Di HP teks diperkecil dan dikunci agar tidak merusak tinggi kotak */}
                <h3 className="text-[11px] md:text-lg font-bold text-white leading-tight md:leading-snug line-clamp-2 min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center">
                  {item.nama}
                </h3>
                <p className="text-blue-300 font-medium text-[9px] md:text-sm mt-1 line-clamp-1">
                  {item.jabatan}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        {/* ================= SECTION 2: DAFTAR STAF ================= */}
        <div className="mt-16 md:mt-24 mb-8 md:mb-12 border-b border-white/10 pt-4 pb-3 block relative flex flex-col items-center justify-center text-center">
          <h2 className="text-xl md:text-3xl font-bold text-blue-400 flex items-center justify-center gap-2">
            Staf Tata Usaha
          </h2>
        </div>

        {/* Menggunakan grid-cols-3 di HP dan md:grid-cols-4 di Desktop */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 w-full relative mb-16 md:mb-24">
          {staf.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl p-2 md:p-4 flex flex-col justify-between h-full border border-white/10"
            >
              <div className="relative w-full h-[140px] md:h-[280px] bg-black/20 rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  fill
                  sizes="(max-width: 768px) 33vw, 25vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-2 md:mt-4 text-center">
                <h3 className="text-[11px] md:text-lg font-bold text-white leading-tight md:leading-snug line-clamp-2 min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center">
                  {item.nama}
                </h3>
                <p className="text-emerald-400 font-medium text-[9px] md:text-sm mt-1 line-clamp-1">
                  {item.jabatan}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= SECTION 3: TIM KEAMANAN ================= */}
        <div className="mt-16 md:mt-24 mb-8 md:mb-12 border-b border-white/10 pt-4 pb-3 block relative flex flex-col items-center justify-center text-center">
          <h2 className="text-xl md:text-3xl font-bold text-blue-400 flex items-center justify-center gap-2">
            Staf Keamanan & Kebersihan
          </h2>
        </div>

        {/* Menggunakan grid-cols-3 di HP dan md:grid-cols-4 di Desktop */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 w-full relative">
          {keamanan.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl p-2 md:p-4 flex flex-col justify-between h-full border border-white/10"
            >
              <div className="relative w-full h-[140px] md:h-[280px] bg-black/20 rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  fill
                  sizes="(max-width: 768px) 33vw, 25vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-2 md:mt-4 text-center">
                <h3 className="text-[11px] md:text-lg font-bold text-white leading-tight md:leading-snug line-clamp-2 min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center">
                  {item.nama}
                </h3>
                <p className="text-amber-400 font-medium text-[9px] md:text-sm mt-1 line-clamp-1">
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