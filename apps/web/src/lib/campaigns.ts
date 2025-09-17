import "server-only";
import { notFound } from "next/navigation";
import type { Campaign, CampaignsResponse } from "../types/campaigns/types";
import { fakeCampaigns } from "@/data/fakeCampaigns";

/** Liste: ilk 2 fake + backend */
export async function getCampaigns(params?: { page?: number; per?: number }) {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  const page = params?.page ?? 1;
  const per = params?.per ?? 12;

  let backendItems: Campaign[] = [];
  let total = 0;

  if (base) {
    const qs = new URLSearchParams({
      page: String(page),
      per: String(Math.max(0, per - 2)),
    });
    try {
      const res = await fetch(`${base}/campaigns?${qs.toString()}`, {
        cache: "no-store",
      });
      if (res.ok) {
        const data = (await res.json()) as CampaignsResponse;
        backendItems = data.items ?? [];
        total = (data.total ?? backendItems.length) + fakeCampaigns.length;
      }
    } catch {
      // backend yoksa sessiz geç
    }
  }

  const items = [...fakeCampaigns.slice(0, 2), ...backendItems];
  return { items, total: total || items.length };
}

/** Tekil: fake varsa ondan, yoksa backend */
export async function getCampaign(idOrSlug: string): Promise<Campaign> {
  const fromFake = fakeCampaigns.find(
    (c) => c.id === idOrSlug || c.slug === idOrSlug
  );
  if (fromFake) return fromFake;

  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) return notFound();

  const res = await fetch(`${base}/campaigns/${encodeURIComponent(idOrSlug)}`, {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  const data = (await res.json()) as Campaign;
  if (!data) return notFound();
  return data;
}
