import React from "react";
import styles from "./style.module.scss";
import logo from "@/assets/img/logoFooter.png";
import cs from "classnames";
import { useNavigate } from "react-router-dom";
import { shopList } from "@/pages/ShopProfile";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.lists}>
          <div className={styles.listItem}>
            <div
              className={cs(styles.item, styles.noMr)}
              onClick={() => navigate("/")}
            >
              ホームページ
            </div>
            <div
              className={cs(styles.item, styles.noMr)}
              onClick={() => {
                navigate("/companyProfile");
              }}
            >
              会社概要
            </div>
            <div
              className={cs(styles.item, styles.noMr)}
              onClick={() => {
                navigate("/shopProfile#1");
              }}
            >
              店舗紹介
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.title}>店舗</div>
            {shopList.map((item, index) => {
              return (
                index < shopList.length / 2 && (
                  <div
                    className={styles.item}
                    key={index}
                    onClick={() => {
                      navigate(`/shopProfile#${String(item.id)}`);
                    }}
                  >
                    {item.name}
                  </div>
                )
              );
            })}
          </div>
          <div className={cs(styles.listItem)}>
            <div className={cs(styles.title, styles.opcity)}>店舗</div>
            {shopList.map((item, index) => {
              return (
                index >= shopList.length / 2 && (
                  <div
                    className={styles.item}
                    key={index}
                    onClick={() => {
                      navigate(`/shopProfile#${String(item.id)}`);
                    }}
                  >
                    {item.name}
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
