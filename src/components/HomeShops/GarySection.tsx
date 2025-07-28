import React from "react";
import styles from "./style.module.scss";

const GarySection: React.FC = () => {
  return (
    <section className={styles.garySection}>
      <div className={styles.content}>
        <div className={styles.detail}>
          <div className={styles.left}>
            <div className={styles.infoItem}>·SHE WOLF DINER（渋谷店</div>
            <div className={styles.infoItem}>·撒椒小酒館（大久保店）</div>
            <div className={styles.infoItem}>·座·撒椒（渋谷東武ホテル店）</div>
            <div className={styles.infoItem}>·黔　荘　貴州牛羊粉</div>
            <div className={styles.infoItem}>·天府火鍋巷子</div>
          </div>
          <div className={styles.right}>
            <div className={styles.infoItem}>·楊国府麻辣湯（神保町店）</div>
            <div className={styles.infoItem}>·楊国府麻辣湯（池袋西口店</div>
            <div className={styles.infoItem}>·炉ノ鳥（銀座店）</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarySection;
