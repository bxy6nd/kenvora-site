import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export 100% statique : aucune fonction serveur Next.js n'est utilisée
  // (pas d'API routes, pas de server actions, pas d'ISR). Le résultat est
  // un dossier `out/` de fichiers HTML/CSS/JS déployable sur n'importe quel
  // hébergeur statique gratuit (Cloudflare Pages, Netlify, GitHub Pages...).
  output: "export",
  images: {
    // Pas de serveur d'optimisation d'images en export statique.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
