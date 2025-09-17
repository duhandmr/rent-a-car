import Image from "next/image";

import styles from "./mobile-banner.module.scss";

export default function MobileBanner() {
  return (
    <Image
      src="/mobile/mobile-banner.png"
      alt=""
      width={550}
      height={290}
      className={styles.img} // ← responsiv hale getir
      sizes="(max-width: 960px) 100vw, 550px"
      priority
    />
  );
}
