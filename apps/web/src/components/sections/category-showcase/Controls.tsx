"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./category-showcase.module.scss";
import type { EmblaCarouselType } from "embla-carousel";

export default function Controls({
  emblaApi,
  fillRef,
}: {
  emblaApi?: EmblaCarouselType | null;
  fillRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className={`${styles.slider} ${styles.fullBleed}`}>
      <button
        className={styles.arrow}
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous"
        type="button"
      >
        <ChevronLeft />
      </button>

      <div
        className={styles.progress}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div ref={fillRef} className={styles.fill} />
      </div>

      <button
        className={styles.arrow}
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next"
        type="button"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
