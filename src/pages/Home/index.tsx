import React, { useEffect } from "react";
import styles from "./style.module.scss";
import Banner from "../../components/Banner";
import HomeShops from "@/components/HomeShops";

const Home: React.FC = () => {
  useEffect(() => {
    // 页面加载时滚动到顶部
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.home}>
      <Banner />
      <HomeShops />
    </section>
  );
};

export default Home;
