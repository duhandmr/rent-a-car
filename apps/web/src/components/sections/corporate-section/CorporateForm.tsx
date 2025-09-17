import styles from "./corporate-section.module.scss";

export default function CorporateForm() {
  return (
    <form className={styles.form}>
      <div className={styles.row2}>
        <input name="name" placeholder="Name" className={styles.input} />
        <input name="surname" placeholder="Sur Name" className={styles.input} />
      </div>

      <input name="phone" placeholder="Phone Number" className={styles.input} />
      <input
        name="mail"
        type="email"
        placeholder="Mail"
        className={styles.input}
      />
      <textarea
        name="context"
        placeholder="Context"
        className={styles.textarea}
      />

      <button type="submit" className={styles.submit}>
        Button
      </button>
    </form>
  );
}
