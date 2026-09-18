"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState("")
  const [stats, setStats] = useState({ berita: 0, prestasi: 0, siswa: 0 })
  const router = useRouter()

  useEffect(() => {
    async function checkUserAndStats() {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push("/aku-bisa/login")
      } else {
        setUserEmail(session.user.email || "")

        // Ambil jumlah data ringkasan untuk pemberitahuan
        try {
          const { count: beritaCount } = await supabase.from("berita").select("*", { count: "exact", head: true })
          const { count: prestasiCount } = await supabase.from("prestasi").select("*", { count: "exact", head: true })
          const { count: siswaCount } = await supabase.from("siswa").select("*", { count: "exact", head: true })

          setStats({
            berita: beritaCount || 0,
            prestasi: prestasiCount || 0,
            siswa: siswaCount || 0,
          })
        } catch (err) {
          console.error("Gagal mengambil statistik:", err)
        }

        setLoading(false)
      }
    }

    checkUserAndStats()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-slate-400 text-sm tracking-wide">
        Memuat Dashboard SMANJU...
      </div>
    )
  }

  return (
    <div className="space-y-8 py-4">

      {/* WELCOME BANNER / KARTU SAMBUTAN */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800/80 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Sistem Panel Aktif
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            Selamat Datang, Admin 👋
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-2xl leading-relaxed">
            Kelola seluruh informasi akademik, berita kegiatan sekolah, dan basis data siswa SMA Negeri 7 Balikpapan dengan aman melalui panel terpusat ini.
          </p>
          <div className="pt-2 text-xs text-slate-500 font-mono">
            Akun Aktif: <span className="text-slate-300">{userEmail}</span>
          </div>
        </div>
      </div>

      {/* BAGIAN PEMBERITAHUAN & PEMBARUAN SISTEM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Ringkasan Database */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-6 rounded-2xl space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">📊 Statistik Data</h3>
            <span className="text-xs text-blue-400 font-mono">Real-time</span>
          </div>
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center bg-slate-950/60 p-3 rounded-xl border border-slate-800/50">
              <span className="text-xs text-slate-400">Total Berita Terbit</span>
              <span className="text-sm font-bold text-white font-mono">{stats.berita} Artikel</span>
            </div>
            <div className="flex justify-between items-center bg-slate-950/60 p-3 rounded-xl border border-slate-800/50">
              <span className="text-xs text-slate-400">Total Prestasi Siswa</span>
              <span className="text-sm font-bold text-amber-400 font-mono">{stats.prestasi} Penghargaan</span>
            </div>
            <div className="flex justify-between items-center bg-slate-950/60 p-3 rounded-xl border border-slate-800/50">
              <span className="text-xs text-slate-400">Total Data Siswa</span>
              <span className="text-sm font-bold text-emerald-400 font-mono">{stats.siswa} Siswa</span>
            </div>
          </div>
        </div>

        {/* Pemberitahuan & Pembaruan Terbaru */}
        <div className="md:col-span-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 p-6 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">🔔 Pemberitahuan & Pembaruan</h3>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-semibold">
                Sistem Terbaru
              </span>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-slate-300">
              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/50 flex items-start gap-3">
                <span className="text-blue-400 text-base">✨</span>
                <div>
                  <p className="font-semibold text-white">Fitur Share & Tautan Berita Unik</p>
                  <p className="text-slate-400 text-xs mt-0.5">Setiap berita kini memiliki halaman detail mandiri dan tombol bagikan interaktif (WhatsApp, Facebook, Instagram, Salin Link).</p>
                </div>
              </div>

              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/50 flex items-start gap-3">
                <span className="text-emerald-400 text-base">📊</span>
                <div>
                  <p className="font-semibold text-white">Impor Excel Siswa & Statistik Gender</p>
                  <p className="text-slate-400 text-xs mt-0.5">Pembaruan sistem rekapitulasi otomatis jumlah siswa Laki-laki dan Perempuan per kelas secara real-time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
            <span>Keamanan: Terlindungi RLS Supabase</span>
            <span className="font-mono">SMANJU v2.5</span>
          </div>
        </div>

      </div>
    </div>
  )
}