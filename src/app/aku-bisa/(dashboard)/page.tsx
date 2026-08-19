"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
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
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
          <div>
            <h1 className="text-2xl font-black">Dashboard Admin SMA Negeri 7 Balikpapan</h1>
            <p className="text-slate-400 text-xs mt-1">Login sebagai: <span className="text-blue-400 font-semibold">{userEmail}</span></p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 text-xs font-bold rounded-xl transition cursor-pointer"
          >
            Keluar (Logout)
          </button>
        </div>

        {/* Letakkan menu kelola berita, galeri, dll di sini */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-lg font-bold mb-2">Selamat Datang di Panel Kontrol</h2>
          <p className="text-slate-400 text-sm">Sistem pengamanan RLS database dan autentikasi aktif sepenuhnya.</p>
        </div>
      </div>
    </div>
  )
}