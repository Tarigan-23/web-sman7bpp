"use client"

import React, { useState, useEffect } from "react"

export default function SPMBPage() {
  // --- KONVERSI LOGIKA COUNTDOWN ALPINE.JS KE REACT ---
  // Target Unix Timestamp dari kode asli: 1780444799 (Sekitar Juni 2026)
  const targetUnix = 1780444799
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 })

  useEffect(() => {
    const tick = () => {
      const now = Math.floor(Date.now() / 1000)
      const diff = targetUnix - now
      
      if (diff <= 0) {
        setTimeLeft({ hari: 0, jam: 0, menit: 0, detik: 0 })
        return
      }

      setTimeLeft({
        hari: Math.floor(diff / 86400),
        jam: Math.floor((diff % 86400) / 3600),
        menit: Math.floor((diff % 3600) / 60),
        detik: diff % 60,
      })
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-sans antialiased bg-white text-gray-800">
      
      {/* WRAPPER UTAMA KARTU MELAYANG */}
      <div className="relative">

        {/* SECTION 1: HERO SECTION */}
        <section 
          className="relative overflow-hidden"    
          style={{ background: "linear-gradient(135deg, #1E3335 0%, #09656F 55%, #1B5E8E 100%)" }}
        >
          {/* Gambar Latar & Overlay */}
          <div className="absolute inset-0">        
            <img 
              src="/storage/spmb/hero/pfEYICKACYq9yYKKbJXOcvyO48t9wqptLktmkCfa.png" 
              alt="Hero SPMB"            
              className="w-full h-full object-cover"            
              style={{ objectPosition: "center center" }} 
            />        
            <div 
              className="absolute inset-0" 
              style={{ background: "linear-gradient(135deg, rgba(30,51,53,0.85) 0%, rgba(9,101,111,0.7) 55%, rgba(27,94,142,0.7) 100%)" }}
            ></div>    
          </div>            
          
          {/* Dekorasi Ornamen Cahaya (Blur) */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#C97A14]/10 blur-3xl pointer-events-none"></div>    
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
          
          {/* Konten Hero */}
          <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-20 lg:pt-28 lg:pb-32">        
            <div className="grid lg:grid-cols-12 gap-10 items-center">                        
              
              {/* Sisi Kiri: Teks & Download */}
              <div className="lg:col-span-7 text-white">                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium mb-6">                    
                  <span className="w-2 h-2 rounded-full bg-[#C97A14] animate-pulse"></span>                    
                  Pendaftaran Dibuka · TP 2026-2027                
                </div>
                <h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-5 tracking-tight"                    
                  style={{ color: "#ffffff" }}
                >                    
                  Sistem Penerimaan Murid Baru (SPMB)                
                </h1>                
                <p className="text-base sm:text-lg text-white/85 max-w-xl mb-3 leading-relaxed">                    
                  SMA Negeri 1 Kabanjahe — Tahun Pelajaran 2026-2027                
                </p>                                
                <p className="text-sm text-white/65 max-w-xl mb-8 leading-relaxed">
                  SMA Negeri 1 Kabanjahe membuka pendaftaran murid baru tahun pelajaran 2026/2027. Pendaftaran dilakukan secara online melalui sistem SPMB Provinsi Sumatera Utara.
                </p>                                
                <div className="flex flex-wrap gap-3">                                                                                                        
                  <a 
                    href="https://spmbsumutberkah.disdik.sumutprov.go.id/information/download-aplikasi-spmb-2026"                             
                    target="_blank" 
                    rel="noopener noreferrer"                             
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5 bg-[#C97A14] hover:bg-[#b56b10] text-white shadow-2xl shadow-[#C97A14]/30"
                  >                                                            
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/>
                    </svg>                                                        
                    Download Aplikasi SPMB                        
                  </a>                                    
                </div>            
              </div>
              
              {/* Sisi Kanan: Countdown Box */}
              <div className="lg:col-span-5 -mt-4 lg:mt-0">                                
                <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-6 lg:p-7 shadow-2xl">                    
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#C97A14] uppercase tracking-widest mb-1">                        
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd"/>
                    </svg>                        
                    Hitung Mundur                    
                  </div>                    
                  <p className="text-white text-sm mb-5">Pendaftaran — Jalur Domisili, Afirmasi, Mutasi berakhir pada <strong>2 June 2026</strong></p>                    
                  
                  {/* Grid Timer */}
                  <div className="grid grid-cols-4 gap-2">                                                
                    <div className="bg-white/10 rounded-2xl px-2 py-3 text-center border border-white/10">                            
                      <div className="text-2xl lg:text-3xl font-black text-white tabular-nums">
                        {String(timeLeft.hari).padStart(2, '0')}
                      </div>                            
                      <div className="text-[10px] text-white/60 uppercase tracking-wider mt-1">Hari</div>                        
                    </div>                                                
                    <div className="bg-white/10 rounded-2xl px-2 py-3 text-center border border-white/10">                            
                      <div className="text-2xl lg:text-3xl font-black text-white tabular-nums">
                        {String(timeLeft.jam).padStart(2, '0')}
                      </div>                            
                      <div className="text-[10px] text-white/60 uppercase tracking-wider mt-1">Jam</div>                        
                    </div>                                                
                    <div className="bg-white/10 rounded-2xl px-2 py-3 text-center border border-white/10">                            
                      <div className="text-2xl lg:text-3xl font-black text-white tabular-nums">
                        {String(timeLeft.menit).padStart(2, '0')}
                      </div>                            
                      <div className="text-[10px] text-white/60 uppercase tracking-wider mt-1">Menit</div>                        
                    </div>                                                
                    <div className="bg-white/10 rounded-2xl px-2 py-3 text-center border border-white/10">                            
                      <div className="text-2xl lg:text-3xl font-black text-white tabular-nums">
                        {String(timeLeft.detik).padStart(2, '0')}
                      </div>                            
                      <div className="text-[10px] text-white/60 uppercase tracking-wider mt-1">Detik</div>                        
                    </div>                                            
                  </div>                
                </div>                            
              </div>        
            </div>    
          </div>
        </section>

        {/* SECTION 2: STATISTIC CARDS (MENGAPUNG DI ATAS PERBATASAN) */}
        <div className="relative z-20 px-4 py-10 bg-gray-50 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:translate-y-1/2 lg:py-0 lg:bg-transparent">    
          <div className="max-w-6xl mx-auto">        
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">                        
              
              {/* Kartu 1: Daya Tampung */}
              <div className="bg-white rounded-2xl p-5 shadow-xl ring-1 ring-gray-100">                
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#09656F] uppercase tracking-wider mb-2">                    
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd"/>
                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"/>
                  </svg> 
                  Daya Tampung                
                </div>                
                <div className="text-3xl lg:text-4xl font-black text-[#09656F]">396</div>                
                <div className="text-xs text-gray-500 mt-1">Siswa baru TP 2026-2027</div>            
              </div>
              
              {/* Kartu 2: Jalur Masuk */}
              <div className="rounded-2xl p-5 shadow-xl text-white" style={{ background: "linear-gradient(135deg, #0d3652 0%, #1B5E8E 100%)" }}>                
                <div className="flex items-center gap-2 text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-2">                    
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clip-rule="evenodd"/>
                  </svg> 
                  Jalur Masuk                
                </div>                
                <div className="text-3xl lg:text-4xl font-black">8</div>                
                <div className="text-xs text-white/70 mt-1">Pilihan jalur pendaftaran</div>            
              </div>
              
              {/* Kartu 3: Akreditasi */}
              <div className="rounded-2xl p-5 shadow-xl text-white" style={{ background: "linear-gradient(135deg, #7a4a0c 0%, #C97A14 100%)" }}>                
                <div className="flex items-center gap-2 text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-2">                    
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"/>
                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"/>
                  </svg> 
                  Akreditasi                
                </div>                
                <div className="text-3xl lg:text-4xl font-black">A</div>                
                <div className="text-xs text-white/70 mt-1">Sekolah Unggulan</div>            
              </div>
              
              {/* Kartu 4: Lulusan */}
              <div className="bg-white rounded-2xl p-5 shadow-xl ring-1 ring-gray-100">                
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#1E3335] uppercase tracking-wider mb-2">                    
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clip-rule="evenodd"/>
                  </svg> 
                  Lulusan                
                </div>                
                <div className="text-3xl lg:text-4xl font-black text-[#1E3335]">98<span className="text-xl">%</span></div>                
                <div className="text-xs text-gray-500 mt-1">Diterima di PTN/PTS favorit</div>            
              </div>        
            
            </div>    
          </div>
        </div>

      </div>

      {/* SECTION 3: SPACER TAMBAHAN UNTUK LAYAR DEKTOP */}
      <div className="hidden lg:block lg:h-20 bg-gray-50"></div>

    </div>
  )
}