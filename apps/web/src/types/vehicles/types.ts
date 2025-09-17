export type Vehicle = {
  id: string;
  slug: string;
  brand: string;
  model: string;
  imageUrl?: string;
  category: "economy" | "prestige" | "premium" | "corporate" | string;
  pricePerDay: number;
  transmission?: "auto" | "manual";
  fuel?: "gasoline" | "diesel" | "hybrid" | "electric";
  seats?: number;
  bigSuitcases?: number;
  airbagPassenger?: boolean;
  abs?: boolean;
};

export type VehiclesResponse = {
  items: Vehicle[];
  total: number;
};
