"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { supabase } from "../lib/supabase" // Pastikan path ini benar

export default function BeritaHome() {
  const [berita, setBerita] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchBeritaTerbaru() {
      try {
        // Mengambil 3 berita terbaru dari Supabase
        const { data, error } = await supabase
          .from("berita")
          .select("*")
          .order("id", { ascending: false })
          .limit(3)

        if (error) throw error;
        setBerita(data || [])
      } catch (err) {
        console.error("Gagal memuat berita:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchBeritaTerbaru()
  }, [])

  const getLinkProps = (url: string) => {
    if (!url || url === "#" || !url.startsWith("http") || url.includes("sman7-bpp.sch.id") || url.includes("localhost")) {
      return {
        href: url && url !== "#" ? url : "/berita",
        target: "_self",
        rel: undefined
      };
    }
    return {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer"
    };
  };

  return (
    <section className="bg-slate-900 text-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-blue-400">
            Berita Terbaru
          </h2>
          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Ikuti terus perkembangan aktivitas dan prestasi di SMA Negeri 7 Balikpapan
          </p>
        </div>

        {loading ? (
          <div className="text-center text-slate-500">Memuat berita...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {berita.map((item, index) => {
              // Logika parsing gambar agar kompatibel dengan data Supabase
              let gambar = "/bg3.jpg";
              try {
                const parsed = typeof item.gambar === 'string' ? JSON.parse(item.gambar) : item.gambar;
                gambar = Array.isArray(parsed) ? parsed[0] : parsed;
              } catch {
                gambar = item.gambar || "/bg3.jpg";
              }

              const linkProps = getLinkProps(item.sumber_url || item.sumberUrl || "#");

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-blue-500/50 transition duration-300 group flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden relative w-full">
                    <Image
                      src={gambar}
                      alt={item.judul}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <span className="text-xs text-blue-400 font-medium">{item.tanggal}</span>
                    <a {...linkProps} className="mt-2 block">
                      <h3 className="text-lg md:text-xl font-bold line-clamp-2 hover:text-blue-300 cursor-pointer transition-colors">
                        {item.judul}
                      </h3>
                    </a>
                    <p className="text-gray-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                      {item.deskripsi}
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-700/50 sm:mt-5">
                      <a {...linkProps} className="text-sm font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 block w-max py-1">
                        Baca Selengkapnya &rarr;
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  )
}