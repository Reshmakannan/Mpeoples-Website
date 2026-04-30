import React from "react";
import "../Style/Heroo.css";
import logo from "../assets/Vector.png";
import skyline from "../assets/skyline.png";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";

function Hero() {
  return (
    <section className="home">
      <div className="home-container">
        <img src={logo} alt="logo" className="home-logo" />

        <h1 className="main-heading">
          Smart Design. Seamless Experience. Strong Results.
        </h1>

        <p className="description">
          We help businesses transform ideas into intuitive digital products
          through user-focused design and scalable development.
        </p>

        <p className="sub-text">Empowering Businesses with MPeoples</p>

        <div className="button-group">
          <button className="btn primary-btn">
            Start your project <FiArrowUpRight className="icon" />
          </button>

          <button className="btn secondary-btn">
            Book a free call <FiPhone className="icon" />
          </button>
        </div>

        <img src={skyline} alt="skyline" className="bottom-svg" />
      </div>
    </section>
  );
}

export default Hero;
