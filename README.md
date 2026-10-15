# Avenia.id — Progressive Engagement Portfolio Platform

Landing page portofolio personal & platform jurnalisme data independen untuk domain [avenia.my.id](https://avenia.my.id), dikompilasi statis dengan [DVE (Deserve View Engine)](https://github.com/NeaByteLab/DVE) dan dideploy ke GitHub Pages via GitHub Actions.

Dirancang dengan prinsip **Progressive Engagement**:
- **80% Tema Terang**: Palet putih lembut & slate alabaster dengan tipografi kontras tinggi (WCAG AA/AAA) dan ruang napas luas.
- **2 Immersion Zones**: Aksen gelap pekat (*Deep Obsidian Navy* `#0B0F19` pada *Architecture Telemetry Radar* dan *Deep Charcoal* `#0D1117` pada *Data Dispatch CTA*).
- **Zero Client-Side Framework**: 100% pre-rendered HTML statis pada build time, didukung Vanilla JS super-ringan (< 2 KB gzip) untuk filter interaktif dan navigasi responsif.

---

## 📁 Struktur Direktori

```
adryan/
├── data/
│   └── site.json          # Data terpusat: metadata situs, profil, 6 proyek, telemetri, insights
├── views/
│   ├── layouts/
│   │   └── main.dve       # HTML shell: head, meta SEO, JSON-LD Schema, script injection
│   ├── partials/
│   │   ├── header.dve     # Header sticky, desktop nav, & mobile drawer hamburger
│   │   └── footer.dve     # Footer multi-kolom, link sosial, & badge DVE
│   └── pages/
│       └── home.dve       # Halaman utama (Hero, Bento, Telemetri, Filter Proyek, Insights, Bio)
├── public/
│   ├── assets/
│   │   ├── style.css      # CSS tokenized: tema terang, immersion zones, responsif (360px–1440px)
│   │   ├── main.js        # Vanilla JS: filter kategori, mobile drawer, copy email, feedback
│   │   ├── avatar.png     # Foto profil pengembang
│   │   ├── og.png         # OpenGraph social share card (1200x630)
│   │   └── favicon.svg    # Vector icon
│   └── CNAME              # Domain custom: avenia.my.id
├── scripts/
│   ├── build.mjs          # Kompiler DVE → dist/index.html + copy assets statis
│   └── dev.mjs            # Local dev server (re-compile otomatis saat request)
├── dist/                  # Output build siap saji untuk GitHub Pages
└── package.json           # Node engine & dependency (@neabyte/dve)
```

---

## 🚀 Perintah Operasional

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Lokal (Development)
```bash
npm run dev
# Server aktif di: http://localhost:3000
```
Server development akan otomatis mengompilasi ulang template DVE dan berkas `data/site.json` pada setiap permintaan halaman.

### 3. Membangun Berkas Statis (Production Build)
```bash
npm run build
```
Hasil kompilasi akan diletakkan di direktori `dist/` (termasuk `dist/index.html`, `dist/assets/`, dan file `CNAME`).

---

## 🛠️ Panduan Menambah atau Mengganti Proyek

Semua data proyek disimpan secara terstruktur di dalam file [`data/site.json`](file:///root/adryan/data/site.json) pada bagian array `"projects"`.

### Format Objek Proyek:
```json
{
  "name": "Nama Proyek",
  "slug": "nama-slug",
  "category": "quant",             // Pilihan: "quant" | "legal" | "platform"
  "isDeployed": true,              // true jika sudah live publik, false jika masih source code
  "liveUrl": "https://...",        // URL aplikasi live
  "repoUrl": "https://github.com/...", // URL repositori GitHub
  "targetUrl": "https://...",      // URL tujuan klik utama kartu
  "stack": ["Next.js 16", "FastAPI", "PostgreSQL"],
  "year": "2026",
  "badge": "Flagship Platform",
  "featured": true,
  "tag": "Pasar Modal & BEI",
  "summary": "Deskripsi singkat 1-2 kalimat mengenai fungsionalitas dan nilai rekayasa proyek.",
  "en": "English summary description for international visitors."
}
```

### Menyesuaikan Kategori Filter:
Jika Anda menambahkan kategori baru, perbarui juga array `"categories"` di `data/site.json`:
```json
"categories": [
  { "key": "all", "label": "Semua Proyek", "count": 6 },
  { "key": "quant", "label": "Pasar Modal & Quant", "count": 2 },
  { "key": "legal", "label": "Legal AI & Ingestion", "count": 2 },
  { "key": "platform", "label": "Platform & DevOps", "count": 2 }
]
```
Setelah mengedit `data/site.json`, jalankan `npm run build` untuk menerapkan perubahan ke `dist/`.

---

## 🌐 Deploy ke GitHub Pages

Deploy otomatis telah dikonfigurasi melalui GitHub Actions:
1. Pastikan repo GitHub Anda diatur: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Setiap commit yang di-push ke branch `main` akan memicu workflow build otomatis yang menjalankan `npm run build` dan mempublikasikan folder `dist/` ke domain `avenia.my.id`.
