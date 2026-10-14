# avenia.my.id

Landing page pribadi, dirender statis dengan [DVE (Deserve View Engine)](https://github.com/NeaByteLab/DVE) dan di-deploy ke GitHub Pages.

## Struktur

```
data/site.json          # Semua konten (ID + EN) — edit di sini
views/layouts/main.dve  # Layout HTML (head, header, footer)
views/partials/*.dve    # Header & footer
views/pages/home.dve    # Halaman utama
public/assets/          # CSS, JS, gambar
scripts/build.mjs       # Render DVE → dist/ (ID di /, EN di /en/)
scripts/dev.mjs         # Dev server lokal (rebuild tiap request)
```

## Perintah

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # hasil di dist/
```

## Deploy ke GitHub Pages

File workflow disediakan di `setup/github-pages-deploy.yml` (v0 tidak punya izin untuk menulis langsung ke `.github/workflows/`). Aktifkan sekali saja:

1. Salin `setup/github-pages-deploy.yml` ke `.github/workflows/deploy.yml` dan commit.
2. Di repo: Settings → Pages → Source, pilih **GitHub Actions**.
3. Setiap push ke `main` akan menjalankan `npm run build` dan mempublikasikan `dist/` (termasuk `CNAME` untuk avenia.my.id).

## Mengubah konten

Semua teks, proyek, skill, dan pengalaman ada di `data/site.json`. Bagian `i18n.id` dan `i18n.en` berisi teks UI untuk masing-masing bahasa; item proyek/pengalaman punya field `id` dan `en` sendiri.

### Platform & Showcase Ekosistem
- **The Invest Owl**: Platform riset pasar modal & smart-money flow BEI.
- **O-Crawler**: High-speed legal data ingestion engine (MA, MK, Peraturan).
- **OWLEXIA Legal AI**: Agen kecerdasan hukum otonom hierarki regulasi Indonesia.
- **Avenia Workers (OSX)**: Infrastruktur serverless edge proxy bertenaga Cloudflare Workers terhubung ke [Telegram Bot (@avaworkers_bot)](https://t.me/avaworkers_bot) dan open source di [GitHub aryarifki/OSX](https://github.com/aryarifki/OSX).
- **SMtracker**: Pipeline data kuantitatif & Wyckoff bandarmology engine.

