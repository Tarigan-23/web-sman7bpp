"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  // State untuk membuka dan menutup menu di HP
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Sambutan", href: "/sambutan" },
    { name: "Profil", href: "/profil" },
    { name: "Berita", href: "/berita" },
    { name: "Kurikulum", href: "/kurikulum" },
    { name: "Kesiswaan", href: "/Kesiswaan" },
    { name: "Sarpras", href: "/Sarpras" },
    { name: "Humas", href: "/Humas" },
    { name: "Ekskul", href: "/ekskul" },
    { name: "Alumni", href: "/alumni" },
    { name: "Galeri", href: "/galeri" },
    { name: "SPMB", href: "/SPMB" },
    
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo dan Teks Sekolah */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition z-50">
          <Image 
            src="/LOGO_SMAN7.png" 
            alt="Logo SMAN 7" 
            width={40} 
            height={40} 
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xs md:text-sm font-light tracking-wider text-gray-300 leading-none">SMA NEGERI 7</span>
            <span className="text-base md:text-lg font-bold tracking-tight leading-tight">BALIKPAPAN</span>
          </div>
        </Link>

        {/* MENU DESKTOP: Otomatis SEMBUNYI di HP (hidden), muncul di layar sedang ke atas (md:flex) */}
        <div className="hidden lg:flex gap-5 xl:gap-6 text-sm font-semibold">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-400 transition">
              {item.name}
            </Link>
          ))}
        </div>

        {/* TOMBOL HAMBURGER: Hanya muncul di HP/Tablet (lg:hidden) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* MENU MOBILE: Muncul dari atas/samping saat tombol hamburger diklik */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full min-h-screen bg-black/95 flex flex-col justify-center items-center gap-6 text-xl font-medium lg:hidden pt-20"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)} // Otomatis tutup menu jika link diklik
                className="hover:text-blue-400 transition text-gray-200"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}