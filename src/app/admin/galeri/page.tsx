"use client"

import React, { useState } from "react"
import { supabase } from "../../../lib/supabase"

export default function AdminGaleriPage() {
  const [judul, setJudul] = useState("")
  const [kategori, setKategori] = useState("Kegiatan Sekolah")
  const [deskripsi, setDeskripsi] = useState("")

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) {
      alert("Pilih foto galeri yang akan diupload bray!")
      return
    }

    setUploading(true)

    try {
      const fileExt = selectedFile.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `galeri/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from("media_sman7")
        .upload(filePath, selectedFile)

      if (uploadError) throw uploadError

      const { data: publicUrlData } = supabase.storage
        .from("media_sman7")
        .getPublicUrl(filePath)

      const imageUrl = publicUrlData.publicUrl

      const { error: insertError } = await supabase.from("galeri").insert([
        {
          judul,
          kategori,
          deskripsi,
          gambar: imageUrl,
        },
      ])

      if (insertError) throw insertError

      alert("Foto baru berhasil ditambahkan ke Galeri! 🖼️")

      setJudul("")
      setKategori("Kegiatan Sekolah")
      setDeskripsi("")
      setSelectedFile(null)
      setPreview(null)
    } catch (err: any) {
      console.error("Gagal menambah foto galeri:", err)
      alert("Terjadi kesalahan: " + (err.message || "Gagal upload"))
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Kelola Galeri Sekolah</h1>
        <p className="text-slate-400 text-sm mt-1">Upload foto dokumentasi album & kegiatan SMA Negeri 7 Balikpapan.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Judul Foto / Momen</label>
            <input
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500"
              placeholder="Judul foto dokumentasi..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Kategori Galeri</label>
            <select
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500"
            >
              <option value="Kegiatan Sekolah">Kegiatan Sekolah</option>
              <option value="Fasilitas">Fasilitas & Lingkungan</option>
              <option value="Ekstrakulikuler">Ekstrakulikuler</option>
              <option value="Prestasi & Acara">Prestasi & Acara</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Deskripsi Ringkas (Opsional)</label>
            <textarea
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              rows={3}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500"
              placeholder="Catatan mengenai momen foto..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Upload Foto</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer"
            />
          </div>

          {preview && (
            <div className="w-48 aspect-video rounded-xl overflow-hidden border border-slate-700">
              <img src={preview} alt="Pratinjau Galeri" className="w-full h-full object-cover" />
            </div>
          )}

          <button
            type="submit"
            disabled={uploading}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition duration-200 shadow-lg disabled:opacity-50 cursor-pointer"
          >
            {uploading ? "MengunggahFoto..." : "Upload ke Galeri"}
          </button>
        </form>
      </div>
    </div>
  )
}