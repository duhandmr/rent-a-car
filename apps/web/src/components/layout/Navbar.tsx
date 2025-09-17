"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

const LEFT = [
  { href: "/", label: "HOME" },
  { href: "/vehicles", label: "VEHICLES" },
  { href: "/campaigns", label: "CAMPAIGNS" },
  { href: "/about", label: "ABOUT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  // route değişince menüyü kapat
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  // menü açıkken body scroll kilidi
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className={styles.wrap}>
      <div className="container">
        <nav className={styles.nav} aria-label="Main">
          {/* sol boş/brand alanı (gerekirse logo koyarsın) */}
          <div className={styles.brand} />

          {/* Orta: masaüstü menü */}
          <ul className={styles.menu}>
            {LEFT.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${
                    isActive(item.href) ? styles.active : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Sağ: dil + hamburger */}
          <div className={styles.right}>
            <div className={styles.lang}>
              <Link href="#" className={`${styles.link} ${styles.active}`}>
                EN
              </Link>
            </div>

            <button
              type="button"
              className={`${styles.burgerBtn} ${open ? styles.open : ""}`}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={toggle}
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <aside
        id="mobile-drawer"
        className={`${styles.drawer} ${open ? styles.show : ""}`}
        aria-hidden={!open}
      >
        <ul className={styles.mMenu}>
          {LEFT.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.mLink} ${
                  isActive(item.href) ? styles.mActive : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className={styles.mLangRow}>
            <Link href="#" className={`${styles.mLink} ${styles.mLang}`}>
              EN
            </Link>
          </li>
        </ul>
      </aside>

      {/* Backdrop */}
      <button
        type="button"
        className={`${styles.backdrop} ${open ? styles.show : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
    </div>
  );
}
