"use client"

export default function KelasPage() {

  const kelas = [
    {
      namaKelas: "X-A",
      waliKelas: "Yudho Prasetyo, S.Pd",
      ketuaKelas: "",
    },

    {
      namaKelas: "X-B",
      waliKelas: "Sukrillah, S. Pd. I",
      ketuaKelas: "",
    },

    {
      namaKelas: "X-C",
      waliKelas: "Novita Susanti, S.Pd",
      ketuaKelas: "",
    },

    {
      namaKelas: "X-D",
      waliKelas: "Sri Narti, S. Pd",
      ketuaKelas: "",
    },
    {
      namaKelas: "X-E",
      waliKelas: "Dame Lasniroha Sitorus, S. Th.",
      ketuaKelas: "",
    },
    {
      namaKelas: "X-F",
      waliKelas: "Nova Agustina, S.Pd",
      ketuaKelas: "",
    },
    {
      namaKelas: "X-G",
      waliKelas: "Elok Setyowati, S. Pd.",
      ketuaKelas: "",
    },
    {
      namaKelas: "X-H",
      waliKelas: "Heriansyah, S. Pd.",
      ketuaKelas: "",
    },
    {
      namaKelas: "X-I",
      waliKelas: "Roslindah, S. Pd",
      ketuaKelas: "",
    },
    {
      namaKelas: "X-J",
      waliKelas: "Eka Normawati, S. Pd",
      ketuaKelas: "",
    },
    {
      namaKelas: "X-K",
      waliKelas: "Delis Miftahul Janah, S.Pd",
      ketuaKelas: "",
    },
    {
      namaKelas: "XI-A1",
      waliKelas: "Sri Yunita, S.Pd.",
      ketuaKelas: "",
    },
    {
      namaKelas: "XI-A2",
      waliKelas: "Aji Utama, S. Pd.",
      ketuaKelas: "",
    },
    {
      namaKelas: "XI-B1",
      waliKelas: "Sella Lipiantanna, S. Pd",
      ketuaKelas: "",
    },
    {
      namaKelas: "XI-B2",
      waliKelas: "Andi Fadly Amdan, S. Pd.",
      ketuaKelas: "",
    },
    {
      namaKelas: "XI-C",
      waliKelas: "Nirwana, S. Pd.",
      ketuaKelas: "",
    },
    {
      namaKelas: "XI-D1",
      waliKelas: "Tri Nur Janah Kusumaningrum, S.Pd.",
      ketuaKelas: "",
    },
    {
      namaKelas: "XI-D2",
      waliKelas: "Dasril Hidayat, S. Kom.",
      ketuaKelas: "",
    },
    {
      namaKelas: "XI-D3",
      waliKelas: "Arfah, S.Pd",
      ketuaKelas: "",
    },
    {
      namaKelas: "XI-D4",
      waliKelas: "Hj. Rita Ariyani, S.Pd",
      ketuaKelas: "",
    },
    {
      namaKelas: "XII-A1",
      waliKelas: "Ida Sularkoni, S.Pd",
      ketuaKelas: "",
    },
    {
      namaKelas: "XII-A2",
      waliKelas: "Ikka Desy Fatmawaty, S. Pd",
      ketuaKelas: "",
    },
    {
      namaKelas: "XII-B1",
      waliKelas: "Marpuah, S. Pd.",
      ketuaKelas: "",
    },
    {
      namaKelas: "XII-B2",
      waliKelas: "Dra. Sri Rahayu R.",
      ketuaKelas: "",
    },
    {
      namaKelas: "XII-C1",
      waliKelas: "Ratna Hastati, S. Pd.",
      ketuaKelas: "",
    },
    {
      namaKelas: "XII-C2",
      waliKelas: "Hj. Murdiana, S.Pd.",
      ketuaKelas: "",
    },
    {
      namaKelas: "XII-D1",
      waliKelas: "Rizka Furqany, M.Pd",
      ketuaKelas: "",
    },
    {
      namaKelas: "XII-D2",
      waliKelas: "Dra. Rohani",
      ketuaKelas: "",
    },
    {
      namaKelas: "XII-D3",
      waliKelas: "Dra. Suleman Pasudi",
      ketuaKelas: "",
    },
  ]

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed pt-32 pb-20 px-6 relative w-full"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Judul */}
        <h1 className="text-5xl font-bold mb-10 text-white text-center">
          Daftar Kelas
        </h1>

        {/* Table Container */}
        <div className="overflow-x-auto">

          <table className="w-full bg-white/15 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/10">

            {/* Header */}
           <thead className="bg-blue-700/80 text-white">
  <tr>
    <th className="py-5 px-6 text-left text-xl">
      No
    </th>
    <th className="py-5 px-6 text-left text-xl">
      Nama Kelas
    </th>
    <th className="py-5 px-6 text-left text-xl">
      Wali Kelas
    </th>
    <th className="py-5 px-6 text-left text-xl">
      Ketua Kelas
    </th>
  </tr>
</thead>

            {/* Body */}
            <tbody>

  {kelas.map((item, index) => (
    <tr
      key={index}
      className="border-b border-white/10 hover:bg-white/10 transition duration-300"
    >

      {/* Nomor */}
      <td className="py-5 px-6 text-white font-bold">
        {index + 1}
      </td>

      {/* Nama Kelas */}
      <td className="py-5 px-6 text-white font-semibold">
        {item.namaKelas}
      </td>

      {/* Wali Kelas */}
      <td className="py-5 px-6 text-gray-200">
        {item.waliKelas}
      </td>

      {/* Ketua Kelas */}
      <td className="py-5 px-6 text-gray-200">
        {item.ketuaKelas}
      </td>

    </tr>
  ))}

</tbody>

          </table>

        </div>

      </div>
    </div>
  )
}