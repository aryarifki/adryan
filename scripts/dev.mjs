// Dev server: rebuilds with DVE on every request so template/data edits show instantly.
import { createServer } from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { join, extname, dirname, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from './build.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')
const port = Number(process.env.PORT) || 3000

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
}

createServer((req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`)
    let pathname = decodeURIComponent(url.pathname)

    if (pathname.endsWith('/')) {
      // Rebuild only for page requests so assets stay fast.
      build({ quiet: true })
      pathname += 'index.html'
    }

    const filePath = normalize(join(distDir, pathname))
    if (!filePath.startsWith(distDir) || !existsSync(filePath) || statSync(filePath).isDirectory()) {
      res.writeHead(404, { 'content-type': 'text/plain' })
      res.end('Not found')
      return
    }

    res.writeHead(200, {
      'content-type': types[extname(filePath)] || 'application/octet-stream',
      'cache-control': 'no-store'
    })
    res.end(readFileSync(filePath))
  } catch (err) {
    console.error(err)
    res.writeHead(500, { 'content-type': 'text/plain' })
    res.end(String(err))
  }
}).listen(port, () => {
  console.log(`dev server → http://localhost:${port}`)
})
