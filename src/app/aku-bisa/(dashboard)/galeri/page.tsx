"use client"

import React, { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"

interface GaleriItem {
  id: number
  judul: string
  kategori: string
  deskripsi?: string
  gambar: any
}

export default function AdminGaleriPage() {
  const [judul, setJudul] = useState("")
  const [kategori, setKategori] = useState("Kegiatan Sekolah")
  const [deskripsi, setDeskripsi] = useState("")

  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)

  // State untuk Manajemen Tabel & Edit Galeri
  const [daftarGaleri, setDaftarGaleri] = useState<GaleriItem[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [loadingList, setLoadingList] = useState(true)

  const fetchGaleriList = async () => {
    try {
      setLoadingList(true)
      const { data, error } = await supabase
        .from("galeri")
        .select("*")
        .order("id", { ascending: false })

      if (error) throw error
      if (data) setDaftarGaleri(data)
    } catch (err) {
      console.error("Gagal memuat daftar galeri:", err)
    } finally {
      setLoadingList(false)
    }
  }

  useEffect(() => {
    fetchGaleriList()
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

  const handleEditClick = (item: GaleriItem) => {
    setEditingId(item.id)
    setJudul(item.judul || "")
    setKategori(item.kategori || "Kegiatan Sekolah")
    setDeskripsi(item.deskripsi || "")
    setSelectedFiles([])
    
    // Format preview lama jika array/string
    let existingThumbs: string[] = []
    if (item.gambar) {
      if (Array.isArray(item.gambar)) {
        existingThumbs = item.gambar
      } else if (typeof item.gambar === "string") {
        try {
          const parsed = JSON.parse(item.gambar)
          existingThumbs = Array.isArray(parsed) ? parsed : [item.gambar]
        } catch {
          existingThumbs = [item.gambar]
        }
      }
    }
    setPreviews(existingThumbs)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setJudul("")
    setKategori("Kegiatan Sekolah")
    setDeskripsi("")
    setSelectedFiles([])
    setPreviews([])
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Apakah kamu yakin ingin menghapus foto galeri ini, bray?")) return

    try {
      const { error } = await supabase.from("galeri").delete().eq("id", id)
      if (error) throw error
      alert("Foto galeri berhasil dihapus! 🗑️")
      fetchGaleriList()
    } catch (err: any) {
      console.error("Gagal menghapus galeri:", err)
      alert("Terjadi kesalahan saat menghapus: " + (err.message || ""))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingId && selectedFiles.length === 0) {
      alert("Pilih minimal 1 foto galeri yang akan diupload bray!")
      return
    }

    setUploading(true)

    try {
      let uploadedImageUrls: string[] = []

      // Jika ada file baru yang dipilih untuk diupload
      if (selectedFiles.length > 0) {
        for (const file of selectedFiles) {
          const fileExt = file.name.split(".").pop()
          const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
          const filePath = `galeri/${fileName}`

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
        // Mode Update / Edit
        const updateData: any = {
          judul,
          kategori,
          deskripsi,
        }

        // Jika user upload foto baru saat edit, timpa gambar
        if (uploadedImageUrls.length > 0) {
          updateData.gambar = uploadedImageUrls
        }

        const { error: updateError } = await supabase
          .from("galeri")
          .update(updateData)
          .eq("id", editingId)

        if (updateError) throw updateError

        alert("Galeri berhasil diperbarui! ✏️🖼️")
      } else {
        // Mode Insert Baru
        const { error: insertError } = await supabase.from("galeri").insert([
          {
            id: Date.now(),
            judul,
            kategori,
            deskripsi,
            gambar: uploadedImageUrls,
          },
        ])

        if (insertError) throw insertError

        alert("Foto baru berhasil ditambahkan ke Galeri! 🖼️")
      }

      handleCancelEdit()
      fetchGaleriList()
    } catch (err: any) {
      console.error("Gagal memproses galeri:", err)
      alert("Terjadi kesalahan: " + (err.message || "Gagal upload"))
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-5xl space-y-10">
      <div>
        <h1 className="text-3xl font-black text-white">Kelola Galeri Sekolah</h1>
        <p className="text-slate-400 text-sm mt-1">Upload, edit, dan hapus foto dokumentasi album & kegiatan SMA Negeri 7 Balikpapan.</p>
      </div>

      {/* FORM TAMBAH / EDIT GALERI */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-purple-400">
            {editingId ? `Edit Galeri (ID: ${editingId})` : "Tambah Foto Galeri Baru"}
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
            <label className="block text-sm font-medium mb-1 text-slate-300">
              Upload Foto {editingId ? "(Opsional: Pilih file baru jika ingin menambah/mengganti foto)" : "(Bisa Pilih Lebih Dari 1 File)"}
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer"
            />
          </div>

          {previews.length > 0 && (
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

          <button
            type="submit"
            disabled={uploading}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition duration-200 shadow-lg disabled:opacity-50 cursor-pointer"
          >
            {uploading ? "Mengunggah Foto..." : editingId ? "Simpan Perubahan Galeri" : "Upload ke Galeri"}
          </button>
        </form>
      </div>

      {/* DAFTAR GALERI TERSIMPAN (TABEL MANAJEMEN) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h2 className="text-xl font-bold text-white">Daftar Galeri Tersimpan</h2>

        {loadingList ? (
          <div className="text-center py-8 text-slate-500">Memuat daftar galeri...</div>
        ) : daftarGaleri.length === 0 ? (
          <div className="text-center py-8 text-slate-500">Belum ada data galeri di database.</div>
        ) : (
          <div className="space-y-3">
            {daftarGaleri.map((item) => {
              let thumb = "/bg3.jpg"
              if (item.gambar) {
                if (Array.isArray(item.gambar) && item.gambar.length > 0) {
                  thumb = item.gambar[0]
                } else if (typeof item.gambar === "string") {
                  try {
                    const parsed = JSON.parse(item.gambar)
                    thumb = Array.isArray(parsed) && parsed.length > 0 ? parsed[0] : item.gambar
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
                      <span className="text-[10px] text-purple-400 font-semibold px-2 py-0.5 bg-purple-500/10 rounded border border-purple-500/20">
                        {item.kategori}
                      </span>
                      <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1 mt-1">{item.judul}</h3>
                      <p className="text-slate-400 text-xs line-clamp-1">{item.deskripsi || "Tanpa deskripsi"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
                    <button
                      onClick={() => handleEditClick(item)}
                      className="px-3 py-1.5 bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white rounded-lg text-xs font-semibold transition border border-purple-500/30"
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