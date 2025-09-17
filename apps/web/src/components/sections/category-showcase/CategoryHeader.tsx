"use client";
import styles from "./category-showcase.module.scss";

export default function CategoryHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{description}</p>
    </header>
  );
}
