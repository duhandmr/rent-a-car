import Image from "next/image";

import styles from "./mobile-discount.module.scss";

export default function MobileDiscount() {
  return (
    <div className={styles.wrap}>
      <div className={styles.textContainer}>
        <p className={styles.text}>15% discount for the first rental.</p>
        <span className={styles.desc}>
          Special pricing is applied for long-term rentals.
        </span>
      </div>
      <Image
        src="/mobile/mobile-discount.png"
        alt=""
        width={550}
        height={290}
        className={styles.img} // ← responsiv hale getir
        sizes="(max-width: 960px) 100vw, 550px"
        priority
      />
    </div>
  );
}
