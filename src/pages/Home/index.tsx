import React from "react";
import styles from "./style.module.scss";
import Banner from "../../components/Banner";
import HomeShops from "@/components/HomeShops";

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <Banner />
      <HomeShops />
    </section>
  );
};

export default Home;
