import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { nav, siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/[0.06] py-14">
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-[320px] text-[14px] leading-relaxed text-[color:var(--color-text-dim)]">
              Systèmes d&apos;acquisition et de vente automatisés, assistés par IA.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex flex-col gap-2.5">
              <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-[color:var(--color-text-dim)]">
                Navigation
              </span>
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[14px] text-[color:var(--color-text-muted)] transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-[color:var(--color-text-dim)]">
                Contact
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[14px] text-[color:var(--color-text-muted)] transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
              <span className="text-[14px] text-[color:var(--color-text-muted)]">
                {siteConfig.domain}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-[13px] text-[color:var(--color-text-dim)] sm:flex-row sm:items-center">
          <span>
            © {siteConfig.year} {siteConfig.name}. Tous droits réservés.
          </span>
          <span>Conçu et développé sur mesure.</span>
        </div>
      </Container>
    </footer>
  );
}
