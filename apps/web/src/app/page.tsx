import styles from "./page.module.css";
import CategoryShowcase from "@/components/sections/category-showcase/CategoryShowcase";
import Hero from "@/components/sections/Hero";
import DiscountBanner from "@/components/sections/DiscountBanner";
import PrestigeSection from "@/components/sections/PrestigeSection";
import CorporateSection from "@/components/sections/corporate-section/CorporateSection";
import PremiumSection from "@/components/sections/premium-section/PremiumSection";
import MobileAbout from "@/components/sections/mobile-about/MobileAbout";
import MobileBanner from "@/components/sections/mobile-banner/MobileBanner";
import MobileDiscount from "@/components/sections/mobile-discount/MobileDiscount";

export default function Home() {
  return (
    <>
      {/* Sadece mobilde gözükecek About */}
      <section className={styles.onlyMobile}>
        <MobileAbout />
        <MobileBanner />
      </section>

      {/* Desktop */}
      <Hero />
      <CategoryShowcase />
      <DiscountBanner />
      <MobileDiscount />
      <PrestigeSection />
      <CorporateSection />
      <PremiumSection />
    </>
  );
}
