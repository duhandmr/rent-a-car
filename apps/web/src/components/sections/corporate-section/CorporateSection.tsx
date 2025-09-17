import styles from "./corporate-section.module.scss";
import CorporateBuilding from "./CorporateBuilding";
import CorporateForm from "./CorporateForm";
import CorporateHeader from "./CorporateHeader";

export default function CorporateSection() {
  return (
    <section className={styles.wrap} aria-label="Corporate car rental form">
      <div className="container">
        <div className={styles.panel}>
          <CorporateBuilding />
          <CorporateHeader
            title="CORPORATE CAR RENTAL"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat magna at pretium eleifend. Proin hendrerit ultricies nisl, in aliquam sem convallis quis. In hac habitasse platea dictumst."
          />
          <CorporateForm />
        </div>
      </div>
    </section>
  );
}
