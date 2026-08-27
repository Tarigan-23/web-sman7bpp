"use client"

import React, { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"

interface BeritaItem {
  id: number
  judul: string
  tanggal: string
  deskripsi: string
  sumber_url?: string
  sumberUrl?: string
  gambar: any
}

export default function AdminBeritaPage() {
  const [judul, setJudul] = useState("")
  const [tanggal, setTanggal] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [sumberUrl, setSumberUrl] = useState("")

  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)

  // State untuk Manajemen & Edit Berita
  const [daftarBerita, setDaftarBerita] = useState<BeritaItem[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [loadingList, setLoadingList] = useState(true)

  // Ambil daftar berita untuk manajemen tabel di bawah
  const fetchBeritaList = async () => {
    try {
      setLoadingList(true)
      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .order("id", { ascending: false })

      if (error) throw error
      if (data) setDaftarBerita(data)
    } catch (err) {
      console.error("Gagal memuat daftar berita:", err)
    } finally {
      setLoadingList(false)
    }
  }

  useEffect(() => {
    fetchBeritaList()
  }, [])

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

  // Handle Edit: Masukkan data ke form atas
  const handleEditClick = (item: BeritaItem) => {
    setEditingId(item.id)
    setJudul(item.judul || "")
    setTanggal(item.tanggal || "")
    setDeskripsi(item.deskripsi || "")
    setSumberUrl(item.sumber_url || item.sumberUrl || "")
    setSelectedFiles([])
    setPreviews([])
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setJudul("")
    setTanggal("")
    setDeskripsi("")
    setSumberUrl("")
    setSelectedFiles([])
    setPreviews([])
  }

  // Handle Delete Berita
  const handleDelete = async (id: number) => {
    if (!confirm("Apakah kamu yakin ingin menghapus berita ini, bray?")) return

    try {
      const { error } = await supabase.from("berita").delete().eq("id", id)
      if (error) throw error
      alert("Berita berhasil dihapus! 🗑️")
      fetchBeritaList()
    } catch (err: any) {
      console.error("Gagal menghapus berita:", err)
      alert("Terjadi kesalahan saat menghapus: " + (err.message || ""))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!editingId && selectedFiles.length === 0) {
      alert("Pilih minimal 1 gambar berita bray!")
      return
    }

    setUploading(true)
    try {
      let uploadedImageUrls: string[] = []

      // Jika ada file gambar baru yang dipilih, upload ke storage
      if (selectedFiles.length > 0) {
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
      }

      if (editingId) {
        // Mode Update / Edit Data
        const updateData: any = {
          judul,
          tanggal,
          deskripsi,
          sumber_url: sumberUrl,
        }

        // Kalau user upload gambar baru saat edit, timpa gambarnya
        if (uploadedImageUrls.length > 0) {
          updateData.gambar = uploadedImageUrls
        }

        const { error: updateError } = await supabase
          .from("berita")
          .update(updateData)
          .eq("id", editingId)

        if (updateError) throw updateError

        alert("Berita berhasil diperbarui! ✏️🎉")
      } else {
        // Mode Insert Data Baru
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
      }

      handleCancelEdit()
      fetchBeritaList()
    } catch (err: any) {
      console.error("Gagal memproses berita:", err)
      alert("Terjadi kesalahan: " + (err.message || "Gagal menyimpan"))
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-5xl space-y-10">
      <div>
        <h1 className="text-3xl font-black text-white">Kelola Berita</h1>
        <p className="text-slate-400 text-sm mt-1">Tambah, edit, dan hapus berita atau kegiatan sekolah dari sistem.</p>
      </div>

      {/* FORM TAMBAH / EDIT BERITA */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-blue-400">
            {editingId ? `Edit Berita (ID: ${editingId})` : "Tambah Berita Baru"}
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
              Upload Gambar {editingId ? "(Opsional: Biarkan kosong jika tidak ingin mengubah gambar)" : "(Bisa Pilih Lebih Dari 1 File)"}
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
            {uploading ? "Memproses Data..." : editingId ? "Simpan Perubahan Berita" : "Terbitkan Berita"}
          </button>
        </form>
      </div>

      {/* DAFTAR BERITA YANG ADA (MANAJEMEN / TABEL) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h2 className="text-xl font-bold text-white">Daftar Berita Tersimpan</h2>
        
        {loadingList ? (
          <div className="text-center py-8 text-slate-500">Memuat daftar berita...</div>
        ) : !loadingList && daftarBerita.length === 0 ? (
          <div className="text-center py-8 text-slate-500">Belum ada data berita di database.</div>
        ) : (
          <div className="space-y-3">
            {daftarBerita.map((item) => {
              // Parsing gambar untuk thumbnail di tabel list
              let thumb = "/bg3.jpg"
              if (item.gambar) {
                if (Array.isArray(item.gambar) && item.gambar.length > 0) {
                  thumb = item.gambar[0]
                } else if (typeof item.gambar === "string") {
                  try {
                    const parsed = JSON.parse(item.gambar)
                    thumb = Array.isArray(parsed) ? parsed[0] : item.gambar
                  } catch {
                    thumb = item.gambar
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
                      <span className="text-[10px] text-blue-400 font-semibold">📅 {item.tanggal}</span>
                      <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1">{item.judul}</h3>
                      <p className="text-slate-400 text-xs line-clamp-1 mt-0.5">{item.deskripsi}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
                    <button
                      onClick={() => handleEditClick(item)}
                      className="px-3 py-1.5 bg-amber-600/20 hover:bg-amber-600 text-amber-300 hover:text-white rounded-lg text-xs font-semibold transition border border-amber-500/30"
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