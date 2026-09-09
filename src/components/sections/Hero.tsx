"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/ui/BackgroundFx";
import { links } from "@/lib/config";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-40 md:pb-36 md:pt-48">
      <HeroBackground />

      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[13px] font-medium text-[color:var(--color-text-muted)]"
        >
          <Sparkles className="size-3.5 text-[color:var(--color-blue)]" />
          Agence d&apos;acquisition &amp; de vente automatisée par IA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[880px] text-balance text-[40px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[56px] md:text-[68px]"
        >
          Transformez votre trafic en prospects.
          <br />
          <span className="text-gradient">Automatisez le reste.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-[600px] text-balance text-[17px] leading-relaxed text-[color:var(--color-text-muted)] md:text-[19px]"
        >
          Kenvora conçoit des systèmes d&apos;acquisition et de vente
          automatisés qui combinent stratégie, conversion et intelligence
          artificielle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-3.5 sm:flex-row"
        >
          <Button href={links.audit} size="lg">
            Demander un audit
          </Button>
          <Button href="#portfolio" variant="secondary" size="lg" icon={false}>
            Voir le portfolio
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[13px] text-[color:var(--color-text-dim)]"
        >
          <span>Landing pages</span>
          <span className="h-1 w-1 rounded-full bg-white/15" />
          <span>Funnels</span>
          <span className="h-1 w-1 rounded-full bg-white/15" />
          <span>Email marketing</span>
          <span className="h-1 w-1 rounded-full bg-white/15" />
          <span>Automatisations</span>
          <span className="h-1 w-1 rounded-full bg-white/15" />
          <span>IA appliquée aux ventes</span>
        </motion.div>
      </Container>
    </section>
  );
}
