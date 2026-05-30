"use client"

import berita from "../../data/berita"

export default function BeritaPage() {
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
            Berita Terkait
          </h1>
          <p className="text-gray-200 text-xl mt-4">
            SMA Negeri 7 Balikpapan
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {berita.map((item) => (
            <a
              key={item.id}
              href={item.sumberUrl}          // Mengarah ke URL eksternal (Kompas, dll)
              target="_blank"                // Membuka di tab baru
              rel="noopener noreferrer"      // Keamanan tambahan saat membuka tab baru
              className="block group"        // Menambahkan utility block dan group untuk efek hover
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 group-hover:scale-105 transition duration-300 cursor-pointer h-full">

                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">

                  <p className="text-blue-300 text-sm">
                    {item.tanggal}
                  </p>

                  <h2 className="text-2xl font-bold text-white mt-3">
                    {item.judul}
                  </h2>

                  <p className="text-gray-300 mt-4">
                    {item.deskripsi}
                  </p>

                </div>
              </div>
            </a>
          ))}

        </div>
      </div>
    </div>
  )
}