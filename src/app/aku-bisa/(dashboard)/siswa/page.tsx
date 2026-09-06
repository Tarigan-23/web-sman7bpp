"use client"

import React, { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import * as XLSX from "xlsx"

interface SiswaItem {
    id: number
    nama: string
    nisn: string
    jenis_kelamin: string
    kelas: string
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
    const [importKelasTarget, setImportKelasTarget] = useState("X-A")
    const [importing, setImporting] = useState(false)

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
                const { error } = await supabase
                    .from("siswa")
                    .update({ nama, nisn, jenis_kelamin: jenisKelamin, kelas })
                    .eq("id", editingId)

                if (error) throw error
                alert("Data siswa berhasil diperbarui! ✏️")
            } else {
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

    // FITUR IMPORT EXCEL
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setImporting(true)
        const reader = new FileReader()

        reader.onload = async (evt) => {
            try {
                const bstr = evt.target?.result
                const workbook = XLSX.read(bstr, { type: "binary" })
                const sheetName = workbook.SheetNames[0]
                const sheet = workbook.Sheets[sheetName]
                const data: any[] = XLSX.utils.sheet_to_json(sheet)

                if (data.length === 0) {
                    alert("File Excel kosong atau format tidak sesuai!")
                    setImporting(false)
                    return
                }

                // Petakan baris excel ke format database
                // Pastikan kolom Excel bernama: Nama, Nisn (atau NISN), Jenis Kelamin (atau JK)
                const formattedData = data.map((row, index) => ({
                    id: Date.now() + index,
                    nama: row.Nama || row.nama || row.NAMA || "Tanpa Nama",
                    nisn: String(row.Nisn || row.nisn || row.NISN || row.NIS || ""),
                    jenis_kelamin: row["Jenis Kelamin"] || row["jenis_kelamin"] || row.JK || row.jk || "Laki-laki",
                    kelas: importKelasTarget,
                }))

                const { error } = await supabase.from("siswa").insert(formattedData)
                if (error) throw error

                alert(`Berhasil mengimpor ${formattedData.length} siswa ke kelas ${importKelasTarget}! 📊`)
                fetchSiswa()
            } catch (err: any) {
                console.error("Gagal import excel:", err)
                alert("Terjadi kesalahan saat import: " + err.message)
            } finally {
                setImporting(false)
                e.target.value = "" // Reset input file
            }
        }

        reader.readAsBinaryString(file)
    }

    // Filter siswa
    const siswaFiltered = daftarSiswa.filter((s) => {
        const matchKelas = s.kelas === filterKelas
        const matchSearch = s.nama.toLowerCase().includes(searchQuery.toLowerCase()) || (s.nisn && s.nisn.includes(searchQuery))
        return matchKelas && matchSearch
    })

    // Statistik Gender per Kelas Filter Aktif
    const siswaKelasAktif = daftarSiswa.filter(s => s.kelas === filterKelas)
    const totalLaki = siswaKelasAktif.filter(s => s.jenis_kelamin?.toLowerCase().includes("laki") || s.jenis_kelamin === "L").length
    const totalPerempuan = siswaKelasAktif.filter(s => s.jenis_kelamin?.toLowerCase().includes("perempuan") || s.jenis_kelamin === "P").length

    return (
        <div className="max-w-5xl space-y-10">
            <div>
                <h1 className="text-3xl font-black text-white">Kelola Data Siswa</h1>
                <p className="text-slate-400 text-sm mt-1">Tambah satuan, import dari Excel, dan kelola data siswa SMAN 7 Balikpapan.</p>
            </div>

            {/* BOX IMPORT EXCEL */}
            <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 shadow-xl space-y-4">
                <h2 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                    <span>📥</span> Import Data Siswa dari Excel (.xlsx / .xls)
                </h2>
                <p className="text-slate-400 text-xs">
                    Pastikan file Excel memiliki header kolom: <strong className="text-white">Nama</strong>, <strong className="text-white">NISN</strong>, dan <strong className="text-white">Jenis Kelamin</strong> (Laki-laki / Perempuan).
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <div className="w-full sm:w-1/2">
                        <label className="block text-xs font-medium mb-1 text-slate-300">Pilih Kelas Tujuan Import</label>
                        <select
                            value={importKelasTarget}
                            onChange={(e) => setImportKelasTarget(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
                        >
                            {daftarKelasMaster.map((k) => (
                                <option key={k} value={k}>Kelas {k}</option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <label className="block text-xs font-medium mb-1 text-slate-300">Upload File Excel</label>
                        <input
                            type="file"
                            accept=".xlsx, .xls, .csv"
                            onChange={handleFileUpload}
                            disabled={importing}
                            className="w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 cursor-pointer disabled:opacity-50"
                        />
                    </div>
                </div>
                {importing && <p className="text-xs text-emerald-400 animate-pulse">Sedang memproses dan memasukkan data ke database...</p>}
            </div>

            {/* FORM TAMBAH / EDIT SISWA SATUAN */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-blue-400">
                        {editingId ? `Edit Siswa (ID: ${editingId})` : "Tambah Siswa Satuan"}
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

            {/* TABEL MANAJEMEN & STATISTIK GENDER */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-white">Daftar Siswa Tersimpan</h2>
                        {/* STATISTIK LAKI-LAKI & PEREMPUAN */}
                        <div className="flex gap-3 mt-1 text-xs">
                            <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                                👦 Laki-laki: <strong>{totalLaki}</strong>
                            </span>
                            <span className="text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
                                👧 Perempuan: <strong>{totalPerempuan}</strong>
                            </span>
                            <span className="text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                                Total: <strong>{siswaKelasAktif.length}</strong>
                            </span>
                        </div>
                    </div>

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
                                            NISN: {item.nisn || "-"} | <span className={item.jenis_kelamin?.toLowerCase().includes("laki") ? "text-blue-400" : "text-pink-400"}>{item.jenis_kelamin}</span>
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