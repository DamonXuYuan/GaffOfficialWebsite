import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { Carousel } from "antd";
import img from "@/assets/img/banner.png";
import arrowIcon from "@/assets/img/arrowIcon.png";
import nextIcon from "@/assets/img/nextIcon.png";
import { shopList } from "@/pages/ShopProfile";
import { useNavigate } from "react-router-dom";

export interface Item {
  imgUrl: string;
  name: string;
}
export const list: Item[] = [
  {
    imgUrl: img,
    name: "店铺1",
  },
  {
    imgUrl: img,
    name: "店铺2",
  },
  {
    imgUrl: img,
    name: "店铺3",
  },
  {
    imgUrl: img,
    name: "店铺4",
  },
  {
    imgUrl: img,
    name: "店铺5",
  },
  {
    imgUrl: img,
    name: "店铺6",
  },
  {
    imgUrl: img,
    name: "店铺7",
  },
  {
    imgUrl: img,
    name: "店铺8",
  },
  {
    imgUrl: img,
    name: "店铺9",
  },
  {
    imgUrl: img,
    name: "店铺10",
  },
  {
    imgUrl: img,
    name: "店铺11",
  },
  {
    imgUrl: img,
    name: "店铺12",
  },
];

const RedSection: React.FC = () => {
  const navigate = useNavigate();
  const [newList, setNewList] = useState<any>([]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const res = groupBy(shopList, isMobile ? 1 : 3);
      setNewList(res);
    };

    // 初始化
    handleResize();

    // 监听窗口变化
    window.addEventListener("resize", handleResize);

    // 清理
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shopList]); // 依赖 shopList，当数据变化时也重新计算

  const groupBy = (arr: any, size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  return (
    <section className={styles.redSection}>
      <div className={styles.content}>
        <div className={styles.title}>店舗展示</div>
        <div className={styles.carouselSection}>
          <Carousel
            arrows
            autoplay
            draggable
            dots={false}
            autoplaySpeed={5000}
            prevArrow={<img src={arrowIcon} alt="arrow" />}
            nextArrow={<img src={nextIcon} alt="next" />}
          >
            {newList.map((item: any, index: number) => {
              return (
                <div key={index} className={styles.carouselItem}>
                  {item.map((ite: any, ind: number) => {
                    return (
                      <div
                        key={ind}
                        className={styles.item}
                        onClick={() => {
                          navigate(`/shopProfile#${String(ite.id)}`);
                        }}
                      >
                        <div className={styles.img}>
                          <img src={ite.imgs?.[7]} alt="" />
                        </div>
                        <div className={styles.name}>{ite.name}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RedSection;
