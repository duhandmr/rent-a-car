"use client";
import Image from "next/image";
import styles from "./category-showcase.module.scss";
import type { Item } from "../../../types/category-showcase/types";
import type { EmblaCarouselType } from "embla-carousel";

export default function Carousel({
  items,
  selected,
  onSelectIndex,
  viewportRef,
  emblaApi,
}: {
  items: Item[];
  selected: number;
  onSelectIndex: (i: number) => void;
  viewportRef: (node: HTMLDivElement | null) => void;
  emblaApi?: EmblaCarouselType | null;
}) {
  const goTo = (i: number) => {
    onSelectIndex(i);
    if (emblaApi) emblaApi.scrollTo(i);
  };

  return (
    <div className={styles.viewport} ref={viewportRef}>
      <div className={styles.container}>
        {items.map((it, i) => (
          <div
            key={it.slug}
            className={`${styles.slide} ${i === selected ? styles.active : ""}`}
            role="button"
            tabIndex={0}
            aria-selected={i === selected}
            onClick={() => goTo(i)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && goTo(i)}
          >
            <div className={styles.imgWrap}>
              <Image
                src={it.image || "/placeholder-car.jpg"}
                alt={it.name}
                width={500}
                height={260}
                sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 25vw"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
            <div className={styles.caption}>{it.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
