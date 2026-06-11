"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// 1. DATA STRUKTUR ORGANISASI OSIS SMAN 7 BALIKPAPAN
const pengurusInti = {
  ketua: { nama: "Wira Taqwa Jalarumeksa", kelas: "XI-B1", jabatan: "Ketua Umum OSIS" },
  wakil: { nama: "Syahla Rifda Oktaviana", kelas: "XI-B1", jabatan: "Wakil Ketua 2" },
  sekretaris: [
    { nama: "Gezia Adila", kelas: "XI-A1", jabatan: "Sekretaris Umum" },
    { nama: "Khumairoh", kelas: "XI-A2", jabatan: "Sekretaris 1" },
    { nama: "Aulia Nur Nadhifah", kelas: "X-E", jabatan: "Sekretaris 2" }
  ],
  bendahara: [
    { nama: "Keyla", kelas: "XI-B2", jabatan: "Bendahara Umum" },
    { nama: "Nataya Az-Zahra", kelas: "X-D", jabatan: "Wakil Bendahara" }
  ]
}

const daftarSekbid = [
  {
    nomor: "Sekbid I",
    bidang: "Pembinaan Keimanan & Ketaqwaan Terhadap Tuhan YME",
    anggota: [
      { nama: "Iftinah Mahmudah", kelas: "X-A" },
      { nama: "Theresia Esa B.", kelas: "XI-B1" },
      { nama: "Vineshia Ervin", kelas: "X-H" },
      { nama: "Lovely Lintang A.", kelas: "XI-D2" }
    ]
  },
  {
    nomor: "Sekbid II",
    bidang: "Pembinaan Budi Pekerti Luhur & Akhlak Mulia",
    anggota: [
      { nama: "Shifa Salsabila", kelas: "XI-A2" },
      { nama: "Kerenhapukh S.", kelas: "X-G" },
      { nama: "Alifia Rahim", kelas: "XI-B2" },
      { nama: "Ainun Zahria", kelas: "XI-B1" },
      { nama: "Nur Zatia Rahma", kelas: "XI-C1" }
    ]
  },
  {
    nomor: "Sekbid III",
    bidang: "Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, & Bela Negara",
    anggota: [
      { nama: "Maura Syafa Lyla", kelas: "X-D" },
      { nama: "Imanuel Joshua", kelas: "X-G" },
      { nama: "Eirine Kristy", kelas: "X-H" }
    ]
  },
  {
    nomor: "Sekbid IV",
    bidang: "Pembinaan Prestasi Akademik, Seni, dan/atau Olahraga",
    anggota: [
      { nama: "Ashraf Zahirul R.", kelas: "X-B" },
      { nama: "Crensensia Risya P.", kelas: "XI-B1" },
      { nama: "Restiana Putri", kelas: "X-F" },
      { nama: "Daffa Marchelino D.P", kelas: "XI-A1" }
    ]
  },
  {
    nomor: "Sekbid V",
    bidang: "Pembinaan Demokrasi, Hak Asasi Manusia, & Pendidikan Politik",
    anggota: [
      { nama: "Windi Fachra", kelas: "X-I" },
      { nama: "Nur Asyifah A.", kelas: "XI-A1" },
      { nama: "Iffatullaily Sholika", kelas: "XI-B1" }
    ]
  },
  {
    nomor: "Sekbid VI",
    bidang: "Pembinaan Kreativitas, Keterampilan, & Kewirausahaan",
    anggota: [
      { nama: "Aurellya", kelas: "X-H" },
      { nama: "Adelia Fredella Ulani E.", kelas: "XI-B1" },
      { nama: "Zaskia Riva Audry", kelas: "XI-C1" }
    ]
  },
  {
    nomor: "Sekbid VII",
    bidang: "Pembinaan Kualitas Jasmani, Kesehatan, & Gizi",
    anggota: [
      { nama: "Gabriel Septian P.", kelas: "XI-B1" },
      { nama: "M. Gilang Pratama", kelas: "X-F" },
      { nama: "Kalifa Nur Kara", kelas: "XI-A1" },
      { nama: "Keisha Siti Zahrani", kelas: "XI-D2" },
      { nama: "Naurah Dwi Naifah M.", kelas: "XI-A2" },
      { nama: "Yogi Wali Nur. U", kelas: "X-F" }
    ]
  },
  {
    nomor: "Divisi HUMAS",
    bidang: "Hubungan Masyarakat & Komunikasi Eksternal Organisasi",
    anggota: [
      { nama: "Nabila Octavin", kelas: "X-B" },
      { nama: "Regina Al Zahra", kelas: "XI-C2" }
    ]
  }
]

// 2. DATA VISI & MISI
const visiMisi = {
  visi: "Mewujudkan OSIS SMA Negeri 7 Balikpapan sebagai wadah sinergi siswa yang religius, aktif, mandiri, dan berwawasan global, serta adaptif terhadap perkembangan teknologi demi kemajuan ekosistem SMANJU.",
  misi: [
    "Menumbuhkan jiwa ketuhanan melalui penguatan kegiatan keagamaan inklusif di sekolah.",
    "Mengoptimalkan peran media digital website dan sosial media sebagai penyalur aspirasi dan kreativitas siswa.",
    "Membangun kolaborasi erat antar ekstrakurikuler guna meningkatkan prestasi akademik maupun non-akademik.",
    "Menyelenggarakan program kerja kreatif yang berfokus pada pengembangan kepemimpinan dan karakter budi pekerti."
  ]
}

// 3. DATA PROGRAM KERJA (PROKER)
const prokerUtama = [
  {
    id: 1,
    icon: "🏆",
    nama: "SMANJU Cup & Pentas Seni (Pensi)",
    deskripsi: "Kompetisi olahraga dan seni akbar tahunan antar SMA se-Balikpapan sebagai wadah unjuk bakat dan kreativitas."
  },
  {
    id: 2,
    icon: "🔥",
    nama: "LDKS (Latihan Dasar Kepemimpinan Siswa)",
    deskripsi: "Pelatihan intensif pembentukan karakter kepemimpinan, kedisiplinan, dan manajemen organisasi bagi calon pengurus."
  },
  {
    id: 3,
    icon: "⚡",
    nama: "Class Meeting Digital & Sport",
    deskripsi: "Pekan olahraga dan turnamen e-sports antar kelas pasca ujian semester untuk mempererat solidaritas siswa."
  },
  {
    id: 4,
    icon: "🕊️",
    nama: "SMANJU Berbagi (Bakti Sosial)",
    deskripsi: "Aksi kepedulian sosial penggalangan dana dan sembako berkala untuk disalurkan ke panti asuhan di Balikpapan."
  }
]

export default function OsisPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden select-none">
      
      {/* Background Ornamen Gradasi Emas-Biru Sinematik */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg3.jpeg"
          alt="Latar Belakang SMANJU"
          fill
          priority
          className="object-cover object-center opacity-25 fixed" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950" />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 pt-24 md:pt-32 px-4 max-w-7xl mx-auto space-y-24">
        
        {/* TOMBOL BACK KE KESISWAAN */}
        <div className="mb-6">
          <Link href="/Kesiswaan" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 hover:text-white transition duration-200">
            ⬅️ Kembali ke Kesiswaan
          </Link>
        </div>

        {/* HEADER HERO */}
        <div className="text-center space-y-3">
          <span className="bg-amber-500/10 text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full text-amber-400 border border-amber-500/20 uppercase tracking-[0.2em]">
            Lembaga Kesiswaan
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight pt-2">
            Organisasi Siswa <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">Intra Sekolah (OSIS)</span>
          </h1>
          <p className="text-slate-400 text-xs md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Pusat kepemimpinan, kreasi, dan penggerak utama seluruh roda kegiatan siswa di SMA Negeri 7 Balikpapan.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto rounded-full pt-0.5" />
        </div>

        {/* SECTION 1: BAGAN STRUKTUR */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-slate-300">Struktur Kepengurusan</h2>
            <p className="text-xs text-amber-400 font-mono mt-1">Bagan Hierarki Komando OSIS Aktif</p>
          </div>

          {/* Wrapper Scrollable untuk Mobile agar Bagan Tidak Hancur */}
          <div className="w-full overflow-x-auto pb-6 pt-2 no-scrollbar">
            <div className="min-w-[1000px] flex flex-col items-center">
              
              {/* LEVEL 1: KETUA UMUM */}
              <div className="relative pb-8 flex flex-col items-center">
                <div className="bg-gradient-to-b from-amber-500 to-yellow-600 p-0.5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <div className="bg-slate-950 px-8 py-3 rounded-[10px] text-center w-56">
                    <div className="text-[10px] font-mono text-amber-400 font-bold tracking-widest uppercase">{pengurusInti.ketua.jabatan}</div>
                    <div className="text-sm font-black text-white mt-0.5">{pengurusInti.ketua.nama}</div>
                    <div className="text-[10px] text-slate-400">Kelas {pengurusInti.ketua.kelas}</div>
                  </div>
                </div>  
                {/* Garis Vertikal Turun */}
                <div className="absolute bottom-0 w-0.5 h-8 bg-amber-500/50" />
              </div>

              {/* LEVEL 2: WAKIL KETUA */}
              <div className="relative pb-8 pt-2 flex flex-col items-center">
                {/* Garis Vertikal Atas */}
                <div className="absolute top-0 w-0.5 h-2 bg-amber-500/50" />
                <div className="bg-gradient-to-b from-slate-700 to-slate-800 p-0.5 rounded-xl border border-white/5 shadow-md">
                  <div className="bg-slate-950 px-8 py-3 rounded-[10px] text-center w-56">
                    <div className="text-[10px] font-mono text-slate-400 font-bold tracking-widest uppercase">{pengurusInti.wakil.jabatan}</div>
                    <div className="text-sm font-black text-white mt-0.5">{pengurusInti.wakil.nama}</div>
                    <div className="text-[10px] text-slate-400">Kelas {pengurusInti.wakil.kelas}</div>
                  </div>
                </div>
                {/* Garis Vertikal Turun */}
                <div className="absolute bottom-0 w-0.5 h-8 bg-slate-700" />
              </div>

              {/* LEVEL 3: SEKRETARIS & BENDAHARA */}
              <div className="relative w-full max-w-4xl flex justify-between px-12 pb-12">
                {/* Garis Horizontal Penghubung Utama */}
                <div className="absolute top-0 left-[16.5%] right-[16.5%] h-0.5 bg-slate-700" />
                
                {/* BLOK KIRI: SEKRETARIS */}
                <div className="w-[340px] flex flex-col items-center relative">
                  <div className="absolute -top-4 w-0.5 h-4 bg-slate-700" />
                  
                  <div className="text-center text-[10px] font-bold font-mono text-blue-400 tracking-wider mb-2 uppercase">Sekretariat OSIS</div>
                  <div className="grid grid-cols-3 gap-2 w-full">
                    {pengurusInti.sekretaris.map((sek, idx) => (
                      <div key={idx} className="bg-slate-900/50 backdrop-blur-sm border border-white/10 p-2 rounded-xl text-center">
                        <div className="text-[8px] font-bold text-slate-400 uppercase truncate">{sek.jabatan}</div>
                        <div className="text-[11px] font-bold text-white mt-0.5 truncate" title={sek.nama}>{sek.nama}</div>
                        <div className="text-[9px] text-slate-500">{sek.kelas}</div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute -bottom-12 w-0.5 h-12 bg-slate-800" />
                </div>

                {/* BLOK KANAN: BENDAHARA */}
                <div className="w-[340px] flex flex-col items-center relative">
                  <div className="absolute -top-4 w-0.5 h-4 bg-slate-700" />

                  <div className="text-center text-[10px] font-bold font-mono text-emerald-400 tracking-wider mb-2 uppercase">Kebendaharaan OSIS</div>
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {pengurusInti.bendahara.map((ben, idx) => (
                      <div key={idx} className="bg-slate-900/50 backdrop-blur-sm border border-white/10 p-2.5 rounded-xl text-center">
                        <div className="text-[9px] font-bold text-slate-400 uppercase">{ben.jabatan}</div>
                        <div className="text-xs font-bold text-white mt-0.5 truncate" title={ben.nama}>{ben.nama}</div>
                        <div className="text-[9px] text-slate-500">{ben.kelas}</div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute -bottom-12 w-0.5 h-12 bg-slate-800" />
                </div>
              </div>

              {/* HUBUNGAN KONEKTOR BESAR KE SEKBID */}
              <div className="relative w-full max-w-6xl h-6">
                <div className="absolute top-0 left-[6%] right-[6%] h-0.5 bg-slate-800" />
              </div>

              {/* LEVEL 4: GRID SEKBID & HUMAS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl px-4">
                {daftarSekbid.map((sekbid, idx) => (
                  <div key={idx} className="relative flex flex-col items-center group">
                    <div className="absolute -top-6 w-0.5 h-6 bg-slate-800" />

                    <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-4 w-full text-center group-hover:border-blue-500/20 transition-all duration-300 shadow-lg flex flex-col justify-between min-h-[300px]">
                      <div>
                        <div className="text-[11px] font-mono text-blue-400 font-bold tracking-widest uppercase mb-1">{sekbid.nomor}</div>
                        <div className="text-[11px] text-slate-300 font-medium leading-snug h-12 flex items-center justify-center border-b border-white/5 pb-2 overflow-hidden text-ellipsis">
                          {sekbid.bidang}
                        </div>
                      </div>

                      {/* Anggota Sekbid */}
                      <div className="pt-3 space-y-1.5 text-left flex-grow overflow-y-auto max-h-[180px] no-scrollbar">
                        {sekbid.anggota.map((ang, aIdx) => (
                          <div key={aIdx} className="bg-black/20 px-2.5 py-1.5 rounded-xl border border-white/5 flex justify-between items-center gap-2">
                            <span className="text-xs font-semibold text-slate-200 truncate" title={ang.nama}>{ang.nama}</span>
                            <span className="text-[9px] text-slate-500 font-mono shrink-0">{ang.kelas}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: VISI & MISI */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-gradient-to-b from-amber-500/10 to-transparent backdrop-blur-sm border border-amber-500/20 p-6 md:p-8 rounded-3xl flex flex-col justify-center text-center md:text-left relative shadow-2xl"
          >
            <div className="text-amber-400 text-3xl font-serif font-black absolute top-4 right-6 opacity-20 select-none">“</div>
            <h3 className="text-xl font-mono tracking-[0.2em] text-amber-400 uppercase font-bold mb-4">Visi OSIS</h3>
            <p className="text-sm md:text-base text-slate-200 font-light italic leading-relaxed text-justify">
              "{visiMisi.visi}"
            </p>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="md:col-span-3 bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl space-y-4"
          >
            <h3 className="text-xl font-mono tracking-[0.2em] text-blue-400 uppercase font-bold">Misi Strategis</h3>
            <ul className="space-y-3">
              {visiMisi.misi.map((misi, index) => (
                <li key={index} className="flex items-start gap-3.5 text-xs md:text-sm text-slate-300">
                  <span className="flex items-center justify-center w-5 h-5 rounded-md bg-blue-500/20 text-blue-300 text-[10px] font-bold font-mono mt-0.5 shrink-0">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed font-light">{misi}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* SECTION 3: PROGRAM KERJA UTAMA */}
        <section className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-slate-300">Program Kerja Unggulan</h2>
            <p className="text-xs text-blue-400 font-mono mt-1">Agenda Besar Tahunan Pengurus OSIS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prokerUtama.map((proker) => (
              <motion.div
                whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
                key={proker.id}
                className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex gap-4 hover:border-amber-400/20 hover:bg-slate-900/40 transition duration-300 group shadow-lg"
              >
                <div className="text-3xl md:text-4xl bg-white/5 border border-white/10 w-14 h-14 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300 shrink-0">
                  {proker.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm md:text-base font-bold text-slate-100 group-hover:text-amber-400 transition">
                    {proker.nama}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed text-justify">
                    {proker.deskripsi}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}