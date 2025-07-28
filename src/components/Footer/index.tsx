import React from "react";
import styles from "./style.module.scss";
import logo from "@/assets/img/logoFooter.png";
import cs from "classnames";

const Footer: React.FC = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.lists}>
          <div className={styles.listItem}>
            <div className={styles.title}>ショートカット</div>
            <div className={styles.item}>ホームページ</div>
            <div className={styles.item}>会社概要</div>
            <div className={styles.item}>店舗紹介</div>
            <div className={styles.item}>パートナー</div>
            <div className={styles.item}>求人情報</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.title}>店舗</div>
            <div className={styles.item}>ホームページ</div>
            <div className={styles.item}>会社概要</div>
            <div className={styles.item}>店舗紹介</div>
            <div className={styles.item}>パートナー</div>
            <div className={styles.item}>求人情報</div>
          </div>
          <div className={cs(styles.listItem, styles.noPointer)}>
            <div className={styles.title}>連絡先</div>
            <div className={styles.item}>xxxxxx</div>
            <div className={styles.item}>xxxxxx</div>
            <div className={styles.item}>xxxxxx</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
