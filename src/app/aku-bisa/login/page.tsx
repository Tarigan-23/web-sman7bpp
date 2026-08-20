"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg("")

    console.log("Tombol login ditekan, memproses ke Supabase...")

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      if (data.user) {
        console.log("Login sukses! Mengalihkan ke dashboard...")
        router.refresh()
        window.location.href = "/aku-bisa"
      }
    } catch (err: any) {
      console.error("Error login:", err)
      setErrorMsg(err.message || "Gagal masuk, periksa email dan password!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-slate-800 rounded-2xl mx-auto flex items-center justify-center overflow-hidden border border-slate-700 shadow-lg">
            <Image 
              src="/LOGO_SMAN7.png" 
              alt="Logo SMAN 7 Balikpapan" 
              width={48} 
              height={48} 
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white">Gerbang Admin</h1>
            <p className="text-slate-400 text-xs mt-1">Masukkan akses terautentikasi SMA Negeri 7 Balikpapan</p>
          </div>
        </div>

        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-xl text-center font-medium">
            ⚠️ {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Email Admin</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              placeholder="admin@sman7-bpp.sch.id"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              placeholder="••••••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-sm transition shadow-lg disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Memverifikasi Akses..." : "Masuk ke Panel"}
          </button>
        </form>
      </div>
    </div>
  )
}