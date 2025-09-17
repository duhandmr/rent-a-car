import styles from "./premium-section.module.scss";

export default function PremiumCTA() {
  return (
    <div className={styles.ctaWrap}>
      <button type="button" className={styles.cta}>
        Button
      </button>
    </div>
  );
}
