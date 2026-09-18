"use client"

import React, { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

interface VideoItem {
    id: number
    judul: string
    youtube_url: string
    created_at: string
}

export default function AdminVideoPage() {
    const [judul, setJudul] = useState("")
    const [youtubeUrl, setYoutubeUrl] = useState("")
    const [daftarVideo, setDaftarVideo] = useState<VideoItem[]>([])
    const [loading, setLoading] = useState(true)
    const [uploading, setUploading] = useState(false)

    const fetchVideoList = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from("video")
                .select("*")
                .order("id", { ascending: false }) // Terbaru berada di atas/urutan pertama

            if (error) throw error
            if (data) setDaftarVideo(data)
        } catch (err) {
            console.error("Gagal memuat daftar video:", err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchVideoList()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!judul || !youtubeUrl) {
            alert("Judul dan Link YouTube wajib diisi bray!")
            return
        }

        setUploading(true)
        try {
            const { error } = await supabase.from("video").insert([
                {
                    judul,
                    youtube_url: youtubeUrl,
                    created_at: new Date().toISOString(),
                },
            ])

            if (error) throw error

            alert("Video baru berhasil ditambahkan! 🎥🎉")
            setJudul("")
            setYoutubeUrl("")
            fetchVideoList()
        } catch (err: any) {
            console.error("Gagal menyimpan video:", err)
            alert("Terjadi kesalahan: " + (err.message || ""))
        } finally {
            setUploading(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm("Yakin ingin menghapus video ini, bray?")) return

        try {
            const { error } = await supabase.from("video").delete().eq("id", id)
            if (error) throw error
            alert("Video berhasil dihapus! 🗑️")
            fetchVideoList()
        } catch (err: any) {
            console.error("Gagal menghapus video:", err)
            alert("Gagal menghapus: " + (err.message || ""))
        }
    }

    return (
        <div className="max-w-5xl space-y-10">
            <div>
                <h1 className="text-3xl font-black text-white">Kelola Video Terbaru</h1>
                <p className="text-slate-400 text-sm mt-1">Tambah atau hapus video YouTube SMANJU yang akan tampil di halaman depan.</p>
            </div>

            {/* FORM TAMBAH VIDEO */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <h2 className="text-lg font-bold text-blue-400 mb-4">Tambah Tautan Video YouTube Baru</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-300">Judul Video</label>
                        <input
                            type="text"
                            value={judul}
                            onChange={(e) => setJudul(e.target.value)}
                            required
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                            placeholder="Contoh: School Tour SMAN 7 Balikpapan"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-300">Link URL YouTube</label>
                        <input
                            type="text"
                            value={youtubeUrl}
                            onChange={(e) => setYoutubeUrl(e.target.value)}
                            required
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                            placeholder="Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx"
                        />
                        <p className="text-xs text-slate-500 mt-1.5">Sistem akan otomatis mengonversi link YouTube menjadi format pemutar video.</p>
                    </div>

                    <button
                        type="submit"
                        disabled={uploading}
                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition duration-200 shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                        {uploading ? "Menyimpan Video..." : "Terbitkan Video ke Beranda"}
                    </button>
                </form>
            </div>

            {/* DAFTAR VIDEO TERSIMPAN */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                <h2 className="text-xl font-bold text-white">Daftar Video Tersimpan (Terbaru di Urutan Pertama)</h2>

                {loading ? (
                    <div className="text-center py-8 text-slate-500">Memuat daftar video...</div>
                ) : daftarVideo.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">Belum ada data video di database.</div>
                ) : (
                    <div className="space-y-3">
                        {daftarVideo.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-950 border border-slate-800/80 p-4 rounded-xl hover:border-slate-700 transition"
                            >
                                <div>
                                    <span className="text-[10px] text-blue-400 font-mono">ID: {item.id}</span>
                                    <h3 className="text-white font-bold text-sm sm:text-base">{item.judul}</h3>
                                    <a href={item.youtube_url} target="_blank" rel="noopener noreferrer" className="text-slate-400 text-xs hover:underline truncate block mt-0.5">
                                        🔗 {item.youtube_url}
                                    </a>
                                </div>

                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="px-3 py-1.5 bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white rounded-lg text-xs font-semibold transition border border-red-500/30 shrink-0 cursor-pointer"
                                >
                                    Hapus
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}