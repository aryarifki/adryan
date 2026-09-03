// Static site build: renders views/*.dve with DVE into dist/ using data/site.json.
import DVE from '@neabyte/dve'
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const viewsDir = join(root, 'views')
const publicDir = join(root, 'public')
const distDir = join(root, 'dist')

const data = JSON.parse(readFileSync(join(root, 'data', 'site.json'), 'utf8'))

const dve = new DVE({
  resolveInclude: (path) => readFileSync(join(viewsDir, path), 'utf8'),
  onEmit: (event) => {
    if (event.eventKind === 'view:error') {
      console.error(`[dve] ${event.eventName}:`, event.eventError)
    }
  }
})

// Compile + validasi template sekali
const homeSource = readFileSync(join(viewsDir, 'pages', 'home.dve'), 'utf8')
const home = dve.compile(homeSource, 'home')
dve.validate(home, 'home')

export function build({ quiet = false } = {}) {
  // Bersihkan dan inisialisasi ulang direktori dist/
  rmSync(distDir, { recursive: true, force: true })
  mkdirSync(distDir, { recursive: true })

  // Render langsung ke root dist/index.html dengan bahasa Inggris
  const t = data.i18n.en || data.i18n
  const html = dve.render(
    home,
    {
      site: data.site,
      socials: data.socials,
      projects: data.projects,
      skills: data.skills,
      experience: data.experience,
      t,
      lang: 'en',
      base: '/',
      canonical: `${data.site.url}/`
    },
    'home:en'
  )

  writeFileSync(join(distDir, 'index.html'), html)
  if (!quiet) console.log(`✓ index.html (${html.length.toLocaleString()} chars)`)

  // Salin file aset statis & berkas wajib GitHub Pages
  if (existsSync(publicDir)) {
    cpSync(publicDir, distDir, { recursive: true })
  }

  const cname = join(root, 'CNAME')
  if (existsSync(cname)) {
    cpSync(cname, join(distDir, 'CNAME'))
  }

  // Mencegah Jekyll menimpa atau mengabaikan folder aset
  writeFileSync(join(distDir, '.nojekyll'), '')

  if (!quiet) console.log('✓ assets copied → dist/')
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  build()
}
