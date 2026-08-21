"use client"

import React, { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AdminPrestasiPage() {
  const [judul, setJudul] = useState("")
  const [peraih, setPeraih] = useState("")
  const [kategori, setKategori] = useState("Akademik")
  const [tingkat, setTingkat] = useState("Kota")
  const [tahun, setTahun] = useState("2026")
  const [deskripsi, setDeskripsi] = useState("")
  const [isHighlight, setIsHighlight] = useState(false)

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
    setUploading(true)

    try {
      let imageUrl = "/ggi.png"

      if (selectedFile) {
        const fileExt = selectedFile.name.split(".").pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
        const filePath = `prestasi/${fileName}`

        const { error: uploadError } = await supabase.storage
          .from("media_sman7")
          .upload(filePath, selectedFile)

        if (uploadError) throw uploadError

        const { data: publicUrlData } = supabase.storage
          .from("media_sman7")
          .getPublicUrl(filePath)

        imageUrl = publicUrlData.publicUrl
      }

      const { error: insertError } = await supabase.from("prestasi").insert([
        {
          id: Date.now(),
          judul,
          peraih,
          kategori,
          tingkat,
          tahun,
          deskripsi,
          gambar: imageUrl,
          is_highlight: isHighlight,
        },
      ])

      if (insertError) throw insertError

      alert("Prestasi siswa berhasil ditambahkan! 🏆")

      setJudul("")
      setPeraih("")
      setKategori("Akademik")
      setTingkat("Kota")
      setTahun("2026")
      setDeskripsi("")
      setIsHighlight(false)
      setSelectedFile(null)
      setPreview(null)
    } catch (err: any) {
      console.error("Gagal menambahkan prestasi:", err)
      alert("Terjadi kesalahan: " + (err.message || "Gagal simpan"))
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Kelola Prestasi Siswa</h1>
        <p className="text-slate-400 text-sm mt-1">Input pencapaian, piala, dan prestasi siswa SMA Negeri 7 Balikpapan.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">Nama Prestasi / Juara</label>
              <input
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                placeholder="Contoh: Juara 1 OSN Informatika"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">Nama Peraih / Siswa</label>
              <input
                type="text"
                value={peraih}
                onChange={(e) => setPeraih(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                placeholder="Contoh: Ahmad Raihan & Tim"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">Kategori</label>
              <select
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
              >
                <option value="Akademik">Akademik</option>
                <option value="Olahraga">Olahraga</option>
                <option value="Beladiri">Beladiri</option>
                <option value="Seni">Seni</option>
                <option value="Teknologi">Teknologi</option>
                <option value="Keagamaan">Keagamaan</option>
                <option value="Kepeminpinan">Kepeminpinan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">Tingkat</label>
              <select
                value={tingkat}
                onChange={(e) => setTingkat(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
              >
                <option value="Kota">Kota</option>
                <option value="Provinsi">Provinsi</option>
                <option value="Nasional">Nasional</option>
                <option value="Internasional">Internasional</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">Tahun Perolehan</label>
              <input
                type="text"
                value={tahun}
                onChange={(e) => setTahun(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                placeholder="2026"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Deskripsi Ringkas</label>
            <textarea
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              rows={3}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
              placeholder="Ceritakan detail prestasi..."
            />
          </div>

          <div className="flex items-center gap-3 py-2">
            <input
              type="checkbox"
              id="highlight"
              checked={isHighlight}
              onChange={(e) => setIsHighlight(e.target.checked)}
              className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
            />
            <label htmlFor="highlight" className="text-sm font-medium text-amber-300 cursor-pointer">
              Tampilkan di Bento Box "Sorotan Prestasi Terkini" (Highlight Teratas)
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Foto Dokumentasi / Piala</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-amber-600 file:text-white hover:file:bg-amber-700 cursor-pointer"
            />
          </div>

          {preview && (
            <div className="w-48 aspect-video rounded-xl overflow-hidden border border-slate-700">
              <img src={preview} alt="Pratinjau Prestasi" className="w-full h-full object-cover" />
            </div>
          )}

          <button
            type="submit"
            disabled={uploading}
            className="w-full py-3 px-6 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black rounded-xl transition duration-200 shadow-lg disabled:opacity-50 cursor-pointer"
          >
            {uploading ? "Menyimpan Prestasi..." : "Simpan Data Prestasi"}
          </button>
        </form>
      </div>
    </div>
  )
}