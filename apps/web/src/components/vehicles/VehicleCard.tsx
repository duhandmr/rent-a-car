import Image from "next/image";
import Link from "next/link";
import styles from "./vehicle-card.module.scss";
import type { Vehicle } from "../../types/vehicles/types";

const ICONS = {
  seats: "/vehicles-page/group.png",
  suitcase: "/vehicles-page/suitcase.svg",
  airbag: "/vehicles-page/airbag.svg",
  abs: "/vehicles-page/abs.svg",
  fuel: "/vehicles-page/oil.svg",
  gear: "/vehicles-page/vites.svg",
} as const;

export default function VehicleCard({ v }: { v: Vehicle }) {
  const specs = [
    { icon: ICONS.seats, text: `${v.seats ?? 5} adults` },
    { icon: ICONS.suitcase, text: `${v.bigSuitcases ?? 2} big suitcases` },
    { icon: ICONS.airbag, text: "Passenger airbag" },
    { icon: ICONS.abs, text: "ABS" },
    {
      icon: ICONS.fuel,
      text: v.fuel ? v.fuel[0].toUpperCase() + v.fuel.slice(1) : "Gasoline",
    },
    {
      icon: ICONS.gear,
      text: v.transmission === "auto" ? "Automatic" : "Manual",
    },
  ];

  return (
    <div className={styles.cardItem}>
      <article className={styles.card}>
        <header className={styles.header}>
          {v.brand} {v.model}
        </header>

        <div className={styles.media}>
          <Image
            src={v.imageUrl || "/placeholder-car.jpg"}
            alt={`${v.brand} ${v.model}`}
            width={520}
            height={260}
            className={styles.img}
          />
        </div>

        {/* İki sütun: sol ikonlar, sağ metinler */}
        <section className={styles.specs} aria-label="Vehicle specs">
          <ul className={styles.iconCol}>
            {specs.map((s, i) => (
              <li key={i} className={styles.iconItem}>
                <Image
                  src={s.icon}
                  alt="" // dekoratif → boş alt
                  width={18}
                  height={18}
                  className={styles.icon}
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
          <ul className={styles.textCol}>
            {specs.map((s, i) => (
              <li key={i} className={styles.textItem}>
                {s.text}
              </li>
            ))}
          </ul>
        </section>
      </article>

      <Link
        href={`/vehicles?vehicle=${encodeURIComponent(v.id)}`}
        className={styles.ctaExternal}
      >
        Button
      </Link>
    </div>
  );
}
