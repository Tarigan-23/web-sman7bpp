"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

interface EkskulItem {
  id: number
  nama: string
  kategori: string
  logo: string
  pembina?: string
  pelatih?: string
}

export default function EkskulPage() {
  const [daftarEkskul, setDaftarEkskul] = useState<EkskulItem[]>([])
  const [loading, setLoading] = useState(true)
  const [kategoriEkskul, setKategoriEkskul] = useState("Semua")

  useEffect(() => {
    async function fetchEkskul() {
      try {
        const { data, error } = await supabase
          .from("ekskul")
          .select("*")
          .order("id", { ascending: false })

        if (error) throw error

        if (data) {
          const formatted = data.map((item: any) => {
            let logoUrl = "/ggi.png"
            const targetLogo = item.logo || item.gambar
            if (targetLogo) {
              if (Array.isArray(targetLogo) && targetLogo.length > 0) {
                logoUrl = targetLogo[0]
              } else if (typeof targetLogo === "string") {
                const trimmed = targetLogo.trim()
                if (trimmed.startsWith("[")) {
                  try {
                    const parsed = JSON.parse(trimmed)
                    logoUrl = Array.isArray(parsed) && parsed.length > 0 ? parsed[0] : trimmed
                  } catch {
                    logoUrl = trimmed
                  }
                } else {
                  logoUrl = trimmed
                }
              }
            }

            return {
              id: Number(item.id) || Date.now(),
              nama: item.nama_ekskul || "",
              kategori: item.kategori || "Umum",
              logo: logoUrl,
              pembina: item.pembina || "",
              pelatih: item.pelatih || "",
            }
          })
          setDaftarEkskul(formatted)
        }
      } catch (err) {
        console.error("Gagal memuat data ekskul:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchEkskul()
  }, [])

  const totalEkskul = daftarEkskul.length

  const ekskulTersaring = kategoriEkskul === "Semua"
    ? daftarEkskul
    : daftarEkskul.filter(item => item.kategori === kategoriEkskul)

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative w-full overflow-hidden"
      style={{ backgroundImage: "url('/sarpras/8.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/75 z-0"></div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto">

        {/* TOMBOL BACK KE KESISWAAN */}
        <div className="mb-6">
          <Link href="/Kesiswaan" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 hover:text-white transition duration-200">
            ⬅️ Kembali ke Kesiswaan
          </Link>
        </div>

        {/* HEADER HERO */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-wide mb-2">
            Daftar <span className="text-blue-400">Ekstrakurikuler</span>
          </h1>
          <p className="text-gray-300 text-xs md:text-sm max-w-xl mx-auto font-light">
            Wadah resmi eksplorasi potensi, minat, dan bakat luar biasa di luar jam belajar SMA Negeri 7 Balikpapan.
          </p>
        </div>

        {/* STATISTIK BOX */}
        <div className="max-w-xs mx-auto bg-slate-900/40 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl mb-10 text-center">
          <div className="text-4xl md:text-5xl font-black text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            {totalEkskul}
          </div>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-300 mt-1 font-bold">
            Total Ekskul
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["Semua", "Olahraga", "Akademik", "Keagamaan", "Seni", "Bela diri", "Umum"].map((kat) => (
            <button
              key={kat}
              onClick={() => setKategoriEkskul(kat)}
              className={`px-4 py-1.5 rounded-lg font-medium text-xs transition-all ${kategoriEkskul === kat
                ? "bg-blue-600 text-white border border-blue-500 shadow-md"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
            >
              {kat}
            </button>
          ))}
        </div>

        {/* CARDS GRID */}
        {loading ? (
          <div className="text-center py-20 text-blue-400 font-bold">Memuat data ekstrakurikuler...</div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {ekskulTersaring.map((ekskul) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={ekskul.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 flex flex-col overflow-hidden hover:border-blue-500/30 transition-all group"
                >
                  {/* Logo Section */}
                  <div className="h-48 w-full bg-black/50 relative overflow-hidden border-b border-white/5 p-4 flex items-center justify-center">
                    <img
                      src={ekskul.logo}
                      alt={ekskul.nama}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-500 ease-out z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-0"></div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="bg-blue-500/20 text-blue-300 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        {ekskul.kategori}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-2 group-hover:text-blue-400 transition">
                        {ekskul.nama}
                      </h3>
                    </div>

                    {/* Metadata Section: Hanya muncul jika pembina/pelatih terisi dan bukan "-" */}
                    <div className="space-y-1.5 border-t border-white/5 pt-3 text-[11px] text-gray-300">
                      {ekskul.pembina && ekskul.pembina.trim() !== "" && ekskul.pembina !== "-" && (
                        <div className="flex justify-between items-start gap-4">
                          <span className="text-gray-400 shrink-0">Pembina:</span>
                          <span className="text-white font-light text-right">{ekskul.pembina}</span>
                        </div>
                      )}
                      {ekskul.pelatih && ekskul.pelatih.trim() !== "" && ekskul.pelatih !== "-" && (
                        <div className="flex justify-between items-start gap-4">
                          <span className="text-gray-400 shrink-0">Pelatih:</span>
                          <span className="text-white font-light text-right">{ekskul.pelatih}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </div>
  )
}