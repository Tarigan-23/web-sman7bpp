"use client"

import React, { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import { compressImage } from "@/lib/imageCompressor"

export default function AdminProfilPage() {
    const [namaKepsek, setNamaKepsek] = useState("")
    const [jabatanKepsek, setJabatanKepsek] = useState("")
    const [kataSambutan, setKataSambutan] = useState("")
    const [visi, setVisi] = useState("")
    const [misiList, setMisiList] = useState<string[]>([""])

    const [fotoKepsekFile, setFotoKepsekFile] = useState<File | null>(null)
    const [fotoKepsekPreview, setFotoKepsekPreview] = useState<string | null>(null)

    const [strukturFile, setStrukturFile] = useState<File | null>(null)
    const [strukturPreview, setStrukturPreview] = useState<string | null>(null)

    const [loading, setLoading] = useState(true)
    const [uploading, setUploading] = useState(false)

    // Ambil data profil dari database (ID = 1)
    const fetchProfil = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from("profil_sekolah")
                .select("*")
                .eq("id", 1)
                .single()

            if (error && error.code !== "PGRST116") throw error

            if (data) {
                setNamaKepsek(data.nama_kepsek || "")
                setJabatanKepsek(data.jabatan_kepsek || "")
                setKataSambutan(data.kata_sambutan || "")
                setVisi(data.visi || "")
                setMisiList(data.misi && data.misi.length > 0 ? data.misi : [""])
                setFotoKepsekPreview(data.foto_kepsek || null)
                setStrukturPreview(data.struktur_organisasi || null)
            }
        } catch (err) {
            console.error("Gagal memuat profil sekolah:", err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProfil()
    }, [])

    // Handler Foto Kepsek dengan kompresi < 200KB
    const handleFotoKepsekChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            try {
                const compressed = await compressImage(file)
                setFotoKepsekFile(compressed)
                setFotoKepsekPreview(URL.createObjectURL(compressed))
            } catch {
                setFotoKepsekFile(file)
                setFotoKepsekPreview(URL.createObjectURL(file))
            }
        }
    }

    // Handler Struktur Organisasi dengan kompresi < 200KB
    const handleStrukturChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            try {
                const compressed = await compressImage(file)
                setStrukturFile(compressed)
                setStrukturPreview(URL.createObjectURL(compressed))
            } catch {
                setStrukturFile(file)
                setStrukturPreview(URL.createObjectURL(file))
            }
        }
    }

    // Pengelolaan poin Misi
    const handleAddMisi = () => setMisiList([...misiList, ""])
    const handleMisiChange = (index: number, val: string) => {
        const updated = [...misiList]
        updated[index] = val
        setMisiList(updated)
    }
    const handleRemoveMisi = (index: number) => {
        setMisiList(misiList.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setUploading(true)

        try {
            let fotoUrl = fotoKepsekPreview || ""
            let strukturUrl = strukturPreview || ""

            // Upload Foto Kepsek jika ada file baru
            if (fotoKepsekFile) {
                const fileExt = fotoKepsekFile.name.split(".").pop()
                const fileName = `kepsek-${Date.now()}.${fileExt}`
                const filePath = `profil/${fileName}`

                const { error: upErr } = await supabase.storage.from("media_sman7").upload(filePath, fotoKepsekFile)
                if (upErr) throw upErr

                const { data: pubData } = supabase.storage.from("media_sman7").getPublicUrl(filePath)
                fotoUrl = pubData.publicUrl
            }

            // Upload Gambar Struktur Organisasi jika ada file baru
            if (strukturFile) {
                const fileExt = strukturFile.name.split(".").pop()
                const fileName = `struktur-${Date.now()}.${fileExt}`
                const filePath = `profil/${fileName}`

                const { error: upErr } = await supabase.storage.from("media_sman7").upload(filePath, strukturFile)
                if (upErr) throw upErr

                const { data: pubData } = supabase.storage.from("media_sman7").getPublicUrl(filePath)
                strukturUrl = pubData.publicUrl
            }

            // Simpan atau Update ke database (ID = 1)
            const payload = {
                id: 1,
                nama_kepsek: namaKepsek,
                jabatan_kepsek: jabatanKepsek,
                foto_kepsek: fotoUrl,
                kata_sambutan: kataSambutan,
                visi,
                misi: misiList.filter((m) => m.trim() !== ""),
                struktur_organisasi: strukturUrl,
            }

            const { error: upsertErr } = await supabase
                .from("profil_sekolah")
                .upsert(payload, { onConflict: "id" })

            if (upsertErr) throw upsertErr

            alert("Profil Sekolah, Sambutan & Struktur Organisasi berhasil diperbarui! 🎉")
            fetchProfil()
        } catch (err: any) {
            console.error("Gagal menyimpan profil:", err)
            alert("Terjadi kesalahan: " + (err.message || "Gagal menyimpan"))
        } finally {
            setUploading(false)
        }
    }

    if (loading) {
        return <div className="text-center py-12 text-slate-500">Memuat data profil sekolah...</div>
    }

    return (
        <div className="max-w-4xl space-y-10">
            <div>
                <h1 className="text-3xl font-black text-white">Kelola Profil & Sambutan Sekolah</h1>
                <p className="text-slate-400 text-sm mt-1">Ubah kepala sekolah, kata sambutan, visi, misi, dan struktur organisasi.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* BAGIAN KEPALA SEKOLAH & SAMBUTAN */}
                    <div className="space-y-4 border-b border-slate-800 pb-6">
                        <h2 className="text-lg font-bold text-blue-400">Kepala Sekolah & Kata Sambutan</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-slate-300">Nama Lengkap & Gelar Kepsek</label>
                                <input
                                    type="text"
                                    value={namaKepsek}
                                    onChange={(e) => setNamaKepsek(e.target.value)}
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                                    placeholder="Contoh: Puspani, M. Pd."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1 text-slate-300">Jabatan</label>
                                <input
                                    type="text"
                                    value={jabatanKepsek}
                                    onChange={(e) => setJabatanKepsek(e.target.value)}
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                                    placeholder="Contoh: Kepala SMA Negeri 7 Balikpapan"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Foto Kepala Sekolah (Otomatis Kompres &lt; 200KB)</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFotoKepsekChange}
                                className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                            />
                        </div>

                        {fotoKepsekPreview && (
                            <div className="w-32 h-40 relative rounded-xl overflow-hidden border border-slate-700">
                                <Image src={fotoKepsekPreview} alt="Foto Kepsek" fill className="object-cover" />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Kata Sambutan</label>
                            <textarea
                                value={kataSambutan}
                                onChange={(e) => setKataSambutan(e.target.value)}
                                rows={6}
                                required
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                                placeholder="Tuliskan teks sambutan kepala sekolah..."
                            />
                        </div>
                    </div>

                    {/* BAGIAN VISI & MISI */}
                    <div className="space-y-4 border-b border-slate-800 pb-6">
                        <h2 className="text-lg font-bold text-blue-400">Visi & Misi Sekolah</h2>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Visi Sekolah</label>
                            <textarea
                                value={visi}
                                onChange={(e) => setVisi(e.target.value)}
                                rows={3}
                                required
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                                placeholder="Masukkan visi sekolah..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-300">Poin-poin Misi Sekolah</label>
                            {misiList.map((misi, index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <input
                                        type="text"
                                        value={misi}
                                        onChange={(e) => handleMisiChange(index, e.target.value)}
                                        required
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                                        placeholder={`Poin misi ke-${index + 1}`}
                                    />
                                    {misiList.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveMisi(index)}
                                            className="px-3 py-2 bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white rounded-xl text-xs font-bold transition border border-red-500/30"
                                        >
                                            Hapus
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddMisi}
                                className="mt-2 text-xs bg-slate-800 hover:bg-slate-700 text-blue-400 font-semibold px-4 py-2 rounded-xl transition border border-slate-700"
                            >
                                + Tambah Poin Misi
                            </button>
                        </div>
                    </div>

                    {/* BAGIAN STRUKTUR ORGANISASI */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-blue-400">Struktur Organisasi Sekolah</h2>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Upload Bagan / Gambar Struktur Organisasi (Otomatis Kompres &lt; 200KB)</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleStrukturChange}
                                className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                            />
                        </div>

                        {strukturPreview && (
                            <div className="w-full aspect-video relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
                                <Image src={strukturPreview} alt="Struktur Organisasi" fill className="object-contain" />
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={uploading}
                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition duration-200 shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                        {uploading ? "Menyimpan Perubahan Profil..." : "Simpan Perubahan Profil"}
                    </button>
                </form>
            </div>
        </div>
    )
}