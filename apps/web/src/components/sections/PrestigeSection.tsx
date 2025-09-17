import Image from "next/image";
import styles from "./prestige-section.module.scss";

import carLeft from "../../../public/car-left.png"; // beyaz araba (sol/üst)
import carBlack from "../../../public/car-right.png"; // siyah araba (sağ/alt)

export default function PrestigeSection() {
  return (
    <section className={styles.wrap} aria-label="Prestige">
      <div className="container">
        <h2 className={styles.title}>PRESTIGE</h2>

        <div className={styles.stage}>
          {/* ÜST SATIR: 2 kolon (sol: beyaz araba, sağ: desc) */}
          <div className={styles.topRow}>
            <Image src={carLeft} alt="" priority className={styles.leftCar} />
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              feugiat magna at pretium eleifend. Proin hendrerit ultricies nisl,
              in aliquam sem convallis quis. In hac habitasse platea dictumst.
            </p>
          </div>

          {/* ALT SATIR (AYNI DİV İÇİNDE): 2 kolon (sol: buton, sağ: siyah araba) */}
          <div className={styles.bottomRow}>
            <div>
              <p className={styles.buttonDesc}>
                * Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className={styles.cta} type="button">
                Button
              </button>
            </div>

            <Image src={carBlack} alt="" className={styles.rightCar} />
          </div>
        </div>
      </div>
    </section>
  );
}
