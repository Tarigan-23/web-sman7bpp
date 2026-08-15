"use client"

import React, { useState } from "react"
import { supabase } from "../../../lib/supabase"

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setSelectedFiles((prev) => [...prev, ...filesArray])
      const newPreviews = filesArray.map((file) => URL.createObjectURL(file))
      setPreviews((prev) => [...prev, ...newPreviews])
    }
  }

  const handleRemoveImage = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
    setPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    try {
      const uploadedImageUrls: string[] = []

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

      const { error: insertError } = await supabase.from("ssk_program").insert([
        {
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

      setJudul("")
      setTanggal("")
      setNarasiLengkap("")
      setVideoEmbedUrl("")
      setTautanBerita("")
      setSelectedFiles([])
      setPreviews([])
    } catch (err: any) {
      console.error("Gagal menambah program SSK:", err)
      alert("Terjadi kesalahan: " + (err.message || "Gagal simpan"))
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Kelola Program SSK</h1>
        <p className="text-slate-400 text-sm mt-1">Posting edukasi dan kegiatan Sekolah Siaga Kependudukan.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
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
              <label className="flex items-center gap-2 cursor-pointer text-sm">
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
              <label className="flex items-center gap-2 cursor-pointer text-sm">
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
              <label className="block text-sm font-medium mb-1 text-slate-300">Upload Foto Kegiatan SSK</label>
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
            {uploading ? "Menerbitkan SSK..." : "Terbitkan Kegiatan SSK"}
          </button>
        </form>
      </div>
    </div>
  )
}