import Link from 'next/link'

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white">Dashboard Admin</h1>
        <p className="text-slate-400 text-sm mt-1">Selamat datang di Panel Kontrol Website SMA Negeri 7 Balikpapan.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/admin/berita" className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500 transition group">
          <span className="text-3xl">📰</span>
          <h3 className="text-lg font-bold text-white mt-4 group-hover:text-blue-400">Kelola Berita</h3>
          <p className="text-xs text-slate-400 mt-1">Tambah, edit, dan upload foto berita terbaru sekolah.</p>
        </Link>

        <Link href="/admin/prestasi" className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-amber-500 transition group">
          <span className="text-3xl">🏆</span>
          <h3 className="text-lg font-bold text-white mt-4 group-hover:text-amber-400">Kelola Prestasi</h3>
          <p className="text-xs text-slate-400 mt-1">Input pencapaian dan juara siswa tingkat Kota hingga Nasional.</p>
        </Link>

        <Link href="/admin/ssk" className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500 transition group">
          <span className="text-3xl">🌱</span>
          <h3 className="text-lg font-bold text-white mt-4 group-hover:text-emerald-400">Kelola SSK</h3>
          <p className="text-xs text-slate-400 mt-1">Posting kegiatan Sekolah Siaga Kependudukan.</p>
        </Link>
      </div>
    </div>
  )
}