"use client"

import React, { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AdminBeritaPage() {
  const [judul, setJudul] = useState("")
  const [tanggal, setTanggal] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [sumberUrl, setSumberUrl] = useState("")

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
    if (selectedFiles.length === 0) {
      alert("Pilih minimal 1 gambar berita bray!")
      return
    }

    setUploading(true)
    try {
      const uploadedImageUrls: string[] = []

      for (const file of selectedFiles) {
        const fileExt = file.name.split(".").pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
        const filePath = `berita/${fileName}`

        const { error: uploadError } = await supabase.storage
          .from("media_sman7")
          .upload(filePath, file)

        if (uploadError) throw uploadError

        const { data: publicUrlData } = supabase.storage
          .from("media_sman7")
          .getPublicUrl(filePath)

        uploadedImageUrls.push(publicUrlData.publicUrl)
      }

      const { error: insertError } = await supabase.from("berita").insert([
        {
          judul,
          tanggal,
          deskripsi,
          sumber_url: sumberUrl,
          gambar: uploadedImageUrls,
          created_at: new Date().toISOString(), 
        },
      ])

      if (insertError) throw insertError

      alert("Berita baru berhasil diterbitkan! 🎉")

      setJudul("")
      setTanggal("")
      setDeskripsi("")
      setSumberUrl("")
      setSelectedFiles([])
      setPreviews([])
    } catch (err: any) {
      console.error("Gagal mengunggah berita:", err)
      alert("Terjadi kesalahan: " + (err.message || "Gagal upload"))
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Kelola Berita</h1>
        <p className="text-slate-400 text-sm mt-1">Tambah berita dan kegiatan terbaru sekolah ke dalam sistem.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Judul Berita</label>
            <input
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
              placeholder="Masukkan judul berita..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Tanggal Berita</label>
            <input
              type="text"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
              placeholder="Contoh: 18 Agustus 2026"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Deskripsi / Isi Berita</label>
            <textarea
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              rows={5}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
              placeholder="Tuliskan isi berita..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Sumber URL / Tautan (Opsional)</label>
            <input
              type="text"
              value={sumberUrl}
              onChange={(e) => setSumberUrl(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
              placeholder="https://instagram.com/p/..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">
              Upload Gambar (Bisa Pilih Lebih Dari 1 File)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
            />
          </div>

          {previews.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs text-slate-400">Preview ({previews.length} Gambar):</span>
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

          <button
            type="submit"
            disabled={uploading}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition duration-200 shadow-lg disabled:opacity-50 cursor-pointer"
          >
            {uploading ? "Mengunggah Gambar & Menerbitkan..." : "Terbitkan Berita"}
          </button>
        </form>
      </div>
    </div>
  )
}