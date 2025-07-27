import React from "react";
import styles from "./style.module.scss";
import logo from "@/assets/img/bannerLogo.png";

const Banner: React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span className={styles.name}>株式会社gaff</span>
      </div>
    </section>
  );
};

export default Banner;
