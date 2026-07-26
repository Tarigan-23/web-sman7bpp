export interface SSKProgram {
  id: string
  judul: string
  tanggal: string
  deskripsiRingkasan: string
  narasiLengkap: string
  tipeMedia: "foto" | "video"
  mediaUrls: string[] 
  videoEmbedUrl?: string 
  tautanBerita?: string 
  penanggungJawab?: string
}

export const DATA_PROGRAM_SSK: SSKProgram[] = [
  {
    id: "",
    judul: "",
    tanggal: "",
    deskripsiRingkasan: "",
    narasiLengkap: "",
    tipeMedia: "video",
    mediaUrls: [  ],
    videoEmbedUrl: "",
    tautanBerita: "",
    penanggungJawab: ""
  },

]