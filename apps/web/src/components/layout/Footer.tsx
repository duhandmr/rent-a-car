import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* SOL SÜTUN */}
          <section aria-labelledby="footer-vehicles">
            <h3 id="footer-vehicles" className={styles.title}>
              VEHICLES
            </h3>
            <ul className={styles.list}>
              <li>
                <Link href="/cars?category=economy">ECONOMIC</Link>
              </li>
              <li>
                <Link href="/cars?category=prestige">PRESTIGE</Link>
              </li>
              <li>
                <Link href="/cars?category=corporate">
                  CORPORATE CAR RENTAL
                </Link>
              </li>
              <li>
                <Link href="/cars?category=premium">PREMIUM</Link>
              </li>
            </ul>
          </section>

          {/* SAĞ SÜTUN */}
          <section aria-labelledby="footer-comm">
            <h3 id="footer-comm" className={styles.title}>
              COMMUNICATION
            </h3>

            <ul className={styles.list}>
              <li>
                <b>ADDRESS:</b>{" "}
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li>
                <b>TELEPHONE:</b>{" "}
                <span>
                  <a href="tel:+905554443322">555 444 33 22</a>
                </span>
              </li>

              <li>
                <b>WHATSAPP:</b>
                <span>
                  <a
                    href="https://wa.me/905554443322"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    555 444 33 22
                  </a>
                </span>
              </li>

              <li>
                <b>MAIL:</b>
                <span>
                  <a href="mailto:info@rentacar.com">info@rentacar.com</a>
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* alt ince şerit */}
      <div className={styles.bottomBar} />
    </footer>
  );
}
