# Kenvora — site principal

Site vitrine de Kenvora (agence AI Acquisition & Sales Automation), codé en Next.js et **exporté en statique** (aucun serveur requis).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Export statique (`output: "export"`) → hébergeable gratuitement sur Cloudflare Pages, Netlify ou GitHub Pages

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Build de production (statique)

```bash
npm run build
```

Génère le dossier `out/` : le site complet en fichiers HTML/CSS/JS statiques, prêt à déployer n'importe où.

Pour prévisualiser ce build localement :

```bash
npx serve out
```

## Structure du projet

```
src/
  app/            → pages, layout, metadata, sitemap, robots
  components/
    layout/       → Header, Footer
    sections/     → Hero, Pillars, ProcessFlow, Portfolio, Offer, ClientProcess, FinalCta
    ui/           → Button, Logo, Container, BrowserFrame, SectionHeading...
    motion/       → Reveal (animation au scroll)
  lib/
    config.ts     → textes de config, liens go.kenvora.fr, navigation
    utils.ts
scripts/
  gen_assets.py   → génère favicon / icônes / image OG (logo "K" en dégradé bleu/violet)
public/           → favicon, icônes, image OG
```

## Modifier les liens Systeme.io (go.kenvora.fr)

Tous les CTA du site pointent vers des URLs centralisées dans **`src/lib/config.ts`** (`links.audit`, `links.demoFitness`). Dès que le sous-domaine `go.kenvora.fr` est configuré, il suffit de mettre à jour ces deux lignes — aucun autre fichier à toucher.

## Modifier les textes

- Hero, sections : directement dans `src/components/sections/*.tsx`
- Coordonnées, email, année : `src/lib/config.ts` (`siteConfig`)

## Déploiement

Voir [`DEPLOY.md`](./DEPLOY.md) pour la mise en ligne sur Cloudflare Pages (gratuit).
