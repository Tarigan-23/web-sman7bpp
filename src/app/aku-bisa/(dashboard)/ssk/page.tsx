"use client"

import React, { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import { compressImage } from "@/lib/imageCompressor"

interface SSKItem {
  id: number
  judul: string
  kategori: string
  tanggal: string
  narasi_lengkap?: string
  tipe_media?: string
  media_urls?: any
  video_embed_url?: string
  tautan_berita?: string
  penanggung_jawab?: string
}

export default function AdminSSKPage() {
  const [judul, setJudul] = useState("")
  const [kategori, setKategori] = useState("GenRe & Kependudukan")
  const [tanggal, setTanggal] = useState("")
  const [narasiLengkap, setNarasiLengkap] = useState("")
  const [tipeMedia, setTipeMedia] = useState<"image" | "video">("image")
  const [videoEmbedUrl, setVideoEmbedUrl] = useState("")
  const [tautanBerita, setTautanBerita] = useState("")
  const [penanggungJawab, setPenanggungJawab] = useState("Pik-R SMAN 7")

  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)

  // State Manajemen & Edit SSK
  const [daftarSSK, setDaftarSSK] = useState<SSKItem[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [loadingList, setLoadingList] = useState(true)

  const fetchSSKList = async () => {
    try {
      setLoadingList(true)
      const { data, error } = await supabase
        .from("ssk_program")
        .select("*")
        .order("id", { ascending: false })

      if (error) throw error
      if (data) setDaftarSSK(data)
    } catch (err) {
      console.error("Gagal memuat daftar SSK:", err)
    } finally {
      setLoadingList(false)
    }
  }

  useEffect(() => {
    fetchSSKList()
  }, [])

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      try {
        setUploading(true)
        const compressedFiles = await Promise.all(
          filesArray.map(async (file) => {
            try {
              return await compressImage(file)
            } catch {
              return file
            }
          })
        )

        setSelectedFiles((prev) => [...prev, ...compressedFiles])
        const newPreviews = compressedFiles.map((file) => URL.createObjectURL(file))
        setPreviews((prev) => [...prev, ...newPreviews])
      } catch (err) {
        console.error("Gagal mengompres gambar SSK:", err)
      } finally {
        setUploading(false)
      }
    }
  }

  const handleRemoveImage = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
    setPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleEditClick = (item: SSKItem) => {
    setEditingId(item.id)
    setJudul(item.judul || "")
    setKategori(item.kategori || "GenRe & Kependudukan")
    setTanggal(item.tanggal || "")
    setNarasiLengkap(item.narasi_lengkap || "")
    setTipeMedia((item.tipe_media as "image" | "video") || "image")
    setVideoEmbedUrl(item.video_embed_url || "")
    setTautanBerita(item.tautan_berita || "")
    setPenanggungJawab(item.penanggung_jawab || "Pik-R SMAN 7")
    setSelectedFiles([])

    let existingThumbs: string[] = []
    if (item.media_urls) {
      if (Array.isArray(item.media_urls)) {
        existingThumbs = item.media_urls
      } else if (typeof item.media_urls === "string") {
        try {
          const parsed = JSON.parse(item.media_urls)
          existingThumbs = Array.isArray(parsed) ? parsed : [item.media_urls]
        } catch {
          existingThumbs = [item.media_urls]
        }
      }
    }
    setPreviews(existingThumbs)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setJudul("")
    setKategori("GenRe & Kependudukan")
    setTanggal("")
    setNarasiLengkap("")
    setTipeMedia("image")
    setVideoEmbedUrl("")
    setTautanBerita("")
    setPenanggungJawab("Pik-R SMAN 7")
    setSelectedFiles([])
    setPreviews([])
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Apakah kamu yakin ingin menghapus program SSK ini, bray?")) return

    try {
      const { error } = await supabase.from("ssk_program").delete().eq("id", id)
      if (error) throw error
      alert("Program SSK berhasil dihapus! 🗑️")
      fetchSSKList()
    } catch (err: any) {
      console.error("Gagal menghapus SSK:", err)
      alert("Terjadi kesalahan saat menghapus: " + (err.message || ""))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    try {
      let uploadedImageUrls: string[] = []

      if (tipeMedia === "image" && selectedFiles.length > 0) {
        for (const file of selectedFiles) {
          const fileExt = file.name.split(".").pop()
          const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
          const filePath = `ssk/${fileName}`

          const { error: uploadError } = await supabase.storage
            .from("media_sman7")
            .upload(filePath, file)

          if (uploadError) throw uploadError

          const { data: publicUrlData } = supabase.storage
            .from("media_sman7")
            .getPublicUrl(filePath)

          uploadedImageUrls.push(publicUrlData.publicUrl)
        }
      }

      if (editingId) {
        const updateData: any = {
          judul,
          kategori,
          tanggal,
          narasi_lengkap: narasiLengkap,
          tipe_media: tipeMedia,
          video_embed_url: tipeMedia === "video" ? videoEmbedUrl : null,
          tautan_berita: tautanBerita,
          penanggung_jawab: penanggungJawab,
        }

        if (uploadedImageUrls.length > 0) {
          updateData.media_urls = uploadedImageUrls
        }

        const { error: updateError } = await supabase
          .from("ssk_program")
          .update(updateData)
          .eq("id", editingId)

        if (updateError) throw updateError

        alert("Program SSK berhasil diperbarui! ✏️🌱")
      } else {
        const { error: insertError } = await supabase.from("ssk_program").insert([
          {
            id: Date.now(),
            judul,
            kategori,
            tanggal,
            narasi_lengkap: narasiLengkap,
            tipe_media: tipeMedia,
            media_urls: uploadedImageUrls.length > 0 ? uploadedImageUrls : ["/bg1.jpeg"],
            video_embed_url: tipeMedia === "video" ? videoEmbedUrl : null,
            tautan_berita: tautanBerita,
            penanggung_jawab: penanggungJawab,
          },
        ])

        if (insertError) throw insertError

        alert("Kegiatan SSK berhasil dipublikasikan! 🌱")
      }

      handleCancelEdit()
      fetchSSKList()
    } catch (err: any) {
      console.error("Gagal memproses program SSK:", err)
      alert("Terjadi kesalahan: " + (err.message || "Gagal simpan"))
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-4xl space-y-10">
      <div>
        <h1 className="text-3xl font-black text-white">Kelola Program SSK</h1>
        <p className="text-slate-400 text-sm mt-1">Posting, edit, dan hapus edukasi serta kegiatan Sekolah Siaga Kependudukan.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-emerald-400">
            {editingId ? `Edit Program SSK (ID: ${editingId})` : "Tambah Program SSK Baru"}
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
              <label className="block text-sm font-medium mb-1 text-slate-300">Judul Kegiatan SSK</label>
              <input
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                placeholder="Judul program..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">Tanggal Kegiatan</label>
              <input
                type="text"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                placeholder="Contoh: 10 Agustus 2026"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">Kategori Sub-Program</label>
              <input
                type="text"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                placeholder="GenRe & Kependudukan"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">Penanggung Jawab / Pelaksana</label>
              <input
                type="text"
                value={penanggungJawab}
                onChange={(e) => setPenanggungJawab(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                placeholder="Pik-R SMAN 7 Balikpapan"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Narasi Lengkap Kegiatan</label>
            <textarea
              value={narasiLengkap}
              onChange={(e) => setNarasiLengkap(e.target.value)}
              rows={5}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
              placeholder="Tuliskan ulasan narasi lengkap kegiatan SSK..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Tipe Media Utama</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-300">
                <input
                  type="radio"
                  name="tipeMedia"
                  value="image"
                  checked={tipeMedia === "image"}
                  onChange={() => setTipeMedia("image")}
                  className="accent-emerald-500"
                />
                Galeri Foto
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-300">
                <input
                  type="radio"
                  name="tipeMedia"
                  value="video"
                  checked={tipeMedia === "video"}
                  onChange={() => setTipeMedia("video")}
                  className="accent-emerald-500"
                />
                Video Embed (Instagram Reel / YouTube)
              </label>
            </div>
          </div>

          {tipeMedia === "video" ? (
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">URL Embed Video Instagram</label>
              <input
                type="text"
                value={videoEmbedUrl}
                onChange={(e) => setVideoEmbedUrl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                placeholder="https://www.instagram.com/p/xxx/embed"
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">
                Upload Foto Kegiatan SSK (Otomatis Kompres &lt; 200KB)
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 cursor-pointer"
              />
            </div>
          )}

          {previews.length > 0 && tipeMedia === "image" && (
            <div className="space-y-2">
              <span className="text-xs text-slate-400">Preview ({previews.length} Foto):</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {previews.map((src, index) => (
                  <div key={index} className="relative group rounded-xl overflow-hidden border border-slate-700 aspect-video">
                    <img src={src} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-red-600/80 hover:bg-red-600 text-white p-1 rounded-full text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Tautan Postingan Instagram (Opsional)</label>
            <input
              type="text"
              value={tautanBerita}
              onChange={(e) => setTautanBerita(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
              placeholder="https://instagram.com/p/..."
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="w-full py-3 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl transition duration-200 shadow-lg disabled:opacity-50 cursor-pointer"
          >
            {uploading ? "Memproses Data & Gambar..." : editingId ? "Simpan Perubahan SSK" : "Terbitkan Kegiatan SSK"}
          </button>
        </form>
      </div>

      {/* DAFTAR SSK TERSIMPAN (TABEL MANAJEMEN) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h2 className="text-xl font-bold text-white">Daftar Program SSK Tersimpan</h2>

        {loadingList ? (
          <div className="text-center py-8 text-slate-500">Memuat daftar program SSK...</div>
        ) : daftarSSK.length === 0 ? (
          <div className="text-center py-8 text-slate-500">Belum ada data program SSK di database.</div>
        ) : (
          <div className="space-y-3">
            {daftarSSK.map((item) => {
              let thumb = "/bg1.jpeg"
              if (item.media_urls) {
                if (Array.isArray(item.media_urls) && item.media_urls.length > 0) {
                  thumb = item.media_urls[0]
                } else if (typeof item.media_urls === "string") {
                  try {
                    const parsed = JSON.parse(item.media_urls)
                    thumb = Array.isArray(parsed) && parsed.length > 0 ? parsed[0] : item.media_urls
                  } catch {
                    thumb = item.media_urls
                  }
                }
              }

              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-950 border border-slate-800/80 p-4 rounded-xl hover:border-slate-700 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-900 border border-slate-800">
                      <Image src={thumb} alt={item.judul} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20">
                          {item.kategori}
                        </span>
                        <span className="text-[10px] text-slate-400">📅 {item.tanggal}</span>
                      </div>
                      <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1 mt-1">{item.judul}</h3>
                      <p className="text-slate-400 text-xs line-clamp-1">Pelaksana: {item.penanggung_jawab || "Pik-R SMAN 7"}</p>
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