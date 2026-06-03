import React from 'react';

export default function Map() {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Bagian Peta */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Lokasi Sekolah</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Maju Bersama, Hebat Semua. Temukan arah menuju SMA Negeri 7 Balikpapan.
          </p>
        </div>

        {/* Kontainer Peta: Tinggi adaptif (h-[300px] di HP, h-[450px] di Desktop) */}
        <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
          <iframe
            // Gunakan URL embed resmi dari Google Maps untuk SMAN 7 Balikpapan
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8475510619717!2d116.96347909999999!3d-1.2573516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149b16ea98471%3A0x6e7889c2cc0bf38f!2sSMA%20Negeri%207%20Balikpapan!5e0!3m2!1sid!2sid!4v1714800000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi SMAN 7 Balikpapan"
          />
        </div>

        {/* Informasi Tambahan di Bawah Peta */}
        {/* Menggunakan text-center di mobile, md:text-left di desktop */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left text-sm text-slate-300 bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-1.5 flex items-center gap-1">
              📍 Alamat Lengkap:
            </h4>
            <p className="leading-relaxed">
              Jl. Mulawarman No.63, RT.20, Lamaru, Kec. Balikpapan Timur, Kota Balikpapan, Kalimantan Timur 76117
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-1.5 flex items-center gap-1">
              🚌 Akses Transportasi:
            </h4>
            <p className="leading-relaxed">
              Terletak di jalur utama Jl. Mulawarman, dapat diakses dengan mudah menggunakan kendaraan pribadi maupun angkutan umum kota (Angkot Nomor 7).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}