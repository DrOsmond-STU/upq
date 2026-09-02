# Foto galeri Dokumentasi Kegiatan (juga tampil sebagai "berita" di beranda)

Data setiap item galeri/berita ada di `assets/js/data.js`, di dalam array
`DATA_DOKUMENTASI`. Setiap item punya field `id` — nama file fotonya harus
sama persis dengan `id` tersebut, format `.jpg`.

## Menambahkan foto untuk item yang sudah ada
Taruh file dengan nama `<id>.jpg` di folder ini. Contoh, untuk item:
```js
{ id: "kunjungan-sman3-bogor", judul: "Kunjungan Literasi SMA Negeri 3 Bogor", ... }
```
→ nama filenya harus `kunjungan-sman3-bogor.jpg`.

Daftar nama file yang saat ini dikenali (sesuai data contoh):
- `kunjungan-sman3-bogor.jpg`
- `cetak-batch-113.jpg`
- `pelatihan-k3.jpg`
- `peresmian-digital-printing.jpg`
- `studi-tiru-kanwil-banten.jpg`
- `qc-mushaf-terjemahan.jpg`
- `kunjungan-ponpes-al-falah.jpg`
- `serah-terima-jawa-barat.jpg`
- `pelatihan-penjilidan.jpg`

Selama file belum ada, kartu otomatis memakai ilustrasi sesuai kategori
(Produksi/Kunjungan Literasi/Pelatihan/Seremonial) — jadi bisa diunggah
satu per satu kapan saja.

## Menambahkan item galeri/berita BARU (foto + judul baru sepenuhnya)
1. Buka `assets/js/data.js`, cari array `DATA_DOKUMENTASI`.
2. Tambahkan baris baru, misalnya:
   ```js
   { id: "kunjungan-untirta-2026", judul: "Kunjungan Universitas Untirta", kategori: "Kunjungan Literasi", tgl: "10 Sep 2026" },
   ```
   `kategori` harus salah satu dari: `Produksi`, `Kunjungan Literasi`,
   `Pelatihan`, `Seremonial` (menentukan ikon ilustrasi & warna label).
3. Taruh foto di folder ini dengan nama `kunjungan-untirta-2026.jpg`.
4. Simpan & upload ulang — item baru otomatis muncul di halaman Dokumentasi
   Kegiatan dan (jika termasuk 3 item terbaru) di beranda.

**Rekomendasi foto:** rasio 16:9 (landscape), minimal 800×450px.
