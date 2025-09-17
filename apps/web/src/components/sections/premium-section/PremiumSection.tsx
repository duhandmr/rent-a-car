import WhatsappContent from "@/components/WhatsappContent";
import styles from "./premium-section.module.scss";
import PremiumCarsRow from "./PremiumCarsRow";
import PremiumCTA from "./PremiumCTA";
import PremiumDescription from "./PremiumDescription";
import PremiumHeading from "./PremiumHeading";

export default function PremiumSection() {
  return (
    <section className={styles.wrap} aria-label="Premium">
      <div className="container">
        <PremiumHeading />
        <PremiumCarsRow />
        <PremiumDescription />
        <PremiumCTA />
        <WhatsappContent />
      </div>
    </section>
  );
}
