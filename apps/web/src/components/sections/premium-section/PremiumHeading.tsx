import styles from "./premium-section.module.scss";

export default function PremiumHeading() {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>PREMIUM</h2>
      <ul className={styles.keywords} aria-label="selling points">
        <li>Luxury</li>
        <li>Comfort</li>
        <li>Privilege</li>
      </ul>
    </header>
  );
}
