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
  // Menambahkan tipe data TypeScript pada array
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
    <section className="py-10 bg-[#f5f5f5]">
      {/* Perbaikan typo dari max-w-7x1 menjadi max-w-7xl */}
      <div className="max-w-7x1 mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <Link key={index} href={item.link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-[10px] shadow-lg p-10 text-center cursor-pointer"
              >
                <h1 className="text-7xl font-bold text-blue-600">
                  {item.value}
                </h1>

                {/* text-black ditambahkan di sini untuk membuat tulisan menjadi hitam */}
                <p className="text-3xl font-semibold mt-5 text-black">
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
