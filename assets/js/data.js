/* =========================================================
   UPQ — data.js
   Dummy dataset purwarupa (contoh data) + helper render tabel/filter.
   Semua data di file ini statis (front-end only) untuk kebutuhan demo UI/UX.
   ========================================================= */

/* ---------- 1. Pemesanan Raw Material & Sparepart ---------- */
const DATA_PEMESANAN = [
  { id: "PO-2026-0091", jenis: "Raw Material", item: "Kertas HVS 60gr (Al-Qur'an Papers)", qty: "12.000 rim", pemasok: "PT Kertas Nusantara Sejahtera", tgl: "28 Agu 2026", eta: "05 Sep 2026", status: "Diproses" },
  { id: "PO-2026-0090", jenis: "Raw Material", item: "Tinta Offset Hitam Food-Grade", qty: "480 kg", pemasok: "CV Tinta Warna Abadi", tgl: "26 Agu 2026", eta: "02 Sep 2026", status: "Dikirim Pemasok" },
  { id: "PO-2026-0089", jenis: "Sparepart", item: "Blanket Mesin Cetak Offset Heidelberg", qty: "8 unit", pemasok: "PT Mesin Grafika Utama", tgl: "24 Agu 2026", eta: "31 Agu 2026", status: "Diterima" },
  { id: "PO-2026-0088", jenis: "Raw Material", item: "Benang Jahit Jilid (Binding Thread)", qty: "600 gulung", pemasok: "UD Jilid Sentosa", tgl: "22 Agu 2026", eta: "29 Agu 2026", status: "Diterima" },
  { id: "PO-2026-0087", jenis: "Sparepart", item: "Pisau Potong Mesin Cutting (Polar)", qty: "20 pcs", pemasok: "PT Mesin Grafika Utama", tgl: "20 Agu 2026", eta: "27 Agu 2026", status: "Diterima" },
  { id: "PO-2026-0086", jenis: "Raw Material", item: "Karton Cover Hardcover 350gr", qty: "9.500 lembar", pemasok: "PT Kertas Nusantara Sejahtera", tgl: "18 Agu 2026", eta: "25 Agu 2026", status: "Diterima" },
  { id: "PO-2026-0085", jenis: "Raw Material", item: "Lem Panas (Hot Melt Glue) Binding", qty: "1.2 ton", pemasok: "CV Rekat Perkasa", tgl: "15 Agu 2026", eta: "22 Agu 2026", status: "Dibatalkan" },
];

/* ---------- 2. Penggunaan Material untuk Produksi ---------- */
const DATA_PENGGUNAAN = [
  { id: "WO-3301", batch: "Batch Cetak Mushaf Standar Kemenag #114", item: "Kertas HVS 60gr", qtyPakai: "3.200 rim", sisaStok: "8.800 rim", tglPakai: "01 Sep 2026", petugas: "Slamet Riyadi", status: "Selesai Dipakai" },
  { id: "WO-3302", batch: "Batch Cetak Mushaf Standar Kemenag #114", item: "Tinta Offset Hitam", qtyPakai: "96 kg", sisaStok: "384 kg", tglPakai: "01 Sep 2026", petugas: "Slamet Riyadi", status: "Selesai Dipakai" },
  { id: "WO-3303", batch: "Batch Cetak Mushaf Cover Hard #57", item: "Karton Cover Hardcover 350gr", qtyPakai: "2.000 lembar", sisaStok: "7.500 lembar", tglPakai: "31 Agu 2026", petugas: "Dede Kurniawan", status: "Selesai Dipakai" },
  { id: "WO-3304", batch: "Batch Jilid Mushaf #212", item: "Benang Jahit Jilid", qtyPakai: "80 gulung", sisaStok: "520 gulung", tglPakai: "30 Agu 2026", petugas: "Rina Marlina", status: "Selesai Dipakai" },
  { id: "WO-3305", batch: "Batch Cetak Mushaf Standar Kemenag #115", item: "Kertas HVS 60gr", qtyPakai: "3.400 rim", sisaStok: "5.400 rim", tglPakai: "02 Sep 2026", petugas: "Slamet Riyadi", status: "Proses" },
];

/* ---------- 3. Maintenance Alat ---------- */
const DATA_MAINTENANCE = [
  { id: "MT-0142", alat: "Mesin Cetak Offset Heidelberg SM-102", jenis: "Preventive", tgl: "03 Sep 2026", teknisi: "Bagus Wicaksono", durasi: "4 jam", status: "Terjadwal" },
  { id: "MT-0141", alat: "Mesin Jilid Perfect Binding Muller Martini", jenis: "Preventive", tgl: "30 Agu 2026", teknisi: "Andi Saputra", durasi: "3 jam", status: "Selesai" },
  { id: "MT-0140", alat: "Mesin Potong Kertas Polar 115", jenis: "Corrective", tgl: "27 Agu 2026", teknisi: "Bagus Wicaksono", durasi: "6 jam", status: "Selesai" },
  { id: "MT-0139", alat: "Mesin Cetak Digital Konica Minolta AccurioPress", jenis: "Preventive", tgl: "20 Agu 2026", teknisi: "Andi Saputra", durasi: "2 jam", status: "Selesai" },
  { id: "MT-0138", alat: "Mesin Laminating Cover", jenis: "Corrective", tgl: "05 Sep 2026", teknisi: "Belum Ditugaskan", durasi: "-", status: "Menunggu Suku Cadang" },
];

/* ---------- 4. WIP Produksi (Work in Progress) ---------- */
const DATA_WIP = [
  { id: "WIP-2214", produk: "Mushaf Al-Qur'an Standar Kemenag (A5)", tahap: "Percetakan Isi", target: "15.000 eks", capaian: "9.800 eks", progress: 65, pic: "Divisi Cetak", eta: "06 Sep 2026" },
  { id: "WIP-2213", produk: "Mushaf Al-Qur'an Cover Hardcover (A5)", tahap: "Penjilidan", target: "6.000 eks", capaian: "4.500 eks", progress: 75, pic: "Divisi Jilid", eta: "04 Sep 2026" },
  { id: "WIP-2212", produk: "Mushaf Al-Qur'an Terjemahan (A4)", tahap: "Quality Control", target: "3.000 eks", capaian: "2.850 eks", progress: 95, pic: "Divisi QC", eta: "03 Sep 2026" },
  { id: "WIP-2211", produk: "Juz 'Amma Braille", tahap: "Finishing & Packing", target: "1.200 eks", capaian: "1.150 eks", progress: 96, pic: "Divisi Finishing", eta: "03 Sep 2026" },
  { id: "WIP-2210", produk: "Mushaf Al-Qur'an Saku (A6)", tahap: "Persiapan Plat Cetak", target: "8.000 eks", capaian: "1.200 eks", progress: 15, pic: "Divisi Pra-Cetak", eta: "12 Sep 2026" },
];

/* ---------- 5. Finish Good / Gudang Barang Jadi ---------- */
const DATA_FINISHGOOD = [
  { id: "FG-5510", produk: "Mushaf Al-Qur'an Standar Kemenag (A5)", stokMasuk: "9.800 eks", stokKeluar: "4.200 eks", stokAkhir: "5.600 eks", gudang: "Gudang A - Rak 03", tglUpdate: "02 Sep 2026", status: "Tersedia" },
  { id: "FG-5509", produk: "Mushaf Al-Qur'an Cover Hardcover (A5)", stokMasuk: "4.500 eks", stokKeluar: "3.000 eks", stokAkhir: "1.500 eks", gudang: "Gudang A - Rak 05", tglUpdate: "01 Sep 2026", status: "Stok Menipis" },
  { id: "FG-5508", produk: "Mushaf Al-Qur'an Terjemahan (A4)", stokMasuk: "2.850 eks", stokKeluar: "2.850 eks", stokAkhir: "0 eks", gudang: "Gudang B - Rak 01", tglUpdate: "31 Agu 2026", status: "Habis" },
  { id: "FG-5507", produk: "Juz 'Amma Braille", stokMasuk: "1.150 eks", stokKeluar: "600 eks", stokAkhir: "550 eks", gudang: "Gudang B - Rak 02", tglUpdate: "31 Agu 2026", status: "Tersedia" },
  { id: "FG-5506", produk: "Mushaf Al-Qur'an Saku (A6)", stokMasuk: "7.600 eks", stokKeluar: "6.900 eks", stokAkhir: "700 eks", gudang: "Gudang A - Rak 08", tglUpdate: "29 Agu 2026", status: "Stok Menipis" },
];

/* ---------- 6. Tracking Pengiriman Mushaf ---------- */
const DATA_SHIPMENTS = [
  {
    id: "SPK-88231", produk: "Mushaf Al-Qur'an Standar Kemenag (A5)", qty: "2.000 eks",
    tujuan: "Kanwil Kemenag Provinsi Jawa Barat", penerima: "H. Dedi Supriadi, S.Ag.",
    tglKirim: "29 Agu 2026", estimasi: "02 Sep 2026", ekspedisi: "Armada UPQ + Ekspedisi Mitra",
    status: "Diterima", verifikasi: "Sesuai", qtyDiterima: "2.000 eks",
    timeline: [
      { label: "Pesanan Diterima UPQ", tgl: "24 Agu 2026, 09.10", done: true },
      { label: "Diproduksi (Finish Good)", tgl: "27 Agu 2026, 14.30", done: true },
      { label: "Dikemas & Siap Kirim", tgl: "28 Agu 2026, 10.00", done: true },
      { label: "Dalam Pengiriman", tgl: "29 Agu 2026, 08.00", done: true },
      { label: "Diterima Penerima", tgl: "02 Sep 2026, 13.42", done: true },
      { label: "Verifikasi Kesesuaian Penerima", tgl: "02 Sep 2026, 15.05", done: true, current: true },
    ],
    catatan: "Jumlah & kondisi fisik sesuai surat jalan. Diterima langsung oleh PIC Kanwil.",
  },
  {
    id: "SPK-88230", produk: "Mushaf Al-Qur'an Cover Hardcover (A5)", qty: "1.500 eks",
    tujuan: "Kanwil Kemenag Provinsi Jawa Tengah", penerima: "Hj. Siti Aminah, M.Pd.",
    tglKirim: "30 Agu 2026", estimasi: "03 Sep 2026", ekspedisi: "Ekspedisi Mitra (JNE Logistics)",
    status: "Dalam Pengiriman", verifikasi: "Belum Diverifikasi", qtyDiterima: "-",
    timeline: [
      { label: "Pesanan Diterima UPQ", tgl: "25 Agu 2026, 10.00", done: true },
      { label: "Diproduksi (Finish Good)", tgl: "28 Agu 2026, 16.10", done: true },
      { label: "Dikemas & Siap Kirim", tgl: "29 Agu 2026, 11.20", done: true },
      { label: "Dalam Pengiriman", tgl: "30 Agu 2026, 09.00", done: true, current: true },
      { label: "Diterima Penerima", tgl: "Estimasi 03 Sep 2026", done: false },
      { label: "Verifikasi Kesesuaian Penerima", tgl: "-", done: false },
    ],
    catatan: "",
  },
  {
    id: "SPK-88229", produk: "Juz 'Amma Braille", qty: "300 eks",
    tujuan: "Yayasan Pendidikan Tunanetra Wyata Guna", penerima: "Bapak Yusuf Ridwan",
    tglKirim: "27 Agu 2026", estimasi: "29 Agu 2026", ekspedisi: "Armada UPQ",
    status: "Bermasalah", verifikasi: "Tidak Sesuai", qtyDiterima: "280 eks",
    timeline: [
      { label: "Pesanan Diterima UPQ", tgl: "22 Agu 2026, 09.00", done: true },
      { label: "Diproduksi (Finish Good)", tgl: "25 Agu 2026, 13.00", done: true },
      { label: "Dikemas & Siap Kirim", tgl: "26 Agu 2026, 10.30", done: true },
      { label: "Dalam Pengiriman", tgl: "27 Agu 2026, 08.30", done: true },
      { label: "Diterima Penerima", tgl: "29 Agu 2026, 14.00", done: true },
      { label: "Verifikasi Kesesuaian Penerima", tgl: "29 Agu 2026, 14.30", done: true, current: true, problem: true },
    ],
    catatan: "Jumlah diterima 280 dari 300 eks (kurang 20 eks) — 2 dus rusak terkena air saat pengiriman. Menunggu retur/pengiriman susulan.",
  },
  {
    id: "SPK-88228", produk: "Mushaf Al-Qur'an Terjemahan (A4)", qty: "800 eks",
    tujuan: "Kanwil Kemenag Provinsi DI Yogyakarta", penerima: "H. Bambang Purnomo",
    tglKirim: "-", estimasi: "07 Sep 2026", ekspedisi: "Belum Ditentukan",
    status: "Diproses", verifikasi: "Belum Diverifikasi", qtyDiterima: "-",
    timeline: [
      { label: "Pesanan Diterima UPQ", tgl: "31 Agu 2026, 15.20", done: true, current: true },
      { label: "Diproduksi (Finish Good)", tgl: "Estimasi 05 Sep 2026", done: false },
      { label: "Dikemas & Siap Kirim", tgl: "-", done: false },
      { label: "Dalam Pengiriman", tgl: "-", done: false },
      { label: "Diterima Penerima", tgl: "-", done: false },
      { label: "Verifikasi Kesesuaian Penerima", tgl: "-", done: false },
    ],
    catatan: "",
  },
];

/* ---------- 7. PNBP — Layanan Cetak Pihak Ketiga ---------- */
const DATA_PNBP = [
  { id: "PNBP-1156", pemohon: "PT Sinergi Cetak Mandiri", layanan: "Jasa Cetak Mushaf Custom (Cover Custom)", volume: "5.000 eks", tarif: "Rp 28.500 / eks", total: "Rp 142.500.000", billing: "8202601123456781", tgl: "01 Sep 2026", status: "Menunggu Pembayaran" },
  { id: "PNBP-1155", pemohon: "Yayasan Wakaf Qur'an Nusantara", layanan: "Jasa Cetak Mushaf Wakaf", volume: "10.000 eks", tarif: "Rp 26.000 / eks", total: "Rp 260.000.000", billing: "8202601123456712", tgl: "29 Agu 2026", status: "Lunas" },
  { id: "PNBP-1154", pemohon: "CV Percetakan Ilmu Barokah", layanan: "Sewa Fasilitas Mesin Cetak Offset", volume: "3 hari", tarif: "Rp 4.500.000 / hari", total: "Rp 13.500.000", billing: "8202601123456655", tgl: "26 Agu 2026", status: "Lunas" },
  { id: "PNBP-1153", pemohon: "PT Grafika Ilmu Sejahtera", layanan: "Jasa Cetak Juz 'Amma", volume: "8.000 eks", tarif: "Rp 9.500 / eks", total: "Rp 76.000.000", billing: "8202601123456599", tgl: "22 Agu 2026", status: "Verifikasi Dokumen" },
  { id: "PNBP-1152", pemohon: "Baznas Provinsi Banten", layanan: "Jasa Cetak Mushaf Standar", volume: "2.500 eks", tarif: "Rp 26.000 / eks", total: "Rp 65.000.000", billing: "8202601123456441", tgl: "15 Agu 2026", status: "Lunas" },
  { id: "PNBP-1151", pemohon: "PT Cahaya Ilmu Grafika", layanan: "Jasa Cetak Mushaf Custom (Cover Custom)", volume: "1.200 eks", tarif: "Rp 28.500 / eks", total: "Rp 34.200.000", billing: "8202601123456300", tgl: "10 Agu 2026", status: "Batal" },
];

const PNBP_TARIF_REF = [
  { layanan: "Jasa Cetak Mushaf Al-Qur'an Standar (A5, softcover)", satuan: "per eksemplar", tarif: "Rp 26.000" },
  { layanan: "Jasa Cetak Mushaf Al-Qur'an Custom (cover khusus/wakaf)", satuan: "per eksemplar", tarif: "Rp 28.500" },
  { layanan: "Jasa Cetak Juz 'Amma / buku saku keagamaan", satuan: "per eksemplar", tarif: "Rp 9.500" },
  { layanan: "Sewa Fasilitas Mesin Cetak Offset", satuan: "per hari", tarif: "Rp 4.500.000" },
  { layanan: "Sewa Fasilitas Mesin Jilid (Perfect Binding)", satuan: "per hari", tarif: "Rp 2.750.000" },
  { layanan: "Jasa Konsultasi Teknis Produksi Percetakan", satuan: "per paket", tarif: "Rp 3.000.000" },
];

/* ---------- 7b. Permohonan Mushaf Al-Qur'an (bantuan/donasi ke lembaga) ----------
   Alur: Registrasi & Pengajuan (Pemohon) -> Verifikasi Dokumen (Verifikator) ->
   Alokasi Stok (Admin UPQ) -> Approval (Pimpinan) -> Penerbitan Surat & QR Code
   (Sistem) -> Pengambilan (scan QR di UPQ) -> Selesai. */
const DATA_PERMOHONAN_MUSHAF = [
  {
    id: "PM-2026-0041", tglAjukan: "01 Sep 2026",
    lembaga: "Masjid Jami' Al-Ikhlas", jenis: "Masjid", penanggungJawab: "H. Rahman Hakim",
    kontak: "0812-3456-7890", alamat: "Jl. Merdeka No. 12, Kec. Ciawi, Kab. Bogor, Jawa Barat",
    alasan: "Melengkapi Mushaf untuk jamaah masjid yang terus bertambah, kondisi Mushaf lama sudah banyak yang rusak.",
    jumlahDiminta: 100, jumlahDisetujui: null,
    status: "Menunggu Verifikasi", catatan: "",
  },
  {
    id: "PM-2026-0040", tglAjukan: "29 Agu 2026",
    lembaga: "Yayasan Yatim Piatu Nurul Falah", jenis: "Yayasan", penanggungJawab: "Hj. Siti Rohimah",
    kontak: "0813-2211-4455", alamat: "Jl. Raya Sukabumi KM 8, Kab. Bogor, Jawa Barat",
    alasan: "Pengadaan Mushaf untuk kegiatan tahfidz santri asuh di yayasan.",
    jumlahDiminta: 75, jumlahDisetujui: null,
    status: "Revisi", catatan: "Surat Permohonan Resmi belum ditandatangani pimpinan lembaga. Mohon unggah ulang dengan tanda tangan & stempel basah/digital.",
  },
  {
    id: "PM-2026-0039", tglAjukan: "26 Agu 2026",
    lembaga: "Pondok Pesantren Riyadhul Jannah", jenis: "Lembaga Pendidikan", penanggungJawab: "KH. Ahmad Dahlan",
    kontak: "0857-8899-0011", alamat: "Jl. Cikoneng No. 45, Kab. Bogor, Jawa Barat",
    alasan: "Kebutuhan Mushaf untuk 200 santri baru tahun ajaran 2026/2027.",
    jumlahDiminta: 200, jumlahDisetujui: null,
    status: "Verifikasi Stok", catatan: "Dokumen lengkap & sah. Diteruskan ke Admin UPQ untuk pengecekan ketersediaan stok.",
  },
  {
    id: "PM-2026-0038", tglAjukan: "22 Agu 2026",
    lembaga: "Majelis Taklim An-Nur", jenis: "Organisasi Masyarakat", penanggungJawab: "Ny. Fatimah Zahra",
    kontak: "0811-4433-2200", alamat: "Perum Bogor Asri Blok C2, Kab. Bogor, Jawa Barat",
    alasan: "Mushaf untuk kegiatan pengajian rutin mingguan majelis taklim.",
    jumlahDiminta: 50, jumlahDisetujui: 40,
    status: "Menunggu Persetujuan Pimpinan", catatan: "Stok tersedia 40 eks (dari 50 diminta) — menunggu otorisasi final Pimpinan.",
  },
  {
    id: "PM-2026-0037", tglAjukan: "18 Agu 2026",
    lembaga: "Masjid Agung Baiturrahman", jenis: "Masjid", penanggungJawab: "H. Usman Fauzi",
    kontak: "0821-5566-7788", alamat: "Jl. Pajajaran No. 88, Kota Bogor, Jawa Barat",
    alasan: "Penggantian Mushaf lama yang sudah usang untuk shaf utama masjid.",
    jumlahDiminta: 150, jumlahDisetujui: 150,
    status: "Disetujui", catatan: "Disetujui penuh oleh Pimpinan. Surat Persetujuan & QR Code pengambilan telah diterbitkan sistem.",
    qrCode: "PM2026-0037-QR-88231",
  },
  {
    id: "PM-2026-0036", tglAjukan: "12 Agu 2026",
    lembaga: "SDIT Cahaya Qur'ani", jenis: "Lembaga Pendidikan", penanggungJawab: "Ust. Fajar Nugraha",
    kontak: "0815-9900-1122", alamat: "Jl. Pendidikan No. 5, Kec. Cibinong, Kab. Bogor, Jawa Barat",
    alasan: "Mushaf untuk program tahsin & tahfidz siswa kelas 4-6.",
    jumlahDiminta: 60, jumlahDisetujui: 60,
    status: "Selesai", catatan: "Mushaf telah diambil langsung di UPQ. QR Code telah dipindai petugas gudang pada 20 Agu 2026.",
    qrCode: "PM2026-0036-QR-77410",
  },
  {
    id: "PM-2026-0035", tglAjukan: "05 Agu 2026",
    lembaga: "Komunitas Peduli Dhuafa Amanah", jenis: "Organisasi Masyarakat", penanggungJawab: "Bapak Slamet Widodo",
    kontak: "0878-1122-3344", alamat: "Jl. Kayu Manis No. 21, Kota Bogor, Jawa Barat",
    alasan: "Permohonan untuk dibagikan langsung ke rumah-rumah warga dhuafa.",
    jumlahDiminta: 300, jumlahDisetujui: null,
    status: "Ditolak", catatan: "Ditolak: dokumen Surat Permohonan Resmi terindikasi tidak sah (tidak terverifikasi ke lembaga terkait) dan tujuan distribusi tidak sesuai ketentuan (distribusi perorangan, bukan lembaga/masjid).",
  },
];

/* Ketersediaan stok Mushaf yang dirujuk saat tahap "Alokasi Stok" (selaras
   dengan data internal-finish-good.html — produk Mushaf Standar). */
const STOK_MUSHAF_TERSEDIA = 5600; // eks, Mushaf Al-Qur'an Standar Kemenag (A5)

/* ---------- 8. Jadwal Kegiatan UPQ & Kunjungan Literasi ---------- */
const DATA_JADWAL_UPQ = [
  { tgl: "03 Sep 2026", kegiatan: "Maintenance Preventive Mesin Cetak Offset", lokasi: "Area Produksi 1", status: "Terjadwal" },
  { tgl: "05 Sep 2026", kegiatan: "Audit Mutu Internal Produksi Mushaf Batch #114", lokasi: "Ruang QC", status: "Terjadwal" },
  { tgl: "08 Sep 2026", kegiatan: "Pelatihan K3 Operator Mesin Produksi", lokasi: "Aula UPQ", status: "Terjadwal" },
  { tgl: "12 Sep 2026", kegiatan: "Rapat Evaluasi Produksi Triwulan III", lokasi: "Ruang Rapat Utama", status: "Terjadwal" },
  { tgl: "20 Agu 2026", kegiatan: "Peresmian Lini Produksi Digital Printing", lokasi: "Area Produksi 3", status: "Selesai" },
];

const DATA_JADWAL_KUNJUNGAN = [
  { tgl: "04 Sep 2026", instansi: "SMA Negeri 1 Ciawi", jenis: "Sekolah", peserta: 45, status: "Terkonfirmasi" },
  { tgl: "05 Sep 2026", instansi: "MAN 2 Kota Bogor", jenis: "Sekolah", peserta: 60, status: "Terkonfirmasi" },
  { tgl: "09 Sep 2026", instansi: "Universitas Islam Negeri Sunan Gunung Djati", jenis: "Perguruan Tinggi", peserta: 30, status: "Menunggu Verifikasi" },
  { tgl: "11 Sep 2026", instansi: "Pondok Pesantren Al-Hikmah", jenis: "Pesantren", peserta: 80, status: "Terkonfirmasi" },
  { tgl: "15 Sep 2026", instansi: "Dinas Pendidikan Kabupaten Bogor (Studi Tiru)", jenis: "Instansi Pemerintah", peserta: 25, status: "Menunggu Verifikasi" },
  { tgl: "22 Agu 2026", instansi: "SDIT Cendekia Bogor", jenis: "Sekolah", peserta: 40, status: "Selesai" },
  { tgl: "18 Agu 2026", instansi: "Komunitas Rumah Qur'an Depok", jenis: "Komunitas", peserta: 20, status: "Dibatalkan" },
];

/* ---------- Helper: agenda gabungan (kunjungan literasi + kegiatan UPQ) ----------
   Dipakai di beranda & halaman Jadwal Kegiatan supaya kedua jenis agenda selalu
   tampil bersama (kalender, daftar, dialog detail saat tanggal/baris diklik). */
const BULAN_ID = { Jan:0, Feb:1, Mar:2, Apr:3, Mei:4, Jun:5, Jul:6, Agu:7, Sep:8, Okt:9, Nov:10, Des:11 };
function parseTglID(str) {
  const [d, mon, y] = str.split(" ");
  return new Date(parseInt(y, 10), BULAN_ID[mon] ?? 0, parseInt(d, 10));
}
function combinedAgenda() {
  const kunjungan = DATA_JADWAL_KUNJUNGAN.map(j => ({
    tipe: "kunjungan", tgl: j.tgl, dateObj: parseTglID(j.tgl),
    judul: j.instansi, sub: `${j.jenis} · ${j.peserta} orang`, status: j.status,
    detail: { "Jenis Instansi": j.jenis, "Jumlah Peserta": `${j.peserta} orang` },
  }));
  const upq = DATA_JADWAL_UPQ.map(k => ({
    tipe: "upq", tgl: k.tgl, dateObj: parseTglID(k.tgl),
    judul: k.kegiatan, sub: k.lokasi, status: k.status,
    detail: { "Lokasi": k.lokasi },
  }));
  return [...kunjungan, ...upq].sort((a, b) => a.dateObj - b.dateObj);
}
function agendaTypeBadge(tipe) {
  return tipe === "upq"
    ? `<span class="badge" style="background:#fdf3e0;color:#8a5a00"><span style="width:6px;height:6px;border-radius:50%;background:var(--gold-500);display:inline-block;margin-right:2px"></span>Kegiatan UPQ</span>`
    : `<span class="badge" style="background:var(--brand-50);color:var(--brand-700)"><span style="width:6px;height:6px;border-radius:50%;background:var(--brand-600);display:inline-block;margin-right:2px"></span>Kunjungan Literasi</span>`;
}
/* Render 1 item agenda ke dalam modal (dipakai baik dari baris tabel maupun tanggal kalender) */
function showAgendaDetailModal(item, modalId, contentId) {
  if (!item) return;
  const detailRows = Object.entries(item.detail || {}).map(([k, v]) => `
    <div class="flex justify-between py-1.5 border-b border-[var(--line)] last:border-none">
      <span class="text-[var(--ink-500)]">${k}</span><span class="font-semibold text-[var(--ink-900)]">${v}</span>
    </div>`).join("");
  document.getElementById(contentId).innerHTML = `
    <div class="flex items-center justify-between px-6 py-5 border-b border-[var(--line)]">
      <div>
        <div class="text-xs text-[var(--ink-500)] font-semibold mb-1">${item.tgl}</div>
        ${agendaTypeBadge(item.tipe)}
      </div>
      <button onclick="closeModal('${modalId}')" class="text-[var(--ink-300)] hover:text-[var(--ink-900)]"><i class="fa-solid fa-xmark text-lg"></i></button>
    </div>
    <div class="p-6">
      <h3 class="font-display font-bold text-lg text-[var(--ink-900)] mb-1">${item.judul}</h3>
      <p class="text-sm text-[var(--ink-500)] mb-4">${item.sub}</p>
      <div class="text-sm mb-4">${detailRows}</div>
      <div class="flex justify-between items-center">
        <span class="text-sm text-[var(--ink-500)]">Status</span>${badge(item.status)}
      </div>
    </div>`;
  openModal(modalId);
}

/* ---------- 9. Dokumentasi Kegiatan (galeri) ----------
   `id` = nama file foto yang dicari di assets/img/galeri/<id>.jpg
   Belum punya foto asli? Tidak masalah — otomatis jatuh ke ilustrasi kategori.
   Cara menambah foto & berita baru: lihat README.md bagian "Menambahkan Foto". */
const DATA_DOKUMENTASI = [
  { id: "kunjungan-sman3-bogor", judul: "Kunjungan Literasi SMA Negeri 3 Bogor", kategori: "Kunjungan Literasi", tgl: "18 Agu 2026" },
  { id: "cetak-batch-113", judul: "Proses Cetak Batch Mushaf Standar #113", kategori: "Produksi", tgl: "15 Agu 2026" },
  { id: "pelatihan-k3", judul: "Pelatihan K3 Operator Produksi", kategori: "Pelatihan", tgl: "10 Agu 2026" },
  { id: "peresmian-digital-printing", judul: "Peresmian Lini Produksi Digital Printing", kategori: "Seremonial", tgl: "20 Agu 2026" },
  { id: "studi-tiru-kanwil-banten", judul: "Kunjungan Studi Tiru Kanwil Kemenag Banten", kategori: "Kunjungan Literasi", tgl: "05 Agu 2026" },
  { id: "qc-mushaf-terjemahan", judul: "Quality Control Mushaf Terjemahan", kategori: "Produksi", tgl: "02 Agu 2026" },
  { id: "kunjungan-ponpes-al-falah", judul: "Kunjungan Pondok Pesantren Al-Falah", kategori: "Kunjungan Literasi", tgl: "29 Jul 2026" },
  { id: "serah-terima-jawa-barat", judul: "Serah Terima Mushaf ke Kanwil Jawa Barat", kategori: "Seremonial", tgl: "25 Jul 2026" },
  { id: "pelatihan-penjilidan", judul: "Pelatihan Penjilidan untuk Staf Baru", kategori: "Pelatihan", tgl: "20 Jul 2026" },
];

/* ---------- Helper: foto asli (jika ada file-nya) + fallback ilustrasi ----------
   Dipakai untuk kartu galeri/berita: coba tampilkan assets/img/galeri/<id>.jpg,
   kalau file tidak ditemukan (404) <img> otomatis menyembunyikan diri lewat
   onerror sehingga ilustrasi kategori di baliknya kembali terlihat.
   `altText` hanya dipakai untuk atribut alt gambar (aksesibilitas/SEO) — beri
   `showCaption:true` HANYA bila kartu TIDAK punya judul terpisah di bawah foto
   (mis. ubin "Tentang UPQ"), supaya judul tidak tampil dobel. */
function photoOrIllustration(id, kategori, altText = "", showCaption = false) {
  const imgHtml = id
    ? `<img src="assets/img/galeri/${id}.jpg" alt="${altText}" loading="lazy" class="photo-real" onerror="this.remove()">`
    : "";
  return imgHtml + photoIllustrationForKategori(kategori, showCaption ? altText : "");
}

/* ---------- Hero slider beranda ----------
   Taruh file di assets/img/hero/slide-1.jpg s.d. slide-4.jpg untuk mengisi slide
   dengan foto asli. Selama file belum ada, tiap slide jatuh ke gradasi + ikon
   watermark BERBEDA satu sama lain (bukan warna polos yang sama semua) — supaya
   pergantian slide tetap terlihat jelas walau belum ada foto sungguhan. */
const HERO_SLIDES = [
  { img: "assets/img/hero/slide-1.jpg", alt: "Area produksi percetakan Al-Qur'an UPQ", icon: "fa-industry" },
  { img: "assets/img/hero/slide-2.jpg", alt: "Kunjungan literasi pelajar ke UPQ", icon: "fa-people-group" },
  { img: "assets/img/hero/slide-3.jpg", alt: "Proses tashih Mushaf Al-Qur'an", icon: "fa-book-open-reader" },
  { img: "assets/img/hero/slide-4.jpg", alt: "Kegiatan seremonial UPQ", icon: "fa-flag" },
];
function initHeroSlider() {
  const wrap = document.getElementById("hero-slides");
  const dotsWrap = document.getElementById("hero-dots");
  if (!wrap || !dotsWrap) return;

  wrap.innerHTML = HERO_SLIDES.map((s, i) => `
    <div class="hero-slide hero-slide-${i + 1} ${i === 0 ? "active" : ""}">
      <img src="${s.img}" alt="${s.alt}" loading="${i === 0 ? "eager" : "lazy"}" onerror="this.parentElement.classList.add('hero-slide-fallback')">
      <i class="fa-solid ${s.icon} hero-slide-watermark"></i>
    </div>`).join("");
  dotsWrap.innerHTML = HERO_SLIDES.map((_, i) => `<button class="hero-dot ${i === 0 ? "active" : ""}" aria-label="Slide ${i + 1}"></button>`).join("");

  const slides = [...wrap.querySelectorAll(".hero-slide")];
  const dots = [...dotsWrap.querySelectorAll(".hero-dot")];
  let current = 0;
  function goTo(i) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (i + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }
  dots.forEach((d, i) => d.addEventListener("click", () => { goTo(i); resetTimer(); }));

  let timer = null;
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 6000);
  }
  resetTimer();
  const section = wrap.closest("section");
  section?.addEventListener("mouseenter", () => clearInterval(timer));
  section?.addEventListener("mouseleave", resetTimer);
}

/* ---------- Helper: ilustrasi "foto kegiatan" (belum ada aset foto asli) ----------
   Dipakai di dalam kartu ber-class .photo-ph — menghasilkan lencana ikon besar
   di tengah + 1-2 ikon aksen samar di sudut, supaya kartu terasa hidup seperti
   foto dokumentasi, bukan sekadar blok warna polos. */
const KATEGORI_ICON = {
  "Produksi": { icon: "fa-industry", accents: ["fa-gear", "fa-boxes-stacked"] },
  "Kunjungan Literasi": { icon: "fa-people-group", accents: ["fa-book-open-reader", "fa-comments"] },
  "Pelatihan": { icon: "fa-chalkboard-user", accents: ["fa-graduation-cap", "fa-lightbulb"] },
  "Seremonial": { icon: "fa-flag", accents: ["fa-handshake", "fa-award"] },
};
function photoIllustration(icon, accents = [], caption = "") {
  const accentPos = [
    "top:12%;left:10%;font-size:32px;transform:rotate(-14deg)",
    "bottom:14%;right:12%;font-size:28px;transform:rotate(11deg)",
  ];
  const accentHtml = accents.slice(0, 2).map((a, i) => `<i class="fa-solid ${a} photo-ph-accent" style="${accentPos[i]}"></i>`).join("");
  const captionHtml = caption ? `<div class="photo-ph-caption">${caption}</div>` : "";
  return `${accentHtml}<div class="photo-ph-badge"><i class="fa-solid ${icon}"></i></div>${captionHtml}`;
}
function photoIllustrationForKategori(kategori, caption = "") {
  const k = KATEGORI_ICON[kategori] || { icon: "fa-image", accents: [] };
  return photoIllustration(k.icon, k.accents, caption);
}

/* ---------- Helper: badge kelas berdasarkan status umum ---------- */
function statusBadgeClass(status) {
  const map = {
    // positif
    "Diterima": "badge-ok", "Selesai": "badge-ok", "Lunas": "badge-ok", "Tersedia": "badge-ok",
    "Sesuai": "badge-ok", "Terkonfirmasi": "badge-ok", "Selesai Dipakai": "badge-ok", "Disetujui": "badge-ok",
    // proses / info
    "Diproses": "badge-info", "Proses": "badge-info", "Dikirim Pemasok": "badge-info",
    "Dalam Pengiriman": "badge-info", "Terjadwal": "badge-info", "Verifikasi Dokumen": "badge-info",
    "Belum Diverifikasi": "badge-info", "Menunggu Verifikasi": "badge-info", "Verifikasi Stok": "badge-info",
    // warning
    "Stok Menipis": "badge-warn", "Menunggu Pembayaran": "badge-warn", "Menunggu Suku Cadang": "badge-warn",
    "Revisi": "badge-warn", "Menunggu Persetujuan Pimpinan": "badge-warn",
    // danger
    "Dibatalkan": "badge-danger", "Batal": "badge-danger", "Habis": "badge-danger",
    "Bermasalah": "badge-danger", "Tidak Sesuai": "badge-danger", "Ditolak": "badge-danger",
  };
  return map[status] || "badge-neutral";
}

function badge(status) {
  return `<span class="badge ${statusBadgeClass(status)}">${status}</span>`;
}

/* ---------- Helper: render tabel generik + search filter ---------- */
function renderRows(tbodyId, rows, rowTemplateFn) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  tbody.innerHTML = rows.length
    ? rows.map(rowTemplateFn).join("")
    : `<tr><td colspan="12" class="text-center py-10 text-[var(--ink-300)]"><i class="fa-solid fa-inbox text-2xl mb-2 block"></i>Tidak ada data yang cocok.</td></tr>`;
}

function attachSearchFilter(inputId, getRows, tbodyId, rowTemplateFn, searchFields) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    const filtered = getRows().filter(r => !q || searchFields.some(f => String(r[f] || "").toLowerCase().includes(q)));
    renderRows(tbodyId, filtered, rowTemplateFn);
  });
}
