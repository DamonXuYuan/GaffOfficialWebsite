import React from "react";
import styles from "./style.module.scss";
import cs from "classnames";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Item, list } from "./RedSection";

const GarySection: React.FC = () => {
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
  return (
    <section className={styles.garySection}>
      <div className={styles.content}>
        <div className={styles.detail}>
          <div className={styles.left}>
            <div className={styles.infoItem}>·SHE WOLF DINER（渋谷店</div>
            <div className={styles.infoItem}>·撒椒小酒館（大久保店）</div>
            <div className={styles.infoItem}>·座·撒椒（渋谷東武ホテル店）</div>
            <div className={styles.infoItem}>·黔　荘　貴州牛羊粉</div>
            <div className={styles.infoItem}>·天府火鍋巷子</div>
          </div>
          <div className={styles.right}>
            <div className={styles.infoItem}>·楊国府麻辣湯（神保町店）</div>
            <div className={styles.infoItem}>·楊国府麻辣湯（池袋西口店</div>
            <div className={styles.infoItem}>·炉ノ鳥（銀座店）</div>
          </div>
        </div>
      </div>
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

export default GarySection;
