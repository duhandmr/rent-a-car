import "./env"; // kök .env'yi yükler
import express from "express";
import cors from "cors";
import Redis from "ioredis";
import { z } from "zod";

import { connectMongo } from "./db";
import { Vehicle } from "./models/Vehicle";
import { Reservation } from "./models/Reservation";

const app = express();
app.use(cors());
app.use(express.json());

// Bağlantılar
await connectMongo(process.env.MONGODB_URI!);
const redis = new Redis(process.env.REDIS_URL!);

app.get("/health", (_req, res) => res.json({ ok: true }));

// Arama (demo): aktif araçları döner
// Yardımcılar
function toDate(x: string) {
  return new Date(x + "T00:00:00");
}
function nights(from: Date, to: Date) {
  const ms = to.getTime() - from.getTime();
  return Math.max(1, Math.ceil(ms / 86400000));
}
// basit fiyatlandırma — kategoriye göre temel fiyat (sonra RatePlan modeline taşıyacağız)
function baseDailyByCategory(category?: string) {
  if (!category) return 1000; // default
  if (category === "economy") return 1000; // örnek
  if (category === "compact") return 1200;
  if (category === "suv") return 1800;
  return 1400;
}

app.post("/search/availability", async (req, res) => {
  const schema = z.object({
    pickup: z.string().min(2),
    from: z.string(), // 'YYYY-MM-DD'
    to: z.string(), // 'YYYY-MM-DD'
    category: z.string().optional(),
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success)
    return res.status(400).json({ error: parsed.error.issues });

  const { pickup, from, to, category } = parsed.data;
  const fromD = toDate(from);
  const toD = toDate(to);

  // 1) Bu tarih aralığında zaten hold/paid rezervasyonu olan araçların id'lerini bul
  const overlappingIds = await Reservation.distinct("vehicleId", {
    status: { $in: ["hold", "paid"] },
    // overlap mantığı: (from < rezervasyon.to) && (to > rezervasyon.from)
    from: { $lt: toD },
    to: { $gt: fromD },
  });

  // 2) Uygun araçları listele (aktif + kategori uygunsa + overlapping listede olmayan)
  const query: any = { status: "active", _id: { $nin: overlappingIds } };
  if (category) query.category = category;

  const vehicles = await Vehicle.find(query)
    .sort({ createdAt: -1 })
    .limit(50)
    .lean();

  // 3) Basit fiyatlandırma: gece sayısı * kategori baz fiyat (ileride RatePlan ile zenginleştiririz)
  const n = nights(fromD, toD);
  const results = vehicles.map((v) => {
    const daily = baseDailyByCategory(v.category);
    const total = daily * n;
    return { ...v, pricing: { nights: n, daily, total, currency: "TRY" } };
  });

  res.json({ pickup, dropoff: pickup, from, to, results });
});

// Detay
app.get("/vehicles/:slug", async (req, res) => {
  const vehicle = await Vehicle.findOne({ slug: req.params.slug }).lean();
  if (!vehicle) return res.status(404).json({ error: "Not found" });
  res.json(vehicle);
});

// Checkout kısa kilit (Redis TTL = 10 dk)
app.post("/checkout/hold", async (req, res) => {
  const schema = z.object({
    vehicleId: z.string(),
    from: z.string(),
    to: z.string(),
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success)
    return res.status(400).json({ error: parsed.error.issues });

  const { vehicleId, from, to } = parsed.data;
  const fromD = new Date(from + "T00:00:00");
  const toD = new Date(to + "T00:00:00");

  // 0) Redis hold var mı?
  const key = `hold:${vehicleId}`;
  if (await redis.exists(key))
    return res.status(409).json({ error: "Vehicle already on hold (redis)" });

  // 1) DB'de overlap rezervasyon var mı?
  const hasOverlap = await Reservation.exists({
    vehicleId,
    status: { $in: ["hold", "paid"] },
    from: { $lt: toD },
    to: { $gt: fromD },
  });
  if (hasOverlap)
    return res
      .status(409)
      .json({ error: "Vehicle already reserved for these dates" });

  // 2) Redis hold oluştur
  await redis.set(key, JSON.stringify({ vehicleId, from, to }), "EX", 600); // 10 dk
  res.json({ ok: true, holdKey: key, expiresIn: 600 });
});

const port = Number(process.env.API_PORT || 4000);
app.listen(port, () => console.log(`API listening on :${port}`));
