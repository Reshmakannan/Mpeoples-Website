// DigitalWorks.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "../Style/Dmworks.css";

import img1 from "../assets/gdworks-1.png";
import img2 from "../assets/gdworks-2.png";
import img3 from "../assets/gdworks-3.png";
import img4 from "../assets/gdworks-4.png";
import img5 from "../assets/gdworks-5.png";

const images = [img1, img2, img3, img4, img5];
const allSlides = [...images, ...images, ...images];

const DigitalWorks = () => {
  return (
    <section className="dw-section">
      <div className="dw-header">
        <h2 className="dw-title">Our Digital marketing Works</h2>
        <p className="dw-desc">
          We create strategic digital marketing campaigns that communicate your
          brand message clearly.
          <br />
          Our campaigns improve brand visibility and attract the right audience
          to your business.
        </p>
      </div>

      <div className="dw-slider-wrapper">

        {/* TOP WAVE */}
        <div className="dw-wave dw-wave--top" aria-hidden="true" />

        <Swiper
          modules={[FreeMode]}
          freeMode={{ enabled: true, momentum: true }}
          grabCursor={true}
          slidesPerView="auto"
          spaceBetween={14}
          centeredSlides={true}
          initialSlide={7}
          className="dw-swiper"
        >
          {allSlides.map((img, i) => {
            const pos = i % 5;
            const isLeft = pos === 0;
            const isRight = pos === 4;

            return (
              <SwiperSlide
                key={i}
                className={[
                  "dw-slide",
                  isLeft ? "dw-slide--left" : "",
                  isRight ? "dw-slide--right" : "",
                ].filter(Boolean).join(" ")}
              >
                <div className="dw-card">
                  <img src={img} alt={`work-${(i % 5) + 1}`} draggable={false} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* BOTTOM WAVE */}
        <div className="dw-wave dw-wave--bottom" aria-hidden="true" />
      </div>

      <div className="dw-btn-wrap">
        <button className="dw-btn">
          Let's Build Together
          <span className="dw-btn-icon">↗</span>
        </button>
      </div>
    </section>
  );
};

export default DigitalWorks;