import React from "react";
import styles from "./style.module.scss";
import RedSection from "./RedSection";
import GarySection from "./GarySection";

const HomeShops: React.FC = () => {
  return (
    <section className={styles.homeShops}>
      <RedSection />
      <GarySection />
    </section>
  );
};

export default HomeShops;
