"use client"

import Link from "next/link"
import { motion } from "framer-motion"

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
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((item, index) => (
            <Link key={index} href={item.link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md border border-slate-100 p-6 md:p-10 text-center cursor-pointer h-full flex flex-col justify-center transition-all duration-300"
              >
                {/* ANGKA: Warna biru tebal menonjol di atas */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-400 tracking-tight">
                  {item.value}
                </h3>

                {/* LABEL: Warna teks di bawah mengikuti gaya redup tipis elegan */}
                <p className="text-sm sm:text-base md:text-lg font-bold mt-2 md:mt-3 text-slate-300 uppercase tracking-wider">
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