export type Campaign = {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  shortDesc: string;
  discountPercent?: number;
  startDate?: string;
  endDate?: string;
  termsUrl?: string;
};

export type CampaignsResponse = {
  items: Campaign[];
  total: number;
};
