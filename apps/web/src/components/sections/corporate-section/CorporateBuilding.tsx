import Image from "next/image";
import styles from "./corporate-section.module.scss";
import building from "../../../../public/building.png";

export default function CorporateBuilding() {
  return (
    <div className={styles.building}>
      <Image src={building} alt="" priority className={styles.buildingImg} />
    </div>
  );
}
