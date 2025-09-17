import styles from "./vehicle-grid.module.scss";
import type { Vehicle } from "../../types/vehicles/types";
import VehicleCard from "./VehicleCard";

export default function VehicleGrid({ items }: { items: Vehicle[] }) {
  return (
    <div className={styles.grid}>
      {items.map((v) => (
        <VehicleCard key={v.id} v={v} />
      ))}
    </div>
  );
}
