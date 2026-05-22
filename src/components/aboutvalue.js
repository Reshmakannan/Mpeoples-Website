import React from "react";
import "../Style/aboutvalue.css";

const pillars = [
  {
    title: "Strong Foundation",
    description:
      "We ensure every project starts with clear understanding, solid planning, and the right tools. From research to execution, we build on a strong base to deliver quality results.",
  },
  {
    title: "Proactive Approach",
    description:
      "We identify challenges early and take action before they become problems. Our team focuses on smart planning, continuous feedback, and efficient execution.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We constantly learn, adapt, and improve. By analyzing performance and user feedback, we enhance our products and services to deliver better outcomes.",
  },
  {
    title: "Reliable Support",
    description:
      "We stay committed even after delivery. We provide ongoing support, updates, and improvements to ensure long-term success for our clients.",
  },
];

const AboutValue = () => {
  return (
    <section className="about-value">
      <div className="about-value__container">
        <h1 className="about-value__heading">
          At MPeoples, technology is more than what we build – it's how we
          think, create, and deliver value.
        </h1>

        <p className="about-value__intro">
          Our approach is driven by a simple belief: the right technology can
          solve real problems and create meaningful impact. Through innovation,
          design, and development, we build software solutions that are
          reliable, scalable, and user-focused.
        </p>

        <p className="about-value__pillars-label">
          Our way of working is built on four key pillars
        </p>

        <div className="about-value__pillars">
          {pillars.map((pillar, index) => (
            <div className="about-value__pillar" key={index}>
              <h2 className="about-value__pillar-title">{pillar.title}</h2>
              <p className="about-value__pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValue;