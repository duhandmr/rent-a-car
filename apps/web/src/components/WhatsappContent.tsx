import Image from "next/image";
import styles from "./whatsapp-content.module.scss";
import wpIcon from "../../public/premium-wp.png";

export default function WhatsappContent() {
  return (
    <div className={styles.noteContainer}>
      <p className={styles.note}>
        *Please contact via Whatsapp for rental, price offer and information.
      </p>
      <a
        href="https://wa.me/000000000000"
        target="_blank"
        rel="noreferrer"
        className={styles.whatsFab}
        aria-label="WhatsApp contact"
      >
        <Image
          src={wpIcon}
          alt="WhatsApp"
          width={72}
          height={72}
          className={styles.whatsIcon}
        />
      </a>
    </div>
  );
}
