"use client"

import React, { useState } from "react"
// Mengimpor motion dan AnimatePresence dari framer-motion untuk animasi grid dan modal popup
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

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
  // State untuk melacak gambar fasilitas mana yang sedang diklik untuk dilihat detailnya
  const [activeImageDetail, setActiveImageDetail] = useState<FasilitasItem | null>(null)

  const daftarFasilitas: FasilitasItem[] = [
    {
      id: "Masjid",
      nama: "Masjid Al-Khawarizmi",
      kategori: "Fasilitas Umum",
      gambar: "/sarpras/masjid.jpeg",
      deskripsi: "Pusat ibadah dan kegiatan keagamaan seluruh warga sekolah yang bersih, sejuk, serta nyaman.",
      jumlah: "1 Unit"
    },
    {
      id: "tu",
      nama: "Tata Usaha",
      kategori: "Fasilitas Umum",
      gambar: "/sarpras/2.jpeg",
      deskripsi: "Pusat Data dan Informasi"
    },
    {
      id: "literasi",
      nama: "Aula Literasi",
      kategori: "Fasilitas Umum",
      gambar: "/sarpras/16.jpeg",
      deskripsi: "Tempat Yang Adem dan Nyaman"
    },
    {
      id: "kelas",
      nama: "Ruang Kelas Teori",
      kategori: "Belajar",
      gambar: "/sarpras/15.jpeg",
      deskripsi: "Ruang kelas yang nyaman, bersih, dan representatif untuk mendukung kegiatan belajar mengajar harian.",
      jumlah: "29 Ruang Kelas"
    },
    {
      id: "lab-kom",
      nama: "Laboratorium Komputer",
      kategori: "Praktikum",
      gambar: "/sarpras/12.jpeg",
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
      gambar: "/sarpras/11.jpeg",
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
      id: "pojok Literasi",
      nama: "Pojok Literasi",
      kategori: "Belajar",
      gambar: "/sarpras/literasi.jpeg",
      deskripsi: "Spot baca santai yang tersebar di beberapa koridor sekolah guna membangun ekosistem membaca yang asyik bagi siswa di waktu istirahat."
    },
    {
      id: "Pojok Numerasi",
      nama: "Pojok Numerasi",
      kategori: "Belajar",
      gambar: "/sarpras/nut.jpeg",
      deskripsi: "Spot baca santai yang tersebar di beberapa koridor sekolah guna membangun ekosistem membaca yang asyik bagi siswa di waktu istirahat."
    },
    {
      id: "lapangan",
      nama: "Lapangan Olahraga & Upacara",
      kategori: "Fasilitas Umum",
      gambar: "/sarpras/8.jpeg",
      deskripsi: "Area terbuka serbaguna yang luas untuk kegiatan upacara bendera, senam, hingga pertandingan basket, futsal, dan voli."
    },
    {
      id: "wifi",
      nama: "Infrastruktur Jaringan Wi-Fi",
      kategori: "Teknologi",
      gambar: "/sarpras/wifi.jpg",
      deskripsi: "Akses internet nirkabel pita lebar (High-Speed Broadband) yang menjangkau seluruh area vital sekolah demi kelancaran riset digital.",
      jumlah: "Seluruh Area"
    },
    {
      id: "smart-tv",
      nama: "Smart TV Pembelajaran",
      kategori: "Teknologi",
      gambar: "/sarpras/3.jpeg",
      deskripsi: "Media interaktif digital pengganti papan tulis konvensional di kelas-kelas terpilih untuk presentasi multimedia yang dinamis."
    },
    {
      id: "gazebo",
      nama: "Gazebo",
      kategori: "Fasilitas Umum",
      gambar: "/sarpras/18.jpeg",
      deskripsi: "Tempat Untuk Belajar dan Bersantai."
    },
    {
      id: "Toilet",
      nama: "Toilet",
      kategori: "Fasilitas Umum",
      gambar: "/sarpras/14.jpeg",
      deskripsi: "Kamarmandi yang bersih dan nyaman."
    }
  ]

  const fasilitasTersaring = filterKategori === "Semua" 
    ? daftarFasilitas 
    : daftarFasilitas.filter(item => item.kategori === filterKategori)

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden select-none">
      
      {/* ================= BACKGROUND ORNAMEN SERAGAM KONSISTEN ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg3.jpeg" // Menggunakan file background terpusat (.jpg)
          alt="Latar Belakang SMANJU"
          fill
          priority
          className="object-cover object-center opacity-30 fixed"
        />
        {/* Overlay backdrop konsisten agar teks tajam dan kontras */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-black/75 to-slate-950" />
        
        {/* Efek Lampu Sorot Gradasi Sinematik (Glow Ornamen) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto space-y-8 md:space-y-12">
        
        {/* HERO HEADER - SUDAH DISERAGAMKAN ANIMASI & STRUKTUR JUDULNYA */}
        <section className="w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-400/20 uppercase tracking-widest">
              Fasilitas & Infrastruktur
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mt-3 mb-1 leading-tight uppercase">
              Sarana <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Prasarana</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-1">
              SMAN 7 Balikpapan berkomitmen menyediakan lingkungan belajar modern dengan dukungan fasilitas komprehensif demi menunjang kenyamanan akademik siswa.
            </p>
          </motion.div>
        </section>

        {/* CONTROLLER FILTER - Smooth Swipe di HP */}
        <div className="w-full flex justify-start md:justify-center overflow-x-auto no-scrollbar py-2 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex bg-slate-900/50 p-2 rounded-xl md:rounded-2xl border border-white/5 gap-2 min-w-max backdrop-blur-md shadow-xl">
            {["Semua", "Belajar", "Praktikum", "Fasilitas Umum", "Teknologi"].map((kat) => (
              <button
                key={kat}
                onClick={() => setFilterKategori(kat)}
                className={`px-4 py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                  filterKategori === kat 
                    ? "bg-blue-600 text-white shadow-md font-semibold scale-[1.02]" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID CARD KONTEN FASILITAS */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {fasilitasTersaring.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl flex flex-col group h-full justify-between sm:hover:border-white/20 transition duration-300"
              >
                <div>
                  {/* Image Section - Ditambahkan cursor-zoom-in & pemicu klik modal */}
                  <div 
                    onClick={() => setActiveImageDetail(item)}
                    className="relative aspect-video w-full overflow-hidden bg-black/20 shrink-0 cursor-zoom-in group/img"
                  >
                    <img
                      src={item.gambar}
                      alt={item.nama}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600"
                      }}
                    />
                    <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm border border-white/10 text-[10px] text-blue-300 px-2.5 py-0.5 rounded-full font-medium uppercase tracking-wider">
                      {item.kategori}
                    </span>
                    
                    {/* Overlay Penanda bahwa gambar bisa di-zoom */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                        🔍 Lihat Gambar Detail
                      </span>
                    </div>
                  </div>

                  {/* Deskripsi Section */}
                  <div className="p-5 md:p-6 space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-base md:text-lg font-bold text-slate-100 tracking-wide group-hover:text-blue-400 transition-colors leading-snug">
                        {item.nama}
                      </h3>
                      <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed text-justify">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Kuantitas/Jumlah di bagian bawah kartu */}
                {item.jumlah && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 shrink-0">
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span>Kapasitas / Kuantitas:</span>
                      <span className="text-blue-400 font-semibold bg-blue-500/10 px-2.5 py-0.5 rounded-md border border-blue-500/20">{item.jumlah}</span>
                    </div>
                  </div>
                )}

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

     
      <AnimatePresence>
        {activeImageDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-text">
            
            {/* Overlay gelap di belakang pop-up modal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageDetail(null)} // Klik area luar untuk menutup
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Container Box Lightbox */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              {/* Tombol Silang Pojok Kanan Atas */}
              <button
                onClick={() => setActiveImageDetail(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white text-base hover:bg-red-500 hover:border-red-500 transition duration-200"
              >
                ✕
              </button>

              {/* Box Tampilan Utama Gambar Resolusi Besar */}
              <div className="w-full flex-1 bg-black/40 relative flex items-center justify-center overflow-hidden min-h-[30vh] p-2">
                <img
                  src={activeImageDetail.gambar}
                  alt={activeImageDetail.nama}
                  className="max-w-full max-h-[55vh] md:max-h-[60vh] object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Keterangan Detail Singkat di Bawah Gambar */}
              <div className="p-5 md:p-6 bg-slate-950/80 border-t border-white/10 space-y-2 flex-shrink-0">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] bg-blue-500/10 text-blue-300 font-bold px-2.5 py-0.5 rounded-md border border-blue-500/20 uppercase tracking-widest">
                    {activeImageDetail.kategori}
                  </span>
                  {activeImageDetail.jumlah && (
                    <span className="text-xs text-slate-400 font-medium">
                      Kuantitas: <strong className="text-blue-400">{activeImageDetail.jumlah}</strong>
                    </span>
                  )}
                </div>
                
                <h2 className="text-lg md:text-xl font-bold text-white tracking-wide">
                  {activeImageDetail.nama}
                </h2>
                
                <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                  {activeImageDetail.deskripsi}
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}