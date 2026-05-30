import React from "react";
import "../Style/videosbs.css";

import inventory from "../assets/intern_1 2.png";
import trapLeft from "../assets/left-corner.png";
import trapRight from "../assets/right-corner.png";

const services = [
  {
    id: 1,
    title: "Discovery",
    description:
      "Understanding your goals, audience, and market to craft the right video strategy—covering planning, stakeholder discussions, research, and execution flow.",
    position: "top-left",
  },
  {
    id: 2,
    title: "Pre-Production",
    description:
      "Planning every detail to ensure a smooth and successful shoot. Includes scriptwriting, storyboarding, casting, location setup, scheduling, and prop preparation.",
    position: "top-right",
  },
  {
    id: 3,
    title: "Production",
    description:
      "Executing the shoot and bringing your vision to life. Includes set setup, camera and lighting, directing, filming, sound recording, and visual effects.",
    position: "bottom-left",
  },
  {
    id: 4,
    title: "Post-Production",
    description:
      "Transforming raw footage into a polished final output. Includes video editing, sound mixing, colour grading, graphics, music, and VFX integration.",
    position: "bottom-right",
  },
];

export default function videosbsServices() {
  return (
    <section className="videosbs-section">
      <img src={trapLeft} alt="" className="trap-left" />

      {/* Right trapezoid */}
      <img src={trapRight} alt="" className="trap-right" />

      <div className="videosbs-wrapper">
        {/* Header */}
        <div className="videosbs-header">
          <h1 className="videosbs-main-heading">
            Our Video Production Process
          </h1>
          <p className="videosbs-taglines">Vision to Video. Built to Engage.</p>
        </div>

        {/* Layout */}
        <div className="videosbs-layout">
          <div className="videoh-divider"></div>
          <div className="videov-divider"></div>

          {/* Center */}
          <div className="videocenter-circle">
            <img src={inventory} alt="logo" className="videosbs-logo-img" />
          </div>

          {/* Cards */}
          {services.map((service) => (
            <div
              key={service.id}
              className={`videosbs-card ${service.position}`}
            >
              <h3 className="videosbs-card-title">{service.title}</h3>

              <p className="videosbs-card-descs">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hwd-cta">
          <button className="videohwd-btn-primary">
            Let's Build Together ↗
          </button>

          <button className="videohwd-btn-ghost">Free Consultation ↗</button>
        </div>
      </div>
    </section>
  );
}
