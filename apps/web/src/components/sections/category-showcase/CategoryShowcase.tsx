"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { Item } from "../../../types/category-showcase/types";
import styles from "./category-showcase.module.scss";

import Carousel from "./Carousel";
import Controls from "./Controls";
import { useEmblaProgress } from "./useEmblaProgress";
import CategoryHeader from "./CategoryHeader";
import CategoryCTA from "./CategoryCTA";

export default function CategoryShowcase({
  title = "ECONOMIC",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat magna at pretium eleifend. Proin hendrerit ultricies nisl, in aliquam sem convallis quis. In hac habitasse platea dictumst.",
  ctaLabel = "View Details",
  items: incomingItems,
  loop = false,
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  items?: Item[];
  loop?: boolean;
}) {
  const items = useMemo<Item[]>(
    () =>
      incomingItems ?? [
        { name: "Polo", slug: "vw-polo-red", image: "/polo.png" },
        { name: "Megane", slug: "renault-meg1", image: "/polo.png" },
        { name: "Megane", slug: "renault-meg2", image: "/polo.png" },
        { name: "Golf", slug: "vw-polo-blue", image: "/polo.png" },
        { name: "Polo1", slug: "vw-polo-red1", image: "/polo.png" },
        { name: "Megane1", slug: "renault-meg3", image: "/polo.png" },
        { name: "Megane2", slug: "renault-meg4", image: "/polo.png" },
        { name: "Golf2", slug: "vw-polo-blue1", image: "/polo.png" },
      ],
    [incomingItems]
  );

  const [selected, setSelected] = useState(0);

  // Embla init (parent'ta tutuyoruz ki bütün alt bileşenler erişsin)
  const [viewportRef, emblaApi] = useEmblaCarousel({
    loop,
    align: "center",
    slidesToScroll: 1,
  });

  // progress için hook
  const fillRef = useEmblaProgress(emblaApi);

  // seçili slide senk
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const selectedHref = `/cars/${encodeURIComponent(
    items[selected]?.slug || ""
  )}`;

  return (
    <section className={styles.wrap} aria-label={`${title} showcase`}>
      <div className="container">
        <CategoryHeader title={title} description={description} />

        <Carousel
          items={items}
          selected={selected}
          onSelectIndex={setSelected}
          viewportRef={viewportRef}
          emblaApi={emblaApi}
        />

        <Controls emblaApi={emblaApi} fillRef={fillRef} />

        <CategoryCTA href={selectedHref} label={ctaLabel} />
      </div>
    </section>
  );
}
