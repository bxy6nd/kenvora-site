"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  {
    n: "01",
    title: "Audit",
    description: "Analyse de votre acquisition actuelle et identification des leviers prioritaires.",
  },
  {
    n: "02",
    title: "Stratégie",
    description: "Définition du système sur mesure : parcours, offre, automatisations nécessaires.",
  },
  {
    n: "03",
    title: "Build",
    description: "Construction complète du funnel, des automatisations et des séquences.",
  },
  {
    n: "04",
    title: "Lancement",
    description: "Mise en ligne, tests et connexion du trafic vers le système.",
  },
  {
    n: "05",
    title: "Optimisation",
    description: "Suivi des performances et ajustements continus pour améliorer la conversion.",
  },
];

export function ClientProcess() {
  return (
    <section id="process" className="relative py-28 md:py-36">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Process"
          title="Un déroulé clair, du premier appel au système en ligne."
        />

        <div className="mt-16 grid w-full gap-4 md:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="relative flex h-full flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[color:var(--color-bg-soft)] p-6">
                <span className="text-[13px] font-semibold text-[color:var(--color-text-dim)]">
                  {step.n}
                </span>
                <h3 className="text-[16px] font-semibold text-white">{step.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-[color:var(--color-text-muted)]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
