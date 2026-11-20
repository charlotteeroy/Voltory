// Lancer avec `npm test` (runner intégré à Node, aucune dépendance).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { redirection, avecHsts, HSTS } from './redirections.js'
import worker from './index.js'

const r = (adresse) => redirection(new URL(adresse))

test('www (https) → domaine nu, chemin et paramètres conservés', () => {
  assert.equal(r('https://www.voltory.fr/'), 'https://voltory.fr/')
  assert.equal(r('https://www.voltory.fr/contact?type=borne#x'), 'https://voltory.fr/contact?type=borne')
})

test('www (http) → https://voltory.fr en une seule redirection', () => {
  assert.equal(r('http://www.voltory.fr/electricite'), 'https://voltory.fr/electricite')
})

test('http://voltory.fr → https', () => {
  assert.equal(r('http://voltory.fr'), 'https://voltory.fr/')
  assert.equal(r('http://voltory.fr/bornes-de-recharge/?a=1&b=2'), 'https://voltory.fr/bornes-de-recharge/?a=1&b=2')
})

test('https://voltory.fr et les autres hôtes ne sont pas redirigés', () => {
  assert.equal(r('https://voltory.fr/'), null)
  assert.equal(r('https://voltory.fr/page-inconnue'), null)
  assert.equal(r('https://voltory.example.workers.dev/'), null)
  assert.equal(r('http://localhost:8787/'), null)
  assert.equal(r('http://autre.voltory.fr/'), null)
})

test('HSTS uniquement sur https://voltory.fr', () => {
  assert.equal(avecHsts(new URL('https://voltory.fr/')), true)
  assert.equal(avecHsts(new URL('http://voltory.fr/')), false)
  assert.equal(avecHsts(new URL('https://www.voltory.fr/')), false)
  assert.equal(avecHsts(new URL('https://voltory.example.workers.dev/')), false)
  assert.equal(HSTS, 'max-age=31536000')
})

// Worker complet, avec de faux fichiers statiques.
const env = {
  ASSETS: {
    fetch: async (request) => {
      const { pathname } = new URL(request.url)
      return pathname === '/'
        ? new Response('accueil', { status: 200, headers: { 'content-type': 'text/html' } })
        : new Response('introuvable', { status: 404, headers: { 'content-type': 'text/html' } })
    },
  },
}
const appel = (adresse) => worker.fetch(new Request(adresse), env)

test('worker : 301 avec Location pour www et http', async () => {
  const www = await appel('https://www.voltory.fr/contact?x=1')
  assert.equal(www.status, 301)
  assert.equal(www.headers.get('location'), 'https://voltory.fr/contact?x=1')

  const http = await appel('http://voltory.fr/')
  assert.equal(http.status, 301)
  assert.equal(http.headers.get('location'), 'https://voltory.fr/')
})

test('worker : https://voltory.fr servi avec HSTS, 404 compris', async () => {
  const accueil = await appel('https://voltory.fr/')
  assert.equal(accueil.status, 200)
  assert.equal(await accueil.text(), 'accueil')
  assert.equal(accueil.headers.get('content-type'), 'text/html')
  assert.equal(accueil.headers.get('strict-transport-security'), HSTS)

  const absente = await appel('https://voltory.fr/page-inconnue')
  assert.equal(absente.status, 404)
  assert.equal(absente.headers.get('strict-transport-security'), HSTS)
})

test('worker : autres hôtes servis tels quels, sans HSTS', async () => {
  const dev = await appel('http://localhost:8787/')
  assert.equal(dev.status, 200)
  assert.equal(dev.headers.get('strict-transport-security'), null)

  const workersDev = await appel('https://voltory.example.workers.dev/page-inconnue')
  assert.equal(workersDev.status, 404)
  assert.equal(workersDev.headers.get('strict-transport-security'), null)
})
