/* =========================================================
   UPQ — layout.js
   Komponen bersama: header publik, footer, shell internal (sidebar+topbar),
   plus util UI kecil (dropdown mobile, accordion, tab, modal).
   ========================================================= */

const UPQ_BRAND = {
  name: "UPQ",
  fullName: "Unit Percetakan Al-Qur'an",
  org: "Kementerian Agama Republik Indonesia",
  address: "Jl. Percetakan Al-Qur'an, Kawasan Pusat Studi Al-Qur'an, Ciawi, Bogor, Jawa Barat 16720",
  phone: "(0251) 8240 123",
  email: "info@upq.kemenag.go.id",
  hours: "Senin–Jumat, 08.00–16.00 WIB",
};

const PUBLIC_NAV = [
  { label: "Beranda", href: "index.html", key: "beranda" },
  { label: "Tentang UPQ", href: "index.html#tentang", key: "tentang" },
  {
    label: "Kunjungan Literasi", key: "kunjungan", href: "kunjungan-literasi.html",
    children: [
      { label: "Informasi Kunjungan", href: "kunjungan-literasi.html", desc: "Syarat, alur & fasilitas kunjungan" },
      { label: "Jadwal Kunjungan & Kegiatan", href: "jadwal-kegiatan.html", desc: "Kalender kegiatan UPQ terkini" },
      { label: "Daftar Kunjungan", href: "pendaftaran-kunjungan.html", desc: "Formulir pendaftaran rombongan" },
    ],
  },
  {
    label: "Permohonan Mushaf", key: "permohonan-mushaf", href: "permohonan-mushaf.html",
    children: [
      { label: "Informasi & Alur", href: "permohonan-mushaf.html", desc: "Syarat, alur, dan tarif bantuan Mushaf" },
      { label: "Ajukan Permohonan", href: "pendaftaran-permohonan-mushaf.html", desc: "Formulir permohonan bantuan Mushaf" },
    ],
  },
  { label: "Dokumentasi Kegiatan", href: "dokumentasi-kegiatan.html", key: "dokumentasi" },
  { label: "Jadwal Kegiatan", href: "jadwal-kegiatan.html", key: "jadwal" },
  { label: "Kontak", href: "index.html#kontak", key: "kontak" },
];

function iconLogo(size = 40) {
  return `<div class="rounded-xl flex items-center justify-center flex-none" style="width:${size}px;height:${size}px;background:linear-gradient(135deg,var(--brand-600),var(--brand-800))">
    <i class="fa-solid fa-book-quran text-white" style="font-size:${size * 0.48}px"></i>
  </div>`;
}

function renderPublicHeader(activeKey) {
  const el = document.getElementById("site-header");
  if (!el) return;

  const navHtml = PUBLIC_NAV.map((item) => {
    const isActive = item.key === activeKey;
    if (item.children) {
      return `
      <div class="has-dropdown relative">
        <a href="${item.href}" class="nav-link ${isActive ? "active" : ""} flex items-center gap-1">
          ${item.label} <i class="fa-solid fa-chevron-down text-[10px] mt-[2px]"></i>
        </a>
        <div class="dropdown-panel absolute left-1/2 -translate-x-1/2 top-full pt-3 w-80">
          <div class="card p-2 shadow-lg">
            ${item.children.map(c => `
              <a href="${c.href}" class="flex items-start gap-3 rounded-xl p-3 hover:bg-[var(--brand-50)] transition">
                <i class="fa-solid fa-circle-chevron-right mt-1 text-[var(--brand-600)]"></i>
                <span>
                  <span class="block font-bold text-sm text-[var(--ink-900)]">${c.label}</span>
                  <span class="block text-xs text-[var(--ink-500)] mt-0.5">${c.desc}</span>
                </span>
              </a>`).join("")}
          </div>
        </div>
      </div>`;
    }
    return `<a href="${item.href}" class="nav-link ${isActive ? "active" : ""}">${item.label}</a>`;
  }).join("");

  const mobileNavHtml = PUBLIC_NAV.map((item) => {
    if (item.children) {
      return `<div class="border-b border-[var(--line)] py-2">
        <div class="font-bold text-sm py-2">${item.label}</div>
        ${item.children.map(c => `<a href="${c.href}" class="block py-2 pl-3 text-sm text-[var(--ink-700)]">${c.label}</a>`).join("")}
      </div>`;
    }
    return `<a href="${item.href}" class="block py-3 border-b border-[var(--line)] text-sm font-semibold">${item.label}</a>`;
  }).join("");

  el.innerHTML = `
    <div class="topbar no-print">
      <div class="container flex items-center justify-between py-2">
        <div class="flex items-center gap-4">
          <span class="hidden sm:inline"><i class="fa-solid fa-landmark-flag mr-1.5"></i>${UPQ_BRAND.org}</span>
          <span class="sm:hidden"><i class="fa-solid fa-landmark-flag mr-1.5"></i>Kemenag RI</span>
        </div>
        <div class="flex items-center gap-4">
          <a href="#kontak" class="hidden md:inline"><i class="fa-solid fa-phone mr-1.5"></i>${UPQ_BRAND.phone}</a>
          <a href="internal-login.html" class="font-semibold"><i class="fa-solid fa-user-lock mr-1.5"></i>Login Internal</a>
        </div>
      </div>
    </div>
    <header class="mainnav">
      <div class="container flex items-center justify-between py-3">
        <a href="index.html" class="flex items-center gap-3">
          ${iconLogo(44)}
          <span class="leading-tight">
            <span class="block font-display font-extrabold text-[17px] text-[var(--ink-900)]">Unit Percetakan Al-Qur'an</span>
            <span class="block text-[11px] font-semibold tracking-wide text-[var(--brand-600)] uppercase">Kementerian Agama RI</span>
          </span>
        </a>
        <nav class="hidden lg:flex items-center gap-7">${navHtml}</nav>
        <div class="hidden lg:flex items-center gap-3">
          <a href="pendaftaran-kunjungan.html" class="btn btn-primary btn-sm"><i class="fa-solid fa-calendar-check"></i>Daftar Kunjungan</a>
        </div>
        <button id="mobile-menu-btn" class="lg:hidden btn btn-ghost btn-sm px-3"><i class="fa-solid fa-bars text-lg"></i></button>
      </div>
      <div id="mobile-menu" class="lg:hidden hidden border-t border-[var(--line)] bg-white">
        <div class="container py-3">
          ${mobileNavHtml}
          <a href="pendaftaran-kunjungan.html" class="btn btn-primary btn-block mt-4"><i class="fa-solid fa-calendar-check"></i>Daftar Kunjungan</a>
          <a href="internal-login.html" class="btn btn-line btn-block mt-2"><i class="fa-solid fa-user-lock"></i>Login Internal</a>
        </div>
      </div>
    </header>
  `;

  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) btn.addEventListener("click", () => menu.classList.toggle("hidden"));

  window.addEventListener("scroll", () => {
    document.querySelector(".mainnav")?.classList.toggle("scrolled", window.scrollY > 8);
  });
}

function renderPublicFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
  <footer class="bg-brand-gradient bg-noise-pattern text-white no-print">
    <div class="container py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
      <div class="md:col-span-4">
        <div class="flex items-center gap-3 mb-4">
          ${iconLogo(46)}
          <span class="font-display font-extrabold text-lg">UPQ Kemenag RI</span>
        </div>
        <p class="text-sm text-white/75 leading-relaxed mb-4">${UPQ_BRAND.fullName} — melayani produksi Mushaf Al-Qur'an standar Kemenag, edukasi literasi Al-Qur'an, serta layanan cetak PNBP bagi pihak ketiga.</p>
        <div class="flex gap-3">
          ${["facebook-f","instagram","youtube","x-twitter"].map(i=>`<a href="#" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"><i class="fa-brands fa-${i} text-sm"></i></a>`).join("")}
        </div>
      </div>
      <div class="md:col-span-2">
        <h4 class="font-bold text-sm uppercase tracking-wide text-[var(--gold-300)] mb-4">Layanan Publik</h4>
        <ul class="space-y-2.5 text-sm text-white/80">
          <li><a href="kunjungan-literasi.html" class="hover:text-white">Kunjungan Literasi</a></li>
          <li><a href="jadwal-kegiatan.html" class="hover:text-white">Jadwal Kegiatan</a></li>
          <li><a href="pendaftaran-kunjungan.html" class="hover:text-white">Daftar Kunjungan</a></li>
          <li><a href="dokumentasi-kegiatan.html" class="hover:text-white">Dokumentasi</a></li>
        </ul>
      </div>
      <div class="md:col-span-3">
        <h4 class="font-bold text-sm uppercase tracking-wide text-[var(--gold-300)] mb-4">Layanan Internal</h4>
        <ul class="space-y-2.5 text-sm text-white/80">
          <li><a href="internal-login.html" class="hover:text-white">Produksi Percetakan</a></li>
          <li><a href="internal-login.html" class="hover:text-white">Tracking Pengiriman Mushaf</a></li>
          <li><a href="internal-login.html" class="hover:text-white">Layanan PNBP Pihak Ketiga</a></li>
        </ul>
      </div>
      <div class="md:col-span-3">
        <h4 class="font-bold text-sm uppercase tracking-wide text-[var(--gold-300)] mb-4">Kontak</h4>
        <ul class="space-y-3 text-sm text-white/80">
          <li class="flex gap-2"><i class="fa-solid fa-location-dot mt-1"></i><span>${UPQ_BRAND.address}</span></li>
          <li class="flex gap-2"><i class="fa-solid fa-phone mt-1"></i><span>${UPQ_BRAND.phone}</span></li>
          <li class="flex gap-2"><i class="fa-solid fa-envelope mt-1"></i><span>${UPQ_BRAND.email}</span></li>
          <li class="flex gap-2"><i class="fa-solid fa-clock mt-1"></i><span>${UPQ_BRAND.hours}</span></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/15">
      <div class="container py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/65">
        <span>© ${year} Unit Percetakan Al-Qur'an — Kementerian Agama Republik Indonesia. Purwarupa UI/UX.</span>
        <span>Dikembangkan untuk kebutuhan internal &amp; publik UPQ</span>
      </div>
    </div>
  </footer>`;
}

/* ---------------- Internal / dashboard shell ---------------- */

const INTERNAL_NAV = [
  { key: "dashboard", label: "Dashboard", icon: "fa-gauge-high", href: "internal-dashboard.html" },
  {
    key: "produksi", label: "Proses Produksi", icon: "fa-industry",
    children: [
      { key: "pemesanan-material", label: "Pemesanan Raw Material & Sparepart", href: "internal-pemesanan-material.html" },
      { key: "penggunaan-material", label: "Penggunaan Material Produksi", href: "internal-penggunaan-material.html" },
      { key: "maintenance", label: "Maintenance Alat", href: "internal-maintenance.html" },
      { key: "wip-produksi", label: "WIP Produksi", href: "internal-wip-produksi.html" },
      { key: "finish-good", label: "Finish Good / Gudang", href: "internal-finish-good.html" },
    ],
  },
  { key: "permohonan-mushaf", label: "Permohonan Mushaf", icon: "fa-hand-holding-heart", href: "internal-permohonan-mushaf.html" },
  { key: "tracking-pengiriman", label: "Tracking Pengiriman Mushaf", icon: "fa-truck-fast", href: "internal-tracking-pengiriman.html" },
  { key: "pnbp", label: "PNBP Pihak Ketiga", icon: "fa-file-invoice-dollar", href: "internal-pnbp.html" },
];

function renderInternalShell({ active, title, breadcrumb, user }) {
  const shell = document.getElementById("app-shell");
  if (!shell) return;
  user = user || { name: "Ahmad Fauzi", role: "Admin Produksi" };

  const navHtml = INTERNAL_NAV.map(item => {
    if (item.children) {
      const openGroup = item.children.some(c => c.key === active);
      return `
      <div>
        <div class="sb-section">${item.label}</div>
        ${item.children.map(c => `<a href="${c.href}" class="sb-sub ${c.key===active?'active':''}">${c.label}</a>`).join("")}
      </div>`;
    }
    return `<a href="${item.href}" class="sb-link ${item.key===active?'active':''}"><i class="fa-solid ${item.icon}"></i>${item.label}</a>`;
  }).join("");

  shell.innerHTML = `
    <div id="sidebar-backdrop" class="fixed inset-0 bg-black/40 z-[70] hidden lg:hidden"></div>
    <aside class="app-sidebar" id="app-sidebar">
      <div class="sb-brand">
        ${iconLogo(38)}
        <div class="leading-tight">
          <div class="font-display font-bold text-white text-[14px]">UPQ Internal</div>
          <div class="text-[11px] text-[#8fb1a2]">Sistem Manajemen Data</div>
        </div>
      </div>
      <nav class="py-2 pb-8">${navHtml}</nav>
      <div class="px-4 pb-6 mt-2">
        <a href="index.html" class="sb-link rounded-lg" style="border-left:none"><i class="fa-solid fa-arrow-left-long"></i>Kembali ke Website Publik</a>
      </div>
    </aside>
    <div class="app-main">
      <div class="app-topbar no-print">
        <div class="flex items-center gap-3">
          <button id="sidebar-toggle" class="lg:hidden btn btn-ghost btn-sm px-2"><i class="fa-solid fa-bars"></i></button>
          <div>
            <div class="text-[11px] text-[var(--ink-500)] flex items-center gap-1.5">
              <i class="fa-solid fa-house text-[10px]"></i>
              ${(breadcrumb || ["Internal", title]).join(' <i class="fa-solid fa-chevron-right text-[8px]"></i> ')}
            </div>
            <h1 class="font-display font-extrabold text-lg text-[var(--ink-900)]">${title}</h1>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="hidden md:flex input-icon-wrap w-64">
            <i class="fa-solid fa-magnifying-glass text-sm"></i>
            <input class="input !py-2 text-sm" placeholder="Cari data, nomor dokumen...">
          </div>
          <button class="relative btn btn-ghost btn-sm px-2.5">
            <i class="fa-solid fa-bell"></i>
            <span class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[var(--danger-dot)] border-2 border-white"></span>
          </button>
          <div class="flex items-center gap-2.5 pl-3 border-l border-[var(--line)]">
            <div class="w-9 h-9 rounded-full bg-[var(--brand-600)] text-white flex items-center justify-center font-bold text-sm">${user.name.split(" ").map(s=>s[0]).slice(0,2).join("")}</div>
            <div class="hidden sm:block leading-tight">
              <div class="text-[13px] font-bold text-[var(--ink-900)]">${user.name}</div>
              <div class="text-[11px] text-[var(--ink-500)]">${user.role}</div>
            </div>
            <a href="internal-login.html" class="text-[var(--ink-300)] hover:text-[var(--danger-text)] ml-1" title="Keluar"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
          </div>
        </div>
      </div>
      <main class="app-content" id="page-content"></main>
    </div>
  `;

  const toggle = document.getElementById("sidebar-toggle");
  const sidebar = document.getElementById("app-sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const openSidebar = () => { sidebar.classList.add("open"); backdrop.classList.remove("hidden"); };
  const closeSidebar = () => { sidebar.classList.remove("open"); backdrop.classList.add("hidden"); };
  toggle?.addEventListener("click", () => sidebar.classList.contains("open") ? closeSidebar() : openSidebar());
  backdrop?.addEventListener("click", closeSidebar);
}

/* ---------------- Small UI utilities ---------------- */

function initAccordions(root = document) {
  root.querySelectorAll(".accordion-item").forEach(item => {
    const btn = item.querySelector(".accordion-btn");
    const panel = item.querySelector(".accordion-panel");
    btn?.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      root.querySelectorAll(".accordion-item.open").forEach(o => { if (o !== item) { o.classList.remove("open"); o.querySelector(".accordion-panel").style.maxHeight = null; } });
      item.classList.toggle("open", !isOpen);
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : null;
    });
  });
}

function initTabs(root = document) {
  root.querySelectorAll("[data-tab-group]").forEach(group => {
    const groupName = group.getAttribute("data-tab-group");
    group.querySelectorAll("[data-tab-btn]").forEach(btn => {
      btn.addEventListener("click", () => {
        group.querySelectorAll("[data-tab-btn]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const target = btn.getAttribute("data-tab-btn");
        document.querySelectorAll(`[data-tab-panel][data-tab-group-panel="${groupName}"]`).forEach(p => {
          p.classList.toggle("active", p.getAttribute("data-tab-panel") === target);
        });
      });
    });
  });
}

function openModal(id) {
  document.getElementById(id)?.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id)?.classList.add("hidden");
  document.body.style.overflow = "";
}
document.addEventListener("click", (e) => {
  if (e.target.classList?.contains("modal-backdrop")) {
    e.target.classList.add("hidden");
    document.body.style.overflow = "";
  }
});
