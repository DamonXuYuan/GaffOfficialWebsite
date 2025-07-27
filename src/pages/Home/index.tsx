import React from "react";
import styles from "./style.module.scss";
import Banner from "../../components/Banner";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Banner />
    </div>
  );
};

export default Home;
