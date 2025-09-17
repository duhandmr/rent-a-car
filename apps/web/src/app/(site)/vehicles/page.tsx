import styles from "./vehicles-page.module.scss";
import CategoryTabs from "@/components/vehicles/CategoryTabs";
import VehicleDetailsSheet from "@/components/vehicles/VehicleDetailsSheet";
import VehicleGrid from "@/components/vehicles/VehicleGrid";
import { getVehicles } from "@/lib/vehicles";
import wpIcon from "../../../../public/premium-wp.png";
import Image from "next/image";
import WhatsappContent from "@/components/WhatsappContent";

export const metadata = { title: "Vehicles | Rent-a-Car" };
export const revalidate = 0; // her istek taze (istersen 120 yap)

type Props = { searchParams: { category?: string; vehicle?: string } };

export default async function VehiclesPage({ searchParams }: Props) {
  const category = searchParams.category ?? "economy";
  const { items, total } = await getVehicles({ category, per: 12 });

  return (
    <main className={styles.main}>
      <div className="container">
        <CategoryTabs active={category} />
        <VehicleGrid items={items} />
        <WhatsappContent />
      </div>

      {/* Detay modalı: ?vehicle=id varsa client tarafı açar */}
      <VehicleDetailsSheet />
    </main>
  );
}
