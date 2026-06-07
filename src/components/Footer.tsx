import React from "react"
import Image from "next/image"

export default function Footer(): React.JSX.Element {
  // Ukuran teks (link.style) diatur responsif: sangat kecil di HP (text-[10px] atau text-xs)
  const links = [
    { href: "https://www.kemendikdasmen.go.id/", src: "/kemdikbudristek.png", alt: "Kemendikbud", label: "Kemendikbud", style: "text-[11px] md:text-xl font-semibold text-gray-700" },
    { href: "https://disdikbud.kaltimprov.go.id/", src: "/disdikbudprov.png", alt: "Disdik Provinsi", label: "Disdik Provinsi", style: "text-[11px] md:text-xl font-semibold text-gray-700" },
    { href: "https://disdikbud.balikpapan.go.id/", src: "/disdikbud.png", alt: "Disdik Balikpapan", label: "Disdik Balikpapan", style: "text-[11px] md:text-xl font-semibold text-gray-700" },
    { href: "https://www.instagram.com/sman7balikpapan/", src: "/ig1.png", alt: "Instagram", label: "sman7balikpapan", style: "text-[10px] md:text-2xl font-semibold text-gray-700" },
    { href: "https://youtube.com/@SMAN7BPP", src: "/yutub.png", alt: "Youtube", label: "SMAN7BPP", style: "text-[10px] md:text-2xl font-bold text-red-600" },
    { href: "https://www.tiktok.com/@sman.7.balikpapan", src: "/tt.png", alt: "TikTok", label: "sman.7.balikpapan", style: "text-[10px] md:text-2xl font-semibold text-gray-700" },
  ]

  return (
    <footer className="bg-[#f5f5f5] py-8 md:py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Judul Bagian */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-2xl md:text-6xl font-bold text-gray-700 tracking-tight">
            Link Terkait
          </h1>
          <div className="w-14 md:w-28 h-1 md:h-2 bg-yellow-400 rounded-full mx-auto mt-2 md:mt-4"></div>
        </div>

        {/* GRID DIPAKSA 3 KOLOM: Menggunakan grid-cols-3 langsung dari ukuran terkecil (HP) */}
        {/* Jarak gap vertikal (gap-y-8) dan horizontal (gap-x-2) disesuaikan agar pas */}
        <div className="grid grid-cols-3 gap-y-8 gap-x-2 md:gap-x-10 text-center items-start">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col items-center group">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                // UKURAN LOGO MENGECIL DI HP: w-14 h-14 di HP, md:w-32 md:h-32 di desktop
                className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-32 block transition duration-300 transform group-hover:scale-110"
              >
                <Image
                  src={link.src}
                  alt={link.alt}
                  fill
                  sizes="(max-width: 768px) 56px, 128px"
                  className="object-contain"
                  priority={index < 3}
                />
              </a>

              {/* Teks Label: Menggunakan break-all agar nama username sosmed yang panjang terpotong rapi ke bawah */}
              <p className={`${link.style} mt-2 md:mt-4 break-all px-1 leading-tight`}>
                {link.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </footer>
  )
}