"use client"

import React, { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import { compressImage } from "@/lib/imageCompressor"

interface EkskulItem {
    id: number
    nama_ekskul?: string
    nama?: string
    kategori: string
    pembina?: string
    pelatih?: string
    logo: any
}

export default function AdminEkskulPage() {
    const [nama, setNama] = useState("")
    const [kategori, setKategori] = useState("Umum")
    const [pembina, setPembina] = useState("")
    const [pelatih, setPelatih] = useState("")

    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [uploading, setUploading] = useState(false)

    const [daftarEkskul, setDaftarEkskul] = useState<EkskulItem[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [loadingList, setLoadingList] = useState(true)

    const fetchEkskulList = async () => {
        try {
            setLoadingList(true)
            const { data, error } = await supabase
                .from("ekskul")
                .select("*")
                .order("id", { ascending: false })

            if (error) throw error
            if (data) setDaftarEkskul(data)
        } catch (err) {
            console.error("Gagal memuat daftar ekstrakurikuler:", err)
        } finally {
            setLoadingList(false)
        }
    }

    useEffect(() => {
        fetchEkskulList()
    }, [])

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            try {
                const compressedFile = await compressImage(file)
                setSelectedFile(compressedFile)
                setPreview(URL.createObjectURL(compressedFile))
            } catch (err) {
                console.error("Gagal mengompres gambar:", err)
                setSelectedFile(file)
                setPreview(URL.createObjectURL(file))
            }
        }
    }

    const handleEditClick = (item: EkskulItem) => {
        setEditingId(item.id)
        setNama(item.nama_ekskul || item.nama || "")
        setKategori(item.kategori || "Umum")
        setPembina(item.pembina || "")
        setPelatih(item.pelatih || "")
        setSelectedFile(null)

        let thumb = "/ggi.png"
        const targetLogo = item.logo
        if (targetLogo) {
            if (Array.isArray(targetLogo) && targetLogo.length > 0) {
                thumb = targetLogo[0]
            } else if (typeof targetLogo === "string") {
                try {
                    const parsed = JSON.parse(targetLogo)
                    thumb = Array.isArray(parsed) && parsed.length > 0 ? parsed[0] : targetLogo
                } catch {
                    thumb = targetLogo
                }
            }
        }
        setPreview(thumb)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const handleCancelEdit = () => {
        setEditingId(null)
        setNama("")
        setKategori("Umum")
        setPembina("")
        setPelatih("")
        setSelectedFile(null)
        setPreview(null)
    }

    const handleDelete = async (id: number) => {
        if (!confirm("Apakah kamu yakin ingin menghapus data ekstrakurikuler ini, bray?")) return

        try {
            const { error } = await supabase.from("ekskul").delete().eq("id", id)
            if (error) throw error
            alert("Ekstrakurikuler berhasil dihapus! 🗑️")
            fetchEkskulList()
        } catch (err: any) {
            console.error("Gagal menghapus ekskul:", err)
            alert("Terjadi kesalahan saat menghapus: " + (err.message || ""))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!editingId && !selectedFile && !preview) {
            alert("Pilih logo atau foto ekstrakurikuler bray!")
            return
        }

        setUploading(true)

        try {
            let logoUrl = preview || "/ggi.png"

            if (selectedFile) {
                const fileExt = selectedFile.name.split(".").pop()
                const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
                const filePath = `ekskul/${fileName}`

                const { error: uploadError } = await supabase.storage
                    .from("media_sman7")
                    .upload(filePath, selectedFile)

                if (uploadError) throw uploadError

                const { data: publicUrlData } = supabase.storage
                    .from("media_sman7")
                    .getPublicUrl(filePath)

                logoUrl = publicUrlData.publicUrl
            }

            if (editingId) {
                const updateData = {
                    nama_ekskul: nama,
                    kategori,
                    pembina,
                    pelatih,
                    logo: logoUrl,
                }

                const { error: updateError } = await supabase
                    .from("ekskul")
                    .update(updateData)
                    .eq("id", editingId)

                if (updateError) throw updateError

                alert("Ekstrakurikuler berhasil diperbarui! ✏️🎉")
            } else {
                const { error: insertError } = await supabase.from("ekskul").insert([
                    {
                        id: Date.now(),
                        nama_ekskul: nama,
                        kategori,
                        pembina,
                        pelatih,
                        logo: logoUrl,
                    },
                ])

                if (insertError) throw insertError

                alert("Ekstrakurikuler baru berhasil ditambahkan! ⚽🎨")
            }

            handleCancelEdit()
            fetchEkskulList()
        } catch (err: any) {
            console.error("Gagal memproses ekstrakurikuler:", err)
            alert("Terjadi kesalahan: " + (err.message || "Gagal menyimpan"))
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="max-w-5xl space-y-10">
            <div>
                <h1 className="text-3xl font-black text-white">Kelola Ekstrakurikuler</h1>
                <p className="text-slate-400 text-sm mt-1">Tambah, edit, dan hapus data kegiatan ekstrakurikuler sekolah.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-emerald-400">
                        {editingId ? `Edit Ekskul (ID: ${editingId})` : "Tambah Ekskul Baru"}
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

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Nama Ekstrakurikuler</label>
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                required
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                                placeholder="Contoh: Paskibra / PMR / Futsal"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Kategori</label>
                            <select
                                value={kategori}
                                onChange={(e) => setKategori(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                            >
                                <option value="Umum">Umum</option>
                                <option value="Olahraga">Olahraga</option>
                                <option value="Akademik">Akademik</option>
                                <option value="Keagamaan">Keagamaan</option>
                                <option value="Seni">Seni</option>
                                <option value="Bela diri">Bela diri</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Nama Pembina (Opsional)</label>
                            <input
                                type="text"
                                value={pembina}
                                onChange={(e) => setPembina(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                                placeholder="Contoh: Sri Yunita, S.Pd"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Nama Pelatih (Opsional)</label>
                            <input
                                type="text"
                                value={pelatih}
                                onChange={(e) => setPelatih(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                                placeholder="Contoh: Wimpi atau -"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-300">Upload Logo / Foto Ekskul (Otomatis Kompres &lt; 200KB)</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 cursor-pointer"
                        />
                    </div>

                    {preview && (
                        <div className="w-32 h-32 rounded-xl overflow-hidden border border-slate-700 relative bg-black/50 p-2 flex items-center justify-center">
                            <img src={preview} alt="Pratinjau Logo" className="max-w-full max-h-full object-contain" />
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={uploading}
                        className="w-full py-3 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl transition duration-200 shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                        {uploading ? "Menyimpan Data..." : editingId ? "Simpan Perubahan Ekskul" : "Simpan Data Ekskul"}
                    </button>
                </form>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                <h2 className="text-xl font-bold text-white">Daftar Ekstrakurikuler Tersimpan</h2>

                {loadingList ? (
                    <div className="text-center py-8 text-slate-500">Memuat daftar ekstrakurikuler...</div>
                ) : daftarEkskul.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">Belum ada data ekstrakurikuler di database.</div>
                ) : (
                    <div className="space-y-3">
                        {daftarEkskul.map((item) => {
                            let thumb = "/ggi.png"
                            const targetLogo = item.logo
                            if (targetLogo) {
                                if (Array.isArray(targetLogo) && targetLogo.length > 0) {
                                    thumb = targetLogo[0]
                                } else if (typeof targetLogo === "string") {
                                    try {
                                        const parsed = JSON.parse(targetLogo)
                                        thumb = Array.isArray(parsed) && parsed.length > 0 ? parsed[0] : targetLogo
                                    } catch {
                                        thumb = targetLogo
                                    }
                                }
                            }

                            const namaEkskulVal = item.nama_ekskul || item.nama || "Tanpa Nama"

                            return (
                                <div
                                    key={item.id}
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-950 border border-slate-800/80 p-4 rounded-xl hover:border-slate-700 transition"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-black/60 border border-slate-800 p-1 flex items-center justify-center">
                                            <Image src={thumb} alt={namaEkskulVal} fill className="object-contain" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20 uppercase">
                                                {item.kategori || "Umum"}
                                            </span>
                                            <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1 mt-1">{namaEkskulVal}</h3>
                                            <p className="text-slate-400 text-xs line-clamp-1">
                                                Pembina: {item.pembina || "-"} | Pelatih: {item.pelatih || "-"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
                                        <button
                                            onClick={() => handleEditClick(item)}
                                            className="px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded-lg text-xs font-semibold transition border border-emerald-500/30"
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
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}