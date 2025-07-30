import React, { useState } from "react";
import styles from "./style.module.scss";
import cs from "classnames";
import logo from "@/assets/img/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Popup } from "antd-mobile";

import meneIcon from "@/assets/img/mobileMenu.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
        {/* 移动端Menu按钮 */}
        <div className={styles.mobileMenu}>
          <img
            src={meneIcon}
            alt="menu"
            className={styles.menuIcon}
            onClick={() => setShowMobileMenu(true)}
          />
          <Popup
            visible={showMobileMenu}
            onMaskClick={() => {
              setShowMobileMenu(false);
            }}
            onClose={() => {
              setShowMobileMenu(false);
            }}
            position="top"
            bodyClassName={styles.mobileMenuPopup}
          >
            <div
              className={cs(
                styles.menuItem,
                location?.pathname === "/" && styles.active
              )}
              onClick={() => {
                navigate("/");
                setShowMobileMenu(false);
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
                setShowMobileMenu(false);
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
                setShowMobileMenu(false);
              }}
            >
              店舗紹介
            </div>
          </Popup>
        </div>
      </div>
    </section>
  );
};

export default Header;
