# Avenia.id — Quantitative Market Intelligence

Landing page statis untuk [avenia.my.id](https://avenia.my.id): riset kuantitatif kripto dan ekuitas Indonesia dengan data yang bisa diaudit. Dibangun ulang dari nol dengan **Astro 6**, **Tailwind CSS 4**, dan tema gelap beraksen peach `#FFB879`.

Repo ini menggantikan scaffold DVE lama. Seluruh halaman di-prerender saat build; tidak ada framework client-side, tidak ada runtime server.

---

## Stack

| Bagian | Teknologi |
| --- | --- |
| Static site | Astro 6 (`output: 'static'`) |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` |
| Tipografi | Plus Jakarta Sans + JetBrains Mono (Google Fonts) |
| Visual | CSS/SVG murni — koin 3D, chart dashboard, mockup ponsel, QR |
| Deploy | GitHub Actions → GitHub Pages (`withastro/action@v3`) |

Tidak ada dependency UI atau animation library. Semua ikon adalah SVG inline di `src/components/Icon.astro`.

---

## Menjalankan lokal

Prasyarat: **Node.js >= 22.12** dan npm.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output ke dist/
npm run preview   # cek hasil build secara lokal
npm run check     # type-check Astro/TypeScript
```

> `vite` dipin di `^7.3.7`. Tailwind 4.2 tidak kompatibel dengan Vite 8/rolldown
> (`Missing field 'tsconfigPaths'`), jadi jangan naikkan Vite tanpa menguji build.

---

## Struktur

```
adryan/
├── src/
│   ├── pages/index.astro          # komposisi halaman
│   ├── layouts/Layout.astro       # <head>, SEO, JSON-LD, font, reveal script
│   ├── components/
│   │   ├── Navbar.astro           # nav sticky + menu mobile
│   │   ├── Hero.astro             # headline, CTA, komposisi koin & kartu
│   │   ├── StatsBar.astro         # metrik platform
│   │   ├── Features.astro         # tiga pilar metodologi
│   │   ├── DashboardPreview.astro # mockup dashboard (HTML/CSS/SVG)
│   │   ├── MobileApp.astro        # dua mockup ponsel + QR
│   │   ├── Testimonials.astro     # placeholder launch
│   │   ├── CtaBanner.astro
│   │   ├── Footer.astro
│   │   ├── Logo.astro, Icon.astro, Sparkline.astro
│   ├── data/site.ts               # SEMUA konten, link, metrik, nav
│   └── styles/global.css          # token tema, glow, koin, ponsel, animasi
├── public/
│   ├── assets/                    # avatar, logo, og.png, qr.svg, favicon
│   └── CNAME                      # avenia.my.id
├── astro.config.mjs
└── .github/workflows/deploy.yml
```

---

## Mengubah konten

Hampir semua teks dan link berada di **`src/data/site.ts`**:

- `site` — nama, domain, URL produk, Telegram, GitHub.
- `navigation` — item navbar dan dropdown.
- `stats` — tiga metrik di bawah hero.
- `features` — tiga kartu pilar.
- `dashboardAssets`, `dashboardHistory` — isi mockup dashboard.
- `testimonials` — kutipan dan profil.
- `footerColumns`, `socials`.

Teks hero, judul section, dan CTA ada langsung di komponen masing-masing agar mudah diubah secara visual.

### Peringatan: testimoni masih placeholder

Kutipan di `testimonials` **belum terverifikasi** dan sengaja diberi label
"Launch preview — endorsements are placeholder copy pending verification" di halaman.
Ganti dengan endorsemen nyata (atau hapus section-nya) sebelum mempromosikan situs secara publik.
Jangan mengarang nama, jabatan, atau kutipan.

### Angka dan klaim

Metrik (`890+` sekuritas, `2,400+` putusan, `< 0.5ms` cache) berasal dari data internal
yang sudah ada di situs lama. Figure di mockup dashboard diberi label ilustratif.
Jika angka berubah, perbarui `stats` dan pastikan sumbernya tetap bisa ditunjukkan.

---

## Palet dan token desain

Didefinisikan di `src/styles/global.css` melalui `@theme`:

| Token | Nilai | Pemakaian |
| --- | --- | --- |
| `ink-900` | `#0E0C15` | background utama |
| `ink-800` | `#13111C` | surface / kartu |
| `ink-950` | `#08060D` | teks di atas aksen |
| `peach-300` | `#FFD0A6` | aksen terang |
| `peach-400` | `#FFB879` | aksen utama |
| `peach-500` | `#FF9A44` | gradient / hover |

Efek ambient memakai radial gradient peach dan violet, glassmorphism
(`.glass`, `.glass-strong`), serta grid blueprint tipis di background.
Animasi dimatikan otomatis saat `prefers-reduced-motion: reduce`.

---

## Deploy ke GitHub Pages

Workflow `.github/workflows/deploy.yml` berjalan pada push ke `main`:

1. `withastro/action@v3` melakukan install, build, dan upload artifact.
2. `actions/deploy-pages@v4` mempublikasikan ke GitHub Pages.

Di repo GitHub, set **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Custom domain `avenia.my.id` dibaca dari `public/CNAME` (ikut tersalin ke `dist/`).

DNS yang dipakai:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | IP GitHub Pages (4 record) |
| CNAME | `www` | `aryarifki.github.io` |

`site` dan `base` di `astro.config.mjs` sudah diset ke `https://avenia.my.id` dan `/`.
Jika suatu saat dipindah ke sub-path, ubah keduanya bersamaan.

---

## Catatan aset

- `public/assets/og.png` — kartu OpenGraph 1200×630, dibuat khusus untuk tema ini.
- `public/assets/qr.svg` — QR ke `https://avenia.my.id`, dipakai di section mobile.
- `public/assets/favicon.svg` — mark "A" peach.
- `avatar.png` dan `investowl-logo-v2.png` dipertahankan dari situs sebelumnya.
- Aset berat DVE (`resources/`, `hero-canvas.js`, `main.js`, `style.css`) sudah dihapus.

---

## Lisensi

MIT. Konten riset, nama, dan merek Avenia tetap milik pemiliknya.
