"use client";
import Link from "next/link";
import styles from "./category-showcase.module.scss";

export default function CategoryCTA({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className={styles.ctaWrap}>
      <Link className={styles.cta} href={href}>
        {label}
      </Link>
    </div>
  );
}
