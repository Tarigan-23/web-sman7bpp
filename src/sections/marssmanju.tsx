"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export default function MarsPage() {

  const YOUTUBE_VIDEO_ID = "ftiTnFd3W5yQAjUx"

  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-950 flex flex-col justify-center items-center py-20 px-4 select-none">
      
      {/* Background Gambar Teroptimasi (Fixed Overlay) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Latar Belakang SMANJU"
          fill
          priority
          className="object-cover object-center opacity-25 fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black/60 to-slate-950" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center space-y-8 md:space-y-12">
        
        <div className="text-center space-y-3">
          <span className="bg-blue-500/10 text-[10px] md:text-xs font-semibold px-4 py-1.5 rounded-full text-blue-300 border border-blue-400/20 uppercase tracking-widest">
            Official Media SMA NEGERI 7 BALIKPAPAN
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight pt-2">
            Mars <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">SMAN 7 Balikpapan</span>
          </h1>
          <p className="text-slate-400 text-xs md:text-base font-light font-mono tracking-wider">
            Lagu Kebanggaan SMANJU
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full pt-0.5" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden p-1.5 bg-gradient-to-tr from-blue-600/30 via-slate-800 to-cyan-500/30 shadow-[0_0_60px_-15px_rgba(59,130,246,0.35)] border border-white/5 group"
        >
          <div className="relative w-full h-full bg-slate-950 rounded-[10px] md:rounded-[20px] overflow-hidden">
            
            <iframe
              src={`https://www.youtube.com/embed/$Zc48h6DFsrrGAdYA?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
              title="Mars SMAN 7 Balikpapan"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01] border-0"
              style={{ pointerEvents: "none" }} 
            />

            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
              <button
                onClick={toggleMute}
                className="flex items-center gap-2.5 bg-black/65 backdrop-blur-md text-white px-4 py-2 md:px-5 md:py-3 rounded-xl border border-white/10 hover:border-blue-400/50 hover:bg-slate-900/80 transition-all active:scale-95 group/btn shadow-xl"
              >
                {isMuted ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 h-5 text-red-400 group-hover/btn:animate-pulse">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                    <span className="text-[11px] md:text-xs font-mono font-bold tracking-wider text-slate-300">UNMUTE AUDIO</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 h-5 text-green-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                    <span className="text-[11px] md:text-xs font-mono font-bold tracking-wider text-blue-400">AUDIO PLAYING</span>
                  </>
                )}
              </button>
            </div>

            {/* Keterangan Resolusi di Kanan Bawah */}
            <div className="absolute bottom-5 right-5 hidden sm:block bg-slate-950/50 backdrop-blur-sm border border-white/5 px-3 py-1 rounded-md text-[10px] font-mono text-slate-400 tracking-widest">
              STREAMING • YOUTUBE
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  )
}