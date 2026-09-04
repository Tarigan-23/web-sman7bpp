import React from "react"
import { supabase } from "@/lib/supabase"
import SiswaPublicContent from "./SiswaPublicContent"

export const revalidate = 0

export default async function SiswaPage() {
  // Ambil semua data siswa dari Supabase
  const { data: siswaList } = await supabase
    .from("siswa")
    .select("*")
    .order("nama", { ascending: true })

  return <SiswaPublicContent initialSiswa={siswaList || []} />
}