import React from "react";
import "../Style/saassbs.css";

import inventory from "../assets/intern_1 2.png";
import trapLeft from "../assets/left-corner.png";
import trapRight from "../assets/right-corner.png";

const services = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "We build high-performance mobile apps with seamless user experience and scalable technology.",
    position: "top-left",
  },
  {
    id: 2,
    title: "SaaS UI/UX Design",
    description:
      "We design intuitive and user-friendly SaaS interfaces that improve usability and product adoption.",
    position: "top-right",
  },
  {
    id: 3,
    title: "Cloud SaaS Application Development",
    description:
      "We develop secure and scalable cloud-based SaaS applications for reliable performance and growth.",
    position: "bottom-left",
  },
  {
    id: 4,
    title: "SaaS Maintenance & Support",
    description:
      "We provide continuous updates, monitoring, and support to keep your SaaS platform running smoothly.",
    position: "bottom-right",
  },
];

export default function SaassbsServices() {
  return (
    <section className="saassbs-section">

      <div className="saassbs-wrapper">

        {/* Header */}
        <div className="saassbs-header">
          <h1 className="saassbs-main-heading">
            SaaS Development Services We Provide
          </h1>
          <p className="saassbs-taglines">
            Idea to SaaS. Build to Scale.
          </p>
        </div>

        {/* Layout */}
        <div className="saassbs-layout">

          <div className="saash-divider"></div>
          <div className="saasv-divider"></div>

          {/* Center */}
          <div className="saascenter-circle">
            <img src={inventory} alt="logo" className="saassbs-logo-img" />
          </div>

          {/* Cards */}
          {services.map((service) => (
            <div
              key={service.id}
              className={`saassbs-card ${service.position}`}
            >
              <h3 className="saassbs-card-title">
                {service.title}
              </h3>

              <p className="saassbs-card-descs">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hwd-cta">
          <button className="saashwd-btn-primary">
            Let's Build Together ↗
          </button>

          <button className="saashwd-btn-ghost">
            Free Consultation ↗
          </button>
        </div>

      </div>

      {/* Decorations */}
      <img src={trapLeft} alt="" className="trap-left" />
      <img src={trapRight} alt="" className="trap-right" />

    </section>
  );
}