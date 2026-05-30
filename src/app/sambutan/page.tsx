"use client"

export default function sambutanPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6">

        {/* Judul */}
        <div className="text-center mb-20">

          <h1 className="text-6xl font-bold text-blue-400">
            Sambutan Kepala Sekolah
          </h1>

          <p className="text-gray-200 text-xl mt-4">
            SMA Negeri 7 Balikpapan
          </p>

        </div>

        {/* Sambutan Kepala Sekolah */}
<div className="max-w-7xl mx-auto bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10 mb-16">

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

    {/* Sambutan */}
    <div className="lg:col-span-2 order-2 lg:order-1">

      <h2 className="text-4xl font-bold text-white mb-6">
         Kepala Sekolah
      </h2>

      <p className="text-gray-200 leading-8 text-lg text-justify">
        Assalamu’alaikum Warahmatullahi Wabarakatuh.

        Selamat datang di website resmi SMA Negeri 7 Balikpapan.
        Website ini hadir sebagai sarana informasi dan komunikasi
        bagi seluruh warga sekolah serta masyarakat luas.

        Kami berkomitmen untuk menciptakan lingkungan pendidikan
        yang unggul, berkarakter, berprestasi, dan berbasis teknologi.
        Semoga website ini dapat memberikan manfaat dan menjadi
        media informasi yang inspiratif bagi semua pihak.

        Wassalamu’alaikum Warahmatullahi Wabarakatuh.
      </p>

      <div className="mt-8">

        <h3 className="text-2xl font-bold text-white">
          Puspani Bandrang, M. Pd.
        </h3>

        <p className="text-blue-200">
          Kepala SMA Negeri 7 Balikpapan
        </p>

      </div>

    </div>

    {/* Foto Kepala Sekolah */}
    <div className="flex justify-center order-1 lg:order-2">

      <img
        src="/kepsek.webp"
        alt="Kepala Sekolah"
        className="w-[300px] h-[400px] object-cover rounded-3xl shadow-xl"
      />

    </div>

  </div>

</div>

        {/* Visi & Misi */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* Visi */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10">

            <h2 className="text-4xl font-bold text-white mb-6">
              Visi
            </h2>

            <p className="text-gray-200 leading-8 text-lg text-justify">
              Menjadi sekolah unggul yang berprestasi, berkarakter,
              berwawasan lingkungan, dan mampu bersaing di era global
              berbasis teknologi.
            </p>

          </div>

          {/* Misi */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10">

            <h2 className="text-4xl font-bold text-white mb-6">
              Misi
            </h2>

            <ul className="text-gray-200 leading-8 text-lg list-disc pl-6 space-y-3">

              <li>
                Meningkatkan kualitas pembelajaran berbasis teknologi.
              </li>

              <li>
                Membentuk karakter siswa yang disiplin dan berintegritas.
              </li>

              <li>
                Mengembangkan potensi akademik dan non-akademik siswa.
              </li>

              <li>
                Menumbuhkan kepedulian terhadap lingkungan sekolah.
              </li>

              <li>
                Menjalin kerja sama dengan berbagai pihak untuk kemajuan sekolah.
              </li>

            </ul>

          </div>

        </div>

        {/* Struktur Organisasi */}
        <div className="max-w-7xl mx-auto bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10">

          <h2 className="text-4xl font-bold text-white mb-10 text-center">
            Struktur Organisasi
          </h2>

          <div className="flex justify-center">

            <img
              src="/struktur.png"
              alt="Struktur Organisasi"
              className="rounded-3xl shadow-2xl max-w-full"
            />

          </div>

        </div>

      </div>
    </div>
  )
}