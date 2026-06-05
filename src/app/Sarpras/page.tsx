"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FasilitasItem {
  id: string
  nama: string
  kategori: "Belajar" | "Praktikum" | "Fasilitas Umum" | "Teknologi"
  gambar: string
  deskripsi: string
  jumlah?: string
}

export default function SarprasPage() {
  const [filterKategori, setFilterKategori] = useState<string>("Semua")

  const daftarFasilitas: FasilitasItem[] = [
    {
      id: "kelas",
      nama: "Ruang Kelas Teori",
      kategori: "Belajar",
      gambar: "/sarpras/kelas.jpg",
      deskripsi: "Ruang kelas yang nyaman, bersih, dan representatif untuk mendukung kegiatan belajar mengajar harian.",
      jumlah: "29 Ruang Kelas"
    },
    {
      id: "lab-kom",
      nama: "Laboratorium Komputer",
      kategori: "Praktikum",
      gambar: "/sarpras/lab-komputer.jpg",
      deskripsi: "Laboratorium komputer dengan spesifikasi mumpuni untuk praktik pemrograman, ujian berbasis komputer, dan asesmen nasional.",
      jumlah: "3 Laboratorium"
    },
    {
      id: "lab-kimia",
      nama: "Laboratorium Kimia",
      kategori: "Praktikum",
      gambar: "/sarpras/lab-kimia.jpg",
      deskripsi: "Wadah eksperimen ilmiah kimia yang dilengkapi dengan alat peraga, tabung reaksi, dan bahan sediaan yang aman terkendali."
    },
    {
      id: "lab-fisika",
      nama: "Laboratorium Fisika",
      kategori: "Praktikum",
      gambar: "/sarpras/lab-fisika.jpg",
      deskripsi: "Ruang praktikum mekanika, optik, dan kelistrikan untuk menyelaraskan teori di kelas dengan pembuktian empiris."
    },
    {
      id: "lab-bahasa",
      nama: "Laboratorium Bahasa",
      kategori: "Praktikum",
      gambar: "/sarpras/lab-bahasa.jpg",
      deskripsi: "Fasilitas multimedia terintegrasi audio-headset untuk mengasah kemampuan listening dan percakapan bahasa asing."
    },
    {
      id: "perpustakaan",
      nama: "Perpustakaan Utama",
      kategori: "Belajar",
      gambar: "/sarpras/perpustakaan.jpg",
      deskripsi: "Pusat referensi dan jendela ilmu sekolah yang mengoleksi ribuan buku fiksi, non-fiksi, hingga jurnal pendidikan."
    },
    {
      id: "pojok-literasi",
      nama: "Pojok Literasi",
      kategori: "Belajar",
      gambar: "/sarpras/pojok-literasi.jpg",
      deskripsi: "Spot baca santai yang tersebar di beberapa koridor sekolah guna membangun ekosistem membaca yang asyik bagi siswa di waktu istirahat."
    },
    {
      id: "lapangan",
      nama: "Lapangan Olahraga & Upacara",
      kategori: "Fasilitas Umum",
      gambar: "/sarpras/lapangan.jpg",
      deskripsi: "Area terbuka serbaguna yang luas untuk kegiatan upacara bendera, senam, hingga pertandingan basket, futsal, dan voli."
    },
    {
      id: "wifi",
      nama: "Infrastruktur Jaringan Wi-Fi",
      kategori: "Teknologi",
      gambar: "/sarpras/wifi.jpg",
      deskripsi: "Akses internet nirkabel pita lebar (High-Speed Broadband) yang menjangkau seluruh area vital sekolah demi kelancaran riset digital."
    },
    {
      id: "smart-tv",
      nama: "Smart TV Pembelajaran",
      kategori: "Teknologi",
      gambar: "/sarpras/smart-tv.jpg",
      deskripsi: "Media interaktif digital pengganti papan tulis konvensional di kelas-kelas terpilih untuk presentasi multimedia yang dinamis."
    }
  ]

  const fasilitasTersaring = filterKategori === "Semua" 
    ? daftarFasilitas 
    : daftarFasilitas.filter(item => item.kategori === filterKategori)

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/75 z-0"></div>

      {/* Padding pt-24 di HP agar tidak tertabrak navbar mobile */}
      <div className="relative z-10 pt-24 md:pt-36 pb-16 px-4 md:px-6 max-w-7xl mx-auto space-y-8 md:space-y-12">
        
        {/* HERO HEADER */}
        <section className="w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full text-blue-300 border border-blue-400/20 uppercase tracking-wider">
              Fasilitas & Infrastruktur
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-wide mt-2.5 mb-2">
              Sarana <span className="text-blue-400">Prasarana</span>
            </h1>
            <p className="text-gray-300 text-xs md:text-base max-w-2xl mx-auto leading-relaxed px-1">
              SMAN 7 Balikpapan berkomitmen menyediakan lingkungan belajar modern dengan dukungan fasilitas komprehensif demi menunjang kenyamanan akademik siswa.
            </p>
          </motion.div>
        </section>

        {/* CONTROLLER FILTER - Smooth Swipe di HP */}
        <div className="w-full flex justify-start md:justify-center overflow-x-auto no-scrollbar py-2 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex bg-slate-900/60 p-1 rounded-xl border border-white/5 gap-1.5 min-w-max">
            {["Semua", "Belajar", "Praktikum", "Fasilitas Umum", "Teknologi"].map((kat) => (
              <button
                key={kat}
                onClick={() => setFilterKategori(kat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                  filterKategori === kat 
                    ? "bg-blue-500 text-white shadow-md scale-105 font-semibold" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID CARD KONTEN FASILITAS - 1 Kolom di HP, 2 di Tablet, 3 di Desktop */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {fasilitasTersaring.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={item.id}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col group h-full"
              >
                {/* Image Section */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 shrink-0">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600"
                    }}
                  />
                  <span className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-sm border border-white/10 text-[9px] md:text-[10px] text-blue-300 px-2.5 py-0.5 rounded-full font-medium">
                    {item.kategori}
                  </span>
                </div>

                {/* Deskripsi Section */}
                <div className="p-4 md:p-5 flex flex-col flex-1 justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                      {item.nama}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed text-justify">
                      {item.deskripsi}
                    </p>
                  </div>

                  {item.jumlah && (
                    <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] md:text-[11px] text-gray-400 font-medium">
                      <span>Kapasitas/Kuantitas:</span>
                      <span className="text-blue-400 font-semibold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">{item.jumlah}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  )
}