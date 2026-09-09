"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SectionGlow } from "@/components/ui/BackgroundFx";
import { links } from "@/lib/config";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <SectionGlow className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-[720px] text-balance text-[32px] font-semibold leading-[1.2] tracking-tight text-white sm:text-[42px] md:text-[48px]">
            Votre acquisition mérite mieux qu&apos;un lien en bio.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-[480px] text-balance text-[16px] leading-relaxed text-[color:var(--color-text-muted)] md:text-[17px]">
            Construisons un système qui travaille pour vous, 24 heures sur 24.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-9">
          <Button href={links.audit} size="lg">
            Demander un audit
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
