import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 mt-0 border-t border-white/5 relative z-10">

      {/* Container Utama dengan Tata Letak 4 Kolom */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">

        {/* Kolom 1: Tentang Sekolah & Logo + Tombol Sosmed Berbasis Ikon SVG Asli */}
        <div className="flex flex-col items-start md:col-span-1">
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/LOGO_SMAN7.png"
                alt="Logo SMAN 7 Balikpapan"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide leading-snug">
              SMA NEGERI 7 BALIKPAPAN
            </h2>
          </div>

          <p className="text-gray-300 font-medium text-sm md:text-base max-w-sm mb-6">
            Religius - Cerdas - Berprestasi
          </p>

          {/* Tombol Media Sosial dengan Ikon SVG Asli (FB, IG, YouTube, TikTok) */}
          <div className="flex items-center gap-3">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1CMj2KoyBV/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition border border-white/10 shadow-md"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sman7balikpapan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-pink-600 text-gray-300 hover:text-white flex items-center justify-center transition border border-white/10 shadow-md"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@SMAN7BPP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition border border-white/10 shadow-md"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@sman.7.balikpapan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-black text-gray-300 hover:text-white flex items-center justify-center transition border border-white/10 shadow-md"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>

          </div>
        </div>

        {/* Kolom 2: Navigasi Halaman (Bagian 1) */}
        <div className="flex flex-col">
          <h3 className="font-bold mb-4 text-base md:text-xl text-white">
            Navigasi Halaman
          </h3>
          <ul className="space-y-2.5 text-gray-300 text-sm md:text-base">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors block py-0.5">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/sambutan" className="hover:text-blue-400 transition-colors block py-0.5">
                Sambutan
              </Link>
            </li>
            <li>
              <Link href="/profil" className="hover:text-blue-400 transition-colors block py-0.5">
                Profil
              </Link>
            </li>
            <li>
              <Link href="/berita" className="hover:text-blue-400 transition-colors block py-0.5">
                Berita
              </Link>
            </li>
            <li>
              <Link href="/kurikulum" className="hover:text-blue-400 transition-colors block py-0.5">
                Kurikulum
              </Link>
            </li>
            <li>
              <Link href="/Kesiswaan" className="hover:text-blue-400 transition-colors block py-0.5">
                Kesiswaan
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Navigasi Halaman (Bagian 2) */}
        <div className="flex flex-col md:pt-11">
          <ul className="space-y-2.5 text-gray-300 text-sm md:text-base">
            <li>
              <Link href="/Sarpras" className="hover:text-blue-400 transition-colors block py-0.5">
                Sarpras
              </Link>
            </li>
            <li>
              <Link href="/Humas" className="hover:text-blue-400 transition-colors block py-0.5">
                Humas
              </Link>
            </li>
            <li>
              <Link href="/guru" className="hover:text-blue-400 transition-colors block py-0.5">
                Guru & Staf
              </Link>
            </li>
            <li>
              <Link href="/komite" className="hover:text-blue-400 transition-colors block py-0.5">
                Komite Sekolah
              </Link>
            </li>
            <li>
              <Link href="/galeri" className="hover:text-blue-400 transition-colors block py-0.5">
                Galeri Foto
              </Link>
            </li>
            <li>
              <Link href="/ssk" className="hover:text-blue-400 transition-colors block py-0.5">
                SSK
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Kontak */}
        <div className="flex flex-col text-sm md:text-base">
          <h3 className="font-bold mb-4 text-base md:text-xl text-white">
            Kontak
          </h3>
          <p className="text-gray-300 mb-1.5 break-all">Email: contact@sman7-bpp.sch.id</p>
          <p className="text-gray-300">Balikpapan, Kalimantan Timur</p>
        </div>

      </div>

      {/* Footer Bawah */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/5 text-center text-xs md:text-sm text-gray-400">
        <Link
          href="https://gmcs.io"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors inline-block"
        >
          <p>&copy; {currentYear} GMCS. All rights reserved.</p>
        </Link>
      </div>

    </footer>
  )
}