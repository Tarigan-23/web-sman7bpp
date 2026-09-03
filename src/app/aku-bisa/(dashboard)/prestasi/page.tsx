"use client"

import React, { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import { compressImage } from "@/lib/imageCompressor"

interface PrestasiItem {
  id: number
  judul: string
  peraih: string
  kategori: string
  tingkat: string
  tahun: string
  deskripsi: string
  gambar: string
  is_highlight?: boolean
  isHighlight?: boolean
}

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

  // State untuk Manajemen & Edit Prestasi
  const [daftarPrestasi, setDaftarPrestasi] = useState<PrestasiItem[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [loadingList, setLoadingList] = useState(true)

  // Ambil daftar prestasi untuk tabel manajemen di bawah
  const fetchPrestasiList = async () => {
    try {
      setLoadingList(true)
      const { data, error } = await supabase
        .from("prestasi")
        .select("*")
        .order("id", { ascending: false })

      if (error) throw error
      if (data) setDaftarPrestasi(data)
    } catch (err) {
      console.error("Gagal memuat daftar prestasi:", err)
    } finally {
      setLoadingList(false)
    }
  }

  useEffect(() => {
    fetchPrestasiList()
  }, [])

  // Fungsi handleFileChange dengan kompresi otomatis < 200KB
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      try {
        setUploading(true)
        const compressedFile = await compressImage(file)
        setSelectedFile(compressedFile)
        setPreview(URL.createObjectURL(compressedFile))
      } catch (err) {
        console.error("Gagal mengompres gambar prestasi:", err)
        setSelectedFile(file)
        setPreview(URL.createObjectURL(file))
      } finally {
        setUploading(false)
      }
    }
  }

  // Handle Edit: Masukkan data ke form atas
  const handleEditClick = (item: PrestasiItem) => {
    setEditingId(item.id)
    setJudul(item.judul || "")
    setPeraih(item.peraih || "")
    setKategori(item.kategori || "Akademik")
    setTingkat(item.tingkat || "Kota")
    setTahun(item.tahun || "2026")
    setDeskripsi(item.deskripsi || "")
    setIsHighlight(item.is_highlight ?? item.isHighlight ?? false)
    setSelectedFile(null)
    setPreview(item.gambar || null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setJudul("")
    setPeraih("")
    setKategori("Akademik")
    setTingkat("Kota")
    setTahun("2026")
    setDeskripsi("")
    setIsHighlight(false)
    setSelectedFile(null)
    setPreview(null)
  }

  // Handle Delete Prestasi
  const handleDelete = async (id: number) => {
    if (!confirm("Apakah kamu yakin ingin menghapus data prestasi ini, bray?")) return

    try {
      const { error } = await supabase.from("prestasi").delete().eq("id", id)
      if (error) throw error
      alert("Prestasi berhasil dihapus! 🗑️")
      fetchPrestasiList()
    } catch (err: any) {
      console.error("Gagal menghapus prestasi:", err)
      alert("Terjadi kesalahan saat menghapus: " + (err.message || ""))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    try {
      let imageUrl = preview || "/ggi.png"

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

      if (editingId) {
        // Mode Update / Edit Data
        const updateData = {
          judul,
          peraih,
          kategori,
          tingkat,
          tahun,
          deskripsi,
          gambar: imageUrl,
          is_highlight: isHighlight,
        }

        const { error: updateError } = await supabase
          .from("prestasi")
          .update(updateData)
          .eq("id", editingId)

        if (updateError) throw updateError

        alert("Prestasi berhasil diperbarui! ✏️🏆")
      } else {
        // Mode Insert Data Baru
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
      }

      handleCancelEdit()
      fetchPrestasiList()
    } catch (err: any) {
      console.error("Gagal memproses prestasi:", err)
      alert("Terjadi kesalahan: " + (err.message || "Gagal simpan"))
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-5xl space-y-10">
      <div>
        <h1 className="text-3xl font-black text-white">Kelola Prestasi Siswa</h1>
        <p className="text-slate-400 text-sm mt-1">Input, edit, dan hapus pencapaian, piala, dan prestasi siswa SMA Negeri 7 Balikpapan.</p>
      </div>

      {/* FORM TAMBAH / EDIT PRESTASI */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-amber-400">
            {editingId ? `Edit Prestasi (ID: ${editingId})` : "Tambah Prestasi Baru"}
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
            <label className="block text-sm font-medium mb-1 text-slate-300">
              Foto Dokumentasi / Piala (Otomatis Kompres &lt; 200KB)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-amber-600 file:text-white hover:file:bg-amber-700 cursor-pointer"
            />
          </div>

          {preview && (
            <div className="w-48 aspect-video rounded-xl overflow-hidden border border-slate-700 relative">
              <img src={preview} alt="Pratinjau Prestasi" className="w-full h-full object-cover" />
            </div>
          )}

          <button
            type="submit"
            disabled={uploading}
            className="w-full py-3 px-6 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black rounded-xl transition duration-200 shadow-lg disabled:opacity-50 cursor-pointer"
          >
            {uploading ? "Memproses Data & Gambar..." : editingId ? "Simpan Perubahan Prestasi" : "Simpan Data Prestasi"}
          </button>
        </form>
      </div>

      {/* DAFTAR PRESTASI YANG ADA (TABEL MANAJEMEN) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h2 className="text-xl font-bold text-white">Daftar Prestasi Tersimpan</h2>

        {loadingList ? (
          <div className="text-center py-8 text-slate-500">Memuat daftar prestasi...</div>
        ) : daftarPrestasi.length === 0 ? (
          <div className="text-center py-8 text-slate-500">Belum ada data prestasi di database.</div>
        ) : (
          <div className="space-y-3">
            {daftarPrestasi.map((item) => {
              let thumb = "/ggi.png"
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
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-amber-400 font-semibold px-2 py-0.5 bg-amber-500/10 rounded border border-amber-500/20">
                          {item.kategori} ({item.tingkat})
                        </span>
                        <span className="text-[10px] text-slate-400">📅 {item.tahun}</span>
                      </div>
                      <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1 mt-1">{item.judul}</h3>
                      <p className="text-slate-400 text-xs line-clamp-1">Peraih: {item.peraih}</p>
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