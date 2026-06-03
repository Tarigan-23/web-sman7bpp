import React from "react"
import Image from "next/image" // Menggunakan optimasi gambar Next.js

export default function Footer(): React.JSX.Element {
  // Satukan data link agar kode bersih dan mudah dimaintain
  const links = [
    { href: "https://www.kemendikdasmen.go.id/", src: "/kemdikbudristek.png", alt: "Kemendikbud", label: "Kemendikbud", style: "text-xl font-semibold text-gray-700" },
    { href: "https://disdikbud.kaltimprov.go.id/", src: "/disdikbudprov.png", alt: "Disdik Provinsi", label: "Disdik Provinsi", style: "text-xl font-semibold text-gray-700" },
    { href: "https://disdikbud.balikpapan.go.id/", src: "/disdikbud.png", alt: "Disdik Balikpapan", label: "Disdik Balikpapan", style: "text-xl font-semibold text-gray-700" },
    { href: "https://www.instagram.com/sman7balikpapan/", src: "/ig1.png", alt: "Instagram", label: "@sman7balikpapan", style: "text-xl md:text-2xl font-semibold text-gray-700" },
    { href: "https://youtube.com/@SMAN7BPP", src: "/yutub.png", alt: "Youtube", label: "@SMAN7BPP", style: "text-xl md:text-2xl font-bold text-red-600" },
    { href: "https://www.tiktok.com/@sman.7.balikpapan", src: "/tt.png", alt: "TikTok", label: "@sman.7.balikpapan", style: "text-xl md:text-2xl font-semibold text-gray-700" },
  ]

  return (
    <footer className="bg-[#f5f5f5] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Judul: Responsif (Mobile lebih kecil, Desktop tetap besar) */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-700 tracking-tight">
            Link Terkait
          </h1>
          <div className="w-20 md:w-28 h-1.5 md:h-2 bg-yellow-400 rounded-full mx-auto mt-3 md:mt-4"></div>
        </div>

        {/* Grid: 1 kolom di HP, 2 kolom di Tablet (sm), 3 kolom di Desktop (md) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-20 gap-x-10 text-center">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col items-center group">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-28 h-28 md:w-32 md:h-32 block transition duration-300 transform group-hover:scale-110"
              >
                <Image
                  src={link.src}
                  alt={link.alt}
                  fill
                  sizes="(max-width: 768px) 112px, 128px"
                  className="object-contain"
                  priority={index < 3} // Prioritaskan loading 3 gambar pertama
                />
              </a>

              {/* Teks Label: Ukuran mengecil di HP agar tidak patah berantakan */}
              <p className={`${link.style} mt-4 break-all px-2`}>
                {link.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </footer>
  )
}