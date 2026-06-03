"use client"

import Link from "next/link"
import { motion } from "framer-motion"

// Menentukan tipe data untuk objek stat
interface StatItem {
  title: string
  value: string
  link: string
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      title: "Siswa",
      value: "700+",
      link: "/siswa",
    },
    {
      title: "Guru",
      value: "100+",
      link: "/guru",
    },
    {
      title: "Prestasi",
      value: "100+",
      link: "/prestasi",
    },
    {
      title: "Kelas",
      value: "20+",
      link: "/kelas",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-[#f5f5f5]">
      {/* FIX: Mengubah max-w-7x1 (pake angka 1) menjadi max-w-7xl (pake huruf l) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* GRID RESPONSIF: 2 kolom di HP (grid-cols-2), 4 kolom di desktop (md:grid-cols-4) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((item, index) => (
            <Link key={index} href={item.link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                // Padding disesuaikan: p-6 di mobile agar hemat ruang, p-10 di desktop
                className="bg-white rounded-[10px] shadow-lg p-6 md:p-10 text-center cursor-pointer h-full flex flex-col justify-center"
              >
                {/* UKURAN ANGKA: text-4xl di HP, text-6xl/7xl di desktop */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 tracking-tight">
                  {item.value}
                </h1>

                {/* UKURAN TEKS: text-base di HP, text-2xl/3xl di desktop */}
                <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold mt-2 md:mt-5 text-black">
                  {item.title}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}