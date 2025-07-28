import React from "react";
import styles from "./style.module.scss";
import cs from "classnames";
import logo from "@/assets/img/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className={styles.header}>
      <div className={styles.content}>
        <div
          className={styles.logoSection}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.menuSection}>
          <div
            className={cs(
              styles.menuItem,
              location?.pathname === "/" && styles.active
            )}
            onClick={() => {
              navigate("/");
            }}
          >
            ホームページ
          </div>
          <div
            className={cs(
              styles.menuItem,
              location?.pathname === "/companyProfile" && styles.active
            )}
            onClick={() => {
              navigate("/companyProfile");
            }}
          >
            会社概要
          </div>
          <div
            className={cs(
              styles.menuItem,
              location?.pathname === "/shopProfile" && styles.active
            )}
            onClick={() => {
              navigate("/shopProfile");
            }}
          >
            店舗紹介
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
