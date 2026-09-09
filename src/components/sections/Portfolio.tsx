"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { links } from "@/lib/config";
import {
  FileText,
  Gift,
  Mail,
  Workflow,
  CalendarClock,
  Video,
  LogOut,
} from "lucide-react";

const architecture = [
  { icon: FileText, label: "Page de capture", detail: "Optimisée pour la conversion" },
  { icon: Gift, label: "Lead magnet", detail: "Ressource gratuite ciblée" },
  { icon: Mail, label: "Séquence email", detail: "Nurturing automatisé" },
  { icon: Workflow, label: "Automatisations", detail: "Scénarios déclenchés" },
  { icon: CalendarClock, label: "Page de réservation", detail: "Calendrier intégré" },
  { icon: Video, label: "Google Meet", detail: "Visio générée automatiquement" },
  { icon: LogOut, label: "Sortie de campagne", detail: "Après prise de RDV" },
];

function WireframeBlock() {
  return (
    <div className="flex flex-col gap-3 p-5">
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-16 rounded bg-white/10" />
        <div className="flex gap-1.5">
          <div className="h-2.5 w-10 rounded bg-white/[0.06]" />
          <div className="h-2.5 w-10 rounded bg-white/[0.06]" />
        </div>
      </div>
      <div className="mt-3 h-3 w-3/4 rounded bg-white/15" />
      <div className="h-3 w-1/2 rounded bg-white/15" />
      <div className="mt-2 h-2 w-full rounded bg-white/[0.06]" />
      <div className="h-2 w-5/6 rounded bg-white/[0.06]" />
      <div
        className="mt-4 h-9 w-36 rounded-full"
        style={{ background: "linear-gradient(120deg,#4F7CFF,#7C5CFF)" }}
      />
      <div className="mt-5 grid grid-cols-3 gap-2.5">
        <div className="h-16 rounded-lg bg-white/[0.04]" />
        <div className="h-16 rounded-lg bg-white/[0.04]" />
        <div className="h-16 rounded-lg bg-white/[0.04]" />
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 md:py-36">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Portfolio"
          title="Demo Funnel #01 — Coach Fitness Premium"
          description="Un projet portfolio conçu par Kenvora pour démontrer l'architecture complète d'un système d'acquisition automatisé."
        />

        <Reveal delay={0.1} className="mt-8">
          <span className="inline-flex items-center rounded-full border border-[color:var(--color-blue)]/25 bg-[color:var(--color-blue)]/10 px-4 py-1.5 text-[12.5px] font-medium text-[color:var(--color-blue)]">
            Démonstration portfolio — pas un client réel
          </span>
        </Reveal>

        <div className="mt-16 grid w-full items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-5">
              <BrowserFrame label="coach-fitness-premium.demo">
                <WireframeBlock />
              </BrowserFrame>
              <p className="px-1 text-[13px] text-[color:var(--color-text-dim)]">
                Aperçu structurel du funnel. Captures d&apos;écran réelles à
                intégrer prochainement.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="flex flex-col gap-8">
            <div>
              <h3 className="text-[19px] font-semibold text-white">Objectif</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-[color:var(--color-text-muted)]">
                Démontrer un système complet capable de transformer un
                visiteur en rendez-vous qualifié, sans aucune action
                manuelle — de la capture du lead jusqu&apos;à la sortie
                automatique de la campagne après réservation.
              </p>
            </div>

            <div>
              <h3 className="text-[19px] font-semibold text-white">Architecture</h3>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {architecture.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[color:var(--color-bg-soft)] px-3.5 py-3"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                      <item.icon className="size-4 text-[color:var(--color-blue)]" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium text-white">{item.label}</span>
                      <span className="text-[11.5px] text-[color:var(--color-text-dim)]">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button href={links.demoFitness} size="md" className="w-fit">
              Découvrir le système
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
