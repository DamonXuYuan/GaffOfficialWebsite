import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import cs from "classnames";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { shopList } from "@/pages/ShopProfile";

const GarySection: React.FC = () => {
  const [imgList, setImgList] = useState<string[]>([]);
  const [emblaRef1] = useEmblaCarousel(
    {
      axis: "x",
      loop: true,
      duration: 100,
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true, // 初始化时开始滚动
        speed: 1,
        stopOnInteraction: false, // 用户拖动后不停止
        stopOnMouseEnter: true, // 鼠标悬停时暂停
      }),
    ]
  );
  const [emblaRef2] = useEmblaCarousel(
    {
      axis: "x",
      loop: true,
      duration: 100,
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.8,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        direction: "backward",
      }),
    ]
  );
  useEffect(() => {
    let list: string[] = [];
    shopList.forEach((item) => {
      item.imgs.forEach((ite, ind) => {
        if (ind !== 0 && ind !== 2 && ind !== 6 && ind !== 7) list.push(ite);
      });
    });
    setImgList(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shopList]);
  return (
    <section className={styles.garySection}>
      <div className={styles.content}>
        <div className={styles.detail}>
          <div className={styles.left}>
            {shopList.map((item, index) => {
              return (
                index < shopList.length / 2 && (
                  <div className={styles.infoItem} key={`left${index}`}>
                    {item?.name}
                  </div>
                )
              );
            })}
          </div>
          <div className={styles.right}>
            {shopList.map((item, index) => {
              return (
                index >= shopList.length / 2 && (
                  <div className={styles.infoItem} key={`right${index}`}>
                    {item?.name}
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.emblaList}>
        <div className={styles.embla} ref={emblaRef1}>
          <div className={cs(styles.embla__container, styles.embla__rtl)}>
            {imgList.map((item: string, index: number) => {
              return (
                <div
                  key={index}
                  className={cs(styles.item, styles.embla__slide)}
                >
                  <div className={styles.img}>
                    <img src={item} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.embla} ref={emblaRef2}>
          <div className={styles.embla__container}>
            {imgList.map((item, index) => (
              <div key={index} className={cs(styles.item, styles.embla__slide)}>
                <div className={styles.img}>
                  <img src={item} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarySection;
