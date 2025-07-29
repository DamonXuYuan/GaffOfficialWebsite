import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import logo from "@/assets/img/bannerLogo.png";
import { Button } from "antd";
import cs from "classnames";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

const Banner: React.FC = () => {
  const navigate = useNavigate();
  const images = [1, 2, 3];
  const [selectedIndex, setSelectedIndex] = useState(0); // 用 state 管理选中索引
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 25, // 滚动动画速度
    },
    [Autoplay({ delay: 5000 })] // 5秒自动切换
  );
  // 生成 dot
  const scrollSnaps = emblaApi?.scrollSnapList() || [];

  // 当 emblaApi 初始化后，监听 select 事件
  useEffect(() => {
    if (!emblaApi) return;

    // 初始化时设置一次
    setSelectedIndex(emblaApi.selectedScrollSnap());

    // 监听轮播切换
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className={styles.banner}>
      <div className={styles.embla}>
        {/* 轮播图 */}
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {images.map((src, index) => (
              <div className={styles.embla__slide} key={index} />
            ))}
          </div>
        </div>

        {/* 自定义 dot 导航 */}
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              // className={`embla__dot${
              //   index === selectedIndex ? " embla__dot--active" : ""
              // }`}
              className={cs(
                styles.embla__dot,
                index === selectedIndex ? styles.embla__dotActive : ""
              )}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span className={styles.name}>株式会社gaff</span>
        <Button
          className={styles.btn}
          onClick={() => {
            navigate("/companyProfile");
          }}
        >
          クリックして見る
        </Button>
      </div>
    </section>
  );
};

export default Banner;
