import React from "react"
import { supabase } from "@/lib/supabase"
import SambutanContent from "./SambutanContent" // Komponen klien untuk efek animasi & zoom

export const revalidate = 0 // Selalu ambil data terbaru secara real-time

export default async function SambutanPage() {
  // Ambil data profil sekolah dari Supabase (ID = 1)
  const { data: profil, error } = await supabase
    .from("profil_sekolah")
    .select("*")
    .eq("id", 1)
    .single()

  // Fallback data jika database belum siap
  const defaultProfil = {
    nama_kepsek: "Puspani, M. Pd.",
    jabatan_kepsek: "Kepala SMA Negeri 7 Balikpapan",
    foto_kepsek: "/kepsek.webp",
    kata_sambutan: "Assalamu’alaikum Warahmatullahi Wabarakatuh...",
    visi: "Terwujudnya Insan Sekolah yang Religius, Cerdas, Berprestasi, Berwawasan Global, dan Berbudaya Lingkungan.",
    misi: [
      "Menumbuhkan penghayatan terhadap ajaran agama yang dianut serta meningkatkan keimanan dan ketaqwaan terhadap Allah SWT, Tuhan Yang Maha Esa.",
      "Membiasakan seluruh warga sekolah untuk taat beribadah secara konsisten sesuai dengan koridor agama dan kepercayaan masing-masing.",
      "Mewujudkan budaya sekolah yang inklusif sebagai ladang tumbuh suburnya budi pekerti luhur dan akhlak mulia.",
      "Menyelenggarakan pembelajaran bermakna dan bimbingan efektif agar setiap siswa berkembang optimal sesuai keunikan bakat, minat, dan potensi internalnya.",
      "Mengakselerasi kompetensi numerasi dan literasi digital berlandaskan prinsip kejujuran, kemandirian, serta daya saing sains yang kompetitif."
    ],
    struktur_organisasi: "/struktur organisasi.png"
  }

  const dataProfil = profil || defaultProfil

  return <SambutanContent profil={dataProfil} />
}