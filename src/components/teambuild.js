import React from "react";
import "../Style/teambuild.css";

export default function TeamBuild() {
  return (
    <section className="teambuild-section">
      <div className="teambuild-container">

        <h2 className="teambuild-title">
          At MPeoples, technology is more than what we build — it’s how we think, create, and deliver value.
        </h2>

        <p className="teambuild-description">
          Our approach is driven by a simple belief: the right technology can solve real problems and create meaningful impact.
          Through innovation, design, and development, we build software solutions that are reliable, scalable, and user-focused.
        </p>

        <div className="teambuild-points">

          <div className="teambuild-item">
            <h3>Strong Foundation</h3>
            <p>
              We ensure every project starts with clear understanding, solid planning, and the right tools.
              From research to execution, we build on a strong base to deliver quality results.
            </p>
          </div>

          <div className="teambuild-item">
            <h3>Proactive Approach</h3>
            <p>
              We identify challenges early and take action before they become problems.
              Our team focuses on smart planning, continuous feedback, and efficient execution.
            </p>
          </div>

          <div className="teambuild-item">
            <h3>Continuous Improvement</h3>
            <p>
              We constantly learn, adapt, and improve. By analyzing performance and user feedback,
              we enhance our products and services to deliver better outcomes.
            </p>
          </div>

          <div className="teambuild-item">
            <h3>Reliable Support</h3>
            <p>
              We stay committed even after delivery. We provide ongoing support, updates,
              and improvements to ensure long-term success for our clients.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}