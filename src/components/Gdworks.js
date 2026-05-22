// DigitalWorks.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "../Style/Gdworks.css";

import img1 from "../assets/gdworks-1.png";
import img2 from "../assets/gdworks-2.png";
import img3 from "../assets/gdworks-3.png";
import img4 from "../assets/gdworks-4.png";
import img5 from "../assets/gdworks-5.png";

const images = [img1, img2, img3, img4, img5];
const allSlides = [...images, ...images, ...images];

const GdWorks = () => {
  return (
    <section className="gdworks-section">
      <div className="gdworks-header">
        <h2 className="gdworks-title">Our Graphic Design Works</h2>
        <p className="gdworks-desc">
          We created visually engaging graphics that communicate the brand
          message clearly. Our designs improved
          <br />
          brand recognition and attracted more audience attention.
        </p>
      </div>

      <div className="gdworks-slider-wrapper">
        {/* TOP WAVE */}
        <div className="gdworks-wave gdworks-wave--top" aria-hidden="true" />

        <Swiper
          modules={[FreeMode]}
          freeMode={{ enabled: true, momentum: true }}
          grabCursor={true}
          slidesPerView="auto"
          spaceBetween={14}
          centeredSlides={true}
          initialSlide={7}
          className="gdworks-swiper"
        >
          {allSlides.map((img, i) => {
            const pos = i % 5;
            const isLeft = pos === 0;
            const isRight = pos === 4;

            return (
              <SwiperSlide
                key={i}
                className={[
                  "gdworks-slide",
                  isLeft ? "gdworks-slide--left" : "",
                  isRight ? "gdworks-slide--right" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="gdworks-card">
                  <img
                    src={img}
                    alt={`work-${(i % 5) + 1}`}
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* BOTTOM WAVE */}
        <div className="gdworks-wave gdworks-wave--bottom" aria-hidden="true" />
      </div>

      <div className="gdworks-btn-wrap">
        <button className="gdworks-btn">
          Let's Build Together
          <span className="gdworks-btn-icon">↗</span>
        </button>
      </div>
    </section>
  );
};

export default GdWorks;
