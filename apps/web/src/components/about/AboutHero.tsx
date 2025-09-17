import styles from "./about-hero.module.scss";

export default function AboutHero() {
  return (
    <section aria-label="About hero">
      <div className="container">
        <h1 className={styles.title}>
          RENT <span className={styles.thin}>A</span> CAR
        </h1>
      </div>
    </section>
  );
}
