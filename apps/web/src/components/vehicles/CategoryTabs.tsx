"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./category-tabs.module.scss";

const CATS = [
  { label: "ECONOMIC", value: "economy" },
  { label: "PRESTIGE", value: "prestige" },
  { label: "PREMIUM", value: "premium" },
];

export default function CategoryTabs({ active }: { active: string }) {
  const sp = useSearchParams();
  const buildHref = (val: string) => {
    const p = new URLSearchParams(sp.toString());
    p.set("category", val);
    return `/vehicles?${p.toString()}`;
  };

  return (
    <>
      <nav className={styles.tabs} aria-label="Vehicle categories">
        {CATS.map((c) => (
          <Link
            key={c.value}
            href={buildHref(c.value)}
            className={`${styles.tab} ${
              active === c.value ? styles.active : ""
            }`}
          >
            {c.label}
          </Link>
        ))}
      </nav>
      <p className={styles.tabDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
        magna at pretium eleifend. Proin hendrerit ultricies nisl, in aliquam
        sem convallis quis. In hac habitasse platea dictumst.
      </p>
    </>
  );
}
