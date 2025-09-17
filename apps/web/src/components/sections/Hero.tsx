import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* arkaplan ve overlay SCSS'te pseudo ile geliyor */}
      <div className="container">
        <h1 className={styles.title}>
          <span>COMFORTABLE AND</span>
          <span>AFFORDABLE CAR RENTAL</span>
        </h1>
      </div>
      <div className={styles.bottomBar} />
    </section>
  );
}
