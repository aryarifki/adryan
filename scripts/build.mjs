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

// Compile + validasi template
const homeSource = readFileSync(join(viewsDir, 'pages', 'home.dve'), 'utf8')
const home = dve.compile(homeSource, 'home')
dve.validate(home, 'home')

const privacySource = readFileSync(join(viewsDir, 'pages', 'privacy.dve'), 'utf8')
const privacy = dve.compile(privacySource, 'privacy')
dve.validate(privacy, 'privacy')

export function build({ quiet = false } = {}) {
  // Bersihkan dan inisialisasi ulang direktori dist/
  rmSync(distDir, { recursive: true, force: true })
  mkdirSync(distDir, { recursive: true })

  const t = data.i18n.en || data.i18n
  const sharedContext = {
    site: data.site,
    socials: data.socials,
    projects: data.projects,
    telemetry: data.telemetry,
    categories: data.categories,
    bento: data.bento,
    values: data.values,
    kseiMutations: data.kseiMutations,
    insights: data.insights,
    newsletter: data.newsletter,
    skills: data.skills,
    experience: data.experience,
    lang: 'id',
    base: '/'
  }

  // 1. Render Beranda (home) -> dist/index.html
  const homeHtml = dve.render(
    home,
    {
      ...sharedContext,
      t,
      canonical: `${data.site.url}/`
    },
    'home:id'
  )

  writeFileSync(join(distDir, 'index.html'), homeHtml)
  if (!quiet) console.log(`✓ index.html (${homeHtml.length.toLocaleString()} chars)`)

  // 2. Render Kebijakan Privasi -> dist/privacy/index.html & dist/privacy.html
  const privacyT = {
    ...t,
    title: `Kebijakan Privasi (Privacy Policy) — ${data.site.name}`,
    description: `Kebijakan Privasi resmi platform avenia.id (Investowl) — transparansi telemetri, komitmen privasi pengguna, dan kepatuhan UU Pelindungan Data Pribadi (UU PDP).`
  }

  const privacyHtml = dve.render(
    privacy,
    {
      ...sharedContext,
      t: privacyT,
      canonical: `${data.site.url}/privacy/`
    },
    'privacy:id'
  )

  mkdirSync(join(distDir, 'privacy'), { recursive: true })
  writeFileSync(join(distDir, 'privacy', 'index.html'), privacyHtml)
  writeFileSync(join(distDir, 'privacy.html'), privacyHtml)

  // Alias bahasa Indonesia: dist/kebijakan-privasi/index.html & dist/kebijakan-privasi.html
  mkdirSync(join(distDir, 'kebijakan-privasi'), { recursive: true })
  writeFileSync(join(distDir, 'kebijakan-privasi', 'index.html'), privacyHtml)
  writeFileSync(join(distDir, 'kebijakan-privasi.html'), privacyHtml)

  if (!quiet) {
    console.log(`✓ privacy/index.html & privacy.html (${privacyHtml.length.toLocaleString()} chars)`)
    console.log(`✓ kebijakan-privasi/index.html & kebijakan-privasi.html`)
  }

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
