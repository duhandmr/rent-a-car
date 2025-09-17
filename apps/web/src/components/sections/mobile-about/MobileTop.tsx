import styles from "./mobile-about.module.scss";

export default function MobileTop() {
  return (
    <div className={styles.top}>
      <p className={styles.title}>About</p>
      <span className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
        magna at pretium eleifend. Proin hendrerit ultricies nisl, in aliquam
        sem convallis quis. In hac habitasse platea dictumst.
      </span>
    </div>
  );
}
