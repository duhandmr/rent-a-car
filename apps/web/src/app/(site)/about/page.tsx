import type { Metadata } from "next";
import Image from "next/image";

import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import WhatsappContent from "@/components/WhatsappContent";

import heroStyles from "@/components/about/about-hero.module.scss";
import pageStyles from "./about-page.module.scss";

export const metadata: Metadata = {
  title: "About | Rent-a-Car",
  description: "About our rent-a-car company, values and services.",
};

export default function AboutPage() {
  return (
    <section className={pageStyles.wrap} aria-label="About page">
      {/* Dekoratif eller (absolute) */}
      <Image
        src="/about-page/hand-top.png"
        alt=""
        width={780}
        height={440}
        className={heroStyles.handTop}
        priority
      />
      <Image
        src="/about-page/hand-bottom.png"
        alt=""
        width={845}
        height={330}
        className={heroStyles.handBottom}
      />

      {/* İçerik */}
      <AboutHero />
      <AboutContent />

      {/* EN ALTA sabitlenecek alan */}
      <div className={pageStyles.bottomStick}>
        <WhatsappContent />
      </div>
    </section>
  );
}
