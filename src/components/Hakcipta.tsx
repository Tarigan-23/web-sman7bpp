import React from "react"
import Link from "next/link" 

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 mt-0 border-t border-white/5 relative z-10">
      
      {/* Container Utama: text-left memastikan semua konten rata kiri di HP maupun Desktop */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-3 gap-10 text-left">
        
        {/* Kolom 1: Tentang Sekolah */}
        <div className="flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white tracking-wide">
            SMA NEGERI 7 BALIKPAPAN
          </h2>
          <p className="text-gray-300 font-medium text-sm md:text-base max-w-sm">
            Religius - Cerdas - Berprestasi
          </p>
        </div>

        {/* BUNGKUS KHUSUS MOBILE: Navigasi dan Kontak berdampingan (kiri & kanan) di HP */}
        {/* Di desktop, pembungkus ini otomatis melebur lewat class 'md:contents' */}
        <div className="flex flex-row md:contents gap-6 justify-between items-start w-full">
          
          {/* Kolom 2: Navigasi Menu (Rata Kiri, Lebar proporsional di HP) */}
          <div className="flex-1 md:flex-none">
            <h3 className="font-bold mb-4 text-base md:text-xl text-white">
              Navigasi Halaman
            </h3>
            <ul className="space-y-3 md:space-y-2.5 text-gray-300 text-sm md:text-base">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors block py-0.5">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-blue-400 transition-colors block py-0.5">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/profil" className="hover:text-blue-400 transition-colors block py-0.5">
                  Profil
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

          {/* Kolom 3: Kontak (Berada di sebelah kanan Navigasi saat di HP) */}
          <div className="flex-1 md:flex-none text-sm md:text-base">
            <h3 className="font-bold mb-4 text-base md:text-xl text-white">
              Kontak
            </h3>
            <p className="text-gray-300 mb-1.5 break-all">Email: info@sman7.sch.id</p>
            <p className="text-gray-300">Balikpapan, Kalimantan Timur</p>
          </div>

        </div>

      </div>

      {/* Baris Hak Cipta / Copyright di Bagian Paling Bawah */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/5 text-center text-xs md:text-sm text-gray-400">
        <p>&copy; {currentYear} SMAN 7 Balikpapan. All rights reserved.</p>
      </div>

    </footer>
  )
}