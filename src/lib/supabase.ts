import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("⚠️ Variabel Environment Supabase belum lengkap! Periksa pengaturan Hostinger.")
}

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)