import React, { useEffect } from "react";
import styles from "./style.module.scss";
import cs from "classnames";
import Footer from "@/components/Footer";

import banner from "@/assets/img/companyProfileBanner.jpg";

const CompanyProfile: React.FC = () => {
  useEffect(() => {
    // 页面加载时滚动到顶部
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.companyProfile}>
      <div className={styles.banner}>
        <img src={banner} alt="banner" />
      </div>
      {/* 会社概要 */}
      <div className={styles.aboutSection}>
        <div className={styles.content}>
          <div className={styles.title}>会社概要</div>
          <div className={styles.subTitle}>
            标语标语标语标语标语标语标语标语标语标语
          </div>
          <div className={styles.text}>
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容，
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容，
            内容内容内容内容内容内容内容内
          </div>
          <div className={styles.detail}>
            <div className={styles.left}>
              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>会社名：　</span>
                <span className={styles.infoText}>株式会社gaff</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>所在地：</span>
                <span className={styles.infoText}>
                  東京都豊島区東池袋３－１３－１２ー７０８号
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>設立日：</span>
                <span className={styles.infoText}>２０２０年３月１３日</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>代表取締役：</span>
                <span className={styles.infoText}>黄斌</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>従業員数：</span>
                <span className={styles.infoText}>約９０名</span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>事業内容：</span>
                <span className={styles.infoText}>飲食店の運営</span>
              </div>
              <div className={styles.infoItem}>
                <span className={cs(styles.infoTitle, styles.opcity)}>
                  事業内容：
                </span>
                <span className={styles.infoText}>飲食店舗の運営サポート</span>
              </div>
              <div className={styles.infoItem}>
                <span className={cs(styles.infoTitle, styles.opcity)}>
                  事業内容：
                </span>
                <span className={styles.infoText}>
                  食料品等の輸出入及び販売
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={cs(styles.infoTitle, styles.opcity)}>
                  事業内容：
                </span>
                <span className={styles.infoText}>不動産関連事業</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CompanyProfile;
