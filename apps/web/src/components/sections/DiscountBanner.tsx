import Image from "next/image";
import styles from "./discount-banner.module.scss";

export default function DiscountBanner() {
  return (
    <section className={styles.wrap} aria-label="Discount">
      <div>
        <Image
          src="/indirim.png" // apps/web/public/indirim.png
          alt=""
          width={1200} // ↙ kendi görselinin piksel ölçüleri
          height={400}
          sizes="100vw"
          className={styles.img}
          style={{ width: "100%", height: "auto" }} // %100 genişlik
        />
      </div>
    </section>
  );
}
