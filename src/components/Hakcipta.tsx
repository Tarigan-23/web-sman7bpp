import React from "react"
import Link from "next/link" 

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 mt-0 border-t border-white/5 relative z-10">
      
      {/* Grid: Ditambahkan text-center untuk mobile, dan md:text-left untuk desktop */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Kolom 1: Tentang Sekolah */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white tracking-wide">
            SMA NEGERI 7 BALIKPAPAN
          </h2>
          <p className="text-gray-300 font-medium text-sm md:text-base max-w-sm">
            Sekolah modern berbasis teknologi dan prestasi.
          </p>
        </div>

        {/* Kolom 2: Navigasi Menu */}
        <div>
          <h3 className="font-bold mb-4 text-lg md:text-xl text-white">
            Navigasi Halaman
          </h3>
          {/* Mengubah jarak spasi agar lebih mudah di-klik jari di HP (touch target yang baik) */}
          <ul className="space-y-3 md:space-y-2.5 text-gray-300 text-sm md:text-base">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors block py-0.5">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/berita" className="hover:text-blue-400 transition-colors block py-0.5">
                Berita & Informasi
              </Link>
            </li>
            <li>
              <Link href="/profil" className="hover:text-blue-400 transition-colors block py-0.5">
                Profil Sekolah
              </Link>
            </li>
            <li>
              <Link href="/kurikulum" className="hover:text-blue-400 transition-colors block py-0.5">
                Kurikulum
              </Link>
            </li>
            <li>
              <Link href="/guru" className="hover:text-blue-400 transition-colors block py-0.5">
                Guru & Staf
              </Link>
            </li>
            <li>
              <Link href="/galeri" className="hover:text-blue-400 transition-colors block py-0.5">
                Galeri Foto
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div className="text-sm md:text-base">
          <h3 className="font-bold mb-4 text-lg md:text-xl text-white">
            Kontak
          </h3>
          <p className="text-gray-300 mb-1.5">Email: info@sman7.sch.id</p>
          <p className="text-gray-300">Balikpapan, Kalimantan Timur</p>
        </div>

      </div>

      {/* Tambahan Baris Hak Cipta / Copyright Sebenarnya di Bagian Paling Bawah */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/5 text-center text-xs md:text-sm text-gray-400">
        <p>&copy; {currentYear} SMAN 7 Balikpapan. All rights reserved.</p>
      </div>

    </footer>
  )
}