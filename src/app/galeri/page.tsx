"use client"

import { useState, useEffect } from "react"

export default function GaleriPage() {
  const galeri = [
    {
      gambar: "/bg1.jpeg",
      judul: "Upacara Bendera",
      deskripsi: "Kegiatan upacara bendera hari Senin di lapangan sekolah.",
    },
    {
      gambar: "/bg2.jpeg",
      judul: "Pramuka",
      deskripsi: "Kegiatan pramuka siswa SMA Negeri 7 Balikpapan.",
    },
    {
      gambar: "/galeri3.jpg",
      judul: "Class Meeting",
      deskripsi: "Kegiatan class meeting antar kelas.",
    },
    {
      gambar: "/galeri4.jpg",
      judul: "Lomba Akademik",
      deskripsi: "Perwakilan sekolah mengikuti lomba akademik.",
    },
    {
      gambar: "/galeri5.jpg",
      judul: "Study Tour",
      deskripsi: "Kegiatan study tour siswa.",
    },
    {
      gambar: "/galeri6.jpg",
      judul: "Kegiatan OSIS",
      deskripsi: "Program kerja dan kegiatan OSIS SMA Negeri 7 Balikpapan.",
    },
    {
      gambar: "/galeri7.jpg",
      judul: "Hari Guru",
      deskripsi: "Perayaan Hari Guru Nasional di sekolah.",
    },
    {
      gambar: "/galeri8.jpg",
      judul: "Ekstrakurikuler",
      deskripsi: "Kegiatan ekstrakurikuler siswa setelah jam pelajaran.",
    },
  ]

  const [selectedImage, setSelectedImage] = useState<any>(null)

  // Fungsi untuk menutup modal dengan aman
  const closeModal = () => {
    setSelectedImage(null)
  }

  // Effect untuk menangani tombol ESC dan Tombol Kembali HP
  useEffect(() => {
    if (!selectedImage) return

    // 1. Handle tombol Esc
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    // 2. Handle tombol kembali bawaan HP / Browser
    // Menambahkan state bayangan ke history browser saat modal terbuka
    window.history.pushState({ modalOpen: true }, "")

    const handlePopState = () => {
      // Ketika user menekan tombol back di HP, tutup modalnya
      closeModal()
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("popstate", handlePopState)

    // Cleanup listener dan membersihkan history state jika modal ditutup secara manual
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("popstate", handlePopState)
    }
  }, [selectedImage])

  // Fungsi tambahan jika menutup manual lewat tombol, agar history state tidak menumpuk
  const handleManualClose = () => {
    if (window.history.state?.modalOpen) {
      window.history.back() // Ini akan memicu popstate dan menutup modal secara otomatis
    } else {
      closeModal()
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6">

        {/* Judul Halaman */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-blue-400">
            Galeri Sekolah
          </h1>
          <p className="text-gray-200 text-xl mt-4">
            SMA Negeri 7 Balikpapan
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galeri.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="cursor-pointer group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <div className="overflow-hidden">
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className=" w-full h-auto max-h-[70vh] object-contain"
                    style={{
                     touchAction: "manipulation",
                     }}
                  />
                </div>
                <div className="p-3">
                  <h2 className="text-white font-semibold text-sm text-center">
                    {item.judul}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 md:p-10"
          onClick={handleManualClose}
        >
          <div
            className="
                relative
                w-full
                max-w-5xl
                bg-white
                rounded-3xl
                shadow-2xl
                grid
                md:grid-cols-2
                max-h-[90vh]
                overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol X (Sudut Kanan Atas Modal - Khusus Desktop) */}
            <button
              onClick={handleManualClose}
              className="
                absolute
                top-4
                right-4
                z-50
                bg-black/60
                hover:bg-black/80
                text-white
                w-10
                h-10
                rounded-full
                text-xl
                flex
                items-center
                justify-center
                transition
                hidden md:flex
              "
            >
              ✕
            </button>

            {/* Gambar (Responsif: Atas di HP, Kiri di Laptop) */}
            <div className="bg-black flex items-center justify-center w-full md:w-1/2 h-[40vh] md:h-full shrink-0">
              <img
                src={selectedImage.gambar}
                alt={selectedImage.judul}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Detail Content */}
            <div className="relative p-6 md:p-10 flex-1 overflow-y-auto pb-24 md:pb-32">
              <h2 className="text-2xl md:text-4xl font-bold text-blue-600">
                {selectedImage.judul}
              </h2> 

              <p className="text-gray-700 mt-4 leading-relaxed text-sm md:text-lg">
                {selectedImage.deskripsi}
              </p>

              {/* Tombol Kembali (Diposisikan di Sudut Kanan Bawah Area Detail) */}
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
                <button
                  onClick={handleManualClose}
                  className="
                    bg-red-600
                    hover:bg-red-600
                    text-white
                    px-6
                    py-2.5
                    md:py-3
                    rounded-xl
                    font-medium
                    shadow-md
                    transition
                    text-sm
                    md:text-base
                  "
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}