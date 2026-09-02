# UPQ — Purwarupa UI/UX Sistem Manajemen Data
### Unit Percetakan Al-Qur'an — Kementerian Agama Republik Indonesia

Purwarupa (prototype) antarmuka front-end statis (HTML/CSS/JS, tanpa proses build)
untuk aplikasi manajemen data UPQ. Tema visual mengadaptasi struktur & kesan
korporat **pertamina.com** (top bar, mega navigasi, hero besar, statistik,
grid kartu layanan, mega footer) dengan palet identitas Kemenag/Al-Qur'an
(hijau tua + aksen emas).

> Ini adalah purwarupa **UI/UX front-end saja** — semua data berupa data
> contoh (dummy) di `assets/js/data.js` dan belum terhubung ke basis data
> atau backend nyata. Login, formulir, dan aksi tombol bersifat simulasi.

## Struktur Halaman

**Publik**
- `index.html` — Landing page
- `kunjungan-literasi.html` — Informasi kunjungan literasi (syarat, alur, FAQ)
- `dokumentasi-kegiatan.html` — Galeri dokumentasi kegiatan
- `jadwal-kegiatan.html` — Jadwal kegiatan UPQ & jadwal kunjungan literasi
- `pendaftaran-kunjungan.html` — Formulir pendaftaran kunjungan (multi-step)

**Internal** (di belakang `internal-login.html`, simulasi)
- `internal-login.html` — Login internal
- `internal-dashboard.html` — Dashboard ringkasan (KPI, grafik, notifikasi)
- `internal-pemesanan-material.html` — Pemesanan raw material & sparepart
- `internal-penggunaan-material.html` — Penggunaan material untuk produksi
- `internal-maintenance.html` — Maintenance alat
- `internal-wip-produksi.html` — WIP (Work in Progress) produksi
- `internal-finish-good.html` — Finish good / gudang barang jadi
- `internal-tracking-pengiriman.html` — Tracking pengiriman Mushaf + verifikasi penerima
- `internal-pnbp.html` — Layanan PNBP jasa cetak pihak ketiga + referensi tarif

## Struktur Aset
```
assets/
  css/style.css         — Design system (variabel warna, komponen, layout internal)
  css/tailwind.min.css  — Utility CSS (Tailwind) hasil build lokal, di-host sendiri (bukan CDN)
  vendor/fontawesome/   — Font Awesome (ikon) di-host sendiri (bukan CDN)
  js/layout.js          — Header/footer publik + shell sidebar internal (JS-injected, dipakai di semua halaman)
  js/data.js            — Data contoh (dummy) + helper render tabel/badge/filter
```

> **Catatan penting:** Seluruh dependency front-end (utility CSS Tailwind & ikon
> Font Awesome) sengaja **di-host sendiri** (bukan memanggil CDN publik saat
> runtime) — praktik yang lebih tepat untuk situs produksi instansi
> pemerintah: tidak bergantung pada ketersediaan/kebijakan CDN pihak ketiga,
> lebih cepat dimuat, dan tetap berfungsi walau akses ke domain CDN diblokir
> oleh kebijakan jaringan (mis. proxy/firewall instansi). Satu-satunya
> panggilan eksternal yang tersisa adalah Google Fonts (opsional — jika gagal
> dimuat, tipografi otomatis jatuh ke system font tanpa merusak tampilan).

### Menambah / mengubah class Tailwind
Karena `tailwind.min.css` adalah hasil build (bukan CDN dinamis), setiap kali
menambah class Tailwind baru di HTML/JS, file itu perlu di-build ulang:
```bash
npm install -D tailwindcss@3
npx tailwindcss -i ./input.css -o assets/css/tailwind.min.css --minify \
  --content "./*.html,./assets/js/*.js"
```
(`input.css` cukup berisi `@tailwind base; @tailwind components; @tailwind utilities;`)

## Menambahkan Foto (galeri, berita di beranda, slide hero)

Purwarupa ini **tanpa backend/CMS**, jadi menambah foto dilakukan dengan cara
paling sederhana: upload file gambar dengan nama yang tepat ke folder yang
tepat. Tidak perlu ubah kode HTML sama sekali. Setiap folder gambar juga
punya file `BACA-DULU.md` berisi instruksi yang sama seperti di bawah ini.

Selama sebuah foto belum diunggah, halaman otomatis menampilkan ilustrasi
ikon sebagai pengganti (bukan kotak kosong) — jadi aman diunggah bertahap.

| Bagian | Folder | Aturan nama file |
|---|---|---|
| Slide hero (beranda) | `assets/img/hero/` | `slide-1.jpg`, `slide-2.jpg`, `slide-3.jpg`, `slide-4.jpg` |
| Kolase "Tentang UPQ" (beranda) | `assets/img/tentang/` | `area-produksi.jpg`, `ruang-kunjungan.jpg`, `kunjungan-pelajar.jpg`, `tashih-mushaf.jpg` |
| Galeri Dokumentasi Kegiatan **+ preview "berita" di beranda** | `assets/img/galeri/` | `<id>.jpg` — `id` diambil dari data di bawah |

### Galeri & "berita" (satu sumber data yang sama)
Situs ini belum punya halaman "Berita" terpisah — bagian **Dokumentasi
Kegiatan** (galeri) itulah yang juga tampil sebagai daftar "berita terbaru"
di beranda (3 item terbaru). Jadi menambah foto/berita = menambah 1 item di
galeri.

Datanya ada di `assets/js/data.js`, array `DATA_DOKUMENTASI`:
```js
{ id: "kunjungan-untirta-2026", judul: "Kunjungan Universitas Untirta", kategori: "Kunjungan Literasi", tgl: "10 Sep 2026" },
```
- **Foto untuk item yang sudah ada**: upload `assets/img/galeri/<id>.jpg`
  sesuai `id` item tersebut (lihat daftar id di `assets/img/galeri/BACA-DULU.md`).
- **Item galeri/berita baru**: tambahkan objek baru ke array
  `DATA_DOKUMENTASI` (judul, `kategori` salah satu dari `Produksi` /
  `Kunjungan Literasi` / `Pelatihan` / `Seremonial`, dan tanggal), lalu upload
  foto dengan nama `<id-yang-dipilih>.jpg` ke `assets/img/galeri/`. Item baru
  otomatis muncul di halaman Dokumentasi Kegiatan, dan di beranda jika masuk
  3 teratas.

Rekomendasi ukuran foto: galeri/berita rasio 16:9 (≥800×450px), kolase
Tentang UPQ rasio 1:1 (≥600×600px), slide hero landscape lebar (≥1600×900px).
Kompres dulu supaya halaman tetap ringan.

## Menjalankan Secara Lokal
Situs statis murni — cukup buka `index.html` langsung di browser, atau jalankan
server statis sederhana agar fetch/relative path bekerja optimal:
```bash
python3 -m http.server 8080
# buka http://localhost:8080
```

## Deploy ke Hosting (mis. upq.semestateknologiutama.com)
Karena tidak ada proses build, seluruh isi folder ini tinggal di-upload ke
document root domain (via File Manager / FTP / Git Deploy cPanel):
1. Upload seluruh isi folder `upq/` (bukan foldernya) ke `public_html` domain/subdomain.
2. Pastikan `index.html` berada di root document root.
3. Tidak ada dependency server-side (PHP/Node) yang dibutuhkan untuk purwarupa ini.

## Rencana Lanjutan (di luar cakupan purwarupa ini)
- Autentikasi & otorisasi peran nyata untuk area internal.
- Integrasi backend/API + basis data untuk seluruh modul (produksi, tracking, PNBP).
- Integrasi pembayaran PNBP dengan SIMPONI.
- Notifikasi email/WhatsApp untuk pendaftaran kunjungan & status pengiriman.

---
Dibangun sebagai purwarupa UI/UX untuk kebutuhan internal & publik UPQ.
