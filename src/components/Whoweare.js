import React from "react";
import "../Style/Whoweare.css";
import astronautImg from "../assets/astronaut.png";

export default function WhoWeAre() {
  return (
    <section className="wwa-section">
      <h1 className="wwa-title">Who We Are</h1>

      <div className="wwa-cards-row">

        {/* LEFT CARD — astronaut image only, no stats */}
        <div className="wwa-card-left">
          <img src={astronautImg} alt="Astronaut" className="wwa-card-img" />
        </div>

        {/* RIGHT CARD — dark navy text */}
        <div className="wwa-card-right">
          <h2 className="wwa-card-heading">
            Building Digital Solutions for Growing Businesses
          </h2>

          <hr className="wwa-card-divider-line" />

          <p className="wwa-card-para">
            MPeoples helps startups and enterprises transform ideas into
            powerful digital products. From UX strategy to final deployment,
            we focus on clarity, performance, and long-term business growth.
          </p>
        </div>

      </div>

      {/* TIMELINE */}
      <div className="wwa-timeline-wrapper">
        <div className="wwa-timeline">

          <div className="wwa-timeline-line"></div>

          <div className="wwa-timeline-item wwa-top-item">
            <span className="wwa-year">2023</span>
            <div className="wwa-dot"></div>
            <p className="wwa-label">Start</p>
          </div>

          <div className="wwa-timeline-item wwa-bottom-item">
            <span className="wwa-year">2024</span>
            <div className="wwa-dot"></div>
            <p className="wwa-label">Foundation &amp; Vision</p>
          </div>

          <div className="wwa-timeline-item wwa-top-item">
            <span className="wwa-year">2025</span>
            <div className="wwa-dot"></div>
            <p className="wwa-label">
              Product Launch &amp; Market Entry
            </p>
          </div>

          <div className="wwa-timeline-item wwa-bottom-item">
            <span className="wwa-year">2026</span>
            <div className="wwa-dot"></div>
            <p className="wwa-label">Growth &amp; Innovation</p>
          </div>

        </div>
      </div>

    </section>
  );
}