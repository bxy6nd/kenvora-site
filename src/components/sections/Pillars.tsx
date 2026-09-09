"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Target, Repeat2, Bot } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Acquisition",
    description:
      "Landing pages et funnels pensés pour capter l'attention et convertir un visiteur en prospect qualifié.",
    points: ["Landing pages haute conversion", "Funnels multi-étapes", "Lead magnets ciblés"],
  },
  {
    icon: Repeat2,
    title: "Conversion",
    description:
      "Séquences email et scénarios automatisés qui accompagnent chaque prospect jusqu'à la prise de rendez-vous.",
    points: ["Email marketing automatisé", "Nurturing intelligent", "Prise de RDV en autonomie"],
  },
  {
    icon: Bot,
    title: "Automatisation",
    description:
      "L'IA et les automatisations éliminent les tâches manuelles pour que le système tourne seul, 24/7.",
    points: ["Workflows automatisés", "IA appliquée à la vente", "Zéro suivi manuel"],
  },
];

export function Pillars() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Ce que fait Kenvora"
          title="Un système complet, pas juste des pages."
          description="Kenvora construit l'infrastructure d'acquisition entière — de la première visite jusqu'au rendez-vous obtenu."
        />

        <div className="mt-16 grid w-full gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-[color:var(--color-bg-soft)] p-7 transition-all duration-300 hover:border-white/[0.14] hover:bg-[color:var(--color-bg-elevated)]">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: "linear-gradient(135deg, #4F7CFF, #7C5CFF)" }}
                />
                <div className="relative flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <pillar.icon className="size-5 text-[color:var(--color-blue)]" strokeWidth={1.75} />
                </div>
                <h3 className="relative mt-6 text-[19px] font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="relative mt-2.5 text-[14.5px] leading-relaxed text-[color:var(--color-text-muted)]">
                  {pillar.description}
                </p>
                <ul className="relative mt-6 flex flex-col gap-2.5 border-t border-white/[0.06] pt-5">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-[13.5px] text-[color:var(--color-text-muted)]"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-blue)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
