# Déploiement — Cloudflare Pages (gratuit)

Le site est un export 100% statique (`out/`). Aucun serveur, aucune fonction backend : hébergement gratuit sur Cloudflare Pages, usage commercial inclus dans leur offre gratuite.

## Option A — Le plus simple : Git + Cloudflare Pages (recommandé)

Déploiement continu : chaque `git push` republie le site automatiquement.

1. Créer un dépôt GitHub (ex. `kenvora-site`) et y pousser ce projet :
   ```bash
   git remote add origin <url-de-ton-repo-github>
   git push -u origin main
   ```
2. Sur [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Sélectionner le repo `kenvora-site`.
4. Configuration du build :
   - **Framework preset** : `Next.js (Static HTML Export)`
   - **Build command** : `npm run build`
   - **Build output directory** : `out`
5. Déployer. Cloudflare fournit une URL `*.pages.dev` immédiatement.
6. Domaine perso : dans le projet Pages → **Custom domains** → ajouter `www.kenvora.fr` (et `kenvora.fr` avec redirection). Si le domaine est déjà sur Cloudflare, c'est automatique ; sinon Cloudflare donne les enregistrements DNS à ajouter chez le registrar actuel.

## Option B — Sans GitHub : déploiement direct en une commande

Utile pour un premier déploiement immédiat, sans configurer de dépôt.

```bash
npm run build
npx wrangler pages deploy out --project-name=kenvora
```

La première exécution demande une connexion au compte Cloudflare (ouvre le navigateur). Chaque nouvelle exécution de cette commande republie le site — mais il faut la relancer manuellement à chaque changement (pas d'auto-déploiement comme avec l'option A).

## Domaine `go.kenvora.fr` (Systeme.io)

Le sous-domaine `go.kenvora.fr` est indépendant du site principal — il doit continuer de pointer vers Systeme.io (CNAME fourni par Systeme.io dans leurs paramètres de domaine). Ne pas toucher à cet enregistrement DNS en configurant `www.kenvora.fr` sur Cloudflare Pages.

## Coût

- Cloudflare Pages : gratuit (bande passante illimitée, usage commercial autorisé).
- Domaine : coût annuel habituel du registrar (déjà existant si `go.kenvora.fr` fonctionne).
- Aucun serveur, aucun abonnement supplémentaire nécessaire.
