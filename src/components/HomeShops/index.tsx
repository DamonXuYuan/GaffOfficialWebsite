import React from "react";
import styles from "./style.module.scss";
import RedSection from "./RedSection";
import GarySection from "./GarySection";
import Footer from "../Footer";

const HomeShops: React.FC = () => {
  return (
    <section className={styles.homeShops}>
      <RedSection />
      <GarySection />
      <Footer />
    </section>
  );
};

export default HomeShops;
