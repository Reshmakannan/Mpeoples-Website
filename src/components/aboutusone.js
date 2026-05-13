import React from "react";
import "../Style/aboutusone.css";

import missionImg from "../assets/mission.png";
import visionImg from "../assets/vision.png";

const CompanyAbout = () => {
  return (
    <section className="companyabout-section">
      <div className="companyabout-wrapper">

        {/* Heading */}
        <div className="companyabout-header">
          <h2 className="companyabout-title">About Us</h2>
          <p className="companyabout-subtitle">
            At MPeoples, we turn ideas into powerful software solutions.
            We build impactful products and deliver services that help
            businesses grow. Let's transform your vision into reality.
          </p>
        </div>

        {/*
          Mission row — Image LEFT, Text RIGHT
          Image corners: top-left ✓  top-right ✓  bottom-right ✗(join)  bottom-left ✓
        */}
        <div className="companyabout-row companyabout-mission-row">

          <div className="companyabout-image-box">
            <img src={missionImg} alt="Mission" className="companyabout-image" />
          </div>

          <div className="companyabout-text-box">
            <h3 className="companyabout-card-title">Our Mission</h3>
            <p className="companyabout-description">
              At MPeoples, our mission is to empower businesses with
              smart, scalable software solutions that drive real growth.
              We create user-friendly products that solve real problems
              and deliver value. With innovation and a customer-first
              approach, we build technology businesses can trust.
            </p>
          </div>

        </div>

        {/*
          Vision row — Text LEFT, Image RIGHT
          Image corners: top-left ✗(join)  top-right ✓  bottom-right ✓  bottom-left ✓
        */}
        <div className="companyabout-row companyabout-vision-row">

          <div className="companyabout-text-box">
            <h3 className="companyabout-card-title">Our Vision</h3>
            <p className="companyabout-description">
              We aim to lead with innovation and technology.
              Our focus is to deliver scalable digital solutions that
              transform businesses and drive growth.
              By setting high standards in quality, we shape the future
              of smart technology.
            </p>
          </div>

          <div className="companyabout-image-box">
            <img src={visionImg} alt="Vision" className="companyabout-image" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyAbout;