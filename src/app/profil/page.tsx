"use client"

import React from "react"

export default function ProfilPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Konten Utama */}
      <div className="relative z-10 pt-32 pb-20 px-6">

        {/* Judul Halaman */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-blue-400 drop-shadow-lg">
            Profil Sekolah
          </h1>
          <p className="text-gray-200 text-xl mt-4 font-light tracking-wide">
            SMA Negeri 7 Balikpapan
          </p>
        </div>

        {/* Bagian Atas: Tentang Sekolah & Status Resmi (Tabel) */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          
          {/* Tentang Sekolah (Kiri - Tengah) */}
          <div className="lg:col-span-2 bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Tentang Sekolah
              </h2>
              <p className="text-gray-200 leading-8 text-lg text-justify mb-4">
                SMA Negeri 7 Balikpapan merupakan salah satu satuan pendidikan dengan jenjang SMA di Kota Balikpapan. Sekolah ini berkomitmen penuh dalam menyelenggarakan pendidikan tingkat menengah yang bermutu tinggi guna menghasilkan lulusan yang cerdas, adaptif, serta berintegritas.
              </p>
              <p className="text-gray-200 leading-8 text-lg text-justify">
                Sebagai lembaga pendidikan formal, sekolah ini terus bertransformasi mengintegrasikan teknologi ke dalam sistem pembelajaran, meningkatkan kualitas pendidik, serta memfasilitasi minat dan bakat siswa baik di bidang akademik maupun non-akademik.
              </p>
            </div>
          </div>

          {/* Identitas Formal Sekolah (Kanan) - Berbentuk Tabel Vertikal */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 flex flex-col justify-center">
            <div>
              <h2 className="text-3xl font-extrabold text-blue-600 mb-6 text-center tracking-wide uppercase bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                Status Resmi
              </h2>
              
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {/* Baris 1: Status */}
                    <tr className="border-b border-white/10 hover:bg-white/5 transition duration-200">
                      <td className="p-4 text-sm font-semibold text-white uppercase tracking-wider w-1/3">
                        Status
                      </td>
                      <td className="p-4 text-lg font-bold text-white">
                        NEGERI
                      </td>
                    </tr>

                    {/* Baris 2: Akreditasi */}
                    <tr className="border-b border-white/10 hover:bg-white/5 transition duration-200">
                      <td className="p-4 text-sm font-semibold text-emerald-300 uppercase tracking-wider">
                        Akreditasi
                      </td>
                      <td className="p-4 text-xl font-black text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                        A (Sangat Baik)
                      </td>
                    </tr>

                    {/* Baris 3: NPSN */}
                    <tr className="border-b border-white/10 hover:bg-white/5 transition duration-200">
                      <td className="p-4 text-sm font-semibold text-purple-300 uppercase tracking-wider">
                        NPSN
                      </td>
                      <td className="p-4 text-base font-bold text-white font-mono tracking-widest">
                        30401490
                      </td>
                    </tr>

                    {/* Baris 4: Kurikulum */}
                    <tr className="hover:bg-white/5 transition duration-200">
                      <td className="p-4 text-sm font-semibold text-amber-300 uppercase tracking-wider">
                        Kurikulum
                      </td>
                      <td className="p-4 text-base font-extrabold text-white">
                        Kurikulum Merdeka
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        {/* Bagian Bawah: Sejarah Sekolah */}
        <div className="max-w-7xl mx-auto bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-6 text-center lg:text-left">
            Sejarah Sekolah
          </h2>
          <div className="space-y-4 text-gray-200 leading-8 text-lg text-justify">
            <p>
              SMA Negeri 7 Balikpapan didirikan sebagai respons atas meningkatnya kebutuhan akses pendidikan menengah atas yang berkualitas di wilayah Balikpapan. Sejak awal pendiriannya, sekolah ini dirancang untuk menciptakan generasi penerus bangsa yang unggul di Kalimantan Timur.
            </p>
            <p>
              Dari tahun ke tahun, sekolah terus mengalami perkembangan pesat. Mulai dari peningkatan sarana prasarana fisik seperti laboratorium, perpustakaan digital, fasilitas olahraga, hingga raihan prestasi yang diperoleh oleh para siswa di tingkat kota, provinsi, bahkan nasional.
            </p>
            <p>
              Kini, di era transformasi digital, SMA Negeri 7 Balikpapan berdiri kokoh mempertahankan dedikasinya untuk mencetak pemuda-pemudi mandiri yang siap bersaign dalam menghadapi tantangan zaman dengan pondasi karakter yang kuat.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}