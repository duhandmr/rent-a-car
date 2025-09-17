import type { Campaign } from "@/types/campaigns/types";

export const fakeCampaigns: Campaign[] = [
  {
    id: "cmp-1",
    slug: "summer-sale",
    title: "20% DISCOUNT ON SELECTED HOTELS",
    imageUrl: "/campaigns-page/firstcampaign.png",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus, lorem nec blandit finibus, massa mi ultrices leo, nec gravida tortor velit id tellus. Quisque accumsan orci vitae nisi auctor rutrum.",
    discountPercent: 25,
    startDate: "2025-06-01",
    endDate: "2025-09-30",
    termsUrl: "/terms/summer-sale",
  },
  {
    id: "cmp-2",
    slug: "weekend-deal",
    title: "IN THE POCKET OF THE CAR WITH THE APPLICATION",
    imageUrl: "/campaigns-page/secondcampaign.png",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus, lorem nec blandit finibus, massa mi ultrices leo, nec gravida tortor velit id tellus. Quisque accumsan orci vitae nisi auctor rutrum.",
    discountPercent: 100, // “1 gün bedava” gibi düşün
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    termsUrl: "/terms/weekend-deal",
  },
  {
    id: "cmp-2",
    slug: "weekend-deal",
    title: "Weekend Deal",
    imageUrl: "/campaigns-page/thirdcampaign.png",
    shortDesc: "Cuma–Pazartesi arası kiralamalarda ekstra gün hediye.",
    discountPercent: 100, // “1 gün bedava” gibi düşün
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    termsUrl: "/terms/weekend-deal",
  },
];
