import React from "react";
import styles from "./style.module.scss";
import logo from "@/assets/img/logoFooter.png";
import cs from "classnames";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.lists}>
          <div className={styles.listItem}>
            <div className={styles.title}>ショートカット</div>
            <div className={styles.item} onClick={() => navigate("/")}>
              ホームページ
            </div>
            <div
              className={styles.item}
              onClick={() => {
                navigate("/companyProfile");
              }}
            >
              会社概要
            </div>
            <div
              className={styles.item}
              onClick={() => {
                navigate("/shopProfile");
              }}
            >
              店舗紹介
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.title}>店舗</div>
            <div className={styles.item}>SHE WOLF DINER（渋谷店）</div>
            <div className={styles.item}>撒椒小酒館（大久保店）</div>
            <div className={styles.item}>座·撒椒（渋谷東武ホテル店）</div>
            <div className={styles.item}>黔荘貴州牛羊粉</div>
            <div className={styles.item}>天府火鍋巷子</div>
            <div className={styles.item}>楊国府麻辣湯（神保町店）</div>
            <div className={styles.item}>楊国府麻辣湯（池袋西口店）</div>
            <div className={styles.item}>炉ノ鳥（銀座店）</div>
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
