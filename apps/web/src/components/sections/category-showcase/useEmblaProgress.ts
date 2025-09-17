"use client";
import { useCallback, useEffect, useRef } from "react";
import type { EmblaCarouselType } from "embla-carousel";

export function useEmblaProgress(emblaApi?: EmblaCarouselType | null) {
  const fillRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const setProgress = useCallback(() => {
    if (!emblaApi || !fillRef.current) return;
    const p = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    fillRef.current.style.width = `${p * 100}%`;
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      setProgress();
      rafRef.current = null;
    });
  }, [setProgress]);

  useEffect(() => {
    if (!emblaApi) return;
    setProgress();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", setProgress);
    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", setProgress);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [emblaApi, onScroll, setProgress]);

  return fillRef;
}
