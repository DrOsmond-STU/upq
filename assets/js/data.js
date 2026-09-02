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

/* ---------- 9. Dokumentasi Kegiatan (galeri) ---------- */
const DATA_DOKUMENTASI = [
  { judul: "Kunjungan Literasi SMA Negeri 3 Bogor", kategori: "Kunjungan Literasi", tgl: "18 Agu 2026" },
  { judul: "Proses Cetak Batch Mushaf Standar #113", kategori: "Produksi", tgl: "15 Agu 2026" },
  { judul: "Pelatihan K3 Operator Produksi", kategori: "Pelatihan", tgl: "10 Agu 2026" },
  { judul: "Peresmian Lini Produksi Digital Printing", kategori: "Seremonial", tgl: "20 Agu 2026" },
  { judul: "Kunjungan Studi Tiru Kanwil Kemenag Banten", kategori: "Kunjungan Literasi", tgl: "05 Agu 2026" },
  { judul: "Quality Control Mushaf Terjemahan", kategori: "Produksi", tgl: "02 Agu 2026" },
  { judul: "Kunjungan Pondok Pesantren Al-Falah", kategori: "Kunjungan Literasi", tgl: "29 Jul 2026" },
  { judul: "Serah Terima Mushaf ke Kanwil Jawa Barat", kategori: "Seremonial", tgl: "25 Jul 2026" },
  { judul: "Pelatihan Penjilidan untuk Staf Baru", kategori: "Pelatihan", tgl: "20 Jul 2026" },
];

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
    "Sesuai": "badge-ok", "Terkonfirmasi": "badge-ok", "Selesai Dipakai": "badge-ok",
    // proses / info
    "Diproses": "badge-info", "Proses": "badge-info", "Dikirim Pemasok": "badge-info",
    "Dalam Pengiriman": "badge-info", "Terjadwal": "badge-info", "Verifikasi Dokumen": "badge-info",
    "Belum Diverifikasi": "badge-info", "Menunggu Verifikasi": "badge-info",
    // warning
    "Stok Menipis": "badge-warn", "Menunggu Pembayaran": "badge-warn", "Menunggu Suku Cadang": "badge-warn",
    // danger
    "Dibatalkan": "badge-danger", "Batal": "badge-danger", "Habis": "badge-danger",
    "Bermasalah": "badge-danger", "Tidak Sesuai": "badge-danger",
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
