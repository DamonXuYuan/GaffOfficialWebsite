import React from "react";
import styles from "./style.module.scss";

const CompanyProfile: React.FC = () => {
  return (
    <section className={styles.companyProfile}>
      <div className={styles.banner}></div>
      <div className={styles.aboutSection}>
        <div className={styles.content}>
          <div className={styles.title}>关于我们</div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
