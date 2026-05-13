import React from "react";
import "../Style/Gdccc.css";

import under from "../assets/understanding.png";
import research from "../assets/research.png";
import design from "../assets/design.png";
import client from "../assets/client.png";
import final from "../assets/final.png";
import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png"; 

function Gdccc() {
  return (
    <section className="gdccc">
      <div className="gdccc-container">

        <img src={trapLeft} alt="" className="trap-left" />
        <img src={trapRight} alt="" className="trap-right" />

        <h2 className="gdccc-title">Graphic Design Services We Provide</h2>
        <p className="gdccc-subtitle">Create. Communicate. Captivate.</p>

        {/* TOP ROW */}
        <div className="gdccc-row top">
          <div className="gdccc-card">
            <img src={under} alt="" />
            <h3>Understanding the Requirement</h3>
            <p>
              We start by understanding your business goals and design needs to create visuals that align with your brand vision.
            </p>
          </div>

          <div className="gdccc-card">
            <img src={research} alt="" />
            <h3>Research & Concept Planning</h3>
            <p>
              Our team studies the target audience, market trends, and competitors to develop creative concepts that align with your brand identity.
            </p>
          </div>

          <div className="gdccc-card">
            <img src={design} alt="" />
            <h3>Design Creation</h3>
            <p>
              Our designers turn ideas into visual designs using colors, typography, and graphics to create impactful and effective results.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="gdccc-divider"></div>

        {/* BOTTOM ROW */}
        <div className="gdccc-row bottom">
          <div className="gdccc-card">
            <img src={client} alt="" />
            <h3>Client Review & Refinement</h3>
            <p>
              We share design concepts for client feedback and refine them based on suggestions to meet expectations.
            </p>
          </div>

          <div className="gdccc-card">
            <img src={final} alt="" />
            <h3>Final Delivery</h3>
            <p>
              After approval, we deliver the final design files in formats ready for both digital and print use.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="gdccc-cta">
          <button className="gdccc-btn">
            Let’s Build Together <span>↗</span>
          </button>

          <div className="gdccc-free">
            Free consultation
            <div className="gdccc-circle">↗</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Gdccc;