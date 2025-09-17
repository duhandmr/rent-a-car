"use client";
import Image from "next/image";
import styles from "./mobile-about.module.scss";
import MobileAboutCTA from "./MobileAboutCTA";
import MobileImage from "./MobileImage";
import MobileTop from "./MobileTop";

export default function MobileAbout() {
  return (
    <div className={styles.wrap}>
      <MobileTop />

      <MobileImage />

      <MobileAboutCTA />
    </div>
  );
}
