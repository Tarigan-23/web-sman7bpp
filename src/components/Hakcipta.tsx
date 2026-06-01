import React from "react"
import Link from "next/link" // Pastikan mengimpor Link untuk navigasi Next.js

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-slate-900 text-white py-10 mt-0 border-t border-white/5 relative z-10">
      {/* Diubah menjadi grid-cols-1 md:grid-cols-3 untuk menampung 3 kolom */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Kolom 1: Tentang Sekolah */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            SMA NEGERI 7 BALIKPAPAN
          </h2>
          <p className="text-gray-300 font-medium">
            Sekolah modern berbasis teknologi dan prestasi.
          </p>
        </div>

        {/* Kolom 2: Navigasi Menu (Terintegrasi dengan Navbar) */}
        <div>
          <h3 className="font-bold mb-4 text-xl text-white">
            Navigasi Halaman
          </h3>
          <ul className="space-y-2.5 text-gray-300">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/berita" className="hover:text-blue-400 transition-colors">
                Berita & Informasi
              </Link>
            </li>
            <li>
              <Link href="/profil" className="hover:text-blue-400 transition-colors">
                Profil Sekolah
              </Link>
            </li>
            <li>
              <Link href="/kurikulum" className="hover:text-blue-400 transition-colors">
                Kurikulum
              </Link>
            </li>
            <li>
              <Link href="/guru" className="hover:text-blue-400 transition-colors">
                Guru & Staf
              </Link>
            </li>
            <li>
              <Link href="/galeri" className="hover:text-blue-400 transition-colors">
                Galeri Foto
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h3 className="font-bold mb-4 text-xl text-white">
            Kontak
          </h3>
          <p className="text-gray-300 mb-1">Email: info@sman7.sch.id</p>
          <p className="text-gray-300">Balikpapan, Kalimantan Timur</p>
        </div>

      </div>
    </footer>
  )
}