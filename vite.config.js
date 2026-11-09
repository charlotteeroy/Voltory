import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ROUTES, NOT_FOUND } from './src/lib/routes.js'

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Une page HTML par adresse (/electricite → electricite.html, avec son titre),
 * plus 404.html pour les adresses inconnues. Cloudflare sert ainsi chaque page
 * connue en 200 et toute autre adresse avec un vrai statut 404 (cf. wrangler.jsonc).
 */
function pagesPerRoute() {
  let outDir
  return {
    name: 'voltory-pages-per-route',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const shell = readFileSync(resolve(outDir, 'index.html'), 'utf8')
      const withTitle = (title, extraHead = '') =>
        shell.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>${extraHead}`)
      for (const { path, title } of Object.values(ROUTES)) {
        const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`
        writeFileSync(resolve(outDir, file), withTitle(title))
      }
      writeFileSync(
        resolve(outDir, '404.html'),
        withTitle(NOT_FOUND.title, '\n    <meta name="robots" content="noindex" />')
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pagesPerRoute()],
})
