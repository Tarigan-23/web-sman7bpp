"use client"

export default function KelasPage() {

  const kelas = [
    {
      namaKelas: "X-A",
      waliKelas: "Budi Santoso, S.Kom",
      ketuaKelas: "Ahmad Rizky",
    },

    {
      namaKelas: "X-B",
      waliKelas: "Siti Rahmawati, S.Pd",
      ketuaKelas: "Dinda Ayu",
    },

    {
      namaKelas: "X-C",
      waliKelas: "Nur Aini, S.Pd",
      ketuaKelas: "Kevin Saputra",
    },

    {
      namaKelas: "X-D",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "X-E",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "X-F",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "X-G",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "X-H",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "X-I",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XI-A1",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XI-A2",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XI-B1",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XI-B2",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XI-C1",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XI-C2",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XI-D1",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XI-D2",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XI-D3",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XII-A1",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XII-A2",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XII-B1",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XII-B2",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XII-C1",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XII-C2",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XII-D1",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XII-D2",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XII-E1",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XII-E2",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
    },
    {
      namaKelas: "XII-E3",
      waliKelas: "Andi Wijaya, S.Pd",
      ketuaKelas: "Putri Maharani",
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