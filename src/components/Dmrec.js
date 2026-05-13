import React from "react";
import "../Style/Dmrec.css";

import achieve from "../assets/achieve.png";
import compete from "../assets/compete.png";
import expand from "../assets/expand.png";
import convert from "../assets/convert.png";
import dedicated from "../assets/dedicated.png";
import trapLeft from "../assets/left-corner.png";
import trapRight from "../assets/right-corner.png";

function Dmrec() {
  return (
    <section className="dmrec">
      <div className="dmrec-container">
        <img src={trapLeft} alt="" className="trap-left" />
        <img src={trapRight} alt="" className="trap-right" />

        <h2 className="dmrec-title">
          Why Choose MPeoples for Digital Marketing?
        </h2>
        <p className="dmrec-subtitle">Reach. Engage. Convert.</p>

        {/* TOP ROW */}
        <div className="dmrec-row top">
          <div className="dmrec-card">
            <img src={achieve} alt="" />
            <h3>Achieve Higher ROI Faster</h3>
            <p>
              Our performance-driven strategies deliver measurable results. We
              use data-driven campaigns to maximize business growth and ROI.
            </p>
          </div>

          <div className="dmrec-card">
            <img src={compete} alt="" />
            <h3>Compete with Industry Leaders</h3>
            <p>
              With smart strategies and modern tools, we help your business
              stand out and build a strong digital presence.
            </p>
          </div>

          <div className="dmrec-card">
            <img src={expand} alt="" />
            <h3>Expand Brand Visibility</h3>
            <p>
              From local SEO to global campaigns, we help your brand reach the
              right audience and grow beyond geographical boundaries.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="dmrec-divider"></div>

        {/* BOTTOM ROW */}
        <div className="dmrec-row bottom">
          <div className="dmrec-card">
            <img src={convert} alt="" />
            <h3>Convert Visitors into Customers</h3>
            <p>
              Our strategies convert website visitors into loyal customers
              through engaging content and optimized user experiences.
            </p>
          </div>

          <div className="dmrec-card">
            <img src={dedicated} alt="" />
            <h3>Dedicated Digital Marketing Team</h3>
            <p>
              Our experienced team plans, executes, and optimizes marketing
              campaigns for consistent business growth.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="dmrec-cta">
          <button className="dmrec-btn">
            Let’s Build Together <span>↗</span>
          </button>

          <div className="dmrec-free">
            Free consultation
            <div className="dmrec-circle">↗</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dmrec;
