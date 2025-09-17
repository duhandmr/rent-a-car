import Image from "next/image";

import styles from "./mobile-about.module.scss";

export default function MobileImage() {
  return (
    <Image
      src="/mobile/about-toyota.png"
      alt=""
      width={550}
      height={290}
      className={styles.img}
      sizes="(max-width: 960px) 100vw, 550px"
      priority
    />
  );
}
