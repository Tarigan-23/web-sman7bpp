import React from "react"

export default function Footer(): React.JSX.Element {
  return (
    
    <footer className="bg-slate-900 text-white py-10 mt-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            SMA NEGERI 7 BALIKPAPAN
          </h2>
          <p className="text-white font-medium">
            Sekolah modern berbasis teknologi dan prestasi.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-xl text-white">
            Kontak
          </h3>
          <p className="text-white">Email: info@sman7.sch.id</p>
          <p className="text-white">Balikpapan, Kalimantan Timur</p>
        </div>
      </div>
    </footer>
  )
}
