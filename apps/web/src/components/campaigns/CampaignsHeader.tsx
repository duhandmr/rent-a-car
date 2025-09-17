import styles from "./campaigns-header.module.scss";

export default function CampaignsHeader() {
  return (
    <div className={styles.topContainer}>
      <h1 className={styles.heading}>CAMPAIGNS</h1>
      <p className={styles.note}>
        *Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
        magna at pretium eleifend.
      </p>
    </div>
  );
}
