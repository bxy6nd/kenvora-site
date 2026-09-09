// Configuration centrale du site Kenvora.
// Les liens go.kenvora.fr sont des placeholders propres tant que le sous-domaine
// n'est pas connecté à Systeme.io. Il suffit de mettre à jour les valeurs ici
// pour que tout le site pointe vers les bonnes URLs (aucune casse ailleurs).

export const siteConfig = {
  name: "Kenvora",
  tagline: "AI Acquisition & Sales Automation",
  description:
    "Kenvora conçoit des systèmes d'acquisition et de vente automatisés qui combinent stratégie, conversion et intelligence artificielle.",
  url: "https://www.kenvora.fr",
  email: "antoine@kenvora.fr",
  domain: "www.kenvora.fr",
  year: new Date().getFullYear(),
};

// Centralise tous les CTA vers Systeme.io (go.kenvora.fr).
// À remplacer par les vraies URLs une fois le sous-domaine configuré.
export const links = {
  audit: "https://go.kenvora.fr/audit",
  demoFitness: "https://go.kenvora.fr/demo-fitness",
  contact: `mailto:${siteConfig.email}`,
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
