import React from "react";
import "../Style/Dmfuture.css";

import Aimage from "../assets/A.png";
import Dimage from "../assets/D.png";
import pimage from "../assets/P.png";
import mimage from "../assets/M.png";
import cimage from "../assets/C.png";

const Dmfuture = [
  {
    id: 1,
    icon: Aimage,
    alt: "AI-Powered Marketing Strategies",
    title: "AI-Powered Marketing Strategies",
    text: "AI-driven insights help us understand trends and optimize campaigns for better targeting.",
    row: "top",
  },
  {
    id: 2,
    icon: Dimage,
    alt: "Data-Driven Decision Making",
    title: "Data-Driven Decision Making",
    text: "We use data and analytics to track campaign performance and continuously improve marketing strategies.",
    row: "top",
  },
  {
    id: 3,
    icon: pimage,
    alt: "Personalized Customer Experiences",
    title: "Personalized Customer Experiences",
    text: "We create personalized marketing campaigns that connect with customers based on their interests and preferences.",
    row: "top",
  },
  {
    id: 4,
    icon: mimage,
    alt: "Multi-Platform Brand Presence",
    title: "Multi-Platform Brand Presence",
    text: "Our strategies ensure consistent brand visibility and engagement across digital platforms.",
    row: "bottom-left",
  },
  {
    id: 5,
    icon: cimage,
    alt: "Continuous Growth & Optimization",
    title: "Continuous Growth & Optimization",
    text: "Digital marketing is continuous—we monitor campaigns and optimize strategies for long-term growth.",
    row: "bottom-right",
  },
];

const Dmfuturee = () => {
  return (
    <section className="dmfuture-main-section">
      <div className="dmfuture-main-container">
        {/* Heading */}
        <h1 className="dmfuture-main-title">
          The Future of Digital Marketing Services
        </h1>

        {/* Delivered by */}
        <p className="dmfuture-subtitle-label">Delivered by MPeoples</p>

        {/* Description */}
        <p className="dmfuture-main-description">
          Digital marketing is constantly evolving with new technologies,
          platforms, and consumer behaviors. At MPeoples, we adopt modern
          strategies and innovative tools to help businesses stay ahead of the
          competition, reach the right audience, and achieve sustainable digital
          growth.
        </p>

        {/* Cards Grid */}
        <div className="dmfuture-card-grid">
          {/* Top row — 3 cards */}
          {Dmfuture.filter((s) => s.row === "top").map((service) => (
            <div key={service.id} className="dmfuture-service-card">
              <div className="dmfuture-card-header">
                <img
                  src={service.icon}
                  alt={service.alt}
                  className="dmfuture-card-icon"
                />
                <h3 className="dmfuture-card-title">{service.title}</h3>
              </div>
              <p className="dmfuture-card-text">{service.text}</p>
            </div>
          ))}

          {/* Bottom row — 2 cards */}
          <div className="dmfuture-service-card dmfuture-card-bottom-left">
            <div className="dmfuture-card-header">
              <img
                src={mimage}
                alt="Mobile-First & Responsive Design"
                className="dmfuture-card-icon"
              />
              <h3 className="dmfuture-card-title">
                Multi-Platform Brand Presence
              </h3>
            </div>
            <p className="dmfuture-card-text">
              Our strategies ensure consistent brand visibility and engagement
              across digital platforms.
            </p>
          </div>

          <div className="dmfuture-service-card dmfuture-card-bottom-right">
            <div className="dmfuture-card-header">
              <img
                src={cimage}
                alt="Usability Testing & Optimization"
                className="dmfuture-card-icon"
              />
              <h3 className="dmfuture-card-title">
                Continuous Growth & Optimization
              </h3>
            </div>
            <p className="dmfuture-card-text">
              Digital marketing is continuous—we monitor campaigns and optimize
              strategies for long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dmfuturee;
