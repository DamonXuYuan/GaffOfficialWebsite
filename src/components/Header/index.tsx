import React, { useState } from "react";
import styles from "./style.module.scss";
import cs from "classnames";
import logo from "@/assets/img/logo.png";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const navigate = useNavigate();

  return (
    <section className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.menuSection}>
          <div
            className={cs(styles.menuItem, activeMenu === 1 && styles.active)}
            onClick={() => {
              setActiveMenu(1);
              navigate("/");
            }}
          >
            ホームページ
          </div>
          <div
            className={cs(styles.menuItem, activeMenu === 2 && styles.active)}
            onClick={() => {
              setActiveMenu(2);
              navigate("/companyProfile");
            }}
          >
            会社概要
          </div>
          <div
            className={cs(styles.menuItem, activeMenu === 3 && styles.active)}
            onClick={() => setActiveMenu(3)}
          >
            店舗紹介
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
