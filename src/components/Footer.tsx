"use client"

import React, { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

interface VideoItem {
  id: number
  judul: string
  youtube_url: string
}

export default function Footer(): React.JSX.Element | null {
  const [videos, setVideos] = useState<VideoItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const { data, error } = await supabase
          .from("video")
          .select("*")
          .order("id", { ascending: false }) // Urutkan dari ID terbesar (terbaru) agar tampil di posisi pertama / kiri

        if (error) throw error
        if (data) setVideos(data)
      } catch (err) {
        console.error("Gagal memuat video:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  // Fungsi pintar untuk mengubah berbagai format link YouTube menjadi embed URL
  const getEmbedUrl = (url: string) => {
    if (!url) return ""
    let videoId = ""
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0]
    } else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1]?.split("&")[0]
    } else if (url.includes("embed/")) {
      return url
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  }

  if (loading) {
    return (
      <section className="bg-[#f5f5f5] py-12 border-t border-gray-200 text-center text-gray-500 text-sm">
        Memuat video terbaru...
      </section>
    )
  }

  if (videos.length === 0) {
    return null
  }

  return (
    <section className="bg-[#f5f5f5] py-8 md:py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-2 md:px-6">

        {/* Judul Bagian */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-gray-700 tracking-tight">
            Video Terbaru SMA Negeri 7 Balikpapan
          </h2>
          <div className="w-14 md:w-28 h-1 md:h-2 bg-blue-400 rounded-full mx-auto mt-2 md:mt-4"></div>
        </div>

        {/* GRID DIPAKSA 3 KOLOM KESAMPING DI SEMUA UKURAN */}
        <div className="grid grid-cols-3 gap-1 sm:gap-4 md:gap-8 items-start">
          {videos.slice(0, 3).map((video) => {
            const embedSrc = getEmbedUrl(video.youtube_url)
            return (
              <div key={video.id} className="flex flex-col items-center group bg-white p-1.5 sm:p-3 rounded-xl shadow-md border border-gray-200 h-full">

                {/* Wadah Video Embed */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-inner">
                  <iframe
                    src={embedSrc}
                    title={video.judul}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Judul & Tombol Tonton */}
                <div className="w-full mt-2 md:mt-3 flex flex-col justify-between flex-grow">
                  <h3 className="text-[10px] sm:text-xs md:text-base font-bold text-gray-800 line-clamp-2 leading-tight">
                    {video.judul}
                  </h3>

                  <a
                    href={video.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-1 text-[9px] sm:text-xs md:text-sm font-semibold text-red-600 hover:text-red-700 transition"
                  >
                    ▶ Tonton di <span className="font-bold underline">YouTube</span>
                  </a>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}