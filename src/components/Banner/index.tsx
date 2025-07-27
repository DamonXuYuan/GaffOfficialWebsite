import React from "react";
import styles from "./style.module.scss";
import logo from "@/assets/img/bannerLogo.png";
import { Button } from "antd";

const Banner: React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span className={styles.name}>株式会社gaff</span>
        <Button className={styles.btn}>クリックして見る</Button>
      </div>
    </section>
  );
};

export default Banner;
