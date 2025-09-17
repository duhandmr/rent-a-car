import Image from "next/image";
import Link from "next/link";
import styles from "./campaign-card.module.scss";
import type { Campaign } from "../../types/campaigns/types";

export default function CampaignCard({ c }: { c: Campaign }) {
  const desc =
    c.shortDesc ??
    `Don’t miss ${c.title}. Enjoy exclusive rent-a-car advantages.`;

  return (
    <div className={styles.cardItem}>
      <article className={styles.card}>
        {/* Başlık */}
        <header className={styles.header}>{c.title}</header>

        {/* Fotoğraf */}
        <div className={styles.media}>
          <Image
            src={c.imageUrl || "/placeholder-car.jpg"}
            alt={c.title}
            width={560}
            height={320}
            className={styles.img}
            sizes="(max-width: 420px) 100vw, 375px"
            priority={false}
          />
        </div>

        {/* Açıklama */}
        <div className={styles.descBox}>
          <p className={styles.descText}>{desc}</p>
        </div>
      </article>

      {/* BUTON: article DIŞINDA ama karta bağlı */}
      <Link
        href={`/campaigns/${encodeURIComponent(c.slug || c.id)}`}
        className={styles.ctaExternal}
        aria-label={`View ${c.title}`}
      >
        Button
      </Link>
    </div>
  );
}
