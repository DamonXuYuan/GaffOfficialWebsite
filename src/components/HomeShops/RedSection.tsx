import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { Carousel } from "antd";
import img from "@/assets/img/banner.png";
import arrowIcon from "@/assets/img/arrowIcon.png";
import nextIcon from "@/assets/img/nextIcon.png";
import cs from "classnames";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

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
      <div className={styles.title}>店舗展示</div>
      {/* <div className={styles.carouselSection}>
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
        </div> */}
      <div className={styles.emblaList}>
        <div className={styles.embla} ref={emblaRef1}>
          <div className={cs(styles.embla__container, styles.embla__rtl)}>
            {list.map((item: Item, index: number) => {
              return (
                <div
                  key={index}
                  className={cs(styles.item, styles.embla__slide)}
                >
                  <div className={styles.img}>
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <div className={styles.name}>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.embla} ref={emblaRef2}>
          <div className={styles.embla__container}>
            {list.map((item, index) => (
              <div key={index} className={cs(styles.item, styles.embla__slide)}>
                <div className={styles.img}>
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className={styles.name}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedSection;
