"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image" // 1. Impor komponen Image
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/5 backdrop-blur-md text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* 2. Bagian Logo dan Teks digabung */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <Image 
            src="/LOGO_SMAN7.png" 
            alt="Logo SMAN 7" 
            width={40} 
            height={40} 
            className="object-contain"
          />
          <div className="flex flex-col line-height-none">
            <span className="text-sm font-light tracking-wider text-gray-300 leading-none">SMA NEGERI 7</span>
            <span className="text-lg font-bold tracking-tight leading-tight">BALIKPAPAN</span>
          </div>
        </Link>

        <div className="flex gap-6 text-sm font-semibold">
          <Link href="/" className="hover:text-blue-400 transition">Beranda</Link>
          <Link href="/sambutan" className="hover:text-blue-400 transition">Sambutan</Link>
          <Link href="/profil" className="hover:text-blue-400 transition">Profil</Link>
          <Link href="/berita" className="hover:text-blue-400 transition">Berita</Link>
          <Link href="/galeri" className="hover:text-blue-400 transition">Galeri</Link>
          <Link href="/kurikulum" className="hover:text-blue-400 transition">Kurikulum</Link>
          <Link href="/ekskul" className="hover:text-blue-400 transition">Ekskul</Link>
          <Link href="/kontak" className="hover:text-blue-400 transition">Kontak</Link>
          <Link href="/Lokasi" className="hover:text-blue-400 transition">Lokasi</Link>
        </div>
      </div>
    </motion.nav>
  )
}
