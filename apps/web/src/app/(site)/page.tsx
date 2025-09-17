import Link from "next/link";
import styles from "./home.module.scss";

export default async function Home() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>Aracını kolayca kirala</h1>
        <form action="/cars" method="get" className={styles.searchBox}>
          <div>
            <label>Alış Lokasyonu</label>
            <input name="pickup" placeholder="IST" required />
          </div>
          <div>
            <label>Alış Tarihi</label>
            <input type="date" name="from" required />
          </div>
          <div>
            <label>İade Tarihi</label>
            <input type="date" name="to" required />
          </div>
          <button type="submit">Ara</button>
        </form>
        <p className={styles.note}>Fiyatlar talebe göre değişebilir.</p>
        <Link href="/cars">Tüm araçlar</Link>
      </div>
    </section>
  );
}
