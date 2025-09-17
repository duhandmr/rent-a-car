import "server-only";
import type { Vehicle, VehiclesResponse } from "../types/vehicles/types";
import { fakeVehicles } from "@/data/fakeVehicles";

export async function getVehicles(params: {
  category?: string;
  page?: number;
  per?: number;
  sort?: string;
}) {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  const page = params.page ?? 1;
  const per = params.per ?? 12;
  const sort = params.sort ?? "price_asc";

  // backend
  let backendItems: Vehicle[] = [];
  let total = 0;

  if (base) {
    const qs = new URLSearchParams({
      page: String(page),
      per: String(Math.max(0, per - 2)), // fake 2 + backend (per-2)
      sort,
    });
    if (params.category) qs.set("category", params.category);
    try {
      const res = await fetch(`${base}/vehicles?${qs}`, { cache: "no-store" });
      if (res.ok) {
        const data = (await res.json()) as VehiclesResponse;
        backendItems = data.items ?? [];
        total = (data.total ?? backendItems.length) + fakeVehicles.length; // toplamı kabaca göster
      }
    } catch {
      // backend yoksa sessizce fake ile devam
    }
  }

  // ilk 2 fake önde, sonrası backend
  const items = [...fakeVehicles.slice(0, 10), ...backendItems];

  return { items, total: total || items.length };
}
