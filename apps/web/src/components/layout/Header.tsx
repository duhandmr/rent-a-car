import Navbar from "./Navbar";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* ÜST ŞERİT */}
      <div className={styles.topbar}>
        <div className="container">
          <div className={styles.row}>
            <Link href="/" className={styles.logo} aria-label="Logo">
              <Image
                src="/logo.png "
                alt="Logo"
                width={200} // Adjust width as needed
                height={50} // Adjust height as needed
              />
            </Link>

            <p className={styles.tagline}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <Link href="/" className={styles.whatsapp} aria-label="Whatsapp">
              <span>WHATSAPP CONTACT</span>
              <Image
                src="/wp.svg"
                alt="Logo"
                width={25} // Adjust width as needed
                height={25} // Adjust height as needed
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ALT NAV BAR */}
      <Navbar />
    </header>
  );
}
