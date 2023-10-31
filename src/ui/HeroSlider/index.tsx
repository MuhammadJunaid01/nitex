import styles from "./style.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import { IHero } from "../../lib/interface";
const HeroSlider: React.FC<IHero> = ({ slideData }) => {
  return (
    <section className="hero-section">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slideData.map((slider) => (
          <SwiperSlide
            key={slider.id}
            style={{ backgroundImage: `url(${slider.image})` }}
            className={styles.slideContent}
          >
            <div className="container">
              <h2 className={styles.slideHeading}>{slider.title}</h2>
              <p className={styles.slideSubTitle}>{slider.subTitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
