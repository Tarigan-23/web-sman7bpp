"use client"

import React, { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

interface SiswaItem {
    id: number
    nama: string
    nisn: string
    jenis_kelamin: string
    kelas: string // Nama kelas (misal: X-A, XI-A1, dll)
}

const daftarKelasMaster = [
    "X-A", "X-B", "X-C", "X-D", "X-E", "X-F", "X-G", "X-H", "X-I", "X-J", "X-K",
    "XI-A1", "XI-A2", "XI-B1", "XI-B2", "XI-C", "XI-D1", "XI-D2", "XI-D3", "XI-D4",
    "XII-A1", "XII-A2", "XII-B1", "XII-B2", "XII-C1", "XII-C2", "XII-D1", "XII-D2", "XII-D3"
]

export default function AdminSiswaPage() {
    const [nama, setNama] = useState("")
    const [nisn, setNisn] = useState("")
    const [jenisKelamin, setJenisKelamin] = useState("Laki-laki")
    const [kelas, setKelas] = useState("X-A")

    const [daftarSiswa, setDaftarSiswa] = useState<SiswaItem[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)
    const [filterKelas, setFilterKelas] = useState("X-A")
    const [searchQuery, setSearchQuery] = useState("")

    const fetchSiswa = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from("siswa")
                .select("*")
                .order("id", { ascending: false })

            if (error) throw error
            if (data) setDaftarSiswa(data)
        } catch (err) {
            console.error("Gagal memuat data siswa:", err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSiswa()
    }, [])

    const handleEditClick = (item: SiswaItem) => {
        setEditingId(item.id)
        setNama(item.nama || "")
        setNisn(item.nisn || "")
        setJenisKelamin(item.jenis_kelamin || "Laki-laki")
        setKelas(item.kelas || "X-A")
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const handleCancelEdit = () => {
        setEditingId(null)
        setNama("")
        setNisn("")
        setJenisKelamin("Laki-laki")
        setKelas("X-A")
    }

    const handleDelete = async (id: number) => {
        if (!confirm("Yakin ingin menghapus data siswa ini, bray?")) return

        try {
            const { error } = await supabase.from("siswa").delete().eq("id", id)
            if (error) throw error
            alert("Data siswa berhasil dihapus! 🗑️")
            fetchSiswa()
        } catch (err: any) {
            console.error("Gagal menghapus:", err)
            alert("Terjadi kesalahan: " + err.message)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            if (editingId) {
                // Mode Update
                const { error } = await supabase
                    .from("siswa")
                    .update({ nama, nisn, jenis_kelamin: jenisKelamin, kelas })
                    .eq("id", editingId)

                if (error) throw error
                alert("Data siswa berhasil diperbarui! ✏️")
            } else {
                // Mode Insert Baru
                const { error } = await supabase.from("siswa").insert([
                    {
                        id: Date.now(),
                        nama,
                        nisn,
                        jenis_kelamin: jenisKelamin,
                        kelas,
                    },
                ])

                if (error) throw error
                alert("Siswa baru berhasil ditambahkan! 🎓")
            }

            handleCancelEdit()
            fetchSiswa()
        } catch (err: any) {
            console.error("Gagal menyimpan siswa:", err)
            alert("Terjadi kesalahan: " + err.message)
        } finally {
            setLoading(false)
        }
    }

    // Filter siswa berdasarkan kelas yang dipilih dan pencarian nama/NISN
    const siswaFiltered = daftarSiswa.filter((s) => {
        const matchKelas = s.kelas === filterKelas
        const matchSearch = s.nama.toLowerCase().includes(searchQuery.toLowerCase()) || (s.nisn && s.nisn.includes(searchQuery))
        return matchKelas && matchSearch
    })

    return (
        <div className="max-w-5xl space-y-10">
            <div>
                <h1 className="text-3xl font-black text-white">Kelola Data Siswa</h1>
                <p className="text-slate-400 text-sm mt-1">Tambah, edit, dan hapus data siswa per kelas di SMA Negeri 7 Balikpapan.</p>
            </div>

            {/* FORM TAMBAH / EDIT SISWA */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-blue-400">
                        {editingId ? `Edit Siswa (ID: ${editingId})` : "Tambah Siswa Baru"}
                    </h2>
                    {editingId && (
                        <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition"
                        >
                            Batalkan Edit
                        </button>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Nama Lengkap Siswa</label>
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                required
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                                placeholder="Contoh: Ahmad Raihan"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">NISN (Opsional)</label>
                            <input
                                type="text"
                                value={nisn}
                                onChange={(e) => setNisn(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                                placeholder="Contoh: 0081234567"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Kelas</label>
                            <select
                                value={kelas}
                                onChange={(e) => setKelas(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                            >
                                {daftarKelasMaster.map((k) => (
                                    <option key={k} value={k}>{k}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Jenis Kelamin</label>
                            <select
                                value={jenisKelamin}
                                onChange={(e) => setJenisKelamin(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                            >
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition duration-200 shadow-lg cursor-pointer"
                    >
                        {editingId ? "Simpan Perubahan Siswa" : "Tambah Siswa ke Database"}
                    </button>
                </form>
            </div>

            {/* TABEL MANAJEMEN & FILTER SISWA */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <h2 className="text-xl font-bold text-white">Daftar Siswa Tersimpan</h2>

                    {/* Filter Kelas & Search */}
                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        <select
                            value={filterKelas}
                            onChange={(e) => setFilterKelas(e.target.value)}
                            className="bg-slate-950 border border-slate-800 text-white text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-blue-500"
                        >
                            {daftarKelasMaster.map((k) => (
                                <option key={k} value={k}>Kelas {k}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Cari nama / NISN..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-slate-950 border border-slate-800 text-white text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-blue-500 flex-1 md:w-48"
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-8 text-slate-500">Memuat data siswa...</div>
                ) : siswaFiltered.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">Belum ada data siswa untuk kelas {filterKelas}.</div>
                ) : (
                    <div className="space-y-2">
                        {siswaFiltered.map((item, index) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-slate-950 border border-slate-800/80 p-3.5 rounded-xl hover:border-slate-700 transition"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <h3 className="text-white font-bold text-sm">{item.nama}</h3>
                                        <p className="text-slate-400 text-xs">
                                            NISN: {item.nisn || "-"} | {item.jenis_kelamin}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleEditClick(item)}
                                        className="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-lg text-xs font-semibold transition border border-blue-500/30"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="px-3 py-1.5 bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white rounded-lg text-xs font-semibold transition border border-red-500/30"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}