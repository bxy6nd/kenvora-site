"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { links } from "@/lib/config";
import { Check } from "lucide-react";

const included = [
  "Landing page haute conversion",
  "Lead magnet stratégique",
  "Séquence email nurturing",
  "Automatisations complètes",
  "Système de réservation & calendrier",
  "Tracking & suivi des performances",
  "Mise en place de bout en bout",
];

export function Offer() {
  return (
    <section className="relative py-28 md:py-36">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Offre"
          title="Un système d'acquisition automatisé, clé en main."
          description="Tout ce qu'il faut pour transformer votre trafic en rendez-vous qualifiés — sans jongler entre dix outils."
        />

        <Reveal delay={0.15} className="mt-16 w-full max-w-[720px]">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[color:var(--color-bg-soft)] p-8 md:p-12">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-[0.15] blur-[100px]"
              style={{ background: "linear-gradient(135deg, #4F7CFF, #7C5CFF)" }}
            />
            <h3 className="relative text-[22px] font-semibold text-white">
              Système d&apos;acquisition automatisé
            </h3>
            <p className="relative mt-2 text-[14.5px] text-[color:var(--color-text-muted)]">
              Le prix dépend de votre secteur, de vos objectifs et de la
              complexité du système. On en discute directement lors de
              l&apos;audit.
            </p>

            <ul className="relative mt-8 grid gap-3.5 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-[color:var(--color-text-muted)]">
                  <Check className="mt-0.5 size-4 shrink-0 text-[color:var(--color-blue)]" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative mt-9">
              <Button href={links.audit} size="lg" className="w-full sm:w-fit">
                Demander un audit
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
