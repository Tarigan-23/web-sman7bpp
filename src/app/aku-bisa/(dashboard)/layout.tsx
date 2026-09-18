"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    async function getUser() {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setUserEmail(session.user.email || "")
      }
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/aku-bisa/login")
  }

  const navItems = [
    { name: "Dashboard", href: "/aku-bisa" },
    { name: "Sambutan & Profil", href: "/aku-bisa/sambutan" },
    { name: "Berita", href: "/aku-bisa/berita" },
    { name: "Prestasi", href: "/aku-bisa/prestasi" },
    { name: "Galeri", href: "/aku-bisa/galeri" },
    { name: "SSK", href: "/aku-bisa/ssk" },
    { name: "Video", href: "/aku-bisa/video" },
    { name: "Siswa", href: "/aku-bisa/siswa" },
    { name: "Ekskul", href: "/aku-bisa/ekskul" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row relative">

      {/* MOBILE HEADER DENGAN HAMBURGER */}
      <div className="md:hidden flex items-center justify-between bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
        <div>
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Panel Admin</span>
          <h2 className="text-base font-black text-white">SMANJU Admin</h2>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-slate-800 text-white rounded-xl border border-slate-700 focus:outline-none"
        >
          {sidebarOpen ? "✕" : "☰ Menu"}
        </button>
      </div>

      {/* SIDEBAR NAVIGATION */}
      <aside
        className={`fixed md:sticky top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-40 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div className="p-6 border-b border-slate-800 hidden md:block">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Panel Admin SMANJU</span>
          <h1 className="text-xl font-black text-white mt-1">Admin Dashboard</h1>
        </div>

        {/* Menu Links */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Sidebar Footer / User Info */}
        <div className="p-4 border-t border-slate-800 space-y-3 bg-slate-950/40">
          <div className="px-2 truncate">
            <p className="text-[10px] text-slate-500 uppercase font-mono">Logged in as:</p>
            <p className="text-xs font-medium text-slate-300 truncate">{userEmail || "Admin SMANJU"}</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/"
              target="_blank"
              className="flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl text-center transition border border-slate-700"
            >
              Web Utama
            </Link>
            <button
              onClick={handleLogout}
              className="py-2 px-3 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white text-xs font-bold rounded-xl transition border border-red-500/30"
            >
              Keluar
            </button>
          </div>
        </div>
      </aside>

      {/* OVERLAY MOBILE KETIKA SIDEBAR BUKA */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 z-30 md:hidden backdrop-blur-sm"
        />
      )}

      {/* MAIN CONTENT (TANPA FOOTER PUBLIK) */}
      <main className="flex-1 p-4 md:p-10 max-w-6xl mx-auto w-full">
        {children}
      </main>
    </div>
  )
}