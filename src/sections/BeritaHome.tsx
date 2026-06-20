"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image" // Impor Image Next.js untuk optimasi gambar berita
import beritaData from "../data/berita" 

export default function BeritaHome() {
  // Mengambil 3 berita terbaru saja untuk ditampilkan di beranda
  const beritaTerbaru = beritaData.slice(0, 3);

  // Fungsi pembantu untuk menentukan target window (_self atau _blank)
  const getLinkProps = (url: string) => {
    // Jika tidak ada url, atau url mengarah ke internal web (termasuk rute /galeri)
    if (!url || url === "#" || !url.startsWith("http") || url.includes("sman7-bpp.sch.id") || url.includes("localhost")) {
      return {
        href: url && url !== "#" ? url : "/berita", // Jika kosong, arahkan ke page kumpulan berita utama
        target: "_self",
        rel: undefined
      };
    }
    // Jika link eksternal murni (seperti instagram, dll)
    return {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer"
    };
  };

  return (
    <section className="bg-slate-900 text-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Judul Bagian: Ukuran adaptif */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-blue-400">
            Berita Terbaru
          </h2>
          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Ikuti terus perkembangan aktivitas dan prestasi di SMA Negeri 7 Balikpapan
          </p>
        </div>

        {/* GRID RESPONSIF: 1 kolom di HP, 2 kolom di tablet (sm), dan 3 kolom di desktop (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {beritaTerbaru.map((berita, index) => {
            const linkProps = getLinkProps(berita.sumberUrl);

            return (
              <motion.div
                key={berita.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-blue-500/50 transition duration-300 group flex flex-col h-full"
              >
                {/* Wadah Gambar Berita yang dioptimasi */}
                <div className="h-48 overflow-hidden relative w-full">
                  <Image 
                    src={berita.gambar} 
                    alt={berita.judul}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                
                {/* Konten Teks Kartu */}
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <span className="text-xs text-blue-400 font-medium">{berita.tanggal}</span>
                  
                  {/* Judul bisa diklik langsung menuju link dengan properti dinamis */}
                  <a {...linkProps} className="mt-2 block">
                    <h3 className="text-lg md:text-xl font-bold line-clamp-2 hover:text-blue-300 cursor-pointer transition-colors">
                      {berita.judul}
                    </h3>
                  </a>

                  {/* Deskripsi/Ringkasan berita */}
                  <p className="text-gray-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                    {berita.deskripsi}
                  </p>
                  
                  {/* Tautan Baca Selengkapnya dipaksa selalu rapat ke bawah kartu */}
                  <div className="mt-auto pt-4 border-t border-slate-700/50 sm:mt-5">
                    <a 
                      {...linkProps}
                      className="text-sm font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 block w-max py-1"
                    >
                      Baca Selengkapnya &rarr;
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}