import CampaignGrid from "@/components/campaigns/CampaignsGrid";
import styles from "./campaigns-page.module.scss";
import CampaignsHeader from "@/components/campaigns/CampaignsHeader";
import { getCampaigns } from "@/lib/campaigns";
import WhatsappContent from "@/components/WhatsappContent";

export const metadata = {
  title: "Campaigns | Rent-a-Car",
  description: "Current rental campaigns and promotions.",
};

export const revalidate = 0;

export default async function CampaignsPage() {
  const { items, total } = await getCampaigns({ per: 12 });

  return (
    <main className={styles.main}>
      <div className="container">
        <header className={styles.header}>
          <CampaignsHeader />
          <span className={styles.total}>{total} results</span>
        </header>

        <CampaignGrid items={items} />
        <WhatsappContent />
      </div>
    </main>
  );
}
