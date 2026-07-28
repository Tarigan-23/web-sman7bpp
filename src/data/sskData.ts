export interface SSKProgram {
  id: string
  judul: string
  kategori?: string
  tanggal: string
  narasiLengkap: string 
  tipeMedia: "foto" | "video"
  mediaUrls: string[]
  videoEmbedUrl?: string 
  tautanBerita?: string
  penanggungJawab?: string
}

export const DATA_PROGRAM_SSK: SSKProgram[] = [
  {
    id: "33",
    judul: "Senin, 27 Juli 2026, Tim Sekolah Siaga Kependudukan (SSK) SMAN 7 Balikpapan bergerak serentak memperkuat pemahaman kependudukan dengan merangkul seluruh ekstrakurikuler di sekolah! 🏫",
    tanggal: "27 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Sosialisasi berlangsung secara bergantian di berbagai ruang belajar dengan pendampingan langsung dari guru-guru hebat kita:

📖 Pukul 13.00 WITA (Perpustakaan Swarga Pustaka)

Ibu Sri Yunita, S.Pd. berbagi wawasan kependudukan bersama adik-adik dari ekskul Duta dan KIR (Karya Ilmiah Remaja).

💻 Pukul 14.00 WITA (Lab Komputer)

Ibu Hj. Murdiana, S.Pd. memberikan pemaparan interaktif kepada tim PMR, Green Generation (GG), dan OSIS.

🗣️ Pukul 15.00 WITA (Lab Bahasa)

Ibu Anisa Ulfa, S.Pd. mengobarkan semangat pemahaman kependudukan untuk ekskul Tanggap Bencana, Pramuka, dan MPK.

Sinergi antar ekskul inilah yang menjadi bahan bakar utama SMAN 7 Balikpapan dalam mewujudkan remaja yang kritis, peduli, dan siap menyongsong masa depan!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !
`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/sementara.png"],
    videoEmbedUrl: "embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "32",
    judul: "Mading SSK hadir sebagai jendela pengetahuan!✨",
    tanggal: "27 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Mari tingkatkan wawasan tentang kependudukan, kesehatan, dan masa depan yang lebih baik. Dengan informasi yang tepat, kita dapat menjadi generasi yang cerdas, peduli, dan bertanggung jawab. Yuk, baca dan temukan inspirasi di setiap sudut mading!`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/mading.png"],
    videoEmbedUrl: "https://www.instagram.com/p/DbS1mYuPnbV/embed",
    tautanBerita: "https://www.instagram.com/p/DbS1mYuPnbV/",
    penanggungJawab: ""
  },
  {
    id: "31",
    judul: "Sebagai Sekolah Siaga Kependudukan (SSK), kami membagikan kabar bahagia atas deretan piala yang berhasil diboyong pulang oleh murid-murid berbakat SMAN 7 Balikpapan 🏫.",
    tanggal: "27 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Senin, 27 Juli 2026, usai pelaksanaan upacara bendera, suasana sekolah terasa makin hangat dan meriah. Sebagai Sekolah Siaga Kependudukan (SSK), kami membagikan kabar bahagia atas deretan piala yang berhasil diboyong pulang oleh murid-murid berbakat SMAN 7 Balikpapan 🏫.

Apresiasi setinggi-tingginya untuk para pemenang:

👑 Ajang Grand Final Duta GenRe & GenRe Awards:

Trie Wahdana (XI-A1) – Juara Duta GenRe Persahabatan Puteri

Rasya Maulana Putra (XII-A1) – Juara GenRengers Terbaik

Kurnia Akifah Nailah, XII-A1) – Juara 2 Sosial Media Terbaik

🪙 Festival CBP Rupiah (Bank Indonesia):

Juara 2 yang diraih oleh tim hebat: Nazril Al Ihksan (XII-B2), Nadia Friska Pakpahan (XII-B1), Jezi Maiza (XII-B1), Keysa Fortuna Alfisari (XII-A2), dan Muhammad Rizki Apriliyanto (XII-B2).

🏸 O2SN Kategori Bulutangkis Putra:

Muhammad Rizki Amin – Juara 1

Terima kasih telah mengharumkan nama SMAN 7 Balikpapan! Teruslah menginspirasi dan jadilah pilar Generasi Berencana yang unggul serta berprestasi!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/pres/1.png","/ssk/pres/2.png","/ssk/pres/3.png","/ssk/pres/4.png","/ssk/pres/5.png","/ssk/pres/6.png"],
    videoEmbedUrl: "embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "30",
    judul: "Buletin Mingguan persembahan ekstrakurikuler PIK-R SMAN 7 Balikpapan resmi rilis! 🏫",
    tanggal: "27 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Sebagai Sekolah Siaga Kependudukan (SSK), teman-teman PIK-R akan rutin merangkum berbagai topik hangat seputar perencanaan masa depan remaja, kesehatan reproduksi, life skills, hingga edukasi kependudukan yang dikemas seru dan relevan dengan kehidupan kita sehari-hari 💡

Penasaran apa saja pembahasan menarik dan tips keren di edisi minggu ini? Yuk, baca buletin selengkapnya!

Jangan lupa like, save, dan share ke teman-temanmu agar makin banyak remaja yang teredukasi dan siap jadi Generasi Berencana!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/buletin27juli.png"],
    videoEmbedUrl: "embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "29",
    judul: "Siap menyambut semangat baru di SMAN 7 Balikpapan! ✨",
    tanggal: "6 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Langkah awal menuju perubahan positif! Senin (06/07) lalu, Bapak/Ibu Guru dan staf SMAN 7 Balikpapan mengikuti rapat koordinasi dan sosialisasi program Sekolah Siaga Kependudukan (SSK) 🌿

Ibu Kepala Sekolah mengajak seluruh pendidik dan tenaga kependidikan untuk bersiap mengawal program SSK ini agar dapat memberikan dampak nyata bagi siswa-siswi kita.

Satu komitmen, satu tujuan: mewujudkan Generasi Berencana yang sehat, cerdas, dan siap bersaing! Semangat mengabdi!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/rap6juli/1.png","/ssk/rap6juli/2.png","/ssk/rap6juli/3.png","/ssk/rap6juli/4.png"],
    videoEmbedUrl: "embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "28",
    judul: "Gagasan berani dan menginspirasi dari para orator muda SMAN 7 Balikpapan! 📣🔥",
    tanggal: "27 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Kembali memberikan apresiasi untuk talenta hebat sekolah kita! Senin (27/07) setelah upacara bendera, diumumkan para pemenang Lomba Orasi memperingati Hari Kependudukan Sedunia ✨.

Selamat atas prestasi membanggakan yang diraih oleh:

✨ Juara 1: Adinda Wahyu Nuraini (X-D)

✨ Juara 2: Wahidatuzzahra (X-K)

✨ Juara 3: Fathul Azkiya Mahani (X-B)

Keberanian kalian menyuarakan isu kependudukan adalah bukti nyata semangat remaja peduli masa depan. Congratulations, champions!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !
`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/jr1.png"],
    videoEmbedUrl: "https://www.instagram.com/p/DbST84Qvts2/embed",
    tautanBerita: "https://www.instagram.com/p/DbST84Qvts2/",
    penanggungJawab: ""
  },
  {
    id: "27",
    judul: "Gagasan berani dan menginspirasi dari para orator muda SMAN 7 Balikpapan! 📣🔥",
    tanggal: "27 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Kembali memberikan apresiasi untuk talenta hebat sekolah kita! Senin (27/07) setelah upacara bendera, diumumkan para pemenang Lomba Orasi memperingati Hari Kependudukan Sedunia ✨.

Selamat atas prestasi membanggakan yang diraih oleh:

✨ Juara 1: Adinda Wahyu Nuraini (X-D)

✨ Juara 2: Wahidatuzzahra (X-K)

✨ Juara 3: Fathul Azkiya Mahani (X-B)

Keberanian kalian menyuarakan isu kependudukan adalah bukti nyata semangat remaja peduli masa depan. Congratulations, champions!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !
`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/jr2.png"],
    videoEmbedUrl: "https://www.instagram.com/p/DbSTdg_P1cX/embed",
    tautanBerita: "https://www.instagram.com/p/DbSTdg_P1cX/",
    penanggungJawab: ""
  },
  {
    id: "26",
    judul: "Gagasan berani dan menginspirasi dari para orator muda SMAN 7 Balikpapan! 📣🔥",
    tanggal: "23 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Kembali memberikan apresiasi untuk talenta hebat sekolah kita! Senin (27/07) setelah upacara bendera, diumumkan para pemenang Lomba Orasi memperingati Hari Kependudukan Sedunia ✨.

Selamat atas prestasi membanggakan yang diraih oleh:

✨ Juara 1: Adinda Wahyu Nuraini (X-D)

✨ Juara 2: Wahidatuzzahra (X-K)

✨ Juara 3: Fathul Azkiya Mahani (X-B)

Keberanian kalian menyuarakan isu kependudukan adalah bukti nyata semangat remaja peduli masa depan. Congratulations, champions!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/jr3.png"],
    videoEmbedUrl: "https://www.instagram.com/p/DbSTF5TPg7x/embed",
    tautanBerita: "https://www.instagram.com/p/DbSTF5TPg7x/",
    penanggungJawab: ""
  },
  {
    id: "25",
    judul: "Suara lantang generasi muda untuk masa depan kependudukan yang lebih baik! ✨",
    tanggal: "27 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Senin, 27 Juli 2026, usai pelaksanaan upacara bendera, lapangan SMAN 7 Balikpapan kembali bergemuruh! Sebagai Sekolah Siaga Kependudukan (SSK), kami mengumumkan para orator terbaik dalam Lomba Orasi Hari Kependudukan Sedunia yang telah berlangsung pada 21–25 Juli 2026 lalu 🏫

Selamat dan apresiasi setinggi-tingginya kepada para pemenang yang telah menyuarakan gagasan kritis dan inspiratifnya:

🥇 Juara 1: Adinda Wahyu Nuraini (Kelas X-D)

🥈 Juara 2: Wahidatuzzahra (Kelas X-K)

🥉 Juara 3: Fathul Azkiya Mahani (Kelas X-B)

Terima kasih untuk seluruh peserta yang telah berani bersuara dan menyampaikan pesan-pesan kependudukan. Teruslah menginspirasi dan jadilah pilar Generasi Berencana bersama SSK SMAN 7 Balikpapan!

Video orasi pemenang akan kami tampilkan dipostingan berikutnya,, Stay Tune !!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !
`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/pres-ssk2/1.png","/ssk/pres-ssk2/2.png","/ssk/pres-ssk2/3.png","/ssk/pres-ssk2/4.png",],
    videoEmbedUrl: "embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "24",
    judul: "Satu langkah lebih dekat menuju pembelajaran berwawasan kependudukan! 💡",
    tanggal: "27 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Usai upacara bendera, Senin (27/07), Bapak/Ibu Guru dan staf SMAN 7 Balikpapan langsung bergerak cepat mengikuti Rapat Koordinasi & Sosialisasi Pembuatan Modul Ajar Terintegrasi SSK! ✨

Acara dibuka khidmat dengan doa oleh Pak Ayi Sholihin, M.Pd. dan arahan motivatif dari Ibu Kepsek, Ibu Puspani, M.Pd. Sesi sosialisasi penyusunan RPP/Modul Ajar SSK dibawakan oleh Bu Lulik Ariyani, M.Pd., dilanjutkan dengan update tindak lanjut program SSK oleh Ketua SSK, Bu Sri Yunita, S.Pd.

Komitmen penuh dari bapak dan ibu guru demi mencetak generasi muda yang cerdas, berencana, dan berkarakter. Semangat mengabdi!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/rapat-koor2/1.png","/ssk/rapat-koor2/2.png","/ssk/rapat-koor2/3.png","/ssk/rapat-koor2/4.png","/ssk/rapat-koor2/5.png","/ssk/rapat-koor2/6.png"],
    videoEmbedUrl: "embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "23",
    judul: "Kreativitas tanpa batas untuk menyuarakan kepedulian kependudukan! ✨",
    tanggal: "27 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Senin, 27 Juli 2026, suasana lapangan SMAN 7 Balikpapan terasa makin istimewa setelah pelaksanaan upacara bendera. Sebagai Sekolah Siaga Kependudukan (SSK), kami mengumumkan para pemenang Lomba Poster Digital Hari Kependudukan Sedunia yang telah berlangsung pada 21–25 Juli 2026 lalu!

Selamat kepada para pemenang yang telah menumpahkan ide kreatif dan pesan edukatif terbaiknya:

🥇 Juara 1: Adelia Andriani Manalu (Kelas X-A)

🥈 Juara 2: Fina Nailatul Izzah Ayusri (Kelas XI-B1)

🥉 Juara 3: Muhammad Gilang Pratama (Kelas XI-A1)

Terima kasih untuk seluruh siswa yang sudah berpartisipasi dan berkarya! Teruslah berkarya, menginspirasi, dan menjadi agen perubahan bersama SSK SMAN 7 Balikpapan!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/pres-ssk/5.png","/ssk/pres-ssk/1.png","/ssk/pres-ssk/2.png","/ssk/pres-ssk/3.png","/ssk/pres-ssk/4.png","/ssk/pres-ssk/6.png","/ssk/pres-ssk/7.png","/ssk/pres-ssk/8.png"],
    videoEmbedUrl: "embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "22",
    judul: "Sinergi sekolah dan orang tua untuk fondasi kuat murid kelas X! ✨",
    tanggal: "27 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Kebersamaan hangat terjalin pada Senin (27/07) saat SMAN 7 Balikpapan menggelar Sosialisasi Program Sekolah Siaga Kependudukan (SSK) bersama Orang Tua/Wali Murid Kelas X 🌿

Acara dibuka dengan penuh kehangatan oleh Ketua Komite Ibu Heni Yohana & Kepala Sekolah Ibu Puspani, M.Pd., lalu disambung pemaparan Kurikulum oleh Ibu Lulik Ariyani, M.Pd. serta program Kesiswaan oleh Bapak Sultan, S.Sos., Gr.

Tak kalah krusial, Ibu Liliyanda Megawati, S.Pd. turut memaparkan program SSK seputar pentingnya pengenalan identitas diri bagi para siswa baru ✨

Terima kasih atas kehadiran dan partisipasi aktif Bapak/Ibu wali murid. Mari bergandengan tangan mengawal tumbuh kembang dan masa depan putra-putri kita!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !
`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/rap-koor.png"],
    videoEmbedUrl: "https://www.instagram.com/p/DbSK6hjvOOc/embed",
    tautanBerita: "https://www.instagram.com/p/DbSK6hjvOOc/",
    penanggungJawab: ""
  },
  {
    id: "21",
    judul: "Menjaga ritme, menguatkan komitmen demi keberlanjutan program! ✨",
    tanggal: "24 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Jumat, 24 Juli 2026, tim kepanitiaan Sekolah Siaga Kependudukan (SSK) SMAN 7 Balikpapan kembali menggelar Rapat Koordinasi Lanjutan guna mengevaluasi agenda yang telah berjalan serta memantapkan rencana program di pekan mendatang 🏫

Rapat dipimpin langsung oleh Ketua Program SSK, Ibu Sri Yunita, S.Pd., yang memberikan arahan strategis terkait penajaman langkah dan efektivitas pelaksanaan program SSK ke depan.

Geser slide untuk melihat fokus dan keseriusan Bapak/Ibu guru panitia dalam merancang kegiatan yang bermanfaat bagi seluruh warga sekolah dan masyarakat sekitar.

Bersama SSK SMAN 7 Balikpapan, terus bergerak mewujudkan generasi muda yang terencana, berkualitas, dan berdampak!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/rapat-koor/1.png","/ssk/rapat-koor/2.png","/ssk/rapat-koor/3.png","/ssk/rapat-koor/4.png","/ssk/rapat-koor/5.png","/ssk/rapat-koor/6.png","/ssk/rapat-koor/7.png"],
    videoEmbedUrl: "embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "20",
    judul: "Lepas penat sejenak, kembali ceria lewat permainan tradisional! ✨",
    tanggal: "24 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Merayakan Hari Anak Nasional (24/07) lalu, keluarga besar SMAN 7 Balikpapan ciptakan momen penuh kenangan di luar kelas! Seluruh murid diajak nostalgia dan seru-seruan bareng lewat berbagai permainan tradisional khas Indonesia.

Di bawah bimbingan Pak Aji Utama, S.Pd., suasana sekolah makin hidup dengan keseruan balap bakiak, gobak sodor, egrang, lompat tali, hingga congklak bareng teman-teman 🤝. Semua sehat, heboh, dan bahagia!

Karena remaja Indonesia berhak atas masa muda yang sehat, ceria, dan penuh tawa. Selamat Hari Anak Nasional!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/mhan/5.png"],
    videoEmbedUrl: "https://www.instagram.com/p/DbQaOFZPo0Y/embed",
    tautanBerita: "https://www.instagram.com/p/DbQaOFZPo0Y/",
    penanggungJawab: ""
  },
  {
    id: "19",
    judul: "Tertawa bebas, melestarikan budaya, dan merayakan indahnya masa muda! ✨",
    tanggal: "24 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Jumat, 24 Juli 2026, suasana lapangan SMAN 7 Balikpapan berubah jadi penuh warna dan gelak tawa! Dalam rangka memperingati Hari Anak Nasional, sekolah kami mengajak seluruh murid istirahat sejenak dari rutinitas kelas untuk bermain bersama di luar ruangan ☀️

Diarahkan langsung oleh Bapak Aji Utama, S.Pd. (Guru PJOK SMAN 7 Balikpapan), para siswa asyik mencoba beragam permainan tradisional—mulai dari congklak, egrang, gobak sodor, balap bakiak, hingga lompat tali!

Sebagai Sekolah Siaga Kependudukan (SSK), kami percaya bahwa kebahagiaan dan kesehatan mental remaja adalah bagian penting dalam menyiapkan generasi masa depan yang unggul.

Swipe sampai akhir buat lihat keseruan dan senyum lepas warga SMAN 7 Balikpapan! Game tradisional mana nih yang paling kamu jagoin?

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !
`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/mhan/3.png","/ssk/mhan/1.png","/ssk/mhan/2.png","/ssk/mhan/4.png","/ssk/mhan/5.png","/ssk/mhan/6.png","/ssk/mhan/7.png","/ssk/mhan/8.png","/ssk/mhan/9.png"],
    videoEmbedUrl: "embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "18",
    judul: "Safari SSK SMAN 7 Balikpapan: 1 hari, 3 sekolah hebat! ✨",
    tanggal: "24 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Langkah nyata SMAN 7 Balikpapan sebagai Sekolah Siaga Kependudukan (SSK) terus berlanjut! Rabu (22/07) lalu, tim SSK bertandang ke MTs Al-Falah, SMPN 23, dan SMPN 28 Balikpapan untuk berbagi pemahaman kependudukan bersama teman-teman PMR dan PIK-R 🌿

Materi menarik dibawakan oleh Duta SSK kita, Trie Wahdana & Dzaki Dzulfikar, dengan pendampingan penuh dari Bapak Amirudin Siwasiwan, S.Pd., Bapak Arfah, S.Pd., Ibu Anisa Ulfa, S.Pd., serta Ibu Hj. Rita Ariyani, S.Pd. ✨

Terima kasih atas semangat dan keaktifan luar biasa dari adik-adik di ketiga sekolah! Sampai jumpa di kolaborasi seru berikutnya!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/ss-18.png"],
    videoEmbedUrl: "https://www.instagram.com/p/DbQUuh_P0Qm/embed",
    tautanBerita: "https://www.instagram.com/p/DbQUuh_P0Qm/",
    penanggungJawab: ""
  },
  {
    id: "17",
    judul: "Lindungi masa depan, wujudkan generasi bebas narkoba! 🛡️",
    tanggal: "24 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Jumat (24/07) lalu, ekstrakurikuler PIK-R SMAN 7 Balikpapan kedatangan tamu istimewa dari BNN Kota Balikpapan! 🌿

Lewat pemaparan edukatif dari Bapak Alfin Agung Nugroho, S.I.Kom, para siswa diajak memahami bahaya serta dampak nyata penyalahgunaan narkotika bagi generasi muda. Suasana diskusi menjadi semakin hangat dan interaktif berkat pendampingan dari Pembina PIK-R, Ibu Juni Alvionita Nainggolan, S.Psi.

Langkah nyata Sekolah Siaga Kependudukan (SSK) untuk melahirkan remaja yang berani menolak narkoba dan siap meraih cita-cita!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !
`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/bnn.jpg"],
    videoEmbedUrl: "https://www.instagram.com/p/DbQSk1Xvmzu/embed",
    tautanBerita: "https://www.instagram.com/p/DbQSk1Xvmzu/",
    penanggungJawab: ""
  },
  {
    id: "16",
    judul: "Maraton edukasi kependudukan di bumi Balikpapan! ✨",
    tanggal: "23 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Aksi nyata SMAN 7 Balikpapan sebagai Sekolah Siaga Kependudukan (SSK) terus melangkah! Kamis (23/07) lalu, tim SSK bertandang ke SMK Adzkiya, SMPN 19, dan SMPN 8 Balikpapan untuk berbagi wawasan kependudukan bersama anggota PMR dan PIK-R 🌿

Materi menarik disampaikan oleh Duta SSK kita, Trie Wahdana & Dzaki Dzulfikar, dengan arahan penuh dari Bapak Amirudin Siwasiwan, S.Pd., Ibu Sri Yunita, S.Pd., Ibu Anisa Ulfa, S.Pd., serta Ibu Hj. Murdiana, S.Pd. ✨

Mulai dari pagi hingga siang, energi dan keaktifan para siswa di tiga sekolah ini beneran bikin bangga! Terima kasih atas kehangatan seluruh tuan rumah, sampai jumpa di kolaborasi berikutnya!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/ss-vid.png"],
    videoEmbedUrl: "https://www.instagram.com/p/DbQQ2K7vcnV/embed",
    tautanBerita: "https://www.instagram.com/p/DbQQ2K7vcnV/",
    penanggungJawab: ""
  },
  {
    id: "15",
    judul: "Terima kasih atas kehangatan dan antusiasme luar biasa, SMPN 8 Balikpapan! ✨",
    tanggal: "23 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Aksi nyata SMAN 7 Balikpapan sebagai Sekolah Siaga Kependudukan (SSK) terus bergulir! Kamis (23/07) lalu, kami bertandang ke SMPN 8 Balikpapan untuk berbagi wawasan kependudukan bersama teman-teman PMR dan PIK-R 🌿

Materi disampaikan dengan apik oleh Duta SSK kita, Trie Wahdana & Dzaki Dzulfikar, dengan arahan dan pendampingan penuh dari Bapak Amirudin Siwasiwan, S.Pd., Ibu Sri Yunita, S.Pd., Ibu Anisa Ulfa, S.Pd., serta Ibu Hj. Murdiana, S.Pd. ✨

Mulai dari sambutan hangat para guru dan staf SMPN 8, hingga keaktifan adik-adiknya saat berdiskusi, semuanya bikin momen ini berkesan banget. Sampai jumpa di kolaborasi seru berikutnya!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/sosialisasi-smp8/1.png","/ssk/sosialisasi-smp8/2.png","/ssk/sosialisasi-smp8/3.png","/ssk/sosialisasi-smp8/4.png","/ssk/sosialisasi-smp8/5.png","/ssk/sosialisasi-smp8/6.png","/ssk/sosialisasi-smp8/7.png","/ssk/sosialisasi-smp8/8.png","/ssk/sosialisasi-smp8/9.png"],
    videoEmbedUrl: "/embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "14",
    judul: "Energi positif di SMPN 19 Balikpapan! ✨",
    tanggal: "23 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Aksi edukasi SMAN 7 Balikpapan sebagai Sekolah Siaga Kependudukan (SSK) terus bergulir! Kamis (23/07) lalu, kami berkesempatan berbagi pemahaman seputar kependudukan bersama anggota PMR dan PIK-R SMPN 19 Balikpapan 🌿

Materi menarik disampaikan oleh Duta SSK kita, Trie Wahdana & Dzaki Dzulfikar, dengan arahan dan pendampingan penuh dari Bapak Amirudin Siwasiwan, S.Pd., Ibu Sri Yunita, S.Pd., Ibu Anisa Ulfa, S.Pd., serta Ibu Hj. Murdiana, S.Pd. ✨

Adik-adik di SMPN 19 Balikpapan tampil sangat aktif dan antusias di setiap sesi tanya jawab! Terima kasih atas sambutan yang begitu hangat, sampai jumpa di kolaborasi seru berikutnya!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/sosialisasi-smp19/1.png","/ssk/sosialisasi-smp19/2.png","/ssk/sosialisasi-smp19/3.png","/ssk/sosialisasi-smp19/4.png","/ssk/sosialisasi-smp19/5.png","/ssk/sosialisasi-smp19/6.png"],
    videoEmbedUrl: "/embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "13",
    judul: "Sebar virus positif sadar kependudukan di SMK Adzkiya Balikpapan! ✨",
    tanggal: "23 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Aksi edukasi SMAN 7 Balikpapan sebagai Sekolah Siaga Kependudukan (SSK) terus bergulir! Kamis (23/07) lalu, kami berkesempatan bertandang dan berbagi wawasan bersama anggota PMR dan PIK-R SMK Adzkiya 🌿

Materi menarik disampaikan oleh Duta SSK kita, Trie Wahdana & Dzaki Dzulfikar, dengan arahan dan pendampingan penuh dari Bapak Amirudin Siwasiwan, S.Pd., Ibu Sri Yunita, S.Pd., Ibu Anisa Ulfa, S.Pd., serta Ibu Hj. Murdiana, S.Pd✨

Teman-teman di SMK Adzkiya super antusias dan aktif banget dalam menyimak setiap pembahasan. Terima kasih atas sambutan yang begitu hangat, sampai jumpa di kolaborasi positif berikutnya!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !
`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/sosialisasi-smpadzkiya/1.png","/ssk/sosialisasi-smpadzkiya/2.png","/ssk/sosialisasi-smpadzkiya/3.png","/ssk/sosialisasi-smpadzkiya/4.png","/ssk/sosialisasi-smpadzkiya/5.png"],
    videoEmbedUrl: "/embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "12",
    judul: "Belajar nilai kehidupan lewat layar dan cerita! 🎬",
    tanggal: "23 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Kamis, 23 Juli 2026, suasana area Ruang Literasi Terbuka SMAN 7 Balikpapan terasa begitu hangat dan interaktif. Sebagai Sekolah Siaga Kependudukan (SSK), kami menggelar kegiatan Bedah Film & Diskusi Edukatif berkolaborasi dengan Duta Baca / Duta Literasi SMAN 7 Balikpapan.

Di bawah arahan Ibu Dellis Miftahul Janah, S.Pd. dan Ibu Nova Agustina, S.Pd., para murid menyaksikan film berjudul “Suara Kirana” sebuah kisah menyentuh tentang realitas pernikahan dini dan dampaknya bagi masa depan remaja.

Didampingi teman-teman PIK-R, kegiatan dilanjutkan dengan sesi bedah film, pemaparan pentingnya menghindari Triad KRR, isu bonus demografi, hingga refleksi diri. Masing-masing siswa menuangkan pesan moral yang dipetik ke dalam sticky notes lalu menempelkannya di pojok mading.

Semoga lewat ruang literasi dan diskusi bijak ini, siswa-siswi SMAN 7 Balikpapan makin mantap menjaga masa depan dan merencanakan cita-cita!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !
`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/IMG20260723133101.jpg"],
    videoEmbedUrl: "https://www.instagram.com/p/DbQAX1sPi9V/embed",
    tautanBerita: "https://www.instagram.com/p/DbQAX1sPi9V/",
    penanggungJawab: ""
  },
  {
    id: "11",
    judul: "Semangat siang tak menyurutkan energi untuk belajar bersama! ✨",
    tanggal: "21 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Rabu, 22 Juli 2026, SMAN 7 Balikpapan sebagai Sekolah Siaga Kependudukan (SSK) melanjutkan rangkaian kunjungan sosialisasi ke SMPN 28 Balikpapan! 🏫

Kunjungan ini diisi dengan edukasi kependudukan bersama adik-adik dari ekstrakurikuler PMR dan PIK-R SMPN 28 Balikpapan. Materi dibawakan secara seru oleh Duta SSK SMAN 7 Balikpapan, Trie Wahdana dan Dzaki Dzulfikar 💡

Acara ini juga didampingi langsung oleh tim guru SMAN 7 Balikpapan Bapak Amirudin Siwasiwan, S.Pd., Bapak Arfah, S.Pd., Ibu Anisa Ulfa, S.Pd., dan Ibu Hj. Rita Ariyani, S.Pd. yang memberikan arahan dan motivasi hangat sepanjang sesi.

Meskipun kegiatan berlangsung di siang hari, semangat dan antusiasme adik-adik SMPN 28 Balikpapan benar-benar luar biasa! Terima kasih atas sambutan hangatnya, semoga ilmu yang dibagikan bermanfaat untuk mewujudkan Generasi Berencana yang makin hebat!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/sosialisasi-smp28/1.png","/ssk/sosialisasi-smp28/2.png","/ssk/sosialisasi-smp28/3.png","/ssk/sosialisasi-smp28/4.png"],
    videoEmbedUrl: "/embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "10",
    judul: "Sebar semangat sadar kependudukan ke SMPN 23 Balikpapan! ✨",
    tanggal: "21 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Aksi nyata SMAN 7 Balikpapan sebagai Sekolah Siaga Kependudukan (SSK) terus berlanjut! Rabu (22/07) lalu, kami bertandang ke SMPN 23 Balikpapan untuk berbagi pengetahuan seputar kependudukan bersama teman-teman PMR dan PIK-R 🌿

Materi menarik disampaikan oleh Duta SSK kita, Trie Wahdana & Dzaki Dzulfikar, dengan arahan dan pendampingan penuh dari Bapak Amirudin Siwasiwan, S.Pd., Bapak Arfah, S.Pd., Ibu Anisa Ulfa, S.Pd., serta Ibu Hj. Rita Ariyani, S.Pd. ✨

Adik-adik SMPN 23 Balikpapan super antusias dan aktif banget menyimak penjelasan pemateri. Terima kasih atas sambutan hangatnya, sampai jumpa di kolaborasi seru berikutnya!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !
`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/sosialisasi-smp23/1.png","/ssk/sosialisasi-smp23/3.png","/ssk/sosialisasi-smp23/2.png","/ssk/sosialisasi-smp23/4.png","/ssk/sosialisasi-smp23/5.png","/ssk/sosialisasi-smp23/6.png","/ssk/sosialisasi-smp23/7.png","/ssk/sosialisasi-smp23/8.png","/ssk/sosialisasi-smp23/9.png"],
    videoEmbedUrl: "/embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "9",
    judul: "Berbagi ilmu, menebar manfaat bersama generasi muda! ✨",
    tanggal: "11 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Rabu, 22 Juli 2026, SMAN 7 Balikpapan sebagai Sekolah Siaga Kependudukan (SSK) berkesempatan melakukan kunjungan sosialisasi ke MTs Al-Falah! 🏫

Kegiatan ini berfokus pada penguatan pemahaman kependudukan yang ditujukan khusus bagi adik-adik ekstrakurikuler PMR dan PIK-R MTs Al-Falah. Materi dibawakan secara seru dan interaktif oleh Duta SSK SMAN 7 Balikpapan, Trie Wahdana dan Dzaki Dzulfikar 💡

Kunjungan ini juga didampingi langsung oleh tim guru SMAN 7 Balikpapan—Bapak Amirudin Siwasiwan, S.Pd., Bapak Arfah, S.Pd., Ibu Anisa Ulfa, S.Pd., dan Ibu Hj. Rita Ariyani, S.Pd.—yang turut memberikan arahan dan motivasi hangat bagi para peserta.

Senang dan bangga sekali melihat antusiasme adik-adik MTs Al-Falah yang begitu luar biasa sepanjang acara! Semoga edukasi ini menjadi langkah awal lahirnya Generasi Berencana yang makin hebat!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/sosialisasi-mts/1.png","/ssk/sosialisasi-mts/6.png","/ssk/sosialisasi-mts/2.png","/ssk/sosialisasi-mts/3.png","/ssk/sosialisasi-mts/4.png","/ssk/sosialisasi-mts/5.png","/ssk/sosialisasi-mts/7.png","/ssk/sosialisasi-mts/8.png"],
    videoEmbedUrl: "/embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "8",
    judul: "Sinergi sekolah dan orang tua demi masa depan lulusan yang gemilang! ✨",
    tanggal: "22 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Kebersamaan hangat terjalin pada Rabu (22/07) lalu saat SMAN 7 Balikpapan mengundang Orang Tua/Wali Murid Kelas XII dalam rangka sosialisasi program Sekolah Siaga Kependudukan (SSK) dan arah pendidikan siswa tingkat akhir.

Ajang diskusi ini dibuka oleh Ketua Komite Ibu Heny Yohana & Kepala Sekolah Ibu Puspani, M.Pd., lalu disambung pemaparan Kurikulum oleh Ibu Lulik Ariyani, M.Pd.

Sebagai bagian dari program SSK, Bapak Sultan, S.Sos., Gr. menyampaikan pemaparan penting seputar pencegahan stunting. Suasana makin antusias saat Ibu Heni Fatmawati, S.Pd. membagikan informasi krusial mengenai beasiswa dan strategi tembus PTN jalur prestasi!

Terima kasih atas kehadiran Bapak/Ibu wali murid. Mari kawal langkah putra-putri kita sampai ke gerbang cita-citanya!

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !
`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/1784765441772.jpg"],
    videoEmbedUrl: "https://www.instagram.com/p/DbP3s3RP9NY/embed",
    tautanBerita: "https://www.instagram.com/p/DbP3s3RP9NY/",
    penanggungJawab: ""
  },
  {
    id: "7",
    judul: "Menyambung sinergi, menguatkan kolaborasi! ✨",
    tanggal: "21 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Selasa (21/07) lalu, kebersamaan hangat terjalin antara SMAN 7 Balikpapan dan Orang Tua/Wali Murid Kelas X melalui agenda Sosialisasi Program Sekolah Siaga Kependudukan (SSK).

Ajang penyatuan visi-misi ini dibuka oleh arahan dari Komite bagian Humas Bapak Bambang, Ibu Kepala Sekolah Puspani, M.Pd., serta pemaparan program Kurikulum (Ibu Lulik Ariyani, M.Pd ) dan Kesiswaan (Bapak Sultan, S.Sos., Gr.) 💡.

Tak ketinggalan, Ibu Hj. Murdiana, S.Pd. menyampaikan tujuan penting dari program SSK dalam membentuk karakter siswa yang paham kependudukan dan berencana 🌿

Pendidikan terbaik lahir dari kerja sama yang kuat antara rumah dan sekolah!

SMANJU : Religius, Cerdas Berprestasi!
SMANJU : Semakin Maju!
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah!
`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/msmk.jpg"],
    videoEmbedUrl: "https://www.instagram.com/p/DbP0chRPBsG/embed",
    tautanBerita: "https://www.instagram.com/p/DbP0chRPBsG/",
    penanggungJawab: ""
  },
  {
    id: "6",
    judul: "Satu Langkah Lebih Dekat Menuju SSK 2026!",
    tanggal: "20 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Senin, 20 Juli 2026, telah dilaksanakan Rapat Koordinasi Panitia Sekolah Sadar Kependudukan (SSK) SMAN 7 Balikpapan yang dipimpin langsung oleh Ibu Sri Yunita, S.Pd., Gr.

Dalam arahannya, beliau menegaskan kembali tugas masing-masing komponen sekaligus membakar semangat tim.

Didukung penuh oleh rekan-rekan OSIS, PMR, dan PIK-R, kami siap bergerak bersama. Mohon doa dan dukungannya agar SMAN 7 Balikpapan sukses meraih gelar Sekolah Sadar Kependudukan tahun ini!

Jangan lupa follow IG Official SSK 2026 kami : @ssk.smavenofficial

SMANJU : Religius, Cerdas, Berprestasi !
SMANJU : Semakin Maju !
SSK SMANJU : Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/rapat-koordinasi/1.png","/ssk/rapat-koordinasi/2.png","/ssk/rapat-koordinasi/3.png","/ssk/rapat-koordinasi/4.png"],
    videoEmbedUrl: "/embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "5",
    judul: "Menyambung sinergi, menguatkan kolaborasi! ✨",
    tanggal: "20 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Senin (20/07) lalu, keluarga besar SMAN 7 Balikpapan menyambut hangat kehadiran Orang Tua/Wali Murid Kelas X dalam agenda Sosialisasi Program Sekolah Siaga Kependudukan (SSK).

Ajang diskusi dan penyatuan visi misi ini dibuka dengan arahan dari Ketua Komite Ibu Heni Yohana, Ibu Kepala Sekolah Puspani, M.Pd., dilanjutkan pemaparan Kurikulum (Ibu Lulik Ariyani, M.Pd) dan Kesiswaan (Bapak Sultan, S.Sos., Gr.) 💡.

Mengenal lebih dekat program unggulan sekolah, Ibu Sri Yunita, S.Pd. (Ketua SSK) bersama Duta SSK kita, Trie Wahdana & Kurnia Akifah, turut memaparkan pentingnya peran SSK dalam mencetak generasi masa depan yang berkualitas.

Karena pendidikan terbaik lahir dari kerja sama yang kuat antara sekolah dan rumah!`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/IMG20260720095543.jpg"],
    videoEmbedUrl: "https://www.instagram.com/p/DbPxh_Nv47B/embed",
    tautanBerita: "https://www.instagram.com/p/DbPxh_Nv47B/",
    penanggungJawab: ""
  },
  {
    id: "4",
    judul: "Makan sehat, kumpul hangat! ✨",
    tanggal: "11 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Masih dalam rangkaian peringatan Hari Kependudukan Sedunia, SMAN 7 Balikpapan sebagai Sekolah Siaga Kependudukan (SSK) kembali menggelar aksi nyata. Pada Sabtu (11/07) lalu, lapangan sekolah kami berubah jadi momen piknik sehat bersama!

Semua kompak menikmati susu dan telur bergizi mulai dari murid-murid hingga Bapak/Ibu Guru 💙

Acara keren ini merupakan kolaborasi manis dari PMR & PIK-R SMAN 7 Balikpapan, lengkap dengan sesi edukasi Gerakan Aksi Makan Bergizi yang dibawakan seru oleh Kak Rasya dan Kak Raby dari PMR 💡.

Swipe slide foto sampai akhir buat lihat keseruan dan senyum manis warga SMAN 7 Balikpapan, ya! Foto slide berapa nih yang paling bikin kangen suasana Sabtu kemarin?`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/aksimakan/1.png","/ssk/aksimakan/2.png","/ssk/aksimakan/3.png","/ssk/aksimakan/4.png","/ssk/aksimakan/5.png","/ssk/aksimakan/6.png","/ssk/aksimakan/7.png",],
    videoEmbedUrl: "/embed",
    tautanBerita: "",
    penanggungJawab: ""
  },
  {
    id: "3",
    judul: "Susu, telur, dan sejuta tawa di lapangan SMAN 7 Balikpapan! ✨",
    tanggal: "11 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Melanjutkan semarak Hari Kependudukan Sedunia, SMAN 7 Balikpapan sebagai Sekolah Siaga Kependudukan (SSK) menggelar Aksi Makan Makanan Bergizi Bersama pada Sabtu, 11 Juli 2026!

Seluruh murid dan Bapak/Ibu Guru kumpul bareng di lapangan untuk menikmati nutrisi dari susu dan telur segar. Acara keren ini merupakan buah kolaborasi hangat antara PMR dan PIK-R SMAN 7 Balikpapan, dilengkapi dengan sesi edukasi materi Gerakan Aksi Makan Bergizi dari Kak Rasya dan Kak Rabi (PMR).

Generasi hebat dimulai dari gizi yang kuat. Yuk, biasakan makan sehat dari sekarang!`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/aksimakan/2.png"],
    videoEmbedUrl:"https://www.instagram.com/p/DbPrAhQP7UT/embed",
    tautanBerita: "https://www.instagram.com/p/DbPrAhQP7UT/",
    penanggungJawab: "ssk.smavenofficial"
  },
   {
    id: "2",
    judul: "Sehat badannya, paham kependudukannya! 💙✨",
    tanggal: "11 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `ntip keseruan keluarga besar SMAN 7 Balikpapan saat merayakan Hari Kependudukan Sedunia pada Sabtu (11/07) lalu di lapangan sekolah .

Dimulai dengan keringat sehat lewat Senam Anak Indonesia Sehat, lalu dilanjutkan dengan wawasan baru seputar Sekolah Siaga Kependudukan (SSK) bersama Ibu Sri Yunita, S.Pd & Bapak Arfah, S.Pd.

Swipe sampai akhir buat lihat senyum kebersamaan kita, ya! Kira-kira momen mana nih yang paling favorit?`,
    tipeMedia: "foto",
    mediaUrls: ["/ssk/11juli/1.png","/ssk/11juli/2.png","/ssk/11juli/3.png","/ssk/11juli/4.png","/ssk/11juli/5.png","/ssk/11juli/6.png","/ssk/11juli/7.png","/ssk/11juli/8.png","/ssk/11juli/9.png","/ssk/11juli/10.png","/ssk/11juli/11.png","/ssk/11juli/12.png",],
    videoEmbedUrl: "/embed",
    tautanBerita: "",
    penanggungJawab: "ssk.smavenofficial"
  },
  {
    id: "1",
    judul: "Muda, Sehat, dan Berencana! 💙✨",
    tanggal: "11 JULI 2026",
    kategori: "Edukasi",
    narasiLengkap: `Sabtu, 11 Juli 2026 lalu, lapangan SMAN 7 Balikpapan dipenuhi semangat kebersamaan dalam kegiatan Jalan Santai & Pengenalan Lingkungan Sekolah.

Sebagai Sekolah Siaga Kependudukan (SSK) berkolaborasi dengan Ekskul PIK-R, Duta Genre dan Duta SSK SMAN 7 Balikpapan.

Momen dilanjutkan dengan sosialisasi edukatif seputar SSK bersama Ibu Sri Yunita, S.Pd & Bapak Arfah, S.Pd.

Langkah kecil hari ini, untuk masa depan kependudukan Indonesia yang lebih baik!

SSK SMANJU !!
Remaja Sehat, Remaja Berkualitas, Masa Depan Terarah !!`,
    tipeMedia: "video",
    mediaUrls: ["/ssk/11juli/7.png"],
    videoEmbedUrl: "https://www.instagram.com/p/DbPku2QvKzz/embed",
    tautanBerita: "https://www.instagram.com/p/DbPku2QvKzz/",
    penanggungJawab: "PIK-R & Duta SSK SMANJU"
  }
]