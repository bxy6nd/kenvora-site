import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { ProcessFlow } from "@/components/sections/ProcessFlow";
import { Portfolio } from "@/components/sections/Portfolio";
import { Offer } from "@/components/sections/Offer";
import { ClientProcess } from "@/components/sections/ClientProcess";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <ProcessFlow />
      <Portfolio />
      <Offer />
      <ClientProcess />
      <FinalCta />
    </>
  );
}
