import React from "react";
import "../Style/Webprocess.css";

const Webprocess = () => {
  return (
    <section className="webprocess-section">
      <div className="webprocess-container">

        {/* HEADER */}
        <div className="webprocess-header">
          <div className="webprocess-title">
            <h1>
              Our Process from <br /> Design to Launch
            </h1>
          </div>

          <div className="webprocess-subtext">
            <p>
              We infuse your essence into every pixel, seamlessly integrating
              technology to elevate your digital presence.
            </p>
          </div>
        </div>

        <div className="webprocess-divider"></div>

        {/* CONTENT */}
        <div className="webprocess-content">

          {/* LEFT */}
          <div className="webprocess-left">
            <span className="webprocess-step">Step-1</span>

            <h2 className="webprocess-heading">
              Domain & Website Setup
            </h2>

            <p className="webprocess-description">
              We begin by registering your domain and setting up the
              foundation for your website to ensure a strong digital presence.
            </p>
          </div>

          {/* RIGHT */}
          <div className="webprocess-right">

            <div className="webprocess-block">
              <h3>Client Benefits</h3>
              <ul>
                <li>Professional domain registration</li>
                <li>Secure hosting setup</li>
                <li>Reliable website foundation</li>
              </ul>
            </div>

            <div className="webprocess-small-divider"></div>

            <div className="webprocess-block">
              <h3>Our Approach</h3>
              <ul>
                <li>Brand-focused domain selection</li>
                <li>Proper DNS & server configuration</li>
                <li>Secure and scalable setup</li>
              </ul>
            </div>

          </div>
        </div>

        {/* CSS SHAPES (NO IMAGES) */}
        <div className="webprocess-shape-left"></div>
        <div className="webprocess-shape-right"></div>

      </div>
    </section>
  );
};

export default Webprocess;