"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./vehicle-grid.module.scss";

type VehicleDetail = {
  id: string;
  brand: string;
  model: string;
  imageUrl?: string;
  description?: string;
  pricePerDay?: number;
  transmission?: string;
  fuel?: string;
  seats?: number;
};

export default function VehicleDetailsSheet() {
  const search = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const id = search.get("vehicle");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<VehicleDetail | null>(null);

  const base = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    (async () => {
      try {
        // backend’den çek; yoksa basit fallback
        const res = base
          ? await fetch(`${base}/vehicles/${id}`, { cache: "no-store" })
          : null;
        const json = res && res.ok ? await res.json() : null;
        setData(
          json ?? {
            id,
            brand: "Vehicle",
            model: id,
            imageUrl: "/placeholder-car.jpg",
            description: "Details…",
          }
        );
      } catch {
        setData({
          id,
          brand: "Vehicle",
          model: id,
          imageUrl: "/placeholder-car.jpg",
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [id, base]);

  const close = () => {
    const p = new URLSearchParams(Array.from(search.entries()));
    p.delete("vehicle");
    router.push(`${pathname}?${p.toString()}`, { scroll: false });
  };

  if (!id) return null;

  return (
    <div
      className={styles.sheetBackdrop}
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.sheetClose}
          onClick={close}
          aria-label="Close"
        >
          ✕
        </button>
        {loading ? (
          <div className={styles.sheetLoading}>Loading…</div>
        ) : data ? (
          <>
            <img
              src={data.imageUrl || "/placeholder-car.jpg"}
              alt=""
              className={styles.sheetImg}
            />
            <h3 className={styles.sheetTitle}>
              {data.brand} {data.model}
            </h3>
            {data.description && (
              <p className={styles.sheetDesc}>{data.description}</p>
            )}
            {data.pricePerDay && (
              <p className={styles.sheetPrice}>
                <strong>{data.pricePerDay} ₺</strong> / day
              </p>
            )}
          </>
        ) : (
          <p className={styles.sheetLoading}>Not found.</p>
        )}
      </div>
    </div>
  );
}
