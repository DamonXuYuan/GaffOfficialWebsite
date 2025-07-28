import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { Carousel } from "antd";
import img from "@/assets/img/banner.png";
import arrowIcon from "@/assets/img/arrowIcon.png";
import nextIcon from "@/assets/img/nextIcon.png";
interface Item {
  imgUrl: string;
  name: string;
}

const RedSection: React.FC = () => {
  const [list] = useState<Item[]>([
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
  ]);
  const [newList, setNewList] = useState<any>([]);

  useEffect(() => {
    const res = groupBy(list, 3);
    setNewList(res);
  }, [list]);

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
                      <div key={ind} className={styles.item}>
                        <div className={styles.img}>
                          <img src={ite.imgUrl} alt="" />
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
