"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState("")
  const router = useRouter()

  useEffect(() => {
    async function checkUser() {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push("/aku-bisa/login")
      } else {
        setUserEmail(session.user.email || "")
        setLoading(false)
      }
    }

    checkUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = "/aku-bisa/login"
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-sm">
        Memuat Panel Admin SMANJU...
      </div>
    )
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gradient-to-r from-slate-900 to-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-2xl gap-4">
        <div>
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Sistem Aktif
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-white mt-3">
            Dashboard Admin SMA Negeri 7 Balikpapan
          </h1>
          <p className="text-slate-400 text-xs md:text-sm mt-1">
            Login sebagai: <span className="text-blue-400 font-semibold">{userEmail}</span>
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="px-5 py-2.5 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 text-xs font-bold rounded-xl transition cursor-pointer shadow-lg"
        >
          Keluar (Logout)
        </button>
      </div>

      {/* Grid Menu Pintasan / Quick Actions */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4">Navigasi Cepat Konten Web</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Link href="/aku-bisa/berita" className="bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/50 p-6 rounded-2xl transition group shadow-xl">
            <div className="text-3xl mb-3 group-hover:scale-110 transition transform">📰</div>
            <h3 className="text-base font-bold text-white">Kelola Berita</h3>
            <p className="text-slate-400 text-xs mt-1">Tambah, edit, atau hapus artikel berita terbaru sekolah.</p>
          </Link>

          <Link href="/aku-bisa/prestasi" className="bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-yellow-500/50 p-6 rounded-2xl transition group shadow-xl">
            <div className="text-3xl mb-3 group-hover:scale-110 transition transform">🏆</div>
            <h3 className="text-base font-bold text-white">Kelola Prestasi</h3>
            <p className="text-slate-400 text-xs mt-1">Catat prestasi membanggakan siswa-siswi SMANJU.</p>
          </Link>

          <Link href="/aku-bisa/galeri" className="bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-purple-500/50 p-6 rounded-2xl transition group shadow-xl">
            <div className="text-3xl mb-3 group-hover:scale-110 transition transform">🖼️</div>
            <h3 className="text-base font-bold text-white">Kelola Galeri</h3>
            <p className="text-slate-400 text-xs mt-1">Upload dokumentasi foto kegiatan sekolah terbaru.</p>
          </Link>

          <Link href="/aku-bisa/ssk" className="bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 p-6 rounded-2xl transition group shadow-xl">
            <div className="text-3xl mb-3 group-hover:scale-110 transition transform">🌱</div>
            <h3 className="text-base font-bold text-white">Kelola SSK</h3>
            <p className="text-slate-400 text-xs mt-1">Pengaturan informasi Sekolah Siaga Kependudukan.</p>
          </Link>

        </div>
      </div>

      {/* Informasi Keamanan & Status */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">Status Keamanan Sistem</h2>
          <p className="text-slate-400 text-xs mt-1">Database terlindungi oleh Row Level Security (RLS) Supabase dan enkripsi token aman.</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl text-emerald-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Connected & Secure
        </div>
      </div>
    </div>
  )
}