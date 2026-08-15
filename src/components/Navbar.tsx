"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation" // Mengambil route aktif
import { motion, AnimatePresence, Variants } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() 

  // KONDISI KHUSUS: Sembunyikan Navbar utama jika sedang mengakses Dashboard Admin
  if (pathname.startsWith("/admin")) {
    return null
  }

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Sambutan", href: "/sambutan" },
    { name: "Profil", href: "/profil" },
    { name: "Berita", href: "/berita" },
    { name: "Kurikulum", href: "/kurikulum" },
    { name: "Kesiswaan", href: "/Kesiswaan" },
    { name: "Sarpras", href: "/Sarpras" },
    { name: "Humas", href: "/Humas" },
    { name: "Komite", href: "/komite" },
    { name: "Galeri", href: "/galeri" },
    { name: "SSK", href: "/ssk" },
  ]

  // Handler Interseptor Klik Menu Aktif (Biar Halus Scroll ke Atas tanpa Reload Kaku)
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault() // Mencegah reload/pindah halaman bawaan browser
      window.scrollTo({ top: 0, behavior: "smooth" }) // Efek scroll naik ke atas sinematik
      setIsOpen(false) // Otomatis menguncupkan menu hamburger di mobile
    }
  }

  // Framer Motion Variants untuk Menu Mobile (Container)
  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.04,
        delayChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: -15,
      transition: { staggerChildren: 0.02, staggerDirection: -1, duration: 0.2 } 
    }
  }

  // Motion Variants untuk masing-masing Item Link
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100 } 
    },
    exit: { opacity: 0, y: 5, transition: { duration: 0.15 } }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-950/40 backdrop-blur-md text-white border-b border-white/10 select-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3.5 md:py-4">
        
        {/* Logo dan Teks Sekolah */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition z-50">
          <Image 
            src="/LOGO_SMAN7.png" 
            alt="Logo SMAN 7" 
            width={38} 
            height={38} 
            className="object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          />
          <div className="flex flex-col">
            <span className="text-[11px] md:text-xs font-light tracking-widest text-slate-300 leading-none uppercase">SMA Negeri 7</span>
            <span className="text-sm md:text-base font-black tracking-wider leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">BALIKPAPAN</span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex gap-5 xl:gap-6 text-xs xl:text-sm font-semibold tracking-wide">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative py-1 transition duration-200 ${
                  isActive ? "text-blue-400 font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeUnderline" 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_8px_#3b82f6]" 
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* TOMBOL HAMBURGER PREMIUM */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 z-50 focus:outline-none hover:bg-white/10 active:scale-95 transition-all duration-200"
          aria-label="Toggle Menu"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-left ${isOpen ? "rotate-45 translate-x-[2px] -translate-y-[1px]" : ""}`} />
            <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-90" : ""}`} />
            <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-left ${isOpen ? "-rotate-45 translate-x-[2px] translate-y-[1px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* MENU MOBILE: SINEMATIK BLUR OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-slate-950/90 backdrop-blur-xl lg:hidden z-40 flex flex-col justify-center px-6 pt-24 pb-8"
          >
            {/* Ornamen Glow Dekoratif di Latar Menu */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Grid Menu wrapper agar muat di semua ukuran layar smartphone */}
            <div className="w-full max-w-sm mx-auto grid grid-cols-2 gap-3 max-h-[70vh] overflow-y-auto no-scrollbar py-4 z-10">
              {menuItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleLinkClick(e, item.href);
                        setIsOpen(false); // Memastikan menu tertutup saat berpindah halaman biasa
                      }}
                      className={`flex items-center justify-center p-3.5 rounded-xl border text-center text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.97] ${
                        isActive 
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 shadow-[0_4px_15px_rgba(59,130,246,0.3)] font-bold" 
                          : "bg-white/5 text-slate-300 border-white/5 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item.name === "SPMB" ? "🔥 " + item.name : item.name}
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Footer kecil di bagian bawah menu mobile agar terasa komplit */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-auto text-center text-[10px] text-slate-400 font-light tracking-widest uppercase z-10"
            >
              © SMAN 7 Balikpapan
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}