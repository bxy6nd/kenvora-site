"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { motion } from "framer-motion";
import {
  Globe,
  LayoutTemplate,
  UserPlus,
  MailCheck,
  CalendarCheck,
  Trophy,
} from "lucide-react";

const steps = [
  { icon: Globe, label: "Trafic", detail: "Ads, SEO, social" },
  { icon: LayoutTemplate, label: "Landing", detail: "Page de capture" },
  { icon: UserPlus, label: "Lead", detail: "Prospect qualifié" },
  { icon: MailCheck, label: "Nurturing", detail: "Séquence automatisée" },
  { icon: CalendarCheck, label: "RDV", detail: "Rendez-vous pris" },
  { icon: Trophy, label: "Client", detail: "Vente conclue" },
];

export function ProcessFlow() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <Container className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Comment ça marche"
          title="Du premier clic au client, sans intervention manuelle."
          description="Un parcours automatisé de bout en bout, conçu pour convertir à chaque étape."
        />

        <div className="relative mt-20 w-full">
          {/* Desktop: ligne horizontale connectée */}
          <div className="hidden md:block">
            <div className="relative flex items-start justify-between">
              <div className="absolute left-0 right-0 top-[27px] h-px bg-white/10">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="h-px w-full bg-gradient-to-r from-[color:var(--color-blue)] to-[color:var(--color-violet)]"
                />
              </div>

              {steps.map((step, i) => (
                <Reveal key={step.label} delay={i * 0.09} className="relative z-10 flex flex-col items-center gap-4" y={10}>
                  <div className="flex size-[55px] items-center justify-center rounded-2xl border border-white/10 bg-[color:var(--color-bg-soft)] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
                    <step.icon className="size-5 text-[color:var(--color-blue)]" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <span className="text-[14px] font-semibold text-white">{step.label}</span>
                    <span className="text-[12px] text-[color:var(--color-text-dim)]">{step.detail}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile: liste verticale connectée */}
          <div className="flex flex-col gap-0 md:hidden">
            {steps.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.07} y={10}>
                <div className="relative flex items-start gap-4 pb-8 last:pb-0">
                  {i < steps.length - 1 && (
                    <span className="absolute left-[27px] top-[55px] h-[calc(100%-40px)] w-px bg-white/10" />
                  )}
                  <div className="flex size-[55px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[color:var(--color-bg-soft)]">
                    <step.icon className="size-5 text-[color:var(--color-blue)]" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col justify-center gap-0.5 pt-3">
                    <span className="text-[15px] font-semibold text-white">{step.label}</span>
                    <span className="text-[13px] text-[color:var(--color-text-dim)]">{step.detail}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
