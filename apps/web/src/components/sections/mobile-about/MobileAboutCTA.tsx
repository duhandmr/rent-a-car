import styles from "./mobile-about.module.scss";

export default function MobileAboutCTA() {
  return (
    <div className={styles.ctaWrap}>
      <button type="button" className={styles.cta}>
        Button
      </button>
    </div>
  );
}
