import Link from 'next/link'
import React from 'react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col md:flex-row">
      
      {/* SIDEBAR ADMIN (Satu layout konsisten untuk PC & Mobile) */}
      <aside className="w-full md:w-64 bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800 p-6 flex flex-col justify-between shrink-0 md:h-screen md:sticky md:top-0">
        <div className="space-y-6">
          
          {/* Header Admin & Tombol Web Utama */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Panel Admin</span>
              <Link href="/admin">
                <h1 className="text-xl font-black text-white mt-1 hover:text-blue-400 transition">SMANJU Admin</h1>
              </Link>
            </div>
            
            <Link 
              href="/" 
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition"
            >
              ← Web Utama
            </Link>
          </div>

          {/* NAVIGASI BERURUTAN KE BAWAH (flex-col) */}
          <nav className="flex flex-col gap-2 pt-2">
            <Link 
              href="/admin" 
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition flex items-center gap-3"
            >
              <span>📊</span> Dashboard
            </Link>
            
            <Link 
              href="/admin/berita" 
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition flex items-center gap-3"
            >
              <span>📰</span> Berita
            </Link>
            
            <Link 
              href="/admin/prestasi" 
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition flex items-center gap-3"
            >
              <span>🏆</span> Prestasi
            </Link>
            
            <Link 
              href="/admin/galeri" 
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition flex items-center gap-3"
            >
              <span>🖼️</span> Galeri
            </Link>

            <Link 
              href="/admin/ssk" 
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition flex items-center gap-3"
            >
              <span>🌱</span> SSK
            </Link>
          </nav>
        </div>
      </aside>

      {/* AREA KONTEN UTAMA */}
      <main className="flex-1 p-5 md:p-10 overflow-y-auto w-full">
        {children}
      </main>
    </div>
  )
}