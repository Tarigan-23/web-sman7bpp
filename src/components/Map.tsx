import React from 'react';

export default function Map() {
  return (
    <section className="w-full bg-slate-900 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Bagian Peta */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Lokasi Sekolah</h2>
          <p className="text-slate-400">
            Maju Bersama, Hebat Semua. Temukan arah menuju SMA Negeri 7 Balikpapan.
          </p>
        </div>

        {/* Kontainer Peta */}
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.77154596512!2d116.980645188485!3d-1.2002747763269273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14f000d8900c3%3A0xe5c4521865ca4424!2sSMA%20NEGERI%207%20BALIKPAPAN!5e0!3m2!1sid!2sid!4v1779503806543!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi SMAN 7 Balikpapan"
          />
        </div>

        {/* Informasi Tambahan di Bawah Peta (Opsional) */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
          <div>
            <h4 className="font-semibold text-white mb-1">Alamat Lengkap:</h4>
            <p>Jl. Mulawarman No.63, RT.20, Lamaru, Kec. Balikpapan Timur, Kota Balikpapan, Kalimantan Timur 76117</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">Akses Transportasi:</h4>
            <p>Terletak di jalur utama Jl. Mulawarman, dapat diakses dengan kendaraan pribadi maupun angkutan umum kota.</p>
          </div>
        </div>
      </div>
    </section>
  );
}