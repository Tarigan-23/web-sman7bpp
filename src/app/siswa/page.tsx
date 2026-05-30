"use client"

import { motion } from "framer-motion"

// 1. Menentukan Interface TypeScript untuk struktur data siswa dan kelas
interface KelasItem {
  namaKelas: string
  siswa: string[]
}

export default function SiswaPage() {
  // Menambahkan tipe data pada array kelas
  const kelas: KelasItem[] = [
    {
      namaKelas: "XI IPS 1",
      siswa: [
        "Ahmad Rizky", "Budi Santoso", "Cahya Putra", "Dinda Ayu", "Eko Saputra",
        "Farhan", "Galih", "Hendra", "Intan", "Joko", "Joko", "Joko", "Joko",
        "Joko", "Joko", "Joko", "Joko", "Joko", "Joko", "Joko", "Joko", "Joko",
        "Joko", "Joko", "Joko", "Joko", "Joko", "Joko", "Joko", "yegar"
      ],
    },
    {
      namaKelas: "XI IPA 1",
      siswa: [
        "Kevin", "Lutfi", "Maya", "Nadia", "Oscar", "Putri", "Qori", "Rama", "Salsa", "Taufik"
      ],
    },
    {
      namaKelas: "XI IPA 2",
      siswa: [
        "Kevin", "Lutfi", "Maya", "Nadia", "Oscar", "Putri", "Qori", "Rama", "Salsa", "Taufik",
        "Kevin", "Lutfi", "Maya", "Nadia", "Oscar", "Putri", "Qori", "Rama", "Salsa", "Taufik"
      ],
    },
  ]

  return (
    <div
      // Menggunakan pt-40 untuk memberikan ruang kosong yang pas di bawah Navbar Anda
      className="min-h-screen bg-cover bg-center bg-fixed pt-40 pb-20 px-6 relative w-full"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      {/* Overlay Gelap di latar belakang */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* Judul Halaman */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-400 tracking-tight">
            Daftar Siswa
          </h1>
          <p className="text-gray-200 mt-4 text-2xl md:text-3xl font-medium">
            SMA Negeri 7 Balikpapan
          </p>
        </div>

        {/* Grid Card Kelas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {kelas.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
          
              className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/10 h-full"
            >
              {/* Nama kelas diubah menjadi text-blue-400 agar menyala di latar belakang gelap */}
              <h2 className="text-3xl font-bold text-blue-400 mb-6 border-b border-white/20 pb-3">
                {item.namaKelas}
              </h2>

              {/* List nama-nama siswa */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {item.siswa.map((nama, i) => (
                  <div
                    key={i}
                    
                    className="bg-white/5 rounded-lg px-4 py-2 hover:bg-blue-500/20 transition border border-white/5"
                  >
                    {/* Teks nama diubah menjadi text-gray-200 agar kontras dan mudah dibaca */}
                    <p className="text-sm font-medium text-gray-200">
                      {i + 1}. {nama}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
