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
