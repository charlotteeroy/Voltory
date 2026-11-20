// Worker exécuté avant les fichiers statiques (assets.run_worker_first, cf. wrangler.jsonc) :
// redirige www et http vers https://voltory.fr, ajoute HSTS, puis sert dist/ sans y toucher.
import { redirection, avecHsts, HSTS } from './redirections.js'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    const cible = redirection(url)
    if (cible) return Response.redirect(cible, 301)

    const response = await env.ASSETS.fetch(request)
    if (!avecHsts(url)) return response

    // Les en-têtes d'une réponse reçue sont figés : on la recopie pour en ajouter un.
    const copie = new Response(response.body, response)
    copie.headers.set('Strict-Transport-Security', HSTS)
    return copie
  },
}
