import { supabase } from './supabase'

export async function uploadImage(file: File, folder: string = 'berita'): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`

    const { error } = await supabase.storage
      .from('media_sman7')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      console.error('Error uploading image:', error.message)
      return null
    }

    const { data } = supabase.storage.from('media_sman7').getPublicUrl(fileName)
    return data.publicUrl
  } catch (err) {
    console.error('Upload failed:', err)
    return null
  }
}