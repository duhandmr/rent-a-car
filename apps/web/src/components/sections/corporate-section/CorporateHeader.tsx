import styles from "./corporate-section.module.scss";

export default function CorporateHeader({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </>
  );
}
