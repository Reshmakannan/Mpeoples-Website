import React, { useEffect, useRef } from "react";
import "../Style/lifeat.css";

import img1 from "../assets/blog1.jpg";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog1.jpg";
import img4 from "../assets/blog2.png";
import img5 from "../assets/blog2.png";
import img6 from "../assets/blog2.png";
import img7 from "../assets/blog2.png";
import img8 from "../assets/blog2.png";
import img9 from "../assets/blog2.png";
import img10 from "../assets/blog2.png";

const rowOne = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const rowTwo = [img6, img7, img8, img9, img10, img1, img2, img3, img4, img5];

const LifeAtMpeoples = () => {
  const trackLeftRef = useRef(null);
  const trackRightRef = useRef(null);

  useEffect(() => {
    let posLeft = 0;
    let posRight = 0;
    const speed = 0.5;
    let animId;

    const animate = () => {
      const leftTrack = trackLeftRef.current;
      const rightTrack = trackRightRef.current;

      if (!leftTrack || !rightTrack) return;

      const halfLeft = leftTrack.scrollWidth / 2;
      const halfRight = rightTrack.scrollWidth / 2;

      // Row 1 moves LEFT
      posLeft -= speed;
      if (Math.abs(posLeft) >= halfLeft) posLeft = 0;
      leftTrack.style.transform = `translateX(${posLeft}px)`;

      // Row 2 moves RIGHT
      posRight += speed;
      if (posRight >= halfRight) posRight = 0;
      rightTrack.style.transform = `translateX(${-halfRight + posRight}px)`;

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="lam-wrapper">

      {/* HEADER */}
      <div className="lam-header">
        <h1 className="lam-title">Life at Mpeoples</h1>
        <p className="lam-desc">
          We believe in a culture built on collaboration, creativity, and growth.
          Every day at Mpeoples is an opportunity to learn, connect, and thrive together.
        </p>
      </div>

      {/* CAROUSEL ROW 1 — moves LEFT */}
      <div className="lam-carousel-wrapper">
        <div className="lam-fade-left" />
        <div className="lam-fade-right" />
        <div className="lam-carousel">
          <div className="lam-track" ref={trackLeftRef}>
            {[...rowOne, ...rowOne].map((src, i) => (
              <div className="lam-card" key={`left-${i}`}>
                <img src={src} alt={`Life at Mpeoples ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CAROUSEL ROW 2 — moves RIGHT */}
      <div className="lam-carousel-wrapper">
        <div className="lam-fade-left" />
        <div className="lam-fade-right" />
        <div className="lam-carousel">
          <div className="lam-track" ref={trackRightRef}>
            {[...rowTwo, ...rowTwo].map((src, i) => (
              <div className="lam-card" key={`right-${i}`}>
                <img src={src} alt={`Life at Mpeoples ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default LifeAtMpeoples;