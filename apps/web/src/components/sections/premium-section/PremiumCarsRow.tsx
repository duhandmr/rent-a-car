import Image from "next/image";
import styles from "./premium-section.module.scss";

import redCar from "../../../../public/car-red.png";
import blueCar from "../../../../public/car-blue.png";

export default function PremiumCarsRow() {
  return (
    <div className={styles.carsRow}>
      <Image
        src={redCar}
        alt="Premium red coupe"
        className={styles.car}
        priority
      />
      <Image src={blueCar} alt="Premium blue sedan" className={styles.car} />
    </div>
  );
}
