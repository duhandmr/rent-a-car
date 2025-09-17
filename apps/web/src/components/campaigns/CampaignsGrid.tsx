import styles from "./campaign-grid.module.scss";
import CampaignCard from "./CampaignCard";
import type { Campaign } from "../../types/campaigns/types";

export default function CampaignGrid({ items }: { items: Campaign[] }) {
  if (!items?.length) return <p>No campaigns yet.</p>;
  return (
    <div className={styles.grid}>
      {items.map((c) => (
        <CampaignCard key={c.id} c={c} />
      ))}
    </div>
  );
}
