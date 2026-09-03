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

// Compile + validate once; render per locale.
const homeSource = readFileSync(join(viewsDir, 'pages', 'home.dve'), 'utf8')
const home = dve.compile(homeSource, 'home')
dve.validate(home, 'home')

const locales = [
  { code: 'id', outDir: '', base: '/' },
  { code: 'en', outDir: 'en', base: '/en/' }
]

export function build({ quiet = false } = {}) {
  rmSync(distDir, { recursive: true, force: true })
  mkdirSync(distDir, { recursive: true })

  for (const locale of locales) {
    const t = data.i18n[locale.code]
    const html = dve.render(
      home,
      {
        site: data.site,
        socials: data.socials,
        projects: data.projects,
        skills: data.skills,
        experience: data.experience,
        t,
        base: locale.base,
        canonical: `${data.site.url}${locale.base}`
      },
      `home:${locale.code}`
    )
    const outDir = join(distDir, locale.outDir)
    mkdirSync(outDir, { recursive: true })
    writeFileSync(join(outDir, 'index.html'), html)
    if (!quiet) console.log(`✓ ${locale.outDir || '.'}/index.html (${html.length.toLocaleString()} chars)`)
  }

  // Static assets + GitHub Pages files.
  cpSync(publicDir, distDir, { recursive: true })
  const cname = join(root, 'CNAME')
  if (existsSync(cname)) cpSync(cname, join(distDir, 'CNAME'))
  writeFileSync(join(distDir, '.nojekyll'), '')

  if (!quiet) console.log('✓ assets copied → dist/')
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  build()
}
