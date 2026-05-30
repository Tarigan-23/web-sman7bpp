import React from "react"

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Judul */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-gray-700">
            Link Terkait
          </h1>

          <div className="w-28 h-2 bg-yellow-400 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-10 text-center">

          {/* Kemendikbud */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.kemendikdasmen.go.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/kemdikbudristek.png"
                alt="Kemendikbud"
                className="w-32 h-32 object-contain hover:scale-110 transition duration-300"
              />
            </a>

            <p className="text-xl font-semibold text-gray-700 mt-4">
              Kemendikbud
            </p>
          </div>

          {/* Disdik Provinsi */}
          <div className="flex flex-col items-center">
            <a
              href="https://disdikbud.kaltimprov.go.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/disdikbudprov.png"
                alt="Disdik Provinsi"
                className="w-32 h-32 object-contain hover:scale-110 transition duration-300"
              />
            </a>

            <p className="text-xl font-semibold text-gray-700 mt-4">
              Disdik Provinsi
            </p>
          </div>

          {/* Disdik Kota */}
          <div className="flex flex-col items-center">
            <a
              href="https://disdikbud.balikpapan.go.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/disdikbud.png"
                alt="Disdik Balikpapan"
                className="w-32 h-32 object-contain hover:scale-110 transition duration-300"
              />
            </a>

            <p className="text-xl font-semibold text-gray-700 mt-4">
              Disdik Balikpapan
            </p>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/sman7balikpapan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/ig1.png"
                alt="Instagram"
                className="w-32 h-32 object-contain hover:scale-110 transition duration-300"
              />
            </a>

            <p className="text-2xl font-semibold text-gray-700 mt-4">
              @sman7balikpapan
            </p>
          </div>

          {/* Youtube */}
          <div className="flex flex-col items-center">
            <a
              href="https://youtube.com/@SMAN7BPP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/yutub.png"
                alt="Youtube"
                className="w-32 h-32 object-contain hover:scale-110 transition duration-300"
              />
            </a>

            <p className="text-2xl font-bold text-red-600 mt-4">
              @SMAN7BPP
            </p>
          </div>

          {/* TikTok */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.tiktok.com/@sman.7.balikpapan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/tt.png"
                alt="TikTok"
                className="w-32 h-32 object-contain hover:scale-110 transition duration-300"
              />
            </a>

            <p className="text-2xl font-semibold text-gray-700 mt-4">
              @sman.7.balikpapan
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}