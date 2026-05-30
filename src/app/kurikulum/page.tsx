"use client"

export default function KurikulumPage() {
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
        
        {/* Judul Halaman */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-blue-400 tracking-wide drop-shadow-lg">
            Kurikulum & Pembelajaran
          </h1>
          <p className="text-gray-200 text-xl mt-4 max-w-2xl mx-auto">
            Sistem pendidikan adaptif dan inovatif di SMA Negeri 7 Balikpapan untuk mencetak generasi unggul berteknologi.
          </p>
        </div>

        {/* 1. Pengantar Kurikulum Merdeka */}
        <div className="max-w-7xl mx-auto bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-blue-400">#</span> Kurikulum Merdeka
              </h2>
              <p className="text-gray-200 leading-8 text-lg text-justify mb-4">
                SMA Negeri 7 Balikpapan menerapkan **Kurikulum Merdeka** yang berfokus pada kebebasan akademik, pengembangan karakter melalui **Projek Penguatan Profil Pelajar Pancasila (P5)**, serta pembelajaran yang disesuaikan dengan minat dan bakat siswa.
              </p>
              <p className="text-gray-200 leading-8 text-lg text-justify">
                Dengan pendekatan ini, kami memastikan setiap siswa tidak hanya menguasai teori, tetapi juga memiliki keterampilan berpikir kritis, kolaboratif, dan siap bersaing di era digital.
              </p>
            </div>
            {/* Ilustrasi/Grafik Ringkasan */}
            <div className="bg-blue-500/10 border border-blue-400/20 rounded-2xl p-6 text-center backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">3 Pilar Utama</h4>
              <ul className="text-left text-gray-200 space-y-3">
                <li className="flex items-center gap-2">🎯 Intrakurikuler yang Fleksibel</li>
                <li className="flex items-center gap-2">🌱 Kokurikuler (Projek P5)</li>
                <li className="flex items-center gap-2">🚀 Ekstrakurikuler Berbasis Minat</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Metode Belajar Unggulan (Grid Cards) */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">
            Metode Belajar Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Metode 1 */}
            <div className="bg-white/15 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/10 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-3">Blended Learning</h3>
              <p className="text-gray-200 leading-relaxed">
                Mengombinasikan pembelajaran tatap muka di kelas dengan platform digital interaktif, memudahkan siswa mengakses materi kapan saja.
              </p>
            </div>
            {/* Metode 2 */}
            <div className="bg-white/15 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/10 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-3">Project-Based Learning</h3>
              <p className="text-gray-200 leading-relaxed">
                Siswa belajar memecahkan masalah nyata melalui proyek kelompok, mengasah kerja sama, kreativitas, dan kepemimpinan.
              </p>
            </div>
            {/* Metode 3 */}
            <div className="bg-white/15 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/10 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-white mb-3">Inquiry & Discovery</h3>
              <p className="text-gray-200 leading-relaxed">
                Mendorong rasa ingin tahu siswa melalui eksperimen dan riset mandiri, membangun mentalitas pembelajar sepanjang hayat.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Kalender Pendidikan (Tampilan Gambar + Tombol Download) */}
        <div className="max-w-7xl mx-auto bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white">Kalender Pendidikan</h2>
            <p className="text-blue-200 mt-2">Tahun Ajaran Aktif SMA Negeri 7 Balikpapan</p>
          </div>

          {/* Menampilkan Gambar Kalender */}
          <div className="flex justify-center mb-10 bg-black/20 p-4 rounded-2xl border border-white/5">
            <img
              src="/Kalender-Akademik.jpg"
              alt="Gambar Kalender Pendidikan SMA Negeri 7 Balikpapan"
              className="rounded-xl shadow-lg max-w-full h-auto object-contain border border-white/10"
            />
          </div>

          {/* Tombol Download di Bawah Gambar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 bg-black/30 p-6 rounded-2xl border border-white/10">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-white">Butuh Dokumen Cetak?</h4>
              <p className="text-gray-300 text-sm">Unduh versi PDF resolusi tinggi untuk dicetak atau disimpan di perangkat Anda.</p>
            </div>
            <a 
              href="/download/POSTER.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transition duration-300 flex items-center gap-2 whitespace-nowrap text-base"
            >
              📥 Download Kalender (PDF)
            </a>
          </div>
        </div> 

        {/* Grid Jadwal Semester */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Semester Ganjil */}
          <div className="bg-white/15 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 border-b border-white/10 pb-3 flex items-center gap-2">
              🍂 Semester Ganjil
            </h3>
            <ul className="space-y-4 text-gray-200 text-lg">
              <li className="flex justify-between items-start border-b border-white/5 pb-2">
                <span className="font-semibold">Juli</span>
                <span className="text-right text-sm text-blue-200 max-w-[200px]">Hari Pertama Sekolah & MPLS</span>
              </li>
              <li className="flex justify-between items-start border-b border-white/5 pb-2">
                <span className="font-semibold">September</span>
                <span className="text-right text-sm text-blue-200 max-w-[200px]">Asesmen Sumatif Tengah Semester (ASTS)</span>
              </li>
              <li className="flex justify-between items-start">
                <span className="font-semibold">Desember</span>
                <span className="text-right text-sm text-blue-200 max-w-[200px]">Asesmen Akhir Semester & Pembagian Raport</span>
              </li>
            </ul>
          </div>

          {/* Semester Genap */}
          <div className="bg-white/15 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 border-b border-white/10 pb-3 flex items-center gap-2">
              🌱 Semester Genap
            </h3>
            <ul className="space-y-4 text-gray-200 text-lg">
              <li className="flex justify-between items-start border-b border-white/5 pb-2">
                <span className="font-semibold">Januari</span>
                <span className="text-right text-sm text-blue-200 max-w-[200px]">Hari Pertama Masuk Semester Genap</span>
              </li>
              <li className="flex justify-between items-start border-b border-white/5 pb-2">
                <span className="font-semibold">Maret</span>
                <span className="text-right text-sm text-blue-200 max-w-[200px]">Asesmen Tengah Semester & Ujian Sekolah Kelas XII</span>
              </li>
              <li className="flex justify-between items-start">
                <span className="font-semibold">Juni</span>
                <span className="text-right text-sm text-blue-200 max-w-[200px]">Asesmen Akhir Tahun & Kenaikan Kelas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Alokasi Waktu Belajar (Tabel) */}
        <div className="max-w-7xl mx-auto bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Struktur Beban Belajar
          </h2>
          <p className="text-gray-200 text-center mb-10 max-w-xl mx-auto">
            Gambaran pembagian jam pelajaran (JP) mingguan untuk memberikan keseimbangan antara akademik dan pengembangan karakter.
          </p>
          
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-500/20 text-blue-300">
                  <th className="p-4 font-bold border-b border-white/10">Komponen Pembelajaran</th>
                  <th className="p-4 font-bold border-b border-white/10 text-center">Kelas X</th>
                  <th className="p-4 font-bold border-b border-white/10 text-center">Kelas XI & XII</th>
                </tr>
              </thead>
              <tbody className="text-gray-200 divide-y divide-white/10">
                <tr className="hover:bg-white/5 transition">
                  <td className="p-4">Kegiatan Intrakurikuler (Mata Pelajaran Wajib/Pilihan)</td>
                  <td className="p-4 text-center">34 JP / minggu</td>
                  <td className="p-4 text-center">36 JP / minggu</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-4">Projek Penguatan Profil Pelajar Pancasila (P5)</td>
                  <td className="p-4 text-center">8 JP / minggu</td>
                  <td className="p-4 text-center">6 JP / minggu</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-4 font-semibold text-blue-200">Total Alokasi Waktu Per Minggu</td>
                  <td className="p-4 text-center font-semibold text-blue-200">42 JP</td>
                  <td className="p-4 text-center font-semibold text-blue-200">42 JP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}